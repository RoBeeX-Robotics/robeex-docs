---
include: 1
orderPriority: 100
---

# 🧩 Blockly Demo Programs

Explore flight coordinates, shapes, lists, sensors, and image processing with these complete Blockly examples. Each guide includes an editor screenshot, the saved program name, a downloadable Blockly JSON workspace, and a parameter summary.

Start with [Run or Duplicate](./run-or-duplicate.md) and [Your First Program](../making-your-first-program.md). Recreate the blocks shown in each guide, or use the saved program when it is available in your app’s User Programs. JSON files provide a copy of the saved workspace; they are not JavaScript programs.

::: info
The programs were loaded and saved in the editor, and their generated code was checked with mocked drone/sensor/camera APIs. They have not been flight-tested. Flight paths and sensor accuracy still need validation on the drone.
:::

Flight examples use centimeters and end with a landing. Home is the takeoff reference; returning Home changes horizontal position, not altitude or yaw. Stationary sensor and LED examples contain no takeoff command and run until Stop. Keep motors disarmed for those examples. For vision exercises, start with the stationary LED examples before adding flight commands.

## 🧭 Planned Flight

* [XYZ and Relative Flight](./coordinate-flight.md)
* [Absolute vs Relative Flight](./absolute-relative-flight.md)
* [Move and Turn Together](./move-and-turn.md)

## 🔷 Drawing Shapes

* [Draw a Regular Polygon](./regular-polygon.md)
* [Circle with Yaw Steps](./circle-yaw.md)
* [Circle with Sine and Cosine](./circle-trigonometry.md)

## 📋 Working with Lists

* [Fly a List of Waypoints](./saved-waypoints.md)

## 📏 Sensors

* [Calibrated Digital Level](./digital-level.md)
* [Digital Altimeter](./digital-altimeter.md)
* [Tilt-Corrected Altimeter](./tilt-corrected-altimeter.md)

## 🏭 Industrial Simulations

* [Pipeline Inspection Route](./pipeline-inspection.md)
* [Firefighting Floor Patrol](./firefighting-floors.md)

## 👤 Image Processing

* [Face Detection Lights](./face-detection-led.md)
* [Face-Triggered Forward Flight](./face-triggered-flight.md)
* [Face Direction Lights](./face-direction-led.md)
* [Follow a Face with Yaw](./face-following-yaw.md)

### Related existing demos

* [Bull Fighting](./bull-fighting.md)
* [Face Tracking](./face-tracking.md)
