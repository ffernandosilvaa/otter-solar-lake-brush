import { CLOSEUPS } from "@/data/content";
import { openCheckout } from "@/store/offer";

export function Results() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Prova visual
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">
          Resultados do tipo que param o dedo.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          UGC, afiliado, fitness, talking-head. O mesmo pack, cinco nichos — e o tile roxo é o
          convite pra entrar.
        </p>
        <button
          type="button"
          onClick={openCheckout}
          className="mx-auto mt-10 block w-full max-w-xl overflow-hidden rounded-xl shadow-lift transition-transform duration-150 ease-out hover:brightness-105 active:scale-96"
        >
          <img
            src="/prova-social.png"
            alt="Grade de resultados reais: fitness, UGC, skincare, talking-head e o pack com 400 prompts"
            className="shot w-full"
          />
        </button>
        <h3 className="mt-16 text-center font-serif text-2xl sm:text-4xl">Detalhe que engana o olho</h3>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Poro, tecido, suor, contraluz. Se o close não sobrevive, o influenciador não existe.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {CLOSEUPS.map((src) => (
            <img
              key={src}
              src={src}
              alt="Close hiper-realista de pele e tecido"
              className="shot aspect-portrait w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
