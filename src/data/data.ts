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
  pks: string;
}

export const asetGambar: AsetGambarType = {
  bannerUtama: "/assets/images/ruangan10.jpg",
  kantorSekretariat: "/assets/images/ruangan1.jpg", 
  logoResmi: "/assets/images/logo-lbh.png",
  tentangkami: "/assets/images/ruangan2.jpg",
  kontak: "/assets/images/ruangan.jpg",
  layananBawah: "/assets/images/ruangan.jpg",
  publikasi: "/assets/images/ruangan.jpg",
  dokumentasiKasus: "/assets/images/pkslembata.jpg",
  pks: "/assets/images/pkslembata.jpg",
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

// PEMBARUAN: Ditambahkan noHp, email, dan slugCabang sesuai kebutuhan LBH SIKAP
export interface AnggotaType {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string; // Bertindak sebagai riwayat / bio singkat
  foto: string;
  noHp: string;
  email: string;
  slugCabang: string; // Kategori cabang advokat (pusat, yogyakarta, ciamis, dll)
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
      id: "p2", 
      date: "17 Juni 2026", 
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", 
      color: "#4b5563", 
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, 
      slugCabang: "pusat" 
    },
    { 
      id: "p3", 
      date: "18 Juni 2026", 
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", 
      color: "#4b5563", 
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, 
      slugCabang: "pusat" 
    },
    { 
      id: "p4", 
      date: "19 Juni 2026", 
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", 
      color: "#4b5563", 
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, 
      slugCabang: "pusat" 
    },
    { 
      id: "p5", 
      date: "18 Juli 2026", 
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", 
      color: "#4b5563", 
      gambarKunci: "kantorSekretariat" as keyof AsetGambarType, 
      slugCabang: "pusat" 
    }
  ],
  publikasi: [
    { id: "p-doc-1", tag: "AKUNTABILITAS", tagColor: "#09090b", judul: "Laporan Tahunan & Kinerja Pusat (Annual Report)", deskripsi: "Bentuk akuntabilitas LBH SIKAP Pusat kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan nasional.", tombolLabel: "Unduh Laporan Pusat (PDF)", link: "#" }
  ],
  struktur: {
  pembina: {
    ketua: "Prof. Dr. Ahmad Sodikin, S.H.",
    anggota1: "Nama Anggota 1",
    anggota2: "BUDIMAN",
    anggota3: "ARIS SUSTIYONO",
    anggota4: "ESTI WIJAYATI",
  },
  pengurus: {
    ketua: "MOHAMMAD YUSUP, S.H., M.H.",
    sekretaris: "DETKRI BADHIRON, S.H.",
    bendahara: "BUDI WANDANI, S.H.",
  },
  pengawas: {
    ketua: "KIRNADI",
  }
  },
  anggota: [
    { 
      id: "center-member-1", 
      nama: "Prof. Dr. Ahmad Sodikin, S.H.", 
      jabatan: "Ketua Dewan Pembina Pusat", 
      deskripsi: "Pakar hukum tata negara senior lulusan UI. Berpengalaman lebih dari 25 tahun dalam merumuskan kebijakan strategis serta arah advokasi gerakan bantuan hukum struktural di Indonesia.", 
      foto: "/assets/images/ruangan10.jpg",
      noHp: "0811-2233-4455",
      email: "ahmad.sodikin@ylbhsikap.or.id",
      slugCabang: "pusat"
    },
    { 
      id: "center-member-2", 
      nama: "Budi Santoso, S.H., M.H.", 
      jabatan: "Direktur Eksekutif Pusat", 
      deskripsi: "Aktif memimpin operasional taktis jaringan nasional LBH SIKAP. Spesialisasi penanganan kasus korupsi struktural, agraria, dan pendampingan masyarakat adat.", 
      foto: "/assets/images/ruangan1.jpg",
      noHp: "0812-5566-7788",
      email: "budi.santoso@ylbhsikap.or.id",
      slugCabang: "pusat"
    }
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
    id: "berita-pwt-1", 
    date: "15 Juni 2026", 
    title: "Advokasi Buruh Pabrik Terkait Hak Upah Lembur", 
    excerpt: "LBH SIKAP Purwokerto memberikan pendampingan hukum struktural bagi 50 buruh...", 
    category: "ADVOKASI", 
    color: "#4b5563", 
    gambarKunci: "dokumentasiKasus",
    slugCabang: "purwokerto"
  },
  { 
    id: "berita-balikpapan-1", 
    date: "15 Juni 2026", 
    title: "Advokasi Buruh Pabrik Terkait Hak Upah Lembur", 
    excerpt: "LBH SIKAP Balikpapan memberikan pendampingan hukum struktural bagi 50 buruh...", 
    category: "ADVOKASI", 
    color: "#4b5563", 
    gambarKunci: "dokumentasiKasus",
    slugCabang: "balikpapan"
  },
  { 
    id: "berita-lembata-1", 
    date: "15 21 2026", 
    title: "PKS Posabnkum LBH SIKAP Lembata dengan Pengadilan Negeri Lembata 2026-2027", 
    excerpt: "LBH SIKAP Balikpapan memberikan pendampingan hukum struktural bagi 50 buruh...", 
    category: "MoU", 
    color: "#4b5563", 
    gambarKunci: "dokumentasiKasus",
    slugCabang: "lembata"
  }
];

// =========================================================================
// 🗺️ ZONA B: DATA KOLEKTIF SELURUH CABANG DINAMIS ( lbhsikap.org/[cabang] )
// =========================================================================
export const dataSeluruhCabang: Record<string, {
  info: { nama: string; kota: string; alamat: string; telepon: string; email: string; jamOperasional: string; direktur: string; mapsEmbed: string; bannerCabang?: string };
  kriteria: typeof kriteriaLayananGlobal;
  berita: Berita[]; 
  publikasi: typeof dataKantorPusat.publikasi;
  
  sectionBackup: {
    pers: Array<{ id: string; date: string; title: string; excerpt: string }>;
    edukasi: Array<{ id: string; title: string; excerpt: string }>;
  };
  
  struktur: {
    pembina: { ketua: string };
    pengurus: { direktur: string; sekretaris: string; bendahara: string };
    bidang: {
      litigasi: { kepala: string; sub_bidang: { pidana: string; perdata: string; phi: string } };
      non_litigasi: { kepala: string };
    };
  };
  
  anggota: AnggotaType[];
  posbakum: Array<{ id: string; nama: string; kelurahan: string; kapanewon: string; alamat: string; telepon: string; gmapsUrl: string; latitude: number; longitude: number }>;
}> = {
  
  // 📍 1. CABANG YOGYAKARTA
  yogyakarta: {
    info: {
      nama: "LBH SIKAP Yogyakarta",
      kota: "Yogyakarta",
      alamat: "Jalan Anggajaya I Brojodento.294, Gejayan, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "082322278670",
      email: "yogyakarta@ylbhsikap.or.id",
      direktur: "Wandy Marseli, S.H.",
      bannerCabang: "/assets/images/ruangan10.jpg",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.310898300753!2d110.39374337573301!3d-7.756813776921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a6cc94c5f7%3A0x86660a3450d13952!2sLBH%20SIKAP%20Yogyakarta%20-%20Lembaga%20Bantuan%20Hukum%20%26%20Studi%20Kebijakan%20Publik!5e0!3m2!1sid!2sid!4v1781786623142!5m2!1sid!2sid"
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
      pembina: {
        ketua: "Mohamad Yusup, S.H.",
      },
      pengurus: {
        direktur: "Wandy Marseli, S.H.",
        sekretaris: "Rudiarianto Radjanggolo, S.H.", // Ganti sesuai nama
        bendahara: "Titis A.K Wardani, S.H.",   // Ganti sesuai nama
      },
      bidang: {
        litigasi: {
          kepala: "Siti Rahma, S.H.",
          sub_bidang: {
            pidana: "",
            perdata: "Zulfadli Harahap, S.H.",
            phi: "Kirnadi",
          }
        },
        non_litigasi: {
          kepala: "Nama Kepala Bidang",
        }
      }
},
    anggota: [
      { 
        id: "ygy-member-1", 
        nama: "Wandy Marseli, S.H.", 
        jabatan: "Direktur Cabang", 
        deskripsi: "Pakar litigasi pidana umum dan perdata yang berkomitmen mengawal isu kebebasan berpendapat di DIY. Mengabdi di gerakan pro-bono sejak tahun 2017.", 
        foto: "/assets/images/ruangan10.jpg",
        noHp: "0819-0615-7620",
        email: "wandy.m@ylbhsikap.or.id",
        slugCabang: "yogyakarta"
      },
      { 
        id: "ygy-member-2", 
        nama: "Rian Hidayat, S.H.", 
        jabatan: "Advokat Publik", 
        deskripsi: "Berfokus pada pembelaan hak buruh, ketenagakerjaan, serta pendampingan komunitas marjinal perkotaan dalam sengketa ruang hidup.", 
        foto: "/assets/images/ruangan.jpg",
        noHp: "0812-8899-1122",
        email: "rian.hidayat@ylbhsikap.or.id",
        slugCabang: "yogyakarta"
      },
      { 
        id: "ygy-member-3", 
        nama: "Laila Sari", 
        jabatan: "Paralegal Struktural", 
        deskripsi: "Aktif melakukan penyuluhan hukum gratis ke pelosok desa di Sleman dan Bantul serta mengorganisir pos aduan rakyat.", 
        foto: "/assets/images/ruangan2.jpg",
        noHp: "0857-4433-2211",
        email: "laila.sari@ylbhsikap.or.id",
        slugCabang: "yogyakarta"
      }
    ],
    posbakum: [
      { 
        id: "posbakum-cabang-yogyakarta", 
        nama: "Kalurahan Terong", 
        kelurahan: "Dlingo", 
        kapanewon: "Bantul", 
        alamat: "Jl. Patuk - Dlingo No.Km 6,5, Terong II, Dlingo, Kec. Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55783", 
        telepon: "081906157620", 
        gmapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9174.263964646781!2d110.44972641172471!3d-7.89233839102032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5300789e3e0b%3A0x4db339af4392bf64!2sPOSBANKUM%20Kalurahan%20Terong%20%E2%80%93%20Mitra%20LBH%20SIKAP%20Yogyakarta!5e0!3m2!1sid!2sid!4v1781784751672!5m2!1sid!2sid", 
        latitude: -7.8923384, 
        longitude: 110.4497264 
      },
      {
        id: "posbakum-yogyakarta-condongcatur",
        nama: "Kalurahan condongcatur",
        kelurahan: "condongcatur",
        kapanewon: "Depok",
        alamat: "Jl. Affandi No.1, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        telepon: "082322278670",
        gmapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3053162520814!2d110.39378307573301!3d-7.75740767692885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a6cb7228c3%3A0x8d80365e4b211fbf!2sPemerintah%20Kalurahan%20Condongcatur!5e0!3m2!1sid!2sid!4v1781785454847!5m2!1sid!2sid",
        latitude: -7.7573518,
        longitude: 110.3960006,
      },
      {
        id: "posbakum-yogyakarta-temuwuh",
        nama: "Kalurahan temuwuh",
        kelurahan: "temuwuh",
        kapanewon: "dlingo",
        alamat: "3FF9+F58, Temuwuh, Kec. Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55783",
        telepon: "082322278670",
        gmapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.700492312387!2d110.46550777557468!3d-7.926318386767228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a530008c1e7ff%3A0xc608acdd11c3d93a!2sPOSBANKUM%20KALURAHAN%20TEMUWUH%20(LBH%20SIKAP)!5e0!3m2!1sid!2sid!4v1781785504882!5m2!1sid!2sid",
        latitude: -7.926329,
        longitude: 110.4655078,
      }
    ],
  },

  // 📍 2. CABANG PURWOKERTO
  purwokerto: {
    info: {
      nama: "LBH SIKAP Purwokerto",
      kota: "Purwokerto",
      alamat: "Jl. Jenderal Sudirman No. 45, Purwokerto, Jawa Tengah",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "purwokerto@ylbhsikap.or.id",
      direktur: "Rahman, S.H.",
      bannerCabang: "/assets/images/ruangan.jpg",
      mapsEmbed: ""
    },
    kriteria: kriteriaLayananGlobal,
    berita: databaseArtikelNasional.filter(art => art.slugCabang === "purwokerto"),
    publikasi: [], 
    sectionBackup: { pers: [], edukasi: [] },
    struktur: {
      pembina: {
        ketua: "Wandy Marseli",
      },
      pengurus: {
        direktur: "Wandy Marseli, S.H.",
        sekretaris: "Nama Sekretaris", // Ganti sesuai nama
        bendahara: "Nama Bendahara",   // Ganti sesuai nama
      },
      bidang: {
        litigasi: {
          kepala: "Siti Rahma, S.H.",
          sub_bidang: {
            pidana: "Nama Penanggung Jawab",
            perdata: "Nama Penanggung Jawab",
            phi: "Nama Penanggung Jawab",
          }
        },
        non_litigasi: {
          kepala: "Nama Kepala Bidang",
        }
      }
    },
    anggota: [
      {
        id: "pwt-member-1",
        nama: "Faishal Ammar Dwi Wijaya, S.H.",
        jabatan: "Direktur Cabang Purwokerto",
        deskripsi: "Berdedikasi dalam menangani advokasi sengketa tanah pertanian rakyat dan edukasi perlindungan konsumen di eks-Karesidenan Banyumas.",
        foto: "/assets/images/ruangan.jpg",
        noHp: "0813-9900-1122",
        email: "rahman@ylbhsikap.or.id",
        slugCabang: "purwokerto"
      },
      {
        id: "pwt-member-2",
        nama: "Eko Saputra, S.H.",
        jabatan: "Advokat Publik",
        deskripsi: "Spesialis hukum perdata keluarga miskin dan jaminan kesehatan sosial rakyat marjinal.",
        foto: "/assets/images/ruangan1.jpg",
        noHp: "0821-3344-5566",
        email: "eko.s@ylbhsikap.or.id",
        slugCabang: "purwokerto"
      }
    ],
    posbakum: []
  },

  // 📍 3. CABANG BALIKPAPAN
  balikpapn: {
    info: {
      nama: "LBH SIKAP Balikpapan",
      kota: "Balikpapan",
      alamat: "Jl. Jenderal Sudirman No. 45, Balikpapan, Kalimantan Timur",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0281-635xxx",
      email: "balikpapan@ylbhsikap.or.id",
      direktur: "Eben Marwi",
      bannerCabang: "/assets/images/ruangan1.jpg",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8966655342424!2d116.85643727567279!3d-1.2315543355702074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14700558e9ed3%3A0x3bc17f7798283526!2sLBH%20SIKAP%20Balikpapan!5e0!3m2!1sid!2sid!4v1781786764791!5m2!1sid!2sid"
    },
    kriteria: kriteriaLayananGlobal,
    berita: databaseArtikelNasional.filter(art => art.slugCabang === "balikpapan"),
    publikasi: [], 
    sectionBackup: { pers: [], edukasi: [] },
    struktur: {
      pembina: {
        ketua: "Wandy Marseli",
      },
      pengurus: {
        direktur: "Wandy Marseli, S.H.",
        sekretaris: "Nama Sekretaris", // Ganti sesuai nama
        bendahara: "Nama Bendahara",   // Ganti sesuai nama
      },
      bidang: {
        litigasi: {
          kepala: "Siti Rahma, S.H.",
          sub_bidang: {
            pidana: "Nama Penanggung Jawab",
            perdata: "Nama Penanggung Jawab",
            phi: "Nama Penanggung Jawab",
          }
        },
        non_litigasi: {
          kepala: "Nama Kepala Bidang",
        }
      }
    },
    anggota: [
      {
        id: "bpp-member-1",
        nama: "Eben Marwi",
        jabatan: "Direktur Cabang Balikpapan",
        deskripsi: "Tokoh pejuang keadilan lingkungan hidup di Kalimantan Timur, fokus mendampingi nelayan tradisional dan komunitas adat pesisir.",
        foto: "/assets/images/ruangan1.jpg",
        noHp: "0811-7788-9900",
        email: "eben.marwi@ylbhsikap.or.id",
        slugCabang: "balikpapn"
      }
    ],
    posbakum: []
  },
  // 📍 3. CABANG LEMBATA
  lembata: {
    info: {
      nama: "LBH SIKAP lembata",
      kota: "Lembata",
      alamat: "Dekat cwc, pegadaian lembata, Selandoro, Kec. Nubatukan, Kab. Lembata, Nusa Tenggara Timur 86611",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "0813-9380-8277",
      email: "lembata@ylbhsikap.or.id",
      direktur: "Juprians Lambabelawa, S.H., M.H.",
      bannerCabang: "/assets/images/bannerlembata.jpg",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.310924522287!2d123.43736507574114!3d-8.371044584393282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dab0d00774d64b5%3A0x3f2255b4622bcccd!2sKIOS%20IRWANA!5e0!3m2!1sid!2sid!4v1782043559040!5m2!1sid!2sid" 
    },
    kriteria: kriteriaLayananGlobal,
    berita: databaseArtikelNasional.filter(art => art.slugCabang === "lembata"),
    publikasi: [
      { id: "doc-3", tag: "AKUNTABILITAS", tagColor: "#09090b", judul: "Laporan Tahunan & Kinerja (Annual Report)", deskripsi: "Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.", tombolLabel: "Unduh Laporan Tahunan (PDF)", link: "#" },
      { id: "doc-4", tag: "EDUKASI PUBLIK", tagColor: "#4b5563", judul: "Kertas Kebijakan & Modul Paralegal", deskripsi: "Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.", tombolLabel: "Buka Berkas Modul", link: "#" }
    ], 
    sectionBackup: { pers: [], edukasi: [] },
    struktur: {
      pembina: {
        ketua: "-",
      },
      pengurus: {
        direktur: "Juprians Lambabelawa, S.H., M.H.",
        sekretaris: "Nama Sekretaris", // Ganti sesuai nama
        bendahara: "Nama Bendahara",   // Ganti sesuai nama
      },
      bidang: {
        litigasi: {
          kepala: "Siti Rahma, S.H.",
          sub_bidang: {
            pidana: "Nama Penanggung Jawab",
            perdata: "Nama Penanggung Jawab",
            phi: "Nama Penanggung Jawab",
          }
        },
        non_litigasi: {
          kepala: "Nama Kepala Bidang",
        }
      }
    },
    anggota: [
      {
        id: "bpp-member-1",
        nama: "Juprians Lambabelawa, S.H., M.H.",
        jabatan: "Direktur Cabang Lembata",
        deskripsi: "Tokoh pejuang keadilan lingkungan hidup di Kalimantan Timur, fokus mendampingi nelayan tradisional dan komunitas adat pesisir.",
        foto: "/assets/images/ruangan1.jpg",
        noHp: "0811-7788-9900",
        email: "juprian.lamabelawa@ylbhsikap.or.id",
        slugCabang: "lembata"
      }
    ],
    posbakum: []
  },
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