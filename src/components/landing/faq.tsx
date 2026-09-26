import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/content";

export function Faq() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-serif text-3xl sm:text-5xl">Perguntas que travam a compra</h2>
        <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-line rounded-xl bg-surface shadow-card">
          {FAQS.map((f) => (
            <Accordion.Item key={f.q} value={f.q} className="px-5">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left font-semibold">
                  {f.q}
                  <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 [[data-state=open]_&]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden pb-4 text-sm leading-relaxed text-muted data-[state=closed]:animate-none">
                {f.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
