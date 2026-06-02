const companies = ["Outlier", "DataAnnotation.tech", "TransPerfect", "RWS", "Invisible AI", "Scale AI", "Surge HQ", "Labelbox"];

export function Marquee() {
  return (
    <section className="border-y border-border/60 bg-surface/50 py-10 overflow-hidden">
      <div className="flex gap-16 marquee w-max">
        {[...companies, ...companies].map((c, i) => (
          <div key={i} className="flex items-center gap-16 font-display text-3xl text-muted-foreground whitespace-nowrap">
            {c}
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
