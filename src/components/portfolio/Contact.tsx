import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{ background: "var(--gradient-aurora)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-primary"
        >
          07 — Get in touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-balance"
        >
          Let's build something <em className="italic text-primary">human-grade.</em>
        </motion.h2>

        <motion.a
          href="mailto:workwithgautam881@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-primary-foreground font-medium text-lg glow-ring"
          data-cursor
        >
          workwithgautam881@gmail.com
          <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-muted-foreground max-w-md mx-auto"
        >
          Available for contract roles, annotation audits, dataset reviews and long-term residencies. Replies within 24h.
        </motion.p>
      </div>

      <footer className="mt-32 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest border-t border-border/60 pt-8">
        <span>© 2026 Gautam — All rights reserved</span>
        <span>Crafted with care · No cookies, no tracking</span>
      </footer>
    </section>
  );
}
