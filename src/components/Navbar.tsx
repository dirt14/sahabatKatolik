"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cross, Heart, BookOpen, Calendar, Radio, Users, Info } from "lucide-react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHidden(true);
      } else {
        // Scrolling up or at top
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Cross className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
              <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">Sahabat Katolik</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Portal Rohani Digital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <BookOpen className="w-4 h-4" />
              <span>Beranda</span>
            </Link>
            <Link href="/doa" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <Heart className="w-4 h-4" />
              <span>Doa</span>
            </Link>
            <Link href="/live-streaming" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <Radio className="w-4 h-4" />
              <span>Live</span>
            </Link>
            <Link href="/kalender-liturgi" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <Calendar className="w-4 h-4" />
              <span>Liturgi</span>
            </Link>
            <Link href="/komunitas" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <Users className="w-4 h-4" />
              <span>Komunitas</span>
            </Link>
            <Link href="/tentang" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg font-medium transition-all duration-200">
              <Info className="w-4 h-4" />
              <span>Tentang</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
