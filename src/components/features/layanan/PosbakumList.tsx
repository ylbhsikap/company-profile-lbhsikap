"use client";

import React from "react";
import { daftarPosbakum } from "@/data/data";

interface PosbakumInfo {
  id: string | number;
  nama: string;
  alamat: string;
  telepon: string;
  gmapsUrl: string;
}

interface PosbakumListProps {
  data?: PosbakumInfo[];
}

export default function PosbakumList({ data }: PosbakumListProps) {
  const listPosbakum = data || daftarPosbakum;

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100 w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Bantuan Hukum Gratis
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Pos Bantuan Hukum (Posbakum)
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            LBH SIKAP menyediakan layanan Posbakum di berbagai wilayah pengadilan untuk mempermudah masyarakat dalam memperoleh konsultasi dan bantuan hukum secara pro bono.
          </p>
        </div>

        {/* CONTAINER SCROLL HORIZONTAL MOBILE */}
        <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 sm:pb-0 sm:overflow-visible">
          {listPosbakum.map((pos) => (
            <div 
              key={pos.id}
              className="w-72.5 shrink-0 snap-center flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 sm:w-full sm:flex-none hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
            >
              <div>
                {/* 💡 PERBAIKAN DI SINI: Tag h3 dipastikan utuh tanpa terpotong komentar */}
                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                  POSBAKUM <span className="text-amber-600">{pos.nama}</span>
                </h3>
                
                {/* DETAIL ALAMAT & TELEPON */}
                <div 
                  className="mt-4 space-y-2.5 text-xs text-gray-600"
                  suppressHydrationWarning
                >
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-gray-400 min-w-12.5">Alamat:</span>
                    <span className="leading-relaxed line-clamp-3 sm:line-clamp-none">{pos.alamat}</span>
                  </p>
                  
                  {pos.telepon && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-gray-400 min-w-12.5">Telp:</span>
                      <span>{pos.telepon}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* TOMBOL LINK GOOGLE MAPS */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={pos.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white"
                >
                  Lihat Rute Lokasi
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}