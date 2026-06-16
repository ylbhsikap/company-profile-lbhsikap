// src/components/layout/Footer.tsx
import React from "react";

interface FooterProps {
  namaLembaga: string;
  alamat: string;
  telepon: string;
  email: string;
}

export function Footer({ namaLembaga, alamat, telepon, email }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Kolom 1: Identitas */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-wider text-amber-500 mb-4">{namaLembaga}</h3>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            {alamat}
          </p>
        </div>

        {/* Kolom 2: Kontak */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Kontak Resmi</h3>
          <ul className="text-xs text-gray-400 space-y-2">
            <li>Email: {email}</li>
            <li>Telepon: {telepon}</li>
          </ul>
        </div>

        {/* Kolom 3: Legal */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Hak Cipta</h3>
          <p className="text-xs text-gray-500">
            © 2026 Yayasan Lembaga Bantuan Hukum SIKAP. Managed by OPLAY.ID
          </p>
        </div>
      </div>
    </footer>
  );
}