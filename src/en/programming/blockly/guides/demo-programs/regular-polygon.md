---
orderPriority: 13
---

# 🔷 Draw a Regular Polygon

This Blockly program performs the following actions:

* **Setup:** Set `sides` to **4** and `sideCm` to **60**.
* **Drawing:** Repeat a forward move followed by a **360 ÷ sides** clockwise turn once per side.
* **Return:** After the final side and turn, return Home and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

The default settings draw a square. Change `sides` to an integer of at least 3 to draw another regular polygon. Use the exterior turn angle, `360 ÷ sides`, rather than the polygon’s interior angle. Each forward command follows the new heading. Choose a side length and number of sides that fit the available flight area.

## Blocks used in this program

* [Flying — Move Forward](../../references/block-categories/flying.md#move-forward)
* [Flying — Turn Cw](../../references/block-categories/flying.md#turn-cw)
* [Loops](../../references/block-categories/loops.md)
* [Math](../../references/block-categories/math.md)

## Program Code

Saved program name: **Draw a Regular Polygon**.

![🔷 Draw a Regular Polygon](/assets/blockly-programming/demos/regular-polygon.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/regular-polygon.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Maintain the drawing height. |
| sides | 4 | Number of moves and turns. |
| sideCm | 60 cm | Length of each side. |
| Turn angle | 360 ÷ sides = 90° | Exterior turn for a square. |

[All demo programs](./index.md)
