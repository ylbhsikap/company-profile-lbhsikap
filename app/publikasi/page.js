export default function Publikasi() {
  return (
    <>
      <section id="banner-publikasi" className="page-title-banner">
        <div className="container">
          <h1>Publikasi & Riset Kebijakan</h1>
        </div>
      </section>

      <main className="container split-layout" style={{ padding: "40px 0" }}>
        <div>
          <h2>Laporan Tahunan & Kinerja (Annual Report)</h2><br />
          <p>Bentuk akuntabilitas LBH kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan, persentase penyelesaian, serta transparansi tata kelola keuangan lembaga.</p>
          <a href="#" className="btn-download">Unduh Laporan Tahunan (PDF)</a>
        </div>
        <div>
          <h2>Kertas Kebijakan & Modul Paralegal</h2><br />
          <p>Akses gratis ke modul hukum praktis untuk kader di akar rumput, panduan menghadapi sengketa, draf hak-hak pekerja, dan riset advokasi lainnya.</p>
          <a href="#" className="btn-download">Buka Berkas Modul</a>
        </div>
      </main>
    </>
  );
}