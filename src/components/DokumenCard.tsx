// src/app/components/DokumenCard.tsx
import React from "react";

interface DokumenItem {
  id: string; // Mengikuti tipe string agar sinkron dengan struktur id data pusat
  tagColor: string;
  tag: string;
  judul: string;
  deskripsi: string;
  link: string;
  tombolLabel: string;
}

interface DokumenCardProps {
  doc: DokumenItem;
}

export function DokumenCard({ doc }: DokumenCardProps) {
  return (
    // Wadah Utama Kartu (Card)
    // flex flex-col justify-between memastikan tombol unduh selalu sejajar di bagian bawah kartu meskipun panjang teks deskripsi berbeda
    <div className="flex flex-col justify-between w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-gray-300">
      
      {/* Bagian Atas: Tag Kategori, Judul, dan Deskripsi */}
      <div>
        {/* Tag Kategori Dinamis */}
        <span 
          style={{ backgroundColor: doc.tagColor || "#111111" }} 
          className="inline-block rounded-xs px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs"
        >
          {doc.tag}
        </span>
        
        {/* Judul Dokumen */}
        <h3 className="mt-4 mb-3 text-lg font-bold leading-snug text-gray-950 md:text-xl">
          {doc.judul}
        </h3>
        
        {/* Deskripsi Dokumen */}
        <p className="text-sm leading-relaxed text-gray-600 text-justify">
          {doc.deskripsi}
        </p>
      </div>

      {/* Bagian Bawah: Tombol Aksi Unduh/Buka Berkas */}
      <div className="mt-6">
        <a 
          href={doc.link} 
          className="block w-full rounded-lg bg-gray-950 py-3 text-center text-xs font-bold tracking-wider uppercase text-white shadow-xs transition-all duration-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-950/20 active:scale-[0.99]"
        >
          {doc.tombolLabel}
        </a>
      </div>
      
    </div>
  );
}