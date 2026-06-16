// src/data/data.ts

// 1. STRUKTUR PROTOKOL IDENTITAS WARNA & ASET GAMBAR
export interface AsetGambarType {
  bannerUtama: string;
  kantorSekretariat: string;
  logoResmi: string;
  tentangkami: string;
  kontak: string;
  layanan: string;
  publikasi: string; 
  dokumentasiKasus: string;
}

export const asetGambar: AsetGambarType = {
  bannerUtama: "/assets/images/ruangan10.jpg",
  kantorSekretariat: "/assets/images/ruangan1.jpg", 
  logoResmi: "/assets/images/logo-lbh.png",
  tentangkami: "/assets/images/ruangan2.jpg",
  kontak: "/assets/images/ruangan.jpg",
  layanan: "/assets/images/ruangan10.jpg",
  publikasi: "/assets/images/ruangan10.jpg",
  dokumentasiKasus: "/assets/images/ruangan10.jpg"
};

// 2. KONTRAK DATA BERITA & ADVOKASI UTAMA
export interface Berita {
  id: string; // Dipertegas sebagai string untuk kestabilan Router Next.js
  title: string;
  date: string;
  excerpt: string;
  category: string;
  color: string; // Menyimpan kode warna latar belakang badge (Hex valid / Tailwind Slate)
  gambarKunci: keyof AsetGambarType;
}

export const BerandaData: Berita[] = [
  { 
    id: "1", 
    date: "14 Juni 2026", 
    title: "Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil", 
    excerpt: "LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi dan represi aparat terhadap kebebasan berpendapat di muka umum...", 
    category: "SIARAN PERS",
    color: "#09090b", // Menyesuaikan dengan kepekatan warna Tailwind v4 gray-950
    gambarKunci: "bannerUtama"
  },
  { 
    id: "2", 
    date: "28 Mei 2026", 
    title: "Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana", 
    excerpt: "Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan bantuan hukum di akar rumput demi menjamin akses keadilan yang merata...", 
    category: "OPINI HUKUM",
    color: "#4b5563", // Menyesuaikan dengan warna Tailwind v4 gray-600
    gambarKunci: "kantorSekretariat"
  },
  { 
    id: "3", 
    date: "12 April 2026", 
    title: "Catatan Krisis: Laporan Pemetaan Sengketa Tanah", 
    excerpt: "Hasil riset kolaboratif mengenai potret buram sengketa agraria, tumpang tindih regulasi pertanahan, serta dampaknya terhadap hak ruang hidup warga...", 
    category: "RISET & DATA",
    color: "#9ca3af", // Menyesuaikan dengan warna Tailwind v4 gray-400
    gambarKunci: "dokumentasiKasus"
  },
];

// 3. DATA HALAMAN INDEKS PUBLIKASI WIDGET
export const publikasiData = [
  { 
    id: "1", 
    date: "14 Juni 2026", 
    title: "Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil", 
    excerpt: "LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi dan represi aparat terhadap kebebasan berpendapat di muka umum...", 
    category: "SIARAN PERS",
    tagColor: "#09090b" 
  },
  { 
    id: "2", 
    date: "28 Mei 2026", 
    title: "Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana", 
    excerpt: "Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan bantuan hukum di akar rumput demi menjamin akses keadilan yang merata...", 
    category: "OPINI HUKUM",
    tagColor: "#4b5563" 
  },
  { 
    id: "3", 
    date: "12 April 2026", 
    title: "Catatan Krisis: Laporan Pemetaan Sengketa Tanah", 
    excerpt: "Hasil riset kolaboratif mengenai potret buram sengketa agraria, tumpang tindih regulasi pertanahan, serta dampaknya terhadap hak ruang hidup warga...", 
    category: "RISET & DATA",
    tagColor: "#9ca3af" 
  },
];

// 4. DATA DOKUMEN UNDUHAN AKUNTABILITAS PUBLIK
export const publikasiDokumen = [
  {
    id: "doc-1", // Distandarisasi menjadi string id
    tag: "AKUNTABILITAS",
    tagColor: "#09090b", // Tailwind gray-950
    judul: "Laporan Tahunan & Kinerja (Annual Report)",
    deskripsi: "Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.",
    tombolLabel: "Unduh Laporan Tahunan (PDF)",
    link: "#"
  },
  {
    id: "doc-2",
    tag: "EDUKASI PUBLIK",
    tagColor: "#4b5563", // Tailwind gray-600
    judul: "Kertas Kebijakan & Modul Paralegal",
    deskripsi: "Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.",
    tombolLabel: "Buka Berkas Modul",
    link: "#"
  }
];

