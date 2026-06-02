import { motion } from "motion/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-border/60 bg-background/60 px-5 py-2.5 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 font-display text-lg">
            <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground font-sans font-bold text-sm">G</span>
            <span>Gautam</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:workwithgautam881@gmail.com"
            className="rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Let's talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}
