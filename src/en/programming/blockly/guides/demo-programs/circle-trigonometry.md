---
orderPriority: 11
---

# 📐 Circle with Sine and Cosine

This Blockly program performs the following actions:

* **Setup:** Set `radiusCm` to **50** and take off to **80 cm**.
* **Starting point:** Move to **X = radiusCm, Y = 0** relative to Home.
* **Circle:** Increase `angle` from **30° to 360°** in **30°** steps and visit each calculated coordinate, then return Home and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

Home is the center of this circle. Calculate `X = radiusCm × cos(angle)` and `Y = radiusCm × sin(angle)`. Blockly’s sine and cosine blocks accept degrees, so no radians conversion is needed in the workspace. Absolute position blocks keep the circle centered on Home, while yaw stays unchanged. The 12 target-to-target segments approximate a circle rather than commanding a continuous curve.

## Blocks used in this program

* [Flying — Set Position](../../references/block-categories/flying.md#set-position)
* [Math](../../references/block-categories/math.md)
* [Loops](../../references/block-categories/loops.md)

## Program Code

Saved program name: **Circle with Sine and Cosine**.

![📐 Circle with Sine and Cosine](/assets/blockly-programming/demos/circle-trigonometry.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/circle-trigonometry.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Drawing height. |
| radiusCm | 50 cm | Distance from Home to the circle. |
| Angle step | 30° | 12 segments per revolution. |
| Coordinates | X = R cos θ; Y = R sin θ | Calculate each Home-relative target. |

[All demo programs](./index.md)
