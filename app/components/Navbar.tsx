"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)] shadow-[0_0_20px_var(--shadow-color)] transition-colors duration-300"
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 py-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[32px] leading-tight text-on-surface tracking-tighter font-semibold transition-colors duration-300"
        >
          Ahmad Iqbal Firmansyah
        </motion.div>
        <div className="hidden md:flex gap-8 items-center">
          {[
            { name: "Tentang", href: "#about" },
            { name: "Pendidikan", href: "#education" },
            { name: "Keahlian", href: "#skills" },
            { name: "Pengalaman", href: "#experience" },
            { name: "Proyek", href: "#projects" },
            { name: "Sertifikat", href: "#certificates" },
            { name: "Kontak", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.name}
              className="group relative text-on-surface-variant font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest hover:text-primary transition-colors duration-300 font-medium py-1"
              href={link.href}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="ml-4 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
