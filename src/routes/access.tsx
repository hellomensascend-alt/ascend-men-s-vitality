import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle, ArrowRight, Download, Shield, FileText, Mail, Lock, Loader2 } from "lucide-react";
import { verifyPurchase } from "@/lib/access.functions";
import { STRIPE_CHECKOUT_URL } from "@/lib/config";

export const Route = createFileRoute("/access")({
  head: () => ({
    meta: [
      { title: "Access Confirmed — Men Ascend" },
      { name: "description", content: "Your payment is confirmed. Access your Men's Performance Blueprint download now." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Access Confirmed — Men Ascend" },
      { property: "og:description", content: "Your Men's Performance Blueprint is ready for download." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
  }),
  component: AccessPage,
});

const GOLD = "#A8874E";

function AccessPage() {
  const { session_id } = Route.useSearch();
  const verify = useServerFn(verifyPurchase);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify-purchase", session_id],
    enabled: Boolean(session_id),
    retry: false,
    queryFn: () => verify({ data: { sessionId: session_id as string } }),
  });

  const paid = data?.status === "paid";
  const downloadUrl = paid ? data.downloadUrl : undefined;
  const verifying = Boolean(session_id) && isLoading;
  const misconfigured = data?.status === "misconfigured";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-center">
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg grid place-items-center text-white font-serif font-bold"
              style={{ backgroundColor: "#0B1F33" }}
            >
              M
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight" style={{ color: "#0B1F33" }}>
              Men Ascend
            </span>
          </a>
        </div>
      </header>

      {/* Main confirmation card */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="w-full max-w-2xl">
          <div className="rounded-3xl bg-white border border-border shadow-elev overflow-hidden">
            {/* Top status bar */}
            <div className="text-center py-4 px-6" style={{ backgroundColor: "#0B1F33" }}>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
                {paid ? (
                  <>
                    <CheckCircle className="w-4 h-4" style={{ color: GOLD }} />
                    PAYMENT CONFIRMED
                  </>
                ) : verifying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />
                    VERIFYING PAYMENT
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" style={{ color: GOLD }} />
                    PAYMENT REQUIRED
                  </>
                )}
              </span>
            </div>

            <div className="p-6 md:p-12 text-center">
              {paid ? (
                <>
                  {/* Success icon */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>

                  <h1 className="font-serif text-3xl md:text-5xl font-semibold text-secondary leading-tight mb-5">
                    Welcome to Men Ascend
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    Your access to the Men's Performance Blueprint is ready.
                  </p>

                  {/* Primary CTA */}
                  <div className="mt-8 md:mt-10">
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 md:py-5 text-base md:text-lg font-semibold rounded-full shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all text-white"
                      style={{ backgroundColor: "#22C55E" }}
                    >
                      <Download className="w-5 h-5" />
                      Access Your Blueprint
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </a>
                  </div>

                  {/* Trust reassurance */}
                  <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border">
                      <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-secondary">PDF Format</p>
                        <p className="text-xs text-muted-foreground">Read on any device</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border">
                      <Download className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-secondary">Instant Delivery</p>
                        <p className="text-xs text-muted-foreground">No waiting required</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border">
                      <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-secondary">Lifetime Access</p>
                        <p className="text-xs text-muted-foreground">Yours to keep forever</p>
                      </div>
                    </div>
                  </div>

                  {/* Email backup note */}
                  <div className="mt-8 md:mt-10 p-5 rounded-2xl bg-accent/40 border border-primary/20 flex items-start gap-3 text-left">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A confirmation email with this link has also been sent to your inbox. If you don't see it within a
                      few minutes, check your spam or promotions folder.
                    </p>
                  </div>
                </>
              ) : verifying ? (
                <div className="py-10">
                  <Loader2 className="w-10 h-10 mx-auto animate-spin text-primary" />
                  <p className="mt-6 text-muted-foreground">Confirming your payment with Stripe…</p>
                </div>
              ) : (
                <>
                  <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                    <Lock className="w-9 h-9 text-secondary" />
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl font-semibold text-secondary leading-tight mb-5">
                    Access not verified
                  </h1>
                  <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    {misconfigured
                      ? "Delivery is temporarily unavailable. Please contact support and we'll send your blueprint right away."
                      : isError || data
                        ? "We couldn't confirm a completed payment for this link. If you already purchased, please use the link from your Stripe receipt email."
                        : "This page is only available after a completed purchase."}
                  </p>
                  <div className="mt-8">
                    <a
                      href={STRIPE_CHECKOUT_URL}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all text-white"
                      style={{ backgroundColor: "#22C55E" }}
                    >
                      Get Instant Access — Only $39
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-center text-xs text-muted-foreground leading-relaxed max-w-xl mx-auto">
            This product is a digital educational guide intended for informational purposes only. It is not a medical
            treatment and is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 Men Ascend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
