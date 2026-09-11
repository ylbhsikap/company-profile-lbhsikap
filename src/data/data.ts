export * from "./globals";
export * from "./pusat";
export * from "./berita";
export * from "./cabang";

import { dataKantorPusat } from "./pusat";
import { databaseArtikelNasional } from "./berita";
import { dataSeluruhCabang } from "./cabang";

export const kumpulanBeritaNasional = databaseArtikelNasional; 
export const BerandaData = dataKantorPusat.berita;
export const publikasiData = databaseArtikelNasional;
export const publikasiDokumen = dataKantorPusat.publikasi;

export const sectionData = dataSeluruhCabang.yogyakarta.sectionBackup;
export const strukturOrganisasi = dataSeluruhCabang.yogyakarta.struktur;
export const daftarAnggota = dataSeluruhCabang.yogyakarta.anggota;
export const daftarPosbakum = dataSeluruhCabang.yogyakarta.posbakum;