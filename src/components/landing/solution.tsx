import { Check } from "lucide-react";
import { BENEFITS } from "@/data/content";
import { CtaRow } from "./cta-row";

export function Solution() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          O que entra hoje
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">
          Tudo o que falta entre você e imagens que ninguém percebe que são IA.
        </h2>
        <ul className="mt-10 space-y-3">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-xl bg-surface p-4 shadow-card"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ok/15 text-ok">
                <Check className="size-3.5" strokeWidth={2.6} />
              </span>
              <span className="text-[0.95rem] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaRow secondary={false} />
        </div>
      </div>
    </section>
  );
}
