"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const closeMenu = (): void => setIsOpen(false);

  return (
    // HEADER: Posisi tetap melayang (fixed). Menggunakan sintaksis modern v4 untuk opasitas dan blur.
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b
        ${isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xs border-gray-100 py-3" 
          : "bg-transparent border-transparent py-5"}`}
    >
      {/* KOREKSI: Mengganti max-w-300 menjadi max-w-7xl standar industri */}
      <div className="mx-auto w-11/12 max-w-7xl flex items-center justify-between">
        
        {/* LOGO & BRANDING */}
        <div className="flex items-center z-50">
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            {/* 💡 SOLUSI AMAN NEXT.JS IMAGE: Ukuran diikat pasti, menjamin logo tidak merusak tata letak */}
            <Image 
              src="/assets/images/logo-lbh.png" 
              alt="Logo LBH SIKAP YOGYAKARTA" 
              width={42} 
              height={42} 
              className="object-contain transition-transform duration-200 group-hover:scale-105"
              priority 
            />
            <div className="flex flex-col">
              <span className={`text-base font-black tracking-wider transition-colors duration-300
                ${isScrolled || isOpen ? "text-gray-950" : "text-white"}`}>
                LBH SIKAP
              </span>
              <span className={`text-[10px] font-bold tracking-widest -mt-1 transition-colors duration-300
                ${isScrolled || isOpen ? "text-gray-500" : "text-gray-300"}`}>
                YOGYAKARTA
              </span>
            </div>
          </Link>
        </div>
        
        {/* HAMBURGER BUTTON (MOBILE ONLY) */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-transparent bg-transparent md:hidden focus:outline-hidden"
          aria-label="Buka Menu Navigasi"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {/* Garis-garis Hamburger dengan Efek Animasi Menjadi Silang (X) */}
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 
            ${isScrolled || isOpen ? "bg-gray-950" : "bg-white"}
            ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 
            ${isScrolled || isOpen ? "bg-gray-950" : "bg-white"}
            ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 
            ${isScrolled || isOpen ? "bg-gray-950" : "bg-white"}
            ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* CONTAINER MENU UTAMA */}
        {/* Di Mobile: Berubah menjadi menu overlay tirai penuh (Full Overlay Dropdown) */}
        <nav className={`fixed inset-0 flex h-screen w-full flex-col bg-white px-8 pt-28 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:p-0 md:transition-none
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
          
          <ul className="flex flex-col gap-8 text-lg font-bold tracking-wide md:flex-row md:items-center md:gap-6 md:text-xs lg:gap-8">
            
            {[
              { path: "/", label: "BERANDA" },
              { path: "/tentang", label: "TENTANG KAMI" },
              { path: "/publikasi", label: "PUBLIKASI" },
              { path: "/layanan", label: "LAYANAN HUKUM" },
              { path: "/kontak", label: "KONTAK" },
            ].map((menu) => {
              const isActive = pathname === menu.path;
              return (
                <li key={menu.path}>
                  <Link 
                    href={menu.path} 
                    onClick={closeMenu}
                    className={`transition-colors duration-200 border-b-2 pb-1 block md:inline
                      ${isOpen 
                        ? isActive ? "text-gray-950 border-gray-950" : "text-gray-500 border-transparent hover:text-gray-950"
                        : isScrolled
                          ? isActive ? "text-gray-950 border-gray-950" : "text-gray-600 border-transparent hover:text-gray-950"
                          : isActive ? "text-white border-white" : "text-gray-300 border-transparent hover:text-white"
                      }`}
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}

            {/* TOMBOL UTILITAS: AJUKAN ADUAN */}
            <li className="mt-4 border-t border-gray-100 pt-6 md:mt-0 md:border-none md:pt-0">
              <Link 
                href="/layanan" 
                onClick={closeMenu}
                className={`inline-block rounded-lg px-5 py-2.5 text-center text-sm font-black tracking-wider uppercase transition-all duration-300 w-full md:w-auto md:text-xs
                  ${isScrolled || isOpen
                    ? "bg-gray-950 text-white hover:bg-gray-800 shadow-xs"
                    : "bg-white text-gray-950 hover:bg-gray-100 shadow-sm"
                  }`}
              >
                AJUKAN ADUAN
              </Link>
            </li>

          </ul>
        </nav>
        
      </div>
    </header>
  );
}
