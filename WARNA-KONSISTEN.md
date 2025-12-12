# 🎨 Panduan Konsistensi Warna - Website Sahabat Katolik

## 📋 **Sistem Warna Utama**

### 🟢 **Primary Color - Emerald (Hijau Soft)**
- **Makna**: Pertumbuhan spiritual, kedamaian, harapan
- **Penggunaan**: Tombol utama, link, accent utama
- **Kode Warna**:
  - `emerald-50` - Background sangat terang
  - `emerald-100` - Background terang  
  - `emerald-400` - Warna medium
  - `emerald-500` - Warna standar
  - `emerald-600` - **Warna utama** (tombol, link)
  - `emerald-700` - Hover state
  - `emerald-800` - Warna gelap
  - `emerald-900` - Warna sangat gelap

### 🟡 **Secondary Color - Amber (Emas Soft)**
- **Makna**: Kemuliaan ilahi, cahaya spiritual, kebijaksanaan
- **Penggunaan**: Accent kedua, highlight, kalender liturgi
- **Kode Warna**:
  - `amber-50` - Background sangat terang
  - `amber-100` - Background terang
  - `amber-400` - Warna medium
  - `amber-500` - Warna standar
  - `amber-600` - **Warna utama** (header kalender liturgi)
  - `amber-700` - Hover state
  - `amber-800` - Warna gelap
  - `amber-900` - Warna sangat gelap

### ⚪ **Neutral Colors - Gray**
- **Makna**: Keseimbangan, profesional, mudah dibaca
- **Penggunaan**: Teks, background, border
- **Kode Warna**:
  - `white` - Background utama
  - `gray-50` - Background section
  - `gray-100` - Background card
  - `gray-200` - Border ringan
  - `gray-300` - Border medium
  - `gray-400` - Border tegas
  - `gray-500` - Teks muted
  - `gray-600` - Teks body
  - `gray-700` - Teks medium
  - `gray-800` - **Teks heading**
  - `gray-900` - Teks sangat gelap

---

## 🎯 **Implementasi Per Halaman**

### 🏠 **Halaman Beranda (`/`)**
- **Header**: `bg-gradient-to-br from-white via-gray-50 to-emerald-50`
- **Tombol Utama**: `bg-emerald-600 hover:bg-emerald-700`
- **Tombol Sekunder**: `bg-white text-emerald-600 border-emerald-600`
- **Section Divider**: `bg-emerald-600`
- **Gradient Box**: `from-emerald-50 to-amber-50`

### 📿 **Halaman Doa (`/doa`)**
- **Header**: `bg-gradient-to-r from-emerald-600 to-emerald-700`
- **Text Header**: `text-emerald-100`
- **Kategori Active**: `bg-emerald-100 text-emerald-800 border-emerald-600`
- **Tombol**: `bg-emerald-600 hover:bg-emerald-700`

### 📺 **Halaman Live Streaming (`/live-streaming`)**
- **Header**: `bg-gradient-to-br from-emerald-600 to-emerald-700`
- **Text Header**: `text-emerald-100`
- **Live Badge**: `bg-red-600` (khusus untuk live indicator)
- **Tombol**: `bg-emerald-600 hover:bg-emerald-700`
- **Schedule Time**: `text-emerald-600 bg-emerald-100`

### 📅 **Halaman Kalender Liturgi (`/kalender-liturgi`)**
- **Header**: `bg-gradient-to-br from-amber-600 to-amber-700`
- **Text Header**: `text-amber-100`
- **Calendar Header**: `bg-gradient-to-r from-amber-600 to-amber-700`
- **Today Indicator**: `ring-amber-500 bg-amber-500`
- **Hover**: `hover:bg-amber-500`

### 👥 **Halaman Komunitas (`/komunitas`)**
- **Header**: `bg-gradient-to-r from-emerald-600 to-emerald-700`
- **Text Header**: `text-emerald-100`
- **Saint Icon**: `bg-amber-100 text-amber-600`
- **Bible Icon**: `bg-emerald-100 text-emerald-600`
- **Prayer Icon**: `bg-emerald-100 text-emerald-600`
- **News Icon**: `bg-amber-100 text-amber-600`

### ℹ️ **Halaman Tentang (`/tentang`)**
- **Header**: `bg-gradient-to-r from-emerald-600 to-emerald-700`
- **Text Header**: `text-emerald-100`
- **Feature Icons**: `bg-emerald-100 text-emerald-600`
- **Gradient Box**: `from-emerald-50 to-amber-50`

---

## 🎨 **Komponen Konsisten**

