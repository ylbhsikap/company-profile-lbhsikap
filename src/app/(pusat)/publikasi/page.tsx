// src/app/(pusat)/publikasi/page.tsx
import React from "react";
import { databaseArtikelNasional } from "@/data/data"; //[cite: 2]
import { PublikasiCard } from "@/components/features/publikasi/PublikasiCard";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { asetGambar } from "@/data/data"; //[cite: 1]

export default function PublikasiPusatNasional() {
  return (
    <main className="w-full bg-white">
      {/* 1. BANNER UTAMA (Bebas melebar penuh selayar) */}
      <SubPageHeader 
        title="Publikasi" 
        subtitle="Portal Informasi Jajaran Wilayah Nasional" 
        bgImage={asetGambar.publikasi} //[cite: 1]
      />

      {/* 2. AREA KONTEN UTAMA (Satu komando di dalam max-w-6xl) */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* Kepala Judul Halaman */}
        <div className="border-b border-gray-100 pb-6">
          <h1 className="text-2xl font-black tracking-wider uppercase text-gray-950 sm:text-3xl">
            Publikasi Jajaran Wilayah Nasional
          </h1>
          <p className="text-xs text-gray-500 mt-1.5 max-w-2xl leading-relaxed">
            Kumpulan rilis pers, opini hukum, dan dokumentasi kasus dari seluruh cabang LBH SIKAP di Indonesia.
          </p>
        </div>

        {/* Grid List Kartu Berita (Sekarang aman di dalam pembungkus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {databaseArtikelNasional.length > 0 ? (
            databaseArtikelNasional.map((artikel) => (
              <PublikasiCard key={artikel.id} artikel={artikel} />
            ))
          ) : (
            // Jika kosong, pesan peringatan akan rapi menempati grid full-width
            <div className="col-span-full py-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-sm font-bold text-gray-400 italic">
                Belum ada publikasi nasional.
              </p>
            </div>
          )}
        </div>

      </section>
    </main>
  );
}