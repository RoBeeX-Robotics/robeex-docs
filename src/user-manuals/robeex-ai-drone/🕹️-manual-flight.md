---
orderPriority: 65
---


# 🕹️ Manual Flight Control

Once your drone is fully activated and calibrated, you can begin manual flight operations using the RoBeeX App interface.

## ⚠️ Pre-Flight Requirements & Safety Checks

Before launching your drone, **STOP** and ensure you have completed the following essential setup steps and safety checks:

* **App Installation & Account:** Ensure the app is installed and you are logged into your account.
* **Drone Activation:** Confirm the drone has completed its mandatory OTA update.
* **IMU Calibration:** Ensure you have completed the IMU (Accelerometer and Gyroscope) calibration following activation.
* **🔋 Battery Check:** **The battery must be fully charged (100%).** Do not fly below 30% charge.
* **⚙️ Propeller Check:** Inspect all propellers for damage (cracks, bends, nicks) and ensure they are **securely mounted** to the motor shafts.
* **🛡️ Propeller Guards:** **Install the propeller guards** for safety, especially when flying indoors or close to obstacles.

---

## 🛑 Critical Flight Safety Warnings

::: danger
* **NEVER Fly Over People:** **Do not fly** the drone over the heads of humans, children, or pets. Maintain a safe horizontal distance.
* **Propeller Hazard:** **NEVER** insert your fingers or any foreign object into the propellers while they are spinning or during flight.
* **Hot Motors:** The motors will become **`VERY HOT`** after every flight. **`Do not touch the motors`** immediately after landing to prevent burns.
* **EMERGENCY KILL BUTTON:** The large red **"`KILL`"** button is a critically important emergency stop feature that immediately cuts power to all motors in any condition. **Only use the KILL button in an emergency to prevent injury to people or catastrophic damage to property.**
:::

---

## 🚀 The Flight Interface

The flight interface provides your live video feed, virtual joysticks, and critical telemetry data.

### 📊 Telemetry and Status Bar

| Indicator | Range | Description | Low Battery Warning |
| :--- | :--- | :--- | :--- |
| **Wi-Fi Icon** | Strength Bars | Indicates the strength of the Wi-Fi connection between the drone and the app. | N/A |
| **Battery Icon** | 0% to 100% | Indicates the remaining battery charge level. | **30%:** Mobile device/tablet gets slow haptic feedback. **<15%:** Haptic feedback becomes intense, signalling immediate landing. |
| **Y (Yaw)** | Degrees | Heading rotation of the drone in degrees, relative to the takeoff direction. | N/A |
| **D (Distance)** | Meters (m) | Horizontal distance from the **Home Point** (takeoff location). | N/A |
| **H (Height)** | Meters (m) | Height of the drone relative to the surface directly beneath it (measured by the Lidar Range Finder). | N/A |

### 🧭 Virtual Joystick Controls

The drone is controlled via two virtual joysticks (left and right circles).

| Virtual Joystick | Axis Movement | Function | Action |
| :--- | :--- | :--- | :--- |
| **Left Stick** | Vertical (Throttle) | **Altitude (Ascend/Descend)** | Up Arrow (⬆️) to Ascend, Down Arrow (⬇️) to Descend |
| **Left Stick** | Horizontal (Yaw) | **Rotation (Turning)** | Left/Right Arrows (↩️, ↪️) to Rotate (Yaw) Counter-Clockwise/Clockwise |
| **Right Stick** | Vertical (Pitch) | **Forward/Backward** | Up/Down Arrows (⬆️, ⬇️) to fly Forward/Backward |
| **Right Stick** | Horizontal (Roll) | **Side-to-Side (Strafe)** | Left/Right Arrows (⬅️, ➡️) to fly Left/Right |

---

## 3. 📸 Camera and Gallery Functions

### Flight Control Buttons (Left Side)

| Button | Icon | Function | Notes |
| :--- | :--- | :--- | :--- |
| **Back Button** | Arrow Left | Returns to the previous screen or main dashboard. | |
| **Gallery Access** | Picture/Mountain | Opens the in-app media gallery to view saved files. | |
| **Video Record** | Video Camera | Toggles video recording on/off. | During recording, a **Stop** button and a **recording time** counter appear below the camera view. |
| **Photo Capture** | Shutter | Takes a single still photograph. | The number in a red circle below the Gallery button counts up with every photo taken. |
| **Flashlight** | Lightbulb | Toggles the Bottom Flash Light LED on/off. | The brightness is set in the Settings menu. |



## 🚦 Takeoff and Landing

The RoBeeX App uses dedicated on-screen buttons to safely initiate automatic takeoff and landing. Both functions require a **Press and Hold** confirmation to prevent accidental activation.

### ⬆️ Automatic Takeoff

1.  **Preparation:** Place the drone on a **flat, level, and clear** surface.
2.  **Initiation:** Tap the **"Auto Takeoff"** button (<img src="/assets/take-off-small.png" style="display: inline; width: 40px; height: 40px; vertical-align: text-bottom;">) on the right side of the flight screen.

3.  **Confirmation Pop-up:** A pop-up window will appear, displaying a large **"Take Off"** button. (See image below).

<image width="700" height="100" src="/assets/take-off-dialog.png"></image>

4.  **Execution:** **Press and hold** the central **"Take Off"** button **until the yellow circle indicator is complete** (the yellow circle around the button fills up).
    * The drone will automatically start its motors and ascend to a safe altitude of **0.5 meters (50 cm)**, where it will hover.

::: warning
**Takeoff Space:** Avoid taking off in confined spaces or directly above crowds to ensure the drone has clear access to the air.
:::

### ⬇️ Automatic Landing

1.  **Positioning:** Fly the drone back to the desired landing area, ensuring the surface is flat and clear of obstacles.
2.  **Initiation:** Tap the **"Auto Land"** button (<img src="/assets/landig-small.png" style="display: inline; width: 40px; height: 40px; vertical-align: text-bottom;">) on the right side of the flight screen.
3.  **Confirmation Pop-up:** A pop-up window will appear, displaying a large **"Land"** button. (See image below).

<image width="700" height="100" src="/assets/landing-dialog.jpg"></image>

4.  **Execution:** **Press and hold** the central **"Land"** button to begin the procedure.
    * The drone will automatically descend, reduce motor speed, and **shut off the motors immediately upon contact with the ground.**




## 🖼️ Gallery Menu

The **Gallery** menu, accessible from the main dashboard or the flight screen, allows you to view and manage media stored on the drone.

* **Video Tab:** Displays all recorded video files, including duration (e.g., `00:04`).
* **Pictures Tab:** Displays all captured photo files.


# ⚙️ Settings Menu Reference

The **Settings** menu, accessible via the gear icon on the main dashboard, is where you configure drone behavior, manage safety parameters, calibrate sensors, and view system information. The menu is divided into four main tabs.

---

## 1. 🚁 Drone Settings Tab

This tab controls the hardware configuration and flight limits.

### Camera

| Setting | Description | Control Type |
| :--- | :--- | :--- |
| **Resolution** | Defines the image and video resolution of the drone's camera (e.g., `800x600`). Lower resolution uses less bandwidth and storage. | Dropdown Selector |
| **Compression Ratio** | Controls the compression level for captured media. A lower ratio (e.g., 35%) means higher quality but larger file sizes. | Slider (0% to 100%) |

### Safety

| Setting | Description | Control Type |
| :--- | :--- | :--- |
| **Max Altitude (cm)** | Sets the absolute maximum height the drone is allowed to fly. The limit is **300 cm (3 meters)** above the surface below the drone at any given moment during flight. | Slider |
| **Max Distance (cm)** | Sets the maximum horizontal range the drone can fly from the **Home Point** (point of takeoff/activation). The limit is **800 cm (8 meters)**. | Slider |
| **Emergency Kill Button** | **CRITICAL:** When enabled, allows for immediate motor shut-off via a designated button/stick command. **It is highly recommended to keep this Enabled.** | Toggle Switch |

### Bottom Flash Light LED

| Setting | Description | Control Type |
| :--- | :--- | :--- |
| **Default Brightness** | Controls the intensity of the drone's bottom-facing LED light, typically used for low-light landing and visibility. | Slider (e.g., `100 %`) |

---

## 2. 🛠️ Calibration Tab

This tab is dedicated to maintaining sensor accuracy. **All calibrations should be performed on a level, stable surface.** (Refer to the **"IMU Calibration"** page for detailed steps).

| Sensor | Status Indicator | Action | Purpose |
| :--- | :--- | :--- | :--- |
| **Accelerometer** | Green `Status: OK !` | `Calibrate` Button | Calibrates the sensor that measures the drone's linear acceleration and tilt. |
| **Gyro** | Green `Status: OK !` | `Calibrate` Button | Calibrates the sensor that measures the drone's angular velocity (rotation). |
| **Bottom Lidar Range Finder** | Green `Status: OK !` | (No Button) | Status check for the sensor used for precision altitude holding and safe landing. |

---

## 3. 👤 Account Tab

This section allows the user to view and manage their RoBeeX account profile.

| Field | Description |
| :--- | :--- |
| **Your Profile** | Displays the user's avatar. |
| **Email*** | The registered email address for the RoBeeX account. |
| **First Name*** | The user's registered first name. |
| **Last Name*** | The user's registered last name. |
| **Birth Date** | The user's registered date of birth. |
| **Gender** | The user's registered gender. |
| **Log Out** | **(Red Button)** Used to sign out of your RoBeeX account within the application. |

---

## 4. ℹ️ Info Tab

This tab provides critical version and build information about the application.

| Data Field | Example Value | Description |
| :--- | :--- | :--- |
| **RoBeeX App Logo** | (Image of the RoBeeX logo) | Visual identifier of the application brand. |
| **Version Info** | `0.45.0` | The user-facing software version number of the installed RoBeeX App. |
| **Commit Hash** | `74aab33` | Internal code reference (useful for developer troubleshooting). |
| **Build Timestamp** | `2025/10/26, 11:05:57` | The date and time the current app build was compiled. |