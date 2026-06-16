// src/app/tentang/page.tsx
import React from "react";
import Image from "next/image";
import { OrganogramTree } from "@/app/components/OrganogramTree";
import { MemberList } from "@/app/components/MemberList";
import { asetGambar, AsetGambarType, strukturOrganisasi, daftarAnggota } from "@/data/data"; 

interface OrganisasiType {
  pimpinan: { nama: string; jabatan: string };
  direktur: { nama: string; jabatan: string };
  divisi: { nama: string; jabatan: string }[];
}

interface AnggotaType {
  id: number;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
}

export default function Tentang() {
  const gambar = asetGambar as AsetGambarType;
  const treeOrga = strukturOrganisasi as OrganisasiType;
  const anggotaList = daftarAnggota as AnggotaType[];

  return (
    <main className="w-full bg-white">
      {/* HERO SUB - Banner Atas Halaman */}
      {/* pt-16 digunakan untuk memberi ruang agar tidak tertutup Navbar Anda */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]">
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Error Position) */}
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
        <div className="relative z-20 w-11/12 max-w-300 text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Tentang LBH SIKAP
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-gray-300 sm:text-base">
            Mengenal Visi, Misi, dan Spirit Gerakan Advokasi Kami
          </p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      {/* py-16 = Padding atas-bawah 64px menggantikan section-padding */}
      <section className="w-full py-16 bg-white">
        {/* max-w-300 = Lebar maksimal 1200px, mx-auto = Otomatis ke tengah */}
        <div className="mx-auto w-11/12 max-w-300">
          
          {/* Komponen Bagan Pohon Struktur Organisasi */}
          <OrganogramTree treeOrga={treeOrga} />

          {/* Garis Pembatas (Horizontal Rule) versi Tailwind v4 */}
          {/* my-16 = Margin atas-bawah 64px penggantikan margin 70px manual */}
          <hr className="my-16 border-0 border-t border-gray-200" />

          {/* Komponen Daftar Anggota Bersambung */}
          <MemberList anggotaList={anggotaList} />

        </div>
      </section>
    </main>
  );
}