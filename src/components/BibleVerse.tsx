"use client";

import { useState, useEffect } from "react";

interface BibleVerse {
  verse: string;
  reference: string;
  context: string;
  theme: string;
}

const bibleVerses: BibleVerse[] = [
  {
    verse: "Karena itu janganlah kamu kuatir akan hari besok, karena hari besok mempunyai kesusahannya sendiri. Kesusahan sehari cukuplah untuk sehari.",
    reference: "Matius 6:34",
    context: "Yesus mengajarkan tentang kepercayaan kepada Tuhan dan tidak berlebihan dalam kekuatiran.",
    theme: "Kepercayaan"
  },
  {
    verse: "Kasihilah sesamamu manusia seperti dirimu sendiri.",
    reference: "Matius 22:39",
    context: "Perintah kedua yang terbesar menurut Yesus, setelah mengasihi Allah.",
    theme: "Kasih"
  },
  {
    verse: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
    reference: "Filipi 4:13",
    context: "Paulus berbicara tentang kekuatan yang diperoleh dari Kristus dalam segala situasi.",
    theme: "Kekuatan"
  },
  {
    verse: "Berbahagialah orang yang lemah lembut, karena mereka akan memiliki bumi.",
    reference: "Matius 5:5",
    context: "Bagian dari Sabda Bahagia yang diajarkan Yesus di Bukit.",
    theme: "Kerendahan Hati"
  },
  {
    verse: "Jangan takut, sebab Aku menyertai engkau, jangan bimbang, sebab Aku ini Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau; Aku akan memegang engkau dengan tangan kanan-Ku yang membawa kemenangan.",
    reference: "Yesaya 41:10",
    context: "Allah memberikan jaminan penyertaan dan pertolongan kepada umat-Nya.",
    theme: "Penghiburan"
  },
  {
    verse: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
    reference: "Matius 11:28",
    context: "Undangan Yesus kepada semua orang yang membutuhkan istirahat dan kedamaian.",
    theme: "Istirahat"
  },
  {
    verse: "Sebab Allah begitu mengasihi dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
    reference: "Yohanes 3:16",
    context: "Ayat yang merangkum inti dari kasih Allah dan rencana keselamatan.",
    theme: "Kasih Allah"
  },
  {
    verse: "Bergembiralah senantiasa dalam Tuhan! Sekali lagi kukatakan: Bergembiralah!",
    reference: "Filipi 4:4",
    context: "Paulus mengingatkan jemaat untuk selalu bersukacita dalam Tuhan.",
    theme: "Sukacita"
  }
];

export default function BibleVerse() {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse>(bibleVerses[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVerses, setFilteredVerses] = useState<BibleVerse[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Get verse based on day of year
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const verseIndex = dayOfYear % bibleVerses.length;
    setCurrentVerse(bibleVerses[verseIndex]);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = bibleVerses.filter(verse => 
        verse.verse.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verse.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verse.theme.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVerses(filtered);
    } else {
      setFilteredVerses([]);
    }
  }, [searchTerm]);

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    setCurrentVerse(bibleVerses[randomIndex]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Firman Allah Hari Ini</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tema: {currentVerse.theme}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            title="Cari Ayat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            onClick={getRandomVerse}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            title="Ayat Acak"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari ayat berdasarkan kata kunci atau tema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Search Results */}
          {filteredVerses.length > 0 && (
            <div className="mt-4 max-h-40 overflow-y-auto">
              {filteredVerses.map((verse, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentVerse(verse);
                    setSearchTerm("");
                    setShowSearch(false);
                  }}
                  className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300 truncate">{verse.verse.substring(0, 80)}...</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{verse.reference} - {verse.theme}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Verse Display */}
      <div className="bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 rounded-lg p-6 border-l-4 border-emerald-500">
        <blockquote className="text-lg md:text-xl font-serif text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          "{currentVerse.verse}"
        </blockquote>
        <cite className="text-emerald-700 dark:text-emerald-400 font-semibold">
          — {currentVerse.reference}
        </cite>
      </div>

      {/* Context */}
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Konteks:</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {currentVerse.context}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
          Simpan Ayat
        </button>
        <button className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-semibold transition-colors">
          Bagikan
        </button>
      </div>
    </div>
  );
}