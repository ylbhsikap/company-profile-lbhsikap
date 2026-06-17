"use client";

import React, { use } from "react";
import { dataSeluruhCabang } from "@/data/data";
import { Navbar } from "@/components/layout/Navbar"; // 📋 IMPOR: Menggunakan Navbar terpadu
import { Footer } from "@/components/layout/Footer"; // 📋 IMPOR: Menggunakan Footer terpadu

interface CabangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ cabang: string }>;
}

export default function CabangLayout({ children, params }: CabangLayoutProps) {
  // 💡 Menangkap parameter nama cabang secara aman dari URL saat ini (Next.js 15/16 Promise pattern)
  const resolvedParams = use(params);
  const slugCabang = resolvedParams.cabang;

  // Ambil data spesifik cabang ini dari database nasional
  const dataCabang = dataSeluruhCabang[slugCabang];

  // Kebijakan Fallback (Cadangan) data jika slug cabang tidak sengaja tidak ditemukan agar aplikasi tidak crash
  const info = dataCabang?.info || {
    nama: `LBH SIKAP ${slugCabang.toUpperCase()}`,
    alamat: "Alamat Sekretariat belum dikonfigurasi.",
    telepon: "-",
    email: "-",
  };

  // =========================================================================
  // 🗺️ PEMBARUAN: SKEMA ANCHOR LINK SINGLE PAGE UNTUK KANTOR CABANG
  // =========================================================================
  const menuItems = [
    { name: "Beranda", href: `/${slugCabang}#hero` },
    { name: "Tentang Kami", href: `/${slugCabang}#tentang` },
    { name: "Berita", href: `/${slugCabang}#berita` },
    { name: "Kontak", href: `/${slugCabang}#kontak` },
  ];

  // 👥 RANCANGAN DROPDOWN: Menyusun list seluruh cabang untuk opsi dropdown mutasi wilayah di Navbar
  const cabangItems = Object.keys(dataSeluruhCabang).map((slug) => ({
    name: dataSeluruhCabang[slug].info.kota,
    href: `/${slug}`,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-white">
      
      {/* 1. KONTROLLER NAVBAR GLOBAL (Otomatis mendeteksi tombol "Ke Pusat") */}
      <Navbar 
        menuItems={menuItems} 
        namaLembaga={info.nama} 
        cabangItems={cabangItems} 
      />

      {/* 2. AREA INJEKSI KONTEN HALAMAN KLIEN */}
      <div className="flex-1">{children}</div>

      {/* 3. KONTROLLER FOOTER GLOBAL (Dinamis menampilkan kontak resmi wilayah terkait) */}
      <Footer 
        namaLembaga={info.nama}
        alamat={info.alamat}
        telepon={info.telepon}
        email={info.email}
      />
      
    </div>
  );
}