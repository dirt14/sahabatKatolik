"use client";

import { useState } from "react";
import { youtubeChannels } from "@/lib/liturgical-data";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Streaming Misa</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Ikuti misa dan kegiatan rohani secara langsung dari berbagai gereja di Indonesia
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Video Player */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-900 relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdf885bf-675e-4831-8fdb-d4833f0c7e16.png" 
                alt="Live streaming misa dari Katedral Jakarta dengan altar dan umat yang sedang beribadah"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-70 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">Misa Harian - Gereja Katedral Jakarta</h3>
                  <p className="text-gray-300">Sedang berlangsung • 1,234 penonton</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Misa Harian Pagi</h2>
                  <p className="text-gray-600">
                    Dipimpin oleh Pastor Antonius • Bacaan: 1 Korintus 15:12-20, Lukas 8:1-3
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    Bagikan
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channel Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Channel Rekomendasi</h3>
              <div className="space-y-4">
                {youtubeChannels.map((channel, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                      selectedChannel === index
                        ? "bg-emerald-100 border-2 border-emerald-500"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                    onClick={() => setSelectedChannel(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{channel.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{channel.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Jadwal Hari Ini</h3>
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-emerald-600 font-bold text-sm bg-emerald-100 px-3 py-1 rounded-full">
                      {schedule.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{schedule.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{schedule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Acara Mendatang</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-emerald-600 font-semibold text-sm">{event.date}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-emerald-600 font-semibold text-sm">{event.time}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h4>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm">
                          Ingatkan Saya
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat Simulation */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Chat Live</h3>
              <div className="h-64 bg-gray-50 rounded-lg p-4 overflow-y-auto mb-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      M
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-gray-800">Maria S.</span>
                      <p className="text-sm text-gray-600">Terima kasih untuk misa yang indah ini 🙏</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      J
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-gray-800">Johanes P.</span>
                      <p className="text-sm text-gray-600">Amin. Tuhan memberkati kita semua</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      A
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-gray-800">Agnes L.</span>
                      <p className="text-sm text-gray-600">Homili yang sangat menyentuh hati</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Tulis pesan..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}