### 🧭 **Navbar**
- **Background**: `bg-white/95 dark:bg-gray-900/95`
- **Text**: `text-gray-700 dark:text-gray-300`
- **Hover**: `hover:text-emerald-600 dark:hover:text-emerald-400`
- **Logo**: Menggunakan logo SVG kustom

### 🦶 **Footer**
- **Background**: `bg-gray-50 dark:bg-gray-800`
- **Text**: `text-gray-600 dark:text-gray-400`
- **Heading**: `text-gray-800 dark:text-white`
- **Links**: `hover:text-emerald-600 dark:hover:text-emerald-400`

### 🎛️ **Accessibility Controls**
- **Button**: `bg-emerald-600 hover:bg-emerald-700`
- **Panel**: `bg-white dark:bg-gray-800`
- **Toggle Active**: `bg-emerald-600`

---

## 🌙 **Dark Mode Konsistensi**

### **Background Colors**
- **Main**: `bg-white dark:bg-gray-900`
- **Card**: `bg-white dark:bg-gray-800`
- **Section**: `bg-gray-50 dark:bg-gray-900`

### **Text Colors**
- **Heading**: `text-gray-800 dark:text-white`
- **Body**: `text-gray-600 dark:text-gray-400`
- **Muted**: `text-gray-500 dark:text-gray-500`

### **Border Colors**
- **Light**: `border-gray-200 dark:border-gray-700`
- **Medium**: `border-gray-300 dark:border-gray-600`

---

## 🚫 **Warna yang TIDAK Digunakan**

### ❌ **Warna Inkonsisten yang Dihindari**
- ~~`blue-600`~~ (diganti dengan `emerald-600`)
- ~~`purple-600`~~ (diganti dengan `amber-600` untuk liturgi)
- ~~`orange-600`~~ (diganti dengan `amber-600`)
- ~~`green-500`~~ (diganti dengan `emerald-600`)

### ✅ **Pengecualian Khusus**
- **Live Indicator**: `bg-red-600` (untuk status live streaming)
- **Liturgical Colors**: Warna liturgi asli (hijau, putih, merah, ungu, pink)
- **Category Tags**: Warna berbeda untuk kategori doa/prayer requests

---

## 📐 **Aturan Implementasi**

### 1. **Prioritas Warna**
1. **Emerald** - Warna utama untuk semua interaksi
2. **Amber** - Warna sekunder untuk highlight
3. **Gray** - Warna netral untuk teks dan background
4. **Red** - Hanya untuk live indicator dan error

### 2. **Konsistensi Header**
- Semua halaman menggunakan gradient emerald KECUALI:
  - Kalender Liturgi: `amber-600 to amber-700`

### 3. **Konsistensi Tombol**
- **Primary**: `bg-emerald-600 hover:bg-emerald-700`
- **Secondary**: `bg-white text-emerald-600 border-emerald-600`
- **Accent**: `bg-amber-600 hover:bg-amber-700` (khusus liturgi)

### 4. **Konsistensi Icon Background**
- **Default**: `bg-emerald-100 text-emerald-600`
- **Liturgi/Santo**: `bg-amber-100 text-amber-600`
- **Dark Mode**: Tambahkan `dark:bg-emerald-900 dark:text-emerald-400`

---

## ✅ **Checklist Konsistensi**

- [x] ✅ Beranda - Emerald sebagai warna utama
- [x] ✅ Doa - Emerald header dan tombol
- [x] ✅ Live Streaming - Emerald header (bukan red)
- [x] ✅ Kalender Liturgi - Amber header (sesuai tema)
- [x] ✅ Komunitas - Emerald header, amber untuk santo
- [x] ✅ Tentang - Emerald header dan accent
- [x] ✅ Navbar - Emerald hover untuk semua link
- [x] ✅ Footer - Emerald hover untuk link
- [x] ✅ Components - Emerald sebagai warna utama
- [x] ✅ Dark Mode - Konsisten di semua halaman

---

## 🎯 **Hasil Akhir**

Website "Sahabat Katolik" sekarang memiliki **konsistensi warna yang sempurna** dengan:

- **Emerald (Hijau Soft)** sebagai warna utama di seluruh website
- **Amber (Emas Soft)** sebagai warna sekunder untuk elemen liturgi
- **Gray** sebagai warna netral yang konsisten
- **Dark Mode** yang harmonis di semua halaman
- **Transisi smooth** antar warna dan tema

**Simbolisme Warna:**
- 🟢 **Emerald**: Pertumbuhan iman, kedamaian, harapan
- 🟡 **Amber**: Kemuliaan Allah, cahaya spiritual, kebijaksanaan
- ⚪ **White/Gray**: Kesucian, keseimbangan, profesionalisme

Website sekarang memberikan **pengalaman visual yang konsisten dan bermakna** untuk umat Katolik! 🙏