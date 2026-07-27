"use client";

import { Marquee } from "@/components/ui/marquee";
import StackIcon from "tech-stack-icons";

export default function Skills() {

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="skills">
      <Marquee pauseOnHover speed={40} className="mt-0 sm:mt-0">
        {[
          { name: "Tailwind CSS", iconName: "tailwindcss" },
          { name: "Bootstrap", iconName: "bootstrap5" },
          { name: "HTML/CSS", iconName: "html5" },
          { name: "React", iconName: "react" },
          { name: "Laravel", iconName: "laravel" },
          { name: "MySQL", iconName: "mysql" },
        ].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 py-3 mx-4 glass-card rounded-full border border-[var(--card-border)] whitespace-nowrap">
            <StackIcon name={skill.iconName as any} className="w-5 h-5" />
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-on-surface">
              {skill.name}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover speed={40} direction="right" className="mt-4 sm:mt-6">
        {[
          { name: "Supabase", iconName: "supabase" },
          { name: "Next.js", iconName: "nextjs2" },
          { name: "Github", iconName: "github" },
          { name: "Figma", iconName: "figma" },
          { name: "Notion", iconName: "notion" },
          { name: "Postman", iconName: "postman" },
        ].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 py-3 mx-4 glass-card rounded-full border border-[var(--card-border)] whitespace-nowrap">
            <StackIcon name={skill.iconName as any} className="w-5 h-5" />
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-on-surface">
              {skill.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
