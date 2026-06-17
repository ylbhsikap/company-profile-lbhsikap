// src/app/(cabang)/[cabang]/page.tsx
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dataSeluruhCabang, asetGambar } from "@/data/data";
import NewsRowCard from "@/components/features/berita/NewsRowCard";

interface HalamanCabangProps {
  params: Promise<{ cabang: string }>;
}

export default function HalamanCabangHome({ params }: HalamanCabangProps) {
  const { cabang } = use(params);
  const cabangAktif = dataSeluruhCabang[cabang];

  if (!cabangAktif) {
    notFound();
  }

  const beritaCabang = (cabangAktif.berita || []).map(item => ({
    ...item,
    category: item.category || "SIARAN PERS",
    color: item.color || "#09090b",
    slugCabang: cabang
  }));

  const beritaRingkasan = beritaCabang.slice(0, 2);
  const daftarAdvokat = cabangAktif.anggota || [];
  const strukturOrganisasi = cabangAktif.struktur;

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen scroll-smooth">
      
      {/* 🏛️ SEKSI 1: HERO BANNER (Dibuat lebih tinggi untuk kesan megah) */}
      <section id="hero" className="relative w-full h-[85vh] md:h-[90vh] bg-gray-950 scroll-mt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src={asetGambar.bannerUtama} 
            alt={cabangAktif.info.nama} 
            fill 
            priority 
            className="object-cover opacity-60" 
          />
        </div>
        {/* Overlay gradient di bagian atas agar Navbar terbaca jelas */}
        <div className="absolute inset-0 z-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="pt-20"> {/* PT-20 memberi ruang agar tidak tertutup Navbar */}
            <span className="inline-block bg-amber-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
              Kantor Wilayah Resmi
            </span>
            <h1 className="text-4xl font-black uppercase tracking-wider md:text-7xl max-w-4xl leading-tight mb-4">
              {cabangAktif.info.nama}
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-2xl uppercase tracking-widest font-medium">
              Mewujudkan Akses Keadilan & Pendampingan Hukum Struktural di {cabangAktif.info.kota}
            </p>
          </div>
        </div>
      </section>

      {/* 📞 SEKSI 2: INFO KONTAK */}
      <section id="kontak" className="w-full py-12 bg-gray-950 text-white border-t border-gray-900/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light">
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-2">Sekretariat</span>
            <p className="text-gray-300 leading-relaxed">{cabangAktif.info.alamat}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-2">Hubungi Kami</span>
            <p className="text-gray-300">Telepon: {cabangAktif.info.telepon}</p>
            <p className="text-gray-300 mt-0.5">Email: {cabangAktif.info.email}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 tracking-wider uppercase mb-2">Yurisdiksi Operasional</span>
            <p className="text-gray-300">{cabangAktif.info.jamOperasional}</p>
            <p className="text-amber-600 font-bold mt-2 uppercase tracking-wider">Direktur: {cabangAktif.info.direktur}</p>
          </div>
        </div>
      </section>

      {/* ⚖️ SEKSI 3: PROFIL & STRUKTUR TIM */}
      <section id="tentang" className="w-full bg-white py-20 border-b border-gray-150 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 border-l-4 border-gray-950 pl-4">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Tentang Kami & Personil</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Profil struktural lembaga pembela hukum publik pro bono di {cabangAktif.info.kota}</p>
          </div>
          
          {/* ... (Konten Struktur & Advokat tetap sama) ... */}
          {strukturOrganisasi && (
            <div className="mb-20 bg-gray-50 border border-gray-200/80 rounded-sm p-8 sm:p-12">
               {/* Konten struktur organisasi */}
            </div>
          )}
          
          {/* DAFTAR ADVOKAT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {daftarAdvokat.map((advokat) => (
              <div key={advokat.id} className="flex flex-col sm:flex-row bg-gray-50 border border-gray-200 rounded-sm overflow-hidden">
                {/* ... detail advokat ... */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 SEKSI 4: RINGKASAN BERITA */}
      <section id="berita" className="w-full py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-gray-950 pl-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Kabar Advokat Wilayah</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Ringkasan rilis siaran pers dan penanganan kasus hukum</p>
          </div>
          
          {/* ... konten berita ... */}
        </div>
      </section>

      {/* 📍 SEKSI 5: POSBAKUM */}
      <section id="posbakum" className="w-full py-20 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-amber-600 pl-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Jaringan Posbakum</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Titik layanan bantuan hukum di {cabangAktif.info.kota}</p>
          </div>
          
          {/* ... konten posbakum ... */}
        </div>
      </section>

    </main>
  );
}