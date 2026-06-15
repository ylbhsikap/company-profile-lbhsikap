import React from "react";
import Image from "next/image";
// 1. Satukan seluruh import dari data pusat agar rapi dan tidak redundan
import { tentangKami, asetGambar } from "@/data/data"; 

// 2. Definisikan tipe data untuk objek tentangKami
interface TentangKamiType {
  sejarahSingkat: string;
  visi: string;
  misi: string[]; // Misi berupa array yang berisi baris-baris teks (string)
}

// 3. Definisikan tipe data untuk skema aset gambar terpusat
interface AsetGambarType {
  bannerUtama: string;
  kantorSekretariat: string;
  logoResmi: string;
}

export default function Tentang() {
  // 4. Tegaskan tipe data menggunakan Type Assertion agar aman dibaca TypeScript
  const dataTentang = tentangKami as TentangKamiType;
  const gambar = asetGambar as AsetGambarType;

  return (
    <main>
      <section className="hero-sub">
        <Image 
          src={gambar.kantorSekretariat} // ✨ Sukses dialihkan ke skema gambar terpusat
          alt="Tentang LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" // 🚀 Mengoptimalkan resolusi unduhan gambar sesuai ukuran layar device
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