// src/app/components/PosbakumList.tsx
import { daftarPosbakum } from "@/data/data";
  export default function PosbakumList() {
    return (
      <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Daftar Wilayah Posbakum Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {daftarPosbakum.map((pos) => (
            <div key={pos.id} className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-amber-700 text-lg">{pos.pengadilan}</h4>
              <p className="text-gray-600 text-sm mt-2">{pos.lokasi}</p>
              <span className="text-xs text-gray-400 block mt-3">⏱ {pos.jam}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }