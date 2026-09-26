import { X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PRICE } from "@/data/content";
import { cn, formatBrl } from "@/lib/utils";
import { bumpPrice, useOffer } from "@/store/offer";

export function Checkout() {
  const open = useOffer((s) => s.open);
  const done = useOffer((s) => s.done);
  const bump = useOffer((s) => s.bump);
  const name = useOffer((s) => s.name);
  const email = useOffer((s) => s.email);
  const setOpen = useOffer((s) => s.setOpen);
  const setBump = useOffer((s) => s.setBump);
  const setName = useOffer((s) => s.setName);
  const setEmail = useOffer((s) => s.setEmail);
  const complete = useOffer((s) => s.complete);
  const total = PRICE.now + (bump ? bumpPrice : 0);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) return;
    complete();
    try {
      localStorage.setItem(
        "fp-order",
        JSON.stringify({ name, email, bump, total, at: Date.now() }),
      );
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-ink/60"
        aria-label="Fechar"
        onClick={() => setOpen(false)}
      />
      <div className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-xl bg-surface p-6 shadow-lift sm:rounded-xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full hover:bg-fg/5"
          aria-label="Fechar checkout"
        >
          <X className="size-5" />
        </button>
        {done ? (
          <div className="py-6 text-center">
            <p className="font-serif text-3xl">Pedido reservado.</p>
            <p className="mt-3 text-muted">
              {name.split(" ")[0]}, o acesso do Forbidden Prompts será enviado para{" "}
              <strong className="text-fg">{email}</strong>. Guarda este e-mail — o Engine abre por lá.
            </p>
            <p className="mt-4 text-sm text-muted">
              Total: {formatBrl(total)} · pagamento único
              {bump ? " · pack de ganchos incluso" : ""}
            </p>
            <Button className="mt-8" onClick={() => setOpen(false)}>
              Voltar à página
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Checkout</p>
            <h2 className="mt-1 font-serif text-3xl">Travar o preço de lançamento</h2>
            <p className="mt-2 text-sm text-muted">
              Forbidden Prompts · {formatBrl(PRICE.now)} (de {formatBrl(PRICE.full)})
            </p>
            <label className="mt-6 block text-sm font-medium">
              Nome
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-lg bg-bg px-3 shadow-card outline-none focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                autoComplete="name"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              E-mail de acesso
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-lg bg-bg px-3 shadow-card outline-none focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                autoComplete="email"
              />
            </label>
            <button
              type="button"
              onClick={() => setBump(!bump)}
              className={cn(
                "mt-5 flex w-full items-start gap-3 rounded-xl p-4 text-left shadow-card transition-shadow duration-150",
                bump && "shadow-lift",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-xs shadow-card",
                  bump ? "bg-primary text-primary-fg" : "bg-surface",
                )}
              >
                {bump ? "✓" : ""}
              </span>
              <span>
                <strong>Order bump · Pack 50 ganchos virais</strong>
                <span className="mt-1 block text-sm text-muted">
                  +{formatBrl(bumpPrice)} hoje. Aberturas de Reel que param o scroll. Só neste checkout.
                </span>
              </span>
            </button>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Confirmar · {formatBrl(total)}
            </Button>
            <p className="mt-3 text-center text-xs text-muted">
              Ambiente de demonstração: nenhum cartão é cobrado. O pedido fica salvo neste dispositivo.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
