import { STEPS } from "@/data/content";

export function Steps() {
  return (
    <section className="border-y border-line bg-surface px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Sem curso de 40 horas
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">Três passos. Primeiro post hoje.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <article key={s.n} className="rounded-xl p-6 shadow-card">
              <p className="font-serif text-3xl text-primary/80">{s.n}</p>
              <h3 className="mt-4 font-sans text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
