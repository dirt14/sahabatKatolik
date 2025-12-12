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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Sahabat <span className="text-emerald-600">Katolik</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Portal rohani digital untuk mendampingi perjalanan iman Anda.
            Temukan kedamaian dalam doa, liturgi, dan renungan harian.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/doa"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
            >
              Mulai Berdoa
            </a>

            <a
              href="/live-streaming"
              className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              Live Streaming Misa
            </a>

            <a
              href="/komunitas"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Bergabung Komunitas
            </a>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Perlu Kita Ingat</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-10"></div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <blockquote className="text-2xl md:text-3xl font-noto-serif text-gray-700 leading-relaxed">
                "{dailyQuote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Kalender Liturgi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kalender Liturgi</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          {/* CARD Hari Ini */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl">

              {/* Header */}
              <div className="flex items-center mb-4">
                <div
                  className="w-4 h-4 rounded-full mr-3 border"
                  style={{
                    backgroundColor:
                      todaysLiturgicalData.warna_liturgi === "hijau"
                        ? "#2ECC71"
                        : todaysLiturgicalData.warna_liturgi === "putih"
                        ? "#FFFFFF"
                        : todaysLiturgicalData.warna_liturgi === "merah"
                        ? "#E74C3C"
                        : "#9B59B6", // cukup ungu
                  }}
                ></div>

                <h3 className="text-xl font-bold text-gray-800">Hari Ini</h3>
              </div>

              {/* Isi */}
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold">Tanggal:</span>{" "}
                  {new Date(todaysLiturgicalData.tanggal).toLocaleDateString(
                    "id-ID",
                    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
                  )}
                </p>

                <p className="text-gray-600">
                  <span className="font-semibold">Hari Peringatan:</span>{" "}
                  {todaysLiturgicalData.peringatan_hari}
                </p>

                <p className="text-gray-600">
                  <span className="font-semibold">Warna Liturgi:</span>{" "}
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

                {todaysLiturgicalData.bacaan1 && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Bacaan 1:</span>{" "}
                    {todaysLiturgicalData.bacaan1}
                  </p>
                )}

                {todaysLiturgicalData.bacaan2 && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Bacaan 2:</span>{" "}
                    {todaysLiturgicalData.bacaan2}
                  </p>
                )}

                {todaysLiturgicalData.mazmur && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Mazmur:</span>{" "}
                    {todaysLiturgicalData.mazmur}
                  </p>
                )}

                {todaysLiturgicalData.injil && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Injil:</span>{" "}
                    {todaysLiturgicalData.injil}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renungan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Renungan Hari Ini</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Kepercayaan dalam Ketidakpastian
              </h3>

              <div className="prose prose-lg text-gray-700 font-noto-serif leading-relaxed">
                <p className="mb-6">
                  Dalam kehidupan sehari-hari, kita sering dihadapkan pada kekhawatiran
                  tentang masa depan. Firman Tuhan hari ini mengingatkan kita untuk tidak
                  cemas akan hari esok.
                </p>

                <p className="mb-6">
                  Kepercayaan kepada Tuhan berarti menyerahkan hasil akhir kepada kehendak-Nya.
                </p>

                <div className="text-center mt-8">
                  <p className="text-emerald-700 font-semibold italic">
                    "Berikanlah pada kami rezeki pada hari ini" — Doa Bapa Kami
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Streaming + Artikel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Live Streaming */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Live Streaming Misa</h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-900">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50e92a0f-39fc-4911-9de7-6b57a9608eda.png"
                    alt="Live streaming misa"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Misa Harian</h3>
                  <p className="text-gray-600 mb-4">
                    Ikuti misa harian setiap pukul 06:00 & 18:00 WIB.
                  </p>

                  <a
                    href="/live-streaming"
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    Tonton Sekarang
                  </a>
                </div>
              </div>
            </div>

            {/* Artikel */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Artikel Rohani</h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {/* Artikel 1 */}
                <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86d713c7-bc8d-4772-b055-df29d6113a9b.png"
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-emerald-600">
                        Makna Syukur dalam Hidup Sehari-hari
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        Bagaimana menghayati rasa syukur setiap hari...
                      </p>
                      <p className="text-xs text-gray-500">2 hari yang lalu</p>
                    </div>
                  </div>
                </article>

                {/* Artikel 2 */}
                <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db427c9a-17b4-4622-b5f2-c6665e22f84f.png"
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-emerald-600">
                        Panduan Doa Kontemplasi untuk Pemula
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Langkah praktis memulai doa kontemplasi...
                      </p>
                      <p className="text-xs text-gray-500">5 hari yang lalu</p>
                    </div>
                  </div>
                </article>

                {/* Artikel 3 */}
                <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="flex space-x-4">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69577723-94a2-4c4e-85e5-7c7eed6abc7f.png"
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-emerald-600">
                        Memahami Makna Liturgi dalam Misa
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Penjelasan tiap bagian liturgi...
                      </p>
                      <p className="text-xs text-gray-500">1 minggu yang lalu</p>
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
