import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/app/components/NewsCard"; // 💡 Sesuaikan dengan folder NewsCard Anda
// 1. Satukan seluruh import dari data pusat ke dalam satu baris agar rapi
import { BerandaData, asetGambar } from "@/data/data"; 

// Definisi tipe data untuk Berita
interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
}

// Interface untuk skema aset gambar terpusat
interface AsetGambarType {
  bannerUtama: string;
  kantorSekretariat: string;
  logoResmi: string;
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
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Berita & Advokasi Terbaru</h2>

          <div className="grid-3">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/publikasi" className="btn-cta-outline">
              Lihat Semua Publikasi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;