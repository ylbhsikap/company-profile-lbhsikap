// src/app/(pusat)/layanan/page.tsx
import React from "react";
import Image from "next/image";
import { asetGambar, dataKantorPusat } from "@/data/data"; 
// Mengimpor komponen dari kotak perkakas global (wilayah netral)
import { ServiceCriteria } from "@/components/features/layanan/ServiceCriteria";
import { ComplaintForm } from "@/components/features/layanan/ComplaintForm";

// 🤖 METADATA & SKEMA SEO LAYANAN INDUK PUSAT
export async function generateMetadata() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": dataKantorPusat.info.nama,
    "url": "https://lbhsikap.org/layanan",
    "telephone": dataKantorPusat.info.telepon,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": dataKantorPusat.info.alamat,
      "addressLocality": dataKantorPusat.info.kota,
      "addressCountry": "ID"
    }
  };

  return {
    title: "Layanan Bantuan Hukum Nasional | LBH SIKAP Pusat",
    description: `Pusat komando pengaduan kasus, kriteria penerimaan perkara, dan konsultasi hukum gratis berskala nasional bersama ${dataKantorPusat.info.nama}.`,
    other: {
      "type": "application/ld+json",
      "innerHTML": JSON.stringify(jsonLd)
    }
  };
}

export default function LayananPusatPage() {
  const gambar = asetGambar;
  const { kriteria, info } = dataKantorPusat;

  return (
    <main className="w-full bg-white">
      {/* SEKSI BANNER HERO LAYANAN PUSAT */}
      <section className="relative flex h-[35vh] min-h-72 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[45vh]">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.layananBawah} 
            alt="Layanan Hukum LBH SIKAP Pusat" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/75"></div>
        <div className="relative z-25 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Layanan Hukum Pusat
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Mekanisme Pengaduan Kasus Struktural dan Standar Operasional Bantuan Hukum Gratis {info.nama}
          </p>
        </div>
      </section>

      {/* =========================================================================
          ZONA 1: SEKSI UTAMA (Kriteria Penerimaan Kasus & Form Aduan Mandiri)
          💡 Menggunakan Background Foto dengan Overlay Putih Cerah Transparan
          ========================================================================= */}
      <section 
        style={{ backgroundImage: `url(${gambar.tentangkami || ''})` }} 
        className="relative w-full bg-cover bg-center bg-no-repeat py-24 border-b border-gray-200"
      >
        <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-xs"></div>

        {/* Kontainer Grid Sejajar Kiri-Kanan */}
        <div className="relative z-10 mx-auto w-11/12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Kolom Kiri: Memanggil Komponen Kriteria dengan Data Pusat */}
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <ServiceCriteria daftarKriteria={kriteria} /> 
          </div>

          {/* Kolom Kanan: Memanggil Komponen Formulir Pengaduan Pusat */}
          <div className="w-full drop-shadow-md">
            <ComplaintForm />
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONA 2: ALUR & STANDAR AJUAN (Informasi Transparansi Prosedur)
          💡 Menggunakan Background Premium Gelap Pekat Arang
          ========================================================================= */}
      <section 
        style={{ backgroundImage: `url(${gambar.kontak || ''})` }} 
        className="relative w-full bg-cover bg-center bg-no-repeat py-20 pb-28"
      >
        <div className="absolute inset-0 z-0 bg-gray-950/95 backdrop-blur-xs"></div>

        <div className="relative z-10 mx-auto w-11/12 max-w-5xl">
          <div className="mb-12 text-center md:text-left border-b border-gray-800 pb-5">
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              Prosedur Penanganan Perkara
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Tahapan taktis dan sistematis LBH SIKAP Pusat dalam merespons aduan serta melakukan advokasi publik.
            </p>
          </div>

          {/* Grid Langkah Alur Prosedur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white">
            {/* Langkah 1 */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Langkah 01</span>
                <h4 className="font-bold text-lg mt-2 uppercase tracking-wide">Analisis Berkas & Wawancara</h4>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Tim paralegal dan pengacara publik melakukan verifikasi bukti materiil, kronologi peristiwa, serta memeriksa kelayakan dokumen administratif pendaftar.
                </p>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Langkah 02</span>
                <h4 className="font-bold text-lg mt-2 uppercase tracking-wide">Gelar Perkara Struktural</h4>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Kasus yang lolos verifikasi awal dibawa ke forum internal untuk memetakan aktor pelanggar, merumuskan dampak sosial, serta menyusun strategi hukum litigasi maupun non-litigasi.
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Langkah 03</span>
                <h4 className="font-bold text-lg mt-2 uppercase tracking-wide">Pendampingan Taktis</h4>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Melaksanakan pembelaan hukum penuh, mengorganisir komunitas terdampak, menyebarkan rilis kampanye publik, hingga melakukan gugatan hukum di peradilan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}