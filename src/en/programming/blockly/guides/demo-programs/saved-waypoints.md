---
orderPriority: 10
---

# 📋 Fly a List of Waypoints

This Blockly program performs the following actions:

* **Store positions:** Create a list of four waypoints, each containing **[X, Y, altitude]** in centimeters.
* **Visit each point:** Read its altitude, move to its Home-relative X/Y coordinates, and wait **1 second**.
* **Return:** After the list ends, return Home and land.

::: warning
The drone moves automatically. Use a clear flight area, keep people outside its path, and check that the route fits the configured distance and altitude limits.
:::

## How it works

The saved list is `[[0, 0, 80], [60, 0, 80], [60, 60, 100], [0, 60, 80]]`. This app uses zero-based list indices: item 0 is X, item 1 is Y, and item 2 is altitude. The program changes altitude before horizontal movement, so each waypoint transition has separate vertical and horizontal stages. Edit or append complete three-item lists to change the route.

## Blocks used in this program

* [Lists](../../references/block-categories/lists.md)
* [Flying — Set Position](../../references/block-categories/flying.md#set-position)
* [Flying — Set Altitude](../../references/block-categories/flying.md#set-altitude)

## Program Code

Saved program name: **Fly a List of Waypoints**.

![📋 Fly a List of Waypoints](/assets/blockly-programming/demos/saved-waypoints.jpg)

[Download the saved Blockly workspace (JSON)](/programs/blockly/saved-waypoints.json)

---

### Program Summary

| Parameter | Value/Action | Function |
| :--- | :--- | :--- |
| Waypoints | 4 | Store a route as data. |
| Coordinates | [X, Y, altitude], cm | Use the same format for every point. |
| List indices | 0, 1, 2 | Read X, Y, and altitude. |
| Pause | 1 s per waypoint | Observe arrival at each target. |

[All demo programs](./index.md)
