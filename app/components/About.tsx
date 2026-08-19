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
          Lulusan Sistem Informasi Bisnis yang teliti dan termotivasi, dengan pengalaman praktis di bidang Software Development dan Quality Assurance. Mahir dalam membangun aplikasi web dan melakukan pengujian sistem untuk memastikan fungsionalitas dan kegunaan. Memiliki semangat tinggi dalam belajar secara berkelanjutan dan meningkatkan kualitas Software melalui praktik pengembangan dan pengujian yang terstruktur.
        </p>
      </motion.div>
    </section>
  );
}
