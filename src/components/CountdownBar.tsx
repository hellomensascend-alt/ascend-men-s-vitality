import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function CountdownBar() {
  const [time, setTime] = useState({ h: 0, m: 15, s: 0 });
  useEffect(() => {
    const target = Date.now() + 15 * 60 * 1000;
    const t = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTime({ h, m, s });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="sticky top-0 z-50 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <Clock className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline font-medium tracking-wide">Launch offer ends in</span>
        <span className="sm:hidden font-medium">Ends in</span>
        <span className="font-mono font-semibold tabular-nums bg-white/10 px-2 py-0.5 rounded-md">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>
      </div>
    </div>
  );
}
