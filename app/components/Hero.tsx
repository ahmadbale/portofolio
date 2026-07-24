"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8"
      >
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-[44px] md:text-[72px] leading-[1.2] md:leading-[1.1] font-bold md:tracking-tight text-on-surface">
          Halo, saya <span className="text-primary">Ahmad Iqbal Firmansyah.</span>
        </h1>
        <p className="font-[family-name:var(--font-hanken-grotesk)] text-lg leading-relaxed text-on-surface-variant max-w-2xl">
          Full-Stack &amp; Front-End Developer | Sistem Informasi Bisnis. Fokus pada pengembangan web (Laravel) dan Desain Berpusat pada Pengguna.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            className="btn-primary px-8 py-3 rounded-md font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest font-medium hover:scale-105 transition-transform"
            href="#projects"
          >
            Lihat Proyek Saya
          </Link>
          <a
            href="/CV.pdf"
            download
            className="btn-ghost px-8 py-3 rounded-md font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Unduh CV
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full aspect-square max-w-md"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <Image
          alt="Hero Image"
          className="w-full h-full object-cover rounded-xl border border-[var(--card-border)] z-10 relative glass-card animate-float"
          src="/foto_diri.jpg"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
}
