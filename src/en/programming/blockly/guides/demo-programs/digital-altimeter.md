---
orderPriority: 8
---

# 📏 Digital Altimeter

This Blockly program performs the following actions:

* **Read the sensor:** Get the downward distance-to-ground reading in **centimeters**.
* **Display:** Print valid readings to the console every **0.2 seconds**.
* **Invalid readings:** Print `Range unavailable` when the value is outside the demo’s accepted range.

## How it works

Connect the drone and keep its motors disarmed. Hold it level above a flat surface, with the downward sensor unobstructed. This example accepts values greater than 0 and less than 400 cm; that is a software filter for the demo, not a claim about the sensor’s usable range. The reading is distance along the sensor beam. It approximates vertical height when the sensor points straight down. Press Stop to finish.

## Blocks used in this program

* [Sensors — Get Distance To Ground](../../references/block-categories/sensors.md#get-distance-to-ground)
* [Text](../../references/block-categories/text.md)
* [Timing](../../references/block-categories/timing.md)

## Program Code

Saved program name: **Digital Altimeter**.

![📏 Digital Altimeter](/assets/blockly-programming/demos/digital-altimeter.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/digital-altimeter.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Measurement | Distance to ground, cm | Read the downward range sensor. |
| Accepted values | 0 < distance < 400 cm | Reject unavailable/out-of-window values. |
| Refresh interval | 0.2 s | Update the console. |
| Flight commands | None | Use as a stationary sensor demo. |

[All demo programs](./index.md)
