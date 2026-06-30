/**
 * LIGHT ONE - 트레이너 & 회원 리포트 데모
 * 가상 데이터 기반 견본 리포트 (실제 개인정보/건강정보 미포함)
 */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity, ArrowLeft, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle2, XCircle, BarChart3,
  User, Calendar, FileText, Shield, ChevronRight
} from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

// 가상 회원 데이터
const demoMembers = [
  {
    id: "M001",
    name: "김OO",
    age: 34,
    goal: "어깨 가동범위 개선 + 상체 근력 강화",
    sessions: 24,
    startDate: "2025-04-01",
    trainer: "송광일",
    currentPhase: "중기 (9~16회차)"
  },
  {
    id: "M002",
    name: "이OO",
    age: 28,
    goal: "체중 감량 + 하체 밸런스 교정",
    sessions: 12,
    startDate: "2025-05-15",
    trainer: "송광일",
    currentPhase: "초기 (1~8회차)"
  }
];

// 가상 세션 기록 (김OO)
const sessionHistory = [
  { session: 20, date: "2025-07-01", qs: 82, nrs: 2, rpe: 6, routing: "AUTO", note: "어깨 외회전 ROM 정상 범위 도달" },
  { session: 21, date: "2025-07-04", qs: 78, nrs: 3, rpe: 7, routing: "AUTO", note: "벤치프레스 60kg 3세트 완료" },
  { session: 22, date: "2025-07-08", qs: 65, nrs: 5, rpe: 8, routing: "REVIEW", note: "좌측 승모근 긴장 호소, 강도 조절" },
  { session: 23, date: "2025-07-11", qs: 74, nrs: 3, rpe: 7, routing: "AUTO", note: "회복 확인, 정상 프로그램 복귀" },
  { session: 24, date: "2025-07-15", qs: 85, nrs: 2, rpe: 6, routing: "AUTO", note: "어깨 프레스 40kg 달성, 최고 QS 기록" },
];

// QS 추세 데이터
const qsTrend = [
  { week: "1~4주", avg: 58, label: "적응기" },
  { week: "5~8주", avg: 67, label: "성장기" },
  { week: "9~12주", avg: 76, label: "안정기" },
  { week: "13~16주", avg: 82, label: "최적화" },
];

