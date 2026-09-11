// src/components/features/cabang/BranchHeroSection.tsx
import React from "react";
import Image from "next/image";
import { asetGambar } from "@/data/data";

interface BranchHeroSectionProps {
  info: {
    nama: string;
    kota: string;
    bannerCabang?: string;
  };
}

export function BranchHeroSection({ info }: BranchHeroSectionProps) {
  return (
    <section id="hero" className="relative w-full h-screen bg-gray-950 scroll-mt-0">
      <div className="absolute inset-0 z-0">
        <Image 
          src={info.bannerCabang || asetGambar.bannerUtama} 
          alt={info.nama} 
          fill 
          priority
          className="object-cover opacity-60" 
        />
      </div>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="pt-20"> 
          <span className="inline-block bg-amber-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
            Kantor Wilayah Resmi
          </span>
          <h1 className="text-3xl font-black uppercase tracking-wider md:text-5xl max-w-4xl leading-tight mb-4">
            {info.nama}
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-200 max-w-2xl uppercase tracking-widest font-medium text-center mx-auto">
            Mewujudkan Akses Keadilan & Pendampingan Hukum Structural di {info.kota}
          </p>
        </div>
      </div>
    </section>
  );
}