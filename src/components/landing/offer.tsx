import { Check, Lock, ShieldCheck } from "lucide-react";
import { PRICE } from "@/data/content";
import { formatBrl } from "@/lib/utils";
import { openCheckout } from "@/store/offer";
import { Button } from "@/components/ui/button";
import { formatCountdown, useCountdown } from "./use-countdown";
import { useOffer } from "@/store/offer";

const INCLUDED = [
  "400 prompts testados, organizados em 9 categorias",
  "8 Personagens com DNA de rosto travado",
  "Prompt Genie — stack completo em 1 clique",
  "Planejador de 30 dias + favoritos (app, não PDF)",
  "Guia: 8 regras + checklist pré-publicação",
  "3 bônus + 2 presentes de lançamento",
  "Licença comercial e atualizações vitalícias",
  "Garantia incondicional de 7 dias",
];

export function Offer() {
  const t = useCountdown();
  const seats = useOffer((s) => s.seats);

  return (
    <section id="oferta" className="scroll-mt-28 bg-ink px-4 py-20 text-ink-fg">
      <div className="mx-auto max-w-lg">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Acesso imediato
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-4xl">
          Um pagamento. Um rosto. Uma máquina de conteúdo.
        </h2>
        <div className="mt-8 rounded-xl bg-surface p-6 text-fg shadow-lift sm:p-8">
          <p className="text-sm text-muted">Lançamento · resta {formatCountdown(t)}</p>
          <div className="mt-2 flex items-end gap-3">
            <span className="font-serif text-5xl">{formatBrl(PRICE.now)}</span>
            <span className="mb-1 text-muted">
              <s>{formatBrl(PRICE.full)}</s> · {PRICE.offPct}% off
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">Pagamento único. Sem mensalidade. Sem “plano anual”.</p>
          <ul className="mt-6 space-y-2.5">
            {INCLUDED.map((i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-ok" strokeWidth={2.6} />
                {i}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8 w-full" onClick={openCheckout}>
            <Lock className="size-4" />
            Garantir meu acesso por {formatBrl(PRICE.now)}
          </Button>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
            <ShieldCheck className="size-3.5 text-ok" />
            {seats} acessos restantes nesta faixa · garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
