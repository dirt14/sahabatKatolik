import { Eye, Zap, BookOpen, Radio, Calendar, Lightbulb, Code, Mail, Globe, Heart, Sparkles } from "lucide-react";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-900/10">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 dark:from-emerald-800 dark:via-emerald-900 dark:to-gray-900 text-white py-20 overflow-hidden">
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
                  <Heart className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Tentang Sahabat Katolik</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Portal rohani digital yang hadir untuk mendampingi perjalanan iman umat Katolik Indonesia 
              dengan teknologi modern dan desain yang elegan.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Visi & Misi */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6">
                  <Eye className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Visi Kami</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg text-center">
                Menjadi platform digital terdepan yang menghubungkan umat Katolik Indonesia 
                dalam perjalanan iman mereka, menyediakan akses mudah ke sumber-sumber rohani, 
                dan membangun komunitas yang kuat dalam kasih Kristus.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6">
                  <Zap className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Misi Kami</h2>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Menyediakan akses mudah ke doa-doa dan liturgi Katolik</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Memfasilitasi live streaming misa untuk umat di seluruh Indonesia</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Menyajikan kalender liturgi yang akurat dan informatif</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span>Memberikan renungan harian untuk memperdalam iman</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Filosofi Desain */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Filosofi Desain</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cadb45a9-df4f-4f44-a4f1-15f0f994d42b.png" 
                    alt="Desain minimalis modern dengan elemen katolik yang elegan"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Kesederhanaan</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Desain yang bersih dan minimalis, terinspirasi dari ketenangan dan kedamaian 
                  yang ditemukan dalam doa dan kontemplasi.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92b7d12e-3cfb-4144-b8c9-864c5caba14f.png" 
                    alt="Palet warna hijau dan emas yang harmonis dan spiritual"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Harmoni Warna</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Kombinasi putih, hijau soft, dan emas soft yang mencerminkan kedamaian, 
                  pertumbuhan spiritual, dan kemuliaan ilahi.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6733f2e-ff14-4495-8fe1-8a67f6560335.png" 
                    alt="Tipografi elegan yang mudah dibaca untuk konten rohani"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Tipografi Elegan</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Penggunaan font Inter untuk UI modern dan Noto Serif untuk konten liturgi, 
                  menciptakan hierarki visual yang jelas dan mudah dibaca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fitur Utama */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Fitur Utama</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">Kumpulan Doa</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Koleksi lengkap doa-doa Katolik untuk berbagai kebutuhan spiritual</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
                <Radio className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">Live Streaming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Saksikan misa dan perayaan liturgi secara langsung dari berbagai gereja</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
                <Calendar className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">Kalender Liturgi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Ikuti perjalanan tahun liturgi dengan warna dan perayaan yang tepat</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">Renungan Harian</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Refleksi spiritual untuk memperdalam iman dan hubungan dengan Tuhan</p>
            </div>
          </div>
        </section>

        {/* Teknologi */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
              <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Teknologi Modern</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Dibangun dengan Teknologi Terdepan</h3>
                <div className="space-y-5">
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-gray-200"><strong>Next.js 15</strong> - Framework React modern untuk performa optimal</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-gray-200"><strong>Tailwind CSS</strong> - Styling yang efisien dan responsif</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-gray-200"><strong>TypeScript</strong> - Kode yang aman dan mudah dipelihara</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-gray-200"><strong>Responsive Design</strong> - Optimal di semua perangkat</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-gray-200"><strong>PWA Ready</strong> - Dapat diinstall seperti aplikasi mobile</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/138dbc92-65da-4ae5-baa4-dbc100919b37.png" 
                  alt="Stack teknologi modern untuk pengembangan web yang canggih"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tim & Kontak */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Hubungi Kami</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">info@sahabatkatolik.id</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">doa@sahabatkatolik.id</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                    <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">www.sahabatkatolik.id</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-900/20 dark:via-gray-800 dark:to-amber-900/20 rounded-3xl p-10 border border-gray-100 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Misi Pelayanan Digital</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                Sahabat Katolik hadir sebagai jembatan antara tradisi iman yang kaya dengan 
                teknologi modern, memungkinkan umat untuk mengakses sumber-sumber rohani 
                kapan saja dan di mana saja.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border-l-4 border-emerald-600 dark:border-emerald-400">
                <p className="text-emerald-700 dark:text-emerald-300 font-bold text-xl italic mb-2">
                  "Ad Majorem Dei Gloriam"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Untuk Kemuliaan Allah yang Lebih Besar
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}