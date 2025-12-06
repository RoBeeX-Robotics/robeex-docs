---
orderPriority: -1
---

# ❓ Frequently Asked Questions (FAQ)

## ⚙️ I. Technical Specifications & Assembly

### Q1: What are the general specifications of the RoBeeX AI Drone?

A: The RoBeeX is a programmable educational quadcopter designed *exclusively* for **indoor flight**.

| Parameter | Value | Notes | 
| :--- | :--- | :--- | 
| **Type** | Quadcopter | Designed for STEM, coding, and AI projects. **For indoor use only.** | 
| **Weight** | 90 g | Below the 250g registration threshold in many regions. | 
| **Dimensions** | **180 x 180 x 40 mm** | The size is 180mm x 180mm x 40mm. | 
| **Motor Type** | Coreless DC | | 
| **Camera** | 3MP sensor | Video resolution up to 1024x768. | 
| **Frequency** | WiFi 2.4GHz | Used for control and video telemetry. | 

### Q2: How do I know which propeller to install on each motor?

A: Propellers must match the motor's spin direction (CW or CCW). Follow the arrows near the motor dampers on the main board:

* **Motors M1 and M3** rotate **Counter-Clockwise (CCW)**. Install the **CCW propeller**.
* **Motors M2 and M4** rotate **Clockwise (CW)**. Install the **CW propeller**.



> **Critical Warning:** Ensure the propeller hub is fully seated on the motor shaft until the end of the shaft is visible or flush with the top of the hub. Failure to do so risks propeller ejection during flight, which is a significant safety and functional risk.

## 🔋 II. Battery & Charging

### Q3: What type of battery does RoBeeX use, and how long does it last?

A:

* **Battery Type:** LiPo 3.8V 1S 1100mAh.
* **Flight Time:** Up to **8 minutes** per charge.
* **Charging Time:** Approximately **under 30 minutes** from empty to full.

### Q4: How do I charge the battery safely and handle disposal?

A: Use **only** the provided official charging cable and a USB Type-A charger rated **5V @ 2A or above**.

* **Charging Status (LEDs):** **🔴 Red light** indicates charging; **🟢 Green light** indicates fully charged. **Immediately disconnect** when the light turns green.

> **Battery Safety Warning:** Never leave the battery charging unattended. Never use or charge swollen, leaky, or damaged batteries, as they pose a severe fire risk. **NEVER dispose of the drone or its battery by throwing them into water or fire.**

### Q5: How do I check the current battery level without the app?

A: Briefly **press and release the switch (SW1)** on the main board. The RGB1–RGB4 LEDs will light up to show the charge level:

| LED Status | Charge Level | 
| :---: | :--- | 
| **🟢🟢🟢🟢** | 100% | 
| **🟢🟢🟢⚫** | 75% | 
| **🟢🟢⚫⚫** | 50% | 
| **🟢⚫⚫⚫** | 25% | 
| **🔴🔴🔴🔴** | 5% (Critical Low) | 



## 📶 III. Initial Setup, Connection & Firmware Update

### Q6: What is the mandatory First Power-Up Activation process?

A: The drone requires a mandatory Over-The-Air (OTA) firmware update and activation on first power-up.

1.  **Prerequisites:** Battery **above 50%**. You **must** use a stable **2.4 GHz Wi-Fi internet connection** for this process.
2.  **Enter Update Mode:** Press and hold the **Switch Key** for **>3 seconds** until all 4 RGB LEDs flash **🔵 blue**.
3.  **Generate QR Code:** In the RoBeeX App (**Connect to RoBeeX**), enter your 2.4 GHz Wi-Fi credentials (SSID/Password) to generate the QR code.
4.  **Scan Code:** Hold the QR code screen **\~30 cm (12 inches) in front of the RoBeeX camera** until the drone's LEDs turn OFF.
5.  **Update Sequence:** LEDs will flash alternating **🔴 Red** and **🟢 Green** during the update.
6.  **Completion:** The process is complete when all LEDs turn **solid 🟢 green**.

### Q7: How do I connect the RoBeeX App to the drone?

A: You connect directly to the drone's Wi-Fi access point:

1.  **Power On** the drone.
2.  Go to your device's Wi-Fi Settings (⚙️).
3.  Select the drone's network (e.g., **ROBEEX\_AI\_DRONE\_XXXXXX**). The default password is **`1234567890`**.
4.  Return to the **RoBeeX Remote App**. The status should show **"Connected"**.

### Q8: My device won't connect. What should I check?

> **CRITICAL PREREQUISITE:** You **MUST** ensure the following are **TURNED OFF** on your mobile device or laptop, as they interfere with the direct Wi-Fi link:
>
> * **VPN** (Virtual Private Network).
> * **Mobile Data**.

### Q9: Where can I download the RoBeeX App?

A: The application is currently available for Android and Windows desktop environments. You can download the latest versions from our website:

