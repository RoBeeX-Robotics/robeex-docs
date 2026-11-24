---
orderPriority: 1
---

# 👨🏻 Follow a Face with Yaw

This Blockly program performs the following actions:

* **Takeoff:** Start the camera and rise to **80 cm**.
* **Tracking:** Use the first detected face: turn **10° counterclockwise** for the left zone and **10° clockwise** for the right zone.
* **Center and finish:** Hold yaw within the middle **40–60%** of the image; after **100 frames**, return Home and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

This adds yaw commands to [Face Direction Lights](./face-direction-led.md). Blue indicates a left correction, red a right correction, green the center band, and off means no detected face. There is no new yaw command when the detection list is empty. A 0.1-second wait follows each iteration, and flight commands also wait for their targets, so 100 frames take longer than ten seconds. First verify camera left/right orientation using the stationary LED demo; a mirrored camera can require reversing the turn directions. See also the existing [Face Tracking demo](./face-tracking.md).

## Blocks used in this program

* [Machine Vision — Get Bounding Box Properties](../../references/block-categories/machine-vision.md#get-bounding-box-properties)
* [Flying — Turn Cw](../../references/block-categories/flying.md#turn-cw)
* [Flying — Turn Ccw](../../references/block-categories/flying.md#turn-ccw)

## Program Code

Saved program name: **Follow a Face with Yaw**.

![👨🏻 Follow a Face with Yaw](/assets/blockly-programming/demos/face-following-yaw.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/face-following-yaw.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Tracking height. |
| Yaw step | 10° | Discrete correction per off-center frame. |
| Center band | 40–60% of image width | Avoid turning near the center. |
| Loop limit | 100 frames | Finish with a return and landing. |

[All demo programs](./index.md)
