// src/app/berita/[id]/page.tsx
import React from "react";
import { BerandaData } from "@/data/data"; 

interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
}

interface DetailBeritaProps {
  params: Promise<{ id: string }>;
}

export default async function DetailBeritaPage({ params }: DetailBeritaProps) {
  // Ambil ID dari URL rute dinamis secara asynchronous
  const { id } = await params;

  // Tegaskan data pusat sebagai array Berita
  const daftarBerita = BerandaData as unknown as Berita[];

  // Cari berita yang spesifik berdasarkan ID dari URL
  const berita = daftarBerita.find((item) => item.id === id);

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
        </div>
      </main>
    );
  }

  // 2. TAMPILAN HALAMAN DETAIL BERITA RESMI
  return (
    // pt-32 memberikan jarak aman dari navbar, pb-24 memberikan ruang sebelum footer
    <main className="w-full bg-white px-4 pt-32 pb-24">
      {/* mx-auto max-w-200 mengunci lebar bacaan ideal artikel setara 800px */}
      <article className="mx-auto w-full max-w-200">
        
        {/* Kategori Berita */}
        <span 
          style={{ backgroundColor: berita.color || "#111111" }} 
          className="inline-block rounded-xs px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs"
        >
          {berita.category || "Advokasi"}
        </span>
        
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
        {/* text-justify membuat tulisan rata kanan-kiri khas rilis pers resmi, leading-relaxed (1.75) sangat nyaman dibaca */}
        <div className="text-sm leading-relaxed text-gray-800 text-justify sm:text-base md:leading-loose">
          {berita.excerpt}
          {/* Di masa depan, Anda tinggal memanggil {berita.isiKonten} di sini jika strukturnya ditambahkan */}
        </div>
        
      </article>
    </main>
  );
}