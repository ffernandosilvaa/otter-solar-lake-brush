import { Check, Minus, X } from "lucide-react";
import { COMPARE } from "@/data/content";

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="mx-auto size-5 text-ok" strokeWidth={2.6} />;
  if (v === false) return <X className="mx-auto size-5 text-danger" strokeWidth={2.4} />;
  return <span className="text-sm text-ink-fg/70">{v}</span>;
}

export function Compare() {
  return (
    <section className="bg-ink px-4 py-20 text-ink-fg">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl sm:text-5xl">
          Prompt genérico… ou prompt feito para vender.
        </h2>
        <div className="mt-10 overflow-x-auto rounded-xl shadow-card">
          <table className="w-full min-w-lg border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-fg/5">
                <th className="px-4 py-4 font-medium"> </th>
                <th className="px-4 py-4 font-medium text-ink-fg/60">ChatGPT solto</th>
                <th className="px-4 py-4 font-medium text-ink-fg/60">Prompts grátis</th>
                <th className="bg-primary px-4 py-4 font-semibold text-primary-fg">Forbidden</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.label} className="border-t border-ink-fg/10">
                  <td className="px-4 py-3.5 font-medium">{row.label}</td>
                  <td className="px-4 py-3.5 text-center">
                    {typeof row.a === "string" ? row.a : <Cell v={row.a} />}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    {typeof row.b === "string" ? (
                      <span className="inline-flex items-center justify-center gap-1 text-gold">
                        <Minus className="size-3.5" /> {row.b}
                      </span>
                    ) : (
                      <Cell v={row.b} />
                    )}
                  </td>
                  <td className="bg-primary/20 px-4 py-3.5 text-center">
                    {typeof row.c === "string" ? (
                      <strong>{row.c}</strong>
                    ) : (
                      <Cell v={row.c} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
