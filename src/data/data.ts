// src/data/data.ts

// =========================================================================
// 1. STRUKTUR PROTOKOL IDENTITAS WARNA & ASET GAMBAR GLOBAL
// =========================================================================
export interface AsetGambarType {
  bannerUtama: string;
  kantorSekretariat: string;
  logoResmi: string;
  tentangkami: string;
  kontak: string;
  layananBawah: string;
  publikasi: string; 
  dokumentasiKasus: string;
}

export const asetGambar: AsetGambarType = {
  bannerUtama: "/assets/images/ruangan10.jpg",
  kantorSekretariat: "/assets/images/ruangan1.jpg", 
  logoResmi: "/assets/images/logo-lbh.png",
  tentangkami: "/assets/images/ruangan2.jpg",
  kontak: "/assets/images/ruangan.jpg",
  layananBawah: "/assets/images/ruangan.jpg",
  publikasi: "/assets/images/ruangan.jpg",
  dokumentasiKasus: "/assets/images/ruangan.jpg"
};

// =========================================================================
// 2. KONTRAK GLOBAL (INTERFACE) UNTUK TATA KELOLA DATA
// =========================================================================
export interface KontakInfoType {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
  mapsEmbed: string;
}

export interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  color: string;
  gambarKunci: keyof AsetGambarType;
  slugCabang: string; 
}

export interface AnggotaType {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
}

export const kriteriaLayananGlobal = [
  { judul: "Faktor Ekonomi", deskripsi: "Diutamakan bagi masyarakat marjinal/miskin yang dibuktikan dengan melampirkan Surat Keterangan Tidak Mampu (SKTM).", borderLeft: "#09090b" },
  { judul: "Kasus Dimensi Publik", deskripsi: "Kasus atau perkara yang dihadapi berdampak luas bagi komunitas, lingkungan hidup, atau hak-hak dasar kelompok (bukan murni sengketa privat antarelite).", borderLeft: "#4b5563" },
  { judul: "Pembatasan Kasus", deskripsi: "Secara ideologis, LBH SIKAP berkomitmen tidak akan bertindak sebagai pendamping bagi pelaku korupsi maupun pelaku kekerasan seksual.", borderLeft: "#dc2626" }
];

export const kriteriaLayanan = kriteriaLayananGlobal; 

// =========================================================================
// 📞 DATA KONTAK UTAMA (Untuk src/app/kontak/page.tsx)
// =========================================================================
export const kontakInfo: KontakInfoType = {
  alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
  jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
  whatsapp: "+62 819-0615-7620",
  email: "yogyakarta@ylbhsikap.or.id",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m12!1m3!1m2!1s0x2e7a599bdf99bf77%3A0x6bdaaa82d6da8!2sCondongcatur%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
};

