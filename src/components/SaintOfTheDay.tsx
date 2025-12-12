"use client";

import { useState, useEffect } from "react";

interface Saint {
  name: string;
  date: string;
  description: string;
  feast: string;
  patronOf: string[];
  quote: string;
  image: string;
}

const saints: Saint[] = [
  {
    name: "Santo Fransiskus Xaverius",
    date: "3 Desember",
    description: "Misionaris besar Asia dan salah satu pendiri Serikat Yesus. Dikenal sebagai Rasul Hindia Timur.",
    feast: "Pesta",
    patronOf: ["Misionaris", "Pelaut", "Turis", "India", "Jepang"],
    quote: "Berikan aku jiwa-jiwa, ambillah yang lainnya.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10775efc-2aac-4624-af58-6da32333f181.png"
  },
  {
    name: "Santa Barbara",
    date: "4 Desember", 
    description: "Martir Kristen awal yang dikenal karena keteguhannya dalam iman meskipun menghadapi penganiayaan.",
    feast: "Peringatan",
    patronOf: ["Tentara", "Penambang", "Ahli Matematika", "Perlindungan dari Petir"],
    quote: "Iman yang sejati tidak pernah takut pada kematian.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68b84291-3eab-457b-9745-28717cfe762b.png"
  },
  {
    name: "Santo Nikolaus",
    date: "6 Desember",
    description: "Uskup Myra yang terkenal karena kemurahan hatinya, terutama kepada anak-anak dan orang miskin.",
    feast: "Peringatan",
    patronOf: ["Anak-anak", "Pelaut", "Pedagang", "Rusia", "Yunani"],
    quote: "Kebaikan yang dilakukan dalam diam adalah yang paling berharga.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb2a371f-ae74-47e0-b4fc-b044f1742796.png"
  },
  {
    name: "Santa Perawan Maria Dikandung Tanpa Noda",
    date: "8 Desember",
    description: "Dogma Katolik yang menyatakan bahwa Bunda Maria dikandung tanpa dosa asal.",
    feast: "Hari Raya",
    patronOf: ["Amerika Serikat", "Korea", "Filipina", "Portugal"],
    quote: "Sesungguhnya aku ini hamba Tuhan, jadilah padaku menurut perkataanmu.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62d2deb9-0c82-40bc-b0b9-4427c1492fc9.png"
  },
  {
    name: "Santo Yohanes dari Salib",
    date: "14 Desember",
    description: "Mistikus dan penyair Spanyol, reformer Ordo Karmel bersama Santa Teresa dari Avila.",
    feast: "Peringatan",
    patronOf: ["Penyair", "Mistikus", "Karmelit"],
    quote: "Di malam yang gelap jiwa, hanya iman yang menjadi terang.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47408d70-9ff4-4c81-a559-eb05052e43d1.png"
  }
];

export default function SaintOfTheDay() {
  const [currentSaint, setCurrentSaint] = useState<Saint>(saints[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Simulate getting saint based on current date
    const today = new Date();
    const dayOfMonth = today.getDate();
    const saintIndex = dayOfMonth % saints.length;
    setCurrentSaint(saints[saintIndex]);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">Santo/Santa Hari Ini</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{currentSaint.date}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <img 
            src={currentSaint.image}
            alt={`Gambar ${currentSaint.name}`}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white">{currentSaint.name}</h4>
            <span className={`px-2 py-1 text-xs rounded-full ${
              currentSaint.feast === "Hari Raya" 
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                : currentSaint.feast === "Pesta"
                ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
            }`}>
              {currentSaint.feast}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {currentSaint.description}
          </p>

          {isExpanded && (
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-gray-800 dark:text-white mb-1">Pelindung:</h5>
                <div className="flex flex-wrap gap-1">
                  {currentSaint.patronOf.map((patron, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded"
                    >
                      {patron}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-gray-700 dark:text-gray-300 italic font-serif">
                  "{currentSaint.quote}"
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm flex items-center"
          >
            {isExpanded ? "Tutup" : "Baca Selengkapnya"}
            <svg 
              className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}