"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const APP_EMAIL = "ahmadfirmansyah385@gmail.com";
const APP_PHONE = "+62 82138700196";
const WEB3FORMS_ACCESS_KEY = "10b99743-dde3-4911-a10c-05bdaddd7603"; // Ganti dengan access key dari web3forms.com

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/ahmadbale" },
    { label: "WhatsApp", href: "https://wa.me/6282138700196" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ahmadbalee" },
    { label: "Instagram", href: "https://www.instagram.com/iqbal.firmn" },
  ];

  const contactInfo = [
    { icon: "mail", label: "Email", value: APP_EMAIL },
    { icon: "location_on", label: "Location", value: "Malang, Indonesia" },
    { icon: "call", label: "Phone", value: APP_PHONE },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <ContactCard
          title="Contact Me"
          description="If you have any questions or need help, please fill out the form here or reach out via email. I will do my best to respond within 1 business day."
          contactInfo={contactInfo}
        >
          {/* Simple Contact Form */}
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1.5">
              <label className="font-[family-name:var(--font-hanken-grotesk)] text-sm font-medium text-on-surface">
                Name
              </label>
              <input
                type="text"
                placeholder="Type your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md px-4 py-2 text-on-surface font-[family-name:var(--font-jetbrains-mono)] text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-[family-name:var(--font-hanken-grotesk)] text-sm font-medium text-on-surface">
                Email
              </label>
              <input
                type="email"
                placeholder="Type your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md px-4 py-2 text-on-surface font-[family-name:var(--font-jetbrains-mono)] text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-[family-name:var(--font-hanken-grotesk)] text-sm font-medium text-on-surface">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-md px-4 py-2 text-on-surface font-[family-name:var(--font-jetbrains-mono)] text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 bg-primary text-background font-[family-name:var(--font-jetbrains-mono)] font-medium text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm font-[family-name:var(--font-jetbrains-mono)]">
                Message sent successfully! I will reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-[family-name:var(--font-jetbrains-mono)]">
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </ContactCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 flex flex-col items-center gap-6"
      >
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-surface">
          Find Me
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-x-2 rounded-full px-6 py-2.5 hover:bg-[var(--card-bg-hover)] hover:scale-105 transition-all duration-300 border border-[var(--card-border)]"
            >
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium tracking-wide text-primary">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ------------------------------------------
// Inner Components
// ------------------------------------------

type ContactInfoProps = {
  icon: string;
  label: string;
  value: string;
};

type ContactCardProps = {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  children?: React.ReactNode;
};

function PlusIcon({ className }: { className?: string }) {
  // Using Material Symbols as a Plus icon replacement, or simple SVG.
  // To match the exact look of Lucide's PlusIcon:
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  children,
}: ContactCardProps) {
  return (
    <div className="glass-card border border-[var(--card-border)] relative grid h-full w-full rounded-xl shadow-lg md:grid-cols-2 lg:grid-cols-3">
      {/* Plus Icons on corners */}
      <PlusIcon className="text-on-surface opacity-20 absolute -top-3 -left-3 h-6 w-6" />
      <PlusIcon className="text-on-surface opacity-20 absolute -top-3 -right-3 h-6 w-6" />
      <PlusIcon className="text-on-surface opacity-20 absolute -bottom-3 -left-3 h-6 w-6" />
      <PlusIcon className="text-on-surface opacity-20 absolute -right-3 -bottom-3 h-6 w-6" />

      {/* Left Content Area */}
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-6 px-6 py-10 md:p-12">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-on-surface md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="font-[family-name:var(--font-hanken-grotesk)] text-on-surface-variant max-w-xl text-sm md:text-base lg:text-lg leading-relaxed">
            {description}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Area */}
      <div className="bg-[var(--card-bg)] flex h-full w-full items-center border-t border-[var(--card-border)] p-6 md:col-span-1 md:border-t-0 md:border-l rounded-b-xl md:rounded-b-none md:rounded-r-xl lg:p-8">
        {children}
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 flex items-center justify-center">
        <span
          className="material-symbols-outlined text-primary text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      <div>
        <p className="font-[family-name:var(--font-hanken-grotesk)] font-medium text-on-surface mb-1 text-base">
          {label}
        </p>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-on-surface-variant text-sm">
          {value}
        </p>
      </div>
    </div>
  );
}
