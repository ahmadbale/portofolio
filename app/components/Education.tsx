"use client";

import { motion } from "framer-motion";

interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    school: "SMK Negeri 8 Malang",
    degree: "Sekolah Menengah Kejuruan Rekayasa Perangkat Lunak",
    period: "Jul 2019 - Jun 2022",
    gpa: "87.86/100.00",
  },
  {
    school: "Politeknik Negeri Malang",
    degree: "(D4) Diploma 4 - Sistem Informasi Bisnis",
    period: "Aug 2022 - Aug 2026",
    gpa: "3.78/4.00",
    achievements: [
      "Mahasiswa Berprestasi Bidang Akademik (2023)",
      "Top 5 Finalis dalam kategori Perencanaan Bisnis TIK pada Internal Competition Jurusan Teknologi Informasi, Politeknik Negeri Malang.",
    ],
  },
];

export default function Education() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-12 text-center font-semibold"
      >
        Pendidikan
      </motion.h2>

      <div className="space-y-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-xl border border-[var(--card-border)] relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="space-y-2 md:w-1/3 shrink-0">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-primary">
                  {edu.school}
                </h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface font-medium">
                  {edu.degree}
                </p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-on-surface-variant uppercase tracking-widest">
                  {edu.period}
                </p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-on-surface-variant">
                  IPK: <span className="text-primary font-semibold">{edu.gpa}</span>
                </p>
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4 md:mt-0 md:flex-1">
                  <ul className="space-y-3">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed text-justify">
                        <span className="text-primary mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
