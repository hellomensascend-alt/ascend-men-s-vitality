/**
 * MEN ASCEND external link configuration.
 *
 * Single source of truth for checkout and delivery URLs.
 * Edit these values to change where purchase CTAs and post-purchase
 * delivery links point across the entire site.
 */

export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/cNi7sK1xheOefXNeiqfbq00";

// The ebook delivery URL is intentionally NOT stored here.
// It lives only in the backend secret EBOOK_DOWNLOAD_URL and is returned
// by the server after Stripe confirms the checkout session was paid.
