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
  namaLembaga: string;
  cabangItems: MenuItem[]; 
}

export function Navbar({ menuItems, namaLembaga, cabangItems }: NavbarProps) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 1. Deteksi otomatis: Apakah halaman saat ini adalah halaman cabang?
  const cabangSlugs = Object.keys(dataSeluruhCabang);
  const isCabangPage = cabangSlugs.some(slug => pathname.includes(`/${slug}`));
  
  // 2. Logika Penamaan: YLBH SIKAP untuk Pusat, LBH SIKAP untuk Cabang
  const displayNama = isCabangPage ? "LBH SIKAP" : "YLBH SIKAP";
  const namaCabang = isCabangPage ? namaLembaga.replace("LBH SIKAP ", "") : "";

  return (
    <nav className="sticky top-0 z-9999 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        
        {/* LOGO & IDENTITAS */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 flex items-center justify-center shrink-0">
              <img
                src={asetGambar.logoResmi} 
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-base md:text-xl font-black tracking-wider text-gray-950 uppercase whitespace-nowrap leading-none">
                {displayNama}
              </span>
              {isCabangPage && (
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase mt-1">
                  {namaCabang}
                </span>
              )}
            </div>
          </Link>

          {/* TOMBOL KEMBALI KE PUSAT (Muncul hanya di halaman cabang) */}
          {isCabangPage && (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-600/20 bg-amber-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-amber-700 transition-all hover:bg-gray-950 hover:text-white hover:border-gray-950 shadow-xs"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Pusat</span>
            </Link>
          )}
        </div>

        {/* MENU NAVIGASI */}
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-4 md:gap-x-6 text-xs md:text-sm font-bold tracking-wide border-t border-gray-100 pt-3 md:border-none md:pt-0">
          {menuItems?.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`transition-colors duration-300 ${
                  isActive ? "text-amber-600" : "text-gray-600 hover:text-gray-950"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}

          {/* DROPDOWN CABANG */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-950 transition-colors"
            >
              <span>Cabang</span>
              <svg className={`h-3.5 w-3.5 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10004 bg-transparent" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-100 bg-white p-1.5 shadow-xl z-10005">
                  {cabangItems.map((cabang) => (
                    <Link
                      key={cabang.href}
                      href={cabang.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-amber-600 rounded-md"
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