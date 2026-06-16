// src/app/tentang/page.tsx
import React from "react";
import Image from "next/image";
import { OrganogramTree } from "@/components/features/tentang/OrganogramTree";
import { MemberList } from "@/components/features/tentang/MemberList";
// 💡 PERBAIKAN 1: Mengambil AnggotaType langsung dari pusat data agar sinkron (String id)
import { asetGambar, strukturOrganisasi, daftarAnggota, AnggotaType } from "@/data/data";

interface OrganisasiType {
  pimpinan: { nama: string; jabatan: string };
  direktur: { nama: string; jabatan: string };
  divisi: { nama: string; jabatan: string }[];
}

export default function Tentang() {
  // 💡 PERBAIKAN 2: Next.js sudah tahu tipe gambar secara otomatis, tidak perlu 'as AsetGambarType'
  const gambar = asetGambar; 
  const treeOrga = strukturOrganisasi as OrganisasiType;
  const anggotaList = daftarAnggota as AnggotaType[];

  return (
    <main className="w-full bg-white">
      {/* HERO SUB - Banner Atas Halaman */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]">
        
        {/* 1. Pembungkus Gambar Background Khusus */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.tentangkami} 
            alt="Tentang LBH SIKAP" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* 2. Overlay Gelap Premium */}
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        
        {/* 3. Konten Teks Hero Sub */}
        <div className="relative z-20 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Tentang LBH SIKAP
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-gray-300 sm:text-base">
            Mengenal Visi, Misi, dan Spirit Gerakan Advokasi Kami
          </p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      <section className="w-full py-16 bg-white">
        {/* 💡 TIPS: Mengubah max-w-300 menjadi max-w-5xl (standard lebar container Tailwind v4) */}
        <div className="mx-auto w-11/12 max-w-5xl">
          
          {/* Komponen Bagan Pohon Struktur Organisasi */}
          <OrganogramTree treeOrga={treeOrga} />

          {/* Garis Pembatas (Horizontal Rule) versi Tailwind v4 */}
          <hr className="my-16 border-0 border-t border-gray-200" />

          {/* Komponen Daftar Anggota Bersambung */}
          <MemberList anggotaList={anggotaList} />

        </div>
      </section>
    </main>
  );
}