# 🐂 Bull Fighting Program (Blockly Demo)

This Blockly program is designed to instruct a drone to perform the following actions:

* **Face Detection:** The drone continuously checks its camera feed to detect whether a human face is present.
* **Detection Countdown:** Once a face is detected, the drone counts **30 camera frames** so it can make sure that a face is actually presented, which is approximately **1 second**.
* **Forward Movement:** After the countdown is completed, the drone flies forward for a distance of **250 cm** (centimeters).
* **180° Turn:** After moving forward, the drone performs a **180-degree yaw turn** to face the opposite direction.

::: warning
⚠️ Use this program with caution. The drone may move toward you at high speed.
:::

## Blocks used in this program
The drone continuously checks its camera feed to detect whether a human face is present.

### [Detect Face Block](../../references/block-categories/machine-vision.md#detect-face)
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="206.4271240234375" height="35">
<g data-id="4xel{,G@;tj_IWYzvF?8" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#0e2a45" d=" m 8,0  h 15  l 6,4  3,0  6,-4  h 167.42710876464844  v 5  H 205.42710876464844  V 5  H 205.42710876464844  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 205.42710876464844  V 21  V 25  h -167.92710876464844  l -6,4  -3,0  -6,-4  h -14.5  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#123456" d=" m 8,0  h 15  l 6,4  3,0  6,-4  h 167.42710876464844  v 5  H 205.42710876464844  V 5  H 205.42710876464844  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 205.42710876464844  V 21  V 25  h -167.92710876464844  l -6,4  -3,0  -6,-4  h -14.5  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#597189" d=" m 8,0  m 0.5,0.5  H 22.5  h 0.5  l 6,4  3,0  6,-4  H 204.92710876464844  H 204.92710876464844  M 205.42710876464844,5  m -5,14.3  l 3.68,-2.1  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g transform="translate(18,5)"><text class="blocklyText" x="0" y="13">Detect&nbsp;faces&nbsp;from&nbsp;image</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### [If Conditions](../../references/block-categories/logic.md#controls-if)
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 70px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="68.90524291992188" height="70">
<g data-id="~/Yx,z*=B8-cvZi#:4?u" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#3d79cc" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 37.905242919921875  v 5  H 67.90524291992188  V 5  H 67.90524291992188  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 2  H 67.90524291992188  V 26  H 67.90524291992188  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 67.90524291992188  H 67.90524291992188  V 50  V 60  h -38.405242919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#4c97ff" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 37.905242919921875  v 5  H 67.90524291992188  V 5  H 67.90524291992188  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 2  H 67.90524291992188  V 26  H 67.90524291992188  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 67.90524291992188  H 67.90524291992188  V 50  V 60  h -38.405242919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#3373cc" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 67.40524291992188  H 67.40524291992188  M 67.90524291992188,5  m -5,14.3  l 3.68,-2.1  M 37.905242919921875,50  m 1.9895923599143455,-1.9895923599143455 a 8.5 8.5 0 0,0 6.0104076400856545,2.4895923599143455  l 21.5,0  H 67.40524291992188  M 0,60  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g class="blocklyIconGroup blockly-icon-mutator" transform="translate(10, 5)"><rect class="blocklyIconShape" rx="4" ry="4" height="16" width="16"></rect><path class="blocklyIconSymbol" d="m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"></path><circle class="blocklyIconShape" r="2.7" cx="8" cy="8"></circle></g><g transform="translate(37,5)"><text class="blocklyText" x="0" y="13">if</text></g><g transform="translate(10,31)"><text class="blocklyText" x="0" y="13">do</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### [Flight](../../references/block-categories/flying.md#flight)
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 84px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="174.37542724609375" height="84">
<g data-id="=nF#N46ZqV:X=_#_vY5V" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc461b" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 106.07322692871094  v 5  H 136.07322692871094  V 5  H 136.07322692871094  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 136.07322692871094  V 25  H 50  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 136.07322692871094  H 136.07322692871094  V 54  H 136.07322692871094  V 70  H 136.07322692871094  V 70  V 74  h -106.57322692871094  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#ff5722" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 106.07322692871094  v 5  H 136.07322692871094  V 5  H 136.07322692871094  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 136.07322692871094  V 25  H 50  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 136.07322692871094  H 136.07322692871094  V 54  H 136.07322692871094  V 70  H 136.07322692871094  V 70  V 74  h -106.57322692871094  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#ff8964" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 135.57322692871094  H 135.57322692871094  M 136.07322692871094,5  m -5,14.3  l 3.68,-2.1  M 20,49  m 1.9895923599143455,-1.9895923599143455 a 8.5 8.5 0 0,0 6.0104076400856545,2.4895923599143455  l 107.57322692871094,0  H 135.57322692871094  M 0,74  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id=";7TjJl_t)?e;*$d6@GM5" transform="translate(129.07322692871094, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">80</text></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">⇈&nbsp;Flight&nbsp;to&nbsp;(cm)</text></g><g transform="translate(10,54)"><text class="blocklyText" x="0" y="13">⇊&nbsp;Land</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### [Move forward](../../references/block-categories/flying.md#move-forward)
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="209.0716552734375" height="46">
<g data-id="|}d^+ilmhtyZ2yAwO;|;" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 178.07167053222656  v 5  H 208.07167053222656  V 5  H 208.07167053222656  V 32  H 208.07167053222656  V 32  V 36  h -178.57167053222656  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 118.82530212402344,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 178.07167053222656  v 5  H 208.07167053222656  V 5  H 208.07167053222656  V 32  H 208.07167053222656  V 32  V 36  h -178.57167053222656  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 118.82530212402344,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 207.57167053222656  H 207.57167053222656  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 157.6275177001953,5.5  v 27  h -38.302215576171875  M 118.82530212402344,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="aV{;/wb/`3?[%`W$zqq5" transform="translate(111.82530212402344, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">↑&nbsp;Forward&nbsp;for</text></g><g transform="translate(167.1275177001953,10)"><text class="blocklyText" x="0" y="13">(cm)</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>


