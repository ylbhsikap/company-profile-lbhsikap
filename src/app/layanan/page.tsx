// src/app/layanan/page.tsx
import React from "react";
import Image from "next/image";
import { kriteriaLayanan, asetGambar } from "@/data/data"; 
import { ServiceCriteria } from "@/app/components/ServiceCriteria";
import { ComplaintForm } from "@/app/components/ComplaintForm";
import PosbakumList from "@/app/components/PosbakumList"; 

interface KriteriaItem {
  judul: string;
  deskripsi: string;
  borderLeft: string;
}

export default function Layanan() {
  const gambar = asetGambar;
  const daftarKriteria = kriteriaLayanan as KriteriaItem[];

  return (
    <main className="w-full bg-white">
      {/* SEKSI BANNER HERO (Hero Sub) */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]"> 
        
        {/* Pembungkus Gambar Background */}
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
        
        {/* Overlay Gelap (💡 Dinaikkan ke bg-black/85 agar tulisan Header di atasnya dijamin kontras & kelihatan) */}
        <div className="absolute inset-0 z-10 bg-black/85"></div>
        
        {/* Konten Teks Hero Sub */}
        <div className="relative z-25 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Ajukan Bantuan Hukum Gratis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Pos Komando Bantuan Hukum (Posbakum) dan Pengaduan Kasus Struktural
          </p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      <section className="w-full py-16 bg-white relative z-30">
        {/* 💡 KOREKSI UTAMA: max-w-5xl memastikan ukuran lebar halaman sama persis dengan halaman Kontak & Tentang Kami */}
        <div className="mx-auto w-11/12 max-w-5xl">
          
          {/* Grid Sistem Dua Kolom Responsif */}
          <div className="grid grid-cols-1 gap-12 items-start md:grid-cols-2 lg:gap-16">
            
            {/* Kolom Kiri: Mengalirkan Kriteria Layanan & Posbakum */}
            <div className="w-full flex flex-col gap-12">
              <ServiceCriteria daftarKriteria={daftarKriteria} />
              
              {/* Struktur Baru: Daftar Posbakum */}
              <div className="border-t border-gray-100 pt-8">
                <PosbakumList />
              </div>
            </div>

            {/* Kolom Kanan: Menampilkan Formulir Pengaduan */}
            {/* 💡 SOLUSI FORM HILANG: Menghapus class 'sticky' bawaan yang rawan bug z-index, diganti posisi 'relative z-30' agar dipaksa tampil di lapisan depan */}
            <div className="w-full relative z-30 bg-white rounded-2xl shadow-xs">
              <ComplaintForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}