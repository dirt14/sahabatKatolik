export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Sahabat Katolik</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Portal rohani digital yang hadir untuk mendampingi perjalanan iman umat Katolik Indonesia 
              dengan teknologi modern dan desain yang elegan.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Visi & Misi */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi Kami</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Menjadi platform digital terdepan yang menghubungkan umat Katolik Indonesia 
                dalam perjalanan iman mereka, menyediakan akses mudah ke sumber-sumber rohani, 
                dan membangun komunitas yang kuat dalam kasih Kristus.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Misi Kami</h2>
              </div>
              <ul className="text-gray-700 leading-relaxed space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Menyediakan akses mudah ke doa-doa dan liturgi Katolik
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Memfasilitasi live streaming misa untuk umat di seluruh Indonesia
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Menyajikan kalender liturgi yang akurat dan informatif
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Memberikan renungan harian untuk memperdalam iman
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Filosofi Desain */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Filosofi Desain</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cadb45a9-df4f-4f44-a4f1-15f0f994d42b.png" 
                    alt="Desain minimalis modern dengan elemen katolik yang elegan"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Kesederhanaan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desain yang bersih dan minimalis, terinspirasi dari ketenangan dan kedamaian 
                  yang ditemukan dalam doa dan kontemplasi.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92b7d12e-3cfb-4144-b8c9-864c5caba14f.png" 
                    alt="Palet warna hijau dan emas yang harmonis dan spiritual"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Harmoni Warna</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kombinasi putih, hijau soft, dan emas soft yang mencerminkan kedamaian, 
                  pertumbuhan spiritual, dan kemuliaan ilahi.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6733f2e-ff14-4495-8fe1-8a67f6560335.png" 
                    alt="Tipografi elegan yang mudah dibaca untuk konten rohani"
                    className="w-15 h-15 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tipografi Elegan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Penggunaan font Inter untuk UI modern dan Noto Serif untuk konten liturgi, 
                  menciptakan hierarki visual yang jelas dan mudah dibaca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fitur Utama */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitur Utama</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Kumpulan Doa</h3>
              <p className="text-sm text-gray-600">Koleksi lengkap doa-doa Katolik untuk berbagai kebutuhan spiritual</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Live Streaming</h3>
              <p className="text-sm text-gray-600">Saksikan misa dan perayaan liturgi secara langsung dari berbagai gereja</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Kalender Liturgi</h3>
              <p className="text-sm text-gray-600">Ikuti perjalanan tahun liturgi dengan warna dan perayaan yang tepat</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Renungan Harian</h3>
              <p className="text-sm text-gray-600">Refleksi spiritual untuk memperdalam iman dan hubungan dengan Tuhan</p>
            </div>
          </div>
        </section>

        {/* Teknologi */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Teknologi Modern</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Dibangun dengan Teknologi Terdepan</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="text-gray-700"><strong>Next.js 15</strong> - Framework React modern untuk performa optimal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="text-gray-700"><strong>Tailwind CSS</strong> - Styling yang efisien dan responsif</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="text-gray-700"><strong>TypeScript</strong> - Kode yang aman dan mudah dipelihara</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="text-gray-700"><strong>Responsive Design</strong> - Optimal di semua perangkat</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="text-gray-700"><strong>PWA Ready</strong> - Dapat diinstall seperti aplikasi mobile</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/138dbc92-65da-4ae5-baa4-dbc100919b37.png" 
                  alt="Stack teknologi modern untuk pengembangan web yang canggih"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tim & Kontak */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@sahabatkatolik.id</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-700">doa@sahabatkatolik.id</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="text-gray-700">www.sahabatkatolik.id</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Misi Pelayanan Digital</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sahabat Katolik hadir sebagai jembatan antara tradisi iman yang kaya dengan 
                teknologi modern, memungkinkan umat untuk mengakses sumber-sumber rohani 
                kapan saja dan di mana saja.
              </p>
              <div className="text-center">
                <p className="text-emerald-700 font-semibold italic">
                  "Ad Majorem Dei Gloriam"
                </p>
                <p className="text-sm text-gray-600 mt-2">
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