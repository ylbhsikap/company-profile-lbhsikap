// 1. Data untuk setiap section
const sectionData = {
  pers: [
    { id: 1, date: "12 Juni 2026", title: "Desakan Hentikan Intimidasi Warga", excerpt: "Ringkasan rilis pers terbaru..." },
    { id: 2, date: "08 Juni 2026", title: "Catatan Kebijakan Publik Daerah", excerpt: "Isi analisa hukum LBH SIKAP..." },
    { id: 3, date: "24 Mei 2026", title: "Keberhasilan Advokasi Buruh", excerpt: "Tuliskan rekam jejak penyelesaian kasus..." },
  ],
  edukasi: [
    { id: 1, title: "Klinik Hukum Gratis", excerpt: "Jadwal konsultasi mingguan di sekretariat LBH SIKAP." },
    { id: 2, title: "Panduan Hak Buruh", excerpt: "Mengenal hak-hak dasar tenaga kerja sesuai undang-undang." },
    { id: 3, title: "Seminar Hukum Agraria", excerpt: "Edukasi mengenai konflik tanah dan prosedur hukumnya." },
  ]
};

export interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  color: string;
  gambarKunci: "bannerUtama" | "kantorSekretariat" | "dokumentasiKasus"; // ✨ Mengunci pilihan sesuai aset gambar terpusat
}
// 1. Buat interfacenya di sini
export interface AsetGambarType {
  bannerUtama: string;
  kantorSekretariat: string;
  logoResmi: string;
  tentangkami: string;
  kontak: string;
  layanan: string;
  publikasi: string; 
  dokumentasiKasus?: string; // Tambahkan properti ini jika ada gambar khusus untuk berita
}
export const asetGambar = {
  bannerUtama: "/assets/images/ruangan10.jpg",
  kantorSekretariat: "/assets/images/ruangan1.jpg", // Digunakan di Kontak, Layanan, & Tentang
  logoResmi: "/assets/images/logo-lbh.png",
  tentangkami: "/assets/images/ruangan2.jpg",
  kontak: "/assets/images/ruangan.jpg",
  layanan: "/assets/images/ruangan10.jpg",
  publikasi: "/assets/images/ruangan10.jpg",
  dokumentasiKasus: "/assets/images/ruangan10.jpg" // Gambar khusus untuk berita
};

