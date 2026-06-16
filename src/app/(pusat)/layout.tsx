import React from "react";
import Link from "next/link";

// Komponen Navbar internal khusus Kantor Pusat
function NavbarPusat() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo Pusat */}
        <Link href="/" className="font-black text-amber-500 tracking-wider text-base uppercase">
          LBH SIKAP <span className="text-white text-xs font-normal border-l border-gray-700 pl-2 ml-2">PUSAT</span>
        </Link>

        {/* Menu Navigasi Khusus Pusat */}
        <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <Link href="/" className="hover:text-amber-500 transition-colors">Beranda</Link>
          <Link href="/tentang" className="hover:text-amber-500 transition-colors">Profil & Cabang</Link>
          <Link href="/layanan" className="hover:text-amber-500 transition-colors">Layanan Pengaduan</Link>
          <Link href="/publikasi" className="hover:text-amber-500 transition-colors">Publikasi</Link>
        </nav>
      </div>
    </header>
  );
}

export default function PusatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarPusat />
      {/* Jarak padding-top 16 (64px) disesuaikan dengan tinggi navbar fixed */}
      <div className="pt-16">{children}</div>
    </>
  );
}