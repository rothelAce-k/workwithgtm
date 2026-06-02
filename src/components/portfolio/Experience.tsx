import { motion } from "motion/react";
import { SectionHeader } from "./Expertise";

const jobs = [
  {
    company: "Outlier",
    role: "Senior AI Trainer & Linguistic Reviewer",
    period: "2024 — Present",
    blurb: "Lead reviewer for multilingual RLHF projects. Built rubric systems for code, reasoning and creative writing tasks used across 200+ contractors.",
    color: "oklch(0.88 0.22 130)",
  },
  {
    company: "DataAnnotation.tech",
    role: "Senior Annotator — LLM Evaluation",
    period: "2023 — 2025",
    blurb: "Side-by-side preference judgements, jailbreak analysis and chain-of-thought grading for frontier chat models.",
    color: "oklch(0.72 0.18 35)",
  },
  {
    company: "Invisible AI",
    role: "Data Operations Specialist",
    period: "2023 — 2024",
    blurb: "Pipeline ownership for vision + language datasets. Reduced annotation cycle time by 38% through taxonomy refactoring.",
    color: "oklch(0.7 0.18 200)",
  },
  {
    company: "TransPerfect",
    role: "Computational Linguist",
    period: "2022 — 2023",
    blurb: "Localization QA, MT post-editing and terminology management for enterprise clients across EMEA & APAC.",
    color: "oklch(0.65 0.2 320)",
  },
  {
    company: "RWS",
    role: "Linguistic Quality Specialist",
    period: "2021 — 2022",
    blurb: "Authored style guides and TM curation strategies powering high-volume translation workflows.",
    color: "oklch(0.78 0.16 80)",
  },
];

export function Experience() {
  return (
    <section id="work" className="relative py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="01 — Selected Work" title="Five years inside the labs shaping modern AI." />

        <div className="mt-20 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative grid md:grid-cols-2 gap-6 mb-16 last:mb-0 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-8 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="flex items-baseline gap-3 font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 md:justify-end">
                  {i % 2 === 0 && <span className="md:hidden">{job.period}</span>}
                  <span className={`hidden md:inline ${i % 2 ? "order-2" : ""}`}>{job.period}</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl">{job.company}</h3>
                <p className="mt-2 text-primary font-medium">{job.role}</p>
                <p className="mt-3 text-muted-foreground max-w-md md:ml-auto">{job.blurb}</p>
              </div>
              <div className="hidden md:block" />
              <motion.span
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 size-4 rounded-full ring-4 ring-background"
                style={{ background: job.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
