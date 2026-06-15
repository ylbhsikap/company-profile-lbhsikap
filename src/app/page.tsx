import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/app/components/NewsCard"; // 💡 Sesuaikan dengan folder NewsCard Anda
import {BerandaData} from "@/data/data"; // 💡 Pastikan di data.ts namanya memang BerandaData, bukan newsData

// Definisi tipe data untuk Berita
interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
}

function Home() {
  // Mengambil maksimal 3 berita terbaru untuk tampil di Beranda  
  const latestNews: Berita[] = BerandaData ? BerandaData.slice(0, 3) : [];

  return (
    <main>
      {/* BANNER UTAMA */}
      <section className="hero">
        {/* Menggunakan Image Next.js dengan benar */}
        <Image 
          src="/ruangan10.jpg" 
          alt="Interior LBH SIKAP" 
          fill 
          priority 
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