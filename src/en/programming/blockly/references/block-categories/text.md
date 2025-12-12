---
orderPriority: 5
outline: 2
---
# Text

String creation, manipulation, and formatting utilities.

## Print 
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="61.561492919921875" height="35">
<g data-id="RBv0LK_KJoFTGy`a,z;8" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#1a1a1a" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 30.561492919921875  v 5  H 60.561492919921875  V 5  H 60.561492919921875  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 60.561492919921875  V 21  V 25  h -31.061492919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#212121" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 30.561492919921875  v 5  H 60.561492919921875  V 5  H 60.561492919921875  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 60.561492919921875  V 21  V 25  h -31.061492919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#323232" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 60.061492919921875  H 60.061492919921875  M 60.561492919921875,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">print</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="146.098388671875" height="35">
<g data-id="@g6PI!AREr7^~%Y,Qg=?" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#1a1a1a" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 30.561492919921875  v 5  H 60.561492919921875  V 5  H 60.561492919921875  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 60.561492919921875  V 21  V 25  h -31.061492919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#212121" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 30.561492919921875  v 5  H 60.561492919921875  V 5  H 60.561492919921875  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 60.561492919921875  V 21  V 25  h -31.061492919921875  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#323232" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 60.061492919921875  H 60.061492919921875  M 60.561492919921875,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Htg^O.tZIV2?p[kfuJ#:" transform="translate(53.561492919921875, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#e6ac00" d=" m 8,0  h 83.53689575195312  v 5  H 91.53689575195312  V 5  H 91.53689575195312  V 21  H 91.53689575195312  V 21  V 25  h -83.53689575195312  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#e6ac00" d=" m 8,0  h 83.53689575195312  v 5  H 91.53689575195312  V 5  H 91.53689575195312  V 21  H 91.53689575195312  V 21  V 25  h -83.53689575195312  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#cc9900" style="display: none;" d=" m 8,0  m 0.5,0.5  H 91.03689575195312  H 91.03689575195312  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g transform="translate(18,5)"><image height="12px" width="12px" alt="“" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC"></image></g><g class="blocklyEditableText" transform="translate(35,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="29.536895751953125" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">Hi!</text></g><g transform="translate(69.53689575195312,5)"><image height="12px" width="12px" alt="”" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="></image></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">print</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Prints a value or variable to the screen or console.


### Params
- <b>TEXT: Any</b> - The value or variable to print.


## Text Prompt Ext
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 31px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="376.10845947265625" height="31">
<g data-id="LkO|x.c9ds/gIRn8GwWF" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc9900" d=" m 8,0  h 255.69223022460938  v 5  H 263.6922302246094  V 5  H 263.6922302246094  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 263.6922302246094  V 21  V 25  h -255.69223022460938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#ffbf00" d=" m 8,0  h 255.69223022460938  v 5  H 263.6922302246094  V 5  H 263.6922302246094  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 263.6922302246094  V 21  V 25  h -255.69223022460938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#cc9900" d=" m 8,0  m 0.5,0.5  H 263.1922302246094  H 263.1922302246094  M 263.6922302246094,5  m -5,14.3  l 3.68,-2.1  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g data-id="rw9NQ#-W5`Lv|iftP.k?" transform="translate(256.6922302246094, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#e6ac00" d=" m 8,0  h 110.41622924804688  v 5  H 118.41622924804688  V 5  H 118.41622924804688  V 21  H 118.41622924804688  V 21  V 25  h -110.41622924804688  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#e6ac00" d=" m 8,0  h 110.41622924804688  v 5  H 118.41622924804688  V 5  H 118.41622924804688  V 21  H 118.41622924804688  V 21  V 25  h -110.41622924804688  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#cc9900" style="display: none;" d=" m 8,0  m 0.5,0.5  H 117.91622924804688  H 117.91622924804688  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g transform="translate(18,5)"><image height="12px" width="12px" alt="“" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC"></image></g><g class="blocklyEditableText" transform="translate(35,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="56.416229248046875" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">Enter:&nbsp;</text></g><g transform="translate(96.41622924804688,5)"><image height="12px" width="12px" alt="”" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="></image></g></g><g transform="translate(18,5)"><text class="blocklyText" x="0" y="13">prompt&nbsp;for</text></g><g class="blocklyEditableText" transform="translate(97.082763671875,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="47.49223327636719" class="blocklyFieldRect blocklyDropdownRect" stroke="#cc9900" fill="transparent"></rect><text class="blocklyText blocklyDropdownText" text-anchor="start" x="5" y="13">text<tspan style="fill: rgb(255, 191, 0);"> ▾</tspan></text><image style="display: none;"></image></g><g transform="translate(149.5749969482422,5)"><text class="blocklyText" x="0" y="13">with&nbsp;message</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Prompt for user for some text.


### Params
- <b>TYPE: Dropdown</b>
  - text
  - number
- <b>TEXT: Any</b>


## Text
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 31px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="77.07196044921875" height="31">
<g data-id="Hhr]OIzF~s#m;`!M92}z" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc9900" d=" m 8,0  h 68.07197570800781  v 5  H 76.07197570800781  V 5  H 76.07197570800781  V 21  H 76.07197570800781  V 21  V 25  h -68.07197570800781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#ffbf00" d=" m 8,0  h 68.07197570800781  v 5  H 76.07197570800781  V 5  H 76.07197570800781  V 21  H 76.07197570800781  V 21  V 25  h -68.07197570800781  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#cc9900" d=" m 8,0  m 0.5,0.5  H 75.57197570800781  H 75.57197570800781  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g transform="translate(18,5)"><image height="12px" width="12px" alt="“" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC"></image></g><g class="blocklyEditableText" transform="translate(35,5)" style="cursor: text;"><rect rx="4" ry="4" x="0" y="0" height="16" width="14.071975708007812" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">&nbsp;</text></g><g transform="translate(54.07197570800781,5)"><image height="12px" width="12px" alt="”" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="></image></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
A letter, word, or line of text.


### Params
- <b>TEXT: Variable</b>


## Text Join
### Block
<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 57px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="170.70150756835938" height="57">
<g data-id="S(o;vMa+Rn8!SSXkv#{." transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#cc9900" d=" m 8,0  h 161.70150756835938  v 5  H 169.70150756835938  V 5  H 169.70150756835938  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 2  H 169.70150756835938  V 32  H 169.70150756835938  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 0  H 169.70150756835938  V 47  V 51  h -161.70150756835938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#ffbf00" d=" m 8,0  h 161.70150756835938  v 5  H 169.70150756835938  V 5  H 169.70150756835938  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 2  H 169.70150756835938  V 32  H 169.70150756835938  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 0  H 169.70150756835938  V 47  V 51  h -161.70150756835938  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#cc9900" d=" m 8,0  m 0.5,0.5  H 169.20150756835938  H 169.20150756835938  M 169.70150756835938,5  m -5,14.3  l 3.68,-2.1  M 169.70150756835938,32  m -5,14.3  l 3.68,-2.1  M 8.5,50.5  M 8.5,50.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyIconGroup blockly-icon-mutator" transform="translate(18, 5)"><rect class="blocklyIconShape" rx="4" ry="4" height="16" width="16"></rect><path class="blocklyIconSymbol" d="m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"></path><circle class="blocklyIconShape" r="2.7" cx="8" cy="8"></circle></g><g transform="translate(45,5)"><text class="blocklyText" x="0" y="13">create&nbsp;text&nbsp;with</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

### Description
Create a piece of text by joining together any number of items.


### Params
- <b>ADD0: Any</b>
- <b>ADD1: Any</b>
