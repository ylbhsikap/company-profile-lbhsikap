import React from "react";
import { BerandaData } from "@/data/data"; //  Diubah dari newsData ke BerandaData agar sesuai dengan pusat data

// 1. Definisikan struktur data Berita (Gunakan string pada ID agar sinkron)
interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
}

// 2. Tipe data untuk parameter rute dinamis [id] di Next.js App Router
interface DetailBeritaProps {
  params: Promise<{ id: string }>;
}

export default async function DetailBeritaPage({ params }: DetailBeritaProps) {
  // Ambil ID dari URL rute dinamis
  const { id } = await params;

  // Tegaskan data pusat sebagai array Berita
  const daftarBerita = BerandaData as unknown as Berita[];

  // Cari berita yang spesifik berdasarkan ID dari URL
  const berita = daftarBerita.find((item) => item.id === id);

  // Jika data berita tidak ditemukan di data.ts
  if (!berita) {
    return (
      <main className="container section-padding" style={{ paddingTop: "120px", textAlign: "center" }}>
        <h2>Berita Tidak Ditemukan</h2>
        <p>Maaf, artikel atau publikasi advokasi yang Anda cari tidak tersedia atau telah dihapus.</p>
      </main>
    );
  }

  // Tampilan halaman detail berita yang berhasil ditemukan
  return (
    <main className="container section-padding" style={{ paddingTop: "120px" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto" }}>
        <span style={{ background: berita.color || "#111111", color: "#fff", fontSize: "12px", padding: "4px 10px", borderRadius: "2px" }}>
          {berita.category || "Advokasi"}
        </span>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginTop: "15px", marginBottom: "10px", lineHeight: "1.3" }}>
          {berita.title}
        </h1>
        <p style={{ color: "#777777", fontSize: "14px", marginBottom: "30px" }}>Dipublikasikan pada: {berita.date}</p>
        
        <div style={{ lineHeight: "1.8", color: "#333333", textAlign: "justify", fontSize: "16px" }}>
          {berita.excerpt}
          {/* Anda bisa menambahkan properti isiKonten jika ada di data.ts nanti */}
        </div>
      </article>
    </main>
  );
}