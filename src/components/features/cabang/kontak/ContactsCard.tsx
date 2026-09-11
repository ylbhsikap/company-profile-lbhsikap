// src/components/ContactCard.tsx
import React from "react";

interface ContactCardProps {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
}

export function ContactCard({ alamat, jamOperasional, whatsapp, email }: ContactCardProps) {
  // Mengubah format nomor hp lokal menjadi link wa.me internasional resmi
  const waLink = `https://wa.me/${whatsapp.replace(/^0/, '62').replace(/[^0-9]/g, '')}`;

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
          Informasi Kontak Utama
        </h2>
        <p className="text-sm leading-relaxed text-gray-600 text-justify">
          {alamat}
        </p>

        <hr className="my-2 border-0 border-t border-gray-150" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Jam Operasional
            </span>
            <span className="text-sm font-semibold text-gray-800">
              {jamOperasional}
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Hotline / WhatsApp
            </span>
            <span className="text-sm font-black text-gray-950">
              {whatsapp}
            </span>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Email Resmi
            </span>
            <span className="text-sm font-semibold text-gray-800 break-all">
              {email}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full rounded-lg bg-gray-950 py-3.5 text-center text-sm font-bold tracking-wider uppercase text-white shadow-xs transition-all duration-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-950/20 active:scale-[0.99]"
        >
          Hubungi Melalui WhatsApp
        </a>
      </div>
    </div>
  );
}