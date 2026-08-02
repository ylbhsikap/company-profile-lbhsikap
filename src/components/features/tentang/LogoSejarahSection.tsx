// src/components/features/tentang/LogoSejarahSection.tsx
"use client";

import React from "react";
import Image from "next/image";

interface LogoSejarahProps {
  logoUrl: string;
  namaLembaga: string;
  sejarahTeks: string;
  downloadUrl: string; // Link file download (misal: file ZIP logo HD atau PDF profil)
  downloadLabel?: string;
}

export function LogoSejarahSection({
  logoUrl,
  namaLembaga,
  sejarahTeks,
  downloadUrl,
  downloadLabel = "Unduh Logo & Profil Resmi (ZIP/PDF)"
}: LogoSejarahProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* JUDUL SEKSI */}
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 block mb-2">
          Identitas & Warisan Perjuangan
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-950">
          Logo & Sejarah Lembaga
        </h2>

        {/* LOGO SANGAT BESAR DI TENGAH */}
        <div className="my-12 md:my-16 flex flex-col items-center justify-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-transform duration-300 hover:scale-105">
            <Image
              src={logoUrl}
              alt={namaLembaga}
              fill
              priority
              className="object-contain drop-shadow-md"
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500">
            {namaLembaga}
          </p>
        </div>

        {/* SEJARAH SINGKAT */}
        <div className="mx-auto max-w-3xl text-left md:text-center mb-10">
          <h3 className="text-lg font-black uppercase tracking-wide text-gray-950 mb-4 text-center">
            Sejarah Singkat & Latar Belakang
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify md:text-center">
            {sejarahTeks}
          </p>
        </div>

        {/* TOMBOL DOWNLOAD */}
        <div className="pt-6">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-950 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-amber-600 shadow-md"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {downloadLabel}
          </a>
        </div>

      </div>
    </section>
  );
}