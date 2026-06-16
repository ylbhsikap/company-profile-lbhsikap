// src/app/layanan/page.tsx
import React from "react";
import Image from "next/image";
import { kriteriaLayanan, asetGambar, AsetGambarType } from "@/data/data"; 
import { ServiceCriteria } from "@/app/components/ServiceCriteria";
import { ComplaintForm } from "@/app/components/ComplaintForm";

interface KriteriaItem {
  judul: string;
  deskripsi: string;
  borderLeft: string;
}

export default function Layanan() {
  const gambar = asetGambar as AsetGambarType;
  const daftarKriteria = kriteriaLayanan as KriteriaItem[];

  return (
    <main className="w-full bg-white">
      {/* SEKSI BANNER HERO (Hero Sub) */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]"> 
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Error Position) */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.layanan} 
            alt="Layanan LBH SIKAP" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* 2. Overlay Gelap Premium */}
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        
        {/* 3. Konten Teks Hero Sub */}
        <div className="relative z-20 w-11/12 max-w-300 text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Ajukan Bantuan Hukum Gratis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Pos Komando Bantuan Hukum (Posbakum) dan Pengaduan Kasus Struktural
          </p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      <section className="w-full py-16 bg-white">
        <div className="mx-auto w-11/12 max-w-300">
          
          {/* Grid Sistem Dua Kolom Responsif Tailwind v4 */}
          {/* md:grid-cols-[1.2fr_1fr] membuat kolom kriteria sedikit lebih lebar dari formulir di desktop */}
          <div className="grid grid-cols-1 gap-12 items-start md:grid-cols-[1.2fr_1fr] lg:gap-16">
            
            {/* Kolom Kiri: Mengalirkan data kriteria ke komponen khusus kriteria */}
            <div className="w-full">
              <ServiceCriteria daftarKriteria={daftarKriteria} />
            </div>

            {/* Kolom Kanan: Memanggil komponen formulir mandiri */}
            <div className="w-full sticky top-24">
              <ComplaintForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}