// LIGHT ONE — Home.tsx
// Design: Light Paper System (인포그래픽 Rev.6 기준)
// Palette: --lo-bg #F2F4F9 / --lo-paper #FFF / --lo-teal #0E9488 / --lo-navy-900 #16284F
// Font: Pretendard (KR) + Inter (numbers/labels)
// Sections: Hero → Problem → Solution → Market → Competition → Founder → Roadmap → Compliance → Support → Pricing → CTA → Footer

import { useState, useEffect } from "react";
import {
  Activity, Shield, FileText, TrendingUp, Users,
  ChevronRight, CheckCircle2, AlertTriangle, XCircle,
  BarChart3, Brain, Camera, Zap, Target,
  Building2, Menu, X, Star, ArrowRight
} from "lucide-react";

/* ─── tiny motion helpers (no framer-motion dep) ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = (el: HTMLDivElement | null) => {
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#problem", label: "문제정의" },
    { href: "#solution", label: "솔루션" },
    { href: "#market", label: "시장" },
    { href: "#team", label: "창업자" },
    { href: "#roadmap", label: "로드맵" },
    { href: "#pricing", label: "요금제" },
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: "var(--lo-bg)", color: "var(--lo-ink-1)" }}>

      {/* ===== NAVIGATION ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--lo-line)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 16px rgba(13,20,41,.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/manus-storage/lightone_logo_e8f3a2b1.png" alt="LIGHT ONE" className="h-7 w-7 sm:h-9 sm:w-9" />
            <span className="text-base sm:text-lg font-bold tracking-tight" style={{ color: scrolled ? "var(--lo-navy-900)" : "#fff" }}>
              LIGHT ONE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: scrolled ? "var(--lo-ink-2)" : "rgba(255,255,255,0.75)" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/report-demo"
              className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--lo-teal)", color: "#fff" }}
            >
              데모 보기
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "var(--lo-ink-1)" : "#fff" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t" style={{ background: "rgba(255,255,255,0.97)", borderColor: "var(--lo-line)" }}>
            <div className="flex flex-col px-4 py-3 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 text-sm font-medium rounded-lg transition-all"
                  style={{ color: "var(--lo-ink-2)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/report-demo"
                className="mt-2 py-3 px-4 text-sm font-semibold rounded-lg text-center"
                style={{ background: "var(--lo-teal)", color: "#fff" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                데모 보기
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-14 sm:pt-16">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/lightone_hero_bg_11231aa4.png"
            alt=""
            className="w-full h-full object-cover object-right sm:object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,21,48,0.95) 0%, rgba(12,21,48,0.85) 50%, rgba(12,21,48,0.45) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(12,21,48,0.9) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8"
                style={{ background: "rgba(14,148,136,0.15)", border: "1px solid rgba(14,148,136,0.3)", color: "#5EEAD4" }}>
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                LIGHT ONE MVP · PT 상담 리포트 SaaS
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-5 sm:mb-6" style={{ color: "#fff" }}>
                프로의 기준,<br />
                <span style={{ color: "#5EEAD4" }}>이제는 데이터입니다</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px" }}>
                PT샵의 운동 기록, 체형 관찰, 통증 반응, 상담 메모를 하나의 리포트로 정리해
                트레이너의 상담과 재등록 관리를 돕는 B2B 웰니스 SaaS.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="/report-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "var(--lo-teal)", color: "#fff", boxShadow: "0 4px 14px rgba(14,148,136,0.35)" }}>
                  리포트 데모 보기
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#solution"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                  MVP 운영 흐름
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {[
                  { v: "14,773+", l: "국내 피트니스 시설", s: "문화체육관광부 2024" },
                  { v: "30~40%", l: "연간 회원 이탈률", s: "업계 추정" },
                  { v: "3단계", l: "위험 라우팅 시스템", s: "AUTO/REVIEW/BLOCK" },
                  { v: "B2B", l: "SaaS 구독 모델", s: "PT샵·헬스장·기업" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-bold font-num" style={{ color: "#5EEAD4" }}>{s.v}</div>
                    <div className="text-xs sm:text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
                    <div className="text-[10px] sm:text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.s}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section id="problem" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">01</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Problem Definition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>PT 현장의 구조적 문제</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>
              트레이너의 경험과 감각에만 의존하는 상담은 일관성이 없고, 회원에게 변화를 설명하기 어렵습니다.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {[
              { icon: AlertTriangle, color: "#C8932A", bg: "var(--lo-gold-tint)", title: "데이터 부재", desc: "상담 기록이 트레이너 개인 기억에 의존. 담당자 변경 시 회원 히스토리 소실." },
              { icon: Users, color: "#DC2626", bg: "#FEF2F2", title: "재등록률 하락", desc: "회원에게 변화를 객관적으로 보여줄 수 없어 PT 가치를 설명하지 못함. 소비자 피해 연 117만원." },
              { icon: Shield, color: "#7C3AED", bg: "#F5F3FF", title: "안전 리스크", desc: "통증 반응, 가동범위 이상 신호를 체계적으로 관리하지 못해 부상 위험 증가." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="lo-card p-6 sm:p-8 h-full hover:shadow-lo-2 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                    style={{ background: item.bg }}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "var(--lo-navy-900)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--lo-ink-2)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Market Stats Bar */}
          <FadeIn>
            <div className="rounded-2xl p-5 sm:p-8" style={{ background: "var(--lo-navy-900)" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {[
                  { v: "14,773+", l: "국내 피트니스 시설", s: "문화체육관광부 2024 [확인필요]" },
                  { v: "30~40%", l: "연간 회원 이탈률", s: "업계 추정치 [확인필요]" },
                  { v: "117만원", l: "PT 소비자 평균 피해액", s: "소비자원 2023 [확인필요]" },
                  { v: "8%↓", l: "디지털 도구 침투율", s: "국내 PT 시장 추정" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold font-num" style={{ color: "#5EEAD4" }}>{s.v}</div>
                    <div className="text-xs sm:text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>{s.l}</div>
                    <div className="text-[10px] sm:text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section id="solution" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">02</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Solution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>LIGHT ONE 핵심 솔루션</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>
              촬영 → 분석 → 수치화 → 리포트의 4단계 흐름으로 PT 상담의 근거를 만듭니다.
            </p>
          </FadeIn>

          {/* 4-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12">
            {[
              { step: "01", icon: Camera, title: "촬영 · 기록", desc: "운동 수행, 자세 사진, 통증 반응, RPE를 세션 단위로 입력" },
              { step: "02", icon: Brain, title: "AI 분석", desc: "규칙 기반 QS 산출 + XGBoost 예측 모델로 위험도 분류" },
              { step: "03", icon: BarChart3, title: "수치화 · 라우팅", desc: "AUTO / REVIEW / BLOCK 3단계 자동 분류로 즉시 판단 지원" },
              { step: "04", icon: FileText, title: "리포트 생성", desc: "트레이너 검토 후 회원에게 전달 가능한 비의료 상담 리포트" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="lo-card p-5 sm:p-6 h-full relative hover:shadow-lo-2 transition-all duration-300 group">
                  <div className="absolute top-3 right-3 text-4xl font-black font-num" style={{ color: "var(--lo-line-strong)", lineHeight: 1 }}>{item.step}</div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                    style={{ background: "var(--lo-teal-tint)" }}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--lo-teal)" }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: "var(--lo-navy-900)" }}>{item.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--lo-ink-2)" }}>{item.desc}</p>
                  {i < 3 && <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "var(--lo-teal)", opacity: 0.4 }} />}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Risk Routing */}
          <FadeIn>
            <div className="lo-card p-5 sm:p-8 mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-center mb-5 sm:mb-6" style={{ color: "var(--lo-navy-900)" }}>
                위험 라우팅 시스템 (AUTO / REVIEW / BLOCK)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: CheckCircle2, label: "AUTO", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0", desc: "NRS ≤ 3, RPE ≤ 7\n정상 진행 가능. 트레이너 재량으로 세션 지속." },
                  { icon: AlertTriangle, label: "REVIEW", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A", desc: "NRS 4~6 또는 RPE 8~9\n트레이너 검토 필요. 강도 조절 또는 운동 변경 권고." },
                  { icon: XCircle, label: "BLOCK", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", desc: "NRS ≥ 7 또는 RPE 10\n안전상 중단. 전문가 상담 권고 (의료 판단 아님)." },
                ].map((r, i) => (
                  <div key={i} className="p-4 sm:p-5 rounded-xl" style={{ background: r.bg, border: `1px solid ${r.border}` }}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <r.icon className="w-5 h-5" style={{ color: r.color }} />
                      <span className="font-bold text-sm" style={{ color: r.color }}>{r.label}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--lo-ink-2)" }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Report Demo Thumbnail */}
          <FadeIn>
            <a href="/report-demo" className="group block">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lo-teal"
                style={{ border: "1px solid var(--lo-line)" }}>
                <img
                  src="/manus-storage/webdev-preview-1782865797_6e92764d.png"
                  alt="LIGHT ONE 리포트 데모 미리보기"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(12,21,48,0.7) 0%, transparent 60%)", opacity: 0.7 }} />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">PT 상담 리포트 견본</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>가상 데이터 기반 · 트레이너용 / 회원용</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 group-hover:opacity-90"
                    style={{ background: "var(--lo-teal)", color: "#fff" }}>
                    <FileText className="w-3.5 h-3.5" />
                    데모 보기
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ===== MARKET SECTION ===== */}
      <section id="market" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">03</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Market & Competition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>시장 분석 & 경쟁 지형</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>
              측정 솔루션은 레드오션이지만, 측정 이후의 "그래서 무엇을, 왜, 어떤 순서로"는 비어 있습니다.
            </p>
          </FadeIn>

          {/* Market Size Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {[
              { label: "TAM", sub: "글로벌 피트니스 테크", value: "$47.6B", note: "Business Research Insights 2026 [확인필요]", color: "var(--lo-blue)" },
              { label: "SAM", sub: "국내 PT·웰니스 디지털화", value: "₩2,800억+", note: "시설 14,773 × 평균 추정 [확인필요]", color: "var(--lo-teal)" },
              { label: "SOM", sub: "초기 타겟: PT샵 2,000곳", value: "₩58억/년", note: "Pro 플랜 ₩89,000 × 12 × 2,000 [가설]", color: "var(--lo-gold)" },
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="lo-card p-6 sm:p-8 text-center hover:shadow-lo-2 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 font-bold text-sm font-num"
                    style={{ background: `color-mix(in srgb, ${m.color} 12%, transparent)`, color: m.color }}>
                    {m.label}
                  </div>
                  <div className="text-xs font-semibold mb-2" style={{ color: "var(--lo-ink-3)" }}>{m.sub}</div>
                  <div className="text-2xl sm:text-3xl font-bold font-num mb-2" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-[10px] sm:text-xs" style={{ color: "var(--lo-ink-3)" }}>{m.note}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Competition Table */}
          <FadeIn>
            <div className="lo-card overflow-hidden mb-6 sm:mb-8">
              <div className="p-5 sm:p-6 flex items-center justify-between flex-wrap gap-3"
                style={{ borderBottom: "1px solid var(--lo-line)" }}>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--lo-blue)" }}>Competitive Landscape</div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: "var(--lo-navy-900)" }}>경쟁 지형 — 측정 솔루션은 이미 레드오션</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: "var(--lo-paper-tint)", border: "1px solid var(--lo-line)", color: "var(--lo-ink-3)" }}>
                  2026.07 리서치 기반
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr style={{ background: "var(--lo-paper-tint)", borderBottom: "1px solid var(--lo-line)" }}>
                      {["서비스", "핵심 기능", "고객 기반", "방법론 IP", "스마트폰 기반", "회복 프로토콜"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--lo-ink-2)", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "바디코디", func: "CRM·예약·결제 운영관리", base: "4,000+ 센터", ip: false, mobile: false, protocol: false, lo: false },
                      { name: "피트릭스", func: "키오스크 AI 체형분석 70+항목", base: "1,200+ B2B", ip: false, mobile: false, protocol: false, lo: false },
                      { name: "바디닷", func: "3D 카메라 체형분석", base: "병원 400+", ip: false, mobile: false, protocol: false, lo: false },
                      { name: "엑스바디", func: "국내 1위 체형분석 장비·리포트", base: "병원·기업·체육관", ip: false, mobile: false, protocol: false, lo: false },
                      { name: "APECS", func: "스마트폰 자세평가 앱", base: "임상가·개인", ip: false, mobile: true, protocol: false, lo: false },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--lo-line)" }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: "var(--lo-ink-1)" }}>{row.name}</td>
                        <td className="px-4 py-3" style={{ color: "var(--lo-ink-2)" }}>{row.func}</td>
                        <td className="px-4 py-3" style={{ color: "var(--lo-ink-2)", whiteSpace: "nowrap" }}>{row.base}</td>
                        <td className="px-4 py-3"><span className="lo-tag-stop">없음</span></td>
                        <td className="px-4 py-3">{row.mobile ? <span className="lo-tag-ok">있음</span> : <span className="lo-tag-stop">없음</span>}</td>
                        <td className="px-4 py-3"><span className="lo-tag-stop">없음</span></td>
                      </tr>
                    ))}
                    {/* LIGHT ONE row */}
                    <tr style={{ background: "color-mix(in srgb, var(--lo-teal) 5%, transparent)" }}>
                      <td className="px-4 py-3 font-bold" style={{ color: "var(--lo-teal-700)" }}>LIGHT ONE ★</td>
                      <td className="px-4 py-3 font-medium text-xs sm:text-sm" style={{ color: "var(--lo-ink-1)" }}>비의료 PT 상담 리포트 + 기능 회복 프로토콜</td>
                      <td className="px-4 py-3 font-medium" style={{ color: "var(--lo-ink-1)", whiteSpace: "nowrap" }}>PT샵·헬스장·기업 B2B</td>
                      <td className="px-4 py-3"><span className="lo-tag-ok">Body Logic IP</span></td>
                      <td className="px-4 py-3"><span className="lo-tag-ok">있음 (4방향)</span></td>
                      <td className="px-4 py-3"><span className="lo-tag-ok">핵심 차별점 ★</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* White Space Callout */}
          <FadeIn>
            <div className="rounded-2xl p-5 sm:p-7 flex gap-4 sm:gap-5"
              style={{ background: "var(--lo-navy-900)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="shrink-0 mt-0.5">
                <Star className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#FCD34D" }} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#FCD34D" }}>White Space — 화이트스페이스</div>
                <h4 className="text-sm sm:text-base font-bold mb-2" style={{ color: "#fff" }}>
                  "측정은 어디서나 된다 — 측정 이후 '그래서 무엇을, 왜, 어떤 순서로'가 비어 있다"
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  경쟁사들은 촬영→측정→점수화→리포트 출력에서 멈춘다. LIGHT ONE은 약화 근육군 우선순위 매칭 → 회복 운동 시퀀스 제안 → 트레이너 검토로 이어지는{" "}
                  <span style={{ color: "#5EEAD4", fontWeight: 600 }}>기능 회복 방법론 IP</span>가 핵심 차별점이다.
                  글로벌 벤치마크 FMS·Prehab Guys·Precision Nutrition도 동일한 공식: 방법론 표준화 → 교육·인증 → 구독 수익화.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FOUNDER STORY SECTION ===== */}
      <section id="team" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">04</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Why This Business</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>이 사업을 만든 이유</h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>
              18년간 PT 현장에서 매일 반복된 문제를 더 이상 무시할 수 없었습니다.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <FadeIn>
              <div className="lo-card p-6 sm:p-10">
                <div className="space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed" style={{ color: "var(--lo-ink-2)" }}>
                  <p>
                    <span className="font-semibold" style={{ color: "var(--lo-teal-700)" }}>"회원님, 지난달보다 어깨가 많이 좋아졌어요."</span><br />
                    13년간 이 말을 수천 번 했습니다. 그런데 회원이 물었습니다.
                    <span className="font-semibold" style={{ color: "var(--lo-ink-1)" }}> "그게 어느 정도요? 숫자로 보여주세요."</span>
                  </p>
                  <p>
                    답할 수 없었습니다. 내 눈에는 보이는데, 설명할 근거가 없었습니다.
                    그날 회원은 재등록을 하지 않았습니다.
                  </p>
                  <p>
                    이후로도 같은 상황이 반복됐습니다. 트레이너의 전문성은 똑같은데,
                    그걸 <span className="font-semibold" style={{ color: "var(--lo-ink-1)" }}>"증명할 도구"가 없었습니다.</span>
                  </p>
                  <p>
                    그래서 만들었습니다. 트레이너의 관찰을 숫자로 바꾸고,
                    회원의 변화를 리포트로 보여주는 도구를.
                    <span className="font-semibold" style={{ color: "var(--lo-teal-700)" }}> 그것이 LIGHT ONE입니다.</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="max-w-4xl mx-auto lo-card p-5 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                {[
                  { v: "18년+", l: "PT 현장 경력", s: "편집부장 → 트레이너 → 센터 오너" },
                  { v: "AI 전문가 과정", l: "바이오헬스케어 AI", s: "건양대병원 B2B · 2025.03~" },
                  { v: "Python/ML", l: "기술 역량", s: "Django · XGBoost · MediaPipe" },
                ].map((c, i) => (
                  <div key={i}>
                    <div className="text-base sm:text-lg font-bold font-num" style={{ color: "var(--lo-teal)" }}>{c.v}</div>
                    <div className="text-xs sm:text-sm mt-1" style={{ color: "var(--lo-ink-2)" }}>{c.l}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "var(--lo-ink-3)" }}>{c.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section id="roadmap" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">05</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>사업화 로드맵</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { q: "Q3 2025", title: "MVP 완성", items: ["Django 서비스 구현", "QS 산출 엔진", "더미 데이터 검증"], status: "done" },
              { q: "Q4 2025", title: "파일럿 운영", items: ["대전 PT샵 2~3곳", "트레이너 피드백 수집", "리포트 템플릿 고도화"], status: "current" },
              { q: "Q1 2026", title: "정식 런칭", items: ["SaaS 구독 모델 오픈", "결제 시스템 연동", "마케팅 캠페인 시작"], status: "upcoming" },
              { q: "Q2 2026", title: "스케일업", items: ["AI 모델 고도화", "프랜차이즈 B2B 영업", "시리즈A 투자 유치"], status: "upcoming" },
            ].map((phase, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`lo-card p-5 sm:p-6 h-full ${phase.status === "current" ? "ring-2" : ""}`}
                  style={{
                    borderColor: phase.status === "done" ? "#A7F3D0" : phase.status === "current" ? "#FDE68A" : "var(--lo-line)",

                  }}>
                  <div className="text-[11px] font-mono font-bold mb-2"
                    style={{ color: phase.status === "done" ? "var(--lo-teal)" : phase.status === "current" ? "#D97706" : "var(--lo-ink-3)" }}>
                    {phase.q}
                    {phase.status === "current" && <span className="ml-2 px-1.5 py-0.5 rounded text-[10px]" style={{ background: "#FEF3C7", color: "#92400E" }}>진행 중</span>}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-3" style={{ color: "var(--lo-navy-900)" }}>{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "var(--lo-ink-2)" }}>
                        {phase.status === "done"
                          ? <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--lo-teal)" }} />
                          : <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--lo-line-strong)" }} />}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">06</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Compliance & Risk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>규제 리스크 관리</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>비의료 서비스로서의 명확한 포지셔닝</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <FadeIn delay={0}>
              <div className="lo-card p-6 sm:p-8 h-full" style={{ borderColor: "#A7F3D0" }}>
                <h3 className="text-sm sm:text-base font-bold mb-4 flex items-center gap-2" style={{ color: "#059669" }}>
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  허용 표현 (사용 가능)
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {["체형 관찰 기록 및 변화 추세 시각화", "운동 수행 품질 점수(QS) 산출", "트레이너 상담 보조 리포트", "안전 신호 기반 운동 중단 권고", "비의료 건강관리 서비스"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "var(--lo-ink-2)" }}>
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#059669" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="lo-card p-6 sm:p-8 h-full" style={{ borderColor: "#FECACA" }}>
                <h3 className="text-sm sm:text-base font-bold mb-4 flex items-center gap-2" style={{ color: "#DC2626" }}>
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  금지 표현 (절대 사용 불가)
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {["진단, 처방, 치료, 재활 프로그램", "의료기기, 의료 AI, 임상 판단", "질환 예측, 질병 선별, 건강 진단", "환자, 증상 완화, 치료 효과", "의사 대체, 전문의 수준의 판단"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "var(--lo-ink-2)" }}>
                      <XCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#DC2626" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-xl p-4 sm:p-5 text-center text-xs sm:text-sm"
              style={{ background: "var(--lo-paper)", border: "1px solid var(--lo-line)", color: "var(--lo-ink-2)" }}>
              LIGHT ONE은 의료법 제27조에 저촉되지 않는{" "}
              <span className="font-semibold" style={{ color: "var(--lo-teal-700)" }}>비의료 건강관리 서비스</span>로 설계되었습니다.<br />
              모든 리포트에는 "본 자료는 의학적 진단을 대체하지 않습니다" 문구가 강제 삽입됩니다.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PUBLIC SUPPORT SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-paper)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">07</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Target Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>공공 지원사업 적합성</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Building2, name: "예비창업패키지", org: "중소벤처기업부", fit: "기술 혁신성 + 시장 차별성 + 실행 역량" },
              { icon: Target, name: "모두의 창업 2기", org: "모두의 창업", fit: "현장 경험 기반 문제 해결 + MVP 완성도", highlight: true },
              { icon: Zap, name: "초기창업패키지", org: "중소벤처기업부", fit: "BM 검증 완료 + 매출 발생 가능성" },
              { icon: Building2, name: "충청권 지원사업", org: "충청남도/북도", fit: "건양대병원 연계 바이오헬스 생태계" },
              { icon: TrendingUp, name: "팁스(TIPS)", org: "중소벤처기업부", fit: "AI+헬스케어 기술 기반 글로벌 확장성" },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className={`lo-card p-5 sm:p-6 h-full hover:shadow-lo-2 transition-all duration-300 ${p.highlight ? "ring-2" : ""}`}
                  style={{ borderColor: p.highlight ? "var(--lo-teal)" : "var(--lo-line)" }}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <p.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--lo-teal)" }} />
                    <h3 className="font-bold text-sm sm:text-base" style={{ color: "var(--lo-navy-900)" }}>{p.name}</h3>
                    {p.highlight && <span className="lo-tag-ok text-[10px]">핵심</span>}
                  </div>
                  <p className="text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--lo-ink-3)" }}>{p.org}</p>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--lo-ink-2)" }}>{p.fit}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="lo-section-num">08</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--lo-teal)" }}>Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--lo-navy-900)" }}>B2B SaaS 구독 요금제</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base" style={{ color: "var(--lo-ink-2)" }}>
              센터 규모와 필요 기능에 맞춤 3단계 요금 구조
            </p>
            <p className="mt-2 text-xs" style={{ color: "var(--lo-ink-3)" }}>
              [확인필요] 아래 가격·기능 구성은 고객 인터뷰 검증 전 가설 단계입니다. 파일럿 데이터 확보 후 확정합니다.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: "Starter", name: "1인 PT샵 · 프리랜서", price: "29,000",
                features: ["회원 최대 30명 관리", "QS·JATC·위험 라우팅 기본 산출", "비의료 상담 리포트 월 50건", "4방향 촬영 QC 기본 제공"],
                highlight: false,
              },
              {
                tier: "★ Pro", name: "중소형 PT샵 (3–5인)", price: "89,000",
                features: ["무제한 회원 관리", "트레이너별 권한 분리", "커스텀 로고 리포트 무제한", "기능 회복 프로토콜 매칭 완전 지원", "변화 추적 대시보드"],
                highlight: true,
              },
              {
                tier: "Enterprise", name: "대형 피트니스 센터 · 기업 B2B", price: "199,000",
                features: ["지점 통합 대시보드", "트레이너 성과 KPI 연동", "기업 임직원 근골격 예방 프로그램", "전담 지원 · 커스텀 온보딩"],
                highlight: false,
              },
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`lo-card p-6 sm:p-8 h-full relative transition-all duration-300 hover:shadow-lo-2 ${plan.highlight ? "ring-2" : ""}`}
                  style={{
                    borderColor: plan.highlight ? "var(--lo-teal)" : "var(--lo-line)",
                    transform: plan.highlight ? "scale(1.02)" : undefined,
                  }}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: "var(--lo-teal)", color: "#fff" }}>
                      추천
                    </div>
                  )}
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: plan.highlight ? "var(--lo-teal)" : "var(--lo-ink-3)" }}>
                    {plan.tier}
                  </div>
                  <div className="text-xs sm:text-sm mb-4" style={{ color: "var(--lo-ink-2)" }}>{plan.name}</div>
                  <div className="mb-5 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold font-num" style={{ color: plan.highlight ? "var(--lo-teal)" : "var(--lo-navy-900)" }}>
                      ₩{plan.price}
                    </span>
                    <span className="text-xs sm:text-sm ml-1" style={{ color: "var(--lo-ink-3)" }}>/ 월 [확인필요]</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: "var(--lo-ink-2)" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--lo-teal)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Expansion Path */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-5xl mx-auto">
            {[
              { title: "교육·인증 IP (중기)", desc: "한국형 기능적 컨디셔닝 인증 과정 (FMS 벤치마크). 레벨제 커리큘럼 + 인증비 + 갱신비. LIGHT ONE 측정도구를 '인증 트레이너 전용 도구'로 패키지화." },
              { title: "기업 B2B 근골격 예방 (중기)", desc: "산업안전보건법 근골격계 유해요인조사 의무 연계. VDT 증후군·거북목 예방 → 측정+단체 세션+리포트 기업 복지 예산 판매." },
              { title: "병원·협진 모델 (장기)", desc: "2022 비의료 건강관리서비스 가이드라인 개정: 의료인 처방 범위 내 비의료 운동상담 허용. 도수치료 관리급여화로 병원이 비급여 대안 탐색 중. [확인필요]" },
            ].map((e, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="lo-card-tint p-5 sm:p-6 h-full">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: "var(--lo-teal-tint)" }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--lo-teal)" }} />
                  </div>
                  <h4 className="text-sm font-bold mb-2" style={{ color: "var(--lo-navy-900)" }}>{e.title}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--lo-ink-2)" }}>{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 모두의 창업 Callout */}
          <FadeIn>
            <div className="mt-8 sm:mt-10 rounded-2xl p-5 sm:p-7 max-w-5xl mx-auto"
              style={{ background: "var(--lo-navy-900)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "var(--lo-teal)", color: "#fff" }}>모두의 창업 2기</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                심사 관점 최우선 전략:{" "}
                <span style={{ color: "#fff", fontWeight: 600 }}>트레이너 교육·인증 IP + 기업 B2B 파일럿</span>{" "}
                조합이 "확장 가능한 수익모델 + 사회적 의미 + 명확한 1차 고객" 세 조건을 동시에 충족.
                멘토 피드백("촬영환경 편차 보정")을{" "}
                <span style={{ color: "#5EEAD4", fontWeight: 600 }}>캘리브레이션 모듈 구현 증거</span>로 전환하는 것이 2기 평가의 핵심.
              </p>
              <div className="flex flex-wrap gap-2">
                {["방법론 IP", "B2B 파일럿 LOI", "실행력 아카이빙", "Human-in-the-loop"].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(14,148,136,0.15)", border: "1px solid rgba(14,148,136,0.25)", color: "#5EEAD4" }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "var(--lo-navy-900)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "#fff" }}>
              PT의 가치를 데이터로 증명합니다
            </h2>
            <p className="text-sm sm:text-base mb-8 sm:mb-10" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto 2rem" }}>
              LIGHT ONE은 트레이너의 전문성을 대체하지 않습니다.<br />
              트레이너의 판단에 근거를 더합니다.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8">
              <a href="/report-demo"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: "var(--lo-teal)", color: "#fff", boxShadow: "var(--lo-sh-teal)" }}>
                리포트 데모 보기
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://areyourad.netlify.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                포트폴리오 보기
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 sm:py-10" style={{ background: "#0C1530", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/manus-storage/lightone_logo_e8f3a2b1.png" alt="LIGHT ONE" className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="font-bold text-sm sm:text-base" style={{ color: "#fff" }}>LIGHT ONE</span>
              <span className="text-[11px] sm:text-sm ml-1 sm:ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>Data-Driven, Evidence-Based Personal Training</span>
            </div>
            <p className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>© 2025 LIGHT ONE. 송광일. All rights reserved.</p>
          </div>
          <div className="text-[10px] sm:text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.2)", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
            <strong style={{ color: "rgba(255,255,255,0.35)" }}>규제 고지</strong> · 본 자료는 비의료 운동상담 보조 도구를 설명하기 위한 시각자료이며, 의료적 진단·치료·처방을 대체하지 않습니다.{" "}
            <strong style={{ color: "rgba(255,255,255,0.35)" }}>데이터 고지</strong> · 표시된 측정값·점수·그래프는 흐름 설명을 위한 가상 예시이며, 실제 서비스 출시 전 식약처·복지부 가이드라인 확인 및 실측 데이터 검증이 필요합니다. [확인필요]
          </div>
        </div>
      </footer>
    </div>
  );
}
