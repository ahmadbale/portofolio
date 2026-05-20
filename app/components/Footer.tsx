import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141218] border-t border-white/5 w-full py-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 gap-6">
        <div className="font-[family-name:var(--font-space-grotesk)] text-[32px] leading-tight text-[#e6e0e9] font-semibold">
          Ahmad Iqbal Firmansyah
        </div>
        <p className="font-[family-name:var(--font-hanken-grotesk)] text-base text-[#cdc0e9]">
          © 2026 Ahmad Iqbal Firmansyah. Built with technical mastery.
        </p>
        <div className="flex gap-6">
          <Link
            className="text-[#cbc4d2] font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest hover:text-[#cfbcff] transition-all duration-300 font-medium"
            href="#"
          >
            LinkedIn
          </Link>
          <Link
            className="text-[#cbc4d2] font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest hover:text-[#cfbcff] transition-all duration-300 font-medium"
            href="#"
          >
            GitHub
          </Link>
          <Link
            className="text-[#cbc4d2] font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest hover:text-[#cfbcff] transition-all duration-300 font-medium"
            href="#"
          >
            Source Code
          </Link>
        </div>
      </div>
    </footer>
  );
}
