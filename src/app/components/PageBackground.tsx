// src/components/PageBackground.tsx
import React from 'react';
import Image from 'next/image';

interface PageBackgroundProps {
  src: string;
  alt?: string;
}

export default function PageBackground({ src, alt = "Latar Belakang Halaman" }: PageBackgroundProps) {
  return (
    // WADAH UTAMA: Mengunci posisi fixed melayang di seluruh layar di balik semua konten (z-[-1])
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-gray-950">
      
      {/* 💡 DIV PENYELAMAT: Menjadi direct parent absolute yang valid untuk Next.js Image fill */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={src} // Berubah dinamis sesuai halaman yang memanggilnya
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center scale-102 blur-xs opacity-40 transition-all duration-700"
          priority
        />
      </div>
      
      {/* OVERLAY GELAP GRADASI PREMIUM */}
      {/* Menggunakan kombinasi opacity hitam arang agar teks putih di atasnya terlihat sangat tajam */}
      <div className="absolute inset-0 z-10 h-full w-full bg-linear-to-b from-black/60 via-black/40 to-gray-950"></div>
      
    </div>
  );
}