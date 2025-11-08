# Class <b>`RobeexAIDrone`</b> { #RobeexAIDrone }
The main class to interact with the Robeex AI Drone.
## Properties:
### rc: [<b>`RcApi`</b>](/programming/python/api-references/classes/rc-api#RcApi)
Remote Control API
used for interaction with the drone
## Methods:
### VideoCapture
```python
def VideoCapture()
```
Creates and returns a `UDPVideoStream` instance


##### Returns: [<b>`UDPVideoStream`</b>](/programming/python/api-references/classes/udp-video-stream#UDPVideoStream)
 UDP Video Stream instance

<br>

---

<br>


### \_\_init\_\_
```python
def __init__(
	drone_ip: str = '172.168.1.128',
	uuid: Optional[str] = None,
	debug=False
)
```
Creates a RobeexAIDrone instance.

##### Params:
- <b>drone_ip: str = 172.168.1.128</b>
- <b>uuid: Optional = None</b>
- <b>debug: Any = False</b>

<br>

---

<br>


### cleanup
```python
def cleanup()
```
Cleans up after the interaction with drone is done
- Resets RGB to AUTO Mode
- Land if drone altitude is higher then 0.1m
- Disarm the drone if it's armed


<br>

---

<br>


### wait\_for\_telemetry
```python
def wait_for_telemetry()
```
Waits until telemetry data is received from the drone.

##### Returns:
```python
Literal[True]
```

<br>

---

<br>


