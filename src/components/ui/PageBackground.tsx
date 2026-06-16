// src/components/PageBackground.tsx
import React from 'react';
import Image from 'next/image';

interface PageBackgroundProps {
  src: string;
  alt?: string;
}

export default function PageBackground({ src, alt = "Latar Belakang Halaman" }: PageBackgroundProps) {
  return (
    // 'fixed inset-0' memastikan latar belakang selalu menutup layar
    <div className="fixed inset-0 -z-10 h-dvh w-full overflow-hidden bg-gray-950">
      
      {/* WAJIB: Tambahkan 'relative' agar Image fill punya anchor yang tepat */}
      <div className="relative w-full h-full z-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 blur-xs opacity-40 transition-all duration-700"
          priority
        />
      </div>
      
      {/* Gradient di Tailwind v4 sudah mendukung sintaks linear-to */}
      <div className="absolute inset-0 z-10 h-full w-full bg-linear-to-b from-black/60 via-black/40 to-gray-950"></div>
      
    </div>
  );
}