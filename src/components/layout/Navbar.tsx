"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asetGambar, dataSeluruhCabang } from "@/data/data"; 

interface MenuItem {
  name: string;
  href: string;
}

interface NavbarProps {
  menuItems: MenuItem[];
  namaLembaga: string; // Nama lembaga yang dilempar dari parent
  cabangItems: MenuItem[]; 
}

export function Navbar({ menuItems, namaLembaga, cabangItems }: NavbarProps) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 💡 LOGIKA DINAMIS: Mengambil semua kunci cabang dari dataSeluruhCabang
  const cabangSlugs = Object.keys(dataSeluruhCabang);
  const isCabangPage = cabangSlugs.some(slug => pathname.includes(`/${slug}`));
  
  // Menentukan nama tampilan lembaga
  const displayNama = isCabangPage ? "LBH SIKAP" : "YLBH SIKAP";
  const namaCabang = isCabangPage ? namaLembaga.replace("LBH SIKAP ", "") : "";

  return (
    <nav className="sticky top-0 z-9999 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 flex items-center justify-center shrink-0">
              <img
                src={asetGambar.logoResmi} 
                alt="Logo LBH SIKAP"
                className="h-full w-auto object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              {/* Teks berubah otomatis antara YLBH SIKAP (Pusat) dan LBH SIKAP (Cabang) */}
              <span className="text-base md:text-xl font-black tracking-wider text-gray-950 uppercase whitespace-nowrap leading-none">
                {displayNama}
              </span>
              
              {/* Hanya muncul di halaman cabang */}
              {isCabangPage && (
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase mt-1">
                  {namaCabang}
                </span>
              )}
            </div>
          </Link>

          {/* Tombol kembali ke pusat (hanya muncul di halaman cabang) */}
          {isCabangPage && (
            <Link
              href="/"
              className="inline-flex items-center gap-1 rounded-lg border border-amber-600/20 bg-amber-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-700 transition-all hover:bg-gray-950 hover:text-white hover:border-gray-950 select-none touch-manipulation shadow-xs md:hidden"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Pusat</span>
            </Link>
          )}
        </div>

        {/* TRACK NAVIGASI MENU */}
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-2 md:gap-x-5 gap-y-2 text-xs md:text-sm font-bold tracking-wide border-t border-gray-100 pt-2.5 md:border-none md:pt-0">
          {menuItems?.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`transition-colors duration-300 px-2.5 py-1.5 md:px-0 md:py-1 ${
                  isActive ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-600 hover:text-gray-950"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-0.5 text-gray-600 hover:text-gray-950 focus:outline-none px-3 py-1.5 md:px-0 md:py-1 transition-colors duration-300 bg-gray-50 md:bg-transparent rounded-md md:rounded-none select-none touch-manipulation"
            >
              <span>Cabang</span>
              <svg className={`h-3.5 w-3.5 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10004 bg-transparent cursor-default" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 mt-2 w-44 rounded-lg border border-gray-100 bg-white p-1.5 shadow-xl z-10005">
                  {cabangItems.length > 0 ? (
                    cabangItems.map((cabang) => (
                      <Link
                        key={cabang.href}
                        href={cabang.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block rounded-md px-3 py-2 text-[11px] font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-600"
                      >
                        LBH SIKAP {cabang.name}
                      </Link>
                    ))
                  ) : (
                    <span className="block px-3 py-2 text-[11px] text-gray-400 italic">Belum ada cabang</span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}