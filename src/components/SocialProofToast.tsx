import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const names = [
  "James, TX", "Michael, CA", "Robert, NY", "David, FL", "Christopher, IL",
  "Daniel, WA", "Matthew, CO", "Andrew, GA", "Ryan, MA", "Kevin, PA",
];

export function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
      setTimeout(() => setIdx((i) => (i + 1) % names.length), 5000);
    };
    const t1 = setTimeout(cycle, 3000);
    const t2 = setInterval(cycle, 9000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-[85vw] sm:max-w-xs transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl bg-white shadow-card border border-border p-3">
        <div className="shrink-0 w-9 h-9 rounded-full bg-primary/10 grid place-items-center">
          <Download className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{names[idx]} just downloaded</p>
          <p className="text-xs text-muted-foreground">a few seconds ago</p>
        </div>
      </div>
    </div>
  );
}
