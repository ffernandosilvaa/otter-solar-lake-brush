import { useState } from "react";
import { PRICE } from "@/data/content";
import { formatBrl } from "@/lib/utils";

export function Roi() {
  const [ticket, setTicket] = useState(150);
  const jobs = Math.max(1, Math.ceil(PRICE.now / ticket));

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-xl rounded-xl bg-surface p-6 shadow-card sm:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Conta de guardanapo</p>
        <h2 className="mt-2 font-serif text-3xl">Em quantos jobs o pack se paga?</h2>
        <p className="mt-2 text-sm text-muted">
          Arraste o valor médio de um UGC ou post patrocinado. O pack custa {formatBrl(PRICE.now)} uma vez.
        </p>
        <label className="mt-6 block text-sm font-medium">
          Ticket médio: <span className="tabular-nums text-primary">{formatBrl(ticket)}</span>
        </label>
        <input
          type="range"
          min={50}
          max={800}
          step={10}
          value={ticket}
          onChange={(e) => setTicket(Number(e.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-primary"
        />
        <p className="mt-6 rounded-lg bg-ink px-4 py-4 text-ink-fg">
          Com {formatBrl(ticket)} por entrega, o Forbidden se paga em{" "}
          <strong className="text-gold">
            {jobs} {jobs === 1 ? "único job" : "jobs"}
          </strong>
          . O resto do mês é margem.
        </p>
      </div>
    </section>
  );
}