export default function ReportDemo() {
  const [activeTab, setActiveTab] = useState<"trainer" | "member">("trainer");
  const [selectedMember] = useState(demoMembers[0]);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">사업계획서로 돌아가기</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/manus-storage/lightone_logo_e8f3a2b1.png" alt="LIGHT ONE" className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="text-sm sm:text-base font-bold">LIGHT ONE</span>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-10 sm:py-14 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
              <FileText className="w-3.5 h-3.5" />
              DEMO REPORT · 가상 데이터 기반
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold">
              PT 상담 리포트 견본
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/50 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              LIGHT ONE이 생성하는 트레이너용 / 회원용 리포트의 실제 형태입니다.<br/>
              <span className="text-white/30 text-xs">(모든 데이터는 가상이며 실제 개인정보를 포함하지 않습니다)</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tab Switch */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="flex gap-2 p-1 bg-white/5 rounded-xl w-fit mx-auto">
          <button
            onClick={() => setActiveTab("trainer")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "trainer"
                ? "bg-cyan-500 text-[#0a0e1a]"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            트레이너용 리포트
          </button>
          <button
            onClick={() => setActiveTab("member")}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "member"
                ? "bg-cyan-500 text-[#0a0e1a]"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            회원용 리포트
          </button>
        </div>
      </div>

      {/* Report Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {activeTab === "trainer" ? (
          <TrainerReport member={selectedMember} />
        ) : (
          <MemberReport member={selectedMember} />
        )}
      </main>

      {/* Disclaimer */}
      <footer className="border-t border-white/5 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-white/30 leading-relaxed">
            본 자료는 LIGHT ONE 서비스의 리포트 형태를 보여주기 위한 <span className="text-cyan-400/60">가상 데이터 기반 견본</span>입니다.<br/>
            실제 의학적 진단을 대체하지 않으며, 모든 판단은 트레이너의 전문적 검토를 거칩니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ===== 트레이너용 리포트 =====
function TrainerReport({ member }: { member: typeof demoMembers[0] }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 sm:space-y-8">
      {/* 회원 요약 카드 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">{member.name} <span className="text-white/30 text-sm font-normal">({member.age}세)</span></h2>
              <p className="text-xs sm:text-sm text-white/40">{member.id} · 담당: {member.trainer}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-medium">정상 진행 중</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[11px] text-white/30 mb-1">목표</div>
            <div className="text-xs sm:text-sm text-white/70">{member.goal}</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[11px] text-white/30 mb-1">진행 회차</div>
            <div className="text-lg sm:text-xl font-bold text-cyan-400">{member.sessions}회</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[11px] text-white/30 mb-1">시작일</div>
            <div className="text-xs sm:text-sm text-white/70">{member.startDate}</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[11px] text-white/30 mb-1">현재 단계</div>
            <div className="text-xs sm:text-sm text-white/70">{member.currentPhase}</div>
          </div>
        </div>
      </motion.div>

      {/* QS 추세 차트 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          QS(Quality Score) 추세
        </h3>
        <div className="flex items-end gap-3 sm:gap-4 h-40 sm:h-48 mb-4">
          {qsTrend.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-cyan-400">{item.avg}</span>
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500/30 to-cyan-500/60 transition-all duration-500"
                style={{ height: `${(item.avg / 100) * 100}%` }}
              />
              <div className="text-center">
                <div className="text-[10px] sm:text-xs text-white/50">{item.week}</div>
                <div className="text-[10px] text-white/30">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
          <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm text-emerald-400">QS 평균 58 → 82 (+41.4% 개선) · 16주 기준</span>
        </div>
      </motion.div>

      {/* 최근 세션 기록 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 flex items-center gap-2">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          최근 5회 세션 기록
        </h3>
        <div className="space-y-3">
          {sessionHistory.map((s, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 sm:min-w-[140px]">
                <span className="text-xs font-mono text-white/30">#{s.session}</span>
                <span className="text-xs text-white/50">{s.date}</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-medium">QS {s.qs}</span>
                <span className="text-xs text-white/40">NRS {s.nrs}</span>
                <span className="text-xs text-white/40">RPE {s.rpe}</span>
                <RoutingBadge routing={s.routing} />
              </div>
              <p className="text-xs text-white/50 sm:ml-auto">{s.note}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 위험 라우팅 이력 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 flex items-center gap-2">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          위험 라우팅 요약
        </h3>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400">21</div>
            <div className="text-[11px] sm:text-xs text-white/40 mt-1">AUTO</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
            <div className="text-xl sm:text-2xl font-bold text-amber-400">3</div>
            <div className="text-[11px] sm:text-xs text-white/40 mt-1">REVIEW</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 text-center">
            <div className="text-xl sm:text-2xl font-bold text-rose-400">0</div>
            <div className="text-[11px] sm:text-xs text-white/40 mt-1">BLOCK</div>
          </div>
        </div>
        <p className="text-xs text-white/30 mt-4 text-center">
          REVIEW 3건 모두 트레이너 검토 후 강도 조절로 해결됨. BLOCK 이력 없음.
        </p>
      </motion.div>

      {/* 트레이너 판단 메모 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          트레이너 종합 판단
        </h3>
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>어깨 외회전 ROM이 정상 범위에 도달했으며, 상체 프레스 계열 운동의 수행 품질이 안정적입니다.</p>
          <p>22회차 REVIEW 발생 시 좌측 승모근 긴장을 확인하고 즉시 강도를 조절한 결과, 23회차부터 정상 복귀했습니다.</p>
          <p className="text-cyan-400/80 font-medium">다음 4주 권고: 어깨 프레스 점진적 증량(2.5kg/주) + 승모근 이완 루틴 유지</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ===== 회원용 리포트 =====
function MemberReport({ member }: { member: typeof demoMembers[0] }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
      {/* 회원 인사 헤더 */}
      <motion.div variants={fadeInUp} className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/5 border border-white/5 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
          <User className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">{member.name}님의 PT 리포트</h2>
        <p className="text-white/40 text-sm mt-2">{member.sessions}회차 완료 · {member.currentPhase}</p>
        <p className="text-white/30 text-xs mt-1">담당 트레이너: {member.trainer}</p>
      </motion.div>

      {/* 핵심 성과 요약 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-5 text-center">나의 운동 성과</h3>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">+41%</div>
            <div className="text-xs text-white/40 mt-1">운동 수행 품질 향상</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">85점</div>
            <div className="text-xs text-white/40 mt-1">현재 QS 점수</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-purple-500/5 border border-purple-500/10 text-center">
            <Activity className="w-5 h-5 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">24회</div>
            <div className="text-xs text-white/40 mt-1">총 세션 완료</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
            <Shield className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">안전</div>
            <div className="text-xs text-white/40 mt-1">위험 이력 0건</div>
          </div>
        </div>
      </motion.div>

      {/* 변화 추세 (간소화) */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-5 text-center">운동 품질 변화</h3>
        <div className="space-y-3">
          {qsTrend.map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs text-white/40 w-16 sm:w-20 shrink-0">{item.week}</span>
              <div className="flex-1 h-6 sm:h-8 bg-white/5 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.avg}%` }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="h-full bg-gradient-to-r from-cyan-500/60 to-cyan-400/80 rounded-lg flex items-center justify-end pr-2"
                >
                  <span className="text-[10px] sm:text-xs font-bold text-[#0a0e1a]">{item.avg}점</span>
                </motion.div>
              </div>
              <span className="text-[10px] sm:text-xs text-white/30 w-12 sm:w-14">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 트레이너 코멘트 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-4 text-center">트레이너 코멘트</h3>
        <div className="p-4 sm:p-6 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-white/70 leading-relaxed">
            "{member.name}님, 16주간 꾸준히 참여해주셔서 감사합니다. 어깨 가동범위가 정상 범위에 도달했고,
            상체 프레스 수행 품질이 크게 향상되었습니다. 다음 4주는 점진적 증량에 집중하면서
            승모근 이완 루틴을 유지하시면 좋겠습니다."
          </p>
          <p className="text-xs text-white/30 mt-3 text-right">— 송광일 트레이너</p>
        </div>
      </motion.div>

      {/* 다음 목표 */}
      <motion.div variants={fadeInUp} className="p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <h3 className="text-base sm:text-lg font-bold mb-4 text-center">다음 4주 목표</h3>
        <div className="space-y-2.5">
          {[
            "어깨 프레스 42.5kg 달성 (현재 40kg)",
            "QS 평균 85점 이상 유지",
            "승모근 이완 스트레칭 매 세션 포함"
          ].map((goal, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-sm text-white/60">{goal}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 법적 고지 */}
      <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
        <p className="text-[11px] text-white/30 leading-relaxed">
          본 리포트는 운동 수행 품질에 대한 관찰 기록이며, 의학적 진단을 대체하지 않습니다.<br/>
          통증이 지속되거나 악화될 경우 반드시 전문 의료기관을 방문하시기 바랍니다.
        </p>
      </motion.div>
    </motion.div>
  );
}

// 라우팅 배지 컴포넌트
function RoutingBadge({ routing }: { routing: string }) {
  if (routing === "AUTO") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 font-medium">
        <CheckCircle2 className="w-3 h-3" /> AUTO
      </span>
    );
  }
  if (routing === "REVIEW") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-amber-500/10 text-amber-400 font-medium">
        <AlertTriangle className="w-3 h-3" /> REVIEW
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-rose-500/10 text-rose-400 font-medium">
      <XCircle className="w-3 h-3" /> BLOCK
    </span>
  );
}
