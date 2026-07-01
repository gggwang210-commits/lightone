/**
 * ReportDemo.tsx
 * LIGHT ONE 리포트 데모 페이지
 * 트레이너 솔루션 화면 + 회원 리포트 — HTML v2 기반 React 이식
 */

import { useState } from "react";
import { Link } from "wouter";

// ─── SVG 아이콘 ───────────────────────────────
const Ico = {
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c1.2-3.6 4-5 7-5s5.8 1.4 7 5"/></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full"><path d="M4 19V9M12 19V4M20 19v-7"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V6l7-3z"/></svg>,
  shieldCheck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  cal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 3v3M16 3v3"/></svg>,
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  report: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>,
  bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>,
  cog: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.5 7.5 0 000-3l1.7-1.3-2-3.4-2 .7a7.5 7.5 0 00-2.6-1.5L14 2.5h-4l-.5 2.5a7.5 7.5 0 00-2.6 1.5l-2-.7-2 3.4L4.6 10.5a7.5 7.5 0 000 3l-1.7 1.3 2 3.4 2-.7a7.5 7.5 0 002.6 1.5l.5 2.5h4l.5-2.5a7.5 7.5 0 002.6-1.5l2 .7 2-3.4z"/></svg>,
  cam: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13.5" r="3"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M13 4l-7 9h5l-1 7 7-9h-5l1-7z"/></svg>,
  body: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="5" r="2.2"/><path d="M12 9v5M8 12h8M9 21l3-5 3 5"/></svg>,
  warn: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L2.6 18a1.9 1.9 0 001.6 2.9h15.6a1.9 1.9 0 001.6-2.9L13.7 3.9a1.9 1.9 0 00-3.4 0z"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className="w-full h-full"><path d="M5 13l4 4L19 7"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M20 8.5c0-2.5-2-4.5-4.3-4.5-1.5 0-2.8.8-3.7 2-.9-1.2-2.2-2-3.7-2C6 4 4 6 4 8.5 4 14 12 19 12 19s8-5 8-10.5z"/></svg>,
  trend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M3 17l5-5 4 4 8-9"/></svg>,
  log: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>,
  dumbbell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full"><path d="M4 12h16M6 8v8M18 8v8M2 10v4M22 10v4"/></svg>,
  back: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  moon: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.8" fill="#7FE0D2"/></svg>,
};

// ─── QS 도넛 링 ──────────────────────────────
function QsRing({ score, size = 48, inner = 38 }: { score: number; size?: number; inner?: number }) {
  const pct = score / 100;
  return (
    <div
      className="rounded-full flex-none flex items-center justify-center"
      style={{ width: size, height: size, background: `conic-gradient(#2563EB 0% ${pct * 100}%, #E5E9F3 ${pct * 100}% 100%)` }}
    >
      <div className="rounded-full bg-white flex flex-col items-center justify-center" style={{ width: inner, height: inner }}>
        <b style={{ fontFamily: "Inter, sans-serif", fontSize: size > 60 ? 21 : 14, color: "#16284F", lineHeight: 1 }}>{score}</b>
        <small style={{ fontSize: 6.5, color: "#8891A6", fontWeight: 700 }}>/100</small>
      </div>
    </div>
  );
}

// ─── JATC 레이더 차트 ──────────────────────────
const jatcData = [
  { label: "통증",    value: 62, color: "#EF4444", bgColor: "#FEE2E2" },
  { label: "자세",    value: 72, color: "#2563EB", bgColor: "#DBEAFE" },
  { label: "기능",    value: 68, color: "#0E9488", bgColor: "#CCFBF1" },
  { label: "생활습관", value: 70, color: "#7C3AED", bgColor: "#EDE9FE" },
];

