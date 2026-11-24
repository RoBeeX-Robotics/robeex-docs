---
orderPriority: 7
---

# 📐 Tilt-Corrected Altimeter

This Blockly program performs the following actions:

* **Read sensors:** Obtain the downward range in centimeters and the roll/pitch angles in degrees.
* **Compensation:** Calculate **height = range × cos(roll) × cos(pitch)**.
* **Compare:** Print both raw range and estimated vertical height every **0.2 seconds**.

## How it works

With motors disarmed, hold the drone above a horizontal flat surface and gently tilt it. The formula assumes a sensor aligned with the drone’s downward axis and a reading that has not already been tilt-corrected. For example, a 100 cm range at 30° roll and 0° pitch gives about 86.6 cm vertical height. Blockly’s cosine block uses degrees. The program only calculates when 0 < range < 400 cm and both absolute angles are below 45°. Geometry can reduce tilt-related error under these assumptions; it does not guarantee better accuracy on uneven surfaces or with invalid measurements.

## Blocks used in this program

* [Sensors — Get Distance To Ground](../../references/block-categories/sensors.md#get-distance-to-ground)
* [Sensors — Get Attitude](../../references/block-categories/sensors.md#get-attitude)
* [Math](../../references/block-categories/math.md)

## Program Code

Saved program name: **Tilt-Corrected Altimeter**.

![📐 Tilt-Corrected Altimeter](/assets/blockly-programming/demos/tilt-corrected-altimeter.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/tilt-corrected-altimeter.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Range filter | 0 < range < 400 cm | Demo input window. |
| Angle filter | Absolute roll and pitch < 45° | Limit the demonstration to modest tilts. |
| Formula | h = d × cos(roll) × cos(pitch) | Project the range onto vertical. |
| Refresh interval | 0.2 s | Compare raw and corrected values. |

[All demo programs](./index.md)
