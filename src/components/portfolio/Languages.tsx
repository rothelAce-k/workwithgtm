import { motion } from "motion/react";
import { SectionHeader } from "./Expertise";

const langs = [
  { name: "English", level: "Native", pct: 100, script: "Aa" },
  { name: "Hindi", level: "Native", pct: 100, script: "अ" },
  { name: "Marathi", level: "Native", pct: 95, script: "म" },
  { name: "French", level: "Professional", pct: 80, script: "Éé" },
];

export function Languages() {
  return (
    <section className="relative py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="04 — Linguistic Range" title="Four working languages. One craft." />
        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden">
          {langs.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              data-cursor
              className="group relative bg-surface p-8 overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                    {l.level}
                  </div>
                  <h3 className="font-display text-4xl">{l.name}</h3>
                </div>
                <motion.span
                  initial={{ opacity: 0.4, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="font-display text-7xl text-primary/30 leading-none group-hover:text-primary/70 transition-colors"
                >
                  {l.script}
                </motion.span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex-1 h-px bg-border relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: l.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 bg-primary"
                  />
                </div>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">{l.pct}%</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