function JatcRadarChart() {
  const cx = 90, cy = 90, r = 68;
  const levels = [25, 50, 75, 100];
  const n = jatcData.length;
  // 각 축의 각도 (위쪽=통증, 오른쪽=자세, 아래=기능, 왼쪽=생활습관)
  const angles = jatcData.map((_, i) => (Math.PI * 2 * i) / n - Math.PI / 2);

  const toXY = (angle: number, pct: number) => ({
    x: cx + r * pct * Math.cos(angle),
    y: cy + r * pct * Math.sin(angle),
  });

  // 레이더 다각형 포인트
  const dataPoints = jatcData.map((d, i) => toXY(angles[i], d.value / 100));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + " Z";

  // 배경 레벨 다각형
  const levelPath = (pct: number) =>
    angles.map((a, i) => {
      const p = toXY(a, pct);
      return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }).join(" ") + " Z";

  return (
    <div className="rounded-xl p-4" style={{ background: "#F7F9FC", border: "1px solid #E3E7F0" }}>
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-extrabold" style={{ color: "#16284F" }}>JATC 영역별 불균형 분석</div>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#EFF6FF", color: "#2563EB" }}>4개 영역</span>
      </div>

      <div className="flex items-center gap-4">
        {/* SVG 레이더 차트 */}
        <svg width="180" height="180" viewBox="0 0 180 180" className="flex-none">
          {/* 배경 레벨 */}
          {levels.map((lv) => (
            <path
              key={lv}
              d={levelPath(lv / 100)}
              fill="none"
              stroke="#E3E7F0"
              strokeWidth={lv === 100 ? 1.2 : 0.8}
              strokeDasharray={lv === 100 ? "none" : "3,3"}
            />
          ))}

          {/* 축 선 */}
          {angles.map((a, i) => {
            const end = toXY(a, 1);
            return (
              <line
                key={i}
                x1={cx} y1={cy}
                x2={end.x.toFixed(1)} y2={end.y.toFixed(1)}
                stroke="#CDD4E3" strokeWidth="0.8"
              />
            );
          })}

          {/* 레벨 수치 라벨 (25, 50, 75) */}
          {[25, 50, 75].map((lv) => {
            const p = toXY(angles[0], lv / 100);
            return (
              <text
                key={lv}
                x={(p.x + 3).toFixed(1)}
                y={(p.y - 2).toFixed(1)}
                fontSize="6"
                fill="#8891A6"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >{lv}</text>
            );
          })}

          {/* 데이터 영역 */}
          <path d={dataPath} fill="rgba(37,99,235,0.12)" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />

          {/* 데이터 포인트 */}
          {dataPoints.map((p, i) => (
            <g key={i}>
              <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="5" fill={jatcData[i].color} stroke="#fff" strokeWidth="1.5" />
              <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="2" fill="#fff" />
            </g>
          ))}

          {/* 축 라벨 */}
          {jatcData.map((d, i) => {
            const labelR = 1.22;
            const p = toXY(angles[i], labelR);
            const anchor = Math.abs(Math.cos(angles[i])) < 0.1 ? "middle" : Math.cos(angles[i]) > 0 ? "start" : "end";
            return (
              <text
                key={i}
                x={p.x.toFixed(1)}
                y={(p.y + 1).toFixed(1)}
                fontSize="9"
                fontWeight="800"
                fill={d.color}
                textAnchor={anchor}
                fontFamily="Noto Sans KR, sans-serif"
                dominantBaseline="middle"
              >{d.label}</text>
            );
          })}
        </svg>

        {/* 범례 + 수치 */}
        <div className="flex-1 space-y-2">
          {jatcData.map((d) => (
            <div key={d.label}>
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#4D5670" }}>{d.label}</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: d.value < 65 ? d.color : "#16284F", fontFamily: "Inter" }}>
                  {d.value}
                  <small style={{ fontSize: 8, color: "#8891A6", fontWeight: 600 }}>/100</small>
                </span>
              </div>
              {/* 바 */}
              <div className="rounded-full overflow-hidden" style={{ height: 5, background: "#E3E7F0" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${d.value}%`,
                    background: `linear-gradient(90deg, ${d.color}99, ${d.color})`,
                    transition: "width 0.6s cubic-bezier(0.23,1,0.32,1)",
                  }}
                />
              </div>
            </div>
          ))}

          {/* 불균형 경고 */}
          <div className="rounded-lg px-2.5 py-2 mt-1" style={{ background: "#FEF3C7", border: "1px solid #FDE68A" }}>
            <p style={{ fontSize: 9, fontWeight: 700, color: "#92400E" }}>
              ⚠ 통증(62) 영역 취약 — 집중 관리 필요
            </p>
          </div>
        </div>
      </div>

      <p className="text-[9px] font-medium mt-3 pt-2" style={{ color: "#8891A6", borderTop: "1px dashed #CDD4E3" }}>
        ※ 4개 영역을 정규화하여 통합 상태를 추적 · 낮을수록 해당 영역 집중 관리 필요
      </p>
    </div>
  );
}

// ─── QS 4주 추세 막대 차트 ─────────────────────
const qsWeeklyData = [
  { week: "1주차", date: "05-02", qs: 71, routing: "AUTO" },
  { week: "2주차", date: "05-09", qs: 78, routing: "AUTO" },
  { week: "3주차", date: "05-16", qs: 65, routing: "REVIEW" },
  { week: "4주차", date: "05-23", qs: 86, routing: "AUTO" },
];

function QsTrendChart() {
  const maxQs = 100;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="rounded-xl p-4" style={{ background: "#F7F9FC", border: "1px solid #E3E7F0" }}>
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-extrabold" style={{ color: "#16284F" }}>QS 4주 변화 추이</div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-extrabold" style={{ color: "#0B6E66" }}>▲ +15pt</span>
          <span className="text-[9px] font-semibold" style={{ color: "#8891A6" }}>4주 대비</span>
        </div>
      </div>

      {/* 차트 영역 */}
      <div className="relative mb-3">
        {/* Y축 가이드라인 */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none" style={{ paddingBottom: 28 }}>
          {[100, 75, 50, 25].map((v) => (
            <div key={v} className="flex items-center gap-1">
              <span style={{ fontSize: 8, color: "#CDD4E3", fontFamily: "Inter", fontWeight: 600, width: 18, textAlign: "right" }}>{v}</span>
              <div className="flex-1" style={{ borderTop: "1px dashed #E3E7F0" }} />
            </div>
          ))}
        </div>

        {/* 막대 그룹 */}
        <div className="flex items-end gap-2 pl-6" style={{ height: 120 }}>
          {qsWeeklyData.map((d, i) => {
            const barH = Math.round((d.qs / maxQs) * 88);
            const isReview = d.routing === "REVIEW";
            const isHovered = hovered === i;
            const isCurrent = i === qsWeeklyData.length - 1;
            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center justify-end gap-1 cursor-default"
                style={{ height: "100%" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* 툴팁 */}
                {isHovered && (
                  <div
                    className="absolute z-10 rounded-lg px-2 py-1.5 text-center shadow-lg"
                    style={{
                      background: "#16284F",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      bottom: 34,
                      transform: "translateX(-50%)",
                      left: "50%",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                    }}
                  >
                    QS {d.qs}
                    <div style={{ fontSize: 8, color: isReview ? "#FCD34D" : "#7FE0D2", fontWeight: 600 }}>
                      {isReview ? "⚠ REVIEW" : "✓ AUTO"}
                    </div>
                  </div>
                )}

                {/* QS 수치 */}
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: isReview ? "#B45309" : isCurrent ? "#2563EB" : "#4D5670",
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {d.qs}
                </span>

                {/* 막대 */}
                <div
                  style={{
                    width: "100%",
                    height: barH,
                    borderRadius: "5px 5px 0 0",
                    background: isReview
                      ? "linear-gradient(180deg, #F59E0B 0%, #FCD34D 100%)"
                      : isCurrent
                      ? "linear-gradient(180deg, #1D4ED8 0%, #2563EB 60%, #60A5FA 100%)"
                      : "linear-gradient(180deg, #3B82F6 0%, #93C5FD 100%)",
                    opacity: isHovered ? 1 : 0.85,
                    transition: "all 0.18s cubic-bezier(0.23,1,0.32,1)",
                    transform: isHovered ? "scaleY(1.04)" : "scaleY(1)",
                    transformOrigin: "bottom",
                    boxShadow: isHovered
                      ? isReview
                        ? "0 -3px 10px rgba(245,158,11,0.4)"
                        : "0 -3px 10px rgba(37,99,235,0.4)"
                      : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* X축 레이블 */}
      <div className="flex gap-2 pl-6">
        {qsWeeklyData.map((d, i) => (
          <div key={i} className="flex-1 text-center">
            <div style={{ fontSize: 9, fontWeight: 800, color: i === qsWeeklyData.length - 1 ? "#2563EB" : "#4D5670" }}>{d.week}</div>
            <div style={{ fontSize: 8, color: "#8891A6", fontWeight: 600 }}>{d.date}</div>
          </div>
        ))}
      </div>

      {/* 범례 */}
      <div className="flex items-center gap-4 mt-3 pt-2" style={{ borderTop: "1px dashed #CDD4E3" }}>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#2563EB" }} />
          <span style={{ fontSize: 9, color: "#8891A6", fontWeight: 600 }}>AUTO</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#F59E0B" }} />
          <span style={{ fontSize: 9, color: "#8891A6", fontWeight: 600 }}>REVIEW</span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#1D4ED8" }} />
          <span style={{ fontSize: 9, color: "#2563EB", fontWeight: 700 }}>현재 세션</span>
        </div>
      </div>
    </div>
  );
}

// ─── 트레이너 리포트 ──────────────────────────
function TrainerReport() {
  const [tab, setTab] = useState(0);
  const tabs = ["솔루션 요약", "세부 분석", "운동 수행 데이터", "과거 리포트"];

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight" style={{ color: "#11182E" }}>
          LIGHT ONE 트레이너 솔루션 화면
        </h2>
        <p className="text-sm font-semibold" style={{ color: "#4D5670" }}>
          트레이너가 데이터를 기반으로 회원별 맞춤 해결 솔루션을 직접 제공합니다
        </p>
      </div>

      {/* 어노테이션 + 앱 프레임 */}
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 mb-6">
        {/* 어노테이션 */}
        <div className="xl:w-56 flex xl:flex-col flex-row flex-wrap gap-3 xl:pr-8">
          {[
            { ico: Ico.user, title: "회원 정보", items: ["기본 프로필", "목표 및 특이사항"] },
            { ico: Ico.chart, title: "세션 요약", items: ["최신 세션 지표", "변화 추이 확인"] },
            { ico: Ico.shield, title: "안전 라우팅", items: ["라우팅 상태", "주의 신호 확인"] },
          ].map((c, i) => (
            <div key={i} className="bg-white border rounded-xl p-3 shadow-sm flex-1 min-w-[140px] xl:min-w-0" style={{ borderColor: "#E3E7F0" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-none p-1.5" style={{ background: "#E2EBFD", color: "#2563EB" }}>{c.ico}</span>
                <b className="text-xs font-extrabold" style={{ color: "#11182E" }}>{c.title}</b>
              </div>
              <ul className="pl-4 space-y-0.5">
                {c.items.map((it, j) => (
                  <li key={j} className="text-[10.5px] font-semibold relative pl-3" style={{ color: "#4D5670" }}>
                    <span className="absolute left-0 top-[6px] w-1 h-1 rounded-full" style={{ background: "#CDD4E3" }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 앱 프레임 */}
        <div className="flex-1 min-w-0">
          <div className="border rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col" style={{ borderColor: "#CDD4E3" }}>
            {/* 탑바 */}
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#E3E7F0" }}>
              <div className="text-sm font-bold" style={{ color: "#4D5670" }}>
                회원 관리 <span style={{ color: "#8891A6", margin: "0 4px" }}>›</span>
                <b style={{ color: "#11182E" }}>김라이트</b>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold rounded-lg px-3 py-1.5" style={{ color: "#4D5670", background: "#F7F9FC", border: "1px solid #E3E7F0" }}>
                <span className="w-3.5 h-3.5">{Ico.cal}</span>
                2025-05-23 세션
                <span style={{ color: "#8891A6", fontWeight: 700 }}>‹ ›</span>
              </div>
            </div>

            <div className="flex flex-1">
              {/* 사이드바 */}
              <div className="w-16 sm:w-20 flex flex-col items-center py-4 gap-0.5 flex-none" style={{ background: "#0C1530" }}>
                <div className="flex flex-col items-center gap-1 mb-3">
                  <span className="w-5 h-5">{Ico.moon}</span>
                  <span style={{ fontFamily: "Inter", fontSize: 7, fontWeight: 800, letterSpacing: "0.05em", color: "#9FB3DB" }}>LIGHT ONE</span>
                </div>
                {[
                  { ico: Ico.grid, label: "대시보드" },
                  { ico: Ico.user, label: "회원관리", active: true },
                  { ico: Ico.cal, label: "세션관리" },
                  { ico: Ico.chart, label: "지표분석" },
                  { ico: Ico.cam, label: "촬영QC" },
                  { ico: Ico.report, label: "리포트" },
                  { ico: Ico.bell, label: "알림" },
                  { ico: Ico.cog, label: "설정" },
                ].map((item, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-1 py-2 px-1 relative" style={{ color: item.active ? "#fff" : "#7C8BB3", background: item.active ? "rgba(255,255,255,0.08)" : "transparent" }}>
                    {item.active && <span className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: "#2563EB" }} />}
                    <span className="w-4 h-4">{item.ico}</span>
                    <span style={{ fontSize: 8.5, fontWeight: 700 }}>{item.label}</span>
                  </div>
                ))}
                <div className="mt-auto flex flex-col items-center gap-1 pt-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2563EB,#0E9488)" }}>
                    <span className="w-3.5 h-3.5 text-white">{Ico.user}</span>
                  </div>
                  <span style={{ fontSize: 8, color: "#AEB9D6", fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>Trainer<br/>Kim</span>
                </div>
              </div>

              {/* 3열 메인 */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] overflow-auto">
                {/* 좌 */}
                <div className="p-4 border-b lg:border-b-0 lg:border-r space-y-3" style={{ borderColor: "#E3E7F0" }}>
                  {/* 프로필 */}
                  <div className="border rounded-xl p-3" style={{ borderColor: "#E3E7F0" }}>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider mb-2" style={{ color: "#8891A6" }}>회원 프로필</div>
                    <div className="flex gap-2 items-start">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-none" style={{ background: "linear-gradient(135deg,#2563EB,#0E9488)" }}>
                        <span className="w-4 h-4 text-white">{Ico.user}</span>
                      </div>
                      <div>
                        <b className="text-[12.5px] font-extrabold block" style={{ color: "#11182E" }}>김라이트 (M/28)</b>
                        <div className="text-[9.5px] font-semibold leading-relaxed mt-0.5" style={{ color: "#8891A6" }}>
                          목표: 하체 강화, 체지방 감소<br/>특이사항: 좌측 무릎 통증 이력
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 세션 요약 */}
                  <div className="border rounded-xl p-3" style={{ borderColor: "#E3E7F0" }}>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider mb-2" style={{ color: "#8891A6" }}>최근 세션 요약</div>
                    <div className="text-[9.5px] font-semibold mb-2" style={{ color: "#8891A6" }}>2025-05-23 · 세션 난이도: 하체 A</div>
                    <div className="flex items-center gap-3 mb-3">
                      <QsRing score={86} size={48} inner={38} />
                      <div>
                        <b className="text-[9.5px] font-bold block" style={{ color: "#8891A6" }}>QS (Quality Score)</b>
                        <span className="text-xs font-extrabold" style={{ color: "#B45309" }}>통증 변화 +1 (소폭 증가)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[{l:"RPE",v:"6",u:"/10"},{l:"JATC",v:"68",u:"/100"}].map((m,i) => (
                        <div key={i} className="rounded-lg p-2" style={{ background: "#F7F9FC" }}>
                          <div className="text-[9px] font-bold mb-1" style={{ color: "#8891A6" }}>{m.l}</div>
                          <div className="text-sm font-extrabold" style={{ color: "#16284F", fontFamily: "Inter" }}>
                            {m.v}<small style={{ fontSize: 9, color: "#8891A6", fontWeight: 600 }}>{m.u}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 라우팅 */}
                  <div className="border rounded-xl p-3" style={{ borderColor: "#E3E7F0" }}>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider mb-2" style={{ color: "#8891A6" }}>안전 라우팅</div>
                    <div className="rounded-xl p-3" style={{ background: "#FCEFD8", border: "1px solid #F0D6A3" }}>
                      <b className="text-[10.5px] font-extrabold" style={{ color: "#B45309" }}>⚠ REVIEW</b>
                      <p className="text-[9.5px] font-semibold leading-relaxed my-1" style={{ color: "#7C4A12" }}>사유: 통증 증가 추세, 자세 신뢰도 낮음</p>
                      <span className="text-[9.5px] font-bold" style={{ color: "#2563EB", textDecoration: "underline", textUnderlineOffset: 2 }}>기록 보기</span>
                    </div>
                  </div>
                </div>

                {/* 중앙 */}
                <div className="p-4 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#E3E7F0" }}>
                  <div className="flex gap-0.5 border-b mb-4" style={{ borderColor: "#E3E7F0" }}>
                    {tabs.map((t, i) => (
                      <button key={i} onClick={() => setTab(i)}
                        className="text-xs font-bold px-3 py-2 border-b-2 transition-colors"
                        style={{ color: tab === i ? "#2563EB" : "#8891A6", borderColor: tab === i ? "#2563EB" : "transparent", fontWeight: tab === i ? 800 : 700 }}>
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="text-xs font-extrabold mb-3" style={{ color: "#11182E" }}>핵심 인사이트</div>
                  {[
                    { ico: Ico.shield, text: "좌측 무릎 통증이 점진적으로 증가하는 패턴입니다." },
                    { ico: Ico.body, text: "스쿼트 시 좌측 무릎 내측 편위(Valgus)가 관찰됩니다." },
                    { ico: Ico.bolt, text: "하체 근력 대비 체간 안정성 지수가 낮습니다." },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-2 items-start mb-3">
                      <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-none p-1.5" style={{ background: "#E2EBFD", color: "#2563EB" }}>{r.ico}</span>
                      <p className="text-xs font-semibold leading-relaxed pt-1" style={{ color: "#4D5670" }}>{r.text}</p>
                    </div>
                  ))}

                  <div className="text-xs font-extrabold mb-3 mt-4" style={{ color: "#11182E" }}>맞춤 해결 솔루션</div>
                  {[
                    { n: 1, title: "통증 관리", prio: "high", desc: "무릎 가동 범위 내에서 통증 없는 동작만 유지" },
                    { n: 2, title: "자세 교정", prio: "high", desc: "스쿼트 시 무릎 정렬 유지, 고관절 힌지 패턴 강화" },
                    { n: 3, title: "근력 강화", prio: "mid", desc: "대퇴사두, 둔근, 햄스트링 균형 강화" },
                    { n: 4, title: "체간 안정화", prio: "mid", desc: "코어 활성화 운동 강화 (플랭크 변형, 버드독 등)" },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-3 items-start py-2.5 border-b last:border-b-0" style={{ borderColor: "#E3E7F0" }}>
                      <span className="w-5 h-5 rounded-full text-white text-[10px] font-extrabold flex items-center justify-center flex-none" style={{ background: "#16284F", fontFamily: "Inter" }}>{item.n}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <b className="text-xs font-extrabold" style={{ color: "#11182E" }}>{item.title}</b>
                          <span className="text-[9px] font-extrabold rounded-full px-2 py-0.5 whitespace-nowrap" style={item.prio === "high" ? { background: "#FCEFD8", color: "#B45309", border: "1px solid #F0D6A3" } : { background: "#E2EBFD", color: "#2563EB", border: "1px solid #C9D9FB" }}>
                            우선순위: {item.prio === "high" ? "높음" : "중간"}
                          </span>
                        </div>
                        <span className="text-[10.5px] font-semibold leading-relaxed" style={{ color: "#8891A6" }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-xl p-3 mt-4" style={{ background: "#DDF4F0", border: "1px solid #BCE6DF" }}>
                    <b className="text-[10.5px] font-extrabold block mb-1" style={{ color: "#0B6E66" }}>다음 세션 목표</b>
                    <span className="text-[10.5px] font-semibold" style={{ color: "#0B6E66" }}>통증 2 이하 유지, 스쿼트 정렬 개선, RPE 5–6 유지</span>
                  </div>
                </div>

                {/* 우측 */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider" style={{ color: "#8891A6" }}>추천 운동</div>
                    <span className="text-[10px] font-bold" style={{ color: "#2563EB" }}>상세 보기 ›</span>
                  </div>
                  {[
                    { name: "박스 스쿼트", sets: "3세트 × 10–12회", tag: "자세 교정" },
                    { name: "힙 힌지 (덤벨)", sets: "3세트 × 12회", tag: "자세 교정" },
                    { name: "레그 프레스", sets: "3세트 × 10–12회", tag: "근력 강화" },
                    { name: "사이드 플랭크", sets: "3세트 × 30초", tag: "체간 안정화" },
                  ].map((ex, i) => (
                    <div key={i} className="flex gap-2 items-center py-2 border-b last:border-b-0" style={{ borderColor: "#E3E7F0" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-none" style={{ background: "linear-gradient(135deg,#E2EBFD,#DDF4F0)", color: "#16284F" }}>
                        <span className="w-4 h-4">{Ico.body}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <b className="text-xs font-extrabold block" style={{ color: "#11182E" }}>{ex.name}</b>
                        <span className="text-[9.5px] font-semibold" style={{ color: "#8891A6" }}>{ex.sets}</span>
                      </div>
                      <span className="text-[8.5px] font-extrabold rounded-md px-1.5 py-0.5 whitespace-nowrap" style={{ color: "#4D5670", background: "#F7F9FC", border: "1px solid #E3E7F0" }}>{ex.tag}</span>
                    </div>
                  ))}

                  <div className="border rounded-xl p-3 mt-4 mb-4" style={{ borderColor: "#E3E7F0" }}>
                    <div className="flex justify-between items-center mb-2">
                      <b className="text-xs font-extrabold" style={{ color: "#11182E" }}>트레이너 코멘트</b>
                      <span className="text-[9.5px] font-bold" style={{ color: "#2563EB" }}>✎ 수정</span>
                    </div>
                    <p className="text-[10.5px] font-semibold leading-relaxed mb-2" style={{ color: "#4D5670" }}>
                      무릎 통증 관리와 자세 교정이 우선입니다. 스쿼트 시 무릎이 안쪽으로 모이지 않도록 주의하고, 통증 없는 범위에서 운동 강도를 조절하세요. 다음 세션에서 자세 변화를 다시 확인하겠습니다.
                    </p>
                    <div className="text-[9px] font-semibold" style={{ color: "#8891A6" }}>작성일: 2025-05-23 18:30</div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 text-center text-xs font-extrabold py-2.5 rounded-xl transition-colors hover:opacity-80" style={{ background: "#fff", border: "1px solid #CDD4E3", color: "#4D5670" }}>임시 저장</button>
                    <button className="flex-1 text-center text-xs font-extrabold py-2.5 rounded-xl transition-colors hover:opacity-80" style={{ background: "#16284F", color: "#fff" }}>리포트 회원 제공</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 신뢰 바 */}
      <div className="flex items-center gap-3 justify-center rounded-xl p-4 mb-4" style={{ background: "#DDF4F0", border: "1px solid #BCE6DF" }}>
        <span className="w-5 h-5 flex-none" style={{ color: "#0B6E66" }}>{Ico.shieldCheck}</span>
        <p className="text-sm font-extrabold" style={{ color: "#0B6E66" }}>트레이너가 직접 검토하고, 회원에게 가장 적합한 해결 솔루션을 제공합니다.</p>
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold mb-3" style={{ color: "#8891A6" }}>비의료 웰니스 코칭 보조 자료이며, 진단·치료·처방을 대체하지 않습니다.</p>
        <div className="text-sm font-extrabold tracking-[0.22em]" style={{ color: "#0C1530" }}>LIGHT ONE</div>
      </div>
    </div>
  );
}

// ─── 회원 리포트 ──────────────────────────────
function MemberReport() {
  const [appTab, setAppTab] = useState(0);
  const appTabs = [
    { ico: Ico.grid, label: "요약" },
    { ico: Ico.cal, label: "세션" },
    { ico: Ico.chart, label: "지표" },
    { ico: Ico.trend, label: "추세" },
    { ico: Ico.log, label: "로그" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight" style={{ color: "#11182E" }}>
          LIGHT ONE 회원 리포트
        </h2>
        <p className="text-sm font-semibold" style={{ color: "#4D5670" }}>
          세션 기록을 구조화해 <b style={{ color: "#2563EB" }}>다음 PT 판단 근거</b>로 연결합니다
        </p>
      </div>

      {/* 3단 파이프라인 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">

        {/* COL 1 */}
        <div className="bg-white border rounded-2xl overflow-hidden shadow-sm" style={{ borderColor: "#E3E7F0" }}>
          <div className="text-white text-sm font-extrabold text-center py-3 tracking-wide" style={{ background: "#16284F" }}>1. 입력 데이터</div>
          <div className="p-4 space-y-3">
            {[
              { ico: Ico.dumbbell, title: "운동 로그", desc: "종목, 세트, 반복, 중량/속도, 휴식" },
              { ico: Ico.heart, title: "통증 / RPE", desc: "통증(전/후), RPE, 통증 부위" },
              { ico: Ico.body, title: "자세 관찰", desc: "시야별 자세 평가, 정렬, 비대칭" },
              { ico: Ico.cam, title: "촬영 QC", desc: "구도, 조명, 마커, 해상도, px/cm" },
            ].map((f, i) => (
              <div key={i} className="flex gap-3 items-start py-2.5 border-b last:border-b-0" style={{ borderColor: "#E3E7F0" }}>
                <span className="w-8 h-8 rounded-xl flex items-center justify-center flex-none p-1.5" style={{ background: "#E2EBFD", color: "#2563EB" }}>{f.ico}</span>
                <div>
                  <b className="text-sm font-extrabold block" style={{ color: "#11182E" }}>{f.title}</b>
                  <span className="text-xs font-medium leading-relaxed" style={{ color: "#8891A6" }}>{f.desc}</span>
                </div>
              </div>
            ))}

            {/* 세션 기록 입력 폼 */}
            <div className="rounded-xl p-3 mt-2" style={{ background: "#F7F9FC", border: "1px solid #E3E7F0" }}>
              <div className="text-xs font-extrabold mb-3" style={{ color: "#16284F" }}>세션 기록 입력</div>

              <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#8891A6" }}>기본 정보</div>
              <div className="grid gap-1.5 mb-3" style={{ gridTemplateColumns: "60px 1fr" }}>
                {[["날짜","2025-05-23"],["프로그램","하체 강화 A"]].map(([l,v]) => [
                  <label key={l+"l"} className="text-[10.5px] font-semibold flex items-center" style={{ color: "#8891A6" }}>{l}</label>,
                  <div key={l+"v"} className="bg-white rounded-md px-2 py-1 text-xs font-semibold" style={{ border: "1px solid #CDD4E3", color: "#11182E" }}>{v}</div>
                ])}
              </div>

              {[
                { label: "운동 로그", heads: ["종목","세트","반복","중량(kg)","휴식(초)"], rows: [["스쿼트","3","10","60","90"]] },
                { label: "통증 / RPE", heads: ["통증(전)","통증(후)","RPE"], rows: [["2","3","6"]] },
                { label: "자세 관찰", heads: ["어깨","골반","무릎","신뢰도"], rows: [["양호","약간 기울임","양호","0.78"]] },
              ].map((tbl) => (
                <div key={tbl.label}>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#8891A6" }}>{tbl.label}</div>
                  <table className="w-full text-[10px] mb-3">
                    <thead><tr style={{ borderBottom: "1px solid #CDD4E3" }}>{tbl.heads.map(h => <th key={h} className="text-center py-1 font-bold" style={{ color: "#8891A6" }}>{h}</th>)}</tr></thead>
                    <tbody>{tbl.rows.map((row, ri) => <tr key={ri}>{row.map((v,ci) => <td key={ci} className="text-center py-1.5 font-bold" style={{ color: "#11182E", borderBottom: "1px solid #E3E7F0", fontSize: 9 }}>{v}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ))}

              <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#8891A6" }}>촬영 QC</div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs font-extrabold" style={{ color: "#0B6E66" }}>
                  <span className="w-3.5 h-3.5">{Ico.check}</span>통과
                </span>
                <button className="text-[10.5px] font-bold rounded-lg px-3 py-1" style={{ color: "#4D5670", background: "#fff", border: "1px solid #CDD4E3" }}>상세 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* COL 2 */}
        <div className="bg-white border rounded-2xl overflow-hidden shadow-sm" style={{ borderColor: "#E3E7F0" }}>
          <div className="text-white text-sm font-extrabold text-center py-3 tracking-wide" style={{ background: "#16284F" }}>2. 지표 계산</div>
          <div className="p-4 space-y-3">
            {/* QS */}
            <div className="rounded-xl p-4" style={{ background: "#F7F9FC", border: "1px solid #E3E7F0" }}>
              <div className="flex items-center gap-4 mb-3">
                <QsRing score={86} size={78} inner={62} />
                <div className="flex-1">
                  <div className="text-sm font-extrabold mb-2" style={{ color: "#16284F" }}>QS (Quality Score)</div>
                  {[["동작 수행","22/30"],["반복/중량","20/25"],["휴식 준수","18/20"],["통증 반응","17/25"],["자세 품질","9/15"]].map(([k,v]) => (
                    <div key={k} className="flex justify-between text-xs font-semibold py-0.5" style={{ color: "#4D5670" }}>
                      <span>{k}</span><b style={{ color: "#11182E", fontFamily: "Inter", fontWeight: 700 }}>{v}</b>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] font-medium pt-2" style={{ color: "#8891A6", borderTop: "1px dashed #CDD4E3" }}>※ 세션 수행 품질을 0–100 스케일로 산출</p>
            </div>

            {/* JATC 레이더 차트 */}
            <JatcRadarChart />

            {/* QS 4주 추세 차트 */}
            <QsTrendChart />

            {/* 라우팅 */}
            <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "#FCEFD8", border: "1px solid #F0D6A3" }}>
              <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-none p-2" style={{ background: "#fff", color: "#B45309" }}>{Ico.warn}</span>
              <div>
                <div className="text-xs font-bold mb-1" style={{ color: "#4D5670" }}>안전 라우팅 결과</div>
                <div className="text-sm font-extrabold mb-1" style={{ color: "#B45309" }}>⚠ REVIEW</div>
                <p className="text-xs font-semibold leading-relaxed" style={{ color: "#7C4A12" }}>통증 증가 및 자세 신뢰도 낮음 — 트레이너 검토 필요</p>
              </div>
            </div>
          </div>
        </div>

        {/* COL 3 */}
        <div className="bg-white border rounded-2xl overflow-hidden shadow-sm" style={{ borderColor: "#E3E7F0" }}>
          <div className="text-white text-sm font-extrabold text-center py-3 tracking-wide" style={{ background: "#16284F" }}>3. 트레이너 검토</div>
          <div className="p-4">
            <div className="border rounded-xl overflow-hidden flex" style={{ borderColor: "#CDD4E3", minHeight: 420 }}>
              {/* 탭 사이드바 */}
              <div className="w-16 flex flex-col gap-0.5 py-3 flex-none" style={{ background: "#0C1530" }}>
                {appTabs.map((t, i) => (
                  <button key={i} onClick={() => setAppTab(i)}
                    className="flex flex-col items-center gap-1 py-2.5 px-1 relative transition-colors"
                    style={{ color: appTab === i ? "#fff" : "#7C8BB3", background: appTab === i ? "rgba(255,255,255,0.08)" : "transparent", borderLeft: appTab === i ? "2.5px solid #2563EB" : "2.5px solid transparent" }}>
                    <span className="w-4 h-4">{t.ico}</span>
                    <span style={{ fontSize: 9, fontWeight: 700 }}>{t.label}</span>
                  </button>
                ))}
              </div>

              {/* 앱 콘텐츠 */}
              <div className="flex-1 p-4 bg-white overflow-auto">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-extrabold" style={{ color: "#11182E" }}>회원 요약 리포트</h4>
                  <span className="text-[10px] font-bold rounded-lg px-2 py-1" style={{ color: "#2563EB", background: "#E2EBFD" }}>⬇ PDF 다운로드</span>
                </div>

                <div className="flex items-center justify-between rounded-lg px-3 py-2 mb-3" style={{ background: "#F7F9FC" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2563EB,#0E9488)" }}>
                      <span className="w-3.5 h-3.5 text-white">{Ico.user}</span>
                    </div>
                    <div>
                      <b className="text-xs font-extrabold block" style={{ color: "#11182E" }}>김라이트 (M/28)</b>
                      <span className="text-[9.5px] font-semibold" style={{ color: "#8891A6" }}>하체 강화 목표</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9.5px] font-semibold" style={{ color: "#8891A6" }}>최근 세션</div>
                    <b className="text-xs font-bold" style={{ color: "#4D5670" }}>2025-05-23</b>
                  </div>
                </div>

                {[
                  { style: "ok", ico: Ico.chart, title: "변화 요약", items: ["통증(전→후): 2 → 3 (소폭 증가)", "QS: 지난 세션 대비 안정적 유지"], bg: "#fff", border: "#E3E7F0", icoColor: "#2563EB", textColor: "#4D5670" },
                  { style: "warn", ico: Ico.warn, title: "주의 신호", items: ["통증 증가 추세 확인", "자세 관찰 신뢰도 낮음 (0.78)"], bg: "#FCEFD8", border: "#F0D6A3", icoColor: "#B45309", textColor: "#7C4A12" },
                  { style: "target", ico: Ico.target, title: "다음 세션 포인트", items: ["하체 정렬 중심 교정", "휴식 시간 및 통증 반응 모니터링"], bg: "#DDF4F0", border: "#BCE6DF", icoColor: "#0E9488", textColor: "#0B6E66" },
                ].map((blk) => (
                  <div key={blk.title} className="rounded-xl p-3 mb-2" style={{ background: blk.bg, border: `1px solid ${blk.border}` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5" style={{ color: blk.icoColor }}>{blk.ico}</span>
                      <b className="text-xs font-extrabold" style={{ color: "#11182E" }}>{blk.title}</b>
                    </div>
                    <ul className="pl-4 space-y-1">
                      {blk.items.map((it, i) => (
                        <li key={i} className="text-[10.5px] font-semibold relative pl-3" style={{ color: blk.textColor }}>
                          <span className="absolute left-0 top-[6px] w-1 h-1 rounded-full" style={{ background: blk.border }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex items-center gap-2 flex-wrap text-[10px] font-semibold pt-3" style={{ color: "#8891A6", borderTop: "1px solid #E3E7F0" }}>
                  <span>2025-05-23 18:30</span><span>·</span>
                  <b style={{ color: "#4D5670", fontWeight: 700 }}>Trainer L</b>
                  <span className="text-[9.5px] font-extrabold rounded-full px-2 py-0.5" style={{ color: "#B45309", background: "#FCEFD8", border: "1px solid #F0D6A3" }}>REVIEW</span>
                  <span>통증·자세 검토 필요</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 신뢰 바 */}
      <div className="flex items-center gap-3 justify-center rounded-xl p-4 mb-4" style={{ background: "#DDF4F0", border: "1px solid #BCE6DF" }}>
        <span className="w-5 h-5 flex-none" style={{ color: "#0B6E66" }}>{Ico.shieldCheck}</span>
        <p className="text-sm font-extrabold" style={{ color: "#0B6E66" }}>같은 입력은 같은 기준으로 계산되고, 최종 판단은 트레이너가 검토합니다.</p>
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold mb-3" style={{ color: "#8891A6" }}>비의료 웰니스 코칭 보조 자료이며, 진단·치료·처방을 대체하지 않습니다.</p>
        <div className="text-sm font-extrabold tracking-[0.22em]" style={{ color: "#0C1530" }}>LIGHT ONE</div>
      </div>
    </div>
  );
}

// ─── 메인 페이지 ──────────────────────────────
export default function ReportDemo() {
  const [activeTab, setActiveTab] = useState<"trainer" | "member">("trainer");

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#F2F4F9",
        backgroundImage: "linear-gradient(rgba(22,40,79,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,40,79,.04) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      {/* 구글 폰트 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 py-8">
        {/* 상단 네비 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <a className="flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-70" style={{ color: "#4D5670" }}>
              <span className="w-4 h-4">{Ico.back}</span>
              사업계획서로 돌아가기
            </a>
          </Link>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-widest rounded-full px-3 py-1" style={{ color: "#2563EB", background: "#E2EBFD", border: "1px solid #C9D9FB" }}>
            <span className="w-3 h-3">{Ico.check}</span>
            SAMPLE DATA · 견본 화면
          </span>
        </div>

        {/* 탭 전환 */}
        <div className="flex gap-1 bg-white border rounded-2xl p-1.5 mb-8 max-w-sm mx-auto shadow-sm" style={{ borderColor: "#E3E7F0" }}>
          {[
            { key: "trainer", label: "트레이너 솔루션 화면" },
            { key: "member", label: "회원 리포트" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as "trainer" | "member")}
              className="flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all duration-200"
              style={activeTab === t.key ? { background: "#16284F", color: "#fff" } : { color: "#8891A6" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠 */}
        {activeTab === "trainer" ? <TrainerReport /> : <MemberReport />}
      </div>
    </div>
  );
}
