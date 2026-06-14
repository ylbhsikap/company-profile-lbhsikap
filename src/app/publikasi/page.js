import Image from "next/image";

export default function Publikasi() {
  return (
    <main>
      {/* BANNER UTAMA HALAMAN PUBLIKASI (Menggunakan kelas hero-sub agar foto background muncul) */}
      <section id="banner-publikasi" className="hero-sub"> 
        <Image 
          src="/ruangan.jpg" 
          alt="Publikasi LBH SIKAP"
          fill 
          priority 
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">  
          <h1>Publikasi & Riset Kebijakan</h1>
          <p>Bentuk Transparansi, Akuntabilitas Publik, dan Sumber Daya Hukum Terbuka</p>
        </div>
      </section>

      {/* KONTEN UTAMA DOKUMEN & MODUL */}
      <section className="section-padding">
        <div className="container">
          
          {/* Menggunakan grid-3 dengan pembagian 2 kolom yang seimbang dan responsif */}
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", alignItems: "stretch" }}>
            
            {/* KOTAK 1: LAPORAN TAHUNAN & KINERJA */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                  <span style={{ background: "#111111", color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>
                    AKUNTABILITAS
                  </span>
                </div>
                <h2>Laporan Tahunan & Kinerja (Annual Report)</h2>
                <p style={{ fontSize: "14px", color: "#444", marginTop: "15px", textAlign: "justify", lineHeight: "1.7" }}>
                  Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.
                </p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <a 
                  href="#" 
                  className="btn-cta" 
                  style={{ display: "block", textAlign: "center", background: "#111111", color: "#ffffff", border: "1px solid #111111" }}
                >
                  Unduh Laporan Tahunan (PDF)
                </a>
              </div>
            </div>

            {/* KOTAK 2: KERTAS KEBIJAKAN & MODUL PARALEGAL */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                  <span style={{ background: "#555555", color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>
                    EDUKASI PUBLIK
                  </span>
                </div>
                <h2>Kertas Kebijakan & Modul Paralegal</h2>
                <p style={{ fontSize: "14px", color: "#444", marginTop: "15px", textAlign: "justify", lineHeight: "1.7" }}>
                  Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.
                </p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <a 
                  href="#" 
                  className="btn-cta" 
                  style={{ display: "block", textAlign: "center", background: "#ffffff", color: "#111111", border: "1px solid #111111" }}
                >
                  Buka Berkas Modul
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEKSI TAMBAHAN: AJAKAN KONTRIBUSI TULISAN/RISET */}
      <section style={{ background: "#111111", color: "#ffffff", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h3 style={{ fontSize: "20px", color: "#ffffff", marginBottom: "12px", letterSpacing: "0.5px" }}>
            Keterbukaan Informasi & Data Riset
          </h3>
          <p style={{ color: "#aaaaaa", fontSize: "14px", lineHeight: "1.6" }}>
            Seluruh dokumen, kertas kebijakan, dan modul yang diterbitkan oleh LBH SIKAP Yogyakarta dilepas di bawah lisensi publik kreatif. Siapa pun dapat menggunakannya demi kepentingan pendidikan hukum kritis dan gerakan pro-keadilan rakyat marjinal.
          </p>
        </div>
      </section>
    </main>
  );
}