# LIGHT ONE

LIGHT ONE is a Python-based capture-quality verification module for an AI posture and body-reference analysis project.

It currently focuses on two reliability checks before any posture analysis step:

1. Camera calibration and reprojection-error measurement
2. Lighting normalization and lighting-quality reporting

This repository should be understood as a preprocessing and quality-evidence module, not as a complete web service or a medical diagnosis system.

## Current Project Position

Posture and body-reference analysis can be strongly affected by input image quality. If the camera lens distorts the image, or if lighting is uneven, the downstream measurement can become unreliable.

LIGHT ONE helps control those risks by calculating numerical quality evidence from calibration and lighting images.

Safe description:

> LIGHT ONE verifies lighting uniformity, shadow ratio, camera distortion, and reprojection error before AI posture analysis, so unreliable capture conditions can be identified early.

## Important Safety Note

This project is for posture reference, exercise-coaching support, and capture-quality verification only.

It does not provide:

- Medical diagnosis
- Disease prediction
- Treatment-effect evaluation
- Clinical decision support
- Patient-state assessment

Do not upload or commit personally identifiable images, faces, real user body images, API keys, credentials, or private health data.

## Implemented Features

### Camera Calibration

Location:

```text
camera_calibration/
  __init__.py
  checkerboard_calibrate.py
  reprojection_error.py
  undistort.py
```

Main functions:

- Detect checkerboard corners from calibration images
- Calculate camera intrinsic matrix `K`
- Calculate distortion coefficients `D`
- Save calibration results as JSON
- Calculate reprojection error
- Classify calibration quality as `PASS`, `CHECK`, or `FAIL`
- Generate before/after undistortion comparison images

### Lighting Normalization

Location:

```text
lighting_normalization/
  __init__.py
  normalize.py
  uniformity_check.py
  before_after_report.py
```

Main functions:

- Apply gray-world white balance
- Apply CLAHE-based luminance normalization
- Normalize average brightness
- Calculate lighting uniformity
- Calculate shadow ratio
- Generate before/after PNG reports
- Generate JSON metric reports

### Tests

Location:

```text
tests/
  test_calibration.py
  test_lighting.py
```

The tests use synthetic images and synthetic calibration data. They check code behavior, but they do not prove real-world camera or lighting performance.

Real reliability evidence requires actual checkerboard images, lighting patches, or gray-card images from the intended capture setup.

## Not Implemented Yet

The following features are future plans and should not be described as completed:

- User-facing web UI
- Backend API server
- Real pose-estimation model integration
- Real body-shape analysis model
- User image upload flow
- Login or membership system
- Database storage
- Payment features
- Cloud deployment
- Docker deployment
- GitHub Actions CI

## Repository Structure

```text
lightone/
  README.md
  LIGHTING_README.md
  requirements.txt

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

  tests/
    test_calibration.py
    test_lighting.py
```

## Installation

Create and activate a virtual environment first.

macOS/Linux:

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

## Run Tests

```bash
python -m unittest discover -s tests
```

If the tests pass, the core calibration and lighting-normalization code paths are working in the current environment.

## Camera Calibration Usage

Run calibration with checkerboard images:

```bash
python -m camera_calibration.checkerboard_calibrate --camera-id front --images "data/front/*.jpg" --output calibration/front.json
```

Generate a reprojection-error report:

```bash
python -m camera_calibration.reprojection_error --calibration calibration/front.json --images "data/front/*.jpg" --output reports/front_reprojection.json
```

Generate an undistortion comparison image:

```bash
python -m camera_calibration.undistort --calibration calibration/front.json --image data/front/sample.jpg --output reports/front_before_after.jpg
```

## Lighting Normalization Usage

Normalize a lighting or gray-card image:

```bash
python -m lighting_normalization.normalize --input data/graycard/session_001.jpg --output reports/session_001_normalized.jpg --metrics reports/session_001_normalized.json
```

Check lighting uniformity:

```bash
python -m lighting_normalization.uniformity_check --input reports/session_001_normalized.jpg --output reports/session_001_uniformity.json --grid 8x8
```

Generate a before/after PNG and JSON report:

```bash
python -m lighting_normalization.before_after_report --input data/graycard/session_001.jpg --output-png reports/session_001_lighting_report.png --output-json reports/session_001_lighting_report.json
```

## Recommended Data Policy

Keep local experiment data outside Git unless it is synthetic and safe to share.

Do not commit:

- Real user images
- Face images
- Private body images
- Health records
- API keys
- `.env` files
- Large generated reports
- Local virtual environments

## Portfolio Summary

LIGHT ONE demonstrates the following engineering points:

- OpenCV-based image preprocessing
- Camera calibration workflow
- Quantitative reprojection-error reporting
- Lighting uniformity and shadow-ratio measurement
- Before/after visual report generation
- Testable Python module structure
- Health-related expression risk control

A safe one-line portfolio description:

> AI posture analysis is sensitive to image quality, so LIGHT ONE verifies camera distortion and lighting consistency before downstream analysis.

## Next Development Steps

Recommended order:

1. Keep documentation and repository hygiene clear
2. Add a single integrated quality-check pipeline
3. Add CLI examples and sample synthetic data
4. Add a simple FastAPI wrapper only after the core pipeline is stable
5. Add pose-estimation experiments in a separate branch or notebook
6. Add privacy and safety documentation before handling real user images
