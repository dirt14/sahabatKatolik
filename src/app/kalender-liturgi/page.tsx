"use client";

import { useState, useEffect } from "react";
import { getLiturgicalColor } from "@/lib/liturgical-data";
import { formatDateToYYYYMMDD } from "@/lib/utils";

interface LiturgiData {
  bacaan1?: string;
  bacaan2?: string;
  mazmur?: string;
  injil?: string;
  warna_liturgi?: string;
}

export default function KalenderLiturgiPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 🔥 Data dari database PostgreSQL
  const [liturgi, setLiturgi] = useState<LiturgiData | null>(null);
  const [loading, setLoading] = useState(false);

  // Ambil data liturgi dari API sesuai tanggal
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

  // Auto-load data untuk hari ini saat komponen mount
  useEffect(() => {
    setSelectedDate(today);
    fetchLiturgiByDate(today);
  }, []);

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
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

      const backgroundClass = isCurrentMonth(date)
        ? isSameDay(date, selectedDate || new Date())
          ? "bg-blue-600 text-white"
          : "bg-white"
        : "bg-gray-100 text-gray-400";

      calendarDays.push(
        <button
          key={day}
          className={`py-4 text-center rounded-lg shadow-sm transition hover:bg-blue-200 ${backgroundClass}`}
          onClick={() => {
            setSelectedDate(date);
            fetchLiturgiByDate(date); // 🔥 ambil data database
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
    <main className="max-w-4xl mx-auto px-6 py-10">

      {/* Judul dan Navigasi Kalender */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Kalender Liturgi</h1>
        <p className="text-gray-600">Lihat bacaan dan renungan berdasarkan tanggal</p>
      </div>

      {/* Navigasi Bulan */}
      <div className="flex justify-between items-center mb-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={previousMonth}
        >
          Sebelumnya
        </button>
        <h2 className="text-2xl font-bold">
          {months[currentMonth]} {currentYear}
        </h2>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={nextMonth}
        >
          Selanjutnya
        </button>
      </div>

      {/* Kalender */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-4">
        {days.map((day) => (
          <div key={day} className="py-2 text-gray-700">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>

      {/* Detail Tanggal */}
      {selectedDate && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {selectedDate.getDate()} {months[selectedDate.getMonth()]}{" "}
            {selectedDate.getFullYear()}
          </h2>

          {/* 🔥 Info Warna Liturgi */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-4 h-4 rounded-full border"
              style={{
                backgroundColor:
                  liturgi?.warna_liturgi || getLiturgicalColor(selectedDate).color,
              }}
            ></div>
            <span className="text-lg">
              Warna Liturgi:{" "}
              <strong>
                {liturgi?.warna_liturgi || getLiturgicalColor(selectedDate).name}
              </strong>
            </span>
          </div>

          {/* 🔥 Bacaan Hari Ini */}
          <h3 className="text-xl font-semibold mb-2">Bacaan Hari Ini</h3>

          {loading ? (
            <p className="text-gray-500">Memuat...</p>
          ) : liturgi ? (
            <>
              <p><strong>Bacaan I:</strong> {liturgi.bacaan1}</p>
              <p><strong>Bacaan II:</strong> {liturgi.bacaan2}</p>
              <p><strong>Mazmur:</strong> {liturgi.mazmur}</p>
              <p><strong>Injil:</strong> {liturgi.injil}</p>
            </>
          ) : (
            <p className="text-gray-500">Tidak ada data bacaan untuk tanggal ini.</p>
          )}
        </div>
      )}
    </main>
  );
}