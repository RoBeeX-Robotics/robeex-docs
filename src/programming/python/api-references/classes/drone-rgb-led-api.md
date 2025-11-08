# Class <b>`DroneRGBLedApi`</b> { #DroneRGBLedApi }
Handles interactions with Drone RGB LEDs
## Methods:
### \_\_init\_\_
```python
def __init__(
	rc_api
)
```
Initialize self.  See help(type(self)) for accurate signature.

##### Params:
- <b>rc_api: Any</b>

<br>

---

<br>


### set\_brightness
```python
def set_brightness(
	brightness: int
)
```
Sets the brightness of the LEDs.


##### Params:
- <b>brightness: int</b> - Brightness percentage (0-100).

<br>

---

<br>


### set\_color\_by\_motor\_number
```python
def set_color_by_motor_number(
	r: int,
	g: int,
	b: int,
	index: robeex_ai_drone_api.rgb_led_api.MotorNumber
)
```
Sets the color for a specific LED index.


##### Params:
- <b>r: int</b> - Red intensity (0-255).
- <b>g: int</b> - Green intensity (0-255).
- <b>b: int</b> - Blue intensity (0-255).
- <b>index: [<b>`MotorNumber`</b>](/programming/python/api-references/enums/motor-number#MotorNumber)</b> - LED index (-1 for disable, 0 for all, 1-4 for specific motors).

<br>

---

<br>


### set\_full\_color
```python
def set_full_color(
	r: int,
	g: int,
	b: int
)
```
Sets the same color for all LEDs.


##### Params:
- <b>r: int</b> - Red intensity (0-255).
- <b>g: int</b> - Green intensity (0-255).
- <b>b: int</b> - Blue intensity (0-255).

<br>

---

<br>


### set\_mode
```python
def set_mode(
	mode: robeex_ai_drone_api.rgb_led_api.RGBMode
)
```
Sets the mode of the LEDs (AUTO or MANUAL).


##### Params:
- <b>mode: [<b>`RGBMode`</b>](/programming/python/api-references/enums/rgb-mode#RGBMode)</b> - The mode to set (RGBMode.AUTO or RGBMode.MANUAL).

<br>

---

<br>


