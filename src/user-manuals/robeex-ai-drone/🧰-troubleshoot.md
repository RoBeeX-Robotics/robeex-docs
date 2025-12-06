



# 🧰 Troubleshooting Guide

This guide addresses common issues encountered during setup, charging, connection, and flight of the RoBeeX AI Drone.

## I. Power and Charging Issues

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **Drone won't power on.** | Battery fully discharged or disconnected. | 1\. Ensure the battery cable is securely fastened to the main board connector. 2. Charge the battery for at least 15 minutes using the official cable. | 
| **Charging is slow or LED remains Red indefinitely.** | Charger insufficient (less than 2A) or faulty cable. | 1\. Use a standard USB wall charger rated **5V @ 2A or higher** (e.g., a modern smartphone charger). 2. Verify the charging cable is the official one provided with the drone. | 
| **Drone immediately lands or LED flashes Red (🔴) after takeoff.** | Battery is critically low (under 10% charge) or **`Damaged/Faulty Battery`**. | 1\. Check battery level using the switch (SW1). Charge the battery fully until the charging LED turns **🟢 Green** (approx. 30 minutes). 2. **Inspect the Battery:** Check for swelling, tears, or physical damage. **`Immediately replace`** any damaged LiPo battery, `as continued use is unsafe.` | 

## II. Connectivity and App Issues

### A. Wi-Fi Connection Failures

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **Cannot find the "ROBEEX_AI_DRONE\_..." Wi-Fi network.** | Drone is not powered on or is stuck in an in update mode. | 1\. Power cycle the drone. 2. Ensure the drone is powered on and wait 15 seconds for the Wi-Fi access point to initialize. | 
| **App connects but immediately disconnects (connection drops).** | Interference from mobile data or VPN. | **CRITICAL:** Go to your device's settings and **TURN OFF Mobile Data and VPN** before attempting to connect to the drone's Wi-Fi network. The drone requires a direct link. | 
| **Drone Wi-Fi shows "No Internet" on phone.** | Normal behavior. | This is expected. The drone's network provides local control only, not internet access. Ignore the "No Internet" warning and open the RoBeeX App. | 

### B. Mandatory First Power-Up Activation (Q6) Failed

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **Activation process fails (LEDs don't turn off after scanning QR code).** | Low battery, unstable Wi-Fi, or incorrect QR code scan distance. | 1\. Ensure battery is **above 50%**. 2. Verify your home Wi-Fi is 2.4 GHz (5 GHz is not supported). 3. Hold the QR code screen **exactly 30 cm (12 inches)** from the drone's camera and ensure the image is clear and bright. | 

## III. Flight Stability and Sensor Calibration

### A. Sensor Error (Red/Yellow Flashing Lights)

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **The drone's RGB LEDs flash alternating RED (🔴) and YELLOW (🟡).** | IMU (Inertial Measurement Unit) sensor error. The drone is physically unstable or has experienced a hard landing. **Flight is disabled.** | **Immediate Calibration Required (See Q11 in FAQ):** 1. Place the drone on a perfectly level surface. 2. Go to **Settings** → **Calibration** in the app. 3. Perform Gyroscope Calibration first, then perform the full 6-point Accelerometer Calibration. 4. **Power cycle the drone** after calibration is confirmed "Status: OK !". | 


### B. Unstable Flight and Drifting

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **Drone drifts heavily in horizontal axis (forward/backward or left/right) during hovering.** | Improper IMU calibration or obstructed Optical Flow Sensor. | 1\. Recalibrate the IMU (Gyroscope and Accelerometer) on a flat, stable surface (see above). 2. **Check the Optical Flow Sensor:** Located on the bottom of the drone, this lens provides position holding. Clean the lens gently with a microfiber cloth to remove dust or smudges. | 
| **Drone drifts or has height instability in vertical axis.** | Obstructed LiDAR/Distance Sensor. | **Check the Vertical Distance Sensor (LiDAR):** The sensor window on the bottom of the drone measures altitude. Carefully clean the sensor lens/window to ensure accurate distance readings and stable altitude holding. | 
| **Drone wobbles or oscillates aggressively.** | **Motor damage**, Propeller damage, or incorrect propeller installation. | 1\. Check all four propellers for chips, bends, or cracks. Replace any damaged propellers. 2. **Inspect Motor Function:** If oscillation persists, carefully check each motor for binding or grinding noises, or if one motor feels noticeably hotter or weaker than the others, indicating internal damage. 3. Verify all propellers are installed correctly (CW vs. CCW) according to the arrows on the drone's body (Q2 in FAQ). | 


## IV. Motor and Propeller Issues

| Problem | Cause(s) | Solution | 
| :--- | :--- | :--- | 
| **One or more motors will not spin/arm.** | Propeller obstruction or motor damage. | 1\. Check if the propeller is catching on the motor guard or if debris is stuck in the motor. 2. Ensure the propeller is seated correctly and not too tight. 3. If the motor still won't spin, the motor may need replacement. | 
| **Drone flips immediately upon takeoff.** | Propeller installation is incorrect (e.g., all CCW or CW, or diagonally swapped). | **CRITICAL:** Immediately disarm the drone. Check that motors M1 and M3 have **CCW** propellers and motors M2 and M4 have **CW** propellers (as indicated by the arrows on the drone body). | 
| **Video stream is choppy or freezes during flight.** | High camera settings or low signal quality. | 1\. Go to **Settings > Drone Settings > Camera**. 2. Reduce the **Resolution (to 640x480)** and increase the **Compression Ratio (to 30%)**. This prioritizes stream speed over image quality for better control/AI performance. |