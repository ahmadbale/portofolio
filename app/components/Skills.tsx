"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      icon: "terminal",
      title: "Front-End",
      iconColor: "text-[#cfbcff]",
      bgColor: "bg-[#cfbcff]/10",
      textColor: "text-[#cfbcff]",
      borderColor: "border-[#cfbcff]/20",
      tags: ["Tailwind CSS", "Bootstrap", "HTML/CSS"],
    },
    {
      icon: "database",
      title: "Back-End & Databases",
      iconColor: "text-[#e7c365]",
      bgColor: "bg-[#e7c365]/10",
      textColor: "text-[#e7c365]",
      borderColor: "border-[#e7c365]/20",
      tags: ["Laravel", "MySQL","Next.js"],
    },
    {
      icon: "design_services",
      title: "Tools & Methods",
      iconColor: "text-[#BB86FC]",
      bgColor: "bg-[#BB86FC]/10",
      textColor: "text-[#BB86FC]",
      borderColor: "border-[#BB86FC]/20",
      tags: ["Figma", "Notion", "Postman"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-space-grotesk)] text-[32px] md:text-[40px] leading-tight text-[#e6e0e9] mb-12 text-center font-semibold"
      >
        Technical Skills
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center gap-4 transition-all duration-300"
          >
            <span
              className={`material-symbols-outlined text-4xl ${skill.iconColor}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {skill.icon}
            </span>
            <h3 className="font-[family-name:var(--font-hanken-grotesk)] text-lg leading-relaxed text-[#e6e0e9] font-semibold">
              {skill.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {skill.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`${skill.bgColor} ${skill.textColor} font-[family-name:var(--font-jetbrains-mono)] text-xs px-3 py-1 rounded-full border ${skill.borderColor} font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
