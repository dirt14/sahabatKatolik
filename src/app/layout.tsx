import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AccessibilityControls from "@/components/AccessibilityControls";

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
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-inter antialiased transition-colors duration-200">
        <ThemeProvider>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo-sahabat-katolik.svg" 
                  alt="Logo Sahabat Katolik"
                  className="h-10 w-10"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">Sahabat Katolik</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Portal Rohani Digital</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Beranda
                </a>
                <a href="/doa" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Kumpulan Doa
                </a>
                <a href="/live-streaming" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Live Streaming
                </a>
                <a href="/kalender-liturgi" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Kalender Liturgi
                </a>
                <a href="/komunitas" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Komunitas
                </a>
                <a href="/tentang" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200">
                  Tentang
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/logo-sahabat-katolik.svg" 
                    alt="Logo Sahabat Katolik"
                    className="h-10 w-10"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Sahabat Katolik</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Portal Rohani Digital</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                  Website Katolik modern yang menyediakan doa, liturgi, renungan, dan pelayanan rohani digital 
                  untuk membantu umat dalam perjalanan iman mereka.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Beranda</a></li>
                  <li><a href="/doa" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Kumpulan Doa</a></li>
                  <li><a href="/live-streaming" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Live Streaming</a></li>
                  <li><a href="/kalender-liturgi" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Kalender Liturgi</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Email: info@sahabatkatolik.id</li>
                  <li>Website: sahabatkatolik.id</li>
                  <li>Pelayanan 24/7</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 Sahabat Katolik. Semua hak dilindungi.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                Dibuat dengan ❤️ untuk umat Katolik Indonesia
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