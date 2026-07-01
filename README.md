# LIGHT ONE — 사업계획서 웹 v1.0

> **프로의 기준, 이제는 데이터입니다.**  
> Data-Driven, Evidence-Based Personal Training

[![Live Demo](https://img.shields.io/badge/Live%20Demo-lightonebp--247pka5x.manus.space-0E9488?style=for-the-badge)](https://lightonebp-247pka5x.manus.space)
[![Branch](https://img.shields.io/badge/Branch-business--plan--web-16284F?style=for-the-badge&logo=github)](https://github.com/gggwang210-commits/lightone/tree/business-plan-web)

---

## 프로젝트 개요

LIGHT ONE은 PT 현장의 운동 기록, 통증/RPE, 자세 관찰, 촬영 품질 데이터를 구조화해 **QS(Quality Score), 변화 추세, 위험 라우팅, 트레이너 리포트**를 제공하는 데이터 기반 PT 의사결정지원 서비스입니다.

본 리포지토리는 **모두의창업 2기** 제출용 사업계획서 웹사이트 소스코드입니다.

---

## 라이브 데모

| 페이지 | URL |
|---|---|
| 메인 사업계획서 | https://lightonebp-247pka5x.manus.space |
| 리포트 데모 | https://lightonebp-247pka5x.manus.space/report-demo |

---

## 주요 기능

### 메인 페이지 (`/`)
- **히어로 섹션** — 핵심 메시지 + 주요 지표 (14,773+ 시설 / 30~40% 이탈률 / 3단계 위험 라우팅 / B2B SaaS)
- **문제정의** — PT 현장의 4가지 핵심 문제 + 시장 데이터
- **솔루션** — 4단계 데이터 파이프라인 (입력 → 점수화 → 위험 라우팅 → 리포트)
- **시장 분석** — 한국 피트니스 시장 규모, 도수치료 관리급여화(2026.7.1) 등 인포그래픽 Rev6 데이터 반영
- **경쟁 지형** — 바디코디/피트릭스/바디닷/엑스바디/APECS vs LIGHT ONE 비교표 + **기능별 체크박스 필터**
- **창업자 스토리** — "숫자로 보여주세요" 에피소드 기반 스토리텔링
- **로드맵** — Q4 2025 ~ Q2 2026 MVP 개발 단계
- **규제 대응** — 의료기기법·개인정보보호법·건강기능식품법 준수 전략
- **공공지원** — 창업지원 프로그램 활용 계획
- **요금제** — Starter(₩29,000) / Pro(₩89,000) / Enterprise(₩199,000)

### 리포트 데모 페이지 (`/report-demo`)
- **트레이너 솔루션 화면** — 앱 프레임 + 회원 프로필 / 솔루션 탭 / 추천 운동 + 코멘트 3열 레이아웃
- **회원 리포트** — 3단 파이프라인 (입력 데이터 → 지표 계산 → 트레이너 검토)
  - QS 도넛 링 (86/100, REVIEW 배지)
  - **4주 QS 추세 막대 차트** (71→78→65→86, +15pt)
  - **JATC 레이더 차트** — 통증(62)·자세(72)·기능(68)·생활습관(70) 4개 영역 불균형 시각화
  - 트레이너 코멘트 + 다음 목표

---

## 디자인 시스템

| 토큰 | 값 | 용도 |
|---|---|---|
| `--lo-paper` | `#F2F4F9` | 기본 배경 |
| `--lo-navy-900` | `#16284F` | 히어로·강조 배경 |
| `--lo-teal` | `#0E9488` | 브랜드 액센트 |
| `--lo-ink-1` | `#1E2A3A` | 본문 텍스트 |
| `--lo-ink-2` | `#4A5568` | 보조 텍스트 |

- **폰트**: Noto Sans KR (본문) + Inter (숫자·영문)
- **반응형**: 375px / 768px / 1280px 3단계 브레이크포인트

---

## 기술 스택

| 분류 | 패키지 | 설치 버전 | 최신 버전 | 비고 |
|---|---|---|---|---|
| 프레임워크 | `react` / `react-dom` | **19.2.7** ✅ | 19.2.7 | 최신 버전 적용 완료 |
| 언어 | `typescript` | **6.0.3** ✅ | 6.0.3 | 최신 버전 적용 완료 |
| 스타일링 | `tailwindcss` | **4.3.2** ✅ | 4.3.2 | 최신 버전 적용 완료 |
| 빌드 도구 | `vite` | **8.1.2** ✅ | 8.1.2 | Rolldown 번들러 마이그레이션 완료 |
| UI 컴포넌트 | `shadcn/ui` + `@radix-ui` | **radix 1.1.15** | — | shadcn/ui는 별도 버전 없음 |
| 아이콘 | `lucide-react` | **1.22.0** ✅ | 1.22.0 | 최신 버전 적용 완료 |
| 라우팅 | `wouter` | **3.10.0** ✅ | 3.10.0 | 최신 버전 적용 완료 |
| 유틸리티 | `clsx` / `class-variance-authority` | 2.1.1 / 0.7.1 | — | 안정 버전 유지 |
| 차트 | 순수 SVG | — | — | 외부 라이브러리 없음 |

> **마이그레이션 완료 (2026.07):** TypeScript 6.0 `baseUrl` 경고 수정 완료. Vite 8.0 Rolldown 번들러 전환 완료. `@builder.io/vite-plugin-jsx-loc` (Vite 4/5 전용) 제거.

---

## 로컬 개발 환경 설정

### 사전 준비
- Node.js 22+
- pnpm (`npm install -g pnpm`)

### 실행

```bash
# 1. 의존성 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev
# → http://localhost:3000

# 3. 빌드 (배포용)
pnpm build
```

### VS Code 추천 확장
- **ESLint** — 코드 품질 검사
- **Prettier** — 코드 자동 정렬
- **Tailwind CSS IntelliSense** — 클래스 자동완성

---

## 파일 구조

```
client/
  src/
    pages/
      Home.tsx          ← 메인 사업계획서 페이지 (전체 섹션)
      ReportDemo.tsx    ← 트레이너/회원 리포트 데모
    components/
      ui/               ← shadcn/ui 컴포넌트
    index.css           ← LIGHT ONE 디자인 토큰 + 전역 스타일
    App.tsx             ← 라우팅 설정
```

---

## 핵심 원칙

1. **AI가 트레이너를 대체하지 않는다** — 트레이너의 판단을 보조하는 도구
2. **의료 진단·치료·재활 처방 표현 금지** — 안전 신호로만 설명
3. **초기 MVP는 가상 데이터** — 실제 개인정보·건강정보·영상 미사용
4. **위험 라우팅**: AUTO(일반 진행) / REVIEW(트레이너 검토) / BLOCK(안전 신호)

---

## 관련 리소스

- [Airtable 프로젝트 관리](https://airtable.com) — LightoneV2 베이스
- [Google Drive 자료](https://drive.google.com) — LIGHT ONE 사업계획서 웹 v1.0 폴더
- [Slack 팀 채널](https://the-lightone.slack.com) — #lightone-전체

---

## 라이선스

본 프로젝트는 LIGHT ONE 사업화 목적으로 제작된 비공개 사업계획서 웹입니다.  
무단 복제 및 상업적 이용을 금합니다.

---

*LIGHT ONE MVP · 가상 데이터 기반 견본 화면 포함*  
*모두의창업 2기 제출용 — 2026.07*
