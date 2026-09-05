"use client";

import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "PT RetGoo Sentris Informa",
    role: "Internship / Quality Control",
    period: "Jul 2020 - Nov 2020",
    description: [
      "Mengelola pengujian QA pada 2 sistem ERP secara bersamaan, memastikan standar kualitas yang konsisten dan penyelesaian tepat waktu untuk kedua platform.",
      "Menerapkan kerangka kerja Agile Scrum dalam proses QA, termasuk perencanaan sprint, rapat harian, tinjauan sprint, dan retrospeksi.",
      "Melakukan pengujian black-box dengan membuat dan menjalankan skenario pengujian, mendokumentasikan hasil pengujian, berkolaborasi dengan pengembang untuk melaporkan dan melacak bug serta menyusun dan memelihara release documentation untuk setiap deployment, yang merinci bug yang telah diperbaiki dan fitur yang dirilis di seluruh modul.",
    ],
  },
  {
    company: "UPA TIK Polinema",
    role: "Internship / Front End Developer",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Mengembangkan situs web PPID (Sistem Manajemen Informasi dan Dokumentasi) sebagai Pengembang Front-End, sehingga memungkinkan akses publik terhadap permintaan informasi dan meningkatkan efisiensi pencarian dokumen bagi institusi.",
      "Merancang UI/UX yang intuitif di Figma dan mengimplementasikannya menjadi front-end yang responsif dan dapat diakses menggunakan Laravel dan Bootstrap, memastikan pengalaman pengguna yang konsisten di berbagai perangkat.",
      "Menguji dan memvalidasi 161 endpoints REST API menggunakan Postman sebelum integrasi, sehingga mengurangi masalah inkonsistensi data dan memastikan komunikasi yang lancar antara frontend dan backend.",
    ],
  },
  {
    company: "CV Duta Technology",
    role: "Internship / Full Stack Developer",
    period: "Jul 2025 - Jan 2026",
    description: [
      "Mengembangkan Sistem Penerimaan Mahasiswa (SPMB) untuk STIMATA sebagai Pengembang Full Stack, mendigitalkan proses pendaftaran mahasiswa dan menggantikan alur kerja manual berbasis kertas.",
      "Merancang UI/UX yang berpusat pada pengguna di Figma dan mengimplementasikan sistem responsif menggunakan Laravel dan Tailwind CSS, memastikan kemudahan penggunaan bagi calon mahasiswa dan staf penerimaan.",
      "Membangun fitur end-to-end termasuk pendaftaran online, unggah dokumen, dashboard admin, beserta desain dan integrasi basis data menggunakan MySQL serta menerapkan RBAC (pendaftar, admin, panitia) untuk memperlancar proses peninjauan dan persetujuan penerimaan",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-12 text-center font-semibold"
      >
        Pengalaman Kerja
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-xl border border-[var(--card-border)] relative overflow-hidden group"
          >
            {/* Timeline indicator for mobile/desktop */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-2 md:w-1/3 shrink-0">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-primary">
                  {exp.role}
                </h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface font-medium">
                  {exp.company}
                </p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-on-surface-variant uppercase tracking-widest">
                  {exp.period}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 md:flex-1">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed text-justify">
                      <span className="text-primary mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