* 👉 **[https://robeex.com/downloads/](https://robeex.com/downloads/)**

> **Note on OS Support:** Support for iOS and macOS devices is currently under development and will be available soon.

## 🎯 IV. Calibration, Troubleshooting, and Safety

### Q10: Why are the RGB LEDs flashing alternating RED and YELLOW (🔴🟡)?

A: This is a **CRITICAL WARNING** indicating a sensor error. The **IMU (Inertial Measurement Unit - Accelerometer and Gyroscope) needs immediate calibration.** Do not attempt to fly until this is resolved.

### Q11: How do I calibrate the IMU (Gyroscope and Accelerometer)?

A: Calibration is performed in the app via **Settings** → **Calibration** tab.

1.  **Gyroscope Calibration:** Place the drone on a **perfectly level, flat, and stable surface**. In the app, click **"Calibrate"** under the Gyro section and wait for the "Status: OK !" confirmation.
2.  **Accelerometer Calibration:** Click **"Calibrate"** under the Accelerometer section and **carefully follow the on-screen instructions** to position the drone at each required angle (front, back, left side, right side, inverted).



3.  **Post-Calibration:** **Always power cycle the drone** (turn off and back on) after a successful calibration to apply the new settings before flight.

### Q12: What are the environmental and motor safety warnings?

> **Safety Warnings (Read Carefully)**
>
> * **Indoor Use Only:** The RoBeeX AI Drone is designed **only for indoor flight**.
> * **Weather Restriction:** **NEVER** fly the drone outdoors or in adverse weather conditions.
> * **Propeller Hazard:** **NEVER** insert fingers or any foreign object into the propellers while they are spinning.
> * **Hot Motors Warning:** The motors will become **`VERY HOT`** after every flight. **DO NOT TOUCH THE MOTORS** immediately after landing to prevent severe burns.

## 🕹️ V. Flight Controls and Interface

### Q13: What movements do the two virtual joysticks control?

A: The drone uses **Mode 2** controls:

| Stick | Axis | Control Function | Stick Action | Drone Movement | 
| :--- | :--- | :--- | :--- | :--- | 
| **Left Stick** | Vertical | **Throttle** | Push Up / Pull Down | Ascend / Descend (Altitude) | 
| **Left Stick** | Horizontal | **Yaw** | Push Left / Push Right | Rotate Left (CCW) / Rotate Right (CW) | 
| **Right Stick** | Vertical | **Pitch** | Push Up / Pull Down | Forward / Backward (Translational) | 
| **Right Stick** | Horizontal | **Roll** | Push Left / Push Right | Left / Right (Lateral/Strafe) | 



### Q14: How do I perform an Automatic Takeoff or Landing?

A: Both functions require a **Press and Hold** confirmation to prevent accidental activation:

* **Takeoff:** Tap the **"Auto Takeoff"** button, and then **Press and hold** the central **"Take Off"** button in the pop-up until the indicator circle is complete.
* **Landing:** Tap the **"Auto Land"** button, and then **Press and hold** the central **"Land"** button in the pop-up.

### Q15: What methods can I use to perform an Emergency Motor Kill?

A: There are two immediate ways to shut off the motors in an emergency:

1.  **Software Kill Switch:** Press the large red **"`KILL`"** button in the flight interface.
2.  **Physical Disarm:** Quickly and firmly **catch the drone mid-air and rapidly reverse its orientation (turn it upside down)**. This action triggers a safety protocol that immediately cuts power to all motors.

> **Emergency Kill Usage:** Use the KILL methods **ONLY** in an emergency to prevent injury or catastrophic damage.

## 📸 VI. Camera and Media Management

### Q20: How can I optimize camera settings for image processing or AI tasks?

A: You can adjust resolution and compression in the **Settings > Drone Settings > Camera** tab:

> **Recommended AI Settings:** For Computer Vision tasks that require high responsiveness, use **Resolution: `640x480`** and **Compression Ratio: `30%`**.
>
> Selecting a lower resolution and higher compression ratio generally results in a faster live video stream (**higher FPS and lower latency**).

### Q21: How do I control the Bottom Flash LED?

A: The Bottom Flash LED aids in low-light landing.

* **Manual Toggle:** Use the **Bottom Flash LED Button** in the flight interface.
* **Brightness Control:** Configure the default brightness level (15% minimum to 100% maximum) in the **Settings Menu**. Setting maximum brightness will significantly **reduce overall flight time**.
* **Advanced Control:** The LED can be programmed using **Blockly, Python, and Arduino**.

## 👤 VII. Account and App Information

### Q22: Do I need an account to use the drone?

A: Yes, a RoBeeX account is **mandatory** for drone activation, firmware updates, sensor calibration, camera control, and accessing programming features.

### Q23: How do I log in or create a new account?

A: Click the **"`Login/Register`"** yellow button on the main app screen.

* **Login:** Enter your registered Email and Password.
* **Registration:** Click the "Don't have an account?" link and fill out the required information (Email, Password, Name, Birth Date, Gender).

### Q24: Where can I find the app version number for support?

A: App version, build hash, and build timestamp information are available in the **Settings > Info Tab**.