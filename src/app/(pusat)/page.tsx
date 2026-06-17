// src/app/(pusat)/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataKantorPusat, asetGambar } from "@/data/data";
import NewsRowCard from "@/components/features/berita/NewsRowCard";

export default function BerandaPusat() {
  const beritaPusat = dataKantorPusat.berita.map(item => ({
    ...item,
    category: item.category || "SIARAN PERS",
    color: item.color || "#09090b",
    slugCabang: "pusat"
  }));

  // =========================================================================
  // 💡 METODE RINGKASAN PUSAT: Hanya tampilkan 2 berita utama besar saja
  // =========================================================================
  const beritaBesarUtama = beritaPusat.slice(0, 2);

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* HERO BANNER PUSAT */}
      <section className="relative w-full h-[60vh] bg-gray-950">
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
            <p className="mt-4 text-sm sm:text-lg text-gray-200 uppercase tracking-widest font-medium">
              Yayasan Lembaga Bantuan Hukum & Studi Kebijakan Publik
            </p>
          </div>
        </div>
      </section>

      {/* ⚖️ SEKSI BERITA UTAMA BESAR (RINGKASAN DASHBOARD NNASIONAL) */}
      <section className="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-12">
        <div className="border-l-4 border-gray-950 pl-4 mb-4">
          <h2 className="text-2xl font-black uppercase tracking-wider text-gray-950 sm:text-3xl">
            Advokasi & Siaran Pers Terbaru
          </h2>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">
            Rilis informasi hukum dan kebijakan publik utama tingkat nasional
          </p>
        </div>

        {beritaBesarUtama.map((berita, index) => (
          <NewsRowCard 
            key={berita.id}
            item={berita} 
            gambarTerpilih={asetGambar[berita.gambarKunci as keyof typeof asetGambar]}
            isRightText={index % 2 === 1}
            isPriority={index === 0}
          />
        ))}

        {/* 🎯 LINK UTAMA MENUJU HUB AKSES ARSIP PUBLIKASI NASIONAL LENGKAP */}
        <div className="text-center mt-8 border-t border-gray-100 pt-12">
          <Link 
            href="/publikasi#pusat-siaran"
            className="inline-block bg-gray-950 text-white hover:bg-amber-600 transition-colors px-10 py-3.5 rounded-sm text-xs font-black uppercase tracking-widest shadow-xs"
          >
            Buka Ruang Arsip & Publikasi Seluruh Cabang &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}