import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, GENIE_STACKS } from "@/data/content";
import { cn } from "@/lib/utils";

export function Genie() {
  const [cat, setCat] = useState(CATEGORIES[0]);
  const stack = GENIE_STACKS[cat];
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(label: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* preview may block clipboard */
    }
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1600);
  }

  const blocks = [
    { id: "IDENTIDADE", text: stack.identity },
    { id: "LOOK + POSE", text: stack.wardrobe },
    { id: "ENQUADRE + LUZ", text: stack.light },
  ];

  return (
    <section className="bg-ink px-4 py-20 text-ink-fg">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Prompt Genie · um clique
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">
          Escolha a categoria. Copie o stack. Cole na IA.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-fg/70">
          Isto não é um PDF. É o motor: o prompt se reescreve em torno do DNA do Personagem.
          Toque, copie, gere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full px-3 py-2 text-left text-sm transition-colors duration-150",
                cat === c
                  ? "bg-primary text-primary-fg"
                  : "bg-ink-fg/10 text-ink-fg/80 hover:bg-ink-fg/15",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          {blocks.map((b) => (
            <div key={b.id} className="rounded-xl bg-ink-fg/5 p-4 shadow-card">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="rounded-md bg-ok/20 px-2 py-0.5 text-xs font-semibold tracking-wide text-ok uppercase">
                  {b.id}
                </span>
                <button
                  type="button"
                  onClick={() => copy(b.id, b.text)}
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm text-ink-fg/80 hover:text-ink-fg"
                >
                  {copied === b.id ? (
                    <>
                      <Check className="size-4 text-ok" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" /> Copiar
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm leading-relaxed text-ink-fg/85">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
