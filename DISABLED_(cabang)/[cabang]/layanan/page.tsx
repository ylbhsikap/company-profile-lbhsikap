// src/app/layanan/page.tsx
import React from "react";
import Image from "next/image";
import { kriteriaLayanan, asetGambar, daftarPosbakum } from "@/data/data"; 
import { ServiceCriteria } from "@/components/features/layanan/ServiceCriteria";
import { ComplaintForm } from "@/components/features/layanan/ComplaintForm";
import PosbakumList from "@/components/features/layanan/PosbakumList";

// =========================================================================
// 🤖 OTOMASI METADATA & SKEMA (Cara Resmi Next.js)
// =========================================================================
export async function generateMetadata() {
  // Otomatis membentuk skema multi-lokasi berdasarkan array data posbakum Anda
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "LBH SIKAP",
    "url": "https://lbhsikap.org/layanan",
    "telephone": "021-1234567",
    "subOrganization": daftarPosbakum.map((cabang) => ({
      "@type": "LegalService",
      "name": cabang.nama,
      "address": { "@type": "PostalAddress", "streetAddress": cabang.alamat, "addressCountry": "ID" },
      "telephone": cabang.telepon,
      "hasMap": cabang.gmapsUrl,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": cabang.latitude,
        "longitude": cabang.longitude
      }
    }))
  };

  return {
    title: "Layanan Bantuan Hukum & Posbakum Resmi | LBH SIKAP",
    description: "Ajukan bantuan hukum gratis dan temukan titik lokasi jaringan Posbakum resmi LBH SIKAP.",
    // 💡 Di sini keajaiban otomasi Next.js terjadi: 
    // Menginjeksi skema langsung ke dalam tag <head> dokumen secara otomatis bersih
    other: {
      "type": "application/ld+json",
      "innerHTML": JSON.stringify(jsonLd)
    }
  };
}

export default function Layanan() {
  const gambar = asetGambar;
  const daftarKriteria = kriteriaLayanan as any[];

  // 💡 Komponen Anda bersih dari urusan script robot, murni mengurusi visual tampilan!
  return (
    <main className="w-full bg-white">
      {/* SEKSI BANNER HERO */}
      <section className="relative flex h-[40vh] min-h-80 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[50vh]"> 
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image src={gambar.layananBawah} alt="Layanan LBH SIKAP" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        <div className="relative z-25 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Ajukan Bantuan Hukum Gratis
          </h1>
        </div>
      </section>

      {/* ZONA 1: KRITERIA & FORM */}
      <section style={{ backgroundImage: `url(${gambar.publikasi || ''})` }} className="relative w-full bg-cover bg-center bg-no-repeat py-24">
        <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-xs"></div>
        <div className="relative z-10 mx-auto w-11/12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <ServiceCriteria daftarKriteria={daftarKriteria} /> 
          </div>
          <div className="w-full drop-shadow-md">
            <ComplaintForm />
          </div>
        </div>
      </section>

      {/* ZONA 2: DAFTAR POSBAKUM */}
      <section style={{ backgroundImage: `url(${gambar.kontak || ''})` }} className="relative w-full bg-cover bg-center bg-no-repeat py-24 pb-32">
        <div className="absolute inset-0 z-0 bg-gray-950/95 backdrop-blur-xs"></div>
        <div className="relative z-10 mx-auto w-11/12 max-w-7xl text-white">
          <div className="mb-12 text-center md:text-left border-b border-gray-800 pb-5">
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Wilayah Kerja Posbakum Resmi
            </h2>
          </div>
          <div className="w-full bg-transparent">
            <PosbakumList />
          </div>
        </div>
      </section>
    </main>
  );
}