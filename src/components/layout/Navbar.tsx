"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asetGambar, dataSeluruhCabang } from "@/data/data"; 

interface MenuItem {
  name: string;
  href: string;
}

interface CabangItem {
  name: string;
  href: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  namaLembaga: string;
  cabangItems: CabangItem[];
}

export function Navbar({ menuItems, namaLembaga, cabangItems }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cabangSlugs = Object.keys(dataSeluruhCabang);
  const isCabangPage = cabangSlugs.some(slug => pathname.includes(`/${slug}`));
  
  const displayNama = isCabangPage ? "LBH SIKAP" : "YLBH SIKAP";
  const namaCabang = isCabangPage ? namaLembaga.replace("LBH SIKAP ", "") : "";

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${
      isScrolled ? "bg-white border-b border-gray-200 shadow-sm py-2" : "bg-transparent py-3"
    }`}>
      {/* Container utama dengan padding lebih kecil di HP */}
      <div className="mx-auto max-w-6xl px-3 md:px-4 flex items-center justify-between">
        
        {/* LOGO & NAMA (Diperkecil untuk mobile) */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src={asetGambar.logoResmi} alt="Logo" className="h-7 w-7 object-contain" />
          <div className="flex flex-col">
            <span className={`text-sm font-black uppercase leading-none transition-colors ${isScrolled ? "text-gray-950" : "text-white"}`}>
              {displayNama}
            </span>
            {isCabangPage && (
              <span className={`text-[8px] font-bold tracking-widest uppercase mt-0.5 ${isScrolled ? "text-amber-700" : "text-amber-200"}`}>
                {namaCabang}
              </span>
            )}
          </div>
        </Link>

        {/* MENU NAVIGASI (Dibuat responsif) */}
        <div className={`flex items-center gap-3 md:gap-6 font-bold text-[10px] md:text-sm transition-colors ${
          isScrolled ? "text-gray-700" : "text-white"
        }`}>
          
          {/* MENU UTAMA (Sembunyikan di HP jika terlalu panjang, atau gunakan text kecil) */}
          <div className="flex gap-3 md:gap-6">
            {menuItems?.map((menu) => (
              <Link key={menu.href} href={menu.href} className="hover:text-amber-500 whitespace-nowrap">
                {menu.name}
              </Link>
            ))}
          </div>

          {/* DROPDOWN CABANG (Tetap ada sebagai akses cepat) */}
          <div className="relative border-l border-current pl-3">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-0.5 hover:text-amber-500">
              <span>Cabang</span>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute right-0 mt-3 w-40 rounded-lg bg-white p-1 shadow-xl border border-gray-100">
                  {cabangItems.map((cabang) => (
                    <Link key={cabang.href} href={cabang.href} onClick={() => setIsDropdownOpen(false)} className="block px-3 py-2 text-[10px] text-gray-700 hover:bg-gray-50 hover:text-amber-600">
                      {cabang.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}