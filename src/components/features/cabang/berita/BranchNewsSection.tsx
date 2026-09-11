// src/components/features/cabang/berita/BranchNewsSection.tsx
import React from "react";
import { PublikasiCard } from "@/components/features/pusat/publikasi/PublikasiCard";

// Sesuaikan interface dengan struktur data Berita/Artikel yang asli
interface BeritaItem {
  id: string | number;
  title: string;
  excerpt: string;
  date?: string;
  category?: string;
  color?: string;
  slugCabang?: string;
  gambarKunci?: string;
  [key: string]: any;
}

interface BranchNewsSectionProps {
  beritaList: BeritaItem[];
}

export function BranchNewsSection({ beritaList }: BranchNewsSectionProps) {
  return (
    <section id="berita" className="w-full py-16 bg-white border-b border-gray-150 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI (Disamakan gayanya dengan standar komponen cabang lain) */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Aktivitas Terkini
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Kabar Advokasi Wilayah
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Ringkasan rilis siaran pers, kegiatan lapangan, dan penanganan kasus hukum terkini di wilayah kerja kami.
          </p>
        </div>
        
        {/* CONTAINER GRID BERITA */}
        {beritaList && beritaList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaList.map((item) => (
              <PublikasiCard 
                key={item.id} 
                artikel={item as any} 
              />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic uppercase tracking-wider">
            Belum ada rilis siaran pers untuk wilayah ini.
          </p>
        )}

      </div>
    </section>
  );
}