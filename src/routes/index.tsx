import { createFileRoute } from "@tanstack/react-router";
import {
  Flame, Shield, Zap, Heart, TrendingUp, Award, CheckCircle2,
  Lock, Star, ChevronDown, ArrowRight, Timer, Leaf, Activity,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-man.jpg";
import coupleImg from "@/assets/couple.jpg";
import productImg from "@/assets/product.jpg";
import { CountdownBar } from "@/components/CountdownBar";
import { SocialProofToast } from "@/components/SocialProofToast";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mens Ascend — Recupere Sua Performance Masculina Naturalmente" },
      { name: "description", content: "Fórmula natural para homens que querem ereções mais fortes, mais energia e confiança na cama. Resultados reais em semanas." },
      { property: "og:title", content: "Mens Ascend — Recupere Sua Performance Masculina" },
      { property: "og:description", content: "Fórmula natural para ereções mais fortes, mais energia e confiança." },
    ],
  }),
  component: Index,
});

const CHECKOUT = "https://pay.cakto.com.br/rrz5o26_967173";

function CTAButton({ children = "Quero Agora", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-primary text-primary-foreground font-bold text-base md:text-lg px-6 md:px-10 py-4 md:py-5 rounded-xl shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all animate-pulse-glow ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <CountdownBar />
      <SocialProofToast />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1024} height={1024} />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-medium mb-4">
              <Flame className="w-4 h-4 text-primary" /> Fórmula #1 para Homens 2025
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Recupere Sua <span className="text-primary">Performance</span> na Cama — Sem Remédios Tarja Preta
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/85 leading-relaxed">
              Mens Ascend é a fórmula natural que ajuda milhares de homens a terem <strong>ereções mais firmes</strong>, mais energia e a confiança de volta — mesmo depois dos 40.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CTAButton>Quero Recuperar Agora</CTAButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-white/70">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> 100% Natural</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Compra Discreta</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary" /> Garantia 30 dias</span>
            </div>
          </div>
          <div className="relative animate-float-in">
            <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full" />
            <img src={productImg} alt="Mens Ascend" width={1024} height={1024} className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">Se você se identifica...</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-black text-secondary">Você não está sozinho nessa</h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">Mais de 50% dos homens acima de 40 anos enfrentam algum desses sintomas — e ninguém fala sobre isso.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              "Ereções fracas ou que não duram",
              "Ansiedade de performance na hora H",
              "Perda de libido e do desejo sexual",
              "Sem mais aquela ereção matinal",
              "Vergonha e insegurança no quarto",
              "Estresse afetando sua vida íntima",
              "Cansaço e falta de energia constante",
              "Distância emocional no relacionamento",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-muted border border-border">
                <div className="shrink-0 w-6 h-6 rounded-full bg-destructive/15 grid place-items-center mt-0.5">
                  <span className="text-destructive font-bold text-sm">✕</span>
                </div>
                <p className="text-sm md:text-base text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 p-5 md:p-8 rounded-2xl bg-gradient-hero text-white text-center">
            <p className="text-lg md:text-xl font-semibold">E se existisse uma forma <span className="text-primary">natural</span> de reverter tudo isso — sem consulta médica, sem remédios pesados e sem constrangimento?</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-muted">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img src={productImg} alt="Mens Ascend fórmula" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-card w-full max-w-md mx-auto" />
          </div>
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">A Solução</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-black text-secondary leading-tight">Conheça o Mens Ascend</h2>
            <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              Uma fórmula avançada com <strong>ingredientes 100% naturais</strong> que atua em 3 frentes para devolver sua virilidade:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { icon: Activity, title: "Melhora o Fluxo Sanguíneo", desc: "Vasodilatação natural para ereções firmes e duradouras." },
                { icon: Zap, title: "Aumenta Energia e Testosterona", desc: "Estimula a produção natural do hormônio masculino." },
                { icon: Heart, title: "Reduz Ansiedade e Estresse", desc: "Sistema nervoso equilibrado, confiança de volta." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center shadow-cta">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg text-secondary">{title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">O Que Você Ganha</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-black text-secondary">Sua Nova Vida Começa Aqui</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Flame, t: "Ereções Mais Firmes", d: "Rigidez e duração que você não sentia há anos." },
              { icon: TrendingUp, t: "+ Libido e Desejo", d: "Vontade natural de volta, todos os dias." },
              { icon: Zap, t: "Mais Energia", d: "Disposição para o dia e para a noite." },
              { icon: Heart, t: "Confiança Total", d: "Sem medo, sem ansiedade, sem falha." },
              { icon: Award, t: "Melhor Relacionamento", d: "Intimidade e conexão renovadas." },
              { icon: Leaf, t: "100% Natural", d: "Sem efeitos colaterais, sem receita." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group p-5 md:p-6 rounded-2xl bg-white border border-border shadow-card hover:-translate-y-1 hover:shadow-cta transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center mb-4 group-hover:bg-gradient-primary transition-colors">
                  <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-secondary">{t}</h3>
                <p className="mt-1 text-sm md:text-base text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-muted">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Prova Social</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-black text-secondary">Mais de 12.000 homens transformados</h2>
            <div className="mt-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 (2.847 avaliações)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { n: "Ricardo, 47", t: "Depois de 3 semanas, minha esposa notou a diferença antes de mim. Voltei a me sentir homem." },
              { n: "Paulo, 52", t: "Achei que era idade. Descobri que era só falta do estímulo certo. Mudou minha vida." },
              { n: "Bruno, 39", t: "A ansiedade sumiu. Hoje eu tenho controle e confiança total. Recomendo pra todo homem." },
            ].map(({ n, t }) => (
              <div key={n} className="p-6 rounded-2xl bg-white border border-border shadow-card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 text-sm md:text-base italic">"{t}"</p>
                <p className="mt-4 font-bold text-secondary">— {n}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden shadow-card grid md:grid-cols-2 bg-white">
            <img src={coupleImg} alt="Casal feliz" loading="lazy" width={1024} height={1024} className="w-full h-64 md:h-full object-cover" />
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-black text-secondary">"Recuperei muito mais que uma ereção. Recuperei meu casamento."</h3>
              <p className="mt-4 text-muted-foreground text-sm md:text-base">— Fernando, 44 anos, cliente Mens Ascend há 6 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-bold text-xs md:text-sm uppercase tracking-wider">
              <Timer className="w-4 h-4 inline mr-1" /> Oferta por tempo limitado
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black text-secondary">Escolha Sua Transformação</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-primary shadow-cta bg-white">
            <div className="bg-gradient-primary text-white text-center py-3 font-bold text-sm md:text-base">
              🔥 MAIS ESCOLHIDO — 68% DE DESCONTO
            </div>
            <div className="p-6 md:p-10">
              <div className="text-center">
                <p className="text-muted-foreground line-through text-lg">De R$ 297,00</p>
                <div className="mt-1 flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-6xl font-black text-secondary">R$ 97</span>
                  <span className="text-xl md:text-2xl font-bold text-secondary">,00</span>
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  ou <strong className="text-foreground">12x de R$ 9,68</strong> no cartão
                </p>
              </div>
              <div className="my-6 border-t border-border" />
              <p className="font-bold text-secondary text-base md:text-lg mb-3">✅ Você recebe hoje:</p>
              <ul className="space-y-2.5">
                {[
                  "1 Frasco Mens Ascend (30 doses)",
                  "🎁 BÔNUS: Guia Rápido de Performance (PDF)",
                  "🎁 BÔNUS: Protocolo 7 Dias de Vitalidade",
                  "🎁 BÔNUS: Acesso ao grupo VIP no Telegram",
                  "Frete grátis para todo o Brasil",
                  "Embalagem 100% discreta",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-8">
                <CTAButton className="w-full">Garantir Minha Vaga</CTAButton>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-accent border border-primary/20 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-bold text-secondary text-sm md:text-base">Garantia Incondicional de 30 Dias</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Se por qualquer motivo você não sentir a diferença, devolvemos 100% do seu dinheiro. Sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-muted">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-secondary">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Em quanto tempo vou sentir resultados?", a: "A maioria dos homens percebe mais energia e libido nos primeiros 7-14 dias. Resultados completos em 4-8 semanas." },
              { q: "Tem efeitos colaterais?", a: "Não. Mens Ascend é 100% natural, sem contraindicações graves. Recomendamos consultar seu médico se usar medicamento contínuo." },
              { q: "Funciona mesmo depois dos 50 anos?", a: "Sim. Nossa fórmula foi desenvolvida especialmente para homens maduros, atacando as principais causas da queda de performance com a idade." },
              { q: "A entrega é discreta?", a: "Totalmente. O produto chega em embalagem sem identificação, protegendo sua privacidade." },
              { q: "E se não funcionar para mim?", a: "Você tem 30 dias de garantia total. Não gostou? Devolvemos 100% do seu investimento." },
              { q: "Posso tomar junto com outros suplementos?", a: "Sim, é compatível com a maioria dos suplementos. Em caso de medicação, consulte seu médico." },
              { q: "Como é feito o pagamento?", a: "Pix, cartão em até 12x ou boleto — ambiente 100% seguro e criptografado." },
            ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-hero text-white text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
            Sua Melhor Versão Está a <span className="text-primary">Um Clique</span> de Distância
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/85">
            Não deixe mais um mês passar em silêncio. Milhares de homens já recuperaram a virilidade — e você pode ser o próximo.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton>Quero Começar Agora</CTAButton>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> Compra 100% Segura</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Garantia 30 Dias</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> +12.000 Clientes</span>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 pb-24 md:pb-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2026 Mens Ascend. Todos os direitos reservados.</p>
        <p className="mt-1 max-w-2xl mx-auto">Este produto não é um medicamento e não se destina a diagnosticar, tratar ou curar qualquer doença. Resultados variam.</p>
      </footer>

      {/* CTA fixo mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.15)]">
        <a
          href={CHECKOUT}
          className="flex items-center justify-center gap-2 w-full bg-gradient-primary text-primary-foreground font-bold text-base px-4 py-3.5 rounded-xl shadow-cta active:scale-[0.98] transition-transform"
        >
          <Flame className="w-5 h-5" /> Comprar Agora
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left"
      >
        <span className="font-bold text-secondary text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-muted-foreground animate-float-in">
          {a}
        </div>
      )}
    </div>
  );
}
