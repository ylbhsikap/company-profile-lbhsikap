// src/app/(pusat)/layanan/page.tsx
import { prosedurLayanan, asetGambar, dataKantorPusat } from "@/data/data";
import { SubPageHeader } from "@/components/layout/SubPageHeader";

export default function LayananPusatPage() {
  const { kriteria, info } = dataKantorPusat;
  return (
    <main className="w-full bg-white">
      <SubPageHeader 
        title="Layanan" 
        subtitle="Prosedur dan Kriteria Penanganan Perkara" 
        bgImage={asetGambar.layananBawah} 
      />
      {/* ZONA 1: Kriteria & Form - Tetap Sama (sudah benar) */}
      
      {/* ZONA 2: PROSEDUR DINAMIS */}
      <section className="relative w-full bg-white py-20 pb-28">
        <div className="relative z-10 mx-auto w-11/12 max-w-5xl">
          <div className="mb-12 border-b border-gray-800 pb-5">
            <h2 className="text-2xl font-black uppercase text-black md:text-3xl">Prosedur Penanganan Perkara</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black">
            {prosedurLayanan.map((item) => (
              <div key={item.step} className="p-6 bg-white/5 rounded-xl border border-black/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Langkah {item.step}</span>
                  <h4 className="font-bold text-lg mt-2 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-gray-800 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}