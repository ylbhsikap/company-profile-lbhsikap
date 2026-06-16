"use client";

import React, { use } from "react";
import Link from "next/link";
import { dataSeluruhCabang } from "@/data/data";

interface CabangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ cabang: string }>;
}

export default function CabangLayout({ children, params }: CabangLayoutProps) {
  // 🗺️ Menangkap parameter nama cabang secara aman dari URL saat ini
  const resolvedParams = use(params);
  const slugCabang = resolvedParams.cabang;

  // Ambil data spesifik cabang ini untuk menampilkan nama daerahnya di logo navbar
  const dataCabang = dataSeluruhCabang[slugCabang];
  const namaKota = dataCabang?.info?.kota || slugCabang;

  return (
    <>
      {/* Header Khusus Terisolasi Wilayah Cabang */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 text-gray-900 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand Logo Dinamis Cabang */}
          <Link href={`/${slugCabang}`} className="font-black text-gray-950 tracking-wider text-base uppercase group">
            LBH SIKAP <span className="text-amber-600 text-xs font-extrabold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded ml-2 group-hover:bg-amber-600 group-hover:text-white transition-all">{namaKota}</span>
          </Link>

          {/* Menu Navigasi Khusus yang Mengunci Rute Internal Cabang Ini */}
          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <Link href={`/${slugCabang}`} className="hover:text-amber-600 transition-colors">Beranda</Link>
            <Link href={`/${slugCabang}/tentang`} className="hover:text-amber-600 transition-colors">Tentang Kami</Link>
            <Link href={`/${slugCabang}/layanan`} className="hover:text-amber-600 transition-colors">Layanan Hukum</Link>
            <Link href={`/${slugCabang}/kontak`} className="hover:text-amber-600 transition-colors">Kontak Posko</Link>
            
            {/* Tombol darurat kembali ke Portal Pusat nasional */}
            <Link href="/" className="ml-2 text-3xs font-extrabold bg-gray-950 text-white px-2.5 py-1.5 rounded-md hover:bg-amber-600 transition-all">
              Portal Pusat &rarr;
            </Link>
          </nav>

        </div>
      </header>

      {/* Jarak padding-top 16 (64px) disesuaikan agar konten cabang tidak tertutup header fixed */}
      <div className="pt-16">{children}</div>
    </>
  );
}