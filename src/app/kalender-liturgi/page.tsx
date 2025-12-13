"use client";

import { useState, useEffect } from "react";
import { formatDateToYYYYMMDD } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight, BookOpen, Sparkles } from "lucide-react";

interface LiturgiData {
  bacaan1?: string;
  bacaan2?: string;
  mazmur?: string;
  injil?: string;
  warna_liturgi?: string;
  peringatan_hari?: string;
}

export default function KalenderLiturgiPage() {
  const [today] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [liturgi, setLiturgi] = useState<LiturgiData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLiturgiByDate = async (date: Date) => {
    setLoading(true);
    const formattedDate = formatDateToYYYYMMDD(date);

    try {
      const res = await fetch(`/api/kalender_liturgi?date=${formattedDate}`);
      const data = await res.json();
      setLiturgi(data || null);
    } catch (err) {
      console.error("Fetch error:", err);
      setLiturgi(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    setSelectedDate(today);
    fetchLiturgiByDate(today);
  }, [today]);

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const isSameDay = (date1: Date, date2: Date) =>
    date1 &&
    date2 &&
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const isCurrentMonth = (date: Date) =>
    date.getMonth() === currentMonth && date.getFullYear() === currentYear;

  const isToday = (date: Date) => isSameDay(date, today);

  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="py-4 text-center" />
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);

      const isSelected = isSameDay(date, selectedDate || new Date());
      const isTodayDate = isToday(date);
      const isCurrentMonthDate = isCurrentMonth(date);

      let backgroundClass = "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300";
      
      if (isSelected) {
        backgroundClass = "bg-emerald-600 dark:bg-emerald-500 text-white shadow-lg scale-105";
      } else if (isTodayDate) {
        backgroundClass = "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 font-semibold border-2 border-emerald-600 dark:border-emerald-400";
      } else if (!isCurrentMonthDate) {
        backgroundClass = "bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600";
      }

      calendarDays.push(
        <button
          key={day}
          className={`py-4 text-center rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 ${backgroundClass}`}
          onClick={() => {
            setSelectedDate(date);
            fetchLiturgiByDate(date);
          }}
        >
          {day}
        </button>
      );
    }

    return calendarDays;
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50/30 dark:from-gray-900 dark:to-amber-900/10">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 dark:from-amber-800 dark:via-amber-900 dark:to-gray-900 text-white py-20 overflow-hidden">
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
                  <Calendar className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Kalender Liturgi</h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Lihat bacaan dan renungan liturgi berdasarkan tanggal
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kalender */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              {/* Navigasi Bulan */}
              <div className="flex justify-between items-center mb-8">
                <button
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 font-medium"
                  onClick={previousMonth}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {months[currentMonth]} {currentYear}
                </h2>
                <button
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 font-medium"
                  onClick={nextMonth}
                >
                  <span className="hidden sm:inline">Selanjutnya</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Header Hari */}
              <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-4">
                {days.map((day) => (
                  <div key={day} className="py-2 text-gray-600 dark:text-gray-400 text-sm">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grid Kalender */}
              <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-300">Dipilih</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-600 dark:border-emerald-400 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-300">Hari Ini</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detail Tanggal */}
          <div className="lg:col-span-1">
            {selectedDate && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 sticky top-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedDate.getDate()} {months[selectedDate.getMonth()]}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedDate.getFullYear()}</p>
                  </div>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ) : liturgi ? (
                  <div className="space-y-6">
                    {/* Warna Liturgi */}
                    <div className="bg-gradient-to-r from-gray-50 to-amber-50/50 dark:from-gray-700/50 dark:to-amber-900/20 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-700 shadow-lg"
                          style={{
                            backgroundColor:
                              liturgi.warna_liturgi === "Hijau"
                                ? "#10B981"
                                : liturgi.warna_liturgi === "Putih"
                                ? "#FFFFFF"
                                : liturgi.warna_liturgi === "Merah"
                                ? "#EF4444"
                                : "#A855F7",
                          }}
                        ></div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Warna Liturgi</p>
                          <p className="font-semibold text-gray-800 dark:text-white">
                            {(() => {
                              const warna = liturgi?.warna_liturgi?.toLowerCase();
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
                      </div>
                      {liturgi.peringatan_hari && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {liturgi.peringatan_hari}
                        </p>
                      )}
                    </div>

                    {/* Bacaan */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <span>Bacaan Hari Ini</span>
                      </h3>
                      <div className="space-y-3">
                        {liturgi.bacaan1 && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Bacaan I</p>
                            <p className="text-gray-700 dark:text-gray-200">{liturgi.bacaan1}</p>
                          </div>
                        )}
                        {liturgi.mazmur && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Mazmur</p>
                            <p className="text-gray-700 dark:text-gray-200">{liturgi.mazmur}</p>
                          </div>
                        )}
                        {liturgi.bacaan2 && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Bacaan II</p>
                            <p className="text-gray-700 dark:text-gray-200">{liturgi.bacaan2}</p>
                          </div>
                        )}
                        {liturgi.injil && (
                          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-4 border-l-4 border-amber-600 dark:border-amber-400">
                            <p className="text-xs text-amber-700 dark:text-amber-300 mb-1 font-semibold">Injil</p>
                            <p className="text-gray-800 dark:text-gray-100 font-medium">{liturgi.injil}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-300 dark:text-gray-600 mb-4">
                      <BookOpen className="w-16 h-16 mx-auto" strokeWidth={1} />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Tidak ada data bacaan untuk tanggal ini.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}