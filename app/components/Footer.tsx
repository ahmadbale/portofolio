import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-[var(--card-border)] w-full py-12 mt-auto transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 gap-6">
        <div className="font-[family-name:var(--font-space-grotesk)] text-[32px] leading-tight text-on-surface font-semibold transition-colors duration-300">
          Ahmad Iqbal Firmansyah
        </div>
        <p className="font-[family-name:var(--font-hanken-grotesk)] text-base text-secondary transition-colors duration-300">
          © 2026 Ahmad Iqbal Firmansyah.
        </p>
      </div>
    </footer>
  );
}