export { sectionData };
export const publikasiData = [
  { 
    id: "1", 
    date: "14 Juni 2026", 
    title: "Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil", 
    excerpt: "LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi...", 
    category: "SIARAN PERS",
    color: "#111111" 
  },
  { 
    id: "2", 
    date: "28 Mei 2026", 
    title: "Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana", 
    excerpt: "Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan...", 
    category: "OPINI HUKUM",
    color: "#555555" 
  },
  { 
    id: "3", 
    date: "12 April 2026", 
    title: "Catatan Krisis: Laporan Pemetaan Sengketa Tanah", 
    excerpt: "Hasil riset kolaboratif mengenai potret buram sengketa agraria...", 
    category: "RISET & DATA",
    color: "#999999" 
  },
];
// src/data/data.js
export const BerandaData = [
  { 
    id: "1", 
    date: "14 Juni 2026", 
    title: "Pernyataan Sikap: Menolak Tindakan Represif Terhadap Hak Sipil", 
    excerpt: "LBH SIKAP Yogyakarta mengecam keras segala bentuk tindakan intimidasi...", 
    category: "SIARAN PERS",
    color: "#111111",
    gambarKunci: "bannerUtama"
  },
  { 
    id: "2", 
    date: "28 Mei 2026", 
    title: "Menggugat Posisi Paralegal dalam Sistem Peradilan Pidana", 
    excerpt: "Menganalisis urgensi penguatan payung hukum bagi gerakan aktor lini depan...", 
    category: "OPINI HUKUM",
    color: "#555555",
    gambarKunci: "kantorSekretariat"
  },
  { 
    id: "3", 
    date: "12 April 2026", 
    title: "Catatan Krisis: Laporan Pemetaan Sengketa Tanah", 
    excerpt: "Hasil riset kolaboratif mengenai potret buram sengketa agraria...", 
    category: "RISET & DATA",
    color: "#999999",
    gambarKunci: "dokumentasiKasus"
  },
];
// Kontak
export const kontakInfo = {
  alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
  jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
  whatsapp: "081906157620",
  email: "yogyakarta@ylbhsikap.or.id",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.8473194684079!2d110.39667568367959!3d-7.756825588079311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a6cc94c5f7%3A0x86660a3450d13952!2sLBH%20SIKAP%20Yogyakarta%20-%20Lembaga%20Bantuan%20Hukum%20%26%20Studi%20Kebijakan%20Publik!5e0!3m2!1sen!2sid!4v1781551067597!5m2!1sen!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"" // Masukkan link iframe lengkap Anda di sini
};
// Kriteria Layanan
export const kriteriaLayanan = [
  {
    judul: "Faktor Ekonomi",
    deskripsi: "Diutamakan bagi masyarakat marjinal/miskin yang dibuktikan dengan melampirkan Surat Keterangan Tidak Mampu (SKTM).",
    borderLeft: "#111111"
  },
  {
    judul: "Kasus Dimensi Publik",
    deskripsi: "Kasus atau perkara yang dihadapi berdampak luas bagi komunitas, lingkungan hidup, atau hak-hak dasar kelompok (bukan murni sengketa privat antarelite).",
    borderLeft: "#111111"
  },
  {
    judul: "Pembatasan Kasus",
    deskripsi: "Secara ideologis, LBH SIKAP berkomitmen tidak akan bertindak sebagai pendamping bagi pelaku korupsi maupun pelaku kekerasan seksual.",
    borderLeft: "#cc2222"
  }
];
// Publikasi dokumen untuk di halaman publikasi
export const publikasiDokumen = [
  {
    id: 1,
    tag: "AKUNTABILITAS",
    tagColor: "#111111",
    judul: "Laporan Tahunan & Kinerja (Annual Report)",
    deskripsi: "Bentuk akuntabilitas LBH SIKAP kepada publik. Laporan ini mencakup seluruh statistik jumlah kasus aduan masyarakat, persentase penyelesaian perkara litigasi maupun non-litigasi, serta transparansi tata kelola keuangan internal lembaga secara berkala.",
    tombolLabel: "Unduh Laporan Tahunan (PDF)",
    link: "#"
  },
  {
    id: 2,
    tag: "EDUKASI PUBLIK",
    tagColor: "#555555",
    judul: "Kertas Kebijakan & Modul Paralegal",
    deskripsi: "Akses gratis ke modul hukum praktis untuk kader di akar rumput (community paralegal), panduan taktis menghadapi sengketa ruang hidup, draf perlindungan hak-hak pekerja, serta hasil riset advokasi kebijakan publik lainnya.",
    tombolLabel: "Buka Berkas Modul",
    link: "#"
  }
];
// Bagian tentang kami
export const tentangKami = {
  visi: "Menjadi lembaga bantuan hukum struktural yang progresif dalam menegakkan hak konstitusional masyarakat marjinal dan memastikan keadilan akses hukum di Indonesia.",
  misi: [
    "Memberikan pendampingan hukum pro bono kepada kelompok buta hukum dan korban ketidakadilan.",
    "Melakukan advokasi kebijakan publik yang berpihak pada hak-hak sipil dan kelompok rentan.",
    "Membangun jejaring paralegal komunitas untuk penguatan kapasitas hukum di tingkat akar rumput."
  ],
  sejarahSingkat: "LBH SIKAP Yogyakarta lahir dari kesadaran kolektif atas masih tingginya hambatan masyarakat dalam mengakses keadilan hukum. Sejak berdiri, kami berfokus pada pendekatan litigasi dan non-litigasi yang bersinggungan langsung dengan persoalan hak asasi manusia dan keadilan struktural."
};