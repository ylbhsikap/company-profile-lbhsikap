"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asetGambar, dataSeluruhCabang } from "@/data/data"; 

type NavbarProps = {
  menuItems?: { href: string; name: string }[];
  namaLembaga: string;
  cabangItems: { href: string; name: string }[];
};

export function Navbar({ menuItems, namaLembaga, cabangItems }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk Hamburger

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect Scrollspy yang disempurnakan untuk mendeteksi ID seksi di halaman dinamis
  useEffect(() => {
    const sectionIds = menuItems
      ?.map((item) => {
        const hashIndex = item.href.indexOf("#");
        return hashIndex !== -1 ? item.href.substring(hashIndex + 1) : "";
      })
      .filter((id) => id !== "");

    if (!sectionIds || sectionIds.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [menuItems, pathname]);

  const cabangSlugs = Object.keys(dataSeluruhCabang);
  const isCabangPage = cabangSlugs.some(slug => pathname.includes(`/${slug}`));
  const displayNama = isCabangPage ? "LBH SIKAP" : "YLBH SIKAP";
  const namaCabang = isCabangPage ? namaLembaga.replace("LBH SIKAP ", "") : "";

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-300 ease-in-out ${
      isScrolled ? "bg-white border-b border-gray-200 h-16 shadow-sm" : "bg-transparent h-20"
    } flex items-center`}>
      
      <div className="mx-auto max-w-7xl px-4 w-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src={asetGambar.logoResmi} alt="Logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className={`text-lg font-black uppercase tracking-wide transition-colors ${isScrolled ? "text-gray-950" : "text-white"}`}>
               {displayNama}
            </span>
            {/* Menampilkan nama cabang di bawah tulisan LBH SIKAP jika sedang di halaman cabang */}
            {isCabangPage && namaCabang && (
              <span className={`text-[10px] font-bold uppercase tracking-widest -mt-1 transition-colors ${isScrolled ? "text-amber-600" : "text-amber-400"}`}>
                {namaCabang}
              </span>
            )}
          </div>
        </Link>

        {/* TOMBOL HAMBURGER (Hanya muncul di HP) */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? "text-gray-950" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>

        {/* MENU (Desktop) */}
        <div className={`hidden md:flex items-center gap-8 font-bold transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
          {menuItems?.map((menu) => {
            const hashIndex = menu.href.indexOf("#");
            const menuHash = hashIndex !== -1 ? menu.href.substring(hashIndex) : "";
            const isActive = activeSection === menuHash && activeSection !== "";
            return (
              <Link 
                key={menu.href} 
                href={menu.href} 
                className={`uppercase tracking-wider text-xs transition-colors duration-200 ${
                  isActive 
                    ? "text-amber-500 font-black border-b-2 border-amber-500 pb-1" 
                    : isScrolled ? "text-gray-800 hover:text-amber-500" : "text-white hover:text-amber-400"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
          
          {/* Kontainer Tombol & Dropdown Cabang */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="uppercase tracking-wider text-xs hover:text-amber-500 flex items-center gap-1 transition-colors"
            >
              Cabang <span className="text-[9px]">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            
            {/* Box Dropdown Menu Desktop */}
            {isDropdownOpen && (
              <>
                {/* Backdrop transparan agar dropdown otomatis menutup ketika user klik di luar menu */}
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                
                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200/80 shadow-xl rounded-2xl py-3 text-gray-900 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest px-4 mb-2">Pilih Wilayah Cabang</p>
                  <div className="flex flex-col">
                    {cabangItems.map((cabang) => (
                      <Link 
                        key={cabang.href} 
                        href={cabang.href} 
                        onClick={() => setIsDropdownOpen(false)} 
                        className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        {cabang.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Elegan - Slide dari Kanan dengan Rounded & Margin) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-200">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Samping (Slide-over dengan Rounded & Margin) */}
          <div className="absolute top-4 right-4 bottom-4 w-70 bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 flex flex-col gap-8 animate-in slide-in-from-right duration-300">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="self-end text-gray-500 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>
            
            {/* Link Menu Utama */}
            <div className="flex flex-col gap-6 mt-4">
              {/* Tombol Back to Pusat (Hanya muncul jika di halaman cabang) */}
              {isCabangPage && (
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-amber-600 font-black uppercase tracking-widest text-sm border-b border-gray-900/10 pb-3 flex items-center gap-1 hover:text-amber-700 transition-colors"
                >
                  ← Kembali ke Pusat
                </Link>
              )}

              {menuItems?.map((menu) => {
                const hashIndex = menu.href.indexOf("#");
                const menuHash = hashIndex !== -1 ? menu.href.substring(hashIndex) : "";
                const isActive = activeSection === menuHash && activeSection !== "";
                return (
                  <Link 
                    key={menu.href} 
                    href={menu.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`font-bold uppercase tracking-widest text-sm transition-colors duration-200 ${
                      isActive ? "text-amber-600 font-black pl-2 border-l-2 border-amber-600" : "text-gray-900 hover:text-amber-600"
                    }`}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Bagian Cabang (Dibawah) */}
            <div className="mt-auto border-t border-gray-900/10 pt-8">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-4">Pilih Cabang</p>
              <div className="flex flex-col gap-3">
                {cabangItems.map((cabang) => (
                  <Link 
                    key={cabang.href} 
                    href={cabang.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-xs font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    {cabang.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}