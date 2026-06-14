// app/page.js (Tanpa "use client" - Tetap 100% SEO Friendly!)
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* BANNER HERO UTAMA (Optimasi Rendering Gambar & Kecepatan LCP) */}
     <section className="hero">
        {/* Next.js Image Component untuk optimasi performa */}
        <Image 
          src="/ruangan10.jpg" 
          alt="Interior Ruang Kerja LBH SIKAP Yogyakarta"
          fill 
          priority 
          style={{ objectFit: "cover" }}
        />
        {/* Overlay yang dikendalikan oleh CSS .hero-overlay */}
        <div className="hero-overlay"></div>

        {/* Konten teks yang dibungkus oleh .hero-content */}
        <div className="hero-content container">
          <h2>LEMBAGA BANTUAN HUKUM SIKAP YOGYAKARTA</h2>
          <p>Membela hak konstitusional masyarakat miskin, buta hukum, dan korban kesewenang-wenangan secara pro bono.</p>
          
          <div style={{ marginTop: "20px" }}>
            <Link href="/layanan" className="btn-cta btn-cta-outline">
              Ajukan Bantuan Hukum
            </Link>
          </div>
        </div>
      </section>

      {/* SEKSI SIARAN PERS BERANDA (Optimasi Animasi Efek Memudar Saat Digulir) */}
      <main className="container section-padding">
        <h2 className="section-title">Siaran Pers & Advokasi Kasus Terbaru</h2>
        
        {/* Membungkus barisan grid dengan ScrollReveal agar muncul anggun saat masuk area pandang */}
        <ScrollReveal>
          <div className="grid-3">
            
            <article className="card">
              <span className="card-date">12 Juni 2026</span>
              <h3>Desakan Hentikan Intimidasi Warga</h3>
              <p>Silakan isi dengan ringkasan rilis pers terbaru mengenai advokasi tanah, perburuhan, atau hak sipil yang sedang ditangani LBH SIKAP...</p>
            </article>
            
            <article className="card">
              <span className="card-date">08 Juni 2026</span>
              <h3>Catatan Kebijakan Publik Daerah</h3>
              <p>Isi analisa hukum LBH SIKAP terhadap regulasi atau tindakan aparat pemerintah setempat yang berdampak pada masyarakat...</p>
            </article>
            
            <article className="card">
              <span className="card-date">24 Mei 2026</span>
              <h3>Keberhasilan Advokasi Buruh</h3>
              <p>Tuliskan rekam jejak penyelesaian kasus atau pendampingan kelompok buruh marjinal oleh LBH SIKAP di sini...</p>
            </article>

          </div>
        </ScrollReveal>
      </main>
    </>
  );
}