// src/app/(pusat)/publikasi/page.tsx
import React from "react";
import Link from "next/link";
import { databaseArtikelNasional, Berita } from "@/data/data";

export default function PublikasiPusatNasional() {
  // Pusat mengambil data keseluruhan secara efisien dari satu database nasional tunggal
  const semuaArtikel: Berita[] = databaseArtikelNasional;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HEADER PAGE AGREGATOR */}
      <div className="mb-10">
        <h1 className="text-2xl font-black tracking-wider uppercase text-gray-950">
          Publikasi Jajaran Wilayah Nasional
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Kumpulan rilis pers, opini hukum, dan dokumentasi kasus dari seluruh cabang LBH SIKAP.
        </p>
      </div>

      {/* GRID DAFTAR PUBLIKASI NASIONAL */}
      {semuaArtikel.length === 0 ? (
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Belum ada data publikasi nasional yang terkumpul.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {semuaArtikel.map((artikel) => (
            <div 
              key={artikel.id} 
              className="border border-gray-200 p-6 rounded-xl bg-gray-50 flex flex-col justify-between shadow-xs hover:border-gray-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  {/* Badge Identitas Asal Cabang */}
                  <span className="text-[10px] font-extrabold bg-gray-950 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    Cabang: {artikel.slugCabang}
                  </span>
                  {/* Tag Kategori Ringkas Artikel */}
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wide"
                    style={{ color: artikel.color || "#4b5563" }}
                  >
                    {artikel.category}
                  </span>
                </div>

                <h2 className="text-base font-bold mt-3 text-gray-950 line-clamp-2 uppercase leading-tight tracking-tight">
                  {artikel.title}
                </h2>
                
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {artikel.excerpt}
                </p>
              </div>

              {/* TAUTAN BYPASS: Mengarahkan langsung masuk ke ekosistem sub-folder cabang */}
              <div className="mt-4 pt-4 border-t border-gray-200/60">
                <Link 
                  href={`/${artikel.slugCabang}/publikasi/${artikel.id}`}
                  className="text-xs font-bold text-gray-950 hover:text-amber-600 transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  Baca Artikel Selengkapnya di Website Cabang &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}