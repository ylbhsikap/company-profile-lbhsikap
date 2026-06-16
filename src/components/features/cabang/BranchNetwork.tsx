// src/components/features/cabang/BranchNetwork.tsx
"use client";

import React from "react";
import Link from "next/link";

interface BranchInfo {
  slug: string;
  kota: string;
  alamat: string;
  telepon?: string;
  email?: string;
}

interface BranchNetworkProps {
  branches: BranchInfo[];
}

export function BranchNetwork({ branches }: BranchNetworkProps) {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
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

        {/* GRID KARTU CABANG */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((cabang) => (
            <div 
              key={cabang.slug}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
            >
              <div>
                {/* Nama Kota Cabang */}
                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                  LBH SIKAP <span className="text-amber-600">{cabang.kota}</span>
                </h3>
                
                {/* Detail Kontak */}
                <div className="mt-4 space-y-2.5 text-xs text-gray-600">
                  {/* Alamat */}
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-gray-400">Alamat:</span>
                    <span className="leading-relaxed">{cabang.alamat}</span>
                  </p>
                  
                  {/* Telepon */}
                  {cabang.telepon && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-gray-400">Telp:</span>
                      <span>{cabang.telepon}</span>
                    </p>
                  )}

                  {/* Email */}
                  {cabang.email && (
                    <p className="flex items-center gap-2">
                      <span className="font-bold text-gray-400">Email:</span>
                      <span className="break-all">{cabang.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Tombol Aksi Menuju Halaman Cabang */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={`/${cabang.slug}`}
                  className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white"
                >
                  Kunjungi Cabang
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