"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 py-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[32px] leading-tight text-[#e6e0e9] tracking-tighter font-semibold"
        >
          Ahmad Iqbal Firmansyah
        </motion.div>
        <div className="hidden md:flex gap-8 items-center">
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.name}
              className="group relative text-[#cbc4d2] font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest hover:text-[#cfbcff] transition-colors duration-300 font-medium py-1"
              href={link.href}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cfbcff] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-ghost px-6 py-2 rounded-md font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase font-medium"
        >
          Resume
        </motion.button>
      </div>
    </motion.nav>
  );
}
