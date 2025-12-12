"use client";

import { useState } from "react";
import { youtubeChannels } from "@/lib/liturgical-data";
import { Radio, Clock, MapPin, Calendar, Share2, Bookmark, Send, Users, Bell } from "lucide-react";

export default function LiveStreamingPage() {
  const [selectedChannel, setSelectedChannel] = useState(0);

  const schedules = [
    {
      time: "06:00 WIB",
      title: "Misa Pagi",
      description: "Misa harian pagi untuk memulai hari dengan berkat"
    },
    {
      time: "12:00 WIB",
      title: "Doa Angelus",
      description: "Doa Angelus bersama umat di seluruh dunia"
    },
    {
      time: "18:00 WIB",
      title: "Misa Sore",
      description: "Misa harian sore untuk mengakhiri hari dengan syukur"
    },
    {
      time: "19:30 WIB",
      title: "Doa Rosario",
      description: "Doa Rosario bersama untuk kedamaian dunia"
    }
  ];

  const upcomingEvents = [
    {
      date: "Minggu, 21 Januari 2024",
      time: "08:00 WIB",
      title: "Misa Minggu Biasa ke-2",
      location: "Gereja Katedral Jakarta",
      description: "Misa Minggu dengan tema 'Panggilan Para Rasul'"
    },
    {
      date: "Rabu, 24 Januari 2024",
      time: "19:00 WIB",
      title: "Adorasi Sakramen Mahakudus",
      location: "Gereja Santo Yakobus",
      description: "Adorasi dan doa bersama di hadapan Sakramen Mahakudus"
    },
    {
      date: "Jumat, 26 Januari 2024",
      time: "15:00 WIB",
      title: "Jalan Salib",
      location: "Paroki Santo Fransiskus",
      description: "Jalan Salib untuk mengenang sengsara Yesus Kristus"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50/30 dark:from-gray-900 dark:to-red-900/10">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 dark:from-red-800 dark:via-red-900 dark:to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Radio className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Live Streaming Misa</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Ikuti misa dan kegiatan rohani secara langsung dari berbagai gereja di Indonesia
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Video Player */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdf885bf-675e-4831-8fdb-d4833f0c7e16.png" 
                alt="Live streaming misa dari Katedral Jakarta dengan altar dan umat yang sedang beribadah"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Live Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Viewers Count */}
              <div className="absolute top-6 right-6">
                <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>1,234 penonton</span>
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/70 backdrop-blur-md text-white p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-2">Misa Harian - Gereja Katedral Jakarta</h3>
                  <p className="text-gray-200 flex items-center space-x-2">
                    <Radio className="w-4 h-4" />
                    <span>Sedang berlangsung</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">Misa Harian Pagi</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dipimpin oleh Pastor Antonius • Bacaan: 1 Korintus 15:12-20, Lukas 8:1-3
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex space-x-3">
                  <button className="flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg">
                    <Share2 className="w-5 h-5" />
                    <span>Bagikan</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200">
                    <Bookmark className="w-5 h-5" />
                    <span>Simpan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Channel Selection */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                <Radio className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span>Channel Rekomendasi</span>
              </h3>
              <div className="space-y-3">
                {youtubeChannels.map((channel, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedChannel === index
                        ? "bg-red-100 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 shadow-md"
                        : "bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent"
                    }`}
                    onClick={() => setSelectedChannel(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-white">{channel.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{channel.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Jadwal Hari Ini</span>
              </h3>
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group">
                    <div className="text-emerald-700 dark:text-emerald-300 font-bold text-sm bg-emerald-100 dark:bg-emerald-900/30 px-3 py-2 rounded-lg whitespace-nowrap">
                      {schedule.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">{schedule.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{schedule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <span>Acara Mendatang</span>
              </h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-6 py-4 bg-gradient-to-r from-emerald-50/50 to-transparent dark:from-emerald-900/20 dark:to-transparent rounded-r-xl">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-semibold text-sm bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-lg">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </span>
                          <span className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-semibold text-sm bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-lg">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{event.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                          {event.location}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4">
                        <button className="flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 text-sm shadow-md hover:shadow-lg whitespace-nowrap">
                          <Bell className="w-4 h-4" />
                          <span>Ingatkan Saya</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>Chat Live</span>
              </h3>
              <div className="h-80 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-700/50 dark:to-blue-900/10 rounded-2xl p-6 overflow-y-auto mb-4 border border-gray-100 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                      M
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-800 dark:text-white">Maria S.</span>
                      <p className="text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 mt-1 shadow-sm">
                        Terima kasih untuk misa yang indah ini 🙏
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                      J
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-800 dark:text-white">Johanes P.</span>
                      <p className="text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 mt-1 shadow-sm">
                        Amin. Tuhan memberkati kita semua
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                      A
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-sm text-gray-800 dark:text-white">Agnes L.</span>
                      <p className="text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 mt-1 shadow-sm">
                        Homili yang sangat menyentuh hati
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Tulis pesan..."
                  className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                />
                <button className="flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg">
                  <Send className="w-5 h-5" />
                  <span>Kirim</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}