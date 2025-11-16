---
orderPriority: 64
---



# ⚙️ Settings Menu Reference

The **Settings** menu, accessible via the gear icon on the main dashboard, is where you configure drone behavior, manage safety parameters, calibrate sensors, and view system information. The menu is divided into four main tabs.



## 🚁 Drone Settings Tab

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



## 🛠️ Calibration Tab

This tab is dedicated to maintaining sensor accuracy. **All calibrations should be performed on a level, stable surface.** (Refer to the **"IMU Calibration"** page for detailed steps).

| Sensor | Status Indicator | Action | Purpose |
| :--- | :--- | :--- | :--- |
| **Accelerometer** | Green `Status: OK !` | `Calibrate` Button | Calibrates the sensor that measures the drone's linear acceleration and tilt. |
| **Gyro** | Green `Status: OK !` | `Calibrate` Button | Calibrates the sensor that measures the drone's angular velocity (rotation). |
| **Bottom Lidar Range Finder** | Green `Status: OK !` | (No Button) | Status check for the sensor used for precision altitude holding and safe landing. |



## 👤 Account Tab

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


## ℹ️ Info Tab

This tab provides critical version and build information about the application.

| Data Field | Example Value | Description |
| :--- | :--- | :--- |
| **RoBeeX App Logo** | (Image of the RoBeeX logo) | Visual identifier of the application brand. |
| **Version Info** | `0.45.0` | The user-facing software version number of the installed RoBeeX App. |
| **Commit Hash** | `74aab33` | Internal code reference (useful for developer troubleshooting). |
| **Build Timestamp** | `2025/10/26, 11:05:57` | The date and time the current app build was compiled. |