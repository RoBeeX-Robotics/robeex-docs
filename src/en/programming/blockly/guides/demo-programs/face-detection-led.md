---
orderPriority: 4
---

# 👤 Face Detection Lights

This Blockly program performs the following actions:

* **Camera:** Start the camera and get a new frame on each iteration.
* **Detection:** Store the detected faces in a list and draw their bounding boxes.
* **Lights:** Show **green** if the list is not empty, otherwise show **red**. Wait **0.1 seconds** before the next frame.

## How it works

Connect the drone for its camera feed and LEDs, keep the motors disarmed, and point the camera toward a face. Detection runs on each newly acquired image. The loop continues until Stop and contains no flight commands. A face in this example means a detected face-shaped region, not an identified person.

## Blocks used in this program

* [Machine Vision — Start Camera](../../references/block-categories/machine-vision.md#start-camera)
* [Machine Vision — Detect Face](../../references/block-categories/machine-vision.md#detect-face)
* [Lights](../../references/block-categories/lights.md)

## Program Code

Saved program name: **Face Detection Lights**.

![👤 Face Detection Lights](/assets/blockly-programming/demos/face-detection-led.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/face-detection-led.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Face present | Green LEDs | At least one face was detected. |
| No face | Red LEDs | The detection list is empty. |
| Frame interval | 0.1 s plus processing time | Avoid a tight polling loop. |
| Flight commands | None | Test vision and lighting while stationary. |

[All demo programs](./index.md)
