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
    <section className="relative w-full h-[70vh] bg-gray-950 overflow-hidden">
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-3xl font-black uppercase tracking-wider md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-amber-500">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}