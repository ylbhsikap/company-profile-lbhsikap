// src/app/(cabang)/[cabang]/publikasi/[id]/page.tsx
import React, { use } from "react";
import { databaseArtikelNasional, Berita } from "@/data/data";
import { notFound } from "next/navigation";

interface DetailPublikasiCabangProps {
  params: Promise<{ cabang: string; id: string }>;
}

export default function DetailPublikasiCabang({ params }: DetailPublikasiCabangProps) {
  // 🌟 Menyelesaikan Promise params secara asinkronus demi kepatuhan standar Next.js App Router terbaru
  const resolvedParams = use(params);
  const { id, cabang } = resolvedParams;

  // 🚀 Pencarian Akurat: Memastikan ID artikel valid dan terikat langsung pada slugCabang URL yang aktif
  const artikel: Berita | undefined = databaseArtikelNasional.find(
    (item) => item.id === id && item.slugCabang === cabang
  );

  // Jika artikel tidak ada di database atau diakses lewat manipulasi URL cabang lain, lemparkan ke 404
  if (!artikel) {
    notFound();
  }

  return (
    <main className="w-full bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        
        {/* HEADER ARTIKEL */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <span 
            className="text-xs font-bold uppercase px-3 py-1 border rounded tracking-wider"
            style={{ 
              color: artikel.color || "#09090b", 
              borderColor: artikel.color ? `${artikel.color}40` : "#09090b40",
              backgroundColor: artikel.color ? `${artikel.color}08` : "#09090b08"
            }}
          >
            {artikel.category}
          </span>
          
          <h1 className="text-3xl font-black mt-4 text-gray-950 uppercase tracking-tight leading-tight sm:text-4xl">
            {artikel.title}
          </h1>
          
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mt-4 uppercase tracking-wider">
            <span>Posko Wilayah: {cabang}</span>
            <span className="text-gray-300">•</span>
            <time dateTime={artikel.date}>{artikel.date}</time>
          </div>
        </header>
        
        {/* KONTEN UTAMA ARTIKEL */}
        <article className="text-base leading-relaxed space-y-6 text-gray-700 md:text-lg">
          {/* Menampilkan kutipan awal bawaan data */}
          <p className="font-medium text-gray-900 border-l-2 border-gray-900 pl-4 italic">
            {artikel.excerpt}
          </p>
          
          {/* Wadah penampung narasi berkelanjutan */}
          <p>
            Lembaga Bantuan Hukum SIKAP terus berkomitmen mengawal eskalasi perkara ini hingga tuntas di tingkat lapangan maupun persidangan. Penguatan bukti-bukti pendukung, konsolidasi paralegal, serta penyusunan berkas administrasi hukum terus digarap secara intensif demi memastikan pemenuhan akses keadilan bagi seluruh elemen masyarakat yang terdampak tanpa terkecuali.
          </p>
        </article>

      </div>
    </main>
  );
}