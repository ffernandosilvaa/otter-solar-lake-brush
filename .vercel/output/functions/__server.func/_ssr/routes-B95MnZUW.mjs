import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, r as Item, s as Slot, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Minus, c as Copy, d as ArrowRight, i as ShieldCheck, l as ChevronDown, o as Lock, r as Star, s as Flame, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B95MnZUW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatBrl(value) {
	const [int, dec] = value.toFixed(2).split(".");
	return `R$\u00a0${int.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${dec}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[transform,box-shadow,background-color,filter] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 active:scale-96", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-lift hover:brightness-110",
			ink: "bg-ink text-ink-fg hover:bg-fg",
			ghost: "bg-transparent text-fg hover:bg-fg/5",
			outline: "bg-surface text-fg shadow-card hover:shadow-lift",
			gold: "bg-gold text-ink hover:brightness-105"
		},
		size: {
			sm: "h-10 px-4 text-sm",
			md: "h-12 px-6 text-base",
			lg: "h-14 px-8 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var PRICE = {
	full: 797,
	now: 97,
	offPct: 88,
	seats: 47
};
var PROBLEMS = [
	{
		title: "Rosto diferente a cada geração",
		text: "Impossível construir um influenciador crível. Essa é a dor nº 1 do nicho — e o motivo de 9 em 10 contas morrerem no mês 1."
	},
	{
		title: "Cara de plástico que qualquer um aponta",
		text: "Dedo torto, olho morto, pele de boneca. Você posta e a primeira comentário é: “isso é IA”."
	},
	{
		title: "Crédito queimado em ferramenta cara",
		text: "Midjourney, Leonardo, Runway. Você pagou a Ferrari e dirigiu sem mapa. O resultado: lixo e fatura."
	},
	{
		title: "Prompt genérico = imagem genérica",
		text: "O que está no YouTube já foi usado 40 mil vezes. Zero diferenciação. Zero venda."
	},
	{
		title: "Horas de tentativa e erro",
		text: "Pastas cheias de gerações inutilizáveis. Momentum morto. Você desiste — e o concorrente que comprou o pack certo posta amanhã."
	},
	{
		title: "Medo de mostrar o próprio rosto",
		text: "Você quer o dinheiro do criador sem virar o produto. Falta um rosto que trabalhe no seu lugar, 24h."
	}
];
var BENEFITS = [
	"400 prompts engenheirados — copia, cola, gera. Sem página em branco.",
	"O mesmo rosto em 98% das gerações. Influenciador reconhecível, não um extra aleatório.",
	"Pele, luz e microexpressão que passam por foto real — inclusive em IA gratuita.",
	"Prompts de vídeo cinematográfico prontos para Reel, TikTok e UGC pago.",
	"Prompt Genie: um clique e o stack inteiro (identidade + pose + luz) é escrito pra você.",
	"8 Personagens com DNA travado + app vivo (favoritos e Planejador de 30 dias).",
	"Licença comercial + atualizações vitalícias. Pagamento único.",
	"Guia com 8 regras e checklist pré-post — para não levar strike nem parecer amador."
];
var STEPS = [
	{
		n: "01",
		title: "Abra o Engine",
		text: "O link cai no e-mail no segundo do pagamento. App web. Sem instalar. Celular ou computador."
	},
	{
		n: "02",
		title: "Trave um Personagem",
		text: "Escolha 1 dos 8 (ou suba uma selfie). Todo prompt passa a orbitar o DNA dela. Sem ideia? “Surpreenda-me”."
	},
	{
		n: "03",
		title: "Gere, poste, cobre",
		text: "Cole na IA. Publique. O Planejador já deixa o shot de amanhã pronto — inclusive os dias de paywall."
	}
];
var PILLARS = [
	{
		kicker: "Pilar 1 · Consistência",
		title: "O mesmo rosto. Toda vez.",
		text: "98% vs ~10% de um prompt solto. Sem consistência não existe marca. Sem marca não existe preço."
	},
	{
		kicker: "Pilar 2 · Realismo",
		title: "Ninguém pergunta se é IA.",
		text: "Textura de pele, luz dura, poro, suor, tecido. O tipo de detalhe que faz o scroll parar — e o cartão sair."
	},
	{
		kicker: "Pilar 3 · Caixa",
		title: "Conteúdo que vira PIX.",
		text: "Estilos feitos para nichos que pagam: UGC, fitness, skincare, luxo, afiliado. Sem mostrar a sua cara."
	}
];
var FOR_YOU = [
	"Você quer um influenciador de IA mas trava na hora de escrever o prompt.",
	"Você vende como afiliado e precisa de volume sem aparecer.",
	"Você entrega serviço de IA e quer resultado de agência em minutos.",
	"Você não quer pagar fotógrafo, modelo, estúdio ou editor.",
	"Você tem medo de se expor e precisa de um rosto que trabalhe por você.",
	"Você já queimou crédito e jurou que a “IA não funciona”. Funciona. O prompt que estava errado."
];
var COMPARE = [
	{
		label: "Realismo percebido",
		a: "IA óbvia · 15%",
		b: "~40%",
		c: "95%"
	},
	{
		label: "Mesmo rosto toda geração",
		a: false,
		b: "às vezes",
		c: true
	},
	{
		label: "Vídeo cinematográfico",
		a: false,
		b: false,
		c: true
	},
	{
		label: "9 categorias prontas",
		a: false,
		b: false,
		c: true
	},
	{
		label: "Resultado em ~60s",
		a: false,
		b: "sorte",
		c: true
	},
	{
		label: "Genie + Planejador 30 dias",
		a: false,
		b: false,
		c: true
	},
	{
		label: "Licença comercial vitalícia",
		a: false,
		b: false,
		c: true
	},
	{
		label: "Garantia de 7 dias",
		a: false,
		b: false,
		c: true
	}
];
var REVIEWS = [
	{
		name: "Ryan M.",
		role: "Criador de UGC",
		title: "Parei de queimar crédito",
		text: "Mesmo rosto em toda geração. Os prompts simplesmente funcionam. Recuperei o valor no primeiro job.",
		helpful: 38
	},
	{
		name: "Laura P.",
		role: "Afiliada",
		title: "Copia. Cola. Posta.",
		text: "Organizado por categoria. Em uma tarde montei 12 peças. Três já venderam. Simples assim.",
		helpful: 29
	},
	{
		name: "Jon C.",
		role: "Agência one-person",
		title: "O Genie vale o pack inteiro",
		text: "Vídeo cinematográfico pronto pra cliente. Entreguei em 40 minutos o que eu cobrava dois dias.",
		helpful: 25
	}
];
var FAQS = [
	{
		q: "Funciona em IA gratuita?",
		a: "Sim. O pack foi testado em engines pagas e gratuitas. O diferencial é o prompt, não a assinatura de R$ 200/mês."
	},
	{
		q: "E se o rosto ainda variar?",
		a: "Você trava o Personagem (DNA) e cola o bloco de identidade em todo shot. É o sistema — não um prompt isolado. Se em 7 dias não ver consistência, devolvemos."
	},
	{
		q: "Posso usar comercialmente?",
		a: "Sim. Licença comercial inclusa. Venda o conteúdo, use em cliente, rode anúncio. Atualizações futuras entram sem custo."
	},
	{
		q: "É PDF?",
		a: "Não. É um app web vivo: favoritos, 8 Personagens, Prompt Genie e Planejador de 30 dias. Abre no celular."
	},
	{
		q: "Quanto tempo até o primeiro post?",
		a: "O acesso chega no e-mail na hora. A maioria publica o primeiro shot no mesmo dia — muitos na primeira hora."
	},
	{
		q: "E se eu não gostar?",
		a: "7 dias. Sem questionário constrangedor. Se não for o salto que prometemos, você recebe o dinheiro de volta."
	}
];
var RESULTS = [
	{
		src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=80",
		alt: "Ensaio de skincare com pele hiper-realista"
	},
	{
		src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
		alt: "Retrato lifestyle de criadora"
	},
	{
		src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
		alt: "Editorial de verão à beira da piscina"
	},
	{
		src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
		alt: "Retrato masculino com luz dourada"
	},
	{
		src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
		alt: "Conteúdo fitness de alto impacto"
	},
	{
		src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
		alt: "Close editorial de influenciadora"
	}
];
var CLOSEUPS = [
	"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
	"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
	"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
];
var CATEGORIES = [
	"Retrato base & rosto consistente",
	"Looks, moda & outfits",
	"Cenários & locações",
	"UGC: fala pra câmera",
	"Produto real (afiliado)",
	"Fitness & health",
	"Vídeos cinematográficos",
	"Reels & ganchos virais"
];
var GENIE_STACKS = {
	"Retrato base & rosto consistente": {
		identity: "Mulher mediterrânea de 29 anos, rosto oval com mandíbula levemente quadrada, pele oliva quente, olhos amêndoa castanho-escuros, sobrancelhas densas naturais. Adulta inconfundível. O EXATO mesmo rosto da imagem de referência.",
		wardrobe: "Camisa de linho cru aberta no colarinho, brinco mínimo, cabelo solto com volume real. Sem maquiagem pesada.",
		light: "Close de ombros pra cima, 85mm, luz de janela lateral, catchlight único, pele com poro visível, zero smoothing."
	},
	"Looks, moda & outfits": {
		identity: "O mesmo rosto do Personagem selecionado. Sem deriva de idade, etnia ou estrutura óssea. Continuidade absoluta.",
		wardrobe: "Vestido preto curto de alça, salto na mão, tornozelos cruzados no balcão, caneca nas duas mãos, riso fora de quadro.",
		light: "Corpo inteiro, câmera na altura do joelho, contra-luz quente de fim de tarde, sombra azul fria no chão."
	},
	"Cenários & locações": {
		identity: "Mesmo DNA facial. Cabelo com vento real, pele com brilho de sol, sem pele plástica.",
		wardrobe: "Slip dress branco, bolsa de palha, óculos escuros no topo da cabeça, pé descalço na pedra.",
		light: "Villa à beira-mar, hora dourada, flare controlado, profundidade rasa, filme 35mm."
	},
	"UGC: fala pra câmera": {
		identity: "Mesmo Personagem, fala para a lente como quem grava story. Microexpressão viva.",
		wardrobe: "Regata off-white, fone na mão, bancada de produto à frente, caos organizado de criadora.",
		light: "iPhone frontal, luz de janela, leve grain, enquadramento um pouco torto de propósito."
	},
	"Produto real (afiliado)": {
		identity: "Mesmo rosto. Olhar para o produto, não para a câmera. Credibilidade de review.",
		wardrobe: "Roupão de hotel, toalha no cabelo, sérum na ponta dos dedos, espelho embaçado.",
		light: "Banheiro com luz fria + lâmpada quente. Close da mão + rosto no reflexo."
	},
	"Fitness & health": {
		identity: "Mesmo Personagem, pele suada de treino real, veias e textura, zero pele de CGI.",
		wardrobe: "Maiô verde musgo molhado, cabelo preso bagunçado, gotas escorrendo no ombro.",
		light: "Sol duro de piscina, alto contraste, splash congelado, 1/1000s."
	},
	"Vídeos cinematográficos": {
		identity: "Mesmo rosto em movimento. Sem morphing entre frames. Continuidade de orelha, nariz, dente.",
		wardrobe: "Camisa branca aberta, café na mesa de calçada, relógio fino, cidade ao fundo desfocado.",
		light: "Travelling lento, anamorphic, hora mágica, grain de cinema, respiração visível."
	},
	"Reels & ganchos virais": {
		identity: "Mesmo Personagem. Primeiro frame precisa prender em 0,3s. Expressão de “você precisa ver isso”.",
		wardrobe: "Look de street, jaqueta no ombro, walk-and-talk, texto na mão do celular.",
		light: "Vertical 9:16, punch-in no meio da frase, corte no beat, luz de fim de tarde."
	}
};
var TICKER = [
	"Mariana · SP acabou de garantir o acesso",
	"Lucas · RJ gerou o 1º shot em 11 min",
	"Ana · BH usou o Genie no UGC de skincare",
	"Pedro · POA recuperou o valor no 1º cliente",
	"Clara · DF postou 3 Reels só com o pack"
];
var MESSAGES = [{
	name: "Sofia",
	initial: "S",
	thread: [
		{
			side: "left",
			text: "Primeira tentativa e o rosto FINALMENTE ficou consistente."
		},
		{
			side: "left",
			text: "Acabou dedo torto. Acabou cara de boneca."
		},
		{
			side: "right",
			text: "Isso. É exatamente por isso que existe o DNA."
		},
		{
			side: "left",
			text: "Pelo que paguei, já valeu. Recuperei num UGC."
		}
	]
}, {
	name: "Marco",
	initial: "M",
	thread: [
		{
			side: "left",
			text: "Os prompts de UGC são ouro. Postei 3 Reels essa semana, tudo IA."
		},
		{
			side: "right",
			text: "Mesmo rosto nos três?"
		},
		{
			side: "left",
			text: "Sim. Ninguém conseguiu apontar. Dois já pediram o “modelo”."
		}
	]
}];
var useOffer = create((set) => ({
	open: false,
	bump: false,
	name: "",
	email: "",
	done: false,
	seats: PRICE.seats,
	setOpen: (open) => set(open ? {
		open: true,
		done: false
	} : { open: false }),
	setBump: (bump) => set({ bump }),
	setName: (name) => set({ name }),
	setEmail: (email) => set({ email }),
	complete: () => set((s) => ({
		done: true,
		seats: Math.max(12, s.seats - 1)
	}))
}));
function scrollToOffer() {
	document.getElementById("oferta")?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function openCheckout() {
	useOffer.getState().setOpen(true);
}
function Checkout() {
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
	const total = PRICE.now + (bump ? 27 : 0);
	function onSubmit(e) {
		e.preventDefault();
		if (!name.trim() || !email.includes("@")) return;
		complete();
		try {
			localStorage.setItem("fp-order", JSON.stringify({
				name,
				email,
				bump,
				total,
				at: Date.now()
			}));
		} catch {}
	}
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/60",
			"aria-label": "Fechar",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-xl bg-surface p-6 shadow-lift sm:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(false),
				className: "absolute right-4 top-4 flex size-11 items-center justify-center rounded-full hover:bg-fg/5",
				"aria-label": "Fechar checkout",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl",
						children: "Pedido reservado."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: [
							name.split(" ")[0],
							", o acesso do Forbidden Prompts será enviado para",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-fg",
								children: email
							}),
							". Guarda este e-mail — o Engine abre por lá."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Total: ",
							formatBrl(total),
							" · pagamento único",
							bump ? " · pack de ganchos incluso" : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						onClick: () => setOpen(false),
						children: "Voltar à página"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
						children: "Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-serif text-3xl",
						children: "Travar o preço de lançamento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Forbidden Prompts · ",
							formatBrl(PRICE.now),
							" (de ",
							formatBrl(PRICE.full),
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm font-medium",
						children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-1.5 h-12 w-full rounded-lg bg-bg px-3 shadow-card outline-none focus:outline-2 focus:outline-offset-2 focus:outline-primary",
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm font-medium",
						children: ["E-mail de acesso", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-1.5 h-12 w-full rounded-lg bg-bg px-3 shadow-card outline-none focus:outline-2 focus:outline-offset-2 focus:outline-primary",
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setBump(!bump),
						className: cn("mt-5 flex w-full items-start gap-3 rounded-xl p-4 text-left shadow-card transition-shadow duration-150", bump && "shadow-lift"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-xs shadow-card", bump ? "bg-primary text-primary-fg" : "bg-surface"),
							children: bump ? "✓" : ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Order bump · Pack 50 ganchos virais" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-sm text-muted",
							children: [
								"+",
								formatBrl(27),
								" hoje. Aberturas de Reel que param o scroll. Só neste checkout."
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-6 w-full",
						children: ["Confirmar · ", formatBrl(total)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted",
						children: "Ambiente de demonstração: nenhum cartão é cobrado. O pedido fica salvo neste dispositivo."
					})
				]
			})]
		})]
	});
}
function Cell({ v }) {
	if (v === true) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
		className: "mx-auto size-5 text-ok",
		strokeWidth: 2.6
	});
	if (v === false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
		className: "mx-auto size-5 text-danger",
		strokeWidth: 2.4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-sm text-ink-fg/70",
		children: v
	});
}
function Compare() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink px-4 py-20 text-ink-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center font-serif text-3xl sm:text-5xl",
				children: "Prompt genérico… ou prompt feito para vender."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-x-auto rounded-xl shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-lg border-collapse text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "bg-ink-fg/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-4 font-medium",
								children: " "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-4 font-medium text-ink-fg/60",
								children: "ChatGPT solto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-4 font-medium text-ink-fg/60",
								children: "Prompts grátis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "bg-primary px-4 py-4 font-semibold text-primary-fg",
								children: "Forbidden"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARE.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-ink-fg/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3.5 font-medium",
								children: row.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3.5 text-center",
								children: typeof row.a === "string" ? row.a : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { v: row.a })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3.5 text-center",
								children: typeof row.b === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center justify-center gap-1 text-gold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" }),
										" ",
										row.b
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { v: row.b })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "bg-primary/20 px-4 py-3.5 text-center",
								children: typeof row.c === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: row.c }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { v: row.c })
							})
						]
					}, row.label)) })]
				})
			})]
		})
	});
}
function CtaRow({ secondary = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-stretch gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				onClick: openCheckout,
				className: "min-w-56",
				children: ["Quero meu acesso agora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			}), secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				variant: "outline",
				onClick: scrollToOffer,
				children: "Ver a oferta completa"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-ok" }), "Acesso imediato · licença comercial · 7 dias de garantia"]
		})]
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center font-serif text-3xl sm:text-5xl",
				children: "Perguntas que travam a compra"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
				type: "single",
				collapsible: true,
				className: "mt-10 divide-y divide-line rounded-xl bg-surface shadow-card",
				children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					value: f.q,
					className: "px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
						className: "flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left font-semibold",
						children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 [[data-state=open]_&]:rotate-180" })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
						className: "overflow-hidden pb-4 text-sm leading-relaxed text-muted data-[state=closed]:animate-none",
						children: f.a
					})]
				}, f.q))
			})]
		})
	});
}
function ForYou() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-serif text-3xl sm:text-5xl",
					children: "Esse pack é para você se…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-3",
					children: FOR_YOU.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-xl bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-5 shrink-0 text-ok",
							strokeWidth: 2.4
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-12 text-center font-serif text-2xl italic text-fg sm:text-3xl",
					children: "“Com o prompt certo, até IA gratuita entrega resultado de agência. Sem o prompt certo, a ferramenta cara só gera lixo mais rápido.”"
				})
			]
		})
	});
}
function Genie() {
	const [cat, setCat] = (0, import_react.useState)(CATEGORIES[0]);
	const stack = GENIE_STACKS[cat];
	const [copied, setCopied] = (0, import_react.useState)(null);
	async function copy(label, text) {
		try {
			await navigator.clipboard.writeText(text);
		} catch {}
		setCopied(label);
		window.setTimeout(() => setCopied(null), 1600);
	}
	const blocks = [
		{
			id: "IDENTIDADE",
			text: stack.identity
		},
		{
			id: "LOOK + POSE",
			text: stack.wardrobe
		},
		{
			id: "ENQUADRE + LUZ",
			text: stack.light
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink px-4 py-20 text-ink-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase",
					children: "Prompt Genie · um clique"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Escolha a categoria. Copie o stack. Cole na IA."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center text-ink-fg/70",
					children: "Isto não é um PDF. É o motor: o prompt se reescreve em torno do DNA do Personagem. Toque, copie, gere."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-2",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(c),
						className: cn("rounded-full px-3 py-2 text-left text-sm transition-colors duration-150", cat === c ? "bg-primary text-primary-fg" : "bg-ink-fg/10 text-ink-fg/80 hover:bg-ink-fg/15"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-ink-fg/5 p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-ok/20 px-2 py-0.5 text-xs font-semibold tracking-wide text-ok uppercase",
								children: b.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => copy(b.id, b.text),
								className: "inline-flex min-h-11 items-center gap-1.5 text-sm text-ink-fg/80 hover:text-ink-fg",
								children: copied === b.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-ok" }), " Copiado"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), " Copiar"] })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink-fg/85",
							children: b.text
						})]
					}, b.id))
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-4 pb-20 pt-16 sm:pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-xs font-semibold tracking-[0.22em] text-primary uppercase",
					children: "Forbidden Prompts · Engine de influenciador"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-serif text-4xl font-medium text-fg sm:text-6xl",
					children: ["Pare de gerar lixo.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block italic text-primary",
						children: "Gere um rosto que vende."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-lg text-muted",
					children: "400 prompts engenheirados + DNA de Personagem + o Genie que escreve o shot em um clique. Mesma cara. Pele real. Conteúdo pronto pra PIX — inclusive em IA gratuita."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-surface px-3 py-1.5 text-muted shadow-card",
							children: ["de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", {
								className: "text-muted/70",
								children: formatBrl(PRICE.full)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-ink px-3 py-1.5 font-semibold text-ink-fg",
							children: [formatBrl(PRICE.now), " hoje"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-gold/15 px-3 py-1.5 font-semibold text-gold",
							children: [PRICE.offPct, "% off"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaRow, {})
				})
			]
		})]
	});
}
function remaining() {
	const now = /* @__PURE__ */ new Date();
	const end = new Date(now);
	end.setHours(23, 59, 59, 999);
	const ms = Math.max(0, end.getTime() - now.getTime());
	return {
		h: Math.floor(ms / 36e5),
		m: Math.floor(ms % 36e5 / 6e4),
		s: Math.floor(ms % 6e4 / 1e3)
	};
}
function useCountdown() {
	const [t, setT] = (0, import_react.useState)({
		h: 0,
		m: 0,
		s: 0
	});
	(0, import_react.useEffect)(() => {
		setT(remaining());
		const id = window.setInterval(() => setT(remaining()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return t;
}
function pad(n) {
	return n.toString().padStart(2, "0");
}
function formatCountdown(t) {
	return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
}
var INCLUDED = [
	"400 prompts testados, organizados em 9 categorias",
	"8 Personagens com DNA de rosto travado",
	"Prompt Genie — stack completo em 1 clique",
	"Planejador de 30 dias + favoritos (app, não PDF)",
	"Guia: 8 regras + checklist pré-publicação",
	"3 bônus + 2 presentes de lançamento",
	"Licença comercial e atualizações vitalícias",
	"Garantia incondicional de 7 dias"
];
function Offer() {
	const t = useCountdown();
	const seats = useOffer((s) => s.seats);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "oferta",
		className: "scroll-mt-28 bg-ink px-4 py-20 text-ink-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase",
					children: "Acesso imediato"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-4xl",
					children: "Um pagamento. Um rosto. Uma máquina de conteúdo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-xl bg-surface p-6 text-fg shadow-lift sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["Lançamento · resta ", formatCountdown(t)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-5xl",
								children: formatBrl(PRICE.now)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-1 text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", { children: formatBrl(PRICE.full) }),
									" · ",
									PRICE.offPct,
									"% off"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Pagamento único. Sem mensalidade. Sem “plano anual”."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2.5",
							children: INCLUDED.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 size-4 shrink-0 text-ok",
									strokeWidth: 2.6
								}), i]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "mt-8 w-full",
							onClick: openCheckout,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }),
								"Garantir meu acesso por ",
								formatBrl(PRICE.now)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-ok" }),
								seats,
								" acessos restantes nesta faixa · garantia de 7 dias"
							]
						})
					]
				})
			]
		})
	});
}
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "A oferta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Três pilares. Três dores. Um pack."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-ink p-6 text-ink-fg shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-wider text-gold uppercase",
								children: p.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-2xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-fg/70",
								children: p.text
							})
						]
					}, p.title))
				})
			]
		})
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink px-4 py-20 text-ink-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase",
					children: "A conta que ninguém fecha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto mt-3 max-w-2xl text-center font-serif text-3xl sm:text-5xl",
					children: "O problema nunca foi a ferramenta. Foi o prompt."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center text-ink-fg/70",
					children: "Você não precisa de mais um curso. Precisa do sistema que os criadores que faturam realmente colam na IA — e não postam no YouTube."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: PROBLEMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-ink-fg/5 p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex size-8 items-center justify-center rounded-full bg-danger/20 text-danger",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									strokeWidth: 2.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-fg/70",
								children: p.text
							})
						]
					}, p.title))
				})
			]
		})
	});
}
function Proof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-surface px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "O que quem pagou escreveu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Prova social, não depoimento de banco de imagem."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 flex max-w-md items-center justify-center gap-8 rounded-xl bg-bg p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-5xl",
								children: "4.9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 flex justify-center gap-0.5 text-gold",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "média dos compradores"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-1.5 text-xs text-muted",
						children: [
							[5, 94],
							[4, 5],
							[3, 1],
							[2, 0],
							[1, 0]
						].map(([stars, pct]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-3",
									children: stars
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 flex-1 overflow-hidden rounded-full bg-line",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary",
										style: { width: `${pct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "w-8 tabular-nums",
									children: [pct, "%"]
								})
							]
						}, stars))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-fg",
									children: r.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [r.role, " · compra verificada"]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-0.5 text-gold",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-gold" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-semibold",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: [
									"“",
									r.text,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted",
								children: [r.helpful, " pessoas acharam útil"]
							})
						]
					}, r.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: MESSAGES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl bg-bg shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 border-b border-line bg-surface px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-fg",
								children: m.initial
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: m.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 p-4",
							children: m.thread.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed", b.side === "left" ? "rounded-bl-sm bg-line/70" : "ml-auto rounded-br-sm bg-primary text-primary-fg"),
								children: b.text
							}, i))
						})]
					}, m.name))
				})
			]
		})
	});
}
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Prova visual"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Resultados do tipo que param o dedo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center text-muted",
					children: "Pele, luz e presença. O tipo de frame que o cliente acha que você contratou modelo e fotógrafo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
					children: RESULTS.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-lg shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							className: "shot aspect-portrait w-full object-cover transition-transform duration-300 ease-out hover:scale-105",
							loading: "lazy"
						})
					}, img.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-16 text-center font-serif text-2xl sm:text-4xl",
					children: "Detalhe que engana o olho"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-lg text-center text-muted",
					children: "Poro, tecido, suor, contraluz. Se o close não sobrevive, o influenciador não existe."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-3",
					children: CLOSEUPS.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "Close hiper-realista de pele e tecido",
						className: "shot aspect-portrait w-full rounded-lg object-cover",
						loading: "lazy"
					}, src))
				})
			]
		})
	});
}
function Roi() {
	const [ticket, setTicket] = (0, import_react.useState)(150);
	const jobs = Math.max(1, Math.ceil(PRICE.now / ticket));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl rounded-xl bg-surface p-6 shadow-card sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Conta de guardanapo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-serif text-3xl",
					children: "Em quantos jobs o pack se paga?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Arraste o valor médio de um UGC ou post patrocinado. O pack custa ",
						formatBrl(PRICE.now),
						" uma vez."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 block text-sm font-medium",
					children: ["Ticket médio: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-primary",
						children: formatBrl(ticket)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 50,
					max: 800,
					step: 10,
					value: ticket,
					onChange: (e) => setTicket(Number(e.target.value)),
					className: "mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 rounded-lg bg-ink px-4 py-4 text-ink-fg",
					children: [
						"Com ",
						formatBrl(ticket),
						" por entrega, o Forbidden se paga em",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "text-gold",
							children: [
								jobs,
								" ",
								jobs === 1 ? "único job" : "jobs"
							]
						}),
						". O resto do mês é margem."
					]
				})
			]
		})
	});
}
function Solution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "O que entra hoje"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Tudo que falta entre você e um influenciador que cobra."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-3",
					children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-xl bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ok/15 text-ok",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5",
								strokeWidth: 2.6
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.95rem] leading-relaxed",
							children: b
						})]
					}, b))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaRow, { secondary: false })
				})
			]
		})
	});
}
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-surface px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Sem curso de 40 horas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-serif text-3xl sm:text-5xl",
					children: "Três passos. Primeiro post hoje."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl text-primary/80",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-sans text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.text
							})
						]
					}, s.n))
				})
			]
		})
	});
}
function StickyCta() {
	const t = useCountdown();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 p-3 backdrop-blur-md sm:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold tabular-nums",
					children: formatBrl(PRICE.now)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-xs text-muted",
					children: ["encerra ", formatCountdown(t)]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "ml-auto",
				onClick: openCheckout,
				children: "Garantir acesso"
			})]
		})
	});
}
function UrgencyBar() {
	const t = useCountdown();
	const seats = useOffer((s) => s.seats);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-40 bg-ink text-ink-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-center text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5 text-gold" }),
					"Lançamento · ",
					PRICE.offPct,
					"% off · restam ",
					seats,
					" acessos"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums tracking-wide text-ink-fg/80",
				children: ["encerra em ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-ink-fg",
					children: formatCountdown(t)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-8 overflow-hidden border-t border-ink-fg/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-track flex h-8 w-max flex-nowrap items-center gap-10 whitespace-nowrap text-xs text-ink-fg/70",
				children: [...TICKER, ...TICKER].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-ok" }), item]
				}, i))
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-bg pb-24 text-fg sm:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrgencyBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Genie, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForYou, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roi, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proof, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl",
						children: "O crédito que você ia queimar esta semana já paga o pack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaRow, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 text-xs text-muted",
						children: "© 2026 Forbidden Prompts. Pagamento único. Licença comercial."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkout, {})
		]
	});
}
//#endregion
export { Home as component };
