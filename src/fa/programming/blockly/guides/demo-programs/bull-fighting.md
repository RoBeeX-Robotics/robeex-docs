# 🐂 برنامه گاوبازی

این برنامه‌ی Blockly به‌گونه‌ای طراحی شده است که پهپاد اقدامات زیر را انجام دهد:

* **تشخیص چهره:** پهپاد به‌طور مداوم تصویر دوربین خود را بررسی می‌کند تا تشخیص دهد آیا چهره‌ای در تصویر وجود دارد یا خیر.
* **شمارش فریم‌های تشخیص:** پس از تشخیص یک چهره، پهپاد **۳۰ فریم دوربین** را شمارش می‌کند تا از وجود چهره مطمئن شود، که این زمان تقریباً معادل **۱ ثانیه** است.
* **حرکت به جلو:** پس از تکمیل شمارش فریم‌ها، پهپاد به‌سمت جلو به‌اندازه‌ی **۲۵۰ سانتی‌متر** حرکت می‌کند.
* **چرخش ۱۸۰ درجه:** پس از حرکت به جلو، پهپاد یک چرخش **۱۸۰ درجه‌ای حول محور عمودی (Yaw)** انجام می‌دهد تا در جهت مخالف قرار بگیرد.


### [بلوک تشخیص چهره](../../references/block-categories/machine-vision.md#detect-face)
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

### [بلوک شرط](../../references/block-categories/logic.md#controls-if)
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

### [بلوک پرواز](../../references/block-categories/flying.md#flight)
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

### [بلوک حرکت رو به جلو](../../references/block-categories/flying.md#move-forward)
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


### [بلوک تنظیم زاویه Yaw](../../references/block-categories/flying.md#set-yaw-cw)
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

## کد برنامه

<img src="/assets/blockly-programming/bull-fighting.png" />

---

### خلاصه برنامه

| پارامتر          | مقدار / عملکرد                | توضیحات                                          |
| :--------------- | :---------------------------- | :----------------------------------------------- |
| **ارتفاع اولیه** | ۱۵۰ سانتی‌متر                 | رسیدن به ارتفاع عملیاتی.                         |
| **روش تشخیص**    | تشخیص چهره                    | تشخیص وجود چهره انسان در تصویر دوربین.           |
| **تأخیر حمله**   | ۳۰ فریم (تقریباً ۱ ثانیه)     | پس از تشخیص چهره، تقریباً ۱ ثانیه منتظر می‌ماند. |
| **حرکت به جلو**  | ۲۵۰ سانتی‌متر                 | حرکت پهپاد به سمت جلو به‌اندازه‌ی ۲۵۰ سانتی‌متر. |
| **حرکت نهایی**   | چرخش ۱۸۰ درجه‌ای حول محور Yaw | چرخش ۱۸۰ درجه‌ای برای قرار گرفتن در جهت مخالف.   |

## ویدیو

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/Dbi5VJFIN7Q/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/Dbi5VJFIN7Q/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/Dbi5VJFIN7Q/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by RoBeeX Iran (@robeex.iran)</a></p></div></blockquote>
