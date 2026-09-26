import { useEffect, useState } from "react";

const COUNTDOWN_MINUTES = 14;
const DURATION_MS = COUNTDOWN_MINUTES * 60_000;

function remaining(endAt: number) {
  const ms = Math.max(0, endAt - Date.now());
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { h, m, s };
}

export function useCountdown() {
  const [endAt] = useState(() => Date.now() + DURATION_MS);
  const [t, setT] = useState(() => remaining(endAt));
  useEffect(() => {
    setT(remaining(endAt));
    const id = window.setInterval(() => setT(remaining(endAt)), 1000);
    return () => window.clearInterval(id);
  }, [endAt]);
  return t;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function formatCountdown(t: { h: number; m: number; s: number }) {
  return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
}
