---
orderPriority: 16
---

# 🧭 XYZ and Relative Flight

This Blockly program performs the following actions:

* **Takeoff:** Rise to **80 cm** and perform four separate **50 cm** moves: forward, backward, right, and left.
* **Two-axis movement:** Add **40 cm right and 40 cm forward** in one command.
* **Altitude:** Climb to **100 cm**, return horizontally to Home, descend to **80 cm**, and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

In these flight blocks, X is right, Y is forward, and altitude increases upward. Distances are in centimeters. Forward/Backward/Left/Right follow the drone’s heading; the two-axis `Go to Right … Forward … at the same time` block adds offsets along the fixed Home axes. They agree while the heading is unchanged, but behave differently after a yaw turn. `Go to Home` changes horizontal position only; the separate altitude block changes height.

## Blocks used in this program

* [Flying — Flight](../../references/block-categories/flying.md#flight)
* [Flying — Change Position](../../references/block-categories/flying.md#change-position)
* [Flying — Set Altitude](../../references/block-categories/flying.md#set-altitude)

## Program Code

Saved program name: **XYZ and Relative Flight**.

![🧭 XYZ and Relative Flight](/assets/blockly-programming/demos/coordinate-flight.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/coordinate-flight.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Initial altitude | 80 cm | Start the flight. |
| Directional moves | 50 cm each | Explore both horizontal axes. |
| Diagonal offset | X = 40, Y = 40 cm | Change both horizontal coordinates. |
| Upper altitude | 100 cm | Explore the vertical axis. |

[All demo programs](./index.md)
