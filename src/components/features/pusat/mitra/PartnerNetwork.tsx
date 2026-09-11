// src/components/features/mitra/PartnerNetwork.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PartnerInfo {
  id: string;
  nama: string;
  bidangTeknologi: string;
  deskripsi: string;
  logo: string;
  websiteUrl: string;
  statusKemitraan?: string;
}

interface PartnerNetworkProps {
  partners: PartnerInfo[];
}

export function PartnerNetwork({ partners }: PartnerNetworkProps) {
  return (
    <section className="bg-white py-16 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Kolaborasi Strategis
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Mitra & Partnership Teknologi
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Didukung oleh infrastruktur teknologi, sistem keamanan digital, dan jaringan server terdepan untuk memastikan operasional lembaga yang handal dan transparan.
          </p>
        </div>

        {/* GRID KARTU MITRA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
            >
              <div>
                {/* HEADER KARTU: LOGO TANPA BINGKAI & STATUS */}
                <div className="flex items-center justify-between mb-5">
                  {/* Bingkai dihapus, menggunakan ukuran kontainer fleksibel untuk logo */}
                  <div className="relative w-56 h-32 flex items-center justify-start">
                    <Image
                      src={partner.logo}
                      alt={partner.nama}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  {partner.statusKemitraan && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200/50">
                      {partner.statusKemitraan}
                    </span>
                  )}
                </div>

                {/* NAMA MITRA & SPESIALISASI */}
                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                  {partner.nama}
                </h3>
                
                <p className="mt-1 text-xs font-bold text-amber-600 uppercase tracking-widest">
                  {partner.bidangTeknologi}
                </p>

                {/* DESKRIPSI INFORMASI KONTRIBUSI */}
                <p className="mt-3 text-xs leading-relaxed text-gray-600 line-clamp-4">
                  {partner.deskripsi}
                </p>
              </div>

              {/* TOMBOL KUNJUNGI */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white text-center shadow-2xs"
                >
                  Kunjungi Website Mitra
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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