// 5. DATA KATEGORI ARSIP KLASIK (BACKUP DATA SECTION)
export const sectionData = {
  pers: [
    { id: "pers-1", date: "12 Juni 2026", title: "Desakan Hentikan Intimidasi Warga", excerpt: "Ringkasan rilis pers terbaru mengenai situasi eskalasi konflik di lapangan..." },
    { id: "pers-2", date: "08 Juni 2026", title: "Catatan Kebijakan Publik Daerah", excerpt: "Isi analisa hukum LBH SIKAP terhadap draf rancangan regulasi daerah..." },
    { id: "pers-3", date: "24 Mei 2026", title: "Keberhasilan Advokasi Buruh", excerpt: "Tuliskan rekam jejak penyelesaian kasus pemutusan hubungan kerja sepihak..." },
  ],
  edukasi: [
    { id: "edu-1", title: "Klinik Hukum Gratis", excerpt: "Jadwal konsultasi mingguan tatap muka langsung di sekretariat LBH SIKAP." },
    { id: "edu-2", title: "Panduan Hak Buruh", excerpt: "Mengenal hak-hak dasar tenaga kerja serta jaminan sosial sesuai undang-undang." },
    { id: "edu-3", title: "Seminar Hukum Agraria", excerpt: "Edukasi mengenai pencegahan konflik pertanahan dan prosedur hukumnya." },
  ]
};

// 6. INFORMASI KONTAK DAN INTEGRASI GOOGLE MAPS EMBED
export const kontakInfo = {
  alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
  jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
  whatsapp: "081906157620",
  email: "yogyakarta@ylbhsikap.or.id",
  // 💡 DIKOREKSI: Menggunakan draf tautan resmi embed koordinat Google Maps Jogja asli agar iframe tidak blank
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2806509939525!2d110.3986961!3d-7.7600373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd33c4677%3A0x9dbfb4e68e0d9b4b!2sCondongcatur%2C%20Sleman Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
};

// 7. KRITERIA PENERIMAAN BANTUAN HUKUM GRATIS
export const kriteriaLayanan = [
  {
    judul: "Faktor Ekonomi",
    deskripsi: "Diutamakan bagi masyarakat marjinal/miskin yang dibuktikan dengan melampirkan Surat Keterangan Tidak Mampu (SKTM).",
    borderLeft: "#09090b" // Slate Kehitaman Tegas
  },
  {
    judul: "Kasus Dimensi Publik",
    deskripsi: "Kasus atau perkara yang dihadapi berdampak luas bagi komunitas, lingkungan hidup, atau hak-hak dasar kelompok (bukan murni sengketa privat antarelite).",
    borderLeft: "#4b5563" // Abu-abu Konstitusional
  },
  {
    judul: "Pembatasan Kasus",
    deskripsi: "Secara ideologis, LBH SIKAP berkomitmen tidak akan bertindak sebagai pendamping bagi pelaku korupsi maupun pelaku kekerasan seksual.",
    borderLeft: "#dc2626" // Merah Peringatan Tegas (Tailwind red-600)
  }
];

// 8. DATA PENGURUS INTERNAL & BAGAN KEPEMIMPINAN
export const strukturOrganisasi = {
  pimpinan: { nama: "Prof. Dr. Ahmad Sodikin, S.H.", jabatan: "Ketua Dewan Pembina" },
  direktur: { nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Eksekutif" },
  divisi: [
    { nama: "Siti Rahma, S.H.", jabatan: "Kepala Divisi Litigasi" },
    { nama: "Andi Wijaya, S.H.", jabatan: "Kepala Divisi Non-Litigasi" },
    { nama: "Rian Hidayat, S.Sos.", jabatan: "Sekretaris & Umum" }
  ]
};

export interface AnggotaType {
  id: string; // Disinkronkan menjadi string id
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
}

export const daftarAnggota: AnggotaType[] = [
  {
    id: "member-1",
    nama: "Budi Santoso, S.H., M.H.",
    jabatan: "Direktur Executif",
    deskripsi: "Budi Santoso memiliki pengalaman lebih dari 15 tahun di bidang advokasi hukum publik dan penanganan hak asasi manusia. Menyelesaikan studi magister hukum di Universitas Gadjah Mada, beliau aktif memimpin reformasi bantuan hukum gratis bagi masyarakat marjinal di Yogyakarta.",
    foto: "/assets/images/ruangan10.jpg" 
  },
  {
    id: "member-2",
    nama: "Siti Rahma, S.H.",
    jabatan: "Kepala Divisi Litigasi",
    deskripsi: "Siti berspesialisasi dalam hukum pidana dan perlindungan perempuan & anak. Rekam jejaknya mencakup penyelesaian berbagai kasus struktural besar. Dedikasinya terhadap keadilan menjadikannya pilar utama dalam pergerakan bantuan hukum di LBH SIKAP.",
    foto: "/assets/images/ruangan3.jpg" 
  },
  {
    id: "member-3", 
    nama: "Andi Wijaya, S.H.", 
    jabatan: "Kepala Divisi Non-Litigasi", 
    deskripsi: "Andi fokus pada edukasi hukum masyarakat, penyuluhan paralegal, dan mediasi sengketa di luar pengadilan. Memiliki komitmen tinggi dalam memberdayakan masyarakat agar sadar dan melek hukum secara mandiri.", 
    foto: "/assets/images/ruangan1.jpg" 
  },
  {
    id: "member-4", 
    nama: "Rian Hidayat, S.Sos.", 
    jabatan: "Sekretaris & Umum", 
    deskripsi: "Rian memiliki pengalaman luas dalam manajemen organisasi organisasi bantuan hukum dan koordinasi kegiatan eksternal. Dedikasinya terhadap pelayanan publik menjadikannya aset berharga bagi tata kelola administrasi LBH SIKAP.", 
    foto: "/assets/images/ruangan2.jpg" 
  },
];
