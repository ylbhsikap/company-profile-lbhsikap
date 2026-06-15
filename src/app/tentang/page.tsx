import React from "react";
import Image from "next/image";
import { tentangKami } from "@/data/data"; // Import data dari pusat

// 1. Definisikan tipe data untuk objek tentangKami
interface TentangKamiType {
  sejarahSingkat: string;
  visi: string;
  misi: string[]; // Misi berupa array yang berisi baris-baris teks (string)
}

export default function Tentang() {
  // 2. Tegaskan tipe data menggunakan Type Assertion agar aman diakses oleh komponen
  const dataTentang = tentangKami as TentangKamiType;

  return (
    <main>
      <section className="hero-sub">
        <Image 
          src="/ruangan.jpg" 
          alt="Tentang LBH SIKAP" 
          fill 
          priority 
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Tentang LBH SIKAP</h1>
          <p>Mengenal Visi, Misi, dan Spirit Gerakan Advokasi Kami</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: "800px" }}>
          
          {/* SEKSI SEJARAH */}
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>Sejarah & Gerakan</h2>
          <p style={{ color: "#444", lineHeight: "1.8", marginBottom: "40px", textAlign: "justify" }}>
            {dataTentang.sejarahSingkat}
          </p>

          {/* SEKSI VISI & MISI */}
          <div style={{ background: "#f9f9f9", padding: "40px", borderRadius: "8px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>Visi Lembaga</h2>
            <p style={{ color: "#111111", fontStyle: "italic", marginBottom: "30px" }}>"{dataTentang.visi}"</p>
            
            <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>Misi Kami</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {dataTentang.misi.map((item, index) => (
                <li key={index} style={{ marginBottom: "15px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}