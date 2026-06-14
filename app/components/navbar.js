"use client"; // Mengaktifkan fitur interaktif React (Click, State, dll)

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // State untuk menyimpan status menu (terbuka atau tertutup)
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membalikkan status menu saat tombol diklik
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menutup menu otomatis saat salah satu link diklik
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container navbar">
        <div className="logo">
          <Link href="/" className="logo-link" onClick={closeMenu}>
            <Image 
              src="/logo.png" 
              alt="Logo LBH SIKAP YOGYAKARTA" 
              width={45} 
              height={45} 
              className="brand-logo" 
              priority 
            />
            <div className="logo-text">
              <span className="logo-title">LBH SIKAP</span>
              <span className="logo-subtitle">YOGYAKARTA</span>
            </div>
          </Link>
        </div>
        
        {/* Tombol Hamburger dengan status class dinamis 'active' */}
        <button 
          className={`menu-toggle ${isOpen ? "active" : ""}`} 
          aria-label="Buka Menu Navigasi"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Container Navigasi dengan status class dinamis 'active' */}
        <nav className={`nav-container ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={closeMenu}>BERANDA</Link></li>
            <li><Link href="/tentang" onClick={closeMenu}>TENTANG KAMI</Link></li>
            <li><Link href="/publikasi" onClick={closeMenu}>PUBLIKASI</Link></li>
            <li><Link href="/layanan" onClick={closeMenu}>LAYANAN HUKUM</Link></li>
            <li><Link href="/kontak" onClick={closeMenu}>KONTAK</Link></li>
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