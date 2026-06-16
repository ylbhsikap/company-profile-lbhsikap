import React from "react";
import Link from "next/link";

// 1. Definisi tipe data untuk objek 'item' publikasi (Dukungan penuh ID string/number)
interface PublikasiItem {
  id: number | string; 
  date: string;
  category: string;
  tagColor: string;    
  title: string;
  excerpt: string;
}

// 2. Properti komponen (Props)
interface PublikasiCardProps {
  item: PublikasiItem;
}

export default function PublikasiCard({ item }: PublikasiCardProps) {
  return (
    // Wadah Utama Kartu (Card Layout)
    // flex flex-col justify-between menjamin posisi tombol baca selalu presisi sejajar di dasar grid
    <div className="flex flex-col justify-between w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-gray-300">
      
      {/* Bagian Atas: Metadata, Judul, dan Isi Ringkasan */}
      <div>
        {/* Baris Atas: Tanggal & Tag Kategori */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-semibold tracking-wide text-gray-400">
            {item.date}
          </span>
          
          {/* Tag Kategori Dinamis dengan Background Color dari Database */}
          <span 
            style={{ backgroundColor: item.tagColor || "#111111" }} 
            className="inline-block rounded-xs px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs"
          >
            {item.category}
          </span>
        </div>
        
        {/* Judul Publikasi / Isu Advokasi */}
        <h3 className="text-lg font-black leading-snug text-gray-950 md:text-xl line-clamp-2 hover:text-gray-800 transition-colors">
          <Link href={`/publikasi/${item.id}`}>
            {item.title}
          </Link>
        </h3>
        
        {/* Ringkasan Masalah (Excerpt) */}
        {/* line-clamp-3 mengunci tinggi paragraf maksimal 3 baris agar tinggi antar-kartu konsisten */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600 text-justify line-clamp-3">
          {item.excerpt}
        </p>
      </div>
      
      {/* Bagian Bawah: Tombol Navigasi Menuju Detail */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link 
          href={`/publikasi/${item.id}`} 
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-950 transition-all duration-300 hover:gap-3.5 hover:text-gray-700"
        >
          Baca Selengkapnya <span className="text-sm">&rarr;</span>
        </Link>
      </div>
      
    </div>
  );
}