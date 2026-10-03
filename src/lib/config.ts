/**
 * MEN ASCEND external link configuration.
 *
 * Single source of truth for checkout and delivery URLs.
 * Edit these values to change where purchase CTAs and post-purchase
 * delivery links point across the entire site.
 */

export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/cNi7sK1xheOefXNeiqfbq00";

// Placeholder only. The Control Reset does not have a verified checkout yet.
export const CONTROL_RESET_CHECKOUT_URL = "#";

// The ebook delivery link is intentionally NOT here: it lives server-side only
// in src/lib/delivery.server.ts and is released after Stripe payment verification.
