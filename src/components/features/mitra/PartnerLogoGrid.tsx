// src/components/features/mitra/PartnerLogoGrid.tsx
"use client";

import React from "react";
import Image from "next/image";

interface PartnerLogo {
  id: string;
  nama: string;
  logo: string;
  websiteUrl?: string; 
}

interface PartnerLogoGridProps {
  judul?: string;
  subjudul?: string;
  logos?: PartnerLogo[]; // Jadikan opsional dengan tanda tanya
}

export function PartnerLogoGrid({ 
  judul = "Mitra & Jaringan Strategis", 
  subjudul = "Didukung oleh instansi pemerintah, jaringan kelurahan, dan jejaring firma hukum profesional", 
  logos = [] // 💡 Berikan nilai default array kosong di sini untuk mencegah error undefined
}: PartnerLogoGridProps) {
  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* HEADER SEKSI */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 block mb-2">
            {subjudul}
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-950">
            {judul}
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-amber-600/60"></div>
        </div>

        {/* GRID LOGO PURE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((item) => {
            const content = (
              <div 
                key={item.id}
                className="group relative w-36 h-20 sm:w-40 sm:h-24 flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={item.logo}
                  alt={item.nama}
                  fill
                  className="object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            );

            return item.websiteUrl ? (
              <a 
                key={item.id}
                href={item.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title={item.nama}
                className="focus:outline-hidden"
              >
                {content}
              </a>
            ) : (
              <div key={item.id} title={item.nama}>
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}