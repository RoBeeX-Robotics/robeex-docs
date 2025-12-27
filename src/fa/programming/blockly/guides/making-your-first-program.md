---
orderPriority: 70
---

# برنامه اول خود را بسازید

این راهنمای کوتاه شما را در ایجاد یک برنامه Blockly کارآمد برای دستگاه RoBeeX راهنمایی می‌کند. یاد خواهید گرفت که چگونه ویرایشگر را باز کنید، بلوک ها را مونتاژ کنید، برنامه را اجرا کنید و مشکلات رایج را عیب‌یابی کنید.

آنچه خواهید ساخت: یک توالی LED تکراری که رنگ را تغییر می‌دهد و مکث می‌کند — راهی دوستانه و قابل مشاهده برای تأیید پاسخ دستگاه به برنامه شما.

## پیش‌نیازها

- اگر با Blockly آشنا نیستید، پیشنهاد می‌کنیم ابتدا بخش [مقدمه](./introduction) را بخوانید 
- نصب برنامه RoBeeX روی کامپیوتر / تلفن همراه خود
- دستگاه RoBeeX روشن و متصل به WiFi کامپیوتر / تلفن همراه 
- ویرایشگر Blockly در دستگاه شما باز است (به صفحه برنامه RoBeeX → Programming → Blockly مراجعه کنید).
- آشنایی اولیه با کشیدن و اتصال بلوک ها در ویرایشگر. [اطلاعات بیشتر](./blockly-editor-environment#%E2%9A%99%EF%B8%8F-managing-blocks)

اگر هنوز اتصال دستگاه ندارید، می‌توانید مراحل را در ویرایشگر دنبال کنید و بعداً وقتی دستگاه موجود است، اجرا کنید.

::: tip
شما می‌توانید در مواردی که از بلوک های مرتبط با دستگاه (پرواز، LED و غیره) استفاده نمی‌کنید، برنامه‌های Blockly را بدون اتصال به دستگاه اجرا کنید.
:::

## نقطه ورودی برنامه

هر برنامه Blockly از این بلوک شروع به اجرا می‌کند 

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



## مرحله‌به‌مرحله: ساخت LED چشمک زن

1. افزودن حلقه همیشه
	- از دسته `Loops`، بلوک `repeat while true` را بکشید و آن را زیر بلوک <code>When<img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" />Clicked</code> قرار دهید.
	- این کار توالی LED را تا زمانی که دستگاه را متوقف نکنید، نگه می‌دارد.

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

2. تنظیم رنگ LED اول
	- از دسته `Lights` (یا `LED`)، بلوک برچسب‌گذاری شده `set RGB LED to color` (یا مشابه) را پیدا کنید. آن را داخل حلقه قرار دهید.
	- رنگی انتخاب کنید (مثلاً: قرمز). بسیاری از ویرایشگرها انتخاب‌کننده رنگ ارائه می‌دهند — از `#FF0000` برای قرمز استفاده کنید.

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

3. انتظار
	- از دسته `Timing`، بلوک `wait` (مثلاً `wait 500 ms` یا `wait 1 second`) را بکشید و آن را زیر بلوک LED قرار دهید. از 500–1000 میلی‌ثانیه برای چشمک قابل مشاهده استفاده کنید.

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
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="34.45332336425781" class="blocklyFieldRect"></rect><text class="blocklyText" x="5" y="13">500</text></g></g><g transform="translate(10,10)"><text class="blocklyText" x="0" y="13">Wait&nbsp;for</text></g><g transform="translate(136.45516967773438,10)"><text class="blocklyText" x="0" y="13">millisecond</text></g></g>
            </svg>
        </div>
    </div>
</div>
</div>

4. تغییر به رنگ بعدی

	- بلوک دیگری `set RGB LED to color` اضافه کنید و رنگ متفاوتی انتخاب کنید (مثلاً: سبز `#00FF00`).
	- بلوک `wait` را پس از آن متصل کنید.

<div style="padding: 5px 0;">
<div _ngcontent-ng-c1592021296="" id="blocklyArea" style="height: 35px">
    <div _ngcontent-ng-c1592021296="" id="blocklyDiv">
        <div class="injectionDiv geras-renderer dark-theme" tabindex="0" aria-label="Blockly Workspace" dir="LTR">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" style="background-color: transparent;" width="167.78509521484375" height="35">
<g data-id="QI|hS.;%xQ=19(|~vk~d" transform="" class="blocklyDraggable"><path class="blocklyPathDark" transform="translate(1,1)" fill="#1d242a" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 130.0667266845703  H 130.0667266845703  V 49  V 59  h -100.56672668457031  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPath" stroke="none" fill="#242d34" d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 99.78507995605469  v 5  H 129.7850799560547  V 5  H 129.7850799560547  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 1  H 129.7850799560547  V 21  V 25  h -100.28507995605469  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,1 -8,-8 z
"></path><path class="blocklyPathLight" stroke="#353e45" d=" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 129.2850799560547  H 129.2850799560547  M 129.7850799560547,5  m -5,14.3  l 3.68,-2.1  M 0,25  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 
"></path><g data-id="Y1f3GPGYu)zx/[3$x3Mh" transform="translate(122.78507995605469, 0)" class="blocklyDraggable" style="display: block;"><path class="blocklyPathDark" transform="translate(1,1)" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPath" stroke="none" fill="#475f67" d=" m 8,0  h 36  v 5  H 44  V 5  H 44  V 21  H 44  V 21  V 25  h -36  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z
"></path><path class="blocklyPathLight" stroke="#575f67" style="display: none;" d=" m 8,0  m 0.5,0.5  H 43.5  H 43.5  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 
"></path><g class="blocklyEditableText" transform="translate(13,5)" style="cursor: default;"><rect rx="4" ry="4" x="0" y="0" height="16" width="26" class="blocklyFieldRect" stroke="#fff" style="fill-opacity: 1; display: block; fill: rgb(0, 255, 0);"></rect></g></g><g transform="translate(10,5)"><text class="blocklyText" x="0" y="13">Set&nbsp;RGB&nbsp;Color</text></g></g>
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

6. تست برنامه
	- روی دکمه اجرا کلیک کنید<code><img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" /></code> 

## چیدمان بلوک نمونه

![Blinker program final image](/assets/blockly-programming/blinker-program.png)

## مشکلات رایج و عیب‌یابی

- دکمه Run غیرفعال <code><img height="15px" width="15px" alt="logo" style="margin: 0 4px;display:inline;vertical-align: text-bottom;" src="/icon/play-arrow.svg" /></code> 
  - [حذف](./blockly-editor-environment#deleting-blocks-recycle-bin) هر بلوک آویزان (بلوک هایی که به هیچ بلوک دیگری متصل نیستند / تنها مانده‌اند)
    ![Dangling Block in the blockly workspace](/assets/blockly-programming/dangling-block.png)

- عدم اتصال به دستگاه
  - **هر گونه `VPN / Proxy` را خاموش / غیرفعال کنید** زیرا ممکن است با شبکه WiFi RoBeeX تداخل کند
  - **داده موبایل را خاموش کنید** زیرا ممکن است با شبکه WiFi RoBeeX تداخل کند
  - [اطمینان حاصل کنید که WiFi شما به `ROBEEX_AI_DRONE_XXXXXX`](../../../user-manuals/robeex-ai-drone/troubleshoot#ii-connectivity-and-app-issues) متصل است

::: tip
برای اطلاعات بیشتر در مورد مشکلات رایج، بخش [عیب‌یابی](../../../user-manuals/robeex-ai-drone/troubleshoot) را بررسی کنید
:::
