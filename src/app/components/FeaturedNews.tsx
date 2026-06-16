// src/components/FeaturedNews.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AsetGambarType } from "@/data/data";

interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
  gambarKunci?: keyof AsetGambarType;
}

interface FeaturedNewsProps {
  latestNews: Berita[];
  gambar: AsetGambarType;
}

export function FeaturedNews({ latestNews, gambar }: FeaturedNewsProps) {
  return (
    <section className="w-full bg-white overflow-hidden py-12 pb-20">
      <div className="mx-auto max-w-360 px-6 md:px-10">
        
        {/* Judul Utama Seksi */}
        <h2 className="mb-14 text-center text-3xl font-black uppercase tracking-wider text-gray-950 md:text-4xl">
          Berita & Advokasi Terbaru
        </h2>

        {/* List Berita (Susunan Vertikal Berjarak) */}
        <div className="flex flex-col gap-12">
          {latestNews.map((item, index) => {
            const isRightText = index % 2 === 1;
            const gambarTerpilih = gambar[item.gambarKunci as keyof typeof gambar];

            return (
              <div 
                key={item.id} 
                className={`relative flex min-h-125 w-full items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-950 shadow-md transition-all duration-500 hover:shadow-xl md:min-h-145 lg:min-h-160
                  ${isRightText ? "justify-end" : "justify-start"}`}
              >
                {/* 1. LAYER GAMBAR UTAMA */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <Image 
                    src={gambarTerpilih} 
                    alt={item.title}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-cover"
                  />
                </div>

                {/* 2. LAYER OVERLAY GRADASI (Optimalisasi Sintaks Tailwind v4) */}
                {/* Di HP: Gradasi dari bawah ke atas agar teks di bawah terbaca. Di Desktop: Gradasi dari samping kiri/kanan */}
                <div 
                  className={`absolute inset-0 z-10 h-full w-full transition-opacity duration-300
                    ${isRightText 
                      ? "bg-linear-to-t from-black via-black/90 to-transparent md:bg-linear-to-l md:from-black md:via-black/85 md:to-transparent" 
                      : "bg-linear-to-t from-black via-black/90 to-transparent md:bg-linear-to-r md:from-black md:via-black/85 md:to-transparent"}`}
                ></div>
                
                {/* 3. SEKSI KONTEN TEKS ADVOKASI */}
                <div className="relative z-20 w-full p-6 text-white md:max-w-137.5 md:p-12 lg:max-w-162.5 lg:p-20">
                  
                  {/* Badge Kategori */}
                  <span 
                    style={{ backgroundColor: item.color || "#111111" }} 
                    className="inline-block rounded-xs px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                  >
                    {item.category || "Advokasi"}
                  </span>
                  
                  {/* Judul Berita */}
                  <h3 className="mb-4 mt-6 text-xl font-black leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>
                  
                  {/* Tanggal */}
                  <p className="mb-4 text-xs font-semibold tracking-wide text-gray-400">
                    {item.date}
                  </p>
                  
                  {/* Cuplikan Deskripsi */}
                  <p className="mb-8 text-justify text-sm leading-relaxed text-gray-200 sm:text-base">
                    {item.excerpt}
                  </p>
                  
                  {/* Link Baca Selengkapnya */}
                  <Link 
                    href={`/berita/${item.id}`} 
                    className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-bold text-white transition-all hover:gap-4 sm:text-base"
                  >
                    Baca Selengkapnya ➔
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* TOMBOL LIHAT SEMUA PUBLIKASI */}
        <div className="mt-16 text-center">
          <Link 
            href="/publikasi" 
            className="inline-block rounded-lg border-2 border-gray-950 bg-transparent px-8 py-3.5 text-base font-bold text-gray-950 transition-all duration-300 hover:bg-gray-950 hover:text-white"
          >
            Lihat Semua Publikasi
          </Link>
        </div>

      </div>
    </section>
  );
}