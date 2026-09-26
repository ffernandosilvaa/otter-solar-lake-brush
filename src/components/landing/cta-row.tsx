import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openCheckout, scrollToOffer } from "@/store/offer";

export function CtaRow({ secondary = true }: { secondary?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button size="lg" onClick={openCheckout} className="min-w-56">
          Quero meu acesso agora
          <ArrowRight className="size-4" />
        </Button>
        {secondary ? (
          <Button size="lg" variant="outline" onClick={scrollToOffer}>
            Ver a oferta completa
          </Button>
        ) : null}
      </div>
      <p className="flex items-center gap-1.5 text-sm text-muted">
        <ShieldCheck className="size-4 text-ok" />
        Acesso imediato · licença comercial · 7 dias de garantia
      </p>
    </div>
  );
}
