// src/components/features/cabang/tentang/BranchAdvokatSection.tsx
import React from "react";
import Image from "next/image";

interface AdvokatType {
  id: string | number;
  nama: string;
  jabatan: string;
  foto: string;
  noHp: string;
  email: string;
  deskripsi: string;
}

interface BranchAdvokatSectionProps {
  namaCabang: string;
  kota: string;
  daftarAdvokat: AdvokatType[];
}

export function BranchAdvokatSection({ namaCabang, kota, daftarAdvokat }: BranchAdvokatSectionProps) {
  return (
    <section id="advokat" className="w-full py-16 bg-white border-b border-gray-150 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* HEADER SEKSI (Judul & Keterangan Berada di Sisi Kanan) */}
        <div className="mb-12 flex flex-col items-center md:items-end text-center md:text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Tim Penegak Hukum
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Advokat & Paralegal
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Daftar resmi para advokat dan paralegal pro bono yang bertugas memberikan layanan bantuan hukum di {namaCabang}.
          </p>
        </div>

        {/* CONTAINER DAFTAR ADVOKAT */}
        {daftarAdvokat && daftarAdvokat.length > 0 ? (
          <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 sm:pb-0 sm:overflow-visible">
            {daftarAdvokat.map((advokat) => (
              <div 
                key={advokat.id}
                className="w-72 shrink-0 snap-center flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 sm:w-full sm:flex-none hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
              >
                <div>
                  {/* FOTO PROFIL */}
                  <div className="w-full h-56 rounded-lg overflow-hidden border border-gray-100 mb-5 bg-gray-50 relative">
                    <Image 
                      src={advokat.foto} 
                      alt={advokat.nama} 
                      fill 
                      className="object-cover object-top" 
                    />
                  </div>

                  {/* JABATAN & NAMA */}
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600">
                    {advokat.jabatan}
                  </span>
                  <h3 className="text-lg font-black uppercase tracking-wide text-gray-950 mt-1 leading-tight">
                    {advokat.nama}
                  </h3>

                  {/* DETAIL KONTAK */}
                  <div className="mt-4 space-y-2.5 text-xs text-gray-600">
                    <div className="grid grid-cols-[56px_1fr] gap-2 items-center">
                      <span className="font-bold text-gray-400 uppercase tracking-wider">No. HP</span>
                      <span className="font-semibold text-gray-900">{advokat.noHp}</span>
                    </div>
                    
                    <div className="grid grid-cols-[56px_1fr] gap-2 items-center">
                      <span className="font-bold text-gray-400 uppercase tracking-wider">Email</span>
                      <span className="font-semibold text-gray-900 break-all">{advokat.email}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 mt-2">
                      <p className="leading-relaxed line-clamp-3 text-gray-600">
                        {advokat.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* TOMBOL AKSI */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/${advokat.noHp.replace(/^0/, '62').replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white text-center"
                  >
                    Hubungi Advokat
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic uppercase tracking-wider text-center">
            Daftar personil advokat publik wilayah sedang dalam proses pembaruan.
          </p>
        )}

      </div>
    </section>
  );
}