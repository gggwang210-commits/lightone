# LIGHT ONE Camera Calibration

This module quantifies camera measurement reliability for the LIGHT ONE body analysis system using checkerboard calibration. The output supports posture reference information only. It is not a medical diagnosis device workflow.

Only checkerboard or marker images are intended as inputs. Do not process personally identifiable images such as faces.

## Folder Structure

```text
camera_calibration/
  __init__.py
  checkerboard_calibrate.py
  reprojection_error.py
  undistort.py
tests/
  test_calibration.py
requirements.txt
README.md
```

## Install

```bash
python -m pip install -r requirements.txt
```

## Data Layout

Capture each fixed camera independently:

```text
data/
  front/*.jpg
  rear/*.jpg
  left/*.jpg
  right/*.jpg
```

Use a 9x6 inner-corner checkerboard unless a different board is specified. All images for one camera must have the same resolution.

## Run Calibration

Run once per camera:

```bash
python -m camera_calibration.checkerboard_calibrate --camera-id front --images "data/front/*.jpg" --output calibration/front.json
python -m camera_calibration.checkerboard_calibrate --camera-id rear --images "data/rear/*.jpg" --output calibration/rear.json
python -m camera_calibration.checkerboard_calibrate --camera-id left --images "data/left/*.jpg" --output calibration/left.json
python -m camera_calibration.checkerboard_calibrate --camera-id right --images "data/right/*.jpg" --output calibration/right.json
```

Each JSON contains `camera_id`, intrinsic matrix `K`, distortion coefficients `D`, and `image_size`. No numeric result is invented. If images are missing or corners cannot be detected, the command reports that data is required.

## Reprojection Error Report

```bash
python -m camera_calibration.reprojection_error --calibration calibration/front.json --images "data/front/*.jpg" --output reports/front_reprojection.json
```

Judgement:

```text
mean error < 0.5 px  => PASS
0.5 px to < 1.0 px  => CHECK
mean error >= 1.0 px => FAIL
```

The report prints only calculated mean, standard deviation, maximum error, image count, and status.

## Undistortion Comparison

```bash
python -m camera_calibration.undistort --calibration calibration/front.json --image data/front/sample.jpg --output reports/front_before_after.jpg
```

The output image places the original image on the left and the corrected image on the right.

## Tests

```bash
python -m unittest discover -s tests
```

The tests use synthetic checkerboard point projections, so they do not pretend to prove real camera performance. Real camera reliability evidence requires actual checkerboard images from each fixed Canon EOS R7 + RF 35mm F1.8 camera position.

## Interview Explanation Points

1. The checkerboard gives known straight-line geometry, so we can calculate how much the camera bends or shifts points instead of guessing.
2. Reprojection error is a pixel-level score: it tells us how closely the calibrated camera model matches the actual captured checkerboard corners.
3. When all four fixed cameras pass the same threshold, posture angle measurements have documented camera-geometry evidence, while remaining reference information rather than medical diagnosis.
