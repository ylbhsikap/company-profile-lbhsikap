// src/app/berita/layout.tsx
import React from "react";
import { dataSeluruhCabang, dataKantorPusat } from "@/data/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BeritaGlobalLayout({ children }: { children: React.ReactNode }) {
  // Gunakan konfigurasi menu default portal pusat untuk navigasi membaca berita
  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Berita Nasional", href: "/" }, 
  ];

  const cabangItems = Object.keys(dataSeluruhCabang).map((slug) => ({
    name: dataSeluruhCabang[slug].info.kota,
    href: `/${slug}`,
  }));

  const infoPusat = dataKantorPusat.info;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar Portal Pusat */}
      <Navbar 
        menuItems={menuItems} 
        namaLembaga={infoPusat.nama} 
        cabangItems={cabangItems} 
      />

      {/* Konten Utama Artikel */}
      <div className="flex-1">{children}</div>

      {/* Footer Portal Pusat */}
      <Footer 
        namaLembaga={infoPusat.nama}
        alamat={infoPusat.alamat}
        telepon={infoPusat.telepon}
        email={infoPusat.email}
      />
    </div>
  );
}