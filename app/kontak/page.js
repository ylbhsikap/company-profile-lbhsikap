export default function Kontak() {
  return (
    <>
      <section id="banner-kontak" className="page-title-banner">
        <div className="container">
          <h1>Hubungi Sekretariat Kami</h1>
        </div>
      </section>

      <main className="container grid-2" style={{ padding: "40px 0" }}>
        <div>
          <h2>Informasi Kontak Utama</h2><br />
          <p><strong>LBH SIKAP YOGYAKARTA</strong></p>
          <p>(Lembaga Bantuan Hukum & Studi Kebijakan Publik)</p>
          <p>Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.</p><br />
          <p><strong>Jam Operasional:</strong> Senin - Jumat | 09.00 - 16.00 WIB</p>
          <p><strong>WhatsApp Hotline:</strong> 081-906-157-620</p>
          <p><strong>Email Resmi:</strong> yogyakarta@ylbhsikap.or.id</p>
        </div>
        <div>
          <h2>Peta Lokasi Google Maps</h2><br />
          <div className="map-box" style={{ height: "350px" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8019848952886!2d110.39418118931182!3d-7.7551972659983415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a6cc94c5f7%3A0x86660a3450d13952!2sLBH%20SIKAP%20Yogyakarta%20-%20Lembaga%20Bantuan%20Hukum%20%26%20Studi%20Kebijakan%20Publik!5e0!3m2!1sid!2sid!4v1781346977202!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "6px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}