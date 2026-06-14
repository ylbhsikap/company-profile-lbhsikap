"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Menangani Efek Scroll Mengubah Warna Header (Transparan ke Putih)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan sekali saat inisialisasi

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={isScrolled ? "header-scrolled" : ""}>
      <div className="container navbar">
        <div className="logo">
          <Link href="/" className="logo-link" onClick={closeMenu}>
            {/* Memastikan Logo Membaca File dari folder public/logo.png */}
            <Image 
              src="/logo.png" 
              alt="Logo LBH SIKAP YOGYAKARTA" 
              width={46} 
              height={46} 
              className="brand-logo"
              priority 
            />
            <div className="logo-text">
              <span className="logo-title">LBH SIKAP</span>
              <span className="logo-subtitle">YOGYAKARTA</span>
            </div>
          </Link>
        </div>
        
        {/* Tombol Hamburger Mobile */}
        <button 
          className={`menu-toggle ${isOpen ? "toggle-active" : ""}`} 
          aria-label="Buka Menu Navigasi"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Container Navigasi Dropdown */}
        <nav className={`nav-container ${isOpen ? "nav-open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>
                BERANDA
              </Link>
            </li>
            <li>
              <Link href="/tentang" className={pathname === "/tentang" ? "active" : ""} onClick={closeMenu}>
                TENTANG KAMI
              </Link>
            </li>
            <li>
              <Link href="/publikasi" className={pathname === "/publikasi" ? "active" : ""} onClick={closeMenu}>
                PUBLIKASI
              </Link>
            </li>
            <li>
              <Link href="/layanan" className={pathname === "/layanan" ? "active" : ""} onClick={closeMenu}>
                LAYANAN HUKUM
              </Link>
            </li>
            <li>
              <Link href="/kontak" className={pathname === "/kontak" ? "active" : ""} onClick={closeMenu}>
                KONTAK
              </Link>
            </li>
            <li className="nav-utility">
              <span className="lang-switch">
                <Link href="/layanan" onClick={closeMenu}>AJUKAN ADUAN</Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}