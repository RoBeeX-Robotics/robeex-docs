---
orderPriority: 6
---

# 🏭 Pipeline Inspection Route

This Blockly program performs the following actions:

* **Route:** Store four Home-relative inspection points in a list.
* **Inspection:** Fly at **80 cm**, show **blue** while moving, then **green** for **1 second** at each point.
* **Return:** Fly Home, land, and restore automatic LED mode.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

Arrange a model pipeline beneath the route `[[0, 0], [0, 60], [60, 60], [60, 120]]`, with coordinates in centimeters. Each pair contains X at index 0 and Y at index 1. The program follows these stored targets; it does not detect a real pipe or its condition. Change the list to match another model route while keeping the flight path clear.

## Blocks used in this program

* [Lists](../../references/block-categories/lists.md)
* [Flying — Set Position](../../references/block-categories/flying.md#set-position)
* [Lights](../../references/block-categories/lights.md)

## Program Code

Saved program name: **Pipeline Inspection Route**.

![🏭 Pipeline Inspection Route](/assets/blockly-programming/demos/pipeline-inspection.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/pipeline-inspection.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Inspection height. |
| Route points | 4 | Describe the pipeline’s turns. |
| Blue LEDs | Travel | Indicate movement between targets. |
| Green LEDs | 1 s per point | Simulate an inspection stop. |

[All demo programs](./index.md)
