import { motion } from "motion/react";
import { SectionHeader } from "./Expertise";

export function About() {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="06 — About" title="A linguist who fell in love with neural networks." />
        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I started in <span className="text-foreground">comparative linguistics</span> — chasing the grammar of dying dialects and the wandering etymologies of trade languages. Then transformers happened. Suddenly the questions I'd been asking about language could be answered, scaled, and broken in entirely new ways.
            </p>
            <p>
              Today I sit at the intersection of <span className="text-foreground">human judgement</span> and <span className="text-foreground">model behaviour</span>. I label, I train, I evaluate. I write the guidelines, run the QA, and ship the dataset. When teams need someone who can speak both <em className="italic text-primary">phonology</em> and <em className="italic text-primary">PyTorch</em>, I get the call.
            </p>
            <p>
              When I'm offline you'll find me in a library learning a fifteenth alphabet, or quietly losing at chess.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 space-y-3 font-mono text-sm"
          >
            {[
              ["Based", "Remote / Asia"],
              ["Timezone", "GMT+5:30"],
              ["Stack", "PyTorch · HF · Label Studio · Prodigy"],
              ["Reading", "Bender & Koller — 'Climbing towards NLU'"],
              ["Currently", "Building eval rubrics for multilingual reasoning"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-t border-border/60 pt-3">
                <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{k}</span>
                <span className="text-right">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
