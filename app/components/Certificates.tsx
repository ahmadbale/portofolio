"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Certificate {
  id: string; // id unik untuk key
  images: string[];
}

// Tambahkan sertifikat Anda di sini.
// Pastikan file gambar (contoh: sertifikat-1.jpg) sudah di-upload ke folder "public".
const certificates: Certificate[] = [
  {
    id: "cert-1",
    images: ["/sertif_mawapres.png"], // Bisa lebih dari satu gambar
  },
  {
    id: "cert-2",
    images: ["/sertif_ui.png"], // Ganti dengan nama file gambar sertifikat Anda
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{ certificate: Certificate; index: number } | null>(null);

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="certificates">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-8 font-semibold"
        >
          Sertifikat
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto font-[family-name:var(--font-hanken-grotesk)]"
        >
          Beberapa sertifikasi dan penghargaan yang telah saya capai.
        </motion.p>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onImageClick={(index) => setSelectedCert({ certificate: cert, index })}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <ImageModal
            certificate={selectedCert.certificate}
            initialIndex={selectedCert.index}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function CertificateCard({ certificate, onImageClick }: { certificate: Certificate; onImageClick: (index: number) => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % certificate.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + certificate.images.length) % certificate.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group border border-[var(--card-border)]"
    >
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-black/20 cursor-pointer"
        onClick={() => onImageClick(currentImage)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={certificate.images[currentImage]}
              alt={`Sertifikat ${currentImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </AnimatePresence>

        {certificate.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-background"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-background"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
              {certificate.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === currentImage ? "bg-primary w-3" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

function ImageModal({ certificate, initialIndex, onClose }: { certificate: Certificate; initialIndex: number; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % certificate.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + certificate.images.length) % certificate.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full max-h-[90vh] aspect-[4/3] bg-background rounded-xl overflow-hidden border border-[var(--card-border)] shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={certificate.images[currentIndex]}
              alt={`Sertifikat Diperbesar - ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {certificate.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-white/20 p-2 rounded-full text-white transition-colors border border-white/10"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-white/20 p-2 rounded-full text-white transition-colors border border-white/10"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {certificate.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-4" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-30 flex items-center justify-center border border-white/10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
