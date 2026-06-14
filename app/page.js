// page.js (Tanpa "use client" - SEO Friendly!)
export default function Home() {
  return (
    <>
      {/* BANNER HERO UTAMA */}
      <section className="hero">
        <div className="container hero-content">
          <h2>LEMBAGA BANTUAN HUKUM SIKAP YOGYAKARTA</h2>
          <p>Membela hak konstitusional masyarakat miskin, buta hukum, dan korban kesewenang-wenangan secara pro bono.</p>
          <a href="/layanan" className="btn-cta">Ajukan Bantuan Hukum</a>
        </div>
      </section>

      {/* SEKSI SIARAN PERS BERANDA */}
      <main className="container section-padding">
        <h2 className="section-title">Siaran Pers & Advokasi Kasus Terbaru</h2>
        <div className="grid-3">
          <article className="card animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="card-date">12 Juni 2026</span>
            <h3>Desakan Hentikan Intimidasi Warga</h3>
            <p>Silakan isi dengan ringkasan rilis pers terbaru mengenai advokasi tanah, perburuhan, atau hak sipil yang sedang ditangani LBH SIKAP...</p>
          </article>
          
          <article className="card animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="card-date">08 Juni 2026</span>
            <h3>Catatan Kebijakan Publik Daerah</h3>
            <p>Isi analisa hukum LBH SIKAP terhadap regulasi atau tindakan aparat pemerintah setempat yang berdampak pada masyarakat...</p>
          </article>
          
          <article className="card animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="card-date">24 Mei 2026</span>
            <h3>Keberhasilan Advokasi Buruh</h3>
            <p>Tuliskan rekam jejak penyelesaian kasus atau pendampingan kelompok buruh marjinal oleh LBH SIKAP di sini...</p>
          </article>
        </div>
      </main>
    </>
  );
}