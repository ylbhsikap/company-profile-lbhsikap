// src/app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedNews } from "@/app/components/FeaturedNews";
import { BerandaData, asetGambar, AsetGambarType } from "@/data/data"; 

interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
  gambarKunci?: keyof AsetGambarType;
}

export default function Home() {
  const gambar = asetGambar as AsetGambarType;
  const latestNews: Berita[] = BerandaData ? (BerandaData as Berita[]).slice(0, 3) : [];

  return (
    <main className="w-full bg-white">
      {/* BANNER UTAMA (Hero Section Tailwind Version) */}
      <section className="relative flex h-[80vh] min-h-125 w-full items-center justify-center overflow-hidden lg:h-[90vh]">
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Permanen Error Position) */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.bannerUtama} 
            alt="Interior LBH SIKAP" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* 2. Overlay Gelap (Premium Monochrome) */}
        <div className="absolute inset-0 z-10 bg-black/65"></div>
        
        {/* 3. Konten Teks */}
        <div className="relative z-20 w-11/12 max-w-300 text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider leading-tight sm:text-4xl md:text-5xl lg:text-6xl uppercase">
            LEMBAGA BANTUAN HUKUM SIKAP YOGYAKARTA
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg">
            Membela hak konstitusional masyarakat miskin, buta hukum, dan korban kesewenang-wenangan secara pro bono.
          </p>
          
          {/* Tombol CTA */}
          <div className="mt-8">
            <Link 
              href="/layanan" 
              className="inline-block rounded-md bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-950 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 sm:text-base"
            >
              Ajukan Bantuan Hukum
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION BERITA TERBARU */}
      <FeaturedNews latestNews={latestNews} gambar={gambar} />
      
    </main>
  );
}