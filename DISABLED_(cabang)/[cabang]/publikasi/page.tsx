// src/app/publikasi/page.tsx
import React from "react";
import Image from "next/image";
import PublikasiCard from "@/components/features/publikasi/PublikasiCard"; 
import { DokumenCard } from "@/components/DokumenCard"; 
import { publikasiData, publikasiDokumen, asetGambar, AsetGambarType } from "@/data/data"; 

interface PublikasiItem {
  id: string;
  title: string;
  date: string;
  category: string;
  tagColor: string;
  excerpt: string;
}

interface DokumenItem {
  id: string;
  tagColor: string;
  tag: string;
  judul: string;
  deskripsi: string;
  link: string;
  tombolLabel: string;
}

export default function Publikasi() {
  const gambar = asetGambar as AsetGambarType;
  const daftarArtikel = publikasiData as unknown as PublikasiItem[];
  const daftarDokumen = publikasiDokumen as unknown as DokumenItem[];

  return (
    <main className="w-full bg-white">
      {/* BANNER UTAMA - HERO SUB */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]"> 
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Error Position) */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.publikasi} 
            alt="Publikasi LBH SIKAP" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* 2. Overlay Gelap */}
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        
        {/* 3. Konten Teks Hero Sub */}
        <div className="relative z-20 w-11/12 max-w-300 text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Publikasi & Riset Hukum
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Suara Gerakan, Hasil Analisis Kebijakan, dan Pernyataan Sikap Resmi Lembaga
          </p>
        </div>
      </section>

      {/* 1. BAGIAN ARTIKEL (Siaran Pers, Opini, Riset) */}
      <section className="w-full py-16 bg-white">
        <div className="mx-auto w-11/12 max-w-300">
          
          {/* Header Rilis Terbaru */}
          <div className="mb-10 flex items-center justify-between border-b-2 border-gray-950 pb-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
              Rilis Terbaru
            </h2>
          </div>
          
          {/* Grid Sistem Responsif Tailwind v4 (Menggantikan grid-3) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {daftarArtikel.map((item) => (
              <PublikasiCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. BAGIAN DOKUMEN (Laporan Tahunan & Modul) */}
      {/* bg-gray-50 memberikan kontras abu-abu yang sangat tipis dan elegan */}
      <section className="w-full py-16 bg-gray-50">
        <div className="mx-auto w-11/12 max-w-300">
          
          {/* Header Dokumen */}
          <h2 className="mb-8 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
            Dokumen & Modul Resmi
          </h2>
          
          {/* Grid Sistem Dokumen (Menggantikan grid-3 kustom) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {daftarDokumen.map((doc) => (
              <DokumenCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}