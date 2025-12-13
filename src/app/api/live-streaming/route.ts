import { NextRequest, NextResponse } from 'next/server';

interface YouTubeVideo {
  id: string | { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      high?: { url: string };
      maxres?: { url: string };
    };
    publishedAt: string;
  };
  liveStreamingDetails?: {
    scheduledStartTime?: string;
    actualStartTime?: string;
    actualEndTime?: string;
    concurrentViewers?: number;
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get('channelId') || 'UCYNQZL7SHKLyf6bAyHlAoTw';
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      console.warn('YouTube API key not found, returning mock data');
      return NextResponse.json({
        liveVideo: null,
        upcomingVideos: [],
        message: 'Belum ada siaran langsung'
      });
    }

    // Fetch live and upcoming videos from the channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&order=date&maxResults=10&key=${apiKey}`;

    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) {
      throw new Error(`YouTube API error: ${searchResponse.status}`);
    }

    const searchData: YouTubeResponse = await searchResponse.json();

    // Get detailed information for each video
    const videoIds = searchData.items.map(item => item.id.videoId || item.id).join(',');
    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoIds}&key=${apiKey}`;

    const videosResponse = await fetch(videosUrl);
    if (!videosResponse.ok) {
      throw new Error(`YouTube API error: ${videosResponse.status}`);
    }

    const videosData = await videosResponse.json();

    // Process the data
    const liveVideo = videosData.items.find((video: any) =>
      video.liveStreamingDetails?.actualStartTime &&
      !video.liveStreamingDetails?.actualEndTime
    );

    const upcomingVideos = videosData.items
      .filter((video: any) =>
        video.liveStreamingDetails?.scheduledStartTime &&
        !video.liveStreamingDetails?.actualStartTime
      )
      .sort((a: any, b: any) =>
        new Date(a.liveStreamingDetails.scheduledStartTime).getTime() -
        new Date(b.liveStreamingDetails.scheduledStartTime).getTime()
      )
      .slice(0, 5); // Limit to 5 upcoming videos

    const response = {
      liveVideo: liveVideo ? {
        id: liveVideo.id,
        title: liveVideo.snippet.title,
        description: liveVideo.snippet.description,
        thumbnail: liveVideo.snippet.thumbnails.maxres?.url ||
                   liveVideo.snippet.thumbnails.high?.url ||
                   liveVideo.snippet.thumbnails.default.url,
        publishedAt: liveVideo.snippet.publishedAt,
        concurrentViewers: liveVideo.liveStreamingDetails.concurrentViewers,
        actualStartTime: liveVideo.liveStreamingDetails.actualStartTime
      } : null,
      upcomingVideos: upcomingVideos.map((video: any) => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.maxres?.url ||
                   video.snippet.thumbnails.high?.url ||
                   video.snippet.thumbnails.default.url,
        publishedAt: video.snippet.publishedAt,
        scheduledStartTime: video.liveStreamingDetails.scheduledStartTime
      })),
      message: liveVideo ? null : 'Belum ada siaran langsung'
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return NextResponse.json(
      {
        liveVideo: null,
        upcomingVideos: [],
        message: 'Belum ada siaran langsung',
        error: 'Failed to fetch YouTube data'
      },
      { status: 500 }
    );
  }
}
