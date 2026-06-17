"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asetGambar, dataSeluruhCabang } from "@/data/data"; 

interface MenuItem {
  name: string;
  href: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  namaLembaga: string;
  cabangItems: MenuItem[]; 
}

export function Navbar({ menuItems, namaLembaga, cabangItems }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Efek scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi halaman cabang secara dinamis
  const cabangSlugs = Object.keys(dataSeluruhCabang);
  const isCabangPage = cabangSlugs.some(slug => pathname.includes(`/${slug}`));
  
  const displayNama = isCabangPage ? "LBH SIKAP" : "YLBH SIKAP";
  const namaCabang = isCabangPage ? namaLembaga.replace("LBH SIKAP ", "") : "";

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${
      isScrolled ? "bg-white border-b border-gray-200 shadow-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        
        {/* LOGO, IDENTITAS & TOMBOL PUSAT */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8">
              <img src={asetGambar.logoResmi} alt="Logo" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-wider uppercase leading-none transition-colors ${
                isScrolled ? "text-gray-950" : "text-white"
              }`}>
                {displayNama}
              </span>
              {isCabangPage && (
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 transition-colors ${
                  isScrolled ? "text-amber-700" : "text-amber-200"
                }`}>
                  {namaCabang}
                </span>
              )}
            </div>
          </Link>

          {/* TOMBOL KEMBALI KE PUSAT */}
          {isCabangPage && (
            <Link href="/" className={`hidden md:flex items-center gap-1.5 rounded-lg border px-3 py-1 text-[10px] font-black uppercase transition-all ${
              isScrolled 
                ? "border-amber-600/20 bg-amber-50 text-amber-700 hover:bg-gray-950 hover:text-white" 
                : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-gray-950"
            }`}>
              <span>Pusat</span>
            </Link>
          )}
        </div>

        {/* MENU NAVIGASI & DROPDOWN CABANG */}
        {/* MENU NAVIGASI & DROPDOWN CABANG */}
        <div className={`flex items-center gap-6 font-bold text-sm transition-colors ${
          isScrolled ? "text-gray-700" : "text-white"
        }`}>
          
          {/* MENU UTAMA - Saya hapus 'hidden md:flex' agar terlihat di semua perangkat untuk tes */}
          <div className="flex gap-6">
            {menuItems?.map((menu) => (
              <Link 
                key={menu.href} 
                href={menu.href} 
                className="hover:text-amber-500 transition-colors cursor-pointer"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* DROPDOWN CABANG */}
          <div className="relative border-l border-white/20 pl-6">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="flex items-center gap-1 hover:text-amber-500 transition-colors"
            >
              <span>Cabang</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute right-0 mt-3 w-48 rounded-lg bg-white p-1.5 shadow-xl border border-gray-100">
                  {cabangItems.map((cabang) => (
                    <Link 
                      key={cabang.href} 
                      href={cabang.href} 
                      onClick={() => setIsDropdownOpen(false)} 
                      className="block px-3 py-2 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-amber-600 rounded-md transition-colors"
                    >
                      LBH SIKAP {cabang.name}
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