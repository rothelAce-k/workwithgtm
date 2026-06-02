import { motion } from "motion/react";
import { SectionHeader } from "./Expertise";

const langs = [
  { name: "English", level: "Native", pct: 100 },
  { name: "Hindi", level: "Native", pct: 100 },
  { name: "Spanish", level: "Professional", pct: 85 },
  { name: "French", level: "Professional", pct: 78 },
  { name: "German", level: "Working", pct: 65 },
  { name: "Japanese", level: "Working", pct: 60 },
  { name: "Mandarin", level: "Conversational", pct: 50 },
  { name: "Arabic", level: "Conversational", pct: 45 },
];

export function Languages() {
  return (
    <section className="relative py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="04 — Linguistic Range" title="Eight working languages. Fourteen annotated." />
        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-6">
          {langs.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display text-2xl">{l.name}</span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{l.level}</span>
              </div>
              <div className="h-px bg-border/60 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 left-0 bg-primary"
                  style={{ height: 2, top: -0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
