# Class <b>`UDPVideoStream`</b> { #UDPVideoStream }
## Methods:
### \_\_init\_\_
```python
def __init__(
	host: str,
	port: int,
	chunk_size: int = 1324,
	timeout: int = 2,
	debug=False
)
```
Initializes the UDP video stream.


##### Params:
- <b>host: str</b> - The IP address of the UDP server.
- <b>port: int</b> - The port of the UDP server.
- <b>chunk_size: int = 1324</b> - The size of each UDP packet.
- <b>timeout: int = 2</b> - The timeout for the socket in seconds.
- <b>debug: Any = False</b>

<br>

---

<br>


### get\_fps
```python
def get_fps()
```
Returns the current FPS of the stream.


##### Returns:
```python
Optional[float]
```
 The FPS as a float, or None if not available.

<br>

---

<br>


### isOpened
```python
def isOpened()
```
Checks if the stream is open.


##### Returns:
```python
None
```
 True if the stream is open, False otherwise.

<br>

---

<br>


### open
```python
def open(
	frame_size: robeex_ai_drone_api.video_api.FrameSize = <FrameSize.SIZE_640x480: 8>,
	jpeg_quality: int = 45
)
```
Opens the UDP socket and starts the stream.


##### Params:
- <b>frame_size: [<b>`FrameSize`</b>](../enums/frame-size#FrameSize) = FrameSize.SIZE_640x480</b> - The frame size as a FrameSize enum value.
- <b>jpeg_quality: int = 45</b> - The JPEG compression quality (0 to 100).
##### Returns:
```python
Literal[True]
```
 True if the stream is open, Throws otherwise.

<br>

---

<br>


### read
```python
def read()
```
Reads a frame from the UDP stream.


##### Returns:
```python
Union[Tuple[Literal[False], Literal[None]], Tuple[Literal[True], Literal[cv2.Mat]]]
```
 A tuple (success, frame), where success is a boolean indicating

<br>

---

<br>


### release
```python
def release()
```
Releases the UDP socket and stops the stream.


<br>

---

<br>


