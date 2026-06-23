---
orderPriority: 60
---


# 🔄 Firmware Update Guide

This guide details the process for updating the main drone firmware, covering the two critical processors:
* **STM32F405 (Dedicated Flight Control, Motor and Sensor Management)**
* **ESP32S3 (Main Control, Telemetry, Camera Driver, and Radio Communication)**

The update is performed using the application's QR code method.

::: warning ⚠️ Prerequisites and Safety Checks

Before starting the update process, ensure all the following conditions are met to prevent failure or damage:

* **Wi-Fi Network:** You must use a stable **2.4 GHz Wi-Fi network** (most 5 GHz networks are not compatible).
* **Proximity:** Keep your mobile device/laptop **near the RoBeeX AI Drone** and your Wi-Fi router for a strong, stable connection.
* **Battery Level:** The drone's battery charge must be **above 50%**.
* **Lighting:** The ambient lighting must be **normal and stable** to ensure the drone's camera can clearly see the generated QR code.
:::

## Step-by-Step Update Process

The update process is very similar to the initial process 

### Entering Update Mode

1.  **Enter Update Mode:** Press the **Switch Key** (located on the side of the RoBeeX) and hold it for **more than 3 seconds**.
    * **Video Guide:** See how to enter Update Mode here:
    <video src="/assets/go-to-update.webm" controls loop autoplay width="300"></video>

2.  **Verify Status:** Continue holding until all **4 RGB LEDs** on the drone begin to flash **blinky 🔵 blue**. This confirms the drone is ready to receive network configuration (See Detailed LED Status below).

### Sending Network Configuration (QR Code Scan & Download)

You can follow the exact steps you took for as the inital firmware update,

These steps are well documented at **[First Power Up](./first-power-up.md)** page.

