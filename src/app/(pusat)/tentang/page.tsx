// src/app/(pusat)/tentang/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { asetGambar, dataKantorPusat, dataSeluruhCabang } from "@/data/data";

export const metadata = {
  title: "Profil & Jaringan Cabang | LBH SIKAP Pusat",
  description: "Mengenal struktur organisasi LBH SIKAP Pusat beserta seluruh daftar jaringan kantor cabang bantuan hukum di Indonesia.",
};

export default function TentangPusatPage() {
  const gambar = asetGambar;
  const { struktur, info } = dataKantorPusat;

  // 🗺️ Mengambil daftar kunci slug cabang (contoh: ['yogyakarta'])
  const listSlugCabang = Object.keys(dataSeluruhCabang);

  return (
    <main className="w-full bg-white">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative flex h-[35vh] min-h-72 w-full items-center justify-center overflow-hidden bg-gray-950 pt-16 md:h-[45vh]">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image 
            src={gambar.tentangkami} 
            alt="Tentang LBH SIKAP" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/75"></div>
        <div className="relative z-25 w-11/12 max-w-5xl text-center text-white px-4">
          <h1 className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl">
            Profil & Jaringan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-300 sm:text-base">
            Struktur Kepemimpinan Pusat dan Peta Sebaran Kantor Bantuan Hukum Jajaran Nasional
          </p>
        </div>
      </section>

      {/* =========================================================================
          ZONA 1: STRUKTUR ANGGOTA & PIMPINAN PUSAT
          ========================================================================= */}
      <section className="w-full py-20 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto w-11/12 max-w-4xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-xs bg-gray-950 px-3 py-1 text-2xs font-extrabold uppercase tracking-widest text-white">
              Struktur Organisasi
            </span>
            <h2 className="text-2xl font-black uppercase tracking-wide text-gray-950 mt-4 md:text-3xl">
              Pucuk Pimpinan Kolektif Pusat
            </h2>
          </div>

          {/* Pengurus Inti */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto items-stretch mb-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs text-center">
              <span className="text-2xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                {struktur.pimpinan.jabatan}
              </span>
              <h3 className="text-lg font-black text-gray-950 uppercase tracking-wide">
                {struktur.pimpinan.nama}
              </h3>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs text-center">
              <span className="text-2xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                {struktur.direktur.jabatan}
              </span>
              <h3 className="text-lg font-black text-gray-950 uppercase tracking-wide">
                {struktur.direktur.nama}
              </h3>
            </div>
          </div>

          {/* Divisi-Divisi Pusat */}
          <div className="pt-6 border-t border-gray-200 max-w-2xl mx-auto">
            <h4 className="text-center text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
              Divisi Operasional Nasional
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {struktur.divisi.map((div, idx) => (
                <div key={idx} className="px-4 py-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center shadow-2xs">
                  <span className="font-bold text-sm text-gray-900">{div.nama}</span>
                  <span className="text-3xs font-extrabold uppercase bg-gray-100 text-gray-600 px-2 py-0.5 rounded-sm">
                    {div.jabatan}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ZONA 2: SEBARAN JARINGAN KANTOR CABANG (OTOMATIS DI-MAP)
          ========================================================================= */}
      <section className="w-full py-20 pb-32 bg-white">
        <div className="mx-auto w-11/12 max-w-5xl">
          <div className="mb-12 text-center md:text-left border-b border-gray-200 pb-5">
            <h2 className="text-2xl font-black uppercase tracking-wide text-gray-950 md:text-3xl">
              Jaringan Kantor Cabang
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Temukan pos bantuan hukum dan sekretariat LBH SIKAP terdekat di wilayah Anda.
            </p>
          </div>

          {/* Grid Jaringan Cabang Dinamis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listSlugCabang.map((slug) => {
              const cabang = dataSeluruhCabang[slug];
              return (
                <div 
                  key={slug} 
                  className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-amber-500 hover:shadow-lg transition-all group"
                >
                  <div>
                    <span className="text-3xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-xs">
                      Kota {cabang.info.kota}
                    </span>
                    <h3 className="text-lg font-black text-gray-950 mt-2 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
                      {cabang.info.nama}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-3">
                      📍 {cabang.info.alamat}
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-200/60 text-2xs font-medium text-gray-400 space-y-1">
                      <p>📞 Telp: {cabang.info.telepon}</p>
                      <p>✉ Email: {cabang.info.email}</p>
                    </div>
                  </div>

                  {/* Tombol Menuju Halaman Cabang Dinamis */}
                  <div className="mt-6 pt-2">
                    <Link 
                      href={`/${slug}`} 
                      className="inline-flex w-full justify-center items-center rounded-lg bg-gray-950 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-600 transition-all shadow-xs"
                    >
                      Kunjungi Situs Cabang &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}