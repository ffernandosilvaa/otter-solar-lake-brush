import { Check } from "lucide-react";
import { FOR_YOU } from "@/data/content";

export function ForYou() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-serif text-3xl sm:text-5xl">Esse pack é para você se…</h2>
        <ul className="mt-10 space-y-3">
          {FOR_YOU.map((t) => (
            <li key={t} className="flex gap-3 rounded-xl bg-surface p-4 shadow-card">
              <Check className="mt-0.5 size-5 shrink-0 text-ok" strokeWidth={2.4} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <blockquote className="mt-12 text-center font-serif text-2xl italic text-fg sm:text-3xl">
          “Com o prompt certo, até IA gratuita entrega resultado de agência. Sem o prompt certo, a
          ferramenta cara só gera lixo mais rápido.”
        </blockquote>
      </div>
    </section>
  );
}
