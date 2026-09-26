import { PILLARS } from "@/data/content";

export function Pillars() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">A oferta</p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">Três pilares. Três dores. Um pack.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.title} className="rounded-xl bg-ink p-6 text-ink-fg shadow-lift">
              <p className="text-xs font-semibold tracking-wider text-gold uppercase">{p.kicker}</p>
              <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-fg/70">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
