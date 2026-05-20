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
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-[#e6e0e9] mb-6 font-semibold">
          About Me
        </h2>
        <p className="font-[family-name:var(--font-hanken-grotesk)] text-base leading-relaxed text-[#cbc4d2]">
          I am a D4 Business Information Systems student at Politeknik Negeri Malang with a strong passion for building scalable web applications. My journey includes intensive training through Bangkit Academy and AI Ignition Training, where I honed my skills in modern web development and artificial intelligence integration. I strive to create digital experiences that are not only functional but intuitively designed for the end user.
        </p>
      </motion.div>
    </section>
  );
}
