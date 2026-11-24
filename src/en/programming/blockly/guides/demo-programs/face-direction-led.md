---
orderPriority: 3
---

# ↔️ Face Direction Lights

This Blockly program performs the following actions:

* **Detection:** Read a new frame, detect faces, and draw their boxes.
* **Direction:** Compare the first face’s center X with **40% and 60% of the image width**.
* **Lights:** Show **blue for left**, **red for right**, **green for the center band**, and **off when no face is detected**.

## How it works

Keep the motors disarmed. Read `faces[0]` only after checking that the list contains a face. Both bounding-box center X and image width are in pixels. The middle 20% is a deadband that avoids switching color for tiny movements near the center. Left and right mean image coordinates as received from the camera; a mirrored preview can reverse how these appear to a person looking at the screen. This program runs until Stop.

## Blocks used in this program

* [Machine Vision — Get Bounding Box Properties](../../references/block-categories/machine-vision.md#get-bounding-box-properties)
* [Machine Vision — Get Image Properties](../../references/block-categories/machine-vision.md#get-image-properties)
* [Lists](../../references/block-categories/lists.md)

## Program Code

Saved program name: **Face Direction Lights**.

![↔️ Face Direction Lights](/assets/blockly-programming/demos/face-direction-led.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/face-direction-led.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Left zone | centerX < 0.4 × width | Blue LEDs. |
| Center zone | 0.4 × width ≤ centerX ≤ 0.6 × width | Green LEDs. |
| Right zone | centerX > 0.6 × width | Red LEDs. |
| No face | Empty list | LEDs off; no box is indexed. |

[All demo programs](./index.md)
