---
orderPriority: 2
---

# 🚁 Face-Triggered Forward Flight

This Blockly program performs the following actions:

* **Takeoff:** Start the camera and rise to **80 cm**.
* **Confirm detection:** Count **5 consecutive frames** containing a face. A missing face resets the count.
* **Move once:** Fly forward **50 cm** only once, finish the **100-frame** loop, return Home, and land.

::: warning
The drone can move toward a face. Keep people outside the flight path; test detection and LED behavior with motors disarmed first.
:::

## How it works

The `moved` flag prevents repeated forward moves while a face remains visible. Green indicates detection before the move; blue indicates no detection or that the single move has already occurred. The 0.1-second frame delay is additional to camera and processing time, so frame counts are not an exact timer. This bounded example develops the idea in the [Bull Fighting demo](./bull-fighting.md). If no face is confirmed, it finishes the loop and lands without the forward move.

## Blocks used in this program

* [Machine Vision — Detect Face](../../references/block-categories/machine-vision.md#detect-face)
* [Flying — Move Forward](../../references/block-categories/flying.md#move-forward)
* [Logic](../../references/block-categories/logic.md)

## Program Code

Saved program name: **Face-Triggered Forward Flight**.

![🚁 Face-Triggered Forward Flight](/assets/blockly-programming/demos/face-triggered-flight.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/face-triggered-flight.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Initial operating height. |
| Confirmation | 5 consecutive face frames | Reset the counter on a miss. |
| Forward distance | 50 cm, once | Prevent repeated approaches. |
| Loop limit | 100 frames | Return and land after the loop. |

[All demo programs](./index.md)
