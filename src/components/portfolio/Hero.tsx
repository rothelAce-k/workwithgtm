import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-28">
      {/* aurora */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "var(--gradient-glow)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Available for Q3 — 2026
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,12vw,11rem)] leading-[0.9] text-balance">
          {["Teaching", "machines", "to", "understand", "humans."].map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <motion.span
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {i === 2 ? <em className="italic text-primary font-normal">{w}</em> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="md:col-span-6 text-lg text-muted-foreground max-w-md"
          >
            I'm <span className="text-foreground">Gautam</span> — a data scientist, ML engineer and linguist building human-grade datasets, annotation pipelines and evaluation frameworks for frontier AI labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="md:col-span-6 md:col-start-9 flex flex-col gap-3 text-sm font-mono"
          >
            <Stat label="Projects shipped" value="120+" />
            <Stat label="Languages worked in" value="14" />
            <Stat label="Annotations reviewed" value="2.4M" />
          </motion.div>
        </div>
      </motion.div>

      <ScrollHint />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-t border-border/60 pt-3">
      <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{label}</span>
      <span className="font-display text-3xl">{value}</span>
    </div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
    >
      Scroll
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
      />
    </motion.div>
  );
}
