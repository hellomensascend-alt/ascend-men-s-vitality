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

export const CONTENT_ID = "mens-performance-blueprint";
export const CONTENT_NAME = "The Men's Performance Blueprint";
export const PRICE = 39.0;
export const CURRENCY = "USD";

/**
 * Hostnames allowed to send pixel events. Previews, sandboxes and localhost
 * must never pollute the dataset used for paid campaign optimization.
 */
const TRACKING_HOSTS = new Set([
  "peak-man-flow.lovable.app",
  "ascendman.net",
  "www.ascendman.net",
]);

export function isTrackingHost(): boolean {
  if (typeof window === "undefined") return false;
  return TRACKING_HOSTS.has(window.location.hostname);
}

type Fbq = (...args: unknown[]) => void;

function fbq(): Fbq | undefined {
  if (typeof window === "undefined" || !isTrackingHost()) return undefined;
  const fn = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fn === "function" ? fn : undefined;
}

export function trackViewContent() {
  fbq()?.("track", "ViewContent", {
    content_ids: [CONTENT_ID],
    content_name: CONTENT_NAME,
    content_type: "product",
    value: PRICE,
    currency: CURRENCY,
  });
}

/**
 * InitiateCheckout on a same-tab link click. The browser can cut the beacon
 * when navigation starts immediately, so navigation is deferred briefly and
 * resumes as soon as the pixel acknowledges the event (or the timeout fires).
 */
export function trackInitiateCheckout(
  event?: React.MouseEvent<HTMLAnchorElement>,
) {
  const f = fbq();
  const payload = {
    content_ids: [CONTENT_ID],
    content_name: CONTENT_NAME,
    content_type: "product",
    value: PRICE,
    currency: CURRENCY,
    num_items: 1,
  };

  if (!f) return; // no pixel here — let the link navigate normally

  const anchor = event?.currentTarget as HTMLAnchorElement | undefined;
  const href = anchor?.href;
  const plainClick =
    event &&
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    (!anchor?.target || anchor.target === "_self") &&
    Boolean(href);

  if (!plainClick) {
    f("track", "InitiateCheckout", payload);
    return;
  }

  event!.preventDefault();
  let navigated = false;
  const go = () => {
    if (navigated) return;
    navigated = true;
    window.location.href = href!;
  };

  f("track", "InitiateCheckout", payload, { eventCallback: go });
  window.setTimeout(go, 400);
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
    {
      content_ids: [CONTENT_ID],
      content_name: CONTENT_NAME,
      content_type: "product",
      value: PRICE,
      currency: CURRENCY,
    },
    { eventID: orderId },
  );
}
