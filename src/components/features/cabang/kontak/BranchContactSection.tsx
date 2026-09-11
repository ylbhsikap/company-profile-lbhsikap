// src/components/features/cabang/BranchContactSection.tsx
import React from "react";

interface BranchContactSectionProps {
  info: {
    nama: string;
    alamat: string;
    jamOperasional: string;
    telepon: string;
    email: string;
    mapsEmbed?: string;
  };
}

export function BranchContactSection({ info }: BranchContactSectionProps) {
  const waLink = `https://wa.me/${info.telepon.replace(/^0/, '62').replace(/[^0-9]/g, '')}`;
  const defaultMapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(info.nama + " " + info.alamat)}&output=embed`;

  return (
    <section id="kontak" className="w-full py-16 bg-gray-50 border-b border-gray-200/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* KARTU INFORMASI KONTAK */}
        <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
              Informasi Kontak Utama
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 text-justify">
              {info.alamat}
            </p>
            <hr className="my-2 border-0 border-t border-gray-150" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Jam Operasional</span>
                <span className="text-sm font-semibold text-gray-800">{info.jamOperasional}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Hotline / WhatsApp</span>
                <span className="text-sm font-black text-gray-950">{info.telepon}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center pb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Resmi</span>
                <span className="text-sm font-semibold text-gray-800 break-all">{info.email}</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full rounded-lg bg-gray-950 py-3.5 text-center text-sm font-bold tracking-wider uppercase text-white shadow-xs transition-all duration-300 hover:bg-gray-800"
            >
              Hubungi Melalui WhatsApp
            </a>
          </div>
        </div>

        {/* KARTU PETA LOKASI (MAPBOX) */}
        <div className="w-full flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
            Peta Lokasi Resmi
          </h2>
          <div className="relative flex-1 w-full min-h-87.5 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
            <iframe 
              src={info.mapsEmbed || defaultMapsSrc} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              title="Peta Lokasi Kantor LBH SIKAP" 
              allowFullScreen 
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}