// =========================================================================
// 🏢 ZONA A: DATA KHUSUS KANTOR PUSAT ( lbhsikap.org/ )
// =========================================================================
export const dataKantorPusat = {
  info: {
    nama: "ylbh sikap",
    kota: "Yogyakarta",
    alamat: "Jalan Anggajaya I Brojodento.294, Gejayan, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283",
    telepon: "081906157620",
    gmapsUrl: "https://maps.google.com/?cid=ID_MAPS_PUSAT",
    mapsEmbed: "https://maps.google.com/?cid=ID_MAPS_PUSAT",
    jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
    email: "info@ylbhsikap.or.id"
  },
  menu: [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Layanan Hukum", href: "/layanan" },
    { name: "Publikasi", href: "/publikasi" },
  ],
  kriteria: kriteriaLayananGlobal,
  berita: [
    { 
      id: "p1", 
      date: "14 Juni 2026", 
      title: "Pernyataan Sikap Pusat: Menolak Tindakan Represif Terhadap Hak Sipil", 
      excerpt: "LBH SIKAP Pusat mengecam keras segala bentuk tindakan intimidasi dan represi aparat terhadap kebebasan berpendapat di muka umum...", 
      category: "SIARAN PERS", 
      color: "#09090b", 
      gambarKunci: "bannerUtama" as keyof AsetGambarType,
      slugCabang: "pusat" 
    },
    { 
      id: "p2", // Gunakan id unik, misalnya "p2"
      date: "17 Juni 2026", // Tanggal rilis berita
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", // Kategori berita bebas (Contoh: ADVOKASI, OPINI HUKUM, EDUKASI)
      color: "#4b5563", // Warna tema label berita
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, // Mengambil kunci gambar dari asetGambar global
      slugCabang: "pusat" // Wajib diisi "pusat" agar muncul di halaman pertama
    },
    { 
      id: "p3", // Gunakan id unik, misalnya "p2"
      date: "18 Juni 2026", // Tanggal rilis berita
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", // Kategori berita bebas (Contoh: ADVOKASI, OPINI HUKUM, EDUKASI)
      color: "#4b5563", // Warna tema label berita
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, // Mengambil kunci gambar dari asetGambar global
      slugCabang: "pusat" // Wajib diisi "pusat" agar muncul di halaman pertama
    },
    { 
      id: "p4", // Gunakan id unik, misalnya "p2"
      date: "19 Juni 2026", // Tanggal rilis berita
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", // Kategori berita bebas (Contoh: ADVOKASI, OPINI HUKUM, EDUKASI)
      color: "#4b5563", // Warna tema label berita
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, // Mengambil kunci gambar dari asetGambar global
      slugCabang: "pusat" // Wajib diisi "pusat" agar muncul di halaman pertama
    },
    { 
      id: "p5", // Gunakan id unik, misalnya "p2"
      date: "18 Juli 2026", // Tanggal rilis berita
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", // Kategori berita bebas (Contoh: ADVOKASI, OPINI HUKUM, EDUKASI)
      color: "#4b5563", // Warna tema label berita
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, // Mengambil kunci gambar dari asetGambar global
      slugCabang: "pusat" // Wajib diisi "pusat" agar muncul di halaman pertama
    }
  ]
,
  publikasi: [
    { id: "p-doc-1", tag: "AKUNTABILITAS", tagColor: "#09090b", judul: "Laporan Tahunan & Kinerja Pusat (Annual Report)", deskripsi: "Bentuk akuntabilitas LBH SIKAP Pusat kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan nasional.", tombolLabel: "Unduh Laporan Pusat (PDF)", link: "#" }
  ],
  struktur: {
    pimpinan: { nama: "Prof. Dr. Ahmad Sodikin, S.H.", jabatan: "Ketua Dewan Pembina Pusat" },
    direktur: { nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Executif Pusat" },
    divisi: [
      { nama: "Siti Rahma, S.H.", jabatan: "Kepala Divisi Litigasi Nasional" },
      { nama: "Andi Wijaya, S.H.", jabatan: "Kepala Divisi Non-Litigasi Nasional" }
    ]
  },
  anggota: [
    { id: "center-member-1", nama: "Prof. Dr. Ahmad Sodikin, S.H.", jabatan: "Ketua Dewan Pembina", deskripsi: "Memimpin perumusan kebijakan strategis bantuan hukum nasional LBH SIKAP.", foto: "/assets/images/ruangan10.jpg" }
  ]
};

// =========================================================================
// 🏢 DATABASE NASIONAL TERPUSAT (Satu Sumber Data Berita untuk Semua)
// =========================================================================
export const databaseArtikelNasional: Berita[] = [
  { 
    id: "y1", 
    date: "14 Juni 2026", 
    title: "Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil", 
    excerpt: "LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi dan represi aparat terhadap kebebasan berpendapat di muka umum...", 
    category: "SIARAN PERS", 
    color: "#09090b", 
    gambarKunci: "bannerUtama",
    slugCabang: "yogyakarta"
  },
  { 
    id: "y2", 
    date: "28 Mei 2026", 
    title: "Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana", 
    excerpt: "Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan bantuan hukum di akar rumput demi menjamin akses keadilan yang merata...", 
    category: "OPINI HUKUM", 
    color: "#4b5563", 
    gambarKunci: "kantorSekretariat",
    slugCabang: "yogyakarta"
  },
  { 
    id: "y3", 
    date: "12 April 2026", 
    title: "Catatan Krisis: Laporan Pemetaan Sengketa Tanah", 
    excerpt: "Hasil riset kolaboratif mengenai potret buram sengketa agraria, tumpang tindih regulasi pertanahan, serta dampaknya terhadap hak ruang hidup warga...", 
    category: "RISET & DATA", 
    color: "#9ca3af", 
    gambarKunci: "dokumentasiKasus",
    slugCabang: "yogyakarta"
  },
  { 
    id: "berita-bdg-1", 
    date: "15 Juni 2026", 
    title: "Advokasi Buruh Pabrik Terkait Hak Upah Lembur", 
    excerpt: "LBH SIKAP Bandung memberikan pendampingan hukum struktural bagi 50 buruh...", 
    category: "ADVOKASI", 
    color: "#4b5563", 
    gambarKunci: "dokumentasiKasus",
    slugCabang: "bandung"
  }
];

// =========================================================================
// 🗺️ ZONA B: DATA KOLEKTIF SELURUH CABANG DINAMIS ( lbhsikap.org/[cabang] )
// =========================================================================
export const dataSeluruhCabang: Record<string, {
  info: { nama: string; kota: string; alamat: string; telepon: string; email: string; jamOperasional: string; direktur: string; mapsEmbed: string };
  kriteria: typeof kriteriaLayananGlobal;
  berita: Berita[]; 
  publikasi: typeof dataKantorPusat.publikasi;
  
  sectionBackup: {
    pers: Array<{ id: string; date: string; title: string; excerpt: string }>;
    edukasi: Array<{ id: string; title: string; excerpt: string }>;
  };
  
  struktur: {
    pimpinan: { nama: string; jabatan: string };
    direktur: { nama: string; jabatan: string };
    divisi: Array<{ nama: string; jabatan: string }>;
  };
  
  anggota: AnggotaType[];
  posbakum: Array<{ id: string; nama: string; kelurahan: string; kapanewon: string; alamat: string; telepon: string; gmapsUrl: string; latitude: number; longitude: number }>;
}> = {
  
  // 📍 1. CABANG YOGYAKARTA
  yogyakarta: {
    info: {
      nama: "LBH SIKAP Cabang Yogyakarta",
      kota: "Yogyakarta",
      alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "081906157620",
      email: "yogyakarta@ylbhsikap.or.id",
      direktur: "Wandy Marseli, S.H.",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m12!1m3!1m2!1s0x2e7a599bdf99bf77%3A0x6bdaaa82d6da8!2sCondongcatur%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
    },
    kriteria: kriteriaLayananGlobal,
    berita: databaseArtikelNasional.filter(art => art.slugCabang === "yogyakarta"),
    publikasi: [
      { id: "doc-1", tag: "AKUNTABILITAS", tagColor: "#09090b", judul: "Laporan Tahunan & Kinerja (Annual Report)", deskripsi: "Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.", tombolLabel: "Unduh Laporan Tahunan (PDF)", link: "#" },
      { id: "doc-2", tag: "EDUKASI PUBLIK", tagColor: "#4b5563", judul: "Kertas Kebijakan & Modul Paralegal", deskripsi: "Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.", tombolLabel: "Buka Berkas Modul", link: "#" }
    ],
    sectionBackup: {
      pers: [
        { id: "pers-1", date: "12 Juni 2026", title: "Desakan Hentikan Intimidasi Warga", excerpt: "Ringkasan rilis pers terbaru mengenai situasi eskalasi konflik di lapangan..." }
      ],
      edukasi: [
        { id: "edu-1", title: "Klinik Hukum Gratis", excerpt: "Jadwal konsultasi mingguan tatap muka langsung di sekretariat LBH SIKAP." }
      ]
    },
    struktur: {
      pimpinan: { nama: "Prof. Dr. Ahmad Sodikin, S.H.", jabatan: "Ketua Dewan Pembina" },
      direktur: { nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Eksekutif" },
      divisi: [
        { nama: "Siti Rahma, S.H.", jabatan: "Kepala Divisi Litigasi" }
      ]
    },
    anggota: [
      { id: "member-1", nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Executif", deskripsi: "Pengalaman di bidang advokasi hukum publik...", foto: "/assets/images/ruangan10.jpg" }
    ],
    posbakum: [
      { id: "posbakum-cabang-yogyakarta", nama: "LBH SIKAP Cabang Yogyakarta", kelurahan: "Condongcatur", kapanewon: "Depok", alamat: "Jl. Malioboro No. 45", telepon: "0274-567890", gmapsUrl: "#", latitude: 0, longitude: 0 }
    ]
  },

  // 📍 2. TEMPLATE CARA MENAMBAHKAN CABANG BARU YANG SAH SECARA TYPESCRIPT (Contoh: Purwokerto)
  purwokerto: {
    info: {
      nama: "LBH SIKAP Cabang Purwokerto",
      kota: "Purwokerto",
      alamat: "Jl. Jenderal Sudirman No. 45, Purwokerto, Jawa Tengah",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "purwokerto@ylbhsikap.or.id",
      direktur: "Faishal Ammar Dwi Wijaya, S.H.",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  },

   balikpapn: {
    info: {
      nama: "LBH SIKAP Cabang Balikpapan",
      kota: "Balikpapan",
      alamat: "Jl. Jenderal Sudirman No. 45, Balikpapan, Kalimantan Timur",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "balikpapan@ylbhsikap.or.id",
      direktur: "Eben Marwi",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  },

  samarinda: {
    info: {
      nama: "LBH SIKAP Cabang Samarinda",
      kota: "Samarinda",
      alamat: "Jl. Jenderal Sudirman No. 45, Samarinda, Kalimantan Timur",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "samarinda@ylbhsikap.or.id",
      direktur: "Budi Santoso, S.H., M.H.",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  },
  banten: {
    info: {
      nama: "LBH SIKAP Cabang Banten",
      kota: "Banten",
      alamat: "Jl. Jenderal Sudirman No. 45, Banten, Banten",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "banten@ylbhsikap.or.id",
      direktur: "Budi Santoso, S.H., M.H.",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  },
  ciamis: {
    info: {
      nama: "LBH SIKAP Cabang Ciamis",
      kota: "Ciamis",
      alamat: "Jl. Jenderal Sudirman No. 45, Ciamis, Jawa Barat",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "ciamis@ylbhsikap.or.id",
      direktur: "Budi Santoso, S.H., M.H.",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  },
  madura: {
    info: {
      nama: "LBH SIKAP Cabang Madura",
      kota: "Madura",
      alamat: "Jl. Jenderal Sudirman No. 45, Madura, Jawa Timur",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "madura@ylbhsikap.or.id",
      direktur: "Budi Santoso, S.H., M.H.",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal, // Menggunakan kriteria global biar tidak kosong
    berita: [], // Boleh dikosongkan menggunakan array kosong
    publikasi: [], 
    sectionBackup: {
      pers: [],
      edukasi: []
    },
    struktur: {
      pimpinan: { nama: "Dalam Persiapan", jabatan: "Ketua Pembina" },
      direktur: { nama: "Dalam Persiapan", jabatan: "Direktur Cabang" },
      divisi: []
    },
    anggota: [],
    posbakum: []
  }
};

export const prosedurLayanan = [
  { step: "01", title: "Menyiapkan Dokumen Persyaratan", desc: "Pemohon wajib menyiapkan fotokopi KTP, KK, dokumen bukti tidak mampu seperti SKTM atau kartu jaminan sosial, serta berkas pendukung yang berkaitan dengan kasus hukumnya." },
  { step: "02", title: "Mendatangi Kantor LBH Terakreditasi", desc: "Pemohon mendatangi langsung kantor OBH atau LBH terdekat yang statusnya telah resmi terakreditasi oleh Kementerian Hukum dan HAM.." },
  { step: "03", title: "Mengajukan Permohonan dan Kronologis", desc: "Memberikan pendampingan hukum sesuai kebutuhan, baik litigasi maupun non-litigasi." },
  { step: "04", title: "Pemeriksaan Administrasi dan Kelayakan Kasus", desc: "Pihak OBH/LBH akan memverifikasi keabsahan dokumen persyaratan dan menganalisis kelayakan kasus hukum tersebut dalam waktu maksimal tiga hari kerja.." },
  { step: "05", title: " Pengambilan Keputusan dan Penandatanganan Kuasa", desc: "Apabila permohonan disetujui, pemohon akan menandatangani Surat Kuasa Khusus agar tim advokat lembaga tersebut dapat bertindak sebagai pendamping hukum resminya.." },
  { step: "06", title: "Pelaksanaan Bantuan Hukum Gratis", desc: "Tim OBH/LBH akan memberikan pendampingan hukum penuh secara gratis, baik melalui jalur persidangan (litigasi) maupun penyelesaian di luar pengadilan (non-litigasi)." }
];

// =========================================================================
// 🚀 BACKUP VARIABLE & FALLBACK COMPATIBILITY (Mencegah Breaking Error)
// =========================================================================
export const kumpulanBeritaNasional = databaseArtikelNasional; 
export const BerandaData = dataKantorPusat.berita;
export const publikasiData = databaseArtikelNasional;
export const publikasiDokumen = dataKantorPusat.publikasi;

export const sectionData = dataSeluruhCabang.yogyakarta.sectionBackup;
export const strukturOrganisasi = dataSeluruhCabang.yogyakarta.struktur;
export const daftarAnggota = dataSeluruhCabang.yogyakarta.anggota;
export const daftarPosbakum = dataSeluruhCabang.yogyakarta.posbakum;