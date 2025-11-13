---
orderPriority: 55
---


# ⚙️ IMU Sensor Calibration (Accelerometer & Gyroscope)

The Inertial Measurement Unit (IMU) is critical for stable flight. **Recalibration is necessary** following a **crash**, after **hard landings**, or when the **RoBeeX app specifically requests** it.

::: warning
If the drone's **RGB LEDs start flashing alternating RED and YELLOW**, this indicates a critical sensor error and confirms that **the IMU needs immediate calibration**.
:::


## 1. Gyroscope Calibration

The Gyroscope detects the drone's rotation and angular speed. This procedure is simple and ensures zero-drift.

### Procedure

1.  **Preparation**
    * Remove all propeller guards from the aircraft.
    * Ensure the drone battery is **above 50%**.
2.  **Positioning**
    * Place the RoBeeX drone on a surface that is **perfectly level, flat, and stable** (e.g., a solid table or floor).
    * **CRITICAL:** The drone must be **perfectly still** during the calibration.
3.  **Initiation & Execution**
    * Open the RoBeeX app and navigate to **Settings Menu → Calibration → Gyro**.
    * Select **"Calibrate."**
    * Wait for the app to confirm successful completion.
4.  **Completion**
    * After receiving a success confirmation, **power cycle the drone** to apply the new settings.


## 2. Accelerometer Calibration

The Accelerometer detects the drone's tilt and linear acceleration. This procedure requires repositioning the drone multiple times.

### Procedure

1.  **Preparation**
    * Remove all propeller guards from the aircraft.
    * Ensure the drone battery is **above 50%**.
2.  **Positioning**
    * Place the RoBeeX drone on a surface that is **level, flat, and stable** away from strong magnetic interference.
3.  **Initiation**
    * Open the RoBeeX app and navigate to **Settings Menu → Calibration → Accelerometer**.
    * Select **"Calibrate."**
4.  **Calibration**
    * **Carefully follow the on-screen instructions** to position the drone at each required angle (e.g., drone on its back, left side, nose down).
    * **CRITICAL:** **Do not bump, move, or vibrate the drone** during the orientation holding process. The drone must remain perfectly still.
5.  **Completion**
    * The app will confirm when the calibration is successful.
    * After receiving a success confirmation, **power cycle the drone** to apply the new settings.


::: tip
For a visual guide on the positioning steps, please refer to the video below.
:::

### 🎥 Video Guide: How to calibrate accelerometer
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Ik9cxD2nK4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## ⚠️ Troubleshooting Tip

| Issue | Potential Cause | Solution |
| :--- | :--- | :--- |
| **Flashing Red/Yellow LEDs** | IMU sensor requires immediate calibration. | Follow the Gyroscope and Accelerometer procedures above. |
| **Calibration Failed** | Drone was bumped or moved during the process. | Repeat the procedure, ensuring the drone is absolutely still. |
| **Calibration Failed** | Strong magnetic interference nearby. | Move the entire setup to a location free of large metal objects or electronics. |