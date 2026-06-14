import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "LBH SIKAP YOGYAKARTA | Bantuan Hukum Gratis Yogyakarta",
  description: "Lembaga Bantuan Hukum LBH SIKAP YOGYAKARTA menyediakan layanan pengacara gratis, konsultasi hukum pro bono, dan advokasi struktural untuk masyarakat kurang mampu di YOGYAKARTA.",
  keywords: ["LBH gratis", "bantuan hukum pro bono", "pengacara gratis", "bantuan hukum struktural", "posbakum", "YOGYAKARTA"],
  robots: "index, follow",
  icons: {
    icon: "/assets/images/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Schema.org JSON-LD SEO Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "LBH SIKAP YOGYAKARTA",
              "description": "Lembaga Bantuan Hukum Pro Bono untuk Masyarakat Kurang mampu",
              "priceRange": "Rp0 (Gratis / Pro-Bono)",
              "logo": "https://ylbhsikap.or.id"
            })
          }}
        />
      </head>
      <body>
        {/* HEADER NAVIGATION */}
        <header>
          <div className="container navbar">
            <div className="logo">
              <a href="/" className="logo-link">
                {/* Menggunakan Image Next.js untuk Logo */}
                <Image src="/logo.png" alt="Logo LBH SIKAP YOGYAKARTA" width={45} height={45} className="brand-logo" priority />
                <div className="logo-text">
                  <span className="logo-title">LBH SIKAP</span>
                  <span className="logo-subtitle">YOGYAKARTA</span>
                </div>
              </a>
            </div>
            
            <button className="menu-toggle" aria-label="Buka Menu Navigasi">
              <span></span><span></span><span></span>
            </button>

            <nav className="nav-container">
              <ul className="nav-links">
                <li><a href="/">BERANDA</a></li>
                <li><a href="/tentang">TENTANG KAMI</a></li>
                <li><a href="/publikasi">PUBLIKASI</a></li>
                <li><a href="/layanan">LAYANAN HUKUM</a></li>
                <li><a href="/kontak">KONTAK</a></li>
                <li className="nav-utility">
                  <span className="lang-switch"><a href="/layanan">AJUKAN ADUAN</a></span>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Konten Halaman Dinamis */}
        {children}

        {/* FOOTER PERMANEN PREMIUM */}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-box profile-box">
              <h4>LBH SIKAP YOGYAKARTA</h4>
              <p>Organisasi masyarakat sipil independen yang memperjuangkan keadilan struktural, penegakan Hak Asasi Manusia (HAM), serta pemberian advokasi dan bantuan hukum pro bono bagi masyarakat marjinal.</p>
            </div>

            <div className="footer-box pilar-box">
              <h4>Pilar Gerakan</h4>
              <ul className="footer-pilar-list">
                <li>• Pendampingan Pro Bono</li>
                <li>• Kaderisasi Paralegal</li>
                <li>• Advokasi Kebijakan Publik</li>
              </ul>
            </div>

            <div className="footer-box contact-box">
              <h4>Sekretariat Resmi</h4>
              <p>Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Sleman, DI Yogyakarta 55283.</p>
              <ul className="footer-contact-details">
                <li><strong>WA:</strong> 081-906-157-620</li>
                <li><strong>Email:</strong> yogyakarta@ylbhsikap.or.id</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container footer-bottom-content">
              <p>&copy; 2026 LBH SIKAP Yogyakarta. Hak Cipta Dilindungi.</p>
              <p className="footer-legal">Managed by OPLAY.ID</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}