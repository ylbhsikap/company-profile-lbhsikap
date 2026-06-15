import React from "react";
import Link from "next/link";

// 1. Definisikan tipe data untuk objek 'item' publikasi
interface PublikasiItem {
  id: number | string; // ID aman berupa angka atau teks
  date: string;
  category: string;
  tagColor: string;    // Warna background untuk tag kategori (misal: "#ff0000")
  title: string;
  excerpt: string;
}

// 2. Bungkus ke dalam properti komponen (Props)
interface PublikasiCardProps {
  item: PublikasiItem;
}

export default function PublikasiCard({ item }: PublikasiCardProps) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span className="card-date">{item.date}</span>
          
          {/* Tag kategori dengan warna background dinamis dari data */}
          <span style={{ backgroundColor: item.tagColor, color: "#ffffff", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "3px", letterSpacing: "0.5px" }}>
            {item.category}
          </span>
        </div>
        <h3>{item.title}</h3>
        <p style={{ fontSize: "14px", color: "#444", marginTop: "10px", textAlign: "justify", lineHeight: "1.6" }}>
          {item.excerpt}
        </p>
      </div>
      
      {/* Menggunakan Link Next.js agar perpindahan halaman instan tanpa reload */}
      <Link href={`/publikasi/${item.id}`} style={{ display: "inline-block", marginTop: "20px", fontSize: "13px", fontWeight: "700", borderBottom: "1px solid #111111", width: "fit-content", paddingBottom: "2px" }}>
        BACA SELENGKAPNYA →
      </Link>
    </div>
  );
}