import React from "react";
import Image from "next/image";
import { kontakInfo, asetGambar, AsetGambarType } from "@/data/data"; 

// 2. Definisikan tipe data untuk objek kontakInfo dari data pusat
interface KontakInfoType {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
  mapsEmbed: string;
}
export default function Kontak() {
  // 4. Tegaskan tipe data menggunakan Type Assertion agar aman diakses oleh TypeScript
  const info = kontakInfo as KontakInfoType;
  const gambar = asetGambar as AsetGambarType;

  return (
    <main>
      <section className="hero-sub">
        <Image 
          src={gambar.kontak} // ✨ Mengambil dari skema gambar terpusat
          alt="Sekretariat LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" // 🚀 Mengoptimalkan resolusi unduhan gambar sesuai ukuran layar device
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Hubungi Sekretariat Kami</h1>
          <p>Akses Komunikasi Resmi, Alamat Kantor, dan Peta Navigasi Lembaga</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px", alignItems: "start" }}>
            
            {/* SEKSI KIRI: INFORMASI KONTAK */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "25px" }}>
                Informasi Kontak Utama
              </h2>
              
              <p style={{ color: "#444", lineHeight: "1.8", textAlign: "justify", marginBottom: "25px" }}>
                {info.alamat}
              </p>

              <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "6px", border: "1px solid #e5e5e5" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #eeeeee" }}>
                      <td style={{ padding: "10px 0", fontWeight: "700", width: "40%" }}>Jam Operasional</td>
                      <td style={{ padding: "10px 0" }}>{info.jamOperasional}</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #eeeeee" }}>
                      <td style={{ padding: "10px 0", fontWeight: "700" }}>WhatsApp Hotline</td>
                      <td style={{ padding: "10px 0", fontWeight: "600" }}>{info.whatsapp}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px 0", fontWeight: "700" }}>Email Resmi</td>
                      <td style={{ padding: "10px 0" }}>{info.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={{ marginTop: "25px" }}>
                {/* Logika regex untuk mendeteksi nomor WA secara dinamis */}
                <a 
                  href={`https://wa.me/${info.whatsapp.replace(/^0/, '62')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-cta" 
                  style={{ display: "block", textAlign: "center" }}
                >
                  Hubungi Melalui WhatsApp
                </a>
              </div>
            </div>

            {/* SEKSI KANAN: PETA */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "25px" }}>
                Peta Lokasi Resmi
              </h2>
              <div className="map-box" style={{ height: "380px", border: "1px solid #e5e5e5", borderRadius: "6px", padding: "6px" }}>
                <iframe 
                  src={info.mapsEmbed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  title="Peta Lokasi Kantor LBH SIKAP Yogyakarta" 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}