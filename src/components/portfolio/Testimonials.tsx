import { motion } from "motion/react";
import { SectionHeader } from "./Expertise";

const quotes = [
  { q: "Gautam rewrote our annotation guidelines in a weekend and our IAA jumped 22 points. Rare combination of rigor and speed.", who: "Head of Data, Frontier AI Lab" },
  { q: "The only reviewer I trust to find the failure mode I didn't think to look for.", who: "Research Engineer, RLHF Team" },
  { q: "A linguist who actually understands the model. We'd hire him as a full-time researcher tomorrow.", who: "ML Lead, Multilingual NLP" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-4 bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="05 — Words" title="What teams say after we ship." />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-8 flex flex-col"
            >
              <div className="font-display text-5xl text-primary leading-none">"</div>
              <blockquote className="mt-2 text-lg leading-relaxed flex-1">{t.q}</blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">— {t.who}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
