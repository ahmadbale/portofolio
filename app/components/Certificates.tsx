"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Certificate {
  id: string;
  images: string[];
}

// ======================================================
// DATA SERTIFIKAT
// ======================================================

const certificates: Certificate[] = [
  {
    id: "cert-1",
    images: ["/sertif_mawapres.png"],
  },
  {
    id: "cert-2",
    images: ["/sertif_ui.png"],
  },
  {
    id: "cert-3",
    images: [
      "/sertifikat_AI_Praktis_1.jpg",
      "/sertifikat_AI_Praktis_2.jpg",
    ],
  },
  {
    id: "cert-4",
    images: [
      "/sertifikat_manaj_proyek_1.jpg",
      "/sertifikat_manaj_proyek_2.jpg",
      "/sertifikat_manaj_proyek_3.jpg",
    ],
  },
  {
    id: "cert-5",
    images: [
      "/sertif_generative_ai_1.jpg",
      "/sertif_generative_ai_2.jpg",
      "/sertif_generative_ai_3.jpg",
    ],
  },
];

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{
    certificate: Certificate;
    index: number;
  } | null>(null);

  return (
    <section
      className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 py-20"
      id="certificates"
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-6 font-semibold"
        >
          Sertifikat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="text-on-surface-variant max-w-2xl mx-auto font-[family-name:var(--font-hanken-grotesk)]"
        >
          Beberapa sertifikasi dan penghargaan yang telah saya capai.
        </motion.p>
      </div>

      {/* ==================================================
          CERTIFICATE GRID
      ================================================== */}

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onImageClick={(index) =>
                setSelectedCert({
                  certificate: cert,
                  index,
                })
              }
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ==================================================
          IMAGE MODAL
      ================================================== */}

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

// ======================================================
// CERTIFICATE CARD
// ======================================================

