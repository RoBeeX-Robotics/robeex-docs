---
orderPriority: 2
outline: deep
---

# Install RoBeeX AI Drone Python API

The **RoBeeX AI Drone Python API** is a Python library designed to control and interact with RoBeeX AI Drones. It provides features for navigation, RGB LED control, video streaming, and telemetry data retrieval.  

## Features  

- **Navigation API**: Control drone movement, takeoff, landing, and position setting.  
- **RGB LED API**: Customize LED colors and brightness for individual motors or all LEDs.  
- **Video Streaming**: Stream live video from the drone's camera using UDP.  
- **Telemetry**: Retrieve real-time telemetry data such as position, altitude, battery status, and more.  

## Installation  
### Requirements

Before using the library you should install OpenCV
```bash
pip install opencv-python
```

### Install using pip

```bash 
pip install robeex-ai-drone-api
```

## Usage  

### Example: Basic Flight  

```python  
from robeex_ai_drone_api import RobeexAIDrone  
from time import sleep

def main():  
     drone = RobeexAIDrone(drone_ip="172.168.1.128")  
     drone.wait_for_telemetry()  
     drone.rc.nav.arm()  
     drone.rc.nav.takeoff(1.0)  
     sleep(5)  
     drone.rc.nav.land()  
     drone.rc.nav.disarm()  

if __name__ == "__main__":  
     main()
```

### Example: RGB LED Blinker

```python  
from robeex_ai_drone_api import RobeexAIDrone  
from time import sleep

drone = RobeexAIDrone(drone_ip="172.168.1.128")  
while True:
    drone.rc.rgb.set_full_color(255, 0, 0)  # Set all LEDs to red
    sleep(1)
    drone.rc.rgb.set_full_color(0, 0, 255)  # Set all LEDs to blue
    sleep(1)
```

### More Examples  

Explore additional examples in the `examples/` directory to learn more about the capabilities of the API.  

## Contributing  

Contributions are welcome! Feel free to submit issues or pull requests.  
