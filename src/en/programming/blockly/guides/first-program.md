# Writing your first Blockly program

This short guide walks you through creating a simple, working Blockly program for your RoBeeX device. You'll learn how to open the editor, assemble blocks, run the program, and troubleshoot common issues.

What you'll build: a repeating LED sequence that changes color and pauses — a friendly, visible way to confirm the device is responding to your program.

## Prerequisites

- Installing RoBeeX App on your computer / mobile phone
- A RoBeeX device powered on and connected to your computer / mobile phone
- The Blockly Editor open in your device (see the RoBeeX App → Programming → Blockly page).
- Basic familiarity with dragging and connecting blocks in the editor.

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
"></path><g transform="translate(10,20)"><text class="blocklyText" x="0" y="13">When</text></g><g transform="translate(59.889617919921875,20)"><image height="24px" width="24px" alt="logo" xlink:href="/assets/icon/play-arrow.svg"></image></g><g transform="translate(93.88961791992188,20)"><text class="blocklyText" x="0" y="13">Clicked</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>



## Step-by-step: build the LED sequence

1. Create the program entry

	- Drag the main `when run` (or `on start`) block onto the workspace. This is the block that executes when you upload or start the program.

2. Add a forever loop

	- From the `Loops` category, drag a `repeat forever` (or `forever`) block and snap it under the `when run` block. This keeps the LED sequence running until you stop the device.

3. Set the first LED color

	- From the `Lights` (or `LED`) category, find the block labeled `set RGB LED to color` (or similar). Snap it inside the loop.
	- Choose a color (for example: red). Many editors provide a color picker — try `#FF0000` for red.

4. Wait

	- From the `Timing` category, drag a `wait` block (for example `wait 500 ms` or `wait 1 second`) and place it under the LED block. Use 500–1000 ms for a visible blink.

5. Change to the next color

	- Add another `set RGB LED to color` block and choose a different color (for example: green `#00FF00`).
	- Attach a `wait` block after it.

6. (Optional) Add a third color or effects

	- You can add blue, white, or a randomized color block. You can also use blocks for brightness or rainbow effects if your board supports them.

7. Test the program

	- Save or download the program from the editor. If you have a direct device connection (USB/Wi‑Fi/Bluetooth), upload the program to the device using the editor's `Upload` / `Run` control.
	- If the editor provides a simulator, click `Run` to preview the behavior.

## Example block layout (visual)

Imagine this vertical stack inside the workspace:

- when run
  - repeat forever
	 - set RGB LED to red
	 - wait 500 ms
	 - set RGB LED to green
	 - wait 500 ms

Add screenshots here if available: `assets/blockly/first-program-stack.png` (or use the editor's export image feature). If you add a screenshot, place it in `src/assets` and reference the relative path in the docs.

## Testing tips

- If the LED doesn't change, confirm the device is powered and connected. Check the device's power LED and any connection settings in the editor.
- Try increasing the wait times to 1000 ms to clearly observe each color.
- If uploading fails, look for an error message in the editor: common causes are missing drivers, blocked USB access, or the device in a different mode (bootloader vs normal runtime).

## Common issues & troubleshooting

- No connection to the device

  - Reconnect the cable or re-pair Bluetooth. Restart the editor/browser if the connection still fails.
  - On Linux, ensure you have permission to access serial/USB devices (add your user to the `dialout` group or run the editor with the appropriate permissions).

- Program runs but LED doesn't change

  - Verify the correct LED block for your hardware. Some boards have separate blocks for `top LED`, `bottom LED`, or `RGB module`.
  - Make sure the LED is not already being controlled by another running program on the device (stop other programs first).

- Upload errors or timeouts

  - Check cable, port selection in the editor, and that the device is not in bootloader mode unless required for flashing.

## Next steps

- Add motion: try adding a short `move forward` block after the LED sequence to make the robot move while the lights blink.
- Learn sensors: read from a distance or light sensor and change the LED color depending on the reading (if your board has those sensors).
- Read the block references: see `src/programming/blockly/references/overview.md` and the `block-categories` pages for full details on available blocks.

## Where to go for help

- The `Programming → Blockly` docs index contains more examples and downloadable sample projects.
- If something's not working, open an issue on the project repository or check the community forum for device-specific tips.

---

If you'd like, I can:

- add a screenshot and place it in the repo (please provide an image or let me capture the editor), or
- create a matching downloadable example `.json` / `.blocks` file you can import into the editor.

Which would you prefer next?

