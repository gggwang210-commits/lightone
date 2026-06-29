# 트레이너 상담 리포트 SaaS

트레이너 상담 리포트 SaaS는 PT 트레이너가 회원 변화 데이터를 체계적으로 기록하고, 상담 및 재등록에 활용할 수 있는 리포트를 생성하는 B2B 웰니스 소프트웨어 MVP입니다.

이 저장소는 완성된 상용 서비스가 아니라, 상담 리포트의 신뢰도를 높이기 위한 촬영 품질 확인, 조명 품질 측정, 카메라 보정 관련 기술 증빙 자료입니다.

## 1. 서비스 개요

### 한 줄 설명

> PT 트레이너가 회원 변화 데이터를 기록하고 상담 리포트를 생성하여 재등록 관리를 돕는 SaaS

### 대상 고객

- 구매자: PT샵 대표, 헬스장 대표, 트레이너 팀장, 센터 운영자
- 사용자: PT 트레이너
- 수혜자: PT 회원

### 핵심 가치

- 회원 변화 기록을 한 곳에 정리
- 상담 전 리포트 생성으로 준비 시간 절감
- 재등록 상담에 활용 가능한 변화 근거 제공
- 촬영 품질 확인으로 리포트 신뢰도 보조

## 2. 고객 문제

PT 현장에서는 회원의 운동 기록, 촬영 기록, 통증 반응, 상담 메모가 여러 도구에 흩어지는 경우가 많습니다.

대표 문제는 다음과 같습니다.

1. 회원 변화 기록이 카카오톡, 사진첩, 메모장, 엑셀, 인바디 결과지 등에 분산됨
2. 상담 전 자료 정리에 시간이 걸림
3. 회원 변화가 있어도 설명 자료가 부족함
4. 재등록 상담 때 객관적으로 보여줄 리포트가 부족함
5. 촬영 각도, 조명, 거리 차이로 전후 비교 신뢰도가 흔들림

## 3. 서비스 흐름

```text
회원 등록
  ↓
운동 기록 / RPE / 통증 반응 / 상담 메모 입력
  ↓
촬영 기록 업로드 또는 촬영 품질 확인
  ↓
PASS / CHECK / FAIL 품질 상태 확인
  ↓
회원 변화 리포트 생성
  ↓
트레이너 상담 및 재등록 관리에 활용
```

## 4. MVP 기능 범위

현재 MVP 기획 기준 기능은 다음과 같습니다.

- 회원별 목표, 주의사항, 상담 이력 기록
- 운동 수행 기록, RPE, 통증 반응, 메모 관리
- 촬영 품질 상태 확인
- 변화 기록 요약
- 상담 리포트 생성
- 트레이너 확인 필요 항목 표시

이 저장소의 코드는 위 서비스 흐름 중 **촬영 품질 확인과 리포트 신뢰도 보조 기술**에 집중합니다.

## 5. 촬영 QC 기술의 역할

촬영 QC, 카메라 캘리브레이션, 조명 정규화는 이 서비스의 메인 상품이 아닙니다.

이 기술의 역할은 다음과 같습니다.

> 리포트에 사용되는 촬영 데이터가 비교 가능한 조건인지 확인하고, 품질이 낮은 입력은 재촬영 또는 트레이너 확인 대상으로 분류하는 것

### 구현된 기술 모듈

#### Camera Calibration

```text
camera_calibration/
  __init__.py
  checkerboard_calibrate.py
  reprojection_error.py
  undistort.py
```

주요 기능:

- 체커보드 기반 카메라 캘리브레이션
- 카메라 내부 파라미터 계산
- 왜곡 계수 계산
- 재투영 오차 계산
- PASS / CHECK / FAIL 품질 분류
- 보정 전후 비교 이미지 생성

#### Lighting Normalization

```text
lighting_normalization/
  __init__.py
  normalize.py
  uniformity_check.py
  before_after_report.py
```

주요 기능:

- Gray-world white balance 적용
- CLAHE 기반 밝기 정규화
- 평균 밝기 정규화
- 조명 균일도 계산
- 그림자 비율 계산
- PNG 및 JSON 리포트 생성

#### Center QC

```text
demo_assets/center_qc/
  booth_spec.py
  qc_gate.py
  scale_reference.py
```

주요 기능:

- 촬영 환경 기준 확인
- 품질 게이트 판정
- 스케일 기준 확인
- 촬영 조건 로그화

## 6. 비의료·개인정보 안전 경계

이 프로젝트는 비의료 웰니스 영역의 상담 보조 도구입니다.

제공하지 않는 것:

- 의료 진단
- 질병 예측
- 치료 효과 판단
- 임상 의사결정 지원
- 환자 상태 평가
- 자동 운동 처방

