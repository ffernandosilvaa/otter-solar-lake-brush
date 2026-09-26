import { X } from "lucide-react";
import { PROBLEMS } from "@/data/content";

export function Problem() {
  return (
    <section className="bg-ink px-4 py-20 text-ink-fg">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          A conta que ninguém fecha
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl sm:text-5xl">
          O problema nunca foi a ferramenta. Foi o prompt.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-fg/70">
          Você não precisa de mais um curso. Precisa do sistema que os criadores que faturam
          realmente colam na IA — e não postam no YouTube.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="rounded-xl bg-ink-fg/5 p-5 shadow-card">
              <div className="mb-3 flex size-8 items-center justify-center rounded-full bg-danger/20 text-danger">
                <X className="size-4" strokeWidth={2.5} />
              </div>
              <h3 className="font-sans text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-fg/70">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
