import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getDeliveryLink = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ sessionId: z.string().min(10).max(300) }).parse(data),
  )
  .handler(async ({ data }) => {
    const { verifyStripeSession, DELIVERY_URL } = await import("./delivery.server");
    const result = await verifyStripeSession(data.sessionId);
    if (!result.paid) {
      return { ok: false as const, reason: result.reason ?? "unpaid" };
    }
    return { ok: true as const, url: DELIVERY_URL };
  });
