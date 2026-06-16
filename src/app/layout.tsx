import React from "react";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col justify-between">
        
        {/* Konten Utama Aplikasi */}
        <div className="grow">
          {children}
        </div>

        {/* Footer Global Jajaran Nasional */}
        <footer className="py-6 text-center text-3xs text-gray-400 bg-gray-50 border-t border-gray-200">
          &copy; {new Date().getFullYear()} LBH SIKAP Jajaran Nasional. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}