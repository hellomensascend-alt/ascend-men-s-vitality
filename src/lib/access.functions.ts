import { createServerFn } from "@tanstack/react-start";

/**
 * Server-side validation of a Stripe Checkout Session.
 *
 * The ebook URL and the Stripe secret key live ONLY in backend secrets
 * (EBOOK_DOWNLOAD_URL / STRIPE_SECRET_KEY) and are never bundled into
 * client-side code. The download URL is returned only when Stripe itself
 * confirms the session is paid.
 */
export const verifyPurchase = createServerFn({ method: "POST" })
  .inputValidator((input: { sessionId: string }) => {
    const sessionId = typeof input?.sessionId === "string" ? input.sessionId.trim() : "";
    if (!/^cs_[A-Za-z0-9_]{10,200}$/.test(sessionId)) {
      throw new Error("INVALID_SESSION");
    }
    return { sessionId };
  })
  .handler(async ({ data }) => {
    const stripeKey = process.env["STRIPE_SECRET_KEY"];
    const ebookUrl = process.env["EBOOK_DOWNLOAD_URL"];

    if (!stripeKey || !ebookUrl) {
      return { status: "misconfigured" as const };
    }

    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(data.sessionId)}`,
      { headers: { Authorization: `Bearer ${stripeKey}` } },
    );

    if (!res.ok) {
      return { status: "invalid" as const };
    }

    const session = (await res.json()) as {
      payment_status?: string;
      status?: string;
    };

    const paid = session.payment_status === "paid" || session.status === "complete";
    if (!paid) {
      return { status: "unpaid" as const };
    }

    return { status: "paid" as const, downloadUrl: ebookUrl };
  });
