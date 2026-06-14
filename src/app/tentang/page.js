import Image from "next/image";

export default function Publikasi() {
  return (
    <main>
      {/* BANNER UTAMA HALAMAN PUBLIKASI */}
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
          <h1>Publikasi & Riset Hukum</h1>
          <p>Suara Gerakan, Hasil Analisis Kebijakan, dan Pernyataan Sikap Resmi Lembaga</p>
        </div>
      </section>

      {/* KONTEN UTAMA ARTIKEL / SIARAN PERS */}
      <section className="section-padding">
        <div className="container">
          
          {/* HEADER SEKSI & KATEGORI */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111111", paddingBottom: "15px", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>Rilis Terbaru</h2>
            <div style={{ display: "flex", gap: "15px", fontSize: "13px", fontWeight: "600" }}>
              <span style={{ color: "#111111", borderBottom: "2px solid #111111", cursor: "pointer", paddingBottom: "16px", marginBottom: "-17px" }}>SEMUA</span>
              <span style={{ color: "#666", cursor: "pointer" }}>SIARAN PERS</span>
              <span style={{ color: "#666", cursor: "pointer" }}>OPINI HUKUM</span>
              <span style={{ color: "#666", cursor: "pointer" }}>RISET</span>
            </div>
          </div>

          {/* GRID ARTIKEL (Menggunakan class grid-3 global yang sudah diperbaiki) */}
          <div className="grid-3">
            
            {/* KARTU PUBLIKASI 1 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span className="card-date">14 Juni 2026</span>
                  <span style={{ background: "#111111", color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>SIARAN PERS</span>
                </div>
                <h3>Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil</h3>
                <p style={{ fontSize: "14px", color: "#444", marginTop: "10px", textAlign: "justify", lineHeight: "1.6" }}>
                  LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi dan pembatasan ruang berekspresi warga negara. Kami menuntut pengusutan tuntas atas...
                </p>
              </div>
              <a href="#" style={{ display: "inline-block", marginTop: "20px", fontSize: "13px", fontWeight: "700", borderBottom: "1px solid #111111", width: "fit-content", paddingBottom: "2px" }}>
                BACA SELENGKAPNYA →
              </a>
            </div>

            {/* KARTU PUBLIKASI 2 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span className="card-date">28 Mei 2026</span>
                  <span style={{ background: "#555555", color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>OPINI HUKUM</span>
                </div>
                <h3>Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana</h3>
                <p style={{ fontSize: "14px", color: "#444", marginTop: "10px", textAlign: "justify", lineHeight: "1.6" }}>
                  Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan (paralegal) dalam mendampingi kasus-kasus struktural di wilayah pelosok dan kelompok rentan...
                </p>
              </div>
              <a href="#" style={{ display: "inline-block", marginTop: "20px", fontSize: "13px", fontWeight: "700", borderBottom: "1px solid #111111", width: "fit-content", paddingBottom: "2px" }}>
                BACA SELENGKAPNYA →
              </a>
            </div>

            {/* KARTU PUBLIKASI 3 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span className="card-date">12 April 2026</span>
                  <span style={{ background: "#999999", color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>RISET & DATA</span>
                </div>
                <h3>Catatan Krisis: Laporan Pemetaan Sengketa Tanah dan Ruang Hidup</h3>
                <p style={{ fontSize: "14px", color: "#444", marginTop: "10px", textAlign: "justify", lineHeight: "1.6" }}>
                  Hasil riset kolaboratif mengenai potret buram sengketa agraria dan tata ruang di wilayah pinggiran kota sepanjang paruh pertama tahun operasional gerakan...
                </p>
              </div>
              <a href="#" style={{ display: "inline-block", marginTop: "20px", fontSize: "13px", fontWeight: "700", borderBottom: "1px solid #111111", width: "fit-content", paddingBottom: "2px" }}>
                BACA SELENGKAPNYA →
              </a>
            </div>

          </div>

          {/* NAVIGASI HALAMAN (PAGINATION) */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "50px" }}>
            <span style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #111111", background: "#111111", color: "#fff", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>1</span>
            <span style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", color: "#111111", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>2</span>
            <span style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e5e5", color: "#111111", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>→</span>
          </div>

        </div>
      </section>

      {/* BANNER INFORMASI DOKUMEN PUBLIK */}
      <section style={{ background: "#f9f9f9", borderTop: "1px solid #e5e5e5", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h3 style={{ fontSize: "22px", color: "#111111", marginBottom: "15px" }}>Butuh Data Riset atau Kerja Sama Kajian?</h3>
          <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "25px" }}>
            LBH SIKAP Yogyakarta secara terbuka menyediakan akses bagi para akademisi, jurnalis, maupun mahasiswa yang ingin melakukan kajian komparatif terkait data pelanggaran HAM dan advokasi kebijakan publik.
          </p>
          <a href="mailto:yogyakarta@ylbhsikap.or.id" className="btn-cta" style={{ background: "#111111", color: "#ffffff", border: "1px solid #111111" }}>
            AJUKAN PERMOHONAN DATA
          </a>
        </div>
      </section>
    </main>
  );
}