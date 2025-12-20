---
orderPriority: 70
---

# Making Your First Program

This short guide walks you through creating a simple, working Blockly program for your RoBeeX device. You'll learn how to open the editor, assemble blocks, run the program, and troubleshoot common issues.

What you'll build: a repeating LED sequence that changes color and pauses — a friendly, visible way to confirm the device is responding to your program.

## Prerequisites

- If you're not familiar with blockly we highly suggest to first read Reading the [Introduction](./introduction) section 
- Installing RoBeeX App on your computer / mobile phone
- A RoBeeX device powered on and connected to your computer / mobile phone
- The Blockly Editor open in your device (see the RoBeeX App → Programming → Blockly page).
- Basic familiarity with dragging and connecting blocks in the editor. [More Info](./blockly-editor-environment#%E2%9A%99%EF%B8%8F-managing-blocks)

If you don't yet have a device connection, you can still follow the steps in the editor and run them later when a device is available.


::: tip
You can run blockly programs with out being connect to the device, in cases where your not using device related blocks (Flight, LEDs and etc)
:::

## Quick overview of the blocks we'll use

- Start / When run block — the program entry point.
- Loops (repeat forever or repeat N times) — to repeat the sequence.
- Light / RGB LED set block — to change LED color.
- Timing / Wait block — to pause between color changes.
- (Optional) Motor / Movement blocks — to add motion after the LED sequence.

Open the `Block categories` on the left to locate these blocks. If you can't find a block, try the editor's search or check the `block-categories` reference in the docs.


## Program entry point

Every Blockly program starts running from the this block 

<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 55.25px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="157.0238037109375" height="55.25">
<g data-id="Rj1a@rI0kMB4GBq?1;()" class="blocklyDraggable" transform=""><path class="blocklyPathDark" transform="translate(1,1)" fill="#c29b00" d=" m 0,15  h 0  c 30,-15  70,-15  100,0  h 56.02378845214844  v 20  H 156.02378845214844  V 20  H 156.02378845214844  V 45  H 156.02378845214844  V 45  V 49  h -126.52378845214844  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#f2c200" d=" m 0,15  h 0  c 30,-15  70,-15  100,0  h 56.02378845214844  v 20  H 156.02378845214844  V 20  H 156.02378845214844  V 45  H 156.02378845214844  V 45  V 49  h -126.52378845214844  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#f6d44d" d=" m 0,15  m 0.5,0.5  c 17.8,-9.2  45.3,-14.9  75,-8.7  M 100.5,15.5  H 155.52378845214844  H 155.52378845214844  M 0,49  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 15.5 
"></path><g transform="translate(10,20)"><text class="blocklyText" x="0" y="13">When</text></g><g transform="translate(59.889617919921875,20)"><image height="24px" width="24px" alt="logo" xlink:href="/icon/play-arrow.svg"></image></g><g transform="translate(93.88961791992188,20)"><text class="blocklyText" x="0" y="13">Clicked</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>



## Step-by-step: build the LED sequence

1. Add a forever loop
	- From the `Loops` category, drag a `repeat while true` block and snap it under the <code>When<img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" />Clicked</code> block.
	- This keeps the LED sequence running until you stop the device.

<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 69px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="191.1834716796875" height="69">
<g data-id=",a~9rTo|Yn,3nD8U,cEZ" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#0c9770" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 100.06672668457031  v 5  H 130.0667266845703  V 5  H 130.0667266845703  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 130.0667266845703  V 25  H 67.90524291992188  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 130.0667266845703  H 130.0667266845703  V 49  V 59  h -100.56672668457031  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#0fbd8c" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 100.06672668457031  v 5  H 130.0667266845703  V 5  H 130.0667266845703  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 130.0667266845703  V 25  H 67.90524291992188  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 130.0667266845703  H 130.0667266845703  V 49  V 59  h -100.56672668457031  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#0b8e69" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 129.5667266845703  H 129.5667266845703  M 130.0667266845703,5  m -5,14.3  l 3.68,-2.1  M 37.905242919921875,49  m 1.9895923599143455,-1.9895923599143455 a 8.5 8.5 0 0,0 6.0104076400856545,2.4895923599143455  l 83.66148376464844,0  H 129.5667266845703  M 0,59  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Ol;;sqRlK@fG)=k)as|R" transform="translate(123.06672668457031, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#4280d7" d=" m 8,0  h 59.116729736328125  v 5  H 67.11672973632812  V 5  H 67.11672973632812  V 21  H 67.11672973632812  V 21  V 25  h -59.116729736328125  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#4280d7" d=" m 8,0  h 59.116729736328125  v 5  H 67.11672973632812  V 5  H 67.11672973632812  V 21  H 67.11672973632812  V 21  V 25  h -59.116729736328125  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#3373cc" style="display: none;" d=" m 8,0  m 0.5,0.5  H 66.61672973632812  H 66.61672973632812  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="49.116729736328125" class="blocklyFieldRect blocklyDropdownRect" stroke="#3373cc" fill="transparent"></rect><text class="blocklyText blocklyDropdownText" text-anchor="start" x="5" y="13">true<tspan style="fill: rgb(66, 128, 215);"> ▾</tspan></text><image style="display: none;"></image></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">repeat</text></g><g class="blocklyEditableText" transform="translate(58.99021911621094,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="58.076507568359375" class="blocklyFieldRect blocklyDropdownRect" stroke="#0b8e69" fill="transparent"></rect><text class="blocklyText blocklyDropdownText" text-anchor="start" x="5" y="13">while<tspan style="fill: rgb(15, 189, 140);"> ▾</tspan></text><image style="display: none;"></image></g><g transform="translate(10,30)"><text class="blocklyText" x="0" y="13">do</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

2. Set the first LED color
	- From the `Lights` (or `LED`) category, find the block labeled `set RGB LED to color` (or similar). Snap it inside the loop.
	- Choose a color (for example: red). Many editors provide a color picker — try `#FF0000` for red.

<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="167.78509521484375" height="35">
<g data-id="QI|hS.;%xQ=19(|~vk~d" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#1d242a" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#242d34" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#353e45" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 129.2850799560547  H 129.2850799560547  M 129.7850799560547,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Y1f3GPGYu)zx/[3$x3Mh" transform="translate(122.78507995605469, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#575f67" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.5  H 43.5  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26" class="blocklyFieldRect" stroke="#fff" style="fill-opacity: 1; display: block; fill: rgb(0, 0, 255);"></rect></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">Set&nbsp;RGB&nbsp;Color</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

3. Wait
	- From the `Timing` category, drag a `wait` block (for example `wait 500 ms` or `wait 1 second`) and place it under the LED block. Use 500–1000 ms for a visible blink.


<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="228.08599853515625" height="46">
<g data-id="?p7SIH^GjoM7b6CK6!,U" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc3333" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 197.0860137939453  v 5  H 227.0860137939453  V 5  H 227.0860137939453  V 32  H 227.0860137939453  V 32  V 36  h -197.5860137939453  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 80.00184631347656,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 46.45332336425781  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#ff4040" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 197.0860137939453  v 5  H 227.0860137939453  V 5  H 227.0860137939453  V 32  H 227.0860137939453  V 32  V 36  h -197.5860137939453  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 80.00184631347656,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 46.45332336425781  v -27 z"></path><path class="blocklyPathLight" stroke="#ff7979" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 226.5860137939453  H 226.5860137939453  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 126.95516967773438,5.5  v 27  h -46.45332336425781  M 80.00184631347656,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="V/K*0WccVfd*lJ96ddb}" transform="translate(73.00184631347656, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 44.45332336425781  v 5  H 52.45332336425781  V 5  H 52.45332336425781  V 21  H 52.45332336425781  V 21  V 25  h -44.45332336425781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 44.45332336425781  v 5  H 52.45332336425781  V 5  H 52.45332336425781  V 21  H 52.45332336425781  V 21  V 25  h -44.45332336425781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 51.95332336425781  H 51.95332336425781  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="34.45332336425781" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">500</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">Wait&nbsp;for</text></g><g transform="translate(136.45516967773438,10)"><text class="blocklyText" x="0" y="13">millisecond</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

4. Change to the next color

	- Add another `set RGB LED to color` block and choose a different color (for example: green `#00FF00`).
	- Attach a `wait` block after it.

<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="167.78509521484375" height="35">
<g data-id="QI|hS.;%xQ=19(|~vk~d" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#1d242a" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#242d34" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#353e45" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 129.2850799560547  H 129.2850799560547  M 129.7850799560547,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Y1f3GPGYu)zx/[3$x3Mh" transform="translate(122.78507995605469, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#575f67" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.5  H 43.5  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26" class="blocklyFieldRect" stroke="#fff" style="fill-opacity: 1; display: block; fill: rgb(255, 0, 0);"></rect></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">Set&nbsp;RGB&nbsp;Color</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>


<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 46px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="228.08599853515625" height="46">
<g data-id="?p7SIH^GjoM7b6CK6!,U" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc3333" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 197.0860137939453  v 5  H 227.0860137939453  V 5  H 227.0860137939453  V 32  H 227.0860137939453  V 32  V 36  h -197.5860137939453  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 80.00184631347656,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 46.45332336425781  v -27 z"></path><path class="blocklyPath" stroke="none" fill="#ff4040" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 197.0860137939453  v 5  H 227.0860137939453  V 5  H 227.0860137939453  V 32  H 227.0860137939453  V 32  V 36  h -197.5860137939453  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
 M 80.00184631347656,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 46.45332336425781  v -27 z"></path><path class="blocklyPathLight" stroke="#ff7979" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 226.5860137939453  H 226.5860137939453  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
 M 126.95516967773438,5.5  v 27  h -46.45332336425781  M 80.00184631347656,10  m -5,14.3  l 3.68,-2.1 "></path><g data-id="V/K*0WccVfd*lJ96ddb}" transform="translate(73.00184631347656, 6)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#46b946" d=" m 8,0  h 44.45332336425781  v 5  H 52.45332336425781  V 5  H 52.45332336425781  V 21  H 52.45332336425781  V 21  V 25  h -44.45332336425781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#46b946" d=" m 8,0  h 44.45332336425781  v 5  H 52.45332336425781  V 5  H 52.45332336425781  V 21  H 52.45332336425781  V 21  V 25  h -44.45332336425781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#389438" style="display: none;" d=" m 8,0  m 0.5,0.5  H 51.95332336425781  H 51.95332336425781  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="34.45332336425781" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">500</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">Wait&nbsp;for</text></g><g transform="translate(136.45516967773438,10)"><text class="blocklyText" x="0" y="13">millisecond</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

