// src/app/(cabang)/[cabang]/layout.tsx
"use client";

import React, { use } from "react";
import { dataSeluruhCabang } from "@/data/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface CabangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ cabang: string }>;
}

export default function CabangLayout({ children, params }: CabangLayoutProps) {
  const resolvedParams = use(params);
  const slugCabang = resolvedParams.cabang;
  const dataCabang = dataSeluruhCabang[slugCabang];

  const info = dataCabang?.info || {
    nama: `LBH SIKAP ${slugCabang.toUpperCase()}`,
    alamat: "Alamat Sekretariat belum dikonfigurasi.",
    telepon: "-",
    email: "-",
  };

  // PEMBARUAN: Menambahkan Posbakum ke menu navigasi
  const menuItems = [
    { name: "Beranda", href: `/${slugCabang}#hero` },
    { name: "Tentang Kami", href: `/${slugCabang}#tentang` },
    { name: "Berita", href: `/${slugCabang}#berita` },
    { name: "Posbakum", href: `/${slugCabang}#posbakum` }, 
    { name: "Kontak", href: `/${slugCabang}#kontak` },
  ];

  const cabangItems = Object.keys(dataSeluruhCabang).map((slug) => ({
    name: dataSeluruhCabang[slug].info.kota,
    href: `/${slug}`,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar menuItems={menuItems} namaLembaga={info.nama} cabangItems={cabangItems} />
      <div className="flex-1">{children}</div>
      <Footer 
        namaLembaga={info.nama}
        alamat={info.alamat}
        telepon={info.telepon}
        email={info.email}
      />
    </div>
  );
}