---
orderPriority: 11
outline: 2
---
# Flying

Controls related to takeoff, movement, positioning, and landing of the drone.

## Flight
### Block
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

### Description
Make the drone fly up to a height, run some actions, then land safely.


### Params
- <b>HEIGHT: Number</b> - The height in centimeters to fly before doing the next actions.
- <b>CODE: Blocks</b> - The actions or blocks to run while the drone is flying at that height.


## Set Altitude
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="216.45709228515625" height="35">
<g data-id="2QgsU%QeU^qe~_9-:3np" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 148.1548614501953  v 5  H 178.1548614501953  V 5  H 178.1548614501953  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 178.1548614501953  V 21  V 25  h -148.6548614501953  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 148.1548614501953  v 5  H 178.1548614501953  V 5  H 178.1548614501953  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 178.1548614501953  V 21  V 25  h -148.6548614501953  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 177.6548614501953  H 177.6548614501953  M 178.1548614501953,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Rv=O_r*~m2BC,pAjw/?5" transform="translate(171.1548614501953, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">60</text></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">✛&nbsp;Set&nbsp;Altitude&nbsp;(cm)&nbsp;to</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Sets the drone’s altitude (height) in centimeters.


### Params
- <b>HEIGHT: Number</b> - The height the drone should fly to, in centimeters.


## Move Forward
### Block
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

### Description
Moves the drone forward by a certain distance in centimeters.


### Params
- <b>DISTANCE: Number</b> - The distance to move forward, in centimeters.


## Move Backward
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="220.50039672851562" height="46">
<g data-id="WJ`5r4(bRB)hVffP/Eu0" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 189.50039672851562  v 5  H 219.50039672851562  V 5  H 219.50039672851562  V 32  H 219.50039672851562  V 32  V 36  h -190.00039672851562  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 130.2540283203125,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 189.50039672851562  v 5  H 219.50039672851562  V 5  H 219.50039672851562  V 32  H 219.50039672851562  V 32  V 36  h -190.00039672851562  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 130.2540283203125,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 219.00039672851562  H 219.00039672851562  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 169.05624389648438,5.5  v 27  h -38.302215576171875  M 130.2540283203125,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="~)@X5QZi[I1{CsWyuPdC" transform="translate(123.2540283203125, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">↓&nbsp;Backward&nbsp;for</text></g><g transform="translate(178.55624389648438,10)"><text class="blocklyText" x="0" y="13">(cm)</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Moves the drone backward by a certain distance in centimeters.


### Params
- <b>DISTANCE: Number</b> - The distance to move backward, in centimeters.


## Move Right
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="196.02560424804688" height="46">
<g data-id="v5o:X[lVDq=BLLg%y[6g" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 165.02560424804688  v 5  H 195.02560424804688  V 5  H 195.02560424804688  V 32  H 195.02560424804688  V 32  V 36  h -165.52560424804688  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 105.77923583984375,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 165.02560424804688  v 5  H 195.02560424804688  V 5  H 195.02560424804688  V 32  H 195.02560424804688  V 32  V 36  h -165.52560424804688  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 105.77923583984375,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 194.52560424804688  H 194.52560424804688  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 144.58145141601562,5.5  v 27  h -38.302215576171875  M 105.77923583984375,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="74]t~kX,kefgbDZSFFjD" transform="translate(98.77923583984375, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">→&nbsp;Right&nbsp;for</text></g><g transform="translate(154.08145141601562,10)"><text class="blocklyText" x="0" y="13">(cm)</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Moves the drone to the right by a certain distance in centimeters.


### Params
- <b>DISTANCE: Number</b> - The distance to move right, in centimeters.


## Move Left
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="185.448486328125" height="46">
<g data-id="%Vr;/U1iG{00U^wWy^uw" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 154.448486328125  v 5  H 184.448486328125  V 5  H 184.448486328125  V 32  H 184.448486328125  V 32  V 36  h -154.948486328125  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 95.20211791992188,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 154.448486328125  v 5  H 184.448486328125  V 5  H 184.448486328125  V 32  H 184.448486328125  V 32  V 36  h -154.948486328125  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 95.20211791992188,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 183.948486328125  H 183.948486328125  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 134.00433349609375,5.5  v 27  h -38.302215576171875  M 95.20211791992188,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="-{q$A-*AODds}m$PWd@t" transform="translate(88.20211791992188, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">←&nbsp;Left&nbsp;for</text></g><g transform="translate(143.50433349609375,10)"><text class="blocklyText" x="0" y="13">(cm)</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Moves the drone to the left by a certain distance in centimeters.


### Params
- <b>DISTANCE: Number</b> - The distance to move left, in centimeters.


## Change Position
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="506.33526611328125" height="46">
<g data-id="9-/$rEvg@Cfa(M@U_T8W" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 475.33526611328125  v 5  H 505.33526611328125  V 5  H 505.33526611328125  V 32  H 505.33526611328125  V 32  V 36  h -475.83526611328125  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 162.0211639404297,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z M 332.18043518066406,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 475.33526611328125  v 5  H 505.33526611328125  V 5  H 505.33526611328125  V 32  H 505.33526611328125  V 32  V 36  h -475.83526611328125  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 162.0211639404297,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z M 332.18043518066406,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 504.83526611328125  H 504.83526611328125  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 200.82337951660156,5.5  v 27  h -38.302215576171875  M 162.0211639404297,10  m -5,14.3  l 3.68,-2.1  M 370.98265075683594,5.5  v 27  h -38.302215576171875  M 332.18043518066406,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="~Dhy1%KL1+ds[QwU2^lI" transform="translate(155.0211639404297, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">25</text></g></g><g data-id="k*qMJL[R~/w/kod25UW:" transform="translate(325.18043518066406, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">25</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">✛&nbsp;Go&nbsp;to&nbsp;Right&nbsp;(cm):</text></g><g transform="translate(210.32337951660156,10)"><text class="blocklyText" x="0" y="13">,&nbsp;Forward&nbsp;(cm):</text></g><g transform="translate(380.48265075683594,10)"><text class="blocklyText" x="0" y="13">at&nbsp;the&nbsp;same&nbsp;time</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Moves the drone right and forward at the same time by given distances.


### Params
- <b>X: Number</b> - Distance to move right, in centimeters.
- <b>Y: Number</b> - Distance to move forward, in centimeters.


## Go To Home
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="142.76535034179688" height="35">
<g data-id="OgE/gv:1*D*DeqSx3H_F" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 111.76535034179688  v 5  H 141.76535034179688  V 5  H 141.76535034179688  V 21  H 141.76535034179688  V 21  V 25  h -112.26535034179688  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 111.76535034179688  v 5  H 141.76535034179688  V 5  H 141.76535034179688  V 21  H 141.76535034179688  V 21  V 25  h -112.26535034179688  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 141.26535034179688  H 141.26535034179688  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">✛&nbsp;Go&nbsp;to&nbsp;🏠&nbsp;Home</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Makes the drone go back to its home position (0, 0).



## Set Position 
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="509.97039794921875" height="46">
<g data-id="k~qTWU7]UtM5ONnt^NTD" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 478.9703826904297  v 5  H 508.9703826904297  V 5  H 508.9703826904297  V 32  H 508.9703826904297  V 32  V 36  h -479.4703826904297  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 144.1159210205078,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z M 314.2751922607422,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 478.9703826904297  v 5  H 508.9703826904297  V 5  H 508.9703826904297  V 32  H 508.9703826904297  V 32  V 36  h -479.4703826904297  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 144.1159210205078,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z M 314.2751922607422,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 38.302215576171875  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 508.4703826904297  H 508.4703826904297  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 182.9181365966797,5.5  v 27  h -38.302215576171875  M 144.1159210205078,10  m -5,14.3  l 3.68,-2.1  M 353.07740783691406,5.5  v 27  h -38.302215576171875  M 314.2751922607422,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="*sLJXZPd}8CD.F=I-I~^" transform="translate(137.1159210205078, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g data-id=":(jQ_fr)n,#PEavm{x)/" transform="translate(307.2751922607422, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 36.302215576171875  v 5  H 44.302215576171875  V 5  H 44.302215576171875  V 21  H 44.302215576171875  V 21  V 25  h -36.302215576171875  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.802215576171875  H 43.802215576171875  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26.302215576171875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">50</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">✛&nbsp;Go&nbsp;Right&nbsp;(cm):</text></g><g transform="translate(192.4181365966797,10)"><text class="blocklyText" x="0" y="13">,&nbsp;Forward&nbsp;(cm):</text></g><g transform="translate(362.57740783691406,10)"><text class="blocklyText" x="0" y="13">relative&nbsp;to&nbsp;🏠&nbsp;Home</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Moves the drone to a specific position relative to home.


### Params
- <b>X: Number</b> - Distance to move right, in centimeters.
- <b>Y: Number</b> - Distance to move forward, in centimeters.


## Set Yaw CW
### Block
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

### Description
Rotates the drone to face a specific direction (clockwise) in degrees.


### Params
- <b>DEG: Number</b> - The angle to turn clockwise, in degrees.


## Turn CW
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="252.291748046875" height="46">
<g data-id=":_l}vyvKhzLCm}YFxS|G" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 221.29176330566406  v 5  H 251.29176330566406  V 5  H 251.29176330566406  V 32  H 251.29176330566406  V 32  V 36  h -221.79176330566406  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 175.0843048095703,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.151107788085938  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 221.29176330566406  v 5  H 251.29176330566406  V 5  H 251.29176330566406  V 32  H 251.29176330566406  V 32  V 36  h -221.79176330566406  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 175.0843048095703,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.151107788085938  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 250.79176330566406  H 250.79176330566406  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 205.73541259765625,5.5  v 27  h -30.151107788085938  M 175.0843048095703,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="0vJuGkD7C|PtX2,?1x+*" transform="translate(168.0843048095703, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 28.151107788085938  v 5  H 36.15110778808594  V 5  H 36.15110778808594  V 21  H 36.15110778808594  V 21  V 25  h -28.151107788085938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 28.151107788085938  v 5  H 36.15110778808594  V 5  H 36.15110778808594  V 21  H 36.15110778808594  V 21  V 25  h -28.151107788085938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 35.65110778808594  H 35.65110778808594  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="18.151107788085938" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">5</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">↻&nbsp;Turn&nbsp;Clockwise&nbsp;for</text></g><g transform="translate(215.23541259765625,10)"><text class="blocklyText" x="0" y="13">deg</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Turns the drone clockwise by a number of degrees.


### Params
- <b>DEG: Number</b> - The number of degrees to turn clockwise.


## Turn CCW
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="312.541259765625" height="46">
<g data-id="Y$eyniIRWLZ(wQUY*U7Q" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#b75c5c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 281.541259765625  v 5  H 311.541259765625  V 5  H 311.541259765625  V 32  H 311.541259765625  V 32  V 36  h -282.041259765625  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 235.33380126953125,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.151107788085938  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#e57373" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 281.541259765625  v 5  H 311.541259765625  V 5  H 311.541259765625  V 32  H 311.541259765625  V 32  V 36  h -282.041259765625  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 235.33380126953125,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.151107788085938  v -27 z"></path><path class="blocklyPathLight" stroke="#ed9d9d" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 311.041259765625  H 311.041259765625  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 265.9849090576172,5.5  v 27  h -30.151107788085938  M 235.33380126953125,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id=";N,s{[~a|fl{9`;!5=xn" transform="translate(228.33380126953125, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 28.151107788085938  v 5  H 36.15110778808594  V 5  H 36.15110778808594  V 21  H 36.15110778808594  V 21  V 25  h -28.151107788085938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 28.151107788085938  v 5  H 36.15110778808594  V 5  H 36.15110778808594  V 21  H 36.15110778808594  V 21  V 25  h -28.151107788085938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 35.65110778808594  H 35.65110778808594  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="18.151107788085938" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">5</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">↺&nbsp;Turn&nbsp;Counter&nbsp;Clockwise&nbsp;for</text></g><g transform="translate(275.4849090576172,10)"><text class="blocklyText" x="0" y="13">deg</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Turns the drone counterclockwise by a number of degrees.


### Params
- <b>DEG: Number</b> - The number of degrees to turn counterclockwise.
