# LIGHT ONE Healthcare AI Platform

LIGHT ONE is an early-stage healthcare AI product concept repository for connecting posture and body-shape analysis, low back pain risk reference, and CADSS (Controlled AI Decision Support System) into one safety-first wellness support workflow.

LIGHT ONE은 체형 분석, 요통 위험도 참고, AI 의사결정 안전장치(CADSS)를 하나의 헬스케어 AI 사업 흐름으로 정리하기 위한 초기 프로젝트 저장소입니다.

> This project is a non-medical wellness support and expert decision-support concept. It does not replace qualified professional judgment. Regulatory, clinical, legal, and SaMD or medical-device applicability require further expert review. [확인필요]

## Problem

Many posture and body-analysis services provide visual feedback or risk scores without clearly explaining the limits of AI-based interpretation. In healthcare and wellness contexts, this can create several risks:

- Users may over-trust AI-generated outputs.
- Model outputs can be affected by data bias, image quality, posture variation, and limited context.
- Health-related data may include sensitive personal information.
- Service teams need clear safety boundaries before building public-facing features.

LIGHT ONE addresses this by defining a safer product structure first: what the system can support, what it must not claim, and how human review or expert judgment should remain part of the workflow.

## Target User

The initial target users are:

- Personal trainers and wellness coaches who need structured posture feedback materials.
- Healthcare AI planners who need a safety-first service framework.
- Early users who want educational insight about posture, movement habits, and low back pain risk factors.
- Internal project reviewers who need to understand the MVP scope, limitations, and roadmap.

This project does not target emergency care, clinical decision replacement, or independent medical decision-making.

## Core Features

### 1. Posture and Body-Shape Analysis

- Visual posture observation support
- Body alignment summary
- Educational feedback for posture and movement awareness
- Trainer-facing explanation materials

### 2. Low Back Pain Risk Reference

- Risk-factor-based reference output
- Lifestyle and movement-context summary
- User education for possible contributing factors
- Clear uncertainty notice for model-based outputs

### 3. CADSS: Controlled AI Decision Support System

CADSS is the project safety layer. It controls how AI-generated information is shown, explained, escalated, and limited.

CADSS should support:

- Output boundary control
- Risk-level routing
- Human-in-the-loop review triggers
- Explanation and uncertainty display
- Unsafe claim prevention
- Audit-friendly service documentation

### 4. Healthcare AI Governance, Safety, and Explainability

- Safety policy documentation
- Data and privacy risk notes
- Bias and uncertainty documentation
- Expert review requirements
- Regulatory review checklist [확인필요]

## MVP Scope

The first MVP should focus on documentation and a technical landing page, not a full AI product.

### Included in MVP

- Project README
- CADSS concept documentation
- Safety policy documentation
- Roadmap documentation
- Technical landing page draft
- Clear non-medical wellness support positioning

### Not Included in MVP

- Clinical validation claims
- Public risk scoring without review
- Medical-device or SaMD claims
- Automated professional judgment
- Production-level personal health data processing
- Performance claims without verified evaluation

## Safety Boundary

LIGHT ONE must follow these safety boundaries:

- Present AI output as reference information only.
- Keep expert judgment in the loop for sensitive use cases.
- Avoid emergency or high-risk guidance.
- Avoid unverified performance numbers.
- Do not collect or process sensitive health data without proper consent, security, and privacy review. [확인필요]
- Mark SaMD or medical-device applicability as unresolved until reviewed by qualified experts. [확인필요]

Recommended product language:

- Risk reference
- Wellness support
- Expert decision-support
- Educational insight
- Lifestyle and movement-context summary
- Human review recommended

## Tech Stack

The current repository is documentation-first. The following stack is a planning reference and may change.

### Planned Frontend

- HTML/CSS/JavaScript or React
- Technical landing page
- Safety-first UX copy

### Planned AI/ML Exploration

- Python
- XGBoost or LightGBM for tabular risk-reference experiments
- Pose or body-keypoint analysis tools for posture-related research [확인필요]

### Planned Backend

- FastAPI or Django
- API layer for future model serving
- Logging and audit trail design for CADSS

### Documentation

- Markdown
- GitHub repository documentation
- Safety and roadmap files under `docs/`

## Repository Structure

```text
lightone/
  README.md
  docs/
    cadss-overview.md
    safety-policy.md
    roadmap.md
```

## Roadmap

### Phase 1: Project Definition

- Define LIGHT ONE project scope
- Clarify target users and MVP boundaries
- Document safety and regulatory uncertainty
- Create CADSS overview

### Phase 2: Landing Page MVP

- Build a static technical landing page
- Present problem, solution, CADSS workflow, and safety boundary
- Avoid unverified performance or medical claims

### Phase 3: Prototype Planning

- Define input/output flow
- Draft posture-analysis and low back pain risk-reference user journeys
- Identify data requirements and privacy risks
- Design human review points

### Phase 4: Model Experiment Preparation

- Select candidate datasets only after data-use review [확인필요]
- Define evaluation metrics and bias checks
- Separate experimental model outputs from user-facing service claims

### Phase 5: Expert Review and Business Validation

- Review healthcare, legal, privacy, and regulatory risks [확인필요]
- Refine service positioning
- Prepare pitch, proposal, or demo materials

## Current Status

This repository is currently in the project-definition stage. The next recommended step is to build the documentation structure and then create a technical landing page based on the safety-first scope.

## Commit Direction

Recommended commit message:

```text
docs: define LIGHT ONE project scope and safety framework
```
