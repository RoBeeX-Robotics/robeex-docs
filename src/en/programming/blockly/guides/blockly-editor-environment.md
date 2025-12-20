---
orderPriority: 90
---

# The Blockly Editor Interface

Before writing your first program, it helps to understand the main areas of the editor.

The editor is divided into a few key areas:

### 1. Blocks Toolbox (Categories)
The left-hand side contains the **Toolbox**, which organizes all available programming blocks into logical categories, such as:

![Blockly Toolbox Categories](/assets/blockly-programming/categories.png)

* [`Flying`](../references/block-categories/flying)
  Controls related to takeoff, movement, positioning, and landing of the drone.
* [`Machine Vision`](../references/block-categories/machine-vision)
  Blocks that use the camera for detection, tracking, and visual analysis.
* [`Lights`](../references/block-categories/lights)
  Blocks for controlling LEDs or any onboard lighting effects.
* [`Sensors`](../references/block-categories/sensors)
  Access to onboard sensor readings such as IMU, altitude, or distance sensors.
* [`Expansion Boards`](../references/block-categories/expansion-boards)
  Blocks that interact with additional hardware modules or external peripherals.
* [`Timing`](../references/block-categories/timing)
  Blocks that control delays, intervals, and time-based operations.
* [`Text`](../references/block-categories/text)
  String creation, manipulation, and formatting utilities.
* [`Logic`](../references/block-categories/logic)
  Conditional operations such as comparisons, booleans, and branching.
* [`Loops`](../references/block-categories/loops)
  Repetition structures like count loops, while loops, and iterative patterns.
* [`Math`](../references/block-categories/math)
  Numeric operations, arithmetic, random numbers, and formulas.
* [`Lists`](../references/block-categories/lists)
  Blocks for working with arrays, collections, and dynamic sequences of values.
* [`Variables`](#)
  Blocks for working with arrays, collections, and dynamic sequences of values.
* [`Functions`](#)
  Make custom blocks / procedures containing multiple blocks 

### 2. Workspace (The Canvas)
This large central area is your **Workspace**. This is where you drag blocks from the Toolbox and connect them to build your program logic.

### 3. Program Entry Points (Default Blocks)
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

All programs must start from a special block that defines **when** the code should execute. You will always begin by dragging one of these **Entry Point** blocks onto the Workspace:

::: tip
[Default Blocks](../references/block-categories/default-blocks) like **Program Entry Point** are inserted in the Workspace by **default**
:::

### 4. Telemetry and Status Bar
Located at the top of the screen, this panel provides **real-time status** of your RoBeeX device. Check here to confirm the following:

More info about device status bar [Manual Flight > 📊 Telemetry and Status Bar](../../../user-manuals/robeex-ai-drone/manual-flight.html#%F0%9F%93%8A-telemetry-and-status-bar)

### 5. Run Button 🟢
The prominent **Run** (or Play) button is what you press to compile your blocks and send the program to your connected RoBeeX device for execution.

::: warning
The Run Button may be disable for the following reasons:
* Dangling blocks (blocks which are not connected to any other blocks)
* Possible errors in the program
:::

## ⚙️ Managing Blocks

### Adding New Blocks
To add a block, simply **click and drag** it from the **Toolbox** on the left into the **Workspace** area. Blocks will snap together when they are compatible, like puzzle pieces.

### Deleting Blocks (Recycle Bin)
You have 3 ways to remove a block or a connected stack of blocks:

1.  **Dragging to the Recycle Bin:** Drag the unwanted block(s) to the **Recycle Bin icon** usually found in the bottom-right corner of the editor.
2.  **Dragging back to the Toolbox Area (left-side):** Simply drag the block(s) and release them over the **Toolbox/Categories** section on the left.
3.  **Hold on the block (right click on desktop):** Select `Delete` on the opened menu.

### Undo 
Hold on an empty space in the blockly workspace (right click on desktop) :** Select `Undo` on the opened menu.
![Blockly Toolbox Categories](/assets/blockly-programming/workspace-menu.png)