function CertificateCard({
  certificate,
  onImageClick,
}: {
  certificate: Certificate;
  onImageClick: (index: number) => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  // ====================================================
  // NEXT IMAGE
  // ====================================================

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage(
      (prev) => (prev + 1) % certificate.images.length
    );
  };

  // ====================================================
  // PREVIOUS IMAGE
  // ====================================================

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage(
      (prev) =>
        (prev - 1 + certificate.images.length) %
        certificate.images.length
    );
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 0.4,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        glass-card
        rounded-2xl
        overflow-hidden
        group
        border
        border-[var(--card-border)]
        transition-shadow
        duration-300
        hover:shadow-2xl
      "
    >
      {/* ==================================================
          IMAGE CONTAINER
      ================================================== */}

      <div
        className="
          relative
          w-full
          aspect-[4/3]
          overflow-hidden
          bg-black/20
          cursor-pointer
        "
        onClick={() => onImageClick(currentImage)}
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute inset-0"
          >
            <Image
              src={certificate.images[currentImage]}
              alt={`Sertifikat ${currentImage + 1}`}
              fill
              sizes="
                (max-width: 768px) 100vw,
                50vw
              "
              className="
                object-contain
                p-4
                opacity-90
                group-hover:opacity-100
                transition-opacity
                duration-300
              "
            />
          </motion.div>
        </AnimatePresence>

        {/* ==================================================
            NAVIGATION BUTTONS
        ================================================== */}

        {certificate.images.length > 1 && (
          <>
            {/* PREVIOUS BUTTON */}

            <button
              onClick={prevImage}
              aria-label="Sertifikat sebelumnya"
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                z-20
                bg-black/60
                hover:bg-black/80
                p-2.5
                rounded-full
                text-white
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
                hover:bg-primary
                hover:text-background
              "
            >
              <span className="material-symbols-outlined text-xl">
                chevron_left
              </span>
            </button>

            {/* NEXT BUTTON */}

            <button
              onClick={nextImage}
              aria-label="Sertifikat berikutnya"
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                z-20
                bg-black/60
                hover:bg-black/80
                p-2.5
                rounded-full
                text-white
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
                hover:bg-primary
                hover:text-background
              "
            >
              <span className="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </button>

            {/* ==================================================
                DOT INDICATOR
            ================================================== */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                z-20
                flex
                gap-1.5
              "
            >
              {certificate.images.map((_, i) => (
                <div
                  key={i}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      i === currentImage
                        ? "bg-primary w-5"
                        : "bg-white/40 w-1.5"
                    }
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* ==================================================
            GRADIENT OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-background/40
            via-transparent
            to-transparent
            opacity-30
            pointer-events-none
          "
        />

        {/* ==================================================
            CLICK TO ZOOM INDICATOR
        ================================================== */}

        <div
          className="
            absolute
            top-4
            right-4
            z-20
            bg-black/50
            backdrop-blur-sm
            rounded-full
            p-2
            text-white
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        >
          <span className="material-symbols-outlined text-lg">
            zoom_in
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ======================================================
// IMAGE MODAL
// ======================================================

function ImageModal({
  certificate,
  initialIndex,
  onClose,
}: {
  certificate: Certificate;
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] =
    useState(initialIndex);

  // ====================================================
  // NEXT IMAGE
  // ====================================================

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();

    setCurrentIndex(
      (prev) => (prev + 1) % certificate.images.length
    );
  };

  // ====================================================
  // PREVIOUS IMAGE
  // ====================================================

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();

    setCurrentIndex(
      (prev) =>
        (prev - 1 + certificate.images.length) %
        certificate.images.length
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/90
        p-4
        md:p-8
        backdrop-blur-md
      "
    >
      {/* ==================================================
          MODAL CONTAINER
      ================================================== */}

      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.9,
          opacity: 0,
        }}
        className="
          relative
          max-w-7xl
          w-full
          max-h-[92vh]
          aspect-[4/3]
          bg-background
          rounded-xl
          overflow-hidden
          border
          border-[var(--card-border)]
          shadow-2xl
          flex
          items-center
          justify-center
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* ==================================================
            MODAL IMAGE
        ================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute inset-0"
          >
            <Image
              src={certificate.images[currentIndex]}
              alt={`Sertifikat Diperbesar - ${
                currentIndex + 1
              }`}
              fill
              sizes="100vw"
              className="object-contain p-4 md:p-8"
            />
          </motion.div>
        </AnimatePresence>

        {/* ==================================================
            MODAL NAVIGATION
        ================================================== */}

        {certificate.images.length > 1 && (
          <>
            {/* PREVIOUS */}

            <button
              onClick={prevImage}
              aria-label="Sertifikat sebelumnya"
              className="
                absolute
                left-4
                md:left-6
                top-1/2
                -translate-y-1/2
                z-20
                bg-black/60
                hover:bg-black/80
                p-2.5
                md:p-3
                rounded-full
                text-white
                transition-all
                duration-300
                border
                border-white/10
                hover:bg-primary
                hover:text-background
              "
            >
              <span className="material-symbols-outlined">
                chevron_left
              </span>
            </button>

            {/* NEXT */}

            <button
              onClick={nextImage}
              aria-label="Sertifikat berikutnya"
              className="
                absolute
                right-4
                md:right-6
                top-1/2
                -translate-y-1/2
                z-20
                bg-black/60
                hover:bg-black/80
                p-2.5
                md:p-3
                rounded-full
                text-white
                transition-all
                duration-300
                border
                border-white/10
                hover:bg-primary
                hover:text-background
              "
            >
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </button>

            {/* ==================================================
                MODAL DOTS
            ================================================== */}

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                z-20
                flex
                gap-2
              "
            >
              {certificate.images.map((_, i) => (
                <div
                  key={i}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      i === currentIndex
                        ? "bg-primary w-6"
                        : "bg-white/30 w-2"
                    }
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* ==================================================
            CLOSE BUTTON
        ================================================== */}

        <button
          onClick={onClose}
          aria-label="Tutup"
          className="
            absolute
            top-4
            right-4
            md:top-6
            md:right-6
            z-30
            bg-black/60
            hover:bg-black/80
            text-white
            rounded-full
            p-2
            md:p-2.5
            transition-all
            duration-300
            border
            border-white/10
            hover:bg-primary
            hover:text-background
          "
        >
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}