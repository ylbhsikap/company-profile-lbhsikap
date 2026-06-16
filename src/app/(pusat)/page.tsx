// src/app/(pusat)/page.tsx
import React from "react";
import Image from "next/image";
import { dataKantorPusat, asetGambar } from "@/data/data";
import { FeaturedNews } from "@/components/features/berita/FeaturedNews";
import NewsRowCard from "@/components/features/berita/NewsRowCard";

export default function BerandaPusat() {
  const beritaPusat = dataKantorPusat.berita.map(item => ({
    ...item,
    category: "SIARAN PERS",
    color: "#09090b",
    slugCabang: "pusat"
  }));

  // =========================================================================
  // 💡 PENGATURAN LAYOUT BERITA (Ubah angka di bawah sesuai kebutuhan)
  // =========================================================================
  const jumlahBeritaBesar = 2; // Ganti angka ini jika ingin 3 atau lebih berita besar
  
  const beritaBesarUtama = beritaPusat.slice(0, jumlahBeritaBesar);
  const beritaKecilGrid = beritaPusat.slice(jumlahBeritaBesar);

  return (
    <main className="w-full">
      {/* HERO BANNER */}
      <section className="relative w-full h-[60vh] bg-gray-950">
        {/* Foto Latar Belakang */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={asetGambar.bannerUtama} 
            alt="LBH SIKAP Pusat" 
            fill 
            priority
            className="object-cover opacity-60" 
          />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-wider md:text-6xl">
              {dataKantorPusat.info.nama}
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Yayasan Lembaga Bantuan Hukum & Studi Kebijakan Publik
            </p>
          </div>
        </div>
      </section>

      {/* 💡 SEKSI BERITA UTAMA BESAR (Bisa menampung banyak berita) */}
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col gap-12">
        {beritaBesarUtama.map((berita, index) => (
          <NewsRowCard 
            key={berita.id}
            item={berita} 
            gambarTerpilih={asetGambar[berita.gambarKunci as keyof typeof asetGambar]}
            // 💡 TRIK ESTETIK: Membuat posisi teks selang-seling kiri-kanan secara otomatis
            isRightText={index % 2 === 1}
            isPriority={index === 0}
          />
        ))}
      </div>

      {/* GRID BERITA LAINNYA (Sisa berita yang tidak masuk layout besar) */}
      <div className="py-6">
        <FeaturedNews latestNews={beritaKecilGrid} />
      </div>
    </main>
  );
}