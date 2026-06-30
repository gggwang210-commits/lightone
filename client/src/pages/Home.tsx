import { useEffect, useRef } from "react";

const LOGO_URL = "/manus-storage/lightone_logo_eada80fb.png";

// Section number component
function SectionNum({ num }: { num: string }) {
  return (
    <span className="text-[#00E5FF]/30 font-mono text-sm tracking-widest">
      {num}
    </span>
  );
}

// Routing badge
function RoutingBadge({ type }: { type: "AUTO" | "REVIEW" | "BLOCK" }) {
  const colors = {
    AUTO: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    REVIEW: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    BLOCK: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${colors[type]}`}>
      {type}
    </span>
  );
}

// Stat card for hero
function StatCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div className={`rounded-lg p-4 text-center border ${accent ? "border-[#00E5FF]/30 bg-[#00E5FF]/5" : "border-white/10 bg-white/5"}`}>
      <div className="text-xs text-slate-400 mb-1">{label}</div>
      <div className={`text-2xl font-bold font-mono ${accent ? "text-[#00E5FF]" : "text-white"}`}>{value}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}

// Pricing card
function PricingCard({ name, price, features, highlighted }: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-xl p-6 border ${highlighted ? "border-[#00E5FF]/40 bg-[#00E5FF]/5 glow-cyan" : "border-white/10 bg-white/5"} flex flex-col`}>
      <h4 className="text-lg font-semibold text-white mb-1">{name}</h4>
      <div className="mb-4">
        <span className={`text-3xl font-bold font-mono ${highlighted ? "text-[#00E5FF]" : "text-white"}`}>{price}</span>
        <span className="text-slate-400 text-sm">/월</span>
      </div>
      <ul className="space-y-2 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-emerald-400 mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Timeline item
function TimelineItem({ period, title, desc }: { period: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#00E5FF] mt-1.5" />
        <div className="w-px h-full bg-[#00E5FF]/20 min-h-[40px]" />
      </div>
      <div className="pb-6">
        <span className="text-xs font-mono text-[#00E5FF]">{period}</span>
        <h4 className="text-white font-semibold mt-1">{title}</h4>
        <p className="text-slate-400 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="LIGHT ONE" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold tracking-tight">
              LIGHT<span className="text-[#00E5FF]">ONE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#problem" className="hover:text-[#00E5FF] transition-colors">문제정의</a>
            <a href="#solution" className="hover:text-[#00E5FF] transition-colors">해결방안</a>
            <a href="#revenue" className="hover:text-[#00E5FF] transition-colors">수익모델</a>
            <a href="#growth" className="hover:text-[#00E5FF] transition-colors">성장전략</a>
            <a href="#team" className="hover:text-[#00E5FF] transition-colors">팀 역량</a>
            <a href="#risk" className="hover:text-[#00E5FF] transition-colors">리스크관리</a>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#00E5FF] text-[#0a1628] text-sm font-semibold">
            사업계획서 2026
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 via-transparent to-transparent" />
        <div className="container relative">
          <div className="text-center mb-12" data-animate>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-sm text-slate-300">모두의 창업 2기 · ONLY ONE 프로젝트 선정</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              프로의 기준,<br />
              <span className="text-[#00E5FF]">이제는 데이터입니다.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-4">
              PT 현장의 운동 기록, 통증, 자세 관찰 데이터를 구조화하여<br className="hidden md:block" />
              트레이너의 안전하고 일관된 판단을 돕는<br className="hidden md:block" />
              <strong className="text-white">데이터 기반 PT 의사결정지원 서비스</strong>
            </p>
            <p className="text-sm text-[#00E5FF]/60 italic">"데이터가 남아야 설명할 수 있습니다."</p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12" data-animate>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00E5FF] font-mono">18년+</div>
              <div className="text-xs text-slate-400 mt-1">현장 경험</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white font-mono">MVP</div>
              <div className="text-xs text-slate-400 mt-1">Rev.05 구현 완료</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white font-mono">B2B SaaS</div>
              <div className="text-xs text-slate-400 mt-1">구독 수익모델</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white font-mono">3단계</div>
              <div className="text-xs text-slate-400 mt-1">위험 라우팅</div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="max-w-4xl mx-auto rounded-xl border border-[#00E5FF]/15 bg-[#0f2035] p-6 glow-cyan" data-animate>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-sm text-slate-400">LIGHT ONE Dashboard — Live Session Monitor</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="QS Score" value="78" sub="▲ +5.2" accent />
              <StatCard label="NRS" value="2" sub="경미한 통증" />
              <StatCard label="RPE" value="6" sub="적정 강도" />
              <StatCard label="Routing" value="AUTO" sub="진행 가능" accent />
            </div>
            <div className="mt-4 flex justify-between items-center text-xs text-slate-500 border-t border-white/5 pt-3">
              <span>감이 아니라 기록으로 판단합니다.</span>
              <span className="text-[#00E5FF]/60">Evidence-Based PT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 01. Problem Definition */}
      <section id="problem" className="py-20 border-t border-white/5">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="01" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">문제 정의</h2>
            <p className="text-slate-400 mt-2">PT 현장의 고질적인 문제: '경험의 휘발성'과 '데이터 부재'</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-animate>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl mb-3">👤</div>
              <h3 className="text-lg font-semibold text-white mb-2">트레이너의 어려움</h3>
              <p className="text-sm text-slate-400">회원 상담, 운동 처방, 재등록 관리가 개인의 경험과 감각에 의존. 표준화된 데이터 관리 시스템 부재로 인수인계 시 정보 단절.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">회원의 불확실성</h3>
              <p className="text-sm text-slate-400">자신의 몸 상태 변화를 객관적으로 인지하기 어려움. 트레이너 교체 시 정보 단절로 연속성 상실.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-white mb-2">센터의 비효율성</h3>
              <p className="text-sm text-slate-400">상담 품질 편차, 회원 관리 비표준화, 담당자 인수인계의 비효율성으로 인한 운영 리스크 증가.</p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6" data-animate>
            <h3 className="text-amber-400 font-semibold mb-3">기존 대안의 한계</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-slate-300"><strong className="text-white">단순 기록 앱:</strong> 운동 기록만 제공, 분석 및 의사결정 지원 부재</div>
              <div className="text-slate-300"><strong className="text-white">고가 AI 솔루션:</strong> 소규모 PT 센터 도입 어려움</div>
              <div className="text-slate-300"><strong className="text-white">의료/재활 중심:</strong> 비의료 웰니스 시장 니즈 미충족</div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Solution */}
      <section id="solution" className="py-20 border-t border-white/5 bg-[#0c1a30]">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="02" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">해결 방안</h2>
            <p className="text-slate-400 mt-2">LIGHT ONE: 데이터 기반 PT 의사결정지원 서비스</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12" data-animate>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">핵심 기능</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] text-sm font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-medium">데이터 구조화</h4>
                    <p className="text-sm text-slate-400">문진, 자세 사진, ROM, 운동 수행, 생활습관 데이터를 세션 단위로 정리</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] text-sm font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-medium">QS (Quality Score) 산출</h4>
                    <p className="text-sm text-slate-400">AI 분석과 규칙 기반 평가를 결합한 비의료 웰니스 리포트 제공</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] text-sm font-bold shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-medium">위험 라우팅 (AUTO/REVIEW/BLOCK)</h4>
                    <p className="text-sm text-slate-400">트레이너의 안전하고 일관된 판단 보조 시스템</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] text-sm font-bold shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-medium">비의료 상담 리포트</h4>
                    <p className="text-sm text-slate-400">회원에게 자신의 몸 상태를 이해할 수 있는 리포트 제공</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">위험 라우팅 시스템</h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <RoutingBadge type="AUTO" />
                    <span className="text-xs text-slate-400">NRS ≤ 3 & RPE ≤ 7</span>
                  </div>
                  <p className="text-sm text-slate-300">일반 진행 가능 — 트레이너가 계획대로 세션 진행</p>
                </div>
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <RoutingBadge type="REVIEW" />
                    <span className="text-xs text-slate-400">NRS 4~6 or RPE 8~9</span>
                  </div>
                  <p className="text-sm text-slate-300">트레이너 검토 필요 — 운동 강도 조절 또는 프로그램 수정 권고</p>
                </div>
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <RoutingBadge type="BLOCK" />
                    <span className="text-xs text-slate-400">NRS ≥ 7 or RPE = 10</span>
                  </div>
                  <p className="text-sm text-slate-300">안전상 중단 — 전문가 상담 권고 (의료 판단 아님, 안전 신호)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Roadmap */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6" data-animate>
            <h3 className="text-lg font-semibold text-white mb-4">기술 로드맵</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                <div className="text-xs text-emerald-400 font-mono mb-1">Phase 1 · 현재</div>
                <h4 className="text-white font-medium">규칙 기반 점수화</h4>
                <p className="text-xs text-slate-400 mt-1">NRS, RPE 기반 QS 산출 및 라우팅 (구현 완료)</p>
              </div>
              <div className="p-4 rounded-lg border border-[#00E5FF]/20 bg-[#00E5FF]/5">
                <div className="text-xs text-[#00E5FF] font-mono mb-1">Phase 2 · 6개월 후</div>
                <h4 className="text-white font-medium">ML 예측 모델</h4>
                <p className="text-xs text-slate-400 mt-1">XGBoost/LightGBM 기반 예측 모델 도입</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="text-xs text-slate-400 font-mono mb-1">Phase 3 · 12개월 후</div>
                <h4 className="text-white font-medium">AI 자세 분석</h4>
                <p className="text-xs text-slate-400 mt-1">OpenPose/MediaPipe 기반 정밀 자세 분석</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Revenue Model */}
      <section id="revenue" className="py-20 border-t border-white/5">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="03" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">수익 모델</h2>
            <p className="text-slate-400 mt-2">B2B SaaS 구독 모델 — 안정적 MRR 확보</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12" data-animate>
            <PricingCard
              name="Starter"
              price="29,000"
              features={[
                "세션 기록 및 데이터 구조화",
                "QS(품질 점수) 자동 산출",
                "AUTO/REVIEW/BLOCK 라우팅",
                "기본 대시보드 (변화 추이)",
                "회원 5명까지",
              ]}
            />
            <PricingCard
              name="Pro"
              price="89,000"
              highlighted
              features={[
                "Starter 전체 기능 포함",
                "PDF 리포트 다운로드",
                "센터 로고 삽입 (브랜딩)",
                "트레이너/회원 권한 분리",
                "트레이너 승인(HITL) 기능",
                "회원 무제한",
              ]}
            />
            <PricingCard
              name="Enterprise"
              price="199,000"
              features={[
                "Pro 전체 기능 포함",
                "맞춤형 기능 개발",
                "API 연동 지원",
                "전담 고객 지원",
                "다중 센터 관리",
                "데이터 분석 리포트",
              ]}
            />
          </div>

          {/* Revenue projection */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6" data-animate>
            <h3 className="text-lg font-semibold text-white mb-4">매출 시나리오 (추정치, 검증 필요)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xs text-slate-400 mb-1">보수적 (0.5% 침투)</div>
                <div className="text-2xl font-bold font-mono text-white">월 667만원</div>
                <div className="text-xs text-slate-500">PT 센터 75곳 × Pro 기준</div>
              </div>
              <div>
                <div className="text-xs text-[#00E5FF] mb-1">기본 (1% 침투)</div>
                <div className="text-2xl font-bold font-mono text-[#00E5FF]">월 1,335만원</div>
                <div className="text-xs text-slate-500">PT 센터 150곳 × Pro 기준</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">낙관적 (3% 침투)</div>
                <div className="text-2xl font-bold font-mono text-white">월 4,005만원</div>
                <div className="text-xs text-slate-500">PT 센터 450곳 × Pro 기준</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">* 전국 PT 센터 약 15,000개 기준 추정. 실제 시장 규모 및 침투율은 파일럿 운영 후 검증 필요.</p>
          </div>
        </div>
      </section>

      {/* 04. Growth Strategy */}
      <section id="growth" className="py-20 border-t border-white/5 bg-[#0c1a30]">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="04" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">성장 전략</h2>
            <p className="text-slate-400 mt-2">고객 검증 → 파일럿 → 확장의 단계적 접근</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-animate>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">고객 검증 (MVP 전)</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-xs font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">랜딩 페이지 사전 예약 (Fake Door)</h4>
                    <p className="text-xs text-slate-400">잠재 고객의 니즈 확인 및 초기 관심도 측정</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-xs font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">엑셀+수동 리포트 (Concierge MVP)</h4>
                    <p className="text-xs text-slate-400">실제 트레이너에게 세션 기록을 받아 수동으로 리포트 제공, 피드백 수집</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] text-xs font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">트레이너 인터뷰</h4>
                    <p className="text-xs text-slate-400">현장 트레이너의 구체적인 Pain Point 및 Needs 파악</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">파일럿 운영 (3개월)</h3>
              <TimelineItem period="1개월차" title="입력 습관 형성" desc="트레이너가 세션 기록을 자연스럽게 입력하는 습관 형성. 입력 시간 3분 이내 목표." />
              <TimelineItem period="2개월차" title="라우팅 검증" desc="AUTO/REVIEW/BLOCK 라우팅의 정확도 및 현장 적합성 검증." />
              <TimelineItem period="3개월차" title="성과 측정" desc="재등록률, 회원 만족도, 트레이너 업무 효율성 등 핵심 지표 측정 및 레퍼런스 확보." />
            </div>
          </div>
        </div>
      </section>

      {/* 05. Team */}
      <section id="team" className="py-20 border-t border-white/5">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="05" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">팀 역량</h2>
            <p className="text-slate-400 mt-2">창업자 송광일: 현장과 기술을 잇는 독보적 전문가</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-animate>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">경력의 시너지</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00E5FF]">8년</span>
                    <h4 className="text-white font-medium">편집부장</h4>
                  </div>
                  <p className="text-sm text-slate-400">정보 구조화, 콘텐츠 기획, 조직 운영 역량</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00E5FF]">5년+</span>
                    <h4 className="text-white font-medium">PT 트레이너 / 센터 오너</h4>
                  </div>
                  <p className="text-sm text-slate-400">현장 경험, 고객 관리, 마케팅 역량. 회원 상담·통증 관리·체형분석 실무.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00E5FF]">현재</span>
                    <h4 className="text-white font-medium">바이오헬스케어 AI 전문가 과정</h4>
                  </div>
                  <p className="text-sm text-slate-400">대전 미래교육융합원 B2B 건양대학교병원 (2026.03.25 ~ 현재). 의료 데이터, ML, DL 학습.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-[#00E5FF]">SNS</span>
                    <h4 className="text-white font-medium">인플루언서 / SNS 활동가</h4>
                  </div>
                  <p className="text-sm text-slate-400">인스타그램, 틱톡, 네이버블로그, 스레드, 유튜브 구독자 1,000+명, 조회수 8만+. 현재 교육으로 잠시 중단.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">기술 역량 및 실적</h3>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 mb-4">
                <h4 className="text-white font-medium mb-3">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "Django", "FastAPI", "OpenPose", "GitHub", "XGBoost", "LightGBM", "MediaPipe"].map((t) => (
                    <span key={t} className="px-2 py-1 rounded text-xs bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 mb-4">
                <h4 className="text-white font-medium mb-3">주요 프로젝트</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• LIGHT ONE 체형분석 프로젝트</li>
                  <li>• COPD 선별 시스템 (Django)</li>
                  <li>• NHANES 요통 예측 모델</li>
                  <li>• FIFA 월드컵 예측 프로젝트</li>
                  <li>• 소비 변화 기반 경기 예측 모델</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="text-white font-medium mb-3">자격 및 수상</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  <span>• 전문 자격증 8개</span>
                  <span>• 대회 입상 4회</span>
                  <span>• 컴퓨터활용능력 1급</span>
                  <span>• 생활스포츠지도사</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Risk Management */}
      <section id="risk" className="py-20 border-t border-white/5 bg-[#0c1a30]">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionNum num="06" />
            <h2 className="text-3xl md:text-4xl font-bold mt-2">리스크 관리</h2>
            <p className="text-slate-400 mt-2">규제, 법률, 기술 리스크에 대한 선제적 대응</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-animate>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-red-400 font-semibold mb-4">규제 리스크</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white text-sm font-medium">의료법 대응</h4>
                  <p className="text-xs text-slate-400 mt-1">"의학적 진단을 대체하지 않습니다" 문구 강제 명시. 금지어 필터링 시스템 구축. BLOCK은 '안전 신호'로 표현.</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">개인정보보호법</h4>
                  <p className="text-xs text-slate-400 mt-1">MVP는 가상/더미 데이터 기반. 민감 정보 처리 시 동의 체계 구축. [확인필요]</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">보건복지부 유권 해석</h4>
                  <p className="text-xs text-slate-400 mt-1">비의료 건강관리서비스 가이드라인 준수 여부 확인 예정. [확인필요]</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#00E5FF]/20 bg-[#00E5FF]/5 p-6">
              <h3 className="text-[#00E5FF] font-semibold mb-4">공공기관 심사 대응</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-white text-sm font-medium">예비창업패키지</h4>
                  <p className="text-xs text-slate-400 mt-1">혁신성(QS 산출 알고리즘), 실현가능성(MVP 완성), 성장성(B2B SaaS MRR) 강조.</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">중기부 / 벤처기업부</h4>
                  <p className="text-xs text-slate-400 mt-1">비전공자의 AI 기술 습득 사례, 디지털 전환(DX) 및 AI 융합 서비스 강조.</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">대전시 / 충청권</h4>
                  <p className="text-xs text-slate-400 mt-1">지역 PT 센터 협업, 지역 청년 고용 계획, 대전 바이오/헬스케어 산업 연관성.</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">기술보증기금</h4>
                  <p className="text-xs text-slate-400 mt-1">특허 출원 계획, 비의료 가이드라인 준수, 데이터 표준화.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expression guide */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6" data-animate>
            <h3 className="text-white font-semibold mb-4">표현 가이드라인 (의료법 방어)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">❌ 금지 표현</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• "진단", "치료", "처방", "재활"</li>
                  <li>• "의학적 판단", "질환 예측"</li>
                  <li>• "건강 상태 확정"</li>
                </ul>
              </div>
              <div>
                <h4 className="text-emerald-400 text-sm font-medium mb-2">✓ 허용 표현</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>• "운동 품질 점수", "변화 추세 관찰"</li>
                  <li>• "트레이너 판단 보조", "안전 신호"</li>
                  <li>• "전문가 상담 권고"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="LIGHT ONE" className="w-6 h-6 object-contain" />
              <span className="text-sm font-semibold">
                LIGHT<span className="text-[#00E5FF]">ONE</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 text-center">
              © 2026 LIGHT ONE. 프로의 기준, 이제는 데이터입니다. | Data-Driven, Evidence-Based Personal Training
            </p>
            <div className="text-xs text-slate-500">
              송광일 · lightone89
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
