import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AccessibilityControls from "@/components/AccessibilityControls";
import Navbar from "@/components/Navbar";
import { Cross, Heart, BookOpen, Info } from "lucide-react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sahabat Katolik - Portal Rohani Digital",
  description: "Website Katolik modern untuk doa, liturgi, renungan, dan pelayanan rohani digital. Temukan kedamaian dalam iman bersama Sahabat Katolik.",
  keywords: "katolik, doa, liturgi, misa, renungan, rohani, gereja, iman",
  authors: [{ name: "Sahabat Katolik" }],
  openGraph: {
    title: "Sahabat Katolik - Portal Rohani Digital",
    description: "Website Katolik modern untuk doa, liturgi, renungan, dan pelayanan rohani digital.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-inter antialiased">
        <ThemeProvider>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6 group">
                  <div className="relative">
                    <Cross className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                    <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Sahabat Katolik</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Portal Rohani Digital</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mb-6">
                  Website Katolik modern yang menyediakan doa, liturgi, renungan, dan pelayanan rohani digital 
                  untuk membantu umat dalam perjalanan iman mereka.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Melayani dengan kasih untuk umat Katolik Indonesia</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Navigasi</span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2 group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-emerald-600 transition-colors duration-200"></span>
                      <span>Beranda</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/doa" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2 group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-emerald-600 transition-colors duration-200"></span>
                      <span>Kumpulan Doa</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/live-streaming" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2 group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-emerald-600 transition-colors duration-200"></span>
                      <span>Live Streaming</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kalender-liturgi" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2 group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-emerald-600 transition-colors duration-200"></span>
                      <span>Kalender Liturgi</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center space-x-2">
                  <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Kontak</span>
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-1">✉</span>
                    <span>info@sahabatkatolik.id</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-1">🌐</span>
                    <span>sahabatkatolik.id</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-1">🕊</span>
                    <span>Pelayanan 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider with Cross */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-gray-800 px-4">
                  <Cross className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 Sahabat Katolik. Semua hak dilindungi.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                <span>Dibuat dengan</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>untuk umat Katolik Indonesia</span>
              </p>
            </div>
          </div>
        </footer>

        {/* Accessibility Controls */}
        <AccessibilityControls />
        </ThemeProvider>
      </body>
    </html>
  );
}