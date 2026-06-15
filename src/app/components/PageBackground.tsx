import Image from 'next/image';

interface PageBackgroundProps {
  src: string;
  alt?: string;
}

export default function PageBackground({ src, alt = "Background" }: PageBackgroundProps) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1 // Agar selalu di belakang
    }}>
      <Image
        src={src} // Foto akan berubah sesuai yang kita masukkan di page.js
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      {/* Overlay Gelap agar teks tetap terbaca */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}></div>
    </div>
  );
}