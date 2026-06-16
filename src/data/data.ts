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
  layananBawah: "/assets/images/ruangan10.jpg",
  publikasi: "/assets/images/ruangan10.jpg",
  dokumentasiKasus: "/assets/images/ruangan10.jpg"
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
  slugCabang: string; // 🌟 Disatukan di sini sebagai kunci pelacakan rute sub-folder dinamis
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

export const kriteriaLayanan = kriteriaLayananGlobal; // Fallback jika komponen lama memanggil variabel ini

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
    nama: "LBH SIKAP Pusat",
    kota: "Jakarta",
    alamat: "Jl. Utama No. 12, Kav 3, Kota Jakarta",
    telepon: "021-1234567",
    gmapsUrl: "https://maps.google.com/?cid=ID_MAPS_PUSAT",
    mapsEmbed: "https://maps.google.com/?cid=ID_MAPS_PUSAT",
    jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
    email: "pusat@ylbhsikap.or.id"
  },
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
    }
  ],
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
  info: { nama: string; kota: string; alamat: string; telepon: string; email: string; jamOperasional: string; mapsEmbed: string };
  kriteria: typeof kriteriaLayananGlobal;
  berita: Berita[]; // Menunjuk ke struktur terpadu
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
  
  // 📍 1. CABANG YOGYAKARTA (Sub-folder: /yogyakarta)
  yogyakarta: {
    info: {
      nama: "LBH SIKAP Cabang Yogyakarta",
      kota: "Yogyakarta",
      alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
      jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
      telepon: "081906157620",
      email: "yogyakarta@ylbhsikap.or.id",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m12!1m3!1m2!1s0x2e7a599bdf99bf77%3A0x6bdaaa82d6da8!2sCondongcatur%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
    },
    kriteria: kriteriaLayananGlobal,
    // Di-filter otomatis dari database terpusat untuk efisiensi instansiasi awal
    berita: databaseArtikelNasional.filter(art => art.slugCabang === "yogyakarta"),
    publikasi: [
      { id: "doc-1", tag: "AKUNTABILITAS", tagColor: "#09090b", judul: "Laporan Tahunan & Kinerja (Annual Report)", deskripsi: "Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.", tombolLabel: "Unduh Laporan Tahunan (PDF)", link: "#" },
      { id: "doc-2", tag: "EDUKASI PUBLIK", tagColor: "#4b5563", judul: "Kertas Kebijakan & Modul Paralegal", deskripsi: "Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.", tombolLabel: "Buka Berkas Modul", link: "#" }
    ],
    sectionBackup: {
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
    },
    struktur: {
      pimpinan: { nama: "Prof. Dr. Ahmad Sodikin, S.H.", jabatan: "Ketua Dewan Pembina" },
      direktur: { nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Eksekutif" },
      divisi: [
        { nama: "Siti Rahma, S.H.", jabatan: "Kepala Divisi Litigasi" },
        { nama: "Andi Wijaya, S.H.", jabatan: "Kepala Divisi Non-Litigasi" },
        { nama: "Rian Hidayat, S.Sos.", jabatan: "Sekretaris & Umum" }
      ]
    },
    anggota: [
      { id: "member-1", nama: "Budi Santoso, S.H., M.H.", jabatan: "Direktur Executif", deskripsi: "Budi Santoso memiliki pengalaman lebih dari 15 tahun di bidang advokasi hukum publik dan penanganan hak asasi manusia. Menyelesaikan studi magister hukum di Universitas Gadjah Mada, beliau aktif memimpin reformasi bantuan hukum gratis bagi masyarakat marjinal di Yogyakarta.", foto: "/assets/images/ruangan10.jpg" },
      { id: "member-2", nama: "Siti Rahma, S.H.", jabatan: "Kepala Divisi Litigasi", deskripsi: "Siti berspesialisasi dalam hukum pidana dan perlindungan perempuan & anak. Rekam jejaknya mencakup penyelesaian berbagai kasus struktural besar. Dedikasinya terhadap keadilan menjadikannya pilar utama dalam pergerakan bantuan hukum di LBH SIKAP.", foto: "/assets/images/ruangan3.jpg" },
      { id: "member-3", nama: "Andi Wijaya, S.H.", jabatan: "Kepala Divisi Non-Litigasi", deskripsi: "Andi fokus pada edukasi hukum masyarakat, penyuluhan paralegal, dan mediasi sengketa di luar pengadilan. Memiliki komitmen tinggi dalam memberdayakan masyarakat agar sadar dan melek hukum secara mandiri.", foto: "/assets/images/ruangan1.jpg" },
      { id: "member-4", nama: "Rian Hidayat, S.Sos.", jabatan: "Sekretaris & Umum", deskripsi: "Rian memiliki pengalaman luas dalam manajemen organisasi organisasi bantuan hukum and koordinasi kegiatan eksternal. Dedikasinya terhadap pelayanan publik menjadikannya aset berharga bagi tata kelola administrasi LBH SIKAP.", foto: "/assets/images/ruangan2.jpg" }
    ],
    posbakum: [
      {
        id: "posbakum-cabang-yogyakarta",
        nama: "LBH SIKAP Cabang Yogyakarta (Kantor Utama)",
        kelurahan: "Condongcatur",
        kapanewon: "Depok",
        alamat: "Jl. Malioboro No. 45, Yogyakarta",
        telepon: "0274-567890",
        gmapsUrl: "https://maps.google.com/?cid=ID_MAPS_YOGYAKARTA",
        latitude: -7.7956,
        longitude: 110.3695
      }
    ]
  }
};

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