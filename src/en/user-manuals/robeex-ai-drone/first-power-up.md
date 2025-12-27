---
orderPriority: 70
---

# ⚡ First Power-Up: Device Initial Activation and Setup (Mandatory OTA Update)

After assembly and initial setup, the device **`must be activated by the owner`** during the first power-on.
This process includes the following:

- Automatic Over-the-Air (OTA) updates for the aircraft
- Registering the device in the name of the builder/manufacturer

::: warning
**CRITICAL REQUIREMENT:** This activation and update step is **required** for the device to be functional and cleared for flight.
:::

::: tip
**Process Overview:** This step will activate and update the drone to the latest firmware. Afterward, you must calibrate the IMU for stable flight.
:::


## 📋 Prerequisites

Before starting the activation process, ensure the following conditions are met:


::: info
1.  **RoBeeX App Installed:** You have successfully installed the RoBeeX App on your mobile or desktop device. (Refer to [Install Application](./install-application.md) page). 
2.  **Account Logged In:** You have successfully created and logged into your RoBeeX account within the app.To learn how to create and manage your account, continue reading this **[Account Management](./account-managment.md)** page.
3.  **Internet Access:** Your device has an active internet connection.
4.  **Wi-Fi Credentials**: You must know the SSID (Network Name) and Password of the Wi-Fi network, which must operate on the **`2.4 GHz frequency band`**, that the drone will use for activation.
5.  **Battery Level:** **WARNING:** The drone's battery must be charged to **at least 50%** before starting the activation or update process.
:::

## 1. 🌐 Initial Setup & Generating the Activation QR Code

RoBeeX requires an internet connection to perform automatic OTA updates and device registration. Therefore, you must provide your Wi-Fi credentials to RoBeeX using a QR code.

---

::: tip
#### 🎥 Important Activation Guide
Please **watch this entire video carefully** and follow the steps exactly as shown for the activation, firmware update, and IMU calibration of your RoBeeX AI Drone. The detailed instructions below serve as a quick recheck and precise reference to ensure the process is completed accurately.
:::

### 🎥 Video Guide: How to activate the drone, update the firmware and calibrate the IMU

<iframe width="560" height="315" src="https://www.youtube.com/embed/zoyU0KEwPt0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 📝 Step-by-Step QR Code Generation

1.  Open the RoBeeX App and click the prominent yellow **"Connect to RoBeeX"** button on the main dashboard.
2.  On the "Select a device you want to use" screen, click the **"+ Add New Device"** button.
3.  In the connection prompt, enter the credentials for your local Wi-Fi network (the network the drone will connect to):
    * Enter the Wi-Fi Network **SSID** (Name).
    * Enter the **Wi-Fi Password**.
4.  Click the **"Generate QR Code"** button.
    * A unique QR code containing your network credentials will appear on the screen. **Keep this code visible** for the next step of the physical drone activation process.

::: warning
Ensure your Wi-Fi has **Internet Access** 🌐
:::

::: warning
Your Wi-Fi Access point should operating on the **`2.4 GHz frequency band`**

RoBeeX AI Drone **`only supports 2.4GHz Wi-Fi network`** and **`not 5GHz`**
:::

## 2. 🚀 Drone Activation and Update

This process links the drone to your account and updates its internal components.

1.  **Power On:** Turn on your RoBeeX drone.
2.  **Wait for Scan QR Code:** Wait until the drone's **RGB LEDs are blinking blue**. This color indicates the drone is ready for activation and QR code scanning.
3.  **Scan the Code:** Hold the screen displaying the QR code **approximately 30 cm (12 inches) in front of the RoBeeX camera.**
4.  **Wait for Scan Success:** Keep the code steady until the drone's RGB LEDs begin the multi-step update sequence.

### 🔄 Firmware Update Sequence

As the activation and update occur, the four RGB LEDs will change color, indicating progress:

| LED | Initial Status | In Progress | Final Status | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **RGB1** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | QR Code Scanned Successfully |
| **RGB2** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | Wi-Fi Connection Established |
| **RGB3** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | STM32 Microcontroller Update Done (May take a few minutes) |
| **RGB4** | ⚫ Off | 🟢🔴 Blinking Green/Red | 🟢 **Solid Green** | ESP32 Update Done (May take a few minutes) |


## 3. ✅ Post-Activation Steps

Once all four LEDs are **Solid Green**, the RoBeeX drone is activated and updated to the latest firmware.

1.  **Confirmation:** The activation is complete when the **RGB LEDs begin flashing red and yellow.**
2.  **IMU Calibration:** The flashing red and yellow LEDs confirm that the drone now requires sensor calibration.
3.  **Next Step:** Please refer to the [**IMU Calibration**](./imu-calibration.md) page **immediately** to calibrate the Accelerometer and Gyroscope for stable and safe flight.
