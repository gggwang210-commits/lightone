# LIGHT ONE 파일 분석·검증·정보화 리포트

작성일: 2026-06-29
대상 ZIP: files (3).zip

## 1. 결론
첨부 ZIP은 LIGHT ONE의 기술 문서 패키지로 판단됩니다. 구성은 기술 프레임워크, 데이터 스키마, 기술 로드맵, GitHub push 스크립트 4개입니다. 실제 회원 데이터, 얼굴 이미지, API Key, 비밀번호, 계좌·연락처 등 직접적인 민감정보는 발견되지 않았습니다.

현재 문서는 공모전·창업지원·GitHub 저장소 문서화에 활용하기 좋은 수준입니다. 다만 의료·개인정보·근거 검증 관점에서 일부 표현은 [확인필요] 표시를 유지해야 합니다.

## 2. 파일 인벤토리
| 파일 | 역할 | 우선도 | 판단 |
|---|---|---:|---|
| docs_technical-framework.md | QS/JATC, 라우팅, 비의료 안전경계, 기술스택 정의 | 매우 높음 | 서비스 핵심 설명 문서 |
| docs_data-schema.md | Django Models, 더미 CSV, 데이터 안전 정책 | 매우 높음 | 구현/DB 설계 기준 문서 |
| docs_roadmap.md | Phase 1~3, KPI, 스프린트 계획 | 높음 | 발표·지원사업용 로드맵 |
| github_push_commands.sh | GitHub 업로드 안내 스크립트 | 중간 | 참고용. 실행 전 경로 확인 필요 |

## 3. 핵심 정보화 요약
LIGHT ONE은 비의료 운동상담 보조 SaaS로 정리됩니다. 핵심 구조는 트레이너의 판단을 대체하지 않고 보조하는 Human-in-the-loop 방식입니다.

핵심 지표는 QS(Quality Score)와 JATC(Joint Achievement & Tracking Composite)입니다. QS는 운동 수행 품질을 폼 정확도, 반복수 달성률, 휴식 준수, 통증 반응으로 평가합니다. JATC는 통증, 체형·자세, 근기능, 생활습관을 통합하여 병목 항목을 드러내는 상태지수입니다.

라우팅은 AUTO, REVIEW, BLOCK 3단계입니다. AUTO는 자동 진행 가능, REVIEW는 트레이너 재검토, BLOCK은 안전 신호로 정의됩니다. BLOCK은 의료 진단이 아니며 전문가 상담 권고 문구가 필요합니다.

## 4. 검증 결과
### 통과
- 실제 회원 데이터 미포함
- 더미 CSV·난수 ID·UUID 중심 설계
- 실명·연락처·주민번호 저장 금지 원칙 명시
- 비의료 고지 문구 포함
- GitHub 커밋 금지 항목 명시

### 보완 필요
- OpenPose, DeepLabCut, ACSM, ICC 등 근거 문헌은 문서에 포함되어 있으나, 최종 제출 전 공식 DOI·출판연도·버전 재확인 필요
- JATC 가중치 20/30/30/20은 초기 전문가 합의 기반으로 표기되어 있으므로 실제 검증 전에는 확정 알고리즘처럼 표현하면 안 됨
- ACSM 2025/12판 표기는 최신성 확인 필요
- 개인정보보호법, IRB 필요성은 실제 데이터 수집 방식에 따라 달라지므로 법률 자문 또는 기관 검토 필요

## 5. Airtable 구조 제안
| 테이블 | 목적 | 주요 필드 |
|---|---|---|
| Project Docs | 문서 자산 관리 | Title, Type, Priority, Status, Summary, Risk Note |
| Product Metrics | QS/JATC 지표 관리 | Metric, Definition, Inputs, Routing Rule, Verification Status |
| Roadmap | 실행 단계 관리 | Phase, Timeline, Goal, Deliverables, KPI, Status |
| Risk Register | 의료·개인정보·근거 리스크 관리 | Risk, Impact, Mitigation, Owner, Status |

## 6. Slack 공유용 요약
LIGHT ONE 문서 패키지 검토 결과, ZIP 안에는 기술 프레임워크, 데이터 스키마, 로드맵, GitHub push 스크립트가 포함되어 있습니다. 핵심은 QS/JATC 기반의 비의료 운동상담 보조 SaaS이며, Human-in-the-loop 구조로 트레이너 판단을 보조하는 방향입니다.

검토상 실제 회원 데이터나 API Key 등 민감정보는 발견되지 않았습니다. 다만 JATC 가중치, ACSM 2025 표기, 개인정보보호법·IRB 관련 문구는 최종 제출 전 공식 확인이 필요합니다.

## 7. GitHub 반영 권장 경로
- docs/technical-framework.md
- docs/data-schema.md
- docs/roadmap.md
- docs/lightone-verification-report.md

커밋 메시지 권장:
`docs: add LIGHT ONE QS/JATC framework and verification report`

## 8. 다음 실행 우선순위
1. GitHub docs 폴더에 핵심 문서 저장
2. Google Drive에 검토 리포트 저장
3. Slack Canvas로 팀 공유용 요약 저장
4. Airtable에는 문서/지표/로드맵/리스크 테이블로 구조화
