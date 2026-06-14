import Image from "next/image";

export default function Kontak() {
  return (
    <main>
      {/* BANNER UTAMA HALAMAN KONTAK (Menggunakan kelas hero-sub agar foto background muncul) */}
      <section className="hero-sub">
  {/* Foto background sekarang dipanggil lewat komponen Image */}
  <Image 
    src="/ruangan.jpg" 
    alt="Sekretariat LBH SIKAP"
    fill 
    priority 
    style={{ objectFit: "cover" }} 
  />
  {/* Overlay dari CSS globals.css kita */}
  <div className="hero-overlay"></div>

  {/* Konten tetap di dalam container */}
  <div className="hero-content container">
          <h1>Hubungi Sekretariat Kami</h1>
          <p>Akses Komunikasi Resmi, Alamat Kantor, dan Peta Navigasi Lembaga</p>
        </div>
      </section>

      {/* KONTEN UTAMA KONTAK & PETA LOKASI */}
      <section className="section-padding">
        <div className="container">
          
          {/* Membagi tata letak menjadi 2 kolom: Kiri (Informasi) & Kanan (Google Maps) */}
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "50px", alignItems: "start" }}>
            
            {/* SEKSI KIRI: INFORMASI KONTAK UTAMA */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "25px" }}>
                Informasi Kontak Utama
              </h2>
              
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111111", marginBottom: "5px" }}>
                  LBH SIKAP YOGYAKARTA
                </h3>
                <p style={{ fontSize: "13px", fontWeight: "600", color: "#666", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  (Lembaga Bantuan Hukum & Studi Kebijakan Publik)
                </p>
              </div>

              <p style={{ color: "#444", lineHeight: "1.8", textAlign: "justify", marginBottom: "25px" }}>
                Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.
              </p>

              <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "6px", border: "1px solid #e5e5e5" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #eeeeee" }}>
                      <td style={{ padding: "10px 0", fontWeight: "700", color: "#111111", width: "40%" }}>Jam Operasional</td>
                      <td style={{ padding: "10px 0", color: "#444" }}>Senin - Jumat | 09.00 - 16.00 WIB</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #eeeeee" }}>
                      <td style={{ padding: "10px 0", fontWeight: "700", color: "#111111" }}>WhatsApp Hotline</td>
                      <td style={{ padding: "10px 0", color: "#111111", fontWeight: "600" }}>081-906-157-620</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px 0", fontWeight: "700", color: "#111111" }}>Email Resmi</td>
                      <td style={{ padding: "10px 0", color: "#444", textTransform: "lowercase" }}>yogyakarta@ylbhsikap.or.id</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={{ marginTop: "25px" }}>
                <a 
                  href="https://wa.me/6281906157620" 
                  className="btn-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textAlign: "center", background: "#111111", color: "#ffffff", border: "1px solid #111111" }}
                >
                  Hubungi Melalui WhatsApp
                </a>
              </div>
            </div>

            {/* SEKSI KANAN: PETA LOKASI GOOGLE MAPS */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #111111", paddingBottom: "10px", marginBottom: "25px" }}>
                Peta Lokasi Resmi
              </h2>
              <div className="map-box" style={{ height: "380px", border: "1px solid #e5e5e5", borderRadius: "6px", padding: "6px", background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8019848952886!2d110.39418118931182!3d-7.7551972659983415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a6cc94c5f7%3A0x86660a3450d13952!2sLBH%20SIKAP%20Yogyakarta%20-%20Lembaga%20Bantuan%20Hukum%20%26%20Studi%20Kebijakan%20Publik!5e0!3m2!1sid!2sid!4v1781346977202!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: "4px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Kantor LBH SIKAP Yogyakarta"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}