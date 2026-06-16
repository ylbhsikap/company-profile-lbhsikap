// src/components/features/berita/FeaturedNews.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Berita, AsetGambarType } from "@/data/data";

interface FeaturedNewsProps {
  latestNews: Berita[];
  gambar: AsetGambarType;
}

export function FeaturedNews({ latestNews, gambar }: FeaturedNewsProps) {
  // Ambil nama cabang dari artikel pertama sebagai penanda teks dinamis di komponen
  // Jika tidak ada berita, pasang fallback default "Nasional" atau "Cabang"
  const namaWilayah = latestNews.length > 0 ? latestNews[0].slugCabang : "Cabang";

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto w-11/12 max-w-6xl px-4">
        
        {/* HEADER KOMPONEN - SEKARANG DINAMIS */}
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-black tracking-wider uppercase text-gray-950 sm:text-3xl">
            Publikasi Terkini Wilayah {namaWilayah}
          </h2>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
            Rilis Pers, Opini Hukum, dan Advokasi Kasus Terbaru dari Struktur Posko Setempat
          </p>
        </div>

        {/* LOGIKA JIKA BELUM ADA BERITA */}
        {latestNews.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-gray-300 rounded-xl bg-white">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              Belum ada rilis publikasi terbaru dari wilayah ini.
            </p>
          </div>
        ) : (
          /* GRID BERITA DINAMIS */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => {
              // Mengambil path gambar secara aman berdasarkan properti 'gambarKunci' data global
              const srcGambar = gambar[news.gambarKunci] || gambar.bannerUtama;

              return (
                <article 
                  key={news.id} 
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-gray-300"
                >
                  <div>
                    {/* Pembungkus Gambar Miniatur Artikel */}
                    <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                      <Image
                        src={srcGambar}
                        alt={news.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Kategori & Tanggal */}
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 border rounded-sm"
                        style={{ 
                          color: news.color, 
                          borderColor: `${news.color}30`,
                          backgroundColor: `${news.color}05`
                        }}
                      >
                        {news.category}
                      </span>
                      <time className="text-[11px] font-medium text-gray-400" dateTime={news.date}>
                        {news.date}
                      </time>
                    </div>

                    {/* Judul Artikel */}
                    <h3 className="mt-3 text-base font-bold text-gray-950 line-clamp-2 uppercase leading-snug tracking-tight">
                      {news.title}
                    </h3>

                    {/* Ringkasan Ringkas */}
                    <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>

                  {/* LINK MENUJU DETAIL SUB-FOLDER CABANG */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href={`/${news.slugCabang}/publikasi/${news.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-950 hover:text-amber-600 transition-colors"
                    >
                      Selengkapnya &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}