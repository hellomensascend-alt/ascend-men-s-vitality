/**
 * Meta Pixel helper — client-side only.
 *
 * The base pixel snippet (init + a single PageView) is injected once by
 * MetaPixel in src/routes/__root.tsx. These helpers only track additional
 * events and never re-initialize or re-fire PageView.
 *
 * Privacy: no PII is ever sent — only value/currency and content metadata.
 */

export const META_PIXEL_ID = "1792658398562895";

type Fbq = (...args: unknown[]) => void;

function fbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  const fn = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fn === "function" ? fn : undefined;
}

export function trackViewContent() {
  fbq()?.("track", "ViewContent", {
    content_name: "The Men's Performance Blueprint",
    content_type: "product",
    value: 39.0,
    currency: "USD",
  });
}

export function trackInitiateCheckout() {
  fbq()?.("track", "InitiateCheckout", {
    value: 39.0,
    currency: "USD",
  });
}

/**
 * Purchase — fired ONLY after the server has verified the Stripe session as
 * paid. `orderId` is the Stripe Checkout Session ID and is used both as the
 * Meta `eventID` (dedup key, shared with any future server-side CAPI event)
 * and as a localStorage guard so a refresh cannot double-count the order.
 */
export function trackPurchaseOnce(orderId: string) {
  const f = fbq();
  if (!f || !orderId) return;
  const key = `ma_purchase_tracked:${orderId}`;
  try {
    if (window.localStorage.getItem(key)) return;
    window.localStorage.setItem(key, "1");
  } catch {
    // storage unavailable — still fire once for this page load
  }
  f(
    "track",
    "Purchase",
    { value: 39.0, currency: "USD" },
    { eventID: orderId },
  );
}
