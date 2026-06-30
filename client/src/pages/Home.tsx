import { motion } from "framer-motion";
import { 
  Activity, Shield, FileText, TrendingUp, Users, 
  ChevronRight, CheckCircle2, AlertTriangle, XCircle,
  BarChart3, Brain, Camera, Zap, Award, Target,
  Building2, GraduationCap, Briefcase, Smartphone
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-x-hidden">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/lightone_logo_e8f3a2b1.png" 
              alt="LIGHT ONE" 
              className="h-9 w-9"
            />
            <span className="text-lg font-bold tracking-tight">LIGHT ONE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#problem" className="hover:text-cyan-400 transition-colors">문제정의</a>
            <a href="#solution" className="hover:text-cyan-400 transition-colors">솔루션</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">요금제</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">창업자</a>
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">로드맵</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/manus-storage/lightone_hero_bg_11231aa4.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
              <Activity className="w-4 h-4" />
              LIGHT ONE MVP · TRAINER REPORT SaaS
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
              <span className="text-white/90">올바른 체형이</span><br />
              <span className="text-white/90">당신의 건강을 지킵니다</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
              AI 기반 체형분석 PT 솔루션 리포트 SaaS
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              LIGHT ONE은 PT샵의 운동 기록, 체형 관찰, 통증 반응, 상담 메모를 하나의 리포트 흐름으로 정리해 트레이너가 상담과 재등록 관리에 바로 활용할 수 있도록 돕는 B2B 웰니스 SaaS MVP입니다.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#solution" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0a0e1a] font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                MVP 운영 흐름
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all duration-200">
                상담 리포트 보기
              </a>
              <a href="#roadmap" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all duration-200">
                사업화 로드맵
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-cyan-400">18년+</div>
                <div className="text-sm text-white/50">PT 현장 경력</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">Django</div>
                <div className="text-sm text-white/50">MVP 구현 완료</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">3단계</div>
                <div className="text-sm text-white/50">위험 라우팅 시스템</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">B2B</div>
                <div className="text-sm text-white/50">SaaS 구독 모델</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section id="problem" className="py-24 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Problem Definition</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">PT 현장의 구조적 문제</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4 max-w-2xl mx-auto">
              트레이너의 경험과 감각에만 의존하는 상담은 일관성이 없고, 회원에게 변화를 설명하기 어렵습니다.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10", title: "데이터 부재", desc: "상담 기록이 트레이너 개인 기억에 의존. 담당자 변경 시 회원 히스토리 소실." },
              { icon: Users, color: "text-rose-400", bg: "bg-rose-400/10", title: "재등록률 하락", desc: "회원에게 변화를 객관적으로 보여줄 수 없어 PT 가치를 설명하지 못함. 소비자 피해 연 117만원." },
              { icon: Shield, color: "text-purple-400", bg: "bg-purple-400/10", title: "안전 리스크", desc: "통증 반응, 가동범위 이상 신호를 체계적으로 관리하지 못해 부상 위험 증가." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Market Data */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-white/5"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "$47.6B", label: "글로벌 PT 시장 규모", sub: "Grand View Research, 2023" },
                { value: "15,000+", label: "국내 PT 센터 수", sub: "추정치" },
                { value: "8%", label: "디지털 도구 침투율", sub: "국내 PT 시장" },
                { value: "117만원", label: "PT 소비자 평균 피해액", sub: "소비자원, 2023" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  <div className="text-xs text-white/30 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section id="solution" className="py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Solution</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">LIGHT ONE 핵심 솔루션</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4 max-w-2xl mx-auto">
              촬영 → 분석 → 수치화 → 리포트의 4단계 흐름으로 PT 상담의 근거를 만듭니다.
            </motion.p>
          </motion.div>

          {/* 4-Step Flow */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { step: "01", icon: Camera, title: "촬영 · 기록", desc: "운동 수행, 자세 사진, 통증 반응, RPE를 세션 단위로 입력" },
              { step: "02", icon: Brain, title: "AI 분석", desc: "규칙 기반 QS 산출 + XGBoost 예측 모델로 위험도 분류" },
              { step: "03", icon: BarChart3, title: "수치화 · 라우팅", desc: "AUTO / REVIEW / BLOCK 3단계 자동 분류로 즉시 판단 지원" },
              { step: "04", icon: FileText, title: "리포트 생성", desc: "트레이너 검토 후 회원에게 전달 가능한 비의료 상담 리포트" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="text-5xl font-black text-cyan-500/10 absolute top-4 right-4">{item.step}</div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                {i < 3 && <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/30" />}
              </motion.div>
            ))}
          </motion.div>

          {/* Risk Routing Visual */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6 text-center">위험 라우팅 시스템 (AUTO / REVIEW / BLOCK)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span className="font-bold text-emerald-400">AUTO</span>
                </div>
                <p className="text-sm text-white/60">NRS ≤ 3, RPE ≤ 7<br/>정상 진행 가능. 트레이너 재량으로 세션 지속.</p>
              </div>
              <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  <span className="font-bold text-amber-400">REVIEW</span>
                </div>
                <p className="text-sm text-white/60">NRS 4~6 또는 RPE 8~9<br/>트레이너 검토 필요. 강도 조절 또는 운동 변경 권고.</p>
              </div>
              <div className="p-6 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-rose-400" />
                  <span className="font-bold text-rose-400">BLOCK</span>
                </div>
                <p className="text-sm text-white/60">NRS ≥ 7 또는 RPE 10<br/>안전상 중단. 전문가 상담 권고 (의료 판단 아님).</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-24 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Pricing</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">B2B SaaS 구독 요금제</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4">센터 규모와 필요 기능에 맞춘 3단계 요금 구조</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                name: "Starter", price: "29,000", period: "월", 
                desc: "1인 트레이너 / 소규모 PT샵",
                features: ["회원 30명 관리", "세션 기록 입력", "QS 점수 자동 산출", "AUTO/REVIEW/BLOCK 라우팅", "기본 대시보드"],
                highlight: false
              },
              { 
                name: "Pro", price: "89,000", period: "월", 
                desc: "트레이너 3~5명 / 중형 센터",
                features: ["회원 150명 관리", "PDF 리포트 생성 (로고 삽입)", "트레이너 권한 분리", "변화 추세 대시보드", "회원 공유 링크", "우선 기술 지원"],
                highlight: true
              },
              { 
                name: "Enterprise", price: "199,000", period: "월", 
                desc: "대형 센터 / 프랜차이즈",
                features: ["회원 무제한", "멀티 지점 관리", "API 연동 (ERP/CRM)", "커스텀 리포트 템플릿", "전담 매니저 배정", "SLA 99.5% 보장"],
                highlight: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-gradient-to-b from-cyan-500/10 to-transparent border-cyan-500/30 scale-[1.02]" 
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-[#0a0e1a] text-xs font-bold rounded-full">
                    추천
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-white/40 mt-1">{plan.desc}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-black text-cyan-400">₩{plan.price}</span>
                  <span className="text-white/40 text-sm ml-1">/ {plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section id="team" className="py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Founder</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">창업자 전문성</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4">현장 18년 + AI 기술 + 콘텐츠 기획 = 국내 유일의 융합 역량</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Career Timeline */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                경력 타임라인
              </h3>
              <div className="space-y-6">
                {[
                  { period: "2007~2012", role: "편집부장 · 지방 신문사", desc: "콘텐츠 기획, 조직 운영, 정보 구조화 역량" },
                  { period: "2012~2025", role: "PT 트레이너 · 센터 오너", desc: "회원 상담, 체형분석, 통증 관리, 마케팅 운영" },
                  { period: "2025.03~현재", role: "바이오헬스케어 AI 전문가 과정", desc: "건양대병원 B2B · 미래교육융합원 · Python/ML/DL" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                    <div>
                      <div className="text-xs text-cyan-400/70 font-mono">{item.period}</div>
                      <div className="font-semibold mt-0.5">{item.role}</div>
                      <div className="text-sm text-white/40 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills & Credentials */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  핵심 자격 · 역량
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["생활스포츠지도사 2급", "컴퓨터활용능력 1급", "Python/SQL/Java", "XGBoost/LightGBM", "FastAPI/Django", "OpenPose/MediaPipe"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg text-white/60">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  현재 교육 과정
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  대전 미래교육융합원 B2B 건양대학교병원<br/>
                  <span className="text-cyan-400 font-medium">바이오헬스케어 AI 전문가 양성 과정</span><br/>
                  2025.03.25 ~ 현재 진행 중
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  SNS · 마케팅 역량
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  인스타그램, 틱톡, 네이버블로그, 스레드, 유튜브<br/>
                  <span className="text-cyan-400 font-medium">구독자 1,000명+ · 조회수 80,000+</span><br/>
                  <span className="text-white/40">(현재 교육 과정 참여로 잠시 중단)</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section id="roadmap" className="py-24 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Roadmap</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">사업화 로드맵</motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { q: "Q3 2025", title: "MVP 완성", items: ["Django 서비스 구현", "QS 산출 엔진", "더미 데이터 검증"], status: "done" },
              { q: "Q4 2025", title: "파일럿 운영", items: ["대전 PT샵 2~3곳", "트레이너 피드백 수집", "리포트 템플릿 고도화"], status: "current" },
              { q: "Q1 2026", title: "정식 런칭", items: ["SaaS 구독 모델 오픈", "결제 시스템 연동", "마케팅 캠페인 시작"], status: "upcoming" },
              { q: "Q2 2026", title: "스케일업", items: ["AI 모델 고도화", "프랜차이즈 B2B 영업", "시리즈A 투자 유치"], status: "upcoming" }
            ].map((phase, i) => (
              <motion.div key={i} variants={fadeInUp} className={`p-6 rounded-2xl border ${
                phase.status === "done" ? "bg-cyan-500/5 border-cyan-500/20" :
                phase.status === "current" ? "bg-amber-500/5 border-amber-500/20" :
                "bg-white/[0.02] border-white/5"
              }`}>
                <div className={`text-xs font-mono mb-2 ${
                  phase.status === "done" ? "text-cyan-400" :
                  phase.status === "current" ? "text-amber-400" :
                  "text-white/30"
                }`}>{phase.q}</div>
                <h3 className="font-bold mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                      {phase.status === "done" ? <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5" />}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== COMPLIANCE SECTION ===== */}
      <section className="py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Compliance & Risk</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">규제 리스크 관리</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4">비의료 서비스로서의 명확한 포지셔닝</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                허용 표현 (사용 가능)
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  "체형 관찰 기록 및 변화 추세 시각화",
                  "운동 수행 품질 점수(QS) 산출",
                  "트레이너 상담 보조 리포트",
                  "안전 신호 기반 운동 중단 권고",
                  "비의료 건강관리 서비스"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-rose-500/5 border border-rose-500/20">
              <h3 className="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                금지 표현 (절대 사용 불가)
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  "진단, 처방, 치료, 재활 프로그램",
                  "의료기기, 의료 AI, 임상 판단",
                  "질환 예측, 질병 선별, 건강 진단",
                  "환자, 증상 완화, 치료 효과",
                  "의사 대체, 전문의 수준의 판단"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center"
          >
            <p className="text-sm text-white/40">
              LIGHT ONE은 의료법 제27조에 저촉되지 않는 <span className="text-cyan-400">비의료 건강관리 서비스</span>로 설계되었습니다.<br/>
              모든 리포트에는 "본 자료는 의학적 진단을 대체하지 않습니다" 문구가 강제 삽입됩니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PUBLIC SUPPORT SECTION ===== */}
      <section className="py-24 bg-[#0d1220]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Target Programs</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mt-4">공공 지원사업 적합성</motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Building2, name: "예비창업패키지", org: "중소벤처기업부", fit: "기술 혁신성 + 시장 차별성 + 실행 역량" },
              { icon: Target, name: "모두의 창업 2기", org: "모두의 창업", fit: "현장 경험 기반 문제 해결 + MVP 완성도" },
              { icon: Zap, name: "초기창업패키지", org: "중소벤처기업부", fit: "BM 검증 완료 + 매출 발생 가능성" },
              { icon: Building2, name: "대전시 창업지원", org: "대전광역시", fit: "지역 기반 헬스케어 AI 스타트업" },
              { icon: Building2, name: "충청권 지원사업", org: "충청남도/북도", fit: "건양대병원 연계 바이오헬스 생태계" },
              { icon: TrendingUp, name: "팁스(TIPS)", org: "중소벤처기업부", fit: "AI+헬스케어 기술 기반 글로벌 확장성" }
            ].map((program, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <program.icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold">{program.name}</h3>
                </div>
                <p className="text-xs text-white/30 mb-2">{program.org}</p>
                <p className="text-sm text-white/50">{program.fit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-[#0a0e1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
              PT의 가치를 데이터로 증명합니다
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4 max-w-xl mx-auto">
              LIGHT ONE은 트레이너의 전문성을 대체하지 않습니다.<br/>
              트레이너의 판단에 근거를 더합니다.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://areyourad.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0a0e1a] font-bold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                포트폴리오 보기
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="https://github.com/gggwang210-commits/LightOne_V2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all duration-200">
                GitHub 코드 보기
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 bg-[#060810] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/manus-storage/lightone_logo_e8f3a2b1.png" alt="LIGHT ONE" className="h-7 w-7" />
              <span className="font-bold">LIGHT ONE</span>
              <span className="text-white/30 text-sm ml-2">Data-Driven, Evidence-Based Personal Training</span>
            </div>
            <p className="text-sm text-white/30">
              © 2025 LIGHT ONE. 송광일. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
