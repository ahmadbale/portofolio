"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  images: string[];
  link: string;
  tech: string[];
  category: "Website" | "UI/UX" | "Graphic Design";
}

const projects: Project[] = [
  {
    title: "Sistem Task Management",
    description: "Aplikasi To-Do List dengan konsep desain Neo Brutalism berbasis web yang digunakan untuk membantu pengguna dalam mengelola dan memantau tugas harian secara efisien.",
    images: ["/Login.jpg", "/dashboard.jpg", "/cards.jpg", "/calendar.jpg"],
    link: "https://todolist-pi-sage-41.vercel.app/login",
    tech: ["React", "Supabase"],
    category: "Website",
  },
  {
    title: "Sistem Survei Kepuasan Pelanggan Polinema",
    description: "Proyek sistem kepuasan pelanggan merupakan salah satu kebutuhan dalam mendukung proses belajar mengajar dan menciptakan lingkungan yang nyaman dan aman bagi pengguna atau masyarakat Polinema. Sistem ini digunakan untuk memastikan dan memberikan umpan balik dalam perbaikan dan evaluasi berbagai masalah. Penilaian kepuasan fasilitas polInema dapat membantu mengidentifikasi area yang perlu ditingkatkan dan memastikan bahwa kebutuhan pelanggan dapat terpenuhi.",
    images: ["/project_survey_1.png", "/project_survey_2.png", "/project_survey_3.png"],
    link: "https://github.com/ahmadbale/Project-Fix",
    tech: ["AdminLTE", "Bootstrap"],
    category: "Website",
  },
  {
    title: "Sistem PPID (Pejabat Pengelola Informasi & Dokumentasi Polinema)",
    description: "Sistem PPID  sistem informasi modern untuk mendukung layanan keterbukaan informasi publik di Politeknik Negeri Malang. Proyek ini bertujuan untuk memberikan akses informasi yang lebih mudah, transparan, dan efisien kepada masyarakat umum, sesuai dengan prinsip keterbukaan informasi publik.",
    images: ["/project_ppid_1.png", "/project_ppid_2.png"],
    link: "https://github.com",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    category: "Website",
  },
  {
    title: "Eco-Friendly Mobile App",
    description: "A modern UI/UX design for a mobile application focused on sustainable living and carbon footprint tracking.",
    images: ["/next.svg", "/vercel.svg"],
    link: "#",
    tech: ["Figma", "Prototyping"],
    category: "UI/UX",
  },
  {
    title: "Modern Branding Identity",
    description: "Graphic design project for a tech startup, including logo design, color palette, and social media assets.",
    images: ["/globe.svg"],
    link: "#",
    tech: ["Illustrator", "Photoshop"],
    category: "Graphic Design",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<{ project: Project; index: number } | null>(null);
  const categories = ["All", "Website", "UI/UX", "Graphic Design"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="projects">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-on-surface mb-8 font-semibold"
        >
          Featured Projects
        </motion.h2>

        {/* Filter Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                  ? "bg-primary text-background border-primary shadow-[0_0_15px_var(--shadow-color)]"
                  : "bg-[var(--card-bg)] text-on-surface-variant border-[var(--card-border)] hover:border-primary/50 hover:bg-[var(--card-bg-hover)]"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageClick={(index) => setSelectedProject({ project, index })}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ImageModal
            project={selectedProject.project}
            initialIndex={selectedProject.index}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ImageModal({ project, initialIndex, onClose }: { project: Project; initialIndex: number; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
        className="relative max-w-5xl w-full max-h-[90vh] aspect-video bg-background rounded-xl overflow-hidden border border-[var(--card-border)] shadow-2xl flex items-center justify-center"
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
              src={project.images[currentIndex]}
              alt={`Enlarged Project Image - ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {project.images.length > 1 && (
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
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-4" : "bg-white/30"
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

function ProjectCard({ project, onImageClick }: { project: Project; onImageClick: (index: number) => void }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group border border-[var(--card-border)] flex flex-col h-full"
    >
      <div
        className="relative aspect-video overflow-hidden bg-black/20 cursor-pointer"
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
              src={project.images[currentImage]}
              alt={`${project.title} - ${currentImage + 1}`}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </AnimatePresence>

        {project.images.length > 1 && (
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
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? "bg-primary w-3" : "bg-white/30"
                    }`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 pointer-events-none"></div>
      </div>

      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-on-surface">
          {project.title}
        </h3>
        <div>
          <p className={`font-[family-name:var(--font-hanken-grotesk)] text-sm text-on-surface-variant leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}>
            {project.description}
          </p>
          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs font-medium mt-1 hover:underline focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider bg-[var(--card-bg)] px-2 py-1 rounded text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 text-primary font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest font-semibold hover:gap-3 transition-all"
          >
            View Project
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
