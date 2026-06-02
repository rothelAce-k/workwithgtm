import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Brain, Languages, Database, Cpu, Tags, MessageSquareQuote, LineChart, Network } from "lucide-react";

const cards = [
  { icon: Database, title: "Data Annotation", desc: "Bounding boxes, NER, intent, sentiment, multi-turn dialog labelling across 14+ languages.", tags: ["NER", "Intent", "RLHF"] },
  { icon: Tags, title: "Data Labelling Ops", desc: "Designing taxonomies, guidelines and QA loops for 50+ annotator teams.", tags: ["Taxonomy", "QA", "IAA"] },
  { icon: Languages, title: "Linguistic Expertise", desc: "Computational morphology, syntax trees, dialectal nuance and code-switching analysis.", tags: ["Morphology", "Syntax"] },
  { icon: MessageSquareQuote, title: "LLM Evaluation", desc: "Red-teaming, hallucination scoring and side-by-side preference modelling.", tags: ["RLHF", "DPO", "Eval"] },
  { icon: Brain, title: "ML Engineering", desc: "Fine-tuning, embeddings, retrieval pipelines and production-grade inference.", tags: ["PyTorch", "HF", "vLLM"] },
  { icon: Cpu, title: "ML Training", desc: "Curating instruction datasets, SFT and reward modelling for chat assistants.", tags: ["SFT", "Reward"] },
  { icon: Network, title: "Data Collection", desc: "Crowd-sourced speech, image and text corpora with consent-first workflows.", tags: ["Speech", "Vision"] },
  { icon: LineChart, title: "Data Science", desc: "Experimentation, statistical modelling and decision-grade analytics dashboards.", tags: ["Stats", "A/B"] },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="02 — Expertise" title="A toolkit forged at the seam of language & machines." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden">
          {cards.map((c, i) => (
            <TiltCard key={c.title} index={i}>
              <c.icon className="size-6 text-primary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="group relative bg-surface p-6 min-h-[220px] flex flex-col [transform-style:preserve-3d]"
      data-cursor
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: useTransform(
            [glowX, glowY] as never,
            ([x, y]: string[]) => `radial-gradient(220px circle at ${x} ${y}, oklch(0.88 0.22 130 / 0.18), transparent 70%)`,
          ),
        }}
      />
      <div className="relative [transform:translateZ(20px)]">{children}</div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-end">
      <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
      <h2 className="md:col-span-9 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-balance">{title}</h2>
    </div>
  );
}
