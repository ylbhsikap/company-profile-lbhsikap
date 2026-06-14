export default function TentangKami() {
  return (
    <>
      {/* BANNER UTAMA HALAMAN TENTANG */}
      <section id="banner-tentang" className="page-title-banner">
        <div className="container">
          <h1>Tentang LBH SIKAP Yogyakarta</h1>
        </div>
      </section>

      {/* KONTEN PROFIL UTAMA */}
      <main className="container section-padding">
        <div className="split-layout" style={{ gap: "40px", alignItems: "start" }}>
          
          {/* SEKSI KIRI: PROFIL & SEJARAH GERAKAN */}
          <div style={{ flex: "1.2" }}>
            <h2>Profil & Khittah Gerakan</h2>
            <p style={{ marginTop: "15px", lineHeight: "1.8", color: "#444" }}>
              <strong>LBH SIKAP Yogyakarta</strong> (Lembaga Bantuan Hukum & Studi Kebijakan Publik) 
              adalah organisasi masyarakat sipil independen yang mendedikasikan pergerakannya pada 
              perjuangan keadilan struktural, penegakan Hak Asasi Manusia (HAM), serta penyediaan 
              bantuan hukum pro bono (gratis) bagi masyarakat marjinal di wilayah Daerah Istimewa Yogyakarta.
            </p>
            <p style={{ marginTop: "15px", lineHeight: "1.8", color: "#444" }}>
              Berbeda dengan firma hukum komersial, LBH SIKAP tidak hanya melihat masalah hukum sebatas 
              pasal-pasal di pengadilan, melainkan sebagai akibat dari ketimpangan struktur sosial. 
              Oleh karena itu, setiap pembelaan yang kami lakukan selalu diintegrasikan dengan pengorganisasian 
              masyarakat, kaderisasi paralegal, dan riset kebijakan publik guna mendorong reformasi hukum yang berkeadilan.
            </p>

            <h3 style={{ marginTop: "35px" }}>Visi Lembaga</h3>
            <blockquote style={{ margin: "15px 0", paddingLeft: "15px", borderLeft: "4px solid #b22222", fontStyle: "italic", color: "#555" }}>
              "Terwujudnya sistem hukum, sosial, dan politik yang adil, demokratis, serta menjunjung tinggi Hak Asasi Manusia, 
              di mana setiap warga negara—khususnya kelompok miskin dan tertindas—memiliki akses penuh terhadap keadilan dan 
              mampu memperjuangkan hak konstitusionalnya secara mandiri."
            </blockquote>
          </div>

          {/* SEKSI KANAN: TIGA PILAR UTAMA (MISI) */}
          <div style={{ flex: "0.8", background: "#f9f9f9", padding: "30px", borderRadius: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <h3 style={{ borderBottom: "2px solid #b22222", paddingBottom: "10px", marginBottom: "20px" }}>Misi & Tiga Pilar Gerakan</h3>
            
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#b22222" }}>1. Pendampingan Hukum Struktural</h4>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
                Memberikan advokasi hukum litigasi dan non-litigasi secara cuma-cuma kepada masyarakat miskin, 
                buruh, tani, perempuan, miskin kota, dan kelompok rentan lainnya yang menjadi korban kesewenang-wenangan.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#b22222" }}>2. Pemberdayaan & Kaderisasi Paralegal</h4>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
                Melakukan pendidikan hukum kritis dan membentuk jaringan paralegal di tingkat akar rumput (community paralegal) 
                agar masyarakat memiliki kapasitas mandiri dalam menyelesaikan sengketa hukum di wilayahnya.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#b22222" }}>3. Advokasi & Riset Kebijakan Publik</h4>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
                Menganalisis, mengkritisi, dan mendorong lahirnya regulasi serta kebijakan pemerintah daerah yang berpihak 
                pada kepentingan publik, hak asasi manusia, dan kelestarian lingkungan hidup.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* NILAI-NILAI INTEGRITAS LBH SIKAP */}
      <section style={{ background: "#111", color: "#fff", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#fff" }}>Nilai & Prinsip Perjuangan</h2>
          <div className="grid-3">
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h3 style={{ color: "#b22222", marginBottom: "10px" }}>Independen</h3>
              <p style={{ color: "#ccc", fontSize: "14px" }}>
                Sama sekali tidak terafiliasi dengan partai politik, kekuatan oligarki, maupun birokrasi pemerintah. Keputusan advokasi murni demi keadilan.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h3 style={{ color: "#b22222", marginBottom: "10px" }}>Anti-Korupsi</h3>
              <p style={{ color: "#ccc", fontSize: "14px" }}>
                Menolak keras segala bentuk suap, mafiah peradilan, maupun kompromi bawah meja dalam penanganan perkara hukum.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h3 style={{ color: "#b22222", marginBottom: "10px" }}>Keberpihakan</h3>
              <p style={{ color: "#ccc", fontSize: "14px" }}>
                Secara sadar memilih untuk berdiri di sisi korban, kelompok marjinal, dan masyarakat yang tertindas oleh sistem atau relasi kuasa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}