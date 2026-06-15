import React from "react";
import Image from "next/image";
import PublikasiCard from "@/app/components/PublikasiCard"; // Komponen kartu artikel
// 1. Gabungkan seluruh import dari data pusat ke dalam satu baris agar rapi
import { publikasiData, publikasiDokumen, asetGambar, AsetGambarType } from "@/data/data"; 

// 2. Interface untuk Data Artikel/Siaran Pers
interface PublikasiItem {
  id: string;
  title: string;
  date: string;
  category: string;
  tagColor: string;
  excerpt: string;
}

// 3. Interface untuk Data Dokumen/Modul Hukum resmi
interface DokumenItem {
  id: string;
  tagColor: string;
  tag: string;
  judul: string;
  deskripsi: string;
  link: string;
  tombolLabel: string;
}

export default function Publikasi() {
  // 5. Hubungkan variabel dengan tipe datanya masing-masing menggunakan Type Assertion
  const gambar = asetGambar as AsetGambarType;
  const daftarArtikel = publikasiData as unknown as PublikasiItem[];
  const daftarDokumen = publikasiDokumen as unknown as DokumenItem[];

  return (
    <main>
      {/* BANNER UTAMA */}
      <section id="banner-publikasi" className="hero-sub"> 
        <Image 
          src={gambar.publikasi} // ✨ Sukses dialihkan ke skema gambar terpusat
          alt="Publikasi LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" // 🚀 Mengoptimalkan resolusi unduhan gambar sesuai ukuran layar device
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Publikasi & Riset Hukum</h1>
          <p>Suara Gerakan, Hasil Analisis Kebijakan, dan Pernyataan Sikap Resmi Lembaga</p>
        </div>
      </section>

      {/* 1. BAGIAN ARTIKEL (Siaran Pers, Opini, Riset) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111111", paddingBottom: "15px", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", textTransform: "uppercase" }}>Rilis Terbaru</h2>
          </div>
          
          <div className="grid-3">
            {daftarArtikel.map((item) => (
              <PublikasiCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. BAGIAN DOKUMEN (Laporan Tahunan & Modul) */}
      <section className="section-padding" style={{ background: "#f9f9f9" }}>
        <div className="container">
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "30px" }}>Dokumen & Modul Resmi</h2>
          <div className="grid-3" style={{ gap: "40px" }}>
            {daftarDokumen.map((doc) => (
              <div key={doc.id} className="card" style={{ background: "#ffffff", padding: "20px", border: "1px solid #e5e5e5" }}>
                <span style={{ background: doc.tagColor, color: "#fff", fontSize: "10px", padding: "3px 8px" }}>{doc.tag}</span>
                <h3 style={{ marginTop: "15px" }}>{doc.judul}</h3>
                <p style={{ fontSize: "14px", color: "#444" }}>{doc.deskripsi}</p>
                <a href={doc.link} className="btn-cta" style={{ marginTop: "20px", display: "block", textAlign: "center" }}>{doc.tombolLabel}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}