---
orderPriority: 12
---

# ⭕ Circle with Yaw Steps

This Blockly program performs the following actions:

* **Takeoff:** Rise to **80 cm**.
* **Circular route:** Repeat **12** times: move forward **26 cm**, then turn clockwise **30°**.
* **Finish:** Complete **360°** of turning, return Home, and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

Many short straight segments approximate a circle. The default route is a regular 12-sided polygon with a geometric radius of about 50 cm; the takeoff point lies on its edge, not at its center. This is a stepped path, and the drone can pause at each move or turn. Small segments may be comparable to the flight controller’s positioning tolerance, so the physical path may differ from the geometric shape.

## Blocks used in this program

* [Flying — Move Forward](../../references/block-categories/flying.md#move-forward)
* [Flying — Turn Cw](../../references/block-categories/flying.md#turn-cw)
* [Loops](../../references/block-categories/loops.md)

## Program Code

Saved program name: **Circle with Yaw Steps**.

![⭕ Circle with Yaw Steps](/assets/blockly-programming/demos/circle-yaw.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/circle-yaw.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Drawing height. |
| Repetitions | 12 | Number of segments. |
| Step length | 26 cm | Length of each straight segment. |
| Yaw step | 30° | 12 × 30° = 360°. |

[All demo programs](./index.md)
