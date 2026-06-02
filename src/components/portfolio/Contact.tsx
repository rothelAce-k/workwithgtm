import { motion } from "motion/react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  subject: z.string().trim().min(1, "Subject required").max(120),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

type State = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const issue of parsed.error.issues) fe[String(issue.path[0])] = issue.message;
      setErrors(fe);
      return;
    }
    setErrors({});
    setState("submitting");

    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:workwithgautam881@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailto;
      setState("sent");
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{ background: "var(--gradient-aurora)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
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
              className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-balance"
            >
              Let's build something <em className="italic text-primary">human-grade.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-muted-foreground max-w-md"
            >
              Available for contract roles, annotation audits, dataset reviews and long-term residencies. Replies within 24h.
            </motion.p>

            <div className="mt-10 space-y-3 text-sm font-mono uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center justify-between border-t border-border/60 pt-3">
                <span>Status</span>
                <span className="flex items-center gap-2 text-foreground">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Open to work
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 pt-3">
                <span>Response</span>
                <span className="text-foreground normal-case tracking-normal">Within 24h</span>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 pt-3">
                <span>Based in</span>
                <span className="text-foreground normal-case tracking-normal">India · Remote</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 rounded-2xl border border-border/60 bg-surface/60 backdrop-blur-xl p-6 md:p-10 shadow-[var(--shadow-card)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Jane Doe" error={errors.name} />
              <Field label="Email" name="email" type="email" placeholder="jane@studio.ai" error={errors.email} />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" placeholder="Annotation audit for our 2026 corpus" error={errors.subject} />
            </div>
            <div className="mt-5">
              <Field
                label="Message"
                name="message"
                as="textarea"
                placeholder="Tell me about the project, timeline and languages involved…"
                error={errors.message}
              />
            </div>

            <motion.button
              type="submit"
              disabled={state === "submitting"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground font-medium glow-ring disabled:opacity-70"
              data-cursor
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending…
                </>
              ) : state === "sent" ? (
                <>
                  <Check className="size-4" /> Opened your email client
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </>
              )}
            </motion.button>

            <p className="mt-4 text-xs text-muted-foreground">
              Your message opens in your mail client — no data is stored on this site.
            </p>
          </motion.form>
        </div>
      </div>

      <footer className="mt-32 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest border-t border-border/60 pt-8">
        <span>© 2026 Gautam — All rights reserved</span>
        <span>Crafted with care · No cookies, no tracking</span>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "textarea";
  error?: string;
}) {
  const base =
    "peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors";
  return (
    <label className="block group">
      <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1 group-focus-within:text-primary transition-colors">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
