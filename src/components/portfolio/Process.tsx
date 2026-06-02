import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./Expertise";

const steps = [
  { n: "01", title: "Discover", body: "Map your dataset, model behaviour and downstream metric. We define what 'good' looks like before a single label is drawn." },
  { n: "02", title: "Design", body: "Author guidelines, edge-case catalogues, taxonomy and inter-annotator agreement tests." },
  { n: "03", title: "Deploy", body: "Calibrate annotators, run gold-standard pilots and stand up QA dashboards with live drift monitoring." },
  { n: "04", title: "Deliver", body: "Ship versioned datasets, evaluation reports and the playbook your team needs to scale without me." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const line = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-32 px-4 bg-surface/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="03 — Process" title="From messy reality to model-ready signal." />

        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border/60 -translate-x-1/2" />
          <motion.div
            style={{ height: line }}
            className="absolute left-1/2 top-0 w-px bg-primary -translate-x-1/2 origin-top"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative grid md:grid-cols-2 gap-8 mb-20 last:mb-0"
            >
              <div className={i % 2 ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"}>
                <div className="font-mono text-xs text-primary tracking-widest">{s.n}</div>
                <h3 className="mt-3 font-display text-5xl">{s.title}</h3>
              </div>
              <div className={`${i % 2 ? "md:pr-16 md:text-right" : "md:pl-16"} text-muted-foreground text-lg max-w-sm ${i % 2 ? "md:ml-auto" : ""}`}>
                {s.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
