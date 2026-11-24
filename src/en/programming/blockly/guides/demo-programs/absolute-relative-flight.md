---
orderPriority: 15
---

# 🏠 Absolute vs Relative Flight

This Blockly program performs the following actions:

* **Relative commands:** Apply a **40 cm right** offset twice, producing a target **80 cm right of Home**.
* **Absolute commands:** Return Home, then request the position **40 cm right of Home** twice. The second request keeps the same target.
* **Return:** Fly back Home and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

A relative command adds an offset to the current commanded position. An absolute command selects coordinates measured from the takeoff Home point. Repeating an absolute coordinate does not add another displacement. This example keeps yaw unchanged so only the choice of origin changes. Both phases include a one-second pause at their final target.

## Blocks used in this program

* [Flying — Change Position](../../references/block-categories/flying.md#change-position)
* [Flying — Set Position](../../references/block-categories/flying.md#set-position)
* [Flying — Go To Home](../../references/block-categories/flying.md#go-to-home)

## Program Code

Saved program name: **Absolute vs Relative Flight**.

![🏠 Absolute vs Relative Flight](/assets/blockly-programming/demos/absolute-relative-flight.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/absolute-relative-flight.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Keep a common height. |
| Relative phase | 40 + 40 = 80 cm | Accumulate two offsets. |
| Absolute phase | 40 cm, then 40 cm | Select the same Home-relative target. |
| Final position | Home | Return before landing. |

[All demo programs](./index.md)
