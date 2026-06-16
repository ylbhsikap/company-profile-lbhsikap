// src/app/layout.tsx
import { Metadata } from "next";
import React from "react";
import "./output.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "LBH SIKAP YOGYAKARTA | Bantuan Hukum Gratis Yogyakarta",
  description: "Lembaga Bantuan Hukum LBH SIKAP YOGYAKARTA menyediakan layanan pengacara gratis, konsultasi hukum pro bono, dan advokasi struktural untuk masyarakat kurang mampu di YOGYAKARTA.",
  keywords: ["LBH gratis", "bantuan hukum pro bono", "pengacara gratis", "bantuan hukum struktural", "posbakum", "YOGYAKARTA"],
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white antialiased flex flex-col">
        
        {/* Navigasi Utama */}
        <Navbar />
        
        {/* Konten Halaman Dinamis */}
        {/* flex-1 memastikan konten utama mendorong footer ke bagian paling bawah layar jika halaman kekurangan teks */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* FOOTER PERMANEN PREMUM MONOCHROME */}
        <footer className="w-full bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-900">
          
          {/* Footer Grid Layout */}
          <div className="mx-auto w-11/12 max-w-300 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            
            {/* Box 1: Profil Lembaga */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-white tracking-wide uppercase border-b border-gray-800 pb-2">
                LBH SIKAP YOGYAKARTA
              </h4>
              <p className="text-sm leading-relaxed text-gray-400 text-justify">
                Organisasi masyarakat sipil independen yang memperjuangkan keadilan struktural, penegakan Hak Asasi Manusia (HAM), serta pemberian advokasi dan bantuan hukum pro bono bagi masyarakat kurang mampu.
              </p>
            </div>

            {/* Box 2: Kegiatan & Pilar Gerakan */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-white tracking-wide uppercase border-b border-gray-800 pb-2">
                Kegiatan Lembaga
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm font-medium text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">• Pendampingan Pro Bono</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Kaderisasi Paralegal</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Advokasi Kebijakan Publik</li>
              </ul>
            </div>

            {/* Box 3: Kontak & Alamat Sekretariat */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-white tracking-wide uppercase border-b border-gray-800 pb-2">
                Sekretariat Resmi
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Sleman, DI Yogyakarta 55283.
              </p>
              <ul className="flex flex-col gap-2 text-sm border-t border-gray-900 pt-2 mt-1">
                <li><strong className="text-white">WA:</strong> 081906157620</li>
                <li><strong className="text-white">Email:</strong> yogyakarta@ylbhsikap.or.id</li>
              </ul>
            </div>
            
          </div>

          {/* Area Footer Paling Bawah (Footer Bottom) */}
          <div className="mt-16 border-t border-gray-900 pt-8">
            <div className="mx-auto w-11/12 max-w-300 flex flex-col gap-4 items-center justify-between text-xs text-gray-500 sm:flex-row">
              <p>© 2026 LBH SIKAP Yogyakarta. Seluruh Hak Cipta Dilindungi.</p>
              <p className="font-semibold tracking-wider text-gray-600 uppercase hover:text-amber-700 transition-colors">
                Managed by OPLAY.ID
              </p>
            </div>
          </div>
          
        </footer>
      </body>
    </html>
  );
}