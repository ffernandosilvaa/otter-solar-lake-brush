import { PRICE } from "@/data/content";
import { formatBrl } from "@/lib/utils";
import { CtaRow } from "./cta-row";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Forbidden Prompts · Engine de influenciador
        </p>
        <h1 className="font-serif text-4xl font-medium text-fg sm:text-6xl">
          Pare de gerar lixo.
          <span className="mt-2 block italic text-primary">Gere um rosto que vende.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          400 prompts engenheirados + DNA de Personagem + o Genie que escreve o shot em um clique.
          Mesma cara. Pele real. Conteúdo pronto pra PIX — inclusive em IA gratuita.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="rounded-full bg-surface px-3 py-1.5 text-muted shadow-card">
            de <s className="text-muted/70">{formatBrl(PRICE.full)}</s>
          </span>
          <span className="rounded-full bg-ink px-3 py-1.5 font-semibold text-ink-fg">
            {formatBrl(PRICE.now)} hoje
          </span>
          <span className="rounded-full bg-gold/15 px-3 py-1.5 font-semibold text-gold">
            {PRICE.offPct}% off
          </span>
        </div>
        <div className="mt-10">
          <CtaRow />
        </div>
      </div>
    </section>
  );
}