### [Set Yaw CW](../../references/block-categories/flying.md#set-yaw-cw)
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="278.398193359375" height="46">
<g data-id="J40jK_e~jEm9Dw;]0IC)" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 247.39820861816406  v 5  H 277.39820861816406  V 5  H 277.39820861816406  V 32  H 277.39820861816406  V 32  V 36  h -247.89820861816406  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 193.03964233398438,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 247.39820861816406  v 5  H 277.39820861816406  V 5  H 277.39820861816406  V 32  H 277.39820861816406  V 32  V 36  h -247.89820861816406  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 193.03964233398438,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 276.89820861816406  H 276.89820861816406  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 231.84185791015625,5.5  v 27  h -38.302215576171875  M 193.03964233398438,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="{h8y+{]%sC79(Qf`VpI," transform="translate(186.03964233398438, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">45</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">↻&nbsp;Set&nbsp;Yaw&nbsp;Clockwise&nbsp;to</text></g><g transform="translate(241.34185791015625,10)"><text class="blocklyText" x="0" y="13">deg</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

## Program Code

<img src="/assets/blockly-programming/bull-fighting.png" />

---

### Program Summary

| Parameter            | Value/Action          | Function                                                    |
| :------------------- | :-------------------- | :---------------------------------------------------------- |
| **Initial Altitude** | 150 cm | Achieve operating height. |
| **Detection Method** | Face Detection        | Detect whether a human face is present in the camera frame. |
| **Attack Delay**      | 30 frames (~1 second) | Wait for approximately 1 second after detecting a face.     |
| **Forward Movement** | 250 cm                | Fly forward for a distance of 250 cm.                       |
| **Final Movement**   | 180° Yaw              | Rotate 180 degrees to face the opposite direction.          |

<!-- <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Dbi5VJFIN7Q/" data-instgrm-version="14"></blockquote>
<script async src="//www.instagram.com/embed.js"></script> -->
