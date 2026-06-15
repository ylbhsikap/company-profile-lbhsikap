import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/app/components/NewsCard"; // 💡 Sesuaikan dengan folder NewsCard Anda
// 1. Satukan seluruh import dari data pusat ke dalam satu baris agar rapi
import { BerandaData, asetGambar, AsetGambarType} from "@/data/data"; 

// Definisi tipe data untuk Berita
interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
  gambarKunci?: keyof AsetGambarType;
}
function Home() {
  // 2. Hubungkan variabel gambar dengan tipe datanya menggunakan Type Assertion
  const gambar = asetGambar as AsetGambarType;

  // Mengambil maksimal 3 berita terbaru untuk tampil di Beranda  
  const latestNews: Berita[] = BerandaData ? (BerandaData as Berita[]).slice(0, 3) : [];

  return (
    <main>
      {/* BANNER UTAMA */}
      <section className="hero">
        {/* Menggunakan Image Next.js dengan benar */}
        <Image 
          src={gambar.bannerUtama} // ✨ Sukses dialihkan ke properti bannerUtama di skema gambar terpusat
          alt="Interior LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" // 🚀 Mengoptimalkan resolusi unduhan gambar sesuai ukuran layar device
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>LEMBAGA BANTUAN HUKUM SIKAP YOGYAKARTA</h1>
          <p>Membela hak konstitusional masyarakat miskin, buta hukum, dan korban kesewenang-wenangan secara pro bono.</p>
          <div style={{ marginTop: "20px" }}>
            <Link href="/layanan" className="btn-cta">
              Ajukan Bantuan Hukum
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION BERITA TERBARU */}
      {/* SECTION BERITA TERBARU (OTOMATISASI ZIGZAG & SINGLE DATABASE) */}
      <section className="section-padding" style={{ width: "100%", overflow: "hidden" }}>
  {/* Mengubah container agar bisa mencakup layar yang lebih luas (Large Desktop) */}
  <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
    
    <h2 className="section-title" style={{ marginBottom: "60px", textAlign: "center", fontSize: "42px", fontWeight: "800" }}>
      Berita & Advokasi Terbaru
    </h2>

    {/* Jarak antar baris berita diperbesar sedikit (gap: 50px) */}
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      {latestNews.map((item, index) => {
        const isRightText = index % 2 === 1;
        const gambarTerpilih = gambar[item.gambarKunci as keyof typeof gambar];

        return (
          <div 
            key={item.id} 
            style={{ 
              position: "relative", 
              width: "100%", 
              minHeight: "750px", // 🌟 Diperbesar dari 620px agar terkesan megah/sinematik
              display: "flex", 
              justifyContent: isRightText ? "flex-end" : "flex-start", 
              alignItems: "center", 
              borderRadius: "12px", // Sedikit diperhalus sudutnya karena skalanya membesar
              overflow: "hidden", 
              border: "1px solid #e5e5e5",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
          >
            {/* 1. LAYER GAMBAR MANDIRI */}
            <Image 
              src={gambarTerpilih} 
              alt={item.title}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="(max-width: 1440px) 100vw, 1440px" // Diperbarui untuk layar besar
              style={{ objectFit: "cover", zIndex: 0 }}
            />

            {/* 2. LAYER OVERLAY GELAP (Gradasi disesuaikan agar menutupi area teks yang lebih lebar) */}
            <div 
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                background: isRightText 
                  ? "linear-gradient(to left, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.2) 100%)" 
                  : "linear-gradient(to right, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.2) 100%)", 
                zIndex: 1 
              }}
            ></div>
            
            {/* 3. SEKSI TEKS PENJELASAN (Skala teks dan padding diperbesar) */}
            <div 
              style={{ 
                position: "relative", 
                zIndex: 2, 
                width: "100%", 
                maxWidth: "680px", // 🌟 Diperlebar dari 550px agar teks tidak terlalu menumpuk ke bawah
                padding: "80px", // 🌟 Padding diperbesar untuk kenyamanan membaca di layar besar
                color: "#ffffff" 
              }}
            >
              <span style={{ background: item.color, color: "#ffffff", fontSize: "13px", padding: "6px 14px", textTransform: "uppercase", fontWeight: "700", borderRadius: "4px", letterSpacing: "1px" }}>
                {item.category}
              </span>
              
              <h3 style={{ fontSize: "36px", fontWeight: "800", marginTop: "25px", marginBottom: "15px", color: "#ffffff", lineHeight: "1.25" }}>
                {item.title}
              </h3>
              
              <p style={{ color: "#bbbbbb", fontSize: "14px", marginBottom: "20px" }}>{item.date}</p>
              
              <p style={{ color: "#e5e5e5", lineHeight: "1.8", textAlign: "justify", marginBottom: "35px", fontSize: "16px" }}>
                {item.excerpt}
              </p>
              
              <Link href={`/berita/${item.id}`} style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "10px", borderBottom: "2px solid #ffffff", paddingBottom: "5px", textDecoration: "none" }}>
                Baca Selengkapnya ➔
              </Link>
            </div>
          </div>
        );
      })}
    </div>

               {/* TOMBOL LIHAT SEMUA */}
               <div style={{ textAlign: "center", marginTop: "80px" }}>
               <Link href="/publikasi" className="btn-cta-outline" style={{ padding: "14px 36px", fontSize: "16px" }}>
                   Lihat Semua Publikasi
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}

export default Home;