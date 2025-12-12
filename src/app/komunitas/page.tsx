import SaintOfTheDay from "@/components/SaintOfTheDay";
import BibleVerse from "@/components/BibleVerse";
import PrayerRequests from "@/components/PrayerRequests";
import { Users, MapPin, Newspaper, Search, TrendingUp } from "lucide-react";

export default function KomunitasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20 overflow-hidden">
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
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Komunitas Sahabat Katolik</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dalam komunitas iman yang saling mendukung dan mendoakan
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Saint of the Day */}
            <SaintOfTheDay />
            
            {/* Bible Verse */}
            <BibleVerse />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Prayer Requests */}
            <PrayerRequests />
            
            {/* Parish Finder */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Cari Gereja Terdekat</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Temukan paroki di sekitar Anda</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Masukkan lokasi Anda..."
                    className="w-full px-4 py-3 pl-12 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                  <Search className="w-5 h-5" />
                  <span>Cari Gereja</span>
                </button>

                {/* Sample Results */}
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Gereja Terdekat:</span>
                  </h4>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent border border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Gereja Katedral Jakarta</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Jl. Katedral No.7B, Pasar Baru, Jakarta Pusat</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">0.8 km</span>
                      <span className="text-gray-500 dark:text-gray-400">Misa: 06:00, 18:00</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent border border-gray-200 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Gereja Santa Maria</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Jl. Gereja Theresia No.2, Menteng, Jakarta Pusat</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1.2 km</span>
                      <span className="text-gray-500 dark:text-gray-400">Misa: 05:30, 17:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Catholic News */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                  <Newspaper className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Berita Katolik Terkini</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Update dari Gereja universal</p>
                </div>
              </div>

              <div className="space-y-6">
                <article className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-b-0 group">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 cursor-pointer transition-colors duration-200">
                    Paus Fransiskus Mengajak Umat untuk Hidup Sederhana
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    Dalam homili Minggu ini, Paus menekankan pentingnya kesederhanaan dalam hidup Kristiani...
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">Vatican News • 2 jam lalu</p>
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </article>

                <article className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-b-0 group">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 cursor-pointer transition-colors duration-200">
                    KWI Luncurkan Program Bantuan untuk Korban Bencana
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    Konferensi Waligereja Indonesia mengumumkan program bantuan darurat untuk korban bencana alam...
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">Kompas • 5 jam lalu</p>
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </article>

                <article className="pb-6 group">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 cursor-pointer transition-colors duration-200">
                    Perayaan Natal 2024: Tema "Damai di Bumi"
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    Gereja-gereja di Indonesia mempersiapkan perayaan Natal dengan tema perdamaian dunia...
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">Katolik News • 1 hari lalu</p>
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </article>
              </div>

              <button className="w-full mt-6 flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm py-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all duration-200">
                <span>Lihat Semua Berita</span>
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}