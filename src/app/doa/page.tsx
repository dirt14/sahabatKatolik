"use client";

import { useState } from "react";
import { prayers, prayerCategories } from "@/lib/liturgical-data";
import { Heart, Search, X, BookOpen, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-900/10">
      {/* Header - Lebih Rohani */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 dark:from-emerald-800 dark:via-emerald-900 dark:to-gray-900 text-white py-20 overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Heart className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Kumpulan Doa</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Temukan kedamaian dalam doa-doa tradisional Katolik yang telah menguatkan iman umat selama berabad-abad
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories & Search */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100 dark:border-gray-700">
              {/* Search */}
              <div className="mb-8">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center space-x-2">
                  <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Cari Doa</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Masukkan kata kunci..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Kategori Doa</span>
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("semua")}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      selectedCategory === "semua"
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 font-semibold shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    Semua Doa
                  </button>
                  {prayerCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 font-semibold shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{category.description}</div>
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
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                Menampilkan <span className="font-semibold text-emerald-600 dark:text-emerald-400">{filteredPrayers.length}</span> doa
                {selectedCategory !== "semua" && (
                  <span> dalam kategori <span className="font-semibold">"{prayerCategories.find(c => c.id === selectedCategory)?.name}"</span></span>
                )}
                {searchTerm && <span> untuk <span className="font-semibold">"{searchTerm}"</span></span>}
              </p>
            </div>

            {/* Prayer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrayers.map((prayer) => (
                <div
                  key={prayer.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 group"
                  onClick={() => setSelectedPrayer(prayer.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
                          <Heart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                          {prayer.title}
                        </h3>
                      </div>
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {prayerCategories.find(c => c.id === prayer.category)?.name}
                      </span>
                    </div>
                    
                    {prayer.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{prayer.description}</p>
                    )}
                    
                    <div className="text-gray-700 dark:text-gray-200 font-noto-serif leading-relaxed bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-700/50 dark:to-emerald-900/10 rounded-xl p-4">
                      <p className="line-clamp-3">
                        {prayer.content.split('\n')[0]}...
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <button className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                        <span>Baca Selengkapnya</span>
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPrayers.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-gray-300 dark:text-gray-600 mb-6">
                    <Search className="w-20 h-20 mx-auto" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-3">Tidak ada doa ditemukan</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("semua");
                    }}
                    className="inline-flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <span>Reset Pencarian</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prayer Modal - Lebih Elegan */}
      {selectedPrayerData && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{selectedPrayerData.title}</h2>
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm font-semibold px-3 py-1 rounded-full mt-2 inline-block">
                      {prayerCategories.find(c => c.id === selectedPrayerData.category)?.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPrayer(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              {selectedPrayerData.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-8 italic text-lg leading-relaxed bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 rounded-xl p-6 border-l-4 border-emerald-600 dark:border-emerald-400">
                  {selectedPrayerData.description}
                </p>
              )}
              
              <div className="prose prose-lg max-w-none">
                <div className="font-noto-serif text-gray-800 dark:text-gray-100 leading-relaxed text-lg whitespace-pre-line mb-8 bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-inner">
                  {selectedPrayerData.content}
                </div>
                
                {selectedPrayerData.latin && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <span>Teks Latin:</span>
                    </h4>
                    <div className="font-noto-serif text-gray-600 dark:text-gray-300 leading-relaxed italic whitespace-pre-line bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-8">
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