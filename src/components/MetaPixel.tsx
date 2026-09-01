import { useEffect } from "react";

import { META_PIXEL_ID } from "@/lib/meta-pixel";

/**
 * Injects the Meta Pixel base code exactly once per page load.
 * The snippet itself performs init + a single PageView; no other code in the
 * app fires PageView.
 */
export function MetaPixel() {
  useEffect(() => {
    const w = window as unknown as { fbq?: unknown; _fbq?: unknown };
    if (w.fbq) return; // already initialized — never double-init

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const f = window as any;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    /* eslint-enable @typescript-eslint/no-explicit-any */

    n("init", META_PIXEL_ID);
    n("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}
