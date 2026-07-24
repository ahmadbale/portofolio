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
          Saya adalah seorang Mahasiswa Akhir D4 Sistem Informasi Bisnis di Politeknik Negeri Malang. Saya selalu menyukai hal-hal baru dan
          mudah beradaptasi. Saya dapat bekerja secara tim maupun mandiri. Saya selalu berusaha mengembangkan kemampuan saya agar
          dapat bersaing dengan kompetitor.
        </p>
      </motion.div>
    </section>
  );
}