6. Test the program
	- Click on the Run Button <code><img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" /></code>.

## Example block layout (visual)

Imagine this vertical stack inside the workspace:

- When run button clicked
  - Repeat forever
	 - Set RGB LED Color to `Blue`
	 - Wait `500 ms`
	 - Set RGB LED Color to `Red`
	 - Wait `500 ms`

![Blinker program final image](/assets/blockly-programming/blinker-program.png)

## Common issues & troubleshooting

- Disabled Run Button <code><img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" /></code> 
  - [Delete](./blockly-editor-environment#deleting-blocks-recycle-bin) any dangling blocks (blocks that are not connected to any other blocks / left alone)
    ![Dangling Block in the blockly workspace](/assets/blockly-programming/dangling-block.png)

- No connection to the device
  - **Turn Off / Disable any kind of `VPN / Proxy`** as it may interfere with RoBeeX WiFi Network
  - **Turn Off `Mobile Data`** as it may interfere with RoBeeX WiFi Network
  - [Make sure your WiFi is connected to `ROBEEX_AI_DRONE_XXXXXX`](../../../user-manuals/robeex-ai-drone/troubleshoot#ii-connectivity-and-app-issues)

::: tip
You can check [Troubleshoot Section](../../../user-manuals/robeex-ai-drone/troubleshoot) for more info on common issues
:::


## ✍️ Creating Your Own Program (Cloning and Modification)

The fastest way to write your own code is often to modify a working demo. Let's **clone and modify** the `RGB Blinker` to add a new feature: controlling the **Bottom Flashlight**.

### Step 1: Clone the Blinker Program
1.  With the **`RGB Blinker`** program loaded, click the **Save As** button and give it a new name, such as **`Blinker with Flashlight`**.

### Step 2: Add the Flashlight Blocks
1.  Navigate to the **LEDs** category in the Toolbox.
2.  Locate the block: **`set bottom light [ON/OFF]`**.
3.  **Drag and connect** this block **inside** the `repeat forever` loop, immediately after the first `set LED color` block.
    * Set the block to **`ON`**.
4.  Now, drag a second **`set bottom light [ON/OFF]`** block and place it **inside** the loop, immediately after the second `set LED color` block.
    * Set this second block to **`OFF`**.



### Step 3: Run and Test
1.  Click the **Run Button** (🟢).
2.  **Observe:** Not only will the RGB light blink, but the dedicated **bottom flashlight** will now turn **ON** and **OFF** in sync with the color changes!

Congratulations! You've successfully modified a demo program to create a new, functional behavior for your RoBeeX device.
