"use client";
import Image from "next/image";

export default function Layanan() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Sistem Keamanan LBH SIKAP: Berkas pengaduan Anda telah berhasil dienkripsi dan masuk ke dalam antrean pangkalan data paralegal kami. Mohon tunggu konfirmasi resmi via WhatsApp dalam kurun waktu 1x24 jam.");
    e.target.reset();
  };

  return (
    <main>
      {/* BANNER UTAMA HALAMAN LAYANAN (Menggunakan kelas hero-sub agar foto background muncul) */}
      <section id="banner-layanan" className="hero-sub"> 
        <Image 
          src="/ruangan.jpg" 
          alt="Layanan LBH SIKAP"
          fill 
          priority 
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Ajukan Bantuan Hukum Gratis</h1>
          <p>Pos Komando Bantuan Hukum (Posbakum) dan Pengaduan Kasus Struktural</p>
        </div>
      </section>

      {/* KONTEN UTAMA & FORMULIR ADUAN */}
      <section className="section-padding">
        <div className="container">
          
          {/* Membagi tata letak menjadi 2 kolom seimbang di layar besar */}
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px", alignItems: "start" }}>
            
            {/* SEKSI KIRI: KRITERIA PENERIMAAN KASUS */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "20px" }}>
                Kriteria Penerimaan Kasus
              </h2>
              <p style={{ color: "#444", lineHeight: "1.7", textAlign: "justify", marginBottom: "20px" }}>
                Sebagai lembaga bantuan hukum struktural, LBH SIKAP Yogyakarta memprioritaskan pembelaan hukum gratis pro bono kepada masyarakat yang memenuhi kriteria penapisan internal kami:
              </p>
              
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ background: "#f9f9f9", padding: "15px", borderRadius: "4px", marginBottom: "12px", borderLeft: "3px solid #111111" }}>
                  <strong>• Faktor Ekonomi:</strong> Diutamakan bagi masyarakat marjinal/miskin yang dibuktikan dengan melampirkan Surat Keterangan Tidak Mampu (SKTM).
                </li>
                <li style={{ background: "#f9f9f9", padding: "15px", borderRadius: "4px", marginBottom: "12px", borderLeft: "3px solid #111111" }}>
                  <strong>• Kasus Dimensi Publik:</strong> Kasus atau perkara yang dihadapi berdampak luas bagi komunitas, lingkungan hidup, atau hak-hak dasar kelompok (bukan murni sengketa privat antarelite).
                </li>
                <li style={{ background: "#f9f9f9", padding: "15px", borderRadius: "4px", marginBottom: "12px", borderLeft: "3px solid #cc2222" }}>
                  <strong>• Pembatasan Kasus:</strong> Secara ideologis, LBH SIKAP berkomitmen tidak akan bertindak sebagai pendamping bagi pelaku korupsi maupun pelaku kekerasan seksual.
                </li>
              </ul>
            </div>

            {/* SEKSI KANAN: FORMULIR KONTAK ADUAN */}
            <div style={{ background: "#ffffff", padding: "35px", borderRadius: "6px", border: "1px solid #e5e5e5", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "25px", color: "#111111" }}>
                Formulir Kontak Aduan
              </h2>
              
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px", color: "#333" }}>
                    Nama Lengkap Sesuai KTP
                  </label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama lengkap Anda" 
                    required 
                    style={{ width: "100%", padding: "12px", border: "1px solid #cccccc", borderRadius: "4px", fontSize: "14px", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px", color: "#333" }}>
                    Nomor WhatsApp Aktif
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Contoh: 08123456xxxx" 
                    required 
                    style={{ width: "100%", padding: "12px", border: "1px solid #cccccc", borderRadius: "4px", fontSize: "14px", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px", color: "#333" }}>
                    Kronologi Ringkas Perkara
                  </label>
                  <textarea 
                    rows="5" 
                    placeholder="Ceritakan urutan kejadian perkara secara ringkas, jujur, dan logis..." 
                    required 
                    style={{ width: "100%", padding: "12px", border: "1px solid #cccccc", borderRadius: "4px", fontSize: "14px", fontFamily: "inherit", resize: "vertical", lineHeight: "1.5" }}
                  ></textarea>
                </div>

                {/* Menggunakan tombol CTA premium murni */}
                <button 
                  type="submit" 
                  className="btn-cta"
                  style={{ width: "100%", background: "#111111", color: "#ffffff", border: "1px solid #111111", padding: "14px", cursor: "pointer", fontSize: "14px" }}
                >
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