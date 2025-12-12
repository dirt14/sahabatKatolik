import { Sparkles, Heart, Calendar, Radio, BookOpen, TrendingUp } from "lucide-react";

async function getDailyQuote() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/quotes`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.konten || "Tidak ada quote untuk hari ini.";
  } catch {
    return "Tidak dapat memuat quote hari ini.";
  }
}

async function getTodaysLiturgicalData() {
  try {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/kalender_liturgi?date=${formattedDate}`,
      { cache: "no-store" }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching liturgical data:", error);
    return {
      tanggal: new Date().toISOString().split("T")[0],
      hari_peringatan: "Hari Biasa dalam Masa Biasa",
      warna_liturgi: "hijau",
      bacaan1: null,
      bacaan2: null,
      mazmur: null,
      injil: null,
    };
  }
}

export default async function HomePage() {
  const dailyQuote = await getDailyQuote();
  const todaysLiturgicalData = await getTodaysLiturgicalData();

  return (
    <div className="min-h-screen">

      {/* Hero Section - Lebih Rohani dan Damai */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 py-24 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Sacred Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg">
                <Sparkles className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 tracking-tight">
            Sahabat <span className="text-emerald-600 dark:text-emerald-400">Katolik</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Portal rohani digital untuk mendampingi perjalanan iman Anda.
            <br className="hidden sm:block" />
            Temukan kedamaian dalam doa, liturgi, dan renungan harian.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/doa"
              className="group flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Mulai Berdoa</span>
            </a>

            <a
              href="/live-streaming"
              className="group flex items-center space-x-2 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-600 dark:border-emerald-400 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Radio className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Live Streaming Misa</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section - Lebih Elegan */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Perlu Kita Ingat</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-900/20 dark:via-gray-800 dark:to-amber-900/20 rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 dark:border-gray-700">
              {/* Decorative Quote Mark */}
              <div className="absolute top-8 left-8 text-8xl text-emerald-200 dark:text-emerald-800 font-serif leading-none">"</div>
              
              <blockquote className="relative text-2xl md:text-3xl font-noto-serif text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                {dailyQuote}
              </blockquote>

              {/* Decorative Bottom */}
              <div className="flex justify-center mt-8">
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kalender Liturgi - Lebih Modern */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Kalender Liturgi</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
          </div>

          {/* Card Hari Ini */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 w-full max-w-3xl hover:shadow-2xl transition-shadow duration-200">

              {/* Header dengan Warna Liturgi */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-700 shadow-lg"
                    style={{
                      backgroundColor:
                        todaysLiturgicalData.warna_liturgi === "hijau"
                          ? "#10B981"
                          : todaysLiturgicalData.warna_liturgi === "putih"
                          ? "#FFFFFF"
                          : todaysLiturgicalData.warna_liturgi === "merah"
                          ? "#EF4444"
                          : "#A855F7",
                    }}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Hari Ini</h3>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {new Date(todaysLiturgicalData.tanggal).toLocaleDateString("id-ID", { 
                    day: "numeric", 
                    month: "short" 
                  })}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-emerald-50/50 dark:from-gray-700/50 dark:to-emerald-900/20 rounded-xl p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    <span className="font-semibold text-gray-800 dark:text-white">Tanggal:</span>{" "}
                    {new Date(todaysLiturgicalData.tanggal).toLocaleDateString(
                      "id-ID",
                      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
                    )}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    <span className="font-semibold text-gray-800 dark:text-white">Hari Peringatan:</span>{" "}
                    {todaysLiturgicalData.peringatan_hari}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-800 dark:text-white">Warna Liturgi:</span>{" "}
                    {(() => {
                      const warna = todaysLiturgicalData?.warna_liturgi?.toLowerCase();
                      const mapping: Record<string, string> = {
                        hijau: "Hijau (Masa Biasa)",
                        putih: "Putih (Hari Raya)",
                        merah: "Merah (Peringatan Martir)",
                        ungu: "Ungu (Masa Adven/Prapaskah)",
                      };
                      return mapping[warna] || "Hijau (Masa Biasa)";
                    })()}
                  </p>
                </div>

                {/* Bacaan */}
                {(todaysLiturgicalData.bacaan1 || todaysLiturgicalData.bacaan2 || todaysLiturgicalData.mazmur || todaysLiturgicalData.injil) && (
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span>Bacaan Hari Ini</span>
                    </h4>

                    {todaysLiturgicalData.bacaan1 && (
                      <p className="text-gray-600 dark:text-gray-300 pl-7">
                        <span className="font-medium">Bacaan 1:</span> {todaysLiturgicalData.bacaan1}
                      </p>
                    )}

                    {todaysLiturgicalData.mazmur && (
                      <p className="text-gray-600 dark:text-gray-300 pl-7">
                        <span className="font-medium">Mazmur:</span> {todaysLiturgicalData.mazmur}
                      </p>
                    )}

                    {todaysLiturgicalData.bacaan2 && (
                      <p className="text-gray-600 dark:text-gray-300 pl-7">
                        <span className="font-medium">Bacaan 2:</span> {todaysLiturgicalData.bacaan2}
                      </p>
                    )}

                    {todaysLiturgicalData.injil && (
                      <p className="text-gray-600 dark:text-gray-300 pl-7">
                        <span className="font-medium">Injil:</span> {todaysLiturgicalData.injil}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/kalender-liturgi"
                  className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors duration-200 group"
                >
                  <span>Lihat Kalender Lengkap</span>
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renungan - Lebih Tenang */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Renungan Hari Ini</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-blue-900/10 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Kepercayaan dalam Ketidakpastian
              </h3>

              <div className="prose prose-lg max-w-none">
                <div className="font-noto-serif text-gray-700 dark:text-gray-200 leading-relaxed space-y-6">
                  <p>
                    Dalam kehidupan sehari-hari, kita sering dihadapkan pada kekhawatiran
                    tentang masa depan. Firman Tuhan hari ini mengingatkan kita untuk tidak
                    cemas akan hari esok.
                  </p>

                  <p>
                    Kepercayaan kepada Tuhan berarti menyerahkan hasil akhir kepada kehendak-Nya.
                  </p>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 mt-8 border-l-4 border-emerald-600 dark:border-emerald-400">
                    <p className="text-emerald-800 dark:text-emerald-200 font-semibold italic text-center text-lg">
                      "Berikanlah pada kami rezeki pada hari ini"
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 text-center text-sm mt-2">
                      — Doa Bapa Kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Streaming + Artikel - Grid Lebih Rapi */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Live Streaming */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-6">
                  <Radio className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-semibold text-red-700 dark:text-red-300">Live Streaming Misa</span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-200">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50e92a0f-39fc-4911-9de7-6b57a9608eda.png"
                    alt="Live streaming misa"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold text-sm">LIVE</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Misa Harian</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Ikuti misa harian setiap pukul 06:00 & 18:00 WIB.
                    Berdoa bersama umat dari seluruh Indonesia.
                  </p>

                  <a
                    href="/live-streaming"
                    className="inline-flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <Radio className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>Tonton Sekarang</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Artikel */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-6">
                  <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Artikel Rohani</span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-transparent"></div>
              </div>

              <div className="space-y-6">
                {/* Artikel 1 */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86d713c7-bc8d-4772-b055-df29d6113a9b.png"
                      alt="Artikel"
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        Makna Syukur dalam Hidup Sehari-hari
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                        Bagaimana menghayati rasa syukur setiap hari dalam kehidupan kita...
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 hari yang lalu</p>
                    </div>
                  </div>
                </article>

                {/* Artikel 2 */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db427c9a-17b4-4622-b5f2-c6665e22f84f.png"
                      alt="Artikel"
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        Panduan Doa Kontemplasi untuk Pemula
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                        Langkah praktis memulai doa kontemplasi dalam kehidupan rohani...
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">5 hari yang lalu</p>
                    </div>
                  </div>
                </article>

                {/* Artikel 3 */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 group">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69577723-94a2-4c4e-85e5-7c7eed6abc7f.png"
                      alt="Artikel"
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        Memahami Makna Liturgi dalam Misa
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                        Penjelasan mendalam tentang setiap bagian liturgi dalam perayaan Ekaristi...
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 minggu yang lalu</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
