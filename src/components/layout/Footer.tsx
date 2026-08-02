// src/components/layout/Footer.tsx
import React from "react";
import Image from "next/image";

interface FooterProps {
  namaLembaga: string;
  alamat: string;
  telepon: string;
  email: string;
}

export function Footer({ namaLembaga, alamat, telepon, email }: FooterProps) {
  return (
    <footer className="bg-white text-gray-950 py-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Kolom 1: Identitas */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-wider text-black mb-1">{namaLembaga}</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-4">
            Yayasan Lembaga Bantuan Hukum & Studi Kebijakan Publik
          </p>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
            {alamat}
          </p>
        </div>

        {/* Kolom 2: Kontak */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Kontak Resmi</h3>
          <ul className="text-xs text-gray-600 space-y-2">
            <li>Email: {email}</li>
            <li>Telepon: {telepon}</li>
          </ul>
        </div>

        {/* Kolom 3: Legal & Digital Infrastructure */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Hak Cipta</h3>
          <p className="text-xs text-gray-600 mb-3">
            © 2026 Yayasan Lembaga Bantuan Hukum SIKAP.
          </p>
          
          {/* 💡 Logo OPLAY.ID interaktif yang mengarah ke website utama */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-500 font-medium">Managed by</span>
            <a 
              href="https://oplay.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-hidden"
              title="PT Our Play Indonesia (OPLAY.ID)"
            >
              <div className="relative w-28 h-40">
                <Image
                  src="/assets/mitra/oplayid3.png"
                  alt="OPLAY.ID"
                  fill
                  className="object-contain object-left"
                  sizes="100px"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}