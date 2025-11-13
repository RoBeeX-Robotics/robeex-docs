---
orderPriority: 70
---

# Device Initial Activation (Mandatory OTA Update)

After initial assembly and setup, the RoBeeX AI drone **must be activated by the owner** upon first power-up. This process automatically performs a mandatory Over-The-Air (OTA) firmware update.

::: warning
**CRITICAL REQUIREMENT:** This activation and update step is **required** for the device to be functional and cleared for flight.
:::

::: warning
**NETWORK REQUIREMENT:** The RoBeeX drone **only supports** connection to Wi-Fi access points operating on the **`2.4 GHz frequency band`**. It is incompatible with 5 GHz Wi-Fi networks.
:::

::: tip
**Process Overview:** This step will activate and update the drone to the latest firmware. Afterward, you must calibrate the IMU for stable flight.
:::

---

## 📋 Prerequisites

Before starting the activation process, ensure the following conditions are met:

1.  **RoBeeX App Installed:** You have successfully installed the RoBeeX App on your mobile or desktop device. (Refer to **"Install Application"** page).
2.  **Account Logged In:** You have successfully created and logged into your RoBeeX account within the app.
3.  **Internet Access:** Your device has an active internet connection.
4.  **Wi-Fi Credentials**: You must know the SSID (Network Name) and Password of the Wi-Fi network, which must operate on the **`2.4 GHz frequency band`**, that the drone will use for activation.
5.  **Battery Level:** **WARNING:** The drone's battery must be charged to **at least 50%** before starting the activation or update process.

---

## 1. Generating the Activation QR Code

The drone connects to your Wi-Fi using a generated QR code.

1.  Open the RoBeeX App and click the **"Connect to RoBeeX"** yellow button.
2.  Click the **"+ Add New Device"** yellow button.
3.  In the prompt, enter your home or network Wi-Fi Access Point Credentials:
    * Enter the Wi-Fi Network **SSID** (Name).
    * Enter the **Wi-Fi Password**.
4.  Click the **"Generate QR Code"** yellow button.
    * A unique QR code will now appear on your screen. **Keep this code visible.**

---

## 2. Drone Activation and Update

This process links the drone to your account and updates its internal components.

1.  **Power On:** Turn on your RoBeeX drone.
2.  **Wait for Scan QR Code:** Wait until the drone's **RGB LEDs are blinking blue** color. This indicates the drone is ready for activating.
3.  **Scan the Code:** Hold the screen displaying the QR code **approximately 30cm (12 inches) in front of the RoBeeX camera.**
4.  **Wait for Scan Success:** Keep the code steady until the drone's RGB LEDs begin the multi-step update sequence.

### Firmware Update Sequence

As the activation and update occur, the four RGB LEDs will change color, indicating progress:

| LED | Initial Status | In Progress | Final Status | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **RGB1** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | QR Code Scanned Successfully |
| **RGB2** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | Wi-Fi Connection Established |
| **RGB3** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | STM32 Microcontroller Update Done (May take a few minutes) |
| **RGB4** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | ESP32 Update Done (May take a few minutes) |
---

## 3. Post-Activation Steps

Once all four LEDs are **Solid Green**, the RoBeeX drone is activated and updated to the latest firmware.

1.  **Confirmation:** The activation is complete when the **RGB LEDs begin flashing red and yellow.**
2.  **IMU Calibration:** The flashing red and yellow LEDs confirm that the drone now needs sensor calibration.
3.  **Next Step:** Please refer to the [**IMU Calibration**](/user-manuals/robeex-ai-drone/imu-calibration) page immediately to calibrate the Accelerometer and Gyroscope for stable flight.

### 🎥 Video Guide: How to activate the drone, update the firmware and calibrate the IMU

<iframe width="560" height="315" src="https://www.youtube.com/embed/zoyU0KEwPt0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

