// src/components/layout/SubPageHeader.tsx
import React from "react";
import Image from "next/image";

interface SubPageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export function SubPageHeader({ title, subtitle, bgImage }: SubPageHeaderProps) {
  return (
    <section className="relative w-full h-screen bg-gray-950 overflow-hidden">
      {/* Foto Latar Belakang */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          priority
          className="object-cover opacity-40 transition-transform duration-700 hover:scale-105" 
        />
      </div>

      {/* Teks Judul di Atas Foto */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center p-6 md:p-20 text-white text-left">
        <div className="mt-50"> 
          <h1 className="text-4xl font-black uppercase tracking-wider md:text-6xl drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm sm:text-lg text-gray-100 uppercase tracking-widest font-medium drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}