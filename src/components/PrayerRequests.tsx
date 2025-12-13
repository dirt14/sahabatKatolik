"use client";

import { useState, useEffect } from "react";

interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  category: "kesehatan" | "keluarga" | "pekerjaan" | "spiritual" | "lainnya";
  timestamp: Date;
  prayerCount: number;
}

const categories = {
  kesehatan: { name: "Kesehatan", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
  keluarga: { name: "Keluarga", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
  pekerjaan: { name: "Pekerjaan", color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" },
  spiritual: { name: "Spiritual", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  lainnya: { name: "Lainnya", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200" }
};

export default function PrayerRequests() {
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    name: "",
    request: "",
    category: "spiritual" as keyof typeof categories
  });

  useEffect(() => {
    // Load prayer requests from localStorage
    const saved = localStorage.getItem("sahabat-katolik-prayer-requests");
    if (saved) {
      const parsed = JSON.parse(saved);
      setRequests(parsed.map((req: { timestamp: string | number | Date; }) => ({
        ...req,
        timestamp: new Date(req.timestamp)
      })));
    } else {
      // Sample data
      setRequests([
        {
          id: "1",
          name: "Maria S.",
          request: "Mohon doa untuk kesembuhan ayah saya yang sedang sakit kanker. Semoga Tuhan memberikan kekuatan dan kesembuhan.",
          category: "kesehatan",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          prayerCount: 23
        },
        {
          id: "2", 
          name: "Yosef A.",
          request: "Doa untuk keluarga kami yang sedang mengalami kesulitan ekonomi. Semoga Tuhan membuka jalan rezeki.",
          category: "keluarga",
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
          prayerCount: 18
        },
        {
          id: "3",
          name: "Anna K.",
          request: "Mohon doa untuk anak saya yang akan menghadapi ujian masuk universitas. Semoga diberi kemudahan.",
          category: "pekerjaan",
          timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
          prayerCount: 15
        }
      ]);
    }
  }, []);

  const saveRequests = (updatedRequests: PrayerRequest[]) => {
    setRequests(updatedRequests);
    localStorage.setItem("sahabat-katolik-prayer-requests", JSON.stringify(updatedRequests));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequest.name.trim() || !newRequest.request.trim()) return;

    const request: PrayerRequest = {
      id: Date.now().toString(),
      name: newRequest.name,
      request: newRequest.request,
      category: newRequest.category,
      timestamp: new Date(),
      prayerCount: 0
    };

    const updatedRequests = [request, ...requests];
    saveRequests(updatedRequests);
    
    setNewRequest({ name: "", request: "", category: "spiritual" });
    setShowForm(false);
  };

  const handlePray = (id: string) => {
    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, prayerCount: req.prayerCount + 1 } : req
    );
    saveRequests(updatedRequests);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Baru saja";
    if (diffInHours < 24) return `${diffInHours} jam lalu`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} hari lalu`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Intensi Doa Komunitas</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Berbagi dan mendoakan bersama</p>
          </div>
        </div>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          + Tambah Intensi
        </button>
      </div>

      {/* Add Prayer Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nama (Opsional)
              </label>
              <input
                type="text"
                value={newRequest.name}
                onChange={(e) => setNewRequest({ ...newRequest, name: e.target.value })}
                placeholder="Nama Anda atau inisial"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Kategori
              </label>
              <select
                value={newRequest.category}
                onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value as keyof typeof categories })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
              >
                {Object.entries(categories).map(([key, cat]) => (
                  <option key={key} value={key}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Intensi Doa *
            </label>
            <textarea
              value={newRequest.request}
              onChange={(e) => setNewRequest({ ...newRequest, request: e.target.value })}
              placeholder="Tuliskan intensi doa Anda..."
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Kirim Intensi
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {/* Prayer Requests List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {requests.map((request) => (
          <div key={request.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    {request.name ? request.name.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {request.name || "Anonim"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTimeAgo(request.timestamp)}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${categories[request.category].color}`}>
                {categories[request.category].name}
              </span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {request.request}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {request.prayerCount} orang telah berdoa
              </div>
              <button
                onClick={() => handlePray(request.id)}
                className="bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
              >
                🙏 Amin, saya doakan
              </button>
            </div>
          </div>
        ))}
        
        {requests.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p>Belum ada intensi doa. Jadilah yang pertama berbagi!</p>
          </div>
        )}
      </div>
    </div>
  );
}