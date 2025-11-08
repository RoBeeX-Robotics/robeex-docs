# Class <b>`RcApi`</b> { #RcApi }
Remote Control API
used for interaction with the drone
## Properties:
### nav: [<b>`DroneNavAPI`</b>](/programming/python/api-references/classes/drone-nav-api#DroneNavAPI)
Handles drone movements
### rgb: [<b>`DroneRGBLedApi`</b>](/programming/python/api-references/classes/drone-rgb-led-api#DroneRGBLedApi)
Handles interactions with Drone RGB LEDs
### bottom_flash_led: [<b>`DroneBottomFlashLedApi`</b>](/programming/python/api-references/classes/drone-bottom-flash-led-api#DroneBottomFlashLedApi)
Handles interactions with Drone Bottom Flash LED
## Methods:
### \_\_init\_\_
```python
def __init__(
	drone_ip,
	drone_port,
	debug=False
)
```
Initialize self.  See help(type(self)) for accurate signature.

##### Params:
- <b>drone_ip: Any</b>
- <b>drone_port: Any</b>
- <b>debug: Any = False</b>

<br>

---

<br>


### get\_next\_telemetry\_update
```python
def get_next_telemetry_update()
```
Wait for the telemetry thread to update telemetry data and return the value.


##### Returns:
```python
None
```
 An instance of DroneTelemetry containing all telemetry data.

<br>

---

<br>


### send\_command
```python
def send_command(
	command: dict
)
```
Send a command to the server.

##### Params:
- <b>command: dict</b>

<br>

---

<br>


### start
```python
def start()
```
Start the telemetry receiving thread.


<br>

---

<br>


### stop
```python
def stop()
```
Stop the telemetry receiving thread.


<br>

---

<br>


