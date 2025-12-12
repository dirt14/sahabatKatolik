"use client";

import { useState, useEffect } from "react";

const vaticanImages = [
  {
    url: "https://placehold.co/1920x1080?text=Basilika+Santo+Petrus+Vatikan+dengan+Kubah+Megah+dan+Langit+Biru+Cerah",
    alt: "Basilika Santo Petrus Vatikan dengan kubah megah dan langit biru cerah",
    title: "Basilika Santo Petrus"
  },
  {
    url: "https://placehold.co/1920x1080?text=Lapangan+Santo+Petrus+Vatikan+dengan+Kolom+Bernini+dan+Obelisk+Mesir",
    alt: "Lapangan Santo Petrus Vatikan dengan kolom Bernini dan obelisk Mesir di tengah",
    title: "Lapangan Santo Petrus"
  },
  {
    url: "https://placehold.co/1920x1080?text=Kapel+Sistina+Vatikan+dengan+Lukisan+Michelangelo+dan+Cahaya+Emas",
    alt: "Kapel Sistina Vatikan dengan lukisan Michelangelo dan cahaya emas yang indah",
    title: "Kapel Sistina"
  },
  {
    url: "https://placehold.co/1920x1080?text=Taman+Vatikan+dengan+Pemandangan+Hijau+dan+Arsitektur+Klasik+Roma",
    alt: "Taman Vatikan dengan pemandangan hijau dan arsitektur klasik Roma yang menawan",
    title: "Taman Vatikan"
  }
];

export default function VaticanSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vaticanImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {vaticanImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0' 
                : index < currentSlide 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Sahabat <span className="text-emerald-400">Katolik</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Portal rohani digital untuk mendampingi perjalanan iman Anda
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Temukan kedamaian dalam doa, liturgi, dan renungan harian bersama komunitas Katolik Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {vaticanImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Slide ${index + 1}: ${vaticanImages[index].title}`}
            />
          ))}
        </div>
      </div>

      {/* Current Image Title */}
      <div className="absolute bottom-20 left-8 z-20">
        <div className="bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">{vaticanImages[currentSlide].title}</p>
        </div>
      </div>

      {/* Navigation Arrows (Optional - Hidden by default) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + vaticanImages.length) % vaticanImages.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % vaticanImages.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}