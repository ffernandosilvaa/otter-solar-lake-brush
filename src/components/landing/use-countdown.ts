import { useEffect, useState } from "react";

function remaining() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const ms = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { h, m, s };
}

export function useCountdown() {
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    setT(remaining());
    const id = window.setInterval(() => setT(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return t;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function formatCountdown(t: { h: number; m: number; s: number }) {
  return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
}
