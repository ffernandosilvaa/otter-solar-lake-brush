import { PRICE } from "@/data/content";
import { formatBrl } from "@/lib/utils";
import { openCheckout } from "@/store/offer";
import { Button } from "@/components/ui/button";
import { formatCountdown, useCountdown } from "./use-countdown";

export function StickyCta() {
  const t = useCountdown();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="font-semibold tabular-nums">{formatBrl(PRICE.now)}</p>
          <p className="truncate text-xs text-muted">encerra {formatCountdown(t)}</p>
        </div>
        <Button className="ml-auto" onClick={openCheckout}>
          Garantir acesso
        </Button>
      </div>
    </div>
  );
}
