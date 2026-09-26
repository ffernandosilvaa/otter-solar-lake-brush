import { Flame } from "lucide-react";
import { PRICE, TICKER } from "@/data/content";
import { useOffer } from "@/store/offer";
import { formatCountdown, useCountdown } from "./use-countdown";

export function UrgencyBar() {
  const t = useCountdown();
  const seats = useOffer((s) => s.seats);

  return (
    <div className="sticky top-0 z-40 bg-ink text-ink-fg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-center text-sm">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Flame className="size-3.5 text-gold" />
          Lançamento · {PRICE.offPct}% off · restam {seats} acessos
        </span>
        <span className="tabular-nums tracking-wide text-ink-fg/80">
          encerra em <strong className="text-ink-fg">{formatCountdown(t)}</strong>
        </span>
      </div>
      <div className="h-8 overflow-hidden border-t border-ink-fg/10">
        <div className="ticker-track flex h-8 w-max flex-nowrap items-center gap-10 whitespace-nowrap text-xs text-ink-fg/70">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="live-dot size-1.5 rounded-full bg-ok" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
