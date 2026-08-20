/**
 * Server-only delivery configuration and Stripe verification.
 *
 * The ebook delivery URL lives here so it is NEVER shipped to the browser
 * bundle. It is only returned after a paid Stripe Checkout Session is
 * verified against the Stripe API.
 */

export const DELIVERY_URL =
  "https://drive.google.com/drive/folders/1QcTo0WGIE9-TA8dsKq-vNPSQPjOzsq25";

type StripeSession = {
  id?: string;
  payment_status?: string;
  status?: string;
};

export async function verifyStripeSession(
  sessionId: string,
): Promise<{ paid: boolean; reason?: string }> {
  const key = process.env["STRIPE_SECRET_KEY"];
  if (!key) return { paid: false, reason: "not_configured" };

  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
    { headers: { Authorization: `Bearer ${key}` } },
  );

  if (!res.ok) return { paid: false, reason: "not_found" };

  const session = (await res.json()) as StripeSession;
  const paid = session.payment_status === "paid" || session.status === "complete";
  return { paid, reason: paid ? undefined : "unpaid" };
}
