"use client";

export default function Layanan() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Sistem Keamanan LBH SIKAP: Berkas pengaduan Anda telah berhasil dienkripsi dan masuk ke dalam antrean pangkalan data paralegal kami. Mohon tunggu konfirmasi resmi via WhatsApp dalam kurun waktu 1x24 jam.");
    e.target.reset();
  };

  return (
    <>
      <section id="banner-layanan" className="page-title-banner">
        <div className="container">
          <h1>Ajukan Bantuan Hukum Gratis</h1>
        </div>
      </section>

      <main className="container form-container" style={{ padding: "40px 0" }}>
        <div>
          <h2>Kriteria Penerimaan Kasus</h2><br />
          <p>LBH SIKAP YOGYAKARTA memberikan pembelaan hukum gratis kepada pemohon yang memenuhi syarat:</p><br />
          <ul style={{ marginLeft: "20px", lineHeight: "2" }}>
            <li><strong>Faktor Ekonomi:</strong> Wajib melampirkan Surat Keterangan Tidak Mampu (SKTM).</li>
            <li><strong>Kasus Dimensi Publik:</strong> Kasus berdampak luas bagi komunitas/kelompok (bukan murni sengketa privat antar elit).</li>
            <li>Tidak bertindak sebagai pelaku korupsi atau kekerasan seksual.</li>
          </ul>
        </div>
        <div>
          <h2>Formulir Kontak Aduan</h2><br />
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Nama Lengkap Sesuai KTP</label>
              <input type="text" placeholder="Masukkan nama lengkap Anda" required />
            </div>
            <div className="form-group">
              <label>Nomor WhatsApp Aktif</label>
              <input type="tel" placeholder="Contoh: 08123456xxxx" required />
            </div>
            <div className="form-group">
              <label>Kronologi Ringkas Perkara</label>
              <textarea rows="5" placeholder="Ceritakan urutan kejadian perkara secara ringkas dan jujur..." required></textarea>
            </div>
            <button type="submit" className="btn-submit">Kirim Berkas Aduan</button>
          </form>
        </div>
      </main>
    </>
  );
}