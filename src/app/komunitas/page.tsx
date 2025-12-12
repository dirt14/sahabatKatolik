import SaintOfTheDay from "@/components/SaintOfTheDay";
import BibleVerse from "@/components/BibleVerse";
import PrayerRequests from "@/components/PrayerRequests";

export default function KomunitasPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Komunitas Sahabat Katolik</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">Cari Gereja Terdekat</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Temukan paroki di sekitar Anda</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Masukkan lokasi Anda..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Cari Gereja
                </button>

                {/* Sample Results */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Gereja Terdekat:</h4>
                  
                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Gereja Katedral Jakarta</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jl. Katedral No.7B, Pasar Baru, Jakarta Pusat</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">0.8 km • Misa: 06:00, 18:00</p>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <h5 className="font-semibold text-gray-800 dark:text-white">Gereja Santa Maria</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jl. Gereja Theresia No.2, Menteng, Jakarta Pusat</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">1.2 km • Misa: 05:30, 17:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Catholic News */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">Berita Katolik Terkini</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Update dari Gereja universal</p>
                </div>
              </div>

              <div className="space-y-4">
                <article className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                    Paus Fransiskus Mengajak Umat untuk Hidup Sederhana
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Dalam homili Minggu ini, Paus menekankan pentingnya kesederhanaan dalam hidup Kristiani...
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Vatican News • 2 jam lalu</p>
                </article>

                <article className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                    KWI Luncurkan Program Bantuan untuk Korban Bencana
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Konferensi Waligereja Indonesia mengumumkan program bantuan darurat untuk korban bencana alam...
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Kompas • 5 jam lalu</p>
                </article>

                <article className="pb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer">
                    Perayaan Natal 2024: Tema "Damai di Bumi"
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Gereja-gereja di Indonesia mempersiapkan perayaan Natal dengan tema perdamaian dunia...
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Katolik News • 1 hari lalu</p>
                </article>
              </div>

              <button className="w-full mt-4 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm">
                Lihat Semua Berita →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}