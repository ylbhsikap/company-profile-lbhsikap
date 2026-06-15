"use client";

import React from "react";
import Image from "next/image";
// 1. Satukan seluruh import dari data pusat agar tidak duplikat
import { kriteriaLayanan, asetGambar, AsetGambarType} from "@/data/data"; 

// 2. Definisikan tipe data kriteria penerimaan kasus
interface KriteriaItem {
  judul: string;
  deskripsi: string;
  borderLeft: string;
}

export default function Layanan() {
  // 4. Hubungkan variabel gambar dengan tipe datanya agar bisa dibaca komponen Image
  const gambar = asetGambar as AsetGambarType;
  const daftarKriteria = kriteriaLayanan as KriteriaItem[];

  // 5. Handler submit dengan tipe data TypeScript yang aman
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Sistem Keamanan LBH SIKAP: Berkas pengaduan Anda telah berhasil dienkripsi...");
    
    const target = e.target as HTMLFormElement;
    target.reset();
  };

  return (
    <main>
      <section id="banner-layanan" className="hero-sub"> 
        <Image 
          src={gambar.layanan} // ✨ Sukses terhubung ke skema gambar terpusat
          alt="Layanan LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" // 🚀 Mengoptimalkan resolusi unduhan gambar sesuai ukuran layar device
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Ajukan Bantuan Hukum Gratis</h1>
          <p>Pos Komando Bantuan Hukum (Posbakum) dan Pengaduan Kasus Struktural</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px", alignItems: "start" }}>
            
            {/* SEKSI KIRI: OTOMATISASI KRITERIA */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "20px" }}>
                Kriteria Penerimaan Kasus
              </h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {daftarKriteria.map((item, index) => (
                  <li key={index} style={{ background: "#f9f9f9", padding: "15px", borderRadius: "4px", marginBottom: "12px", borderLeft: `3px solid ${item.borderLeft}` }}>
                    <strong>• {item.judul}:</strong> {item.deskripsi}
                  </li>
                ))}
              </ul>
            </div>

            {/* SEKSI KANAN: FORMULIR ADUAN */}
            <div style={{ background: "#ffffff", padding: "35px", borderRadius: "6px", border: "1px solid #e5e5e5", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "25px" }}>Formulir Kontak Aduan</h2>
              
              <form onSubmit={handleFormSubmit}>
                
                {/* INPUT NAMA */}
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="nama" style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Nama Lengkap Sesuai KTP</label>
                  <input 
                    type="text" 
                    id="nama" 
                    name="nama" 
                    required 
                    placeholder="Contoh: Ahmad Fauzi"
                    style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", outline: "none" }}
                  />
                </div>

                {/* INPUT WHATSAPP */}
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="whatsapp" style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Nomor WhatsApp / HP</label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp" 
                    required 
                    placeholder="Contoh: 081234567890"
                    style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", outline: "none" }}
                  />
                </div>

                {/* PILIHAN JENIS KASUS */}
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="jenisKasus" style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Jenis Masalah Hukum</label>
                  <select 
                    id="jenisKasus" 
                    name="jenisKasus" 
                    required
                    style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", background: "#fff", outline: "none" }}
                  >
                    <option value="">-- Pilih Kategori Kasus --</option>
                    <option value="Perburuhan">Ketenagakerjaan / Perburuhan</option>
                    <option value="Pertanahan">Sengketa Tanah / Rumah</option>
                    <option value="Pidana">Kriminal / Pidana (Korban Kriminalisasi)</option>
                    <option value="Keluarga">Hukum Keluarga / Waris</option>
                    <option value="Lainnya">Lain-lain / Hak Sipil</option>
                  </select>
                </div>

                {/* KRONOLOGI KASUS */}
                <div style={{ marginBottom: "25px" }}>
                  <label htmlFor="kronologi" style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Ringkasan Kronologi Kasus</label>
                  <textarea 
                    id="kronologi" 
                    name="kronologi" 
                    rows={5} 
                    required 
                    placeholder="Ceritakan singkat kronologi masalah hukum yang sedang Anda hadapi..."
                    style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px", fontFamily: "inherit", resize: "vertical", outline: "none" }}
                  ></textarea>
                </div>

                {/* TOMBOL SUBMIT */}
                <button type="submit" className="btn-cta" style={{ width: "100%", background: "#111111", color: "#ffffff", padding: "14px", border: "none", cursor: "pointer", fontWeight: "600", borderRadius: "4px" }}>
                  Kirim Berkas Aduan Resmi
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}