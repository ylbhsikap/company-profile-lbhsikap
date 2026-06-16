// src/app/(1-pusat)/page.tsx
import React from "react";
import Image from "next/image";
import { kriteriaLayananGlobal, asetGambar, dataKantorPusat } from "@/data/data"; 
// Mengimpor komponen dari kotak perkakas global (wilayah netral)
import { ServiceCriteria } from "@/components/features/layanan/ServiceCriteria";
import { ComplaintForm } from "@/components/features/layanan/ComplaintForm";

// 🤖 METADATA & SKEMA SEO KANTOR PUSAT INDUK
export async function generateMetadata() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": dataKantorPusat.info.nama,
    "url": "https://lbhsikap.org",
    "telephone": dataKantorPusat.info.telepon,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": dataKantorPusat.info.alamat,
      "addressLocality": dataKantorPusat.info.kota,
      "addressCountry": "ID"
    }
  };

  return {
    title: "LBH SIKAP | Lembaga Bantuan Hukum & Advokasi Masyarakat",
    description: "Pusat komando bantuan hukum gratis untuk kasus struktural dan pelanggaran HAM berskala nasional.",
    other: {
      "type": "application/ld+json",
      "innerHTML": JSON.stringify(jsonLd)
    }
  };
}

export default function BerandaPusatPage() {
  const gambar = asetGambar;
  // Membaca kriteria khusus milik pusat yang sudah kita setel di database
  const daftarKriteriaPusat = dataKantorPusat.kriteria;

  return (
    <main className="w-full bg-white">
      {/* SEKSI BANNER HERO - KANTOR PUSAT */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]"> 
        
        {/* Pembungkus Gambar Background */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.layananBawah} 
            alt={dataKantorPusat.info.nama} 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        
        {/* Overlay Gelap */}
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        
        {/* Konten Teks Hero Pusat */}
        <div className="relative z-25 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            {dataKantorPusat.info.nama}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Pusat Komando Advokasi Hukum dan Pengaduan Kasus Struktural Nasional
          </p>
        </div>
      </section>

      {/* =========================================================================
          ZONA 1: ZONA ATAS (Kriteria Hukum Pusat & Form Aduan Sejajar Kiri-Kanan)
          💡 Menggunakan Background Foto dengan Overlay Putih Transparan
          ========================================================================= */}
      <section 
        style={{ backgroundImage: `url(${gambar.tentangkami || ''})` }} 
        className="relative w-full bg-cover bg-center bg-no-repeat py-24"
      >
        {/* Lapisan filter putih agar foto melatarbelakangi komponen dengan lembut */}
        <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-xs"></div>

        {/* Kontainer Grid Utama Konten */}
        <div className="relative z-10 mx-auto w-11/12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Kolom Kiri: Kriteria Penerimaan Kasus Tingkat Pusat */}
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <ServiceCriteria daftarKriteria={daftarKriteriaPusat} /> 
          </div>

          {/* Kolom Kanan: Formulir Kontak Aduan Pusat */}
          <div className="w-full drop-shadow-md">
            <ComplaintForm />
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONA 2: ZONA BAWAH (Informasi Kontak & Sekretariat Pusat)
          💡 Menggunakan Background Foto Berbeda dengan Overlay Gelap Premium
          ========================================================================= */}
      <section 
        style={{ backgroundImage: `url(${gambar.kontak || ''})` }} 
        className="relative w-full bg-cover bg-center bg-no-repeat py-24 pb-32"
      >
        {/* Lapisan filter gelap arang */}
        <div className="absolute inset-0 z-0 bg-gray-950/95 backdrop-blur-xs"></div>

        {/* Kontainer Tunggal Memanjang */}
        <div className="relative z-10 mx-auto w-11/12 max-w-7xl text-white">
          
          {/* Judul Seksi Kontak Pusat */}
          <div className="mb-12 text-center md:text-left border-b border-gray-800 pb-5">
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Sekretariat Utama Kantor Pusat
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Koordinasi nasional, kemitraan strategis, dan administrasi umum organisasi.
            </p>
          </div>
          
          {/* Box Detail Informasi Kontak Pusat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-amber-500 uppercase tracking-wide mb-2">Alamat Kantor</h4>
              <p className="text-gray-300 leading-relaxed">{dataKantorPusat.info.alamat}</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-amber-500 uppercase tracking-wide mb-2">Kontak Admistrasi</h4>
              <p className="text-gray-300">📞 Telp: {dataKantorPusat.info.telepon}</p>
              <p className="text-gray-300 mt-1">✉ Email: {dataKantorPusat.info.email}</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-amber-500 uppercase tracking-wide mb-2">Waktu Operasional</h4>
              <p className="text-gray-300">{dataKantorPusat.info.jamOperasional}</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}