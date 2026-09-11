import React from "react";
import Link from "next/link";

// 1. Definisi tipe data untuk objek 'item' (Sinkron dengan tipe string ID Anda)
interface BeritaItem {
  id: string;      
  title: string;   
  excerpt: string; 
  date?: string;   
}

// 2. Definisi properti (props) komponen
interface NewsCardProps {
  item: BeritaItem;
}

// 3. Komponen Utama dengan standar kelas utilitas Tailwind CSS v4
export default function NewsCard({ item }: NewsCardProps) {
  return (
    // Wadah Utama Kartu Berita (Card)
    // flex flex-col justify-between memastikan tombol link baca selalu sejajar di bawah meskipun panjang teks berbeda
    <article className="flex flex-col justify-between w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-gray-300">
      
      {/* Bagian Atas: Tanggal, Judul, dan Ringkasan */}
      <div>
        {/* Tanggal terbit (Hanya muncul jika data item.date tersedia) */}
        {item.date && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            {item.date}
          </span>
        )}
        
        {/* Judul Berita */}
        <h3 className="text-lg font-black leading-snug text-gray-950 md:text-xl line-clamp-2 hover:text-gray-800 transition-colors">
          <Link href={`/berita/${item.id}`}>
            {item.title}
          </Link>
        </h3>
        
        {/* Ringkasan Konten (Excerpt) */}
        <p className="mt-3 mb-6 text-sm leading-relaxed text-gray-600 text-justify line-clamp-3">
          {item.excerpt}
        </p>
      </div>

      {/* Bagian Bawah: Link Navigasi Detail */}
      <div className="border-t border-gray-100 pt-4">
        <Link 
          href={`/berita/${item.id}`} 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 transition-all duration-300 hover:gap-4 hover:text-gray-700"
        >
          Baca Selengkapnya <span className="text-sm">&rarr;</span>
        </Link>
      </div>
      
    </article>
  );
}