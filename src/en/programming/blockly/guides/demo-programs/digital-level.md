---
orderPriority: 9
---

# ⚖️ Calibrated Digital Level

This Blockly program performs the following actions:

* **Initial calibration:** Average **20** roll and pitch samples, with **0.05 seconds** between samples.
* **Measurement:** Subtract those reference angles from each new reading and print the roll/pitch offsets in degrees.
* **Indicator:** Show **green** when both absolute offsets are below **3°**, otherwise show **red**. Refresh every **0.1 seconds**.

## How it works

Connect the drone, keep the motors disarmed, and place it still on a level surface before pressing Play. Keep it still throughout the initial sampling period of about one second. This sets a reference for the program; it does not replace the drone’s flight calibration. After calibration, gently tilt the disarmed drone to see the values and LED color change. The program repeats until you press Stop and contains no takeoff block.

## Blocks used in this program

* [Sensors — Get Attitude](../../references/block-categories/sensors.md#get-attitude)
* [Lights](../../references/block-categories/lights.md)
* [Math](../../references/block-categories/math.md)

## Program Code

Saved program name: **Calibrated Digital Level**.

![⚖️ Calibrated Digital Level](/assets/blockly-programming/demos/digital-level.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/digital-level.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Reference samples | 20 | Average the initial attitude. |
| Sample interval | 0.05 s | Collect the reference while still. |
| Level threshold | Absolute roll and pitch < 3° | Green within both limits. |
| Refresh interval | 0.1 s | Update the console and LEDs. |

[All demo programs](./index.md)
