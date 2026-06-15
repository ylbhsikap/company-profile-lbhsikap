import React from "react";
import Image from "next/image";
// Tambahkan import 'strukturOrganisasi' dan 'daftarAnggota' dari data pusat Anda
import { asetGambar, AsetGambarType, strukturOrganisasi, daftarAnggota } from "@/data/data"; 

// Definisikan Interface baru untuk Struktur & Anggota
interface OrganisasiType {
  pimpinan: { nama: string; jabatan: string };
  direktur: { nama: string; jabatan: string };
  divisi: { nama: string; jabatan: string }[];
}

interface AnggotaType {
  id: number;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
}

export default function Tentang() {
  const gambar = asetGambar as AsetGambarType;
  
  // Type assertion untuk data organisasi dan anggota baru
  const treeOrga = strukturOrganisasi as OrganisasiType;
  const anggotaList = daftarAnggota as AnggotaType[];

  return (
    <main>
      {/* HERO SUB */}
      <section className="hero-sub">
        <Image 
          src={gambar.tentangkami} 
          alt="Tentang LBH SIKAP" 
          fill 
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px" 
          style={{ objectFit: "cover" }} 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Tentang LBH SIKAP</h1>
          <p>Mengenal Visi, Misi, dan Spirit Gerakan Advokasi Kami</p>
        </div>
      </section>

      {/* SEKSI KONTEN UTAMA */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* ==========================================================
             TAMBAHAN SEKSI 1: STRUKTUR BAGAN POHON (TREE)
             ========================================================== */}
          <div className="organogram-section">
            <h2 style={{ fontSize: "24px", fontWeight: "700", textAlign: "center", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Struktur Kepengurusan
            </h2>
            <p style={{ color: "#666", textAlign: "center", marginBottom: "40px", fontSize: "14px" }}>Garis Komando dan Sinergi Operasional LBH SIKAP</p>
            
            <div className="organogram-tree">
              {/* Tingkat 1: Pembina / Pimpinan */}
              <div className="tree-level">
                <div className="tree-node">
                  <h3>{treeOrga.pimpinan.jabatan}</h3>
                  <p>{treeOrga.pimpinan.nama}</p>
                </div>
              </div>

              {/* Tingkat 2: Direktur */}
              <div className="tree-level">
                <div className="tree-node" style={{ borderColor: "#111" }}>
                  <h3>{treeOrga.direktur.jabatan}</h3>
                  <p>{treeOrga.direktur.nama}</p>
                </div>
              </div>

              {/* Tingkat 3: Jajaran Divisi */}
              <div className="tree-level">
                {treeOrga.divisi.map((div, index) => (
                  <div className="tree-node" key={index} style={{ background: "#ffffff", color: "#111111", border: "1px solid #e5e5e5" }}>
                    <h3 style={{ color: "#111111" }}>{div.jabatan}</h3>
                    <p style={{ color: "#666666" }}>{div.nama}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={{ border: 0, borderTop: "1px solid #e5e5e5", margin: "70px 0" }} />

          {/* ==========================================================
             TAMBAHAN SEKSI 2: DAFTAR ANGGOTA (BERSAMBUNG)
             ========================================================== */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "700", textAlign: "center", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Profil Advokat & Anggota Lembaga
            </h2>
            <p style={{ color: "#666", textAlign: "center", marginBottom: "40px", fontSize: "14px" }}>Mengenal Lebih Dekat Penegak Keadilan Kami</p>

            <div className="member-list">
              {anggotaList.map((member) => (
                <div className="member-row" key={member.id}>
                  
                  {/* Kolom Keterangan / Deskripsi */}
                  <div className="member-info">
                    <h3>{member.nama}</h3>
                    <span className="role-tag">{member.jabatan}</span>
                    <p>{member.deskripsi}</p>
                  </div>

                  {/* Kolom Foto Bersambung Seimbang */}
                  <div className="member-photo-wrapper">
                    <Image
                      src={member.foto}
                      alt={member.nama}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      loading="lazy"
                    />
                  </div>

                </div>
              ))}
            </div>
          </div> {/* <-- PERBAIKAN: Menutup tag <div> pembungkus TAMBAHAN SEKSI 2 */}

        </div> {/* <-- PERBAIKAN: Menutup tag <div className="container"> */}
      </section>
    </main>
  );
}