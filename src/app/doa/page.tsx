"use client";

import { useState } from "react";
import { prayers, prayerCategories } from "@/lib/liturgical-data";

export default function DoaPage() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrayer, setSelectedPrayer] = useState<string | null>(null);

  const filteredPrayers = prayers.filter(prayer => {
    const matchesCategory = selectedCategory === "semua" || prayer.category === selectedCategory;
    const matchesSearch = prayer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prayer.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedPrayerData = prayers.find(p => p.id === selectedPrayer);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kumpulan Doa</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Temukan kedamaian dalam doa-doa tradisional Katolik yang telah menguatkan iman umat selama berabad-abad
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories & Search */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cari Doa
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Masukkan kata kunci..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Kategori Doa</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("semua")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === "semua"
                        ? "bg-emerald-100 text-emerald-800 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Semua Doa
                  </button>
                  {prayerCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? "bg-emerald-100 text-emerald-800 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Menampilkan {filteredPrayers.length} doa
                {selectedCategory !== "semua" && (
                  <span> dalam kategori "{prayerCategories.find(c => c.id === selectedCategory)?.name}"</span>
                )}
                {searchTerm && <span> untuk "{searchTerm}"</span>}
              </p>
            </div>

            {/* Prayer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrayers.map((prayer) => (
                <div
                  key={prayer.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPrayer(prayer.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
                        {prayer.title}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {prayerCategories.find(c => c.id === prayer.category)?.name}
                      </span>
                    </div>
                    
                    {prayer.description && (
                      <p className="text-gray-600 text-sm mb-4">{prayer.description}</p>
                    )}
                    
                    <div className="text-gray-700 font-noto-serif leading-relaxed">
                      <p className="line-clamp-3">
                        {prayer.content.split('\n')[0]}...
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                        Baca Selengkapnya →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPrayers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada doa ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prayer Modal */}
      {selectedPrayerData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedPrayerData.title}</h2>
                  <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full mt-2 inline-block">
                    {prayerCategories.find(c => c.id === selectedPrayerData.category)?.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPrayer(null)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {selectedPrayerData.description && (
                <p className="text-gray-600 mb-6 italic">{selectedPrayerData.description}</p>
              )}
              
              <div className="prose prose-lg max-w-none">
                <div className="font-noto-serif text-gray-800 leading-relaxed text-lg whitespace-pre-line mb-8">
                  {selectedPrayerData.content}
                </div>
                
                {selectedPrayerData.latin && (
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Teks Latin:</h4>
                    <div className="font-noto-serif text-gray-600 leading-relaxed italic whitespace-pre-line">
                      {selectedPrayerData.latin}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}