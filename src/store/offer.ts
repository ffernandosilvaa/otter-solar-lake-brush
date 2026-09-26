import { create } from "zustand";
import { PRICE } from "@/data/content";

type OfferState = {
  open: boolean;
  bump: boolean;
  name: string;
  email: string;
  done: boolean;
  seats: number;
  setOpen: (v: boolean) => void;
  setBump: (v: boolean) => void;
  setName: (v: string) => void;
  setEmail: (v: string) => void;
  complete: () => void;
};

export const bumpPrice = 27;

export const useOffer = create<OfferState>((set) => ({
  open: false,
  bump: false,
  name: "",
  email: "",
  done: false,
  seats: PRICE.seats,
  setOpen: (open) => set(open ? { open: true, done: false } : { open: false }),
  setBump: (bump) => set({ bump }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  complete: () => set((s) => ({ done: true, seats: Math.max(12, s.seats - 1) })),
}));

export function scrollToOffer() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function openCheckout() {
  useOffer.getState().setOpen(true);
}
