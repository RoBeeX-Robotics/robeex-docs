# Class <b>`DroneNavAPI`</b> { #DroneNavAPI }
Handles drone movements
## Methods:
### \_\_init\_\_
```python
def __init__(
	rc_api,
	debug=False
)
```
Initialize self.  See help(type(self)) for accurate signature.

##### Params:
- <b>rc_api: Any</b>
- <b>debug: Any = False</b>

<br>

---

<br>


### arm
```python
def arm()
```
Arms the drone and sets it to the READY_TO_FLY mode.


<br>

---

<br>


### disarm
```python
def disarm()
```
Disarms the drone and disables offboard mode.


<br>

---

<br>


### go\_backward
```python
def go_backward(
	meter: float,
	wait_until_done: bool = True
)
```
Moves the drone backward by a specified distance.


##### Params:
- <b>meter: float</b> - The distance to move backward in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### go\_forward
```python
def go_forward(
	meter: float,
	wait_until_done: bool = True
)
```
Moves the drone forward by a specified distance.


##### Params:
- <b>meter: float</b> - The distance to move forward in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### go\_left
```python
def go_left(
	meter: float,
	wait_until_done: bool = True
)
```
Moves the drone to the left by a specified distance.


##### Params:
- <b>meter: float</b> - The distance to move left in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### go\_right
```python
def go_right(
	meter: float,
	wait_until_done: bool = True
)
```
Moves the drone to the right by a specified distance.


##### Params:
- <b>meter: float</b> - The distance to move right in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### kill
```python
def kill()
```
Sends the drone into FAILSAFE mode.


<br>

---

<br>


### land
```python
def land(
	wait_until_done: bool = True
)
```
Commands the drone to land by setting the altitude to 0.


##### Params:
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### set\_altitude
```python
def set_altitude(
	altitude_meter: float,
	wait_until_done: bool = True
)
```
Sets the drone's altitude to a specific value.


##### Params:
- <b>altitude_meter: float</b> - The target altitude in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### set\_mode
```python
def set_mode()
```
Sets the drone to the DISABLE mode.


<br>

---

<br>


### set\_position\_2d
```python
def set_position_2d(
	x_m: float,
	y_m: float,
	wait_until_done: bool = True
)
```
Sets the drone's position to specific coordinates.


##### Params:
- <b>x_m: float</b> - The target X coordinate in meters.
- <b>y_m: float</b> - The target Y coordinate in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### set\_position\_3d
```python
def set_position_3d(
	x_m: float,
	y_m: float,
	z_m: float,
	wait_until_done: bool = True
)
```
Sets the drone's position to specific coordinates.


##### Params:
- <b>x_m: float</b> - The target X coordinate in meters.
- <b>y_m: float</b> - The target Y coordinate in meters.
- <b>z_m: float</b> - The target Z coordinate in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### set\_yaw
```python
def set_yaw(
	yaw_in_rad: float,
	wait_until_done: bool = True
)
```
Sets the drone's yaw to a specific angle.


##### Params:
- <b>yaw_in_rad: float</b> - The target yaw angle in radians.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### takeoff
```python
def takeoff(
	altitude_meter: float,
	tolerance: float = 0.1,
	wait_until_done: bool = True
)
```
Commands the drone to take off to a specified altitude.


##### Params:
- <b>altitude_meter: float</b> - The target altitude in meters.
- <b>tolerance: float = 0.1</b> - The altitude tolerance in meters.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### turn\_cw
```python
def turn_cw(
	rotation_in_rad: float,
	wait_until_done: bool = True
)
```
Rotates the drone clockwise by a specified angle.


##### Params:
- <b>rotation_in_rad: float</b> - The angle to rotate in radians.
- <b>wait_until_done: bool = True</b> - Whether to wait until the setpoint is reached.

<br>

---

<br>


### update\_offboard\_state
```python
def update_offboard_state(
	**kwargs
)
```
Updates the offboard state and sends the corresponding command.


##### Params:
- <b>kwargs: Any</b> - Key-value pairs to update the offboard state.

<br>

---

<br>


### wait\_for\_latest\_setpoint
```python
def wait_for_latest_setpoint(
	pos_tolerance: float = 0.15,
	yaw_tolerance: float = 0.2617993877991494,
	ignore_axis: robeex_ai_drone_api.nav_api.IgnoreAxis = <IgnoreAxis.NONE: 0>
)
```
Waits for the drone to reach the setpoint within the specified tolerances.


##### Params:
- <b>pos_tolerance: float = 0.15</b> - The position tolerance in meters.
- <b>yaw_tolerance: float = 0.2617993877991494</b> - The yaw tolerance in radians.
- <b>ignore_axis: [<b>`IgnoreAxis`</b>](../enums/ignore-axis#IgnoreAxis) = 0</b> - Axes to ignore during setpoint checks (bit mask).

<br>

---

<br>


