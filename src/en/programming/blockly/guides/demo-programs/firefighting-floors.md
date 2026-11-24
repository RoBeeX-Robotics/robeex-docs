---
orderPriority: 5
---

# 🚒 Firefighting Floor Patrol

This Blockly program performs the following actions:

* **Floor range:** Set `firstFloor` to **2** and `lastFloor` to **4**, with **30 cm** per floor.
* **Patrol:** Repeat the complete inclusive floor range **3 times**.
* **Nozzle simulation:** At each floor, show **red for 0.5 seconds**, then **blue for 1 second**. Return Home and land after the patrols.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

The default floor heights are 60, 90, and 120 cm, giving nine nozzle cycles across three passes. Each new pass returns directly to the starting floor with blue LEDs; it does not perform an extra nozzle cycle during that return. The counting block also supports a descending range when the first floor is higher than the last. Use positive integer floor numbers whose heights fit the drone’s configured limits. This is a vertical model-building simulation with LEDs; no fire detection or real nozzle is involved.

## Blocks used in this program

* [Flying — Set Altitude](../../references/block-categories/flying.md#set-altitude)
* [Loops](../../references/block-categories/loops.md)
* [Lights](../../references/block-categories/lights.md)

## Program Code

Saved program name: **Firefighting Floor Patrol**.

![🚒 Firefighting Floor Patrol](/assets/blockly-programming/demos/firefighting-floors.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/firefighting-floors.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Initial altitude | 60 cm | Default height of floor 2. |
| Floor height | 30 cm | Altitude = floor number × 30. |
| Default range | 2–4 inclusive | Visit three floors per pass. |
| Passes / nozzle cycles | 3 / 9 | Repeat the complete range three times. |

[All demo programs](./index.md)