주의사항:

- 실제 회원 이미지, 얼굴 이미지, 민감 건강정보를 저장소에 올리지 않습니다.
- API Key, 인증정보, `.env` 파일을 커밋하지 않습니다.
- 테스트와 데모에는 합성 데이터 또는 비식별 샘플만 사용합니다.
- 통증 관련 내용은 진단이 아니라 트레이너가 확인해야 할 참고 기록으로만 다룹니다.

## 7. Repository Structure

```text
lightone/
  README.md
  LIGHTING_README.md
  CENTER_QC_README.md
  requirements.txt
  demo_pipeline.py
  demo_result.json
  index.html

  camera_calibration/
    __init__.py
    checkerboard_calibrate.py
    reprojection_error.py
    undistort.py

  lighting_normalization/
    __init__.py
    normalize.py
    uniformity_check.py
    before_after_report.py

  demo_assets/
    center_qc/
      booth_spec.py
      qc_gate.py
      scale_reference.py

  tests/
    test_calibration.py
    test_lighting.py
    test_qc.py

  docs/
    roadmap.md
    safety-policy.md
    portfolio_summary.md
```


## 데모 상담 리포트 샘플

- [Basic 샘플](docs/demo-report-sample-basic.md): 촬영 품질 조건이 PASS인 기본 상담 리포트 예시
- [Review 샘플](docs/demo-report-sample-review.md): 촬영 품질은 통과했지만 트레이너 확인이 필요한 상담 리포트 예시
- [Retake 샘플](docs/demo-report-sample-retake.md): 촬영 조건 미달로 재촬영을 권고하는 상담 리포트 예시

## 8. Installation

Create and activate a virtual environment first.

macOS / Linux:

```bash
python -m venv .venv
source .venv/bin/activate
```

Windows PowerShell:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

## 9. Run Tests

```bash
python -m unittest discover -s tests
```

테스트는 합성 이미지와 합성 캘리브레이션 데이터를 사용합니다. 코드 경로가 의도대로 동작하는지 확인하기 위한 것이며, 실제 센터 환경에서의 성능을 증명하지는 않습니다.

## 10. Usage Examples

### Camera Calibration

```bash
python -m camera_calibration.checkerboard_calibrate --camera-id front --images "data/front/*.jpg" --output calibration/front.json
```

```bash
python -m camera_calibration.reprojection_error --calibration calibration/front.json --images "data/front/*.jpg" --output reports/front_reprojection.json
```

```bash
python -m camera_calibration.undistort --calibration calibration/front.json --image data/front/sample.jpg --output reports/front_before_after.jpg
```

### Lighting Normalization

```bash
python -m lighting_normalization.normalize --input data/graycard/session_001.jpg --output reports/session_001_normalized.jpg --metrics reports/session_001_normalized.json
```

```bash
python -m lighting_normalization.uniformity_check --input reports/session_001_normalized.jpg --output reports/session_001_uniformity.json --grid 8x8
```

```bash
python -m lighting_normalization.before_after_report --input data/graycard/session_001.jpg --output-png reports/session_001_lighting_report.png --output-json reports/session_001_lighting_report.json
```

## 11. Data Policy

Do not commit:

- Real user images
- Face images
- Private body images
- Health records
- API keys
- `.env` files
- Large generated reports
- Local virtual environments
- Raw customer interview files containing personal information

Keep local experiment data outside Git unless it is synthetic and safe to share.

## 12. Customer Validation Plan

초기 검증은 다음 순서로 진행합니다.

1. PT샵 대표, 헬스장 대표, 트레이너 인터뷰
2. 회원 기록과 상담 리포트 사용 흐름 확인
3. 촬영 품질 확인 기능의 필요성 확인
4. 리포트 샘플에 대한 트레이너 피드백 수집
5. 센터 월 구독 또는 트레이너 계정 과금에 대한 지불 의향 검증

검증 전에는 시장 규모, 매출, 전환율, 정확도 수치를 확정 표현으로 쓰지 않습니다.

## 13. Next Development Steps

1. GitHub 문서와 공개 파일의 민감정보 노출 여부 점검
2. 고객 인터뷰 질문지 작성
3. 상담 리포트 샘플 화면 정리
4. Django 또는 FastAPI 기반 리포트 생성 흐름 설계
5. 촬영 QC 결과를 상담 리포트에 연결
6. 개인정보 최소 수집, 접근권한, 보관·파기 기준 문서화

## 14. Positioning Summary

> 이 저장소는 트레이너 상담 리포트 SaaS의 기술 증빙 자료입니다. 촬영 QC와 조명·카메라 품질 확인은 서비스의 메인 상품이 아니라, 회원 변화 리포트의 신뢰도를 보조하는 기술 요소입니다.
