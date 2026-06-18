"use client";

import React from "react";
import Link from "next/link"; 

interface BranchInfo {
  slug: string;
  kota: string;
  alamat: string;
  telepon?: string;
  email?: string;
  direktur?: string;
  mapsEmbed?: string;
}

interface BranchNetworkProps {
  branches: BranchInfo[];
}

export function BranchNetwork({ branches }: BranchNetworkProps) {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Ekspansi Gerakan
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Jaringan Kantor Cabang
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            LBH SIKAP hadir di berbagai wilayah untuk memperluas akses keadilan bagi masyarakat miskin, buta hukum, dan tertindas secara struktural.
          </p>
        </div>

        {/* 💡 PENERAPAN INLINE HORIZONTAL SCROLL (Tanpa Komponen Luar)
            - HP: flex-row, flex-nowrap, overflow-x-auto (geser kanan-kiri).
            - Desktop: sm:grid, sm:grid-cols-2, lg:grid-cols-3 (statis kotak-kotak). */}
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-6 -mx-6 px-6 pb-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 sm:pb-0 sm:overflow-visible">
          {branches.map((cabang) => (
            <div 
              key={cabang.slug}
              /* 💡 HP: w-[280px] agar kokoh tidak gepeng saat di-swipe, snap-center agar magnet pas di tengah.
                 💡 Desktop: sm:w-full sm:flex-none untuk mengikuti kolom grid bawaannya. */
              className="w-70 shrink-0 snap-center flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md sm:w-full sm:flex-none"
            >
              <div>
                {/* TAMPILAN EMBED MAPS */}
                <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-100 mb-5 bg-gray-50 relative">
                  <iframe
                    title={`Peta Lokasi LBH SIKAP ${cabang.kota}`}
                    src={
                      cabang.mapsEmbed && cabang.mapsEmbed.trim() !== ""
                        ? cabang.mapsEmbed
                        : `https://maps.google.com/maps?q=${encodeURIComponent("LBH SIKAP " + cabang.kota)}&t=&z=14&ie=UTF8&iwloc=&output=embed`
                    }
                    className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Nama Kota Cabang */}
                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                  LBH SIKAP <span className="text-amber-600">{cabang.kota}</span>
                </h3>
                
                {/* Detail Kontak */}
                <div className="mt-4 space-y-2.5 text-xs text-gray-600" suppressHydrationWarning>
                  {cabang.direktur && (
                    <p className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-2">
                      <span className="font-bold text-gray-400">Direktur:</span>
                      <span className="font-semibold text-gray-950">{cabang.direktur}</span>
                    </p>
                  )}

                  <p className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">Alamat:</span>
                    <span className="leading-relaxed">{cabang.alamat}</span>
                  </p>
                  
                  {cabang.telepon && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-gray-400">Telp:</span>
                      <span>{cabang.telepon}</span>
                    </p>
                  )}

                  {cabang.email && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-gray-400">Email:</span>
                      <span className="break-all">{cabang.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* AREA 2 TOMBOL AKSI BERDAMPINGAN */}
              <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("LBH SIKAP " + cabang.kota + " " + cabang.alamat)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-750 transition-all hover:bg-gray-50 text-center"
                >
                  Lokasi Cabang
                </a>

                <Link
                  href={`/${cabang.slug}`}
                  className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white text-center"
                >
                  Kunjungi
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}