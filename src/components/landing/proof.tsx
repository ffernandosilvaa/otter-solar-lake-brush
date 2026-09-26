import { Star } from "lucide-react";
import { MESSAGES, REVIEWS } from "@/data/content";
import { cn } from "@/lib/utils";

export function Proof() {
  return (
    <section className="border-y border-line bg-surface px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          O que quem pagou escreveu
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">Prova social, não depoimento de banco de imagem.</h2>

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-8 rounded-xl bg-bg p-6 shadow-card">
          <div className="text-center">
            <p className="font-serif text-5xl">4.9</p>
            <div className="mt-1 flex justify-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold" />
              ))}
            </div>
            <p className="mt-1 text-xs text-muted">média dos compradores</p>
          </div>
          <div className="flex-1 space-y-1.5 text-xs text-muted">
            {[
              [5, 94],
              [4, 5],
              [3, 1],
              [2, 0],
              [1, 0],
            ].map(([stars, pct]) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="w-3">{stars}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-8 tabular-nums">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="rounded-xl p-5 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-fg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-muted">{r.role} · compra verificada</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold" />
                ))}
              </div>
              <h3 className="mt-2 font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">“{r.text}”</p>
              <p className="mt-3 text-xs text-muted">{r.helpful} pessoas acharam útil</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {MESSAGES.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-2xl bg-bg shadow-card">
              <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-fg">
                  {m.initial}
                </div>
                <p className="font-semibold">{m.name}</p>
              </div>
              <div className="space-y-2 p-4">
                {m.thread.map((b, i) => (
                  <p
                    key={i}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                      b.side === "left"
                        ? "rounded-bl-sm bg-line/70"
                        : "ml-auto rounded-br-sm bg-primary text-primary-fg",
                    )}
                  >
                    {b.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
