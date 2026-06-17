// src/app/berita/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { databaseArtikelNasional, dataSeluruhCabang } from "@/data/data"; // 💡 MENGGUNAKAN DATABASE NASIONAL

interface DetailBeritaProps {
  params: Promise<{ id: string }>;
}

export default async function DetailBeritaPage({ params }: DetailBeritaProps) {
  // Ambil ID dari URL rute dinamis secara asynchronous (Next.js 15/16 pattern)
  const { id } = await params;

  // 💡 SINKRONISASI: Cari artikel di dalam database nasional tunggal yang berisi gabungan data pusat & cabang
  const berita = databaseArtikelNasional.find((item) => item.id === id);

  // 1. TAMPILAN JIKA BERITA TIDAK DITEMUKAN
  if (!berita) {
    return (
      <main className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white px-4 pt-32 pb-16 text-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-black uppercase tracking-wide text-red-700 md:text-3xl">
            Berita Tidak Ditemukan
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
            Maaf, artikel atau publikasi advokasi yang Anda cari tidak tersedia, salah tautan, atau telah diarsipkan oleh lembaga.
          </p>
          <Link href="/" className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-amber-600 hover:underline">
            &larr; Kembali ke Portal Pusat
          </Link>
        </div>
      </main>
    );
  }

  // 💡 IMPLEMENTASI KONSEP: Deteksi otomatis asal wilayah cabang pembuat kegiatan
  const isPusat = berita.slugCabang === "pusat";
  const namaWilayah = isPusat 
    ? "Pusat" 
    : dataSeluruhCabang[berita.slugCabang]?.info.kota || "Cabang";

  return (
    <main className="w-full bg-white px-4 pt-32 pb-24">
      <article className="mx-auto w-full max-w-200">
        
        {/* Kontainer Badge Kategori & Identitas Wilayah */}
        <div className="flex flex-wrap items-center gap-2">
          <span 
            style={{ backgroundColor: berita.color || "#111111" }} 
            className="inline-block rounded-xs px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs"
          >
            {berita.category || "Advokasi"}
          </span>
          
          {/* Badge Navigasi Pintar: Klik badge ini untuk langsung lompat ke halaman cabang yang bersangkutan */}
          <Link 
            href={isPusat ? "/" : `/${berita.slugCabang}`}
            className="inline-block rounded-xs bg-gray-100 border border-gray-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-colors"
          >
            LBH SIKAP {namaWilayah}
          </Link>
        </div>
        
        {/* Judul Utama Artikel */}
        <h1 className="mt-5 mb-3 text-2xl font-black leading-tight text-gray-950 sm:text-3xl md:text-4xl">
          {berita.title}
        </h1>
        
        {/* Tanggal Rilis */}
        <p className="mb-8 text-xs font-medium text-gray-400 sm:text-sm">
          Dipublikasikan pada: {berita.date}
        </p>
        
        {/* Batas Garis Tipis Estetik */}
        <hr className="mb-8 border-0 border-t border-gray-150" />
        
        {/* Isi Teks Berita / Konten Advokasi */}
        <div className="text-sm leading-relaxed text-gray-800 text-justify sm:text-base md:leading-loose whitespace-pre-line">
          {berita.excerpt}
        </div>

        {/* 💡 FOOTER NAVIGASI KONTEKSTUAL */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <Link href="/" className="text-gray-500 hover:text-gray-950 transition-colors">
            &larr; Beranda Utama Pusat
          </Link>
          {!isPusat && (
            <Link href={`/${berita.slugCabang}`} className="text-amber-600 hover:text-amber-700 transition-colors">
              Lihat Profil LBH {namaWilayah} &rarr;
            </Link>
          )}
        </div>
        
      </article>
    </main>
  );
}