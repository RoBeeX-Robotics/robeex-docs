---
orderPriority: 14
---

# 🔄 Move and Turn Together

This Blockly program performs the following actions:

* **Takeoff:** Rise to **80 cm**.
* **Combined commands:** Request **60 cm forward** and a **90° clockwise yaw turn** inside `Don’t wait until flight commands are done`.
* **Completion:** Allow **3 seconds** inside the wrapper, then wait **1 second**, return Home, and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

Normally, each flight command waits for its target before the next command starts. The wrapper sends the position and yaw targets without waiting for each target separately. Keep the three-second wait inside it so later commands do not immediately replace those targets. Normal target waiting resumes after the wrapper. The resulting path depends on the drone’s response; this is a demonstration of overlapping position and yaw commands, not an exact circular trajectory.

## Blocks used in this program

* [Flying — Move Forward](../../references/block-categories/flying.md#move-forward)
* [Flying — Turn Cw](../../references/block-categories/flying.md#turn-cw)
* [Timing](../../references/block-categories/timing.md)

## Program Code

Saved program name: **Move and Turn Together**.

![🔄 Move and Turn Together](/assets/blockly-programming/demos/move-and-turn.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/move-and-turn.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Altitude | 80 cm | Initial height. |
| Position target | 60 cm forward | Select a horizontal displacement. |
| Yaw change | 90° clockwise | Turn while moving. |
| Waits | 3 s inside + 1 s outside | Give the combined command time to act. |

[All demo programs](./index.md)
