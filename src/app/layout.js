import "./globals.css";
import Navbar from "@/app/components/navbar";

export const metadata = {
  title: "LBH SIKAP YOGYAKARTA | Bantuan Hukum Gratis Yogyakarta",
  description: "Lembaga Bantuan Hukum LBH SIKAP YOGYAKARTA menyediakan layanan pengacara gratis, konsultasi hukum pro bono, dan advokasi struktural untuk masyarakat kurang mampu di YOGYAKARTA.",
  keywords: ["LBH gratis", "bantuan hukum pro bono", "pengacara gratis", "bantuan hukum struktural", "posbakum", "YOGYAKARTA"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}

        {/* FOOTER PERMANEN */}
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
              <p>© 2026 LBH SIKAP Yogyakarta. Hak Cipta Dilindungi.</p>
              <p className="footer-legal">Managed by OPLAY.ID</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}