// =========================================================================
// 📚 MASTER FAQ PUSAT & CABANG (Skalabel & Siap Digunakan)
// =========================================================================

// 1. Interface yang di-export agar bisa diakses oleh komponen
export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  isGlobal?: boolean;
}

// Helper untuk mengecek akhir pekan (untuk FAQ dinamis)
const isWeekend = () => {
  const day = new Date().getDay(); // 0 = Minggu, 6 = Sabtu
  return day === 0 || day === 6;
};

// Fungsi Generator untuk SEO JSON-LD
export const generateFaqSchema = (questions: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
  }))
});

// Fungsi Generator FAQ Dinamis (untuk Cabang)
export const getDynamicFaqForBranch = (info: any, posbakumList: any[]): FaqItem[] => {
  const weekendStatus = isWeekend();
  return [
    {
      id: "dyn-1",
      category: "Operasional Lokal",
      question: `Dimana alamat resmi ${info.nama}?`,
      answer: `Kantor kami berlokasi di ${info.alamat}. Kami melayani konsultasi langsung pada ${info.jamOperasional}.`,
      isGlobal: false
    },
    {
      id: "dyn-2",
      category: "Operasional Lokal",
      question: "Apakah kantor buka hari ini?",
      answer: weekendStatus 
        ? "Saat ini kami sedang di luar jam operasional (akhir pekan). Namun, tim kami tetap memantau pesan darurat melalui WhatsApp." 
        : `Ya, kantor kami buka hari ini sesuai jadwal operasional: ${info.jamOperasional}.`,
      isGlobal: false
    },
    {
      id: "dyn-3",
      category: "Kontak",
      question: `Bagaimana cara menghubungi ${info.nama}?`,
      answer: `Anda dapat menghubungi kami melalui nomor ${info.telepon} atau mengirimkan surat elektronik ke ${info.email}.`,
      isGlobal: false
    },
    {
      id: "dyn-4",
      category: "Posbakum",
      question: `Di mana saja titik layanan Posbakum LBH SIKAP di wilayah ${info.kota}?`,
      answer: posbakumList.length > 0 
        ? `Layanan Posbakum kami tersedia di: ${posbakumList.map((p: any) => p.nama).join(", ")}.` 
        : `Untuk saat ini, layanan Posbakum di wilayah ${info.kota} sedang dalam proses pengembangan.`,
      isGlobal: false
    }
  ];
};

// FAQ Master Pusat (Global) - Termasuk Kebijakan, Prosedur, Konsultasi, & Karier
export const masterFaqData: FaqItem[] = [
  {
    id: "fq-01",
    category: "Umum LBH",
    question: "Apa itu Lembaga Bantuan Hukum (LBH) SIKAP?",
    answer: "LBH SIKAP adalah organisasi non-pemerintah yang berfokus memberikan layanan jasa hukum, advokasi, serta pendampingan litigasi dan non-litigasi secara cuma-cuma kepada masyarakat miskin dan marjinal yang menghadapi persoalan hukum.",
    isGlobal: true
  },
  {
    id: "fq-02",
    category: "Umum LBH",
    question: "Apakah semua layanan pendampingan hukum di LBH SIKAP benar-benar gratis?",
    answer: "Ya, seluruh layanan hukum yang diberikan oleh LBH SIKAP bagi pencari keadilan yang memenuhi kriteria tidak mampu adalah 100% gratis/cuma-cuma tanpa dipungut biaya operasional perkara.",
    isGlobal: true
  },
  {
    id: "fq-03",
    category: "Umum LBH",
    question: "Darimana pembiayaan operasional penanganan perkara di LBH SIKAP?",
    answer: "Berdasarkan regulasi resmi, operasional bantuan hukum bagi masyarakat tidak mampu didukung melalui mekanisme anggaran negara (APBN/APBD) yang dikelola lewat Kemenkumham, serta didukung oleh hibah independen yang sah dan tidak mengikat.",
    isGlobal: true
  },
  {
    id: "fq-04",
    category: "Umum LBH",
    question: "Apakah LBH SIKAP merupakan lembaga resmi yang diakui oleh pemerintah?",
    answer: "Ya, LBH SIKAP merupakan lembaga bantuan hukum terakreditasi yang berdiri dan beroperasi secara sah berdasarkan hukum Republik Indonesia serta bekerja sama dengan instansi berwenang.",
    isGlobal: true
  },
  {
    id: "fq-05",
    category: "Regulasi & UU OBH",
    question: "Apa dasar hukum penyelenggaraan bantuan hukum gratis di Indonesia?",
    answer: "Dasar hukum utamanya adalah Undang-Undang Nomor 16 Tahun 2011 tentang Bantuan Hukum (UU OBH), serta peraturan turunan di bawah Kementerian Hukum dan Hak Asasi Manusia.",
    isGlobal: true
  },
  {
    id: "fq-06",
    category: "Regulasi & UU OBH",
    question: "Apa saja bentuk layanan hukum yang dijamin berdasarkan UU OBH?",
    answer: "Bentuk layanan meliputi penanganan perkara perdata, pidana, dan tata usaha negara baik secara litigasi (di dalam pengadilan) maupun non-litigasi (di luar pengadilan seperti mediasi, penyuluhan, dan konsultasi).",
    isGlobal: true
  },
  {
    id: "fq-07",
    category: "Regulasi & UU OBH",
    question: "Apakah LBH SIKAP berhak mendampingi terdakwa di persidangan pidana?",
    answer: "Ya, advokat publik dan paralegal dari LBH SIKAP berhak mendampingi dan memberikan pembelaan hukum bagi penerima bantuan hukum di setiap tingkat pemeriksaan pengadilan.",
    isGlobal: true
  },
  {
    id: "fq-08",
    category: "Kriteria & SKTM",
    question: "Siapa saja yang berhak mendapatkan bantuan hukum gratis di LBH SIKAP?",
    answer: "Setiap orang atau kelompok orang miskin yang menghadapi permasalahan hukum dan tidak mampu membayar jasa advokat secara mandiri.",
    isGlobal: true
  },
  {
    id: "fq-09",
    category: "Kriteria & SKTM",
    question: "Apa syarat administratif utama untuk membuktikan bahwa seseorang tidak mampu?",
    answer: "Pemohon wajib melampirkan Surat Keterangan Tidak Mampu (SKTM) dari Lurah/Kepala Desa setempat, kartu jaminan sosial (KKS, PKH, BPJS PBI), atau dokumen resmi lain yang menyatakan status kemiskinan.",
    isGlobal: true
  },
  {
    id: "fq-10",
    category: "Kriteria & SKTM",
    question: "Bagaimana jika seseorang tidak memiliki SKTM tetapi benar-benar miskin dan butuh bantuan?",
    answer: "Tim verifikator kami akan melakukan asesmen atau investigasi faktual di lapangan untuk menilai kelayakan kondisi ekonomi pemohon sebelum permohonan disetujui.",
    isGlobal: true
  },
  {
    id: "fq-11",
    category: "Kriteria & SKTM",
    question: "Apakah korporasi atau badan usaha bisa mendapatkan bantuan hukum gratis?",
    answer: "Tidak. Berdasarkan UU OBH, layanan bantuan hukum cuma-cuma ini hanya diperuntukkan secara eksklusif bagi perorangan atau kelompok masyarakat miskin, bukan badan usaha/perusahaan.",
    isGlobal: true
  },
  {
    id: "fq-12",
    category: "Masalah Hukum",
    question: "Kasus hukum apa saja yang paling sering ditangani oleh LBH SIKAP?",
    answer: "Kasus yang ditangani meliputi sengketa perburuhan/PHK sepihak, sengketa tanah/agraria masyarakat adat, kasus pidana kriminalisasi rakyat kecil, serta masalah hukum keluarga.",
    isGlobal: true
  },
  {
    id: "fq-13",
    category: "Masalah Hukum",
    question: "Apakah LBH SIKAP dapat membantu buruh yang di-PHK tanpa pesangon?",
    answer: "Ya, kami menyediakan layanan mediasi bipartit/tripartit hingga pendampingan perselisihan hubungan industrial di Pengadilan Hubungan Industrial (PHI) secara gratis.",
    isGlobal: true
  },
  {
    id: "fq-14",
    category: "Masalah Hukum",
    question: "Bagaimana penanganan LBH SIKAP terhadap kasus sengketa tanah warga?",
    answer: "Kami memberikan penasihat hukum, melakukan penelaahan dokumen kepemilikan, mediasi dengan pihak sengketa, hingga advokasi kebijakan dan pendampingan di pengadilan jika diperlukan.",
    isGlobal: true
  },
  {
    id: "fq-15",
    category: "Masalah Hukum",
    question: "Apakah korban kekerasan dalam rumah tangga (KDRT) atau perempuan dan anak bisa melapor?",
    answer: "Sangat bisa. Kami memprioritaskan perlindungan hukum dan pendampingan psikososial serta litigasi bagi perempuan dan anak korban kekerasan.",
    isGlobal: true
  },
  {
    id: "fq-16",
    category: "Prosedur",
    question: "Bagaimana tahapan awal untuk mengajukan permohonan bantuan hukum?",
    answer: "Pemohon dapat datang langsung ke kantor pusat/cabang LBH SIKAP atau mengisi formulir pengaduan digital melalui menu 'Formulir Aduan' di website resmi kami.",
    isGlobal: true
  },
  {
    id: "fq-17",
    category: "Prosedur",
    question: "Dokumen apa saja yang harus dibawa saat datang ke kantor LBH SIKAP?",
    answer: "Pemohon wajib membawa KTP/Identitas diri, kronologis perkara secara tertulis, bukti-bukti terkait (surat panggilan, perjanjian, foto, dll), serta SKTM atau kartu identitas kemiskinan.",
    isGlobal: true
  },
  {
    id: "fq-18",
    category: "Prosedur",
    question: "Berapa lama waktu yang dibutuhkan untuk verifikasi berkas pengaduan?",
    answer: "Tim verifikator dan komite penelaah perkara kami akan memeriksa kelengkapan berkas serta substansi hukum dalam kurun waktu maksimal 1x24 jam hingga 3 hari kerja.",
    isGlobal: true
  },
  {
    id: "fq-19",
    category: "Prosedur",
    question: "Apa alasan utama jika suatu pengaduan hukum ditolak oleh LBH SIKAP?",
    answer: "Pengaduan dapat ditolak jika perkara tersebut menyangkut kepentingan hukum yang bertentangan dengan hukum, tidak memenuhi kriteria masyarakat tidak mampu, atau melampaui batas kewenangan/kapasitas penanganan lembaga.",
    isGlobal: true
  },
  {
    id: "fq-20",
    category: "Prosedur",
    question: "Apakah kerahasiaan data dan identitas klien dijamin aman oleh lembaga?",
    answer: "Ya, berdasarkan kode etik advokat dan standar operasional lembaga, seluruh informasi, dokumen, dan identitas klien dijamin kerahasiaannya secara ketat.",
    isGlobal: true
  },
  {
    id: "fq-21",
    category: "Konsultasi Online",
    question: "Bagaimana cara melakukan konsultasi hukum online secara gratis di LBH SIKAP?",
    answer: "Anda dapat melakukan konsultasi hukum online secara gratis dengan mengisi 'Formulir Aduan' yang tersedia di website resmi kami, dengan melampirkan identitas diri serta ringkasan kronologi permasalahan hukum yang sedang dihadapi.",
    isGlobal: true
  },
  {
    id: "fq-22",
    category: "Konsultasi Online",
    question: "Apakah data pribadi dan kerahasiaan isi konsultasi online dijamin aman?",
    answer: "Ya, seluruh data pribadi, dokumen pendukung, dan isi konsultasi yang Anda kirimkan melalui formulir online dijamin kerahasiaannya secara ketat berdasarkan kode etik advokat dan standar perlindungan data lembaga.",
    isGlobal: true
  },
  {
    id: "fq-23",
    category: "Konsultasi Online",
    question: "Dokumen apa saja yang perlu disiapkan sebelum mengisi formulir aduan hukum?",
    answer: "Sebelum mengisi formulir, sebaiknya Anda menyiapkan foto KTP/identitas, surat-surat atau dokumen yang berkaitan langsung dengan perkara (seperti surat somasi, perjanjian, SK PHK, atau bukti pendukung lainnya), serta uraian kronologi kejadian secara runtut.",
    isGlobal: true
  },
  {
    id: "fq-24",
    category: "Konsultasi Online",
    question: "Berapa lama estimasi waktu respon setelah mengirimkan formulir konsultasi gratis?",
    answer: "Tim verifikator dan advokat publik LBH SIKAP akan meninjau dan menindaklanjuti pengaduan yang masuk melalui sistem online dalam kurun waktu maksimal 1x24 jam pada hari kerja.",
    isGlobal: true
  },
  {
    id: "fq-25",
    category: "Konsultasi Online",
    question: "Apakah bisa mengajukan aduan atau konsultasi hukum untuk diwakilkan oleh keluarga?",
    answer: "Bisa. Jika prinsipal atau korban terkendala secara akses atau kondisi, anggota keluarga terdekat dapat mewakili untuk mengisi formulir pengaduan dengan melampirkan keterangan hubungan serta surat kuasa atau persetujuan yang sah.",
    isGlobal: true
  },
  // --- FAQ TAMBAHAN: KARIER & REKRUTMEN ---
  {
    id: "fq-karir-01",
    category: "Karier & Rekrutmen",
    question: "Apakah rekrutmen terbuka untuk umum atau sarjana hukum saja?",
    answer: "Sebagian besar posisi advokat dan paralegal mensyaratkan latar belakang Sarjana Hukum (S1 Ilmu Hukum) serta memiliki Berita Acara Sumpah (BAS) atau Kartu Tanda Anggota (KTA) Advokat jika melamar sebagai posisi litigasi. Namun, untuk posisi divisi riset, kampanye publik, atau administrasi, kami juga membuka kesempatan bagi disiplin ilmu sosial lainnya.",
    isGlobal: true
  },
  {
    id: "fq-karir-02",
    category: "Karier & Rekrutmen",
    question: "Bagaimana tahapan seleksi rekrutmen di LBH SIKAP?",
    answer: "Tahapan seleksi meliputi: (1) Seleksi Administrasi & Berkas, (2) Tes Tertulis Substansi Hukum & HAM / Studi Kasus, (3) Wawancara Kompetensi Teknis dan Visi Bantuan Hukum, serta (4) Uji Praktik Advokasi atau masa percobaan (probationary) selama 3 bulan.",
    isGlobal: true
  },
  {
    id: "fq-karir-03",
    category: "Karier & Rekrutmen",
    question: "Apakah LBH SIKAP menyediakan program magang untuk mahasiswa?",
    answer: "Ya, kami secara berkala membuka program Magang Mahasiswa Hukum (Legal Intern) bagi mahasiswa hukum semester akhir atau fresh graduate yang ingin mendalami litigasi struktural, penanganan kasus pro bono, dan riset kebijakan publik.",
    isGlobal: true
  },
  {
    id: "fq-karir-04",
    category: "Karier & Rekrutmen",
    question: "Bagaimana sistem penugasan dan penempatan kerja di LBH SIKAP?",
    answer: "Staf dan advokat yang lolos seleksi akan ditempatkan di Kantor Pusat atau disesuaikan dengan kebutuhan formasi di kantor-kantor cabang wilayah (seperti Yogyakarta, Banten, Balikpapan, NTT, Ciamis, dan Samarinda) berdasarkan domisili atau penugasan khusus organisasi.",
    isGlobal: true
  }
];

// =========================================================================
// 🏢 FAQ KHUSUS CABANG (Fokus Operasional & Lokal 6 Cabang)
// =========================================================================
export const faqCabangData: Record<string, FaqItem[]> = {
  yogyakarta: [
    {
      id: "faq-jogja-op-1",
      category: "Operasional Lokal",
      question: "Dimana alamat resmi Kantor LBH SIKAP Cabang Yogyakarta?",
      answer: "Kantor kami berlokasi di Jalan Anggajaya I Brojodento.294, Gejayan, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, DIY (Dekat kawasan kampus dan pusat keramaian Gejayan)."
    },
    {
      id: "faq-jogja-op-2",
      category: "Operasional Lokal",
      question: "Berapa jam operasional layanan tatap muka di Kantor LBH SIKAP Yogyakarta?",
      answer: "Layanan konsultasi dan penerimaan berkas perkara dibuka setiap hari Senin sampai Jumat, pukul 09.00 hingga 16.00 WIB, dengan waktu istirahat pukul 12.00 - 13.00 WIB."
    },
    {
      id: "faq-jogja-op-3",
      category: "Operasional Lokal",
      question: "Apakah kantor LBH SIKAP Yogyakarta buka pada hari Sabtu dan Minggu?",
      answer: "Secara prinsip kantor fisik tutup pada akhir pekan (Sabtu-Minggu) dan hari libur nasional. Namun, untuk kasus darurat atau penangkapan sewenang-wenang, laporan tetap dapat dikirimkan secara online via WhatsApp."
    },
    {
      id: "faq-jogja-op-4",
      category: "Operasional Lokal",
      question: "Bagaimana akses transportasi umum menuju Kantor LBH SIKAP Yogyakarta?",
      answer: "Kantor kami sangat mudah dijangkau menggunakan armada Trans Jogja (turun di halte terdekat wilayah Gejayan/Condongcatur) atau menggunakan layanan transportasi online roda dua maupun roda empat."
    },
    {
      id: "faq-jogja-op-5",
      category: "Operasional Lokal",
      question: "Apakah tersedia area parkir bagi warga yang datang berkonsultasi ke kantor?",
      answer: "Ya, kami menyediakan area parkir kendaraan roda dua yang aman di halaman kantor sekretariat LBH SIKAP Yogyakarta."
    },
    {
      id: "faq-jogja-op-6",
      category: "Operasional Lokal",
      question: "Apakah konsultasi langsung di Kantor Yogyakarta wajib membuat janji temu terlebih dahulu?",
      answer: "Meskipun kami melayani warga yang datang langsung (walk-in), sangat disarankan untuk membuat janji temu via WhatsApp terlebih dahulu guna memastikan ketersediaan jadwal piket Advokat Publik."
    },
    {
      id: "faq-jogja-op-7",
      category: "Operasional Lokal",
      question: "Apakah LBH SIKAP Yogyakarta melayani warga dari luar kabupaten seperti Gunungkidul atau Kulon Progo?",
      answer: "Ya, cakupan wilayah kerja kami meliputi seluruh kabupaten/kota di Provinsi DIY (Sleman, Bantul, Kota Yogyakarta, Kulon Progo, dan Gunungkidul) selama pemohon memenuhi kriteria kemiskinan."
    },
    {
      id: "faq-jogja-op-8",
      category: "Operasional Lokal",
      question: "Apakah ada pungutan biaya administrasi pendaftaran perkara di kantor Yogyakarta?",
      answer: "Tidak ada sama sekali. Seluruh proses pendaftaran, pencatatan berkas perkara, hingga telaah awal di LBH SIKAP Yogyakarta dijamin gratis."
    },
    {
      id: "faq-jogja-op-9",
      category: "Operasional Lokal",
      question: "Siapa penanggung jawab atau pimpinan operasional LBH SIKAP Cabang Yogyakarta?",
      answer: "Operasional harian dan kepemimpinan eksekutif cabang dipimpin langsung oleh Direktur LBH SIKAP Yogyakarta, Wandy Marseli, S.H., beserta jajaran advokat publik."
    },
    {
      id: "faq-jogja-op-10",
      category: "Operasional Lokal",
      question: "Apakah LBH SIKAP Yogyakarta menyediakan ruang tunggu khusus yang ramah anak dan disabilitas?",
      answer: "Kami menyediakan ruang tunggu representatif yang nyaman, bersih, serta aksesibilitas dasar bagi pencari keadilan yang mendampingi anak atau penyandang disabilitas."
    },
    {
      id: "faq-jogja-pos-1",
      category: "Posbakum",
      question: "Di mana saja titik mitra Posbakum LBH SIKAP di wilayah Yogyakarta dan sekitarnya?",
      answer: "Mitra posbankum kami tersebar di berbagai kalurahan, di antaranya Kalurahan Terong (Dlingo, Bantul), Kalurahan Condongcatur (Depok, Sleman), Kalurahan Temuwuh (Dlingo, Bantul), dan Kalurahan Mangunan (Dlingo, Bantul)."
    },
    {
      id: "faq-jogja-pos-2",
      category: "Posbakum",
      question: "Apa fungsi utama dari Pos Bantuan Hukum (Posbakum) di tingkat kalurahan?",
      answer: "Posbakum berfungsi sebagai lini terdepan (frontline) di akar rumput untuk memberikan penyuluhan hukum, konsultasi awal, dan memfasilitasi rujukan kasus bagi warga desa yang kesulitan akses ke kota."
    },
    {
      id: "faq-jogja-pos-3",
      category: "Posbakum",
      question: "Apakah warga desa bisa langsung mengurus sengketa tanah desa di kantor Posbakum Kalurahan?",
      answer: "Bisa. Warga dapat berkonsultasi mengenai sengketa agraria atau batas tanah adat/desa langsung kepada paralegal desa yang bertugas di posbankum mitra terdekat."
    },
    {
      id: "faq-jogja-pos-4",
      category: "Posbakum",
      question: "Kapan jadwal piket pelayanan konsultasi hukum gratis di Posbakum Kalurahan Terong?",
      answer: "Jadwal piket disesuaikan dengan jam kerja kantor Kalurahan Terong, Bantul, atau melalui agenda khusus klinik hukum rutin setiap minggunya."
    },
    {
      id: "faq-jogja-pos-5",
      category: "Posbakum",
      question: "Apakah Posbakum di Condongcatur Sleman melayani sengketa ketenagakerjaan perkotaan?",
      answer: "Ya, Posbakum Condongcatur sering menjadi rujukan bagi pekerja atau buruh di kawasan padat penduduk Sleman utara yang mengalami perselisihan hak kerja."
    },
    {
      id: "faq-jogja-pos-6",
      category: "Posbakum",
      question: "Apakah warga di luar Kapanewon Dlingo boleh datang ke Posbakum Kalurahan Temuwuh?",
      answer: "Diutamakan bagi warga lokal setempat, namun posbankum kami terbuka memberikan panduan atau rujukan awal bagi warga DIY yang datang berkonsultasi."
    },
    {
      id: "faq-jogja-pos-7",
      category: "Posbakum",
      question: "Apakah layanan di Posbakum mitra kalurahan dikenakan biaya kontribusi desa?",
      answer: "Sama sekali tidak. Layanan konsultasi di seluruh jaringan posbankum resmi mitra LBH SIKAP bersifat pro-bono (gratis)."
    },
    {
      id: "faq-jogja-pos-8",
      category: "Posbakum",
      question: "Bagaimana cara mengecek titik koordinat atau rute Google Maps Posbakum Mangunan?",
      answer: "Anda dapat melihat peta interaktif langsung pada menu bagian 'Posbakum' di halaman web cabang Yogyakarta atau mengklik tautan pin lokasi Gmaps yang tertera."
    },
    {
      id: "faq-jogja-pos-9",
      category: "Posbakum",
      question: "Apakah paralegal di posbankum desa berwenang mendampingi proses mediasi warga?",
      answer: "Ya, paralegal terlatih kami berwenang mendampingi proses mediasi non-litigasi di tingkat rukun warga atau kelurahan guna mencapai perdamaian sengketa warga."
    },
    {
      id: "faq-jogja-pos-10",
      category: "Posbakum",
      question: "Bagaimana jika kasus hukum warga di posdesa ternyata membutuhkan gugatan pengadilan?",
      answer: "Paralegal di posbankum desa akan segera membuatkan rujukan resmi (referral) berkas perkara untuk dilimpahkan langsung ke Kantor Pusat LBH SIKAP Yogyakarta guna ditangani oleh advokat berlisensi."
    },
    {
      id: "faq-jogja-kon-1",
      category: "Kontak",
      question: "Bagaimana cara menghubungi hotline darurat LBH SIKAP Yogyakarta?",
      answer: "Anda dapat menghubungi nomor layanan resmi cabang kami di 0823-2227-8670 pada hari Senin sampai Jumat pukul 09.00 - 16.00 WIB."
    },
    {
      id: "faq-jogja-kon-2",
      category: "Kontak",
      question: "Berapa alamat email resmi untuk pengiriman dokumen perkara wilayah Yogyakarta?",
      answer: "Dokumen pendukung perkara dan surat permohonan resmi dapat dikirimkan melalui email resmi cabang: yogyakarta@ylbhsikap.or.id."
    },
    {
      id: "faq-jogja-kon-3",
      category: "Kontak",
      question: "Apakah LBH SIKAP Yogyakarta memiliki nomor WhatsApp alternatif selain hotline utama?",
      answer: "Ya, untuk keperluan koordinasi advokasi lapangan atau konfirmasi pendaftaran online, tim kami dapat dihubungi di nomor seluler pendamping yang tertera pada profil anggota."
    },
    {
      id: "faq-jogja-kon-4",
      category: "Kontak",
      question: "Bagaimana prosedur pelaporan darurat jika ada warga DIY yang mengalami penangkapan sewenang-wenang?",
      answer: "Segera kirimkan pesan singkat atau WhatsApp ke hotline darurat dengan melampirkan identitas korban, lokasi penahanan/kepolisian, serta kronologi singkat penangkapan."
    },
    {
      id: "faq-jogja-kon-5",
      category: "Kontak",
      question: "Apakah pesan WhatsApp yang dikirimkan di luar jam kerja akan direspons?",
      answer: "Pesan yang masuk di luar jam kerja atau hari libur akan dicatat oleh sistem otomatis dan ditinjau oleh piket darurat pada keesokan harinya di hari kerja."
    },
    {
      id: "faq-jogja-kon-6",
      category: "Kontak",
      question: "Apakah LBH SIKAP Yogyakarta aktif merespons aduan melalui media sosial resmi?",
      answer: "Ya, Anda juga dapat mengirimkan pesan langsung (DM) melalui akun media sosial resmi lembaga kami yang terhubung dengan tim Hubungan Masyarakat."
    },
    {
      id: "faq-jogja-kon-7",
      category: "Kontak",
      question: "Bagaimana cara memastikan bahwa nomor WhatsApp yang dihubungi benar-benar milik LBH SIKAP Yogyakarta?",
      answer: "Pastikan Anda hanya menghubungi nomor kontak resmi yang tercantum di dalam halaman resmi domain web terverifikasi kami (ylbhsikap.or.id)."
    },
    {
      id: "faq-jogja-kon-8",
      category: "Kontak",
      question: "Apakah instansi atau lembaga kampus di Yogyakarta bisa menghubungi LBH SIKAP untuk audiensi?",
      answer: "Sangat bisa. Surat permohonan audiensi, riset, atau narasumber dapat dikirimkan secara resmi ke email cabang Yogyakarta."
    },
    {
      id: "faq-jogja-kon-9",
      category: "Kontak",
      question: "Apakah ada biaya pulsa atau administrasi saat menghubungi nomor hotline?",
      answer: "Tidak ada biaya apa pun dari pihak lembaga. Biaya komunikasi hanya bergantung pada operator seluler atau paket data internet Anda masing-masing."
    },
    {
      id: "faq-jogja-kon-10",
      category: "Kontak",
      question: "Apa langkah yang harus dilakukan jika sambungan telepon hotline sedang sibuk?",
      answer: "Jika sambungan telepon sedang sibuk atau di luar jangkauan, silakan tinggalkan pesan teks (chat WhatsApp) dengan format jelas berisi nama dan ringkasan masalah hukum Anda."
    }
  ],

  banten: [
    {
      id: "faq-banten-1",
      category: "Operasional Lokal",
      question: "Dimana lokasi kantor LBH SIKAP Cabang Banten?",
      answer: "Kantor kami berlokasi di Jl. Raya Serang - Pandeglang Link No.044, Karundang, Kec. Cipocok Jaya, Kota Serang, Banten."
    },
    {
      id: "faq-banten-2",
      category: "Kontak",
      question: "Berapa nomor telepon layanan pengaduan LBH SIKAP Banten?",
      answer: "Anda dapat menghubungi layanan cabang Banten melalui nomor 0819-0419-8678."
    }
  ],

  balikpapan: [
    {
      id: "faq-bpp-1",
      category: "Operasional Lokal",
      question: "Dimana alamat kantor LBH SIKAP Cabang Balikpapan?",
      answer: "Kantor cabang Balikpapan beralamat di Jl. Jenderal Sudirman No. 45, Balikpapan, Kalimantan Timur."
    },
    {
      id: "faq-bpp-2",
      category: "Kontak",
      question: "Bagaimana cara berkonsultasi langsung dengan tim di Balikpapan?",
      answer: "Anda bisa datang langsung pada jam kerja atau menghubungi hotline resmi kami di 0812-5358-3333."
    }
  ],

  NTT: [
    {
      id: "faq-ntt-1",
      category: "Operasional Lokal",
      question: "Dimana lokasi operasional LBH SIKAP Cabang NTT?",
      answer: "Kantor operasional kami berlokasi di area Selandoro, Kec. Nubatukan, Kab. Lembata, Nusa Tenggara Timur."
    },
    {
      id: "faq-ntt-2",
      category: "Kontak",
      question: "Nomor berapa yang bisa dihubungi untuk wilayah NTT?",
      answer: "Silakan hubungi layanan bantuan hukum NTT di nomor 0813-9380-8277."
    }
  ],

  ciamis: [
    {
      id: "faq-cms-1",
      category: "Operasional Lokal",
      question: "Bagaimana cara menjangkau layanan LBH SIKAP di Ciamis?",
      answer: "Anda dapat menghubungi pimpinan cabang atau mendatangi pos koordinasi kami dengan narahubung sdr. Dafiq Syahal M."
    },
    {
      id: "faq-cms-2",
      category: "Kontak",
      question: "Berapa nomor kontak layanan Ciamis?",
      answer: "Nomor kontak resmi cabang Ciamis adalah 0813-9243-5107."
    }
  ],

  samarinda: [
    {
      id: "faq-smr-1",
      category: "Operasional Lokal",
      question: "Bagaimana koordinasi layanan hukum LBH SIKAP di Samarinda?",
      answer: "LBH SIKAP Samarinda aktif menjalankan program kerja sama dan posbankum pengadilan di wilayah Kalimantan Timur."
    },
    {
      id: "faq-smr-2",
      category: "Kontak",
      question: "Bagaimana cara warga Samarinda mengajukan aduan?",
      answer: "Warga Samarinda dapat memanfaatkan fitur formulir aduan online di website ini atau langsung berkoordinasi dengan jaringan posbankum setempat."
    }
  ]
};