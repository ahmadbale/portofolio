"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-12"
      >
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-6 font-semibold">
          Tentang Saya
        </h2>
        <p className="font-[family-name:var(--font-hanken-grotesk)] text-base leading-relaxed text-on-surface-variant">
          Saya adalah mahasiswa D4 Sistem Informasi Bisnis di Politeknik Negeri Malang dengan minat yang kuat dalam membangun aplikasi web yang skalabel. Perjalanan saya mencakup pelatihan intensif melalui Bangkit Academy dan AI Ignition Training, di mana saya mengasah keterampilan saya dalam pengembangan web modern dan integrasi kecerdasan buatan. Saya berusaha menciptakan pengalaman digital yang tidak hanya fungsional tetapi juga dirancang secara intuitif untuk pengguna akhir.
        </p>
      </motion.div>
    </section>
  );
}
