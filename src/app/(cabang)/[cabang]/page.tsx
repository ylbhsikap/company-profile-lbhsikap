// src/app/(cabang)/[cabang]/page.tsx
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeaturedNews } from "@/components/features/berita/FeaturedNews";
import { dataSeluruhCabang, databaseArtikelNasional, asetGambar, AsetGambarType, Berita } from "@/data/data"; 

interface HalamanCabangHomeProps {
  params: Promise<{ cabang: string }>;
}

export default function HalamanCabangHome({ params }: HalamanCabangHomeProps) {
  // 🌟 Menyelesaikan Promise params secara asinkronus demi keamanan build Next.js App Router
  const { cabang } = use(params);
  
  // Ambil profil data spesifik milik cabang bersangkutan
  const cabangAktif = dataSeluruhCabang[cabang];

  // Proteksi jika segmen sub-folder cabang diakses menggunakan nama wilayah yang tidak terdaftar
  if (!cabangAktif) {
    notFound();
  }

  const gambar = asetGambar as AsetGambarType;

  // 🚀 Efisiensi Data: Menyaring artikel dari database nasional tunggal yang memiliki kecocokan slug cabang ini saja
  const beritaLokalCabang = databaseArtikelNasional.filter(
    (artikel) => artikel.slugCabang === cabang
  );

  // Ambil maksimal 3 artikel terbaru milik cabang untuk disuplai ke komponen FeaturedNews
  const latestNews: Berita[] = beritaLokalCabang.slice(0, 3);

  return (
    <main className="w-full bg-white text-gray-900">
      {/* BANNER UTAMA (Hero Section Tailwind Version) */}
      <section className="relative flex h-[80vh] min-h-125 w-full items-center justify-center overflow-hidden lg:h-[90vh]">
        
        {/* 1. Pembungkus Gambar Background Khusus (Solusi Permanen Error Position) */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.bannerUtama} 
            alt={`Interior ${cabangAktif.info.nama}`} 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* 2. Overlay Gelap (Premium Monochrome) */}
        <div className="absolute inset-0 z-10 bg-black/65"></div>
        
        {/* 3. Konten Teks */}
        <div className="relative z-20 w-11/12 max-w-300 text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider leading-tight sm:text-4xl md:text-5xl lg:text-6xl uppercase">
            {cabangAktif.info.nama}
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg">
            Membela hak konstitusional masyarakat miskin, buta hukum, dan korban kesewenang-wenangan secara pro bono di wilayah {cabangAktif.info.kota} dan sekitarnya.
          </p>
          
          {/* Tombol CTA - Mengarah secara dinamis ke halaman rute internal cabang */}
          <div className="mt-8">
            <Link 
              href={`/${cabang}/layanan`} 
              className="inline-block rounded-md bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-950 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 sm:text-base"
            >
              Ajukan Bantuan Hukum
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION BERITA TERBARU */}
      <FeaturedNews latestNews={latestNews} gambar={gambar} />
      
    </main>
  );
}