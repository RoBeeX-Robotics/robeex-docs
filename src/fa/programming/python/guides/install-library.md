---
orderPriority: 2
outline: deep
---

# نصب API پایتون RoBeeX AI Drone

کتابخانه‌ی "RoBeeX AI Drone Python API" یک کتابخانه‌ی پایتون است که برای کنترل و تعامل با پهپادهای RoBeeX AI طراحی شده است. این کتابخانه قابلیت‌هایی برای ناوبری، کنترل LEDهای RGB، پخش ویدیو و دریافت داده‌های تله‌متری فراهم می‌کند.

## امکانات

- **رابط ناوبری (Navigation API)**: کنترل حرکت پهپاد، تیک‌آف، لندینگ و تنظیم موقعیت.  
- **رابط LEDهای RGB**: سفارشی‌سازی رنگ و روشنایی LEDها برای موتورها یا همه‌ی LEDها.  
- **پخش ویدیو (Video Streaming)**: پخش زنده ویدیو از دوربین پهپاد با استفاده از UDP.  
- **تله‌متری (Telemetry)**: دریافت داده‌های تله‌متری در زمان واقعی مانند موقعیت، ارتفاع، وضعیت باتری و موارد دیگر.  

## نصب  
### پیش‌نیازها

قبل از استفاده از کتابخانه باید OpenCV نصب شود
```bash
pip install opencv-python
```

### نصب با pip

```bash
pip install robeex-ai-drone-api
```

## نحوه استفاده

### مثال: پرواز پایه

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

### مثال: چشمک‌زن LEDهای RGB

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

### مثال‌های بیشتر

برای یادگیری بیشتر در مورد قابلیت‌های API، نمونه‌های بیشتر را در پوشه‌ی `examples/` بررسی کنید.

## مشارکت

از مشارکت‌ها استقبال می‌شود! در صورت تمایل می‌توانید (issues) یا (pull requests) ارسال کنید.
