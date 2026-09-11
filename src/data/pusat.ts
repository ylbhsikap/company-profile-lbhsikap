import { AsetGambarType, LowonganKarir, kriteriaLayananGlobal } from "./globals";

export const dataKantorPusat = {
  info: {
    nama: "ylbh sikap",
    kota: "Yogyakarta",
    alamat: "Jalan Anggajaya I Brojodento.294, Gejayan, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283",
    telepon: "-",
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
    { name: "Mitra", href: "/mitra" },
    { name: "Karir", href: "/karir" },
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
      gambarKunci: "demo" as keyof AsetGambarType,
      slugCabang: "pusat" 
    },
    { 
      id: "p2", 
      date: "17 Juni 2026", 
      title: "LBH SIKAP Pusat Selenggarakan Pelatihan Paralegal Tingkat Nasional", 
      excerpt: "Dalam rangka memperkuat jaringan bantuan hukum di akar rumput, LBH SIKAP Pusat resmi membuka pendaftaran pelatihan paralegal struktural...", 
      category: "EDUKASI", 
      color: "#4b5563", 
      gambarKunci: "penyuluhan" as keyof AsetGambarType, 
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
  mitra: [
    {
     id: "mitra-pusat-1",
      nama: "PT Our Play Indonesia (OPLAY.ID)",
      bidangTeknologi: "Legal Tech",
      deskripsi: "Penyedia infrastruktur web & cloud terenkripsi tingkat tinggi serta proteksi data arsip hukum.",
      logo: "/assets/mitra/oplayid.png",
      websiteUrl: "https://oplay.id",
      statusKemitraan: "Primary Digital Infrastructure"
    },
  ],
  instansiMitra: [
    { id: "inst-1", nama: "Kemenkumham RI", logo: "/assets/mitra/kemenkumham.jpg", websiteUrl: "https://kemenkum.go.id" },
    { id: "inst-2", nama: "BPHN", logo: "/assets/mitra/bphn.png", websiteUrl: "https://bphn.go.id" },
    { id: "inst-3", nama: "kalurahan Terong", logo: "/assets/mitra/kalurahanterong.png", websiteUrl: "https://terong-bantul.desa.id" },
    { id: "inst-4", nama: "pemda sleman", logo: "/assets/mitra/pemdasleman.webp", websiteUrl: "https://slemankab.go.id"},
    { id: "inst-5", nama: "UIN Kalijaga Yogyakarta", logo: "/assets/mitra/uinjogja.png", websiteUrl: "https://uin-suka.ac.id"},
    { id: "inst-6", nama: "pemda kota jogja", logo: "/assets/mitra/pemdakotajogja.png", websiteUrl: "https://jogjakota.go.id"},
    { id: "inst-7", nama: "pemda bantul", logo: "/assets/mitra/pemdabantul.png", websiteUrl: "https://bantulkab.go.id/beranda.html"},
  ],
  struktur: {
    pembina: {
      ketua: "WIDIHASTO WASONO PUTRO",
      anggota1: "ARIS SUSTIYONO",
      anggota2: "ESTI WIJAYATI",
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

export const dataKarir: LowonganKarir[] = [
  {
    id: "karir-001",
    judul: "Program Magang Mahasiswa (Mitra IT & Bisnis)",
    kategori: "Magang Mahasiswa",
    deskripsi: "Program kolaborasi antara LBH SIKAP dengan mitra strategis untuk pengembangan digital dan operasional.",
    kualifikasi: ["Mahasiswa aktif tingkat akhir", "Memiliki integritas tinggi", "Tertarik pada isu bantuan hukum"],
    isProgramMitra: true,
    mitraTarget: "OPLAY.ID",
    backgroundKeahlian: ["(IT)", "Bisnis Ekonomi"],
    penempatan: "LBH SIKAP Yogyakarta",
    deadline: "2026-12-31"
  },
  {
    id: "karir-002",
    judul: "Advokat Magang",
    kategori: "Advokat Magang",
    deskripsi: "Kesempatan belajar litigasi dan pendampingan masyarakat marjinal.",
    kualifikasi: ["Lulusan S1 Hukum", " Minimal Memiliki sertifikat PKPA (disukai)"],
    isProgramMitra: false,
    penempatan: "LBH SIKAP Yogyakarta",
    deadline: "2026-12-31"
  },
  {
    id: "karir-003",
    judul: "Program Magang Mahasiswa (Legal Intern)",
    kategori: "Magang Mahasiswa",
    deskripsi: "Program Magang Mahasiswa LBH SIKAP.",
    kualifikasi: ["Minimal Mahasiswa Semester 4", "Memiliki integritas tinggi", "Tertarik pada isu bantuan hukum"],
    isProgramMitra: false,
    backgroundKeahlian: ["S1 Ilmu Hukum"],
    penempatan: "LBH SIKAP Yogyakarta",
    deadline: "2026-11-31"
  },
];