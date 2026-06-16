// src/app/kontak/page.tsx
import React from "react";
import Image from "next/image";
import { kontakInfo, asetGambar, AsetGambarType } from "@/data/data"; 
import { ContactCard } from "@/components/features/kontak/ContactsCard";
import { MapBox } from "@/components/features/kontak/MapBox";

interface KontakInfoType {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
  mapsEmbed: string;
}

export default function Kontak() {
  const info = kontakInfo as KontakInfoType;
  const gambar = asetGambar as AsetGambarType;

  return (
    <main className="w-full bg-white">
      {/* SEKSI HERO - Banner Atas */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]">
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Error Position) */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.kontak} 
            alt="Sekretariat LBH SIKAP" 
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
            Hubungi Sekretariat Kami
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Akses Komunikasi Resmi, Alamat Kantor, dan Peta Navigasi Lembaga
          </p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      <section className="w-full py-16 bg-white">
        <div className="mx-auto w-11/12 max-w-300">
          
          {/* Grid Layout Pengganti contact-grid-layout */}
          {/* Di mobile bertumpuk (grid-cols-1), di desktop berjejer seimbang (md:grid-cols-2) */}
          <div className="grid grid-cols-1 gap-10 items-stretch md:grid-cols-2 lg:gap-14">
            
            {/* Kolom Kiri: Kartu Informasi Kontak */}
            <div className="w-full flex">
              <ContactCard 
                alamat={info.alamat}
                jamOperasional={info.jamOperasional}
                whatsapp={info.whatsapp}
                email={info.email}
              />
            </div>

            {/* Kolom Kanan: Google Maps Embed Box */}
            <div className="w-full min-h-87.5 md:min-h-full flex">
              <MapBox src={info.mapsEmbed} />
            </div>

          </div>
          
        </div>
      </section>
    </main>
  );
}