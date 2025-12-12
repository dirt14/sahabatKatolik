// Data liturgi dan doa untuk website Sahabat Katolik

export interface LiturgicalColor {
  name: string;
  color: string;
  meaning: string;
}

export interface LiturgicalDay {
  date: string;
  color: LiturgicalColor;
  season: string;
  celebration: string;
  readings: string[];
  theme?: string;
}

export interface Prayer {
  id: string;
  title: string;
  category: string;
  content: string;
  latin?: string;
  description?: string;
}

export type LiturgicalColorObj = {
  name: string;
  color: string;
  meaning: string;
};

/**
 * Mengembalikan object warna liturgi yang selalu memiliki `meaning`.
 * Aman dipanggil dengan `null` atau `undefined`.
 */
export function getLiturgicalColor(date?: Date | null): LiturgicalColorObj {
  if (!date) {
    // fallback jika tidak ada tanggal
    return {
      name: "Hijau",
      color: "#2ECC71",
      meaning: "Hijau melambangkan harapan, pertumbuhan rohani, dan masa biasa gereja.",
    };
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  // contoh aturan sederhana — tambahkan aturan nyata sesuai kebutuhan
  if (month === 12 && day === 25) {
    return {
      name: "Putih",
      color: "#FFFFFF",
      meaning: "Putih melambangkan sukacita dan kemuliaan (Hari Raya Natal).",
    };
  }

  if (month === 4 && day === 9) {
    return {
      name: "Merah",
      color: "#E74C3C",
      meaning: "Merah melambangkan Roh Kudus, darah martir, dan pengorbanan.",
    };
  }

  // default
  return {
    name: "Hijau",
    color: "#2ECC71",
    meaning: "Hijau melambangkan harapan, pertumbuhan rohani, dan masa biasa gereja.",
  };
}

export const prayerCategories = [
  {
    id: "harian",
    name: "Doa Harian",
    description: "Doa-doa untuk kehidupan sehari-hari",
    icon: "sun"
  },
  {
    id: "sakramen",
    name: "Doa Sakramen",
    description: "Doa-doa berkaitan dengan sakramen",
    icon: "cross"
  },
  {
    id: "devosi",
    name: "Doa Devosi",
    description: "Doa-doa devosi khusus",
    icon: "heart"
  },
  {
    id: "rosario",
    name: "Rosario",
    description: "Doa Rosario dan misteri-misterinya",
    icon: "beads"
  },
  {
    id: "liturgi",
    name: "Doa Liturgi",
    description: "Doa-doa dalam liturgi gereja",
    icon: "book"
  }
];

export const prayers: Prayer[] = [
  // Doa Harian
  {
    id: "bapa-kami",
    title: "Doa Bapa Kami",
    category: "harian",
    content: `Bapa kami yang ada di surga,
dimuliakanlah nama-Mu,
datanglah kerajaan-Mu,
jadilah kehendak-Mu di atas bumi seperti di dalam surga.
Berikanlah kami pada hari ini makanan kami yang secukupnya,
dan ampunilah kesalahan kami,
seperti kami pun mengampuni orang yang bersalah kepada kami,
dan janganlah masukkan kami ke dalam pencobaan,
tetapi bebaskanlah kami dari yang jahat.
Amen.`,
    latin: `Pater noster qui es in caelis,
sanctificetur nomen tuum,
adveniat regnum tuum,
fiat voluntas tua sicut in caelo et in terra.
Panem nostrum quotidianum da nobis hodie,
et dimitte nobis debita nostra
sicut et nos dimittimus debitoribus nostris,
et ne nos inducas in tentationem,
sed libera nos a malo.
Amen.`,
    description: "Doa yang diajarkan Yesus kepada para murid-Nya"
  },
  {
    id: "salam-maria",
    title: "Salam Maria",
    category: "harian",
    content: `Salam Maria, penuh rahmat,
Tuhan sertamu.
Terpujilah engkau di antara wanita,
dan terpujilah buah tubuhmu, Yesus.
Santa Maria, Bunda Allah,
doakanlah kami yang berdosa ini,
sekarang dan waktu kami mati.
Amen.`,
    latin: `Ave Maria, gratia plena,
Dominus tecum.
Benedicta tu in mulieribus,
et benedictus fructus ventris tui, Iesus.
Sancta Maria, Mater Dei,
ora pro nobis peccatoribus,
nunc et in hora mortis nostrae.
Amen.`,
    description: "Doa kepada Bunda Maria yang diambil dari Injil Lukas"
  },
  {
    id: "kemuliaan",
    title: "Kemuliaan",
    category: "harian",
    content: `Kemuliaan kepada Bapa dan Putra dan Roh Kudus,
seperti pada permulaan, sekarang, selalu,
dan sepanjang segala abad.
Amen.`,
    latin: `Gloria Patri et Filio et Spiritui Sancto,
sicut erat in principio, et nunc, et semper,
et in saecula saeculorum.
Amen.`,
    description: "Doa memuliakan Tritunggal Mahakudus"
  },

  // Doa Sakramen
  {
    id: "sebelum-komuni",
    title: "Doa Sebelum Komuni",
    category: "sakramen",
    content: `Ya Yesus, aku percaya bahwa Engkau sungguh hadir
dalam Sakramen Mahakudus.
Aku mengasihi Engkau lebih dari segala sesuatu,
dan aku rindu menerima Engkau dalam jiwaku.
Karena sekarang aku tidak dapat menerima Engkau secara sakramental,
datanglah setidak-tidaknya secara rohani ke dalam hatiku.
Aku memeluk Engkau seolah-olah Engkau sudah datang,
dan aku bersatu sepenuhnya dengan Engkau.
Jangan biarkan aku terpisah dari Engkau.
Amen.`,
    description: "Doa persiapan sebelum menerima Komuni Kudus"
  },
  {
    id: "sesudah-komuni",
    title: "Doa Sesudah Komuni",
    category: "sakramen",
    content: `Ya Yesus, terima kasih karena Engkau telah datang kepadaku
dalam Komuni Kudus.
Bantulah aku untuk selalu hidup dalam kasih-Mu,
dan jadikanlah hidupku persembahan yang berkenan kepada-Mu.
Semoga kehadiran-Mu dalam diriku
membawa berkat bagi semua orang yang kujumpai.
Maria, Bundaku, bantulah aku untuk selalu setia kepada Yesus.
Amen.`,
    description: "Doa syukur setelah menerima Komuni Kudus"
  },

  // Doa Devosi
  {
    id: "angelus",
    title: "Doa Angelus",
    category: "devosi",
    content: `Malaikat Tuhan menyampaikan kabar kepada Maria.
Dan ia mengandung dari Roh Kudus.
Salam Maria...

Sesungguhnya aku ini hamba Tuhan.
Jadilah padaku menurut perkataan-mu.
Salam Maria...

Dan Sabda itu menjadi daging.
Dan tinggal di antara kita.
Salam Maria...

Doakanlah kami, ya Santa Bunda Allah,
supaya kami berkenan menerima janji-janji Kristus.

Doa:
Ya Allah, dengan pemberitaan malaikat,
kami mengetahui bahwa Yesus Kristus, Putra-Mu,
menjadi manusia.
Curahkanlah rahmat-Mu ke dalam hati kami,
supaya kami yang telah mengenal inkarnasi-Nya
melalui sengsara dan salib-Nya
sampai kepada kemuliaan kebangkitan-Nya.
Demi Kristus Tuhan kami.
Amen.`,
    description: "Doa devosi yang biasa dipanjatkan tiga kali sehari"
  },

  // Rosario
  {
    id: "misteri-gembira",
    title: "Misteri Gembira",
    category: "rosario",
    content: `1. Yesus dikandung tanpa dosa
2. Maria mengunjungi Elisabeth
3. Yesus dilahirkan di Betlehem
4. Yesus dipersembahkan di Bait Allah
5. Yesus ditemukan di Bait Allah`,
    description: "Lima misteri gembira dalam doa Rosario (Senin & Sabtu)"
  },
  {
    id: "misteri-sedih",
    title: "Misteri Sedih",
    category: "rosario",
    content: `1. Yesus berdoa dengan cemas di Taman Getsemani
2. Yesus disiksa
3. Yesus dimahkotai duri
4. Yesus memanggul salib
5. Yesus wafat di salib`,
    description: "Lima misteri sedih dalam doa Rosario (Selasa & Jumat)"
  },

  // Doa Liturgi
  {
    id: "sanctus",
    title: "Sanctus",
    category: "liturgi",
    content: `Kudus, Kudus, Kuduslah Tuhan,
Allah semesta alam.
Surga dan bumi penuh kemuliaan-Mu.
Hosana di tempat yang tinggi.
Terpujilah Dia yang datang dalam nama Tuhan.
Hosana di tempat yang tinggi.`,
    latin: `Sanctus, Sanctus, Sanctus Dominus Deus Sabaoth.
Pleni sunt caeli et terra gloria tua.
Hosanna in excelsis.
Benedictus qui venit in nomine Domini.
Hosanna in excelsis.`,
    description: "Nyanyian kudus dalam liturgi Ekaristi"
  }
];

export const youtubeChannels = [
  {
    name: "Gereja Katedral Jakarta",
    url: "https://www.youtube.com/@GerejaKatedralJakarta",
    description: "Live streaming misa dari Katedral Jakarta"
  },
  {
    name: "EWTN Indonesia",
    url: "https://www.youtube.com/@EWTNIndonesia",
    description: "Program rohani dan misa dalam bahasa Indonesia"
  },
  {
    name: "Paroki Santo Yakobus",
    url: "https://www.youtube.com/@ParokiSantoYakobus",
    description: "Misa dan program rohani dari Paroki Santo Yakobus"
  },
  {
    name: "Radio Veritas Asia",
    url: "https://www.youtube.com/@RadioVeritasAsia",
    description: "Program rohani dan berita Katolik"
  }
];

export const articles = [
  {
    id: "1",
    title: "Makna Syukur dalam Hidup Sehari-hari",
    excerpt: "Bagaimana kita dapat menghayati rasa syukur dalam setiap momen kehidupan dan mengubahnya menjadi doa yang hidup.",
    content: `Rasa syukur adalah salah satu sikap fundamental dalam kehidupan Kristiani. Santo Paulus mengingatkan kita untuk "mengucap syukur dalam segala hal" (1 Tesalonika 5:18). Namun, bagaimana kita dapat menghayati rasa syukur dalam kehidupan sehari-hari yang penuh tantangan?

Pertama, syukur dimulai dari pengakuan bahwa segala sesuatu adalah anugerah dari Allah. Hidup kita, kesehatan, keluarga, pekerjaan, bahkan tantangan yang kita hadapi - semuanya adalah bagian dari rencana Allah yang penuh kasih.

Kedua, syukur bukan hanya perasaan, tetapi pilihan. Kita memilih untuk bersyukur bahkan ketika keadaan tidak sesuai harapan. Ini adalah latihan spiritual yang membutuhkan kedisiplinan dan iman.

Ketiga, syukur mengubah perspektif kita. Ketika kita bersyukur, kita melihat hidup dari sudut pandang Allah, bukan dari keterbatasan manusiawi kita. Ini membawa kedamaian dan kegembiraan yang sejati.

Mari kita mulai setiap hari dengan mengucap syukur atas tiga hal sederhana: napas yang kita hirup, kasih keluarga, dan kesempatan untuk melayani. Dengan demikian, hidup kita akan menjadi doa syukur yang berkesinambungan.`,
    author: "Pastor Antonius",
    date: "2024-01-13",
    category: "Spiritualitas",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aecfa117-2d31-4ce7-b595-58e406f77385.png"
  },
  {
    id: "2",
    title: "Panduan Doa Kontemplasi untuk Pemula",
    excerpt: "Langkah-langkah praktis untuk memulai doa kontemplasi dalam kehidupan rohani dan mendalami hubungan dengan Allah.",
    content: `Doa kontemplasi adalah bentuk doa yang mengajak kita untuk "diam" di hadapan Allah dan membiarkan Dia berbicara kepada hati kita. Berbeda dengan doa vokal yang menggunakan kata-kata, doa kontemplasi lebih menekankan pada kehadiran dan penyerahan diri kepada Allah.

Langkah pertama dalam doa kontemplasi adalah mencari tempat yang tenang dan waktu yang tidak terganggu. Mulailah dengan 10-15 menit setiap hari, kemudian tingkatkan secara bertahap.

Langkah kedua adalah menenangkan pikiran dan hati. Bernapaslah dengan tenang dan lepaskan semua kekhawatiran kepada Allah. Gunakan doa singkat seperti "Yesus, aku percaya kepada-Mu" untuk memfokuskan perhatian.

Langkah ketiga adalah membaca teks Kitab Suci secara perlahan, kemudian merenungkannya dalam hati. Jangan terburu-buru untuk memahami, tetapi biarkan Firman Allah meresap dalam jiwa.

Langkah keempat adalah berbicara dengan Allah seperti berbicara dengan sahabat terdekat. Ceritakan perasaan, harapan, dan pergumulan Anda. Kemudian diamlah dan dengarkan apa yang Allah ingin sampaikan.

Ingatlah bahwa doa kontemplasi adalah perjalanan, bukan tujuan. Kadang kita merasa kering atau tidak merasakan apa-apa. Ini normal dan justru bagian dari proses pertumbuhan rohani. Yang penting adalah kesetiaan untuk terus datang kepada Allah setiap hari.`,
    author: "Sister Maria Goretti",
    date: "2024-01-10",
    category: "Doa",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa7cbe1e-441e-4169-8593-eca7f6238d0e.png"
  },
  {
    id: "3",
    title: "Memahami Makna Liturgi dalam Misa",
    excerpt: "Penjelasan mendalam tentang setiap bagian liturgi misa dan maknanya dalam kehidupan iman umat Katolik.",
    content: `Liturgi Misa adalah puncak kehidupan Gereja Katolik. Setiap gerakan, setiap kata, dan setiap simbol memiliki makna mendalam yang menghubungkan kita dengan misteri keselamatan Kristus.

Ritus Pembuka mengajak kita untuk meninggalkan dunia sehari-hari dan memasuki ruang kudus. Tanda salib mengingatkan kita pada kematian dan kebangkitan Kristus yang menjadi sumber keselamatan kita.

Liturgi Sabda adalah saat Allah berbicara kepada umat-Nya melalui Kitab Suci. Bacaan pertama biasanya dari Perjanjian Lama, Mazmur Tanggapan mengajak kita merespons, bacaan kedua dari surat-surat rasuli, dan Injil adalah puncak Liturgi Sabda.

Liturgi Ekaristi adalah inti Misa, di mana roti dan anggur diubah menjadi Tubuh dan Darah Kristus. Doa Syukur Agung menghadirkan kembali kurban Kristus di Kalvari secara tak berdarah.

Ritus Komuni mengajak kita untuk bersatu dengan Kristus dan sesama. "Amen" yang kita ucapkan sebelum menerima Komuni adalah pernyataan iman yang mendalam: "Ya, aku percaya ini adalah Tubuh dan Darah Kristus."

Ritus Penutup mengutus kita untuk menjadi saksi Kristus di dunia. "Ite, missa est" (Pergilah, kalian diutus) mengingatkan bahwa Misa tidak berakhir di gereja, tetapi berlanjut dalam kehidupan sehari-hari.

Dengan memahami makna liturgi, partisipasi kita dalam Misa menjadi lebih bermakna dan transformatif.`,
    author: "Pastor Benediktus",
    date: "2024-01-08",
    category: "Liturgi",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4075013-93df-4ef2-b2d6-184bfb8a8231.png"
  }
];