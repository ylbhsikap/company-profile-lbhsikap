import { MetadataRoute } from 'next';
import { dataSeluruhCabang } from '@/data/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domainAsli = 'https://domainutama.com'; // Ganti dengan domain Anda
  const daftarSlug = Object.keys(dataSeluruhCabang);

  // Jalur untuk halaman utama dan menu lainnya
  const ruteUtama = [
    '',
    '/layanan',
    '/mitra',
    '/publikasi',
    '/tentang',
  ].map((route) => ({
    url: `${domainAsli}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Jalur otomatis untuk 8 halaman cabang Anda
  const ruteCabang = daftarSlug.map((slug) => ({
    url: `${domainAsli}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...ruteUtama, ...ruteCabang];
}
