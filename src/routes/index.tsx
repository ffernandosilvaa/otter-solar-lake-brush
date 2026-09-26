import { createFileRoute } from "@tanstack/react-router";
import { Checkout } from "@/components/landing/checkout";
import { Compare } from "@/components/landing/compare";
import { CtaRow } from "@/components/landing/cta-row";
import { Faq } from "@/components/landing/faq";
import { ForYou } from "@/components/landing/for-you";
import { Genie } from "@/components/landing/genie";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { Pillars } from "@/components/landing/pillars";
import { Problem } from "@/components/landing/problem";
import { Proof } from "@/components/landing/proof";
import { Results } from "@/components/landing/results";
import { Roi } from "@/components/landing/roi";
import { Solution } from "@/components/landing/solution";
import { Steps } from "@/components/landing/steps";
import { StickyCta } from "@/components/landing/sticky-cta";
import { UrgencyBar } from "@/components/landing/urgency-bar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="bg-bg pb-24 text-fg sm:pb-0">
      <UrgencyBar />
      <Hero />
      <Problem />
      <Solution />
      <Steps />
      <Results />
      <Genie />
      <Pillars />
      <Compare />
      <ForYou />
      <Roi />
      <Proof />
      <Offer />
      <Faq />
      <footer className="border-t border-line px-4 py-16 text-center">
        <p className="font-serif text-2xl">O crédito que você ia queimar esta semana já paga o pack.</p>
        <div className="mt-8">
          <CtaRow />
        </div>
        <p className="mt-12 text-xs text-muted">© 2026 Forbidden Prompts. Pagamento único. Licença comercial.</p>
      </footer>
      <StickyCta />
      <Checkout />
    </main>
  );
}
