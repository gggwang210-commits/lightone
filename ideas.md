# LIGHT ONE 사업계획서 웹페이지 — Design Direction

## Chosen Approach: Command Center Data Intelligence

### Design Movement
Dark UI Command Center — 항공 관제탑, 금융 트레이딩 데스크에서 영감을 받은 데이터 인텔리전스 인터페이스

### Core Principles
1. **Data-First Visual:** 모든 섹션에 데이터 시각화 요소가 존재
2. **Trust Through Structure:** 정렬된 그리드와 일관된 간격으로 신뢰감 전달
3. **Cyan Signal Color:** 핵심 정보와 CTA에만 사이언(#00E5FF) 사용
4. **Progressive Disclosure:** 스크롤에 따라 점진적으로 정보 공개

### Color Philosophy
- Background: Deep Navy (#0a1628) — 전문성과 깊이
- Surface: Elevated Navy (#0f2035) — 카드와 컨테이너
- Primary Accent: Electric Cyan (#00E5FF) — 핵심 데이터, CTA
- Secondary Accent: Emerald (#10B981) — 긍정 지표, AUTO 라우팅
- Warning: Amber (#F59E0B) — REVIEW 라우팅
- Danger: Red (#EF4444) — BLOCK 라우팅
- Text Primary: White (#FFFFFF)
- Text Secondary: Slate (#94A3B8)

### Layout Paradigm
풀스크린 섹션 기반 수직 스크롤. 각 섹션은 독립된 정보 단위로 작동하며, 좌우 비대칭 레이아웃을 활용하여 시각적 단조로움을 방지.

### Signature Elements
1. **QS Score Chip:** 라운드 배지 형태의 점수 표시 (78/100 형태)
2. **Risk Routing Badge:** AUTO(초록)/REVIEW(노랑)/BLOCK(빨강) 3색 라우팅 표시
3. **Pulse Dot:** 라이브 데이터를 나타내는 맥동하는 초록 점

### Typography System
- Display: Pretendard Bold 48-72px (한글 헤드라인)
- Heading: Pretendard SemiBold 24-36px
- Body: Pretendard Regular 16-18px
- Mono: JetBrains Mono (데이터 수치)

### Brand Essence
PT 현장의 직관을 구조화된 데이터로 전환하는 의사결정지원 플랫폼. 전문적, 현실적, 신뢰감.

### Brand Voice
헤드라인은 단정적이고 강한 톤. "프로의 기준, 이제는 데이터입니다." "감이 아니라 기록으로 판단합니다."

### Signature Brand Color
Electric Cyan (#00E5FF) — LIGHT ONE의 고유 색상

## Style Decisions
- 네비게이션은 상단 고정, 스크롤 시 배경 불투명도 증가
- 섹션 번호(01, 02, 03...)를 좌측에 표시하여 구조감 부여
- 카드는 border: 1px solid rgba(0,229,255,0.1) 스타일 통일
- 차트와 데이터 시각화에는 Recharts 사용
