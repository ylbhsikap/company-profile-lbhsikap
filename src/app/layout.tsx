 // src/app/layout.tsx
import "./output.css";
import "./globals.css"; // Ini menghubungkan CSS Tailwind Anda
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Anda bisa ganti font sesuai selera

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LBH SIKAP | Lembaga Bantuan Hukum",
  description: "Situs resmi LBH SIKAP, memberikan akses keadilan bagi masyarakat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}