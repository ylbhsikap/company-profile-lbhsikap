// src/components/OrganogramTree.tsx
import React from "react";

interface OrganisasiType {
  pimpinan: { nama: string; jabatan: string };
  direktur: { nama: string; jabatan: string };
  divisi: { nama: string; jabatan: string }[];
}

interface OrganogramTreeProps {
  treeOrga: OrganisasiType;
}

export function OrganogramTree({ treeOrga }: OrganogramTreeProps) {
  return (
    <div className="mt-16 w-full bg-white">
      {/* Header Judul */}
      <h2 className="text-center text-2xl font-black uppercase tracking-wider text-gray-950 md:text-3xl">
        Struktur Kepengurusan
      </h2>
      <p className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-gray-400 mt-1">
        Garis Komando dan Sinergi Operasional LBH SIKAP
      </p>
      
      {/* Kontainer Utama Pohon Struktur */}
      <div className="relative flex flex-col items-center gap-12 my-10 max-w-4xl mx-auto">
        
        {/* Line Alur Komando Tengah Tradisional (Hanya muncul di desktop/tablet) */}
        <div className="absolute top-10 bottom-24 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 hidden md:block z-0" />

        {/* --- TINGKAT 1: PEMBINA / PIMPINAN --- */}
        <div className="relative flex w-full justify-center z-10">
          <div className="w-full min-w-60 max-w-75 rounded-xl border-2 border-gray-950 bg-gray-950 p-5 text-center shadow-md ring-4 ring-gray-950/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-amber-500">
              {treeOrga.pimpinan.jabatan}
            </h3>
            <p className="mt-2 text-sm font-bold text-white">
              {treeOrga.pimpinan.nama}
            </p>
          </div>
        </div>

        {/* --- TINGKAT 2: DIREKTUR --- */}
        <div className="relative flex w-full justify-center z-10">
          <div className="w-full min-w-60 max-w-75 rounded-xl border border-gray-800 bg-gray-900 p-5 text-center shadow-md">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-300">
              {treeOrga.direktur.jabatan}
            </h3>
            <p className="mt-2 text-sm font-bold text-white">
              {treeOrga.direktur.nama}
            </p>
          </div>
        </div>

        {/* --- TINGKAT 3: JAJARAN DIVISI OPERASIONAL --- */}
        {/* Menggunakan grid responsif: 1 kolom di HP, otomatis membesar hingga 3 kolom di desktop */}
        <div className="relative flex w-full flex-wrap justify-center gap-6 z-10 px-4">
          {treeOrga.divisi.map((div, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-12px)] md:w-60 rounded-xl border border-gray-200 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-900 hover:shadow-md group"
            >
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-950 group-hover:text-amber-700 transition-colors">
                {div.jabatan}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                {div.nama}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}