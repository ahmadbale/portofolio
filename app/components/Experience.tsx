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
    company: "Politeknik Negeri Malang",
    role: "Business Information Systems Student",
    period: "2022 - Present",
    description: [
      "Focusing on web development (Laravel) and business process modeling.",
      "Developing various campus projects and industrial standard applications.",
      "Active in software engineering and artificial intelligence integration.",
    ],
  },
  {
    company: "Bangkit Academy",
    role: "Mobile Development Cohort",
    period: "2024",
    description: [
      "Intensive training in Android development and cloud-based architecture.",
      "Collaborated in a capstone project to build a scalable mobile solution.",
      "Gained hands-on experience with production-level code and team collaboration.",
    ],
  },
  {
    company: "Freelance Developer",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description: [
      "Building customized web solutions for internal management systems.",
      "Designing responsive and user-centered interfaces with modern frameworks.",
      "Integrating third-party APIs and managing relational databases.",
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
        className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-[#e6e0e9] mb-12 text-center font-semibold"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group"
          >
            {/* Timeline indicator for mobile/desktop */}
            <div className="md:flex md:justify-between md:items-start gap-8">
              <div className="space-y-2">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-[#cfbcff]">
                  {exp.role}
                </h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#e6e0e9] font-medium">
                  {exp.company}
                </p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#cbc4d2] uppercase tracking-widest">
                  {exp.period}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 md:max-w-xl">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#cbc4d2] leading-relaxed">
                      <span className="text-[#cfbcff] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[#cfbcff]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cfbcff]/5 rounded-full blur-[60px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#cfbcff]/10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
