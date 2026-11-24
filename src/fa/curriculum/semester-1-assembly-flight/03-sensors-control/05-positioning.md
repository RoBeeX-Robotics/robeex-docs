---
orderPriority: 20
---

# بخش ۵: موقعیت‌یابی

در پایان این بخش، هنرجو می‌تواند نقش VPS و GPS و تفاوت نیازهای موقعیت‌یابی داخل و خارج ساختمان را توضیح دهد.

## سیستم موقعیت‌یابی دیداری (VPS)

VPS از ترکیب حسگرهای دیداری و فاصله‌سنج برای تخمین حرکت افقی و ارتفاع استفاده می‌کند. این اطلاعات به پرنده کمک می‌کنند در فضای داخلی، بدون GPS، ارتفاع خود را حفظ کند و جابه‌جایی ناخواسته به اطراف را کاهش دهد.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-positioning-sensors-board.webp" alt="جایگاه حسگرهای موقعیت‌یابی داخلی روی روبیکس" width="1187" height="1187" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/robeex-positioning-sensors-board-320w.webp 320w, /assets/curriculum/semester-1/robeex-positioning-sensors-board-640w.webp 640w, /assets/curriculum/semester-1/robeex-positioning-sensors-board.webp 1187w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>جایگاه حسگرهای موقعیت‌یابی داخلی روی روبیکس</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-optical-flow-and-lidar-sensors.webp" alt="ترکیب Optical Flow و فاصله‌سنج در سامانهٔ VPS" width="375" height="674" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-optical-flow-and-lidar-sensors-320w.webp 320w, /assets/curriculum/semester-1/robeex-optical-flow-and-lidar-sensors.webp 375w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>ترکیب Optical Flow و فاصله‌سنج در سامانهٔ VPS</figcaption>
</figure>

::: teacher راهنمای بیان مربی
VPS یا Vision Positioning System به مجموعه‌ای از سنسورها گفته می‌شود که به پرنده کمک می‌کنند بدون GPS موقعیت خود را حفظ کند و پایدار بماند.
در RoBeeX، اطلاعات سنسورهایی مثل Optical Flow، ارتفاع‌سنج لیزری (ToF) و بارومتر در کنار IMU با هم ترکیب می‌شوند. Optical Flow حرکت پرنده روی سطح را تشخیص می‌دهد و سنسور ارتفاع نیز فاصله پرنده از زمین را اندازه می‌گیرد.
به زبان ساده، VPS کمک می‌کند RoBeeX مخصوصاً در محیط‌های داخلی در یک نقطه هاور کند، کمتر به اطراف جابه‌جا شود و ارتفاع خود را بهتر ثابت نگه دارد
:::

## سیستم موقعیت یابی جهانی (GPS):

- این سیستم به پهپاد کمک می کند تا موقعیت خود را در هنگام پرواز در فضا های باز  مشخص کند.
- معمولا این ماژول در بالای پهپاد قرار می گیرد تا بهترین سیگنال ها را دریافت کند.

<figure class="curriculum-media lesson-figure">
  <video class="lesson-animation" src="/assets/curriculum/semester-1/gps-satellite-constellation-animation.mp4" poster="/assets/curriculum/semester-1/gps-satellite-constellation-animation-poster.webp" width="560" height="560" aria-label="ماهواره‌های سامانهٔ موقعیت‌یابی در مدار زمین" controls autoplay loop muted playsinline preload="metadata"></video>
  <figcaption>ماهواره‌های سامانهٔ موقعیت‌یابی در مدار زمین</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/quadcopter-with-gps-antenna.webp" alt="نصب گیرندهٔ GPS در بالای یک مولتی‌روتور" width="800" height="533" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/quadcopter-with-gps-antenna-320w.webp 320w, /assets/curriculum/semester-1/quadcopter-with-gps-antenna-640w.webp 640w, /assets/curriculum/semester-1/quadcopter-with-gps-antenna.webp 800w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نصب گیرندهٔ GPS در بالای یک مولتی‌روتور</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/gps-receiver-module.webp" alt="نمونهٔ ماژول گیرندهٔ GPS" width="488" height="488" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/gps-receiver-module-320w.webp 320w, /assets/curriculum/semester-1/gps-receiver-module.webp 488w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نمونهٔ ماژول گیرندهٔ GPS</figcaption>
</figure>

::: teacher راهنمای بیان مربی
GPS یا سیستم موقعیت‌یابی جهانی به پرنده کمک می‌کند موقعیت خود را روی زمین مشخص کند. این سیستم با دریافت سیگنال از چند ماهواره، می‌تواند اطلاعاتی مثل موقعیت، سرعت و مسیر حرکت پرنده را در اختیار فلایت‌کنترلر قرار دهد.
در بسیاری از پهپادهای فضای باز، GPS برای قابلیت‌هایی مثل ثابت ماندن در یک نقطه، مسیریابی و بازگشت خودکار استفاده می‌شود. اما GPS معمولاً در محیط‌های بسته مثل داخل ساختمان عملکرد مناسبی ندارد، چون سیگنال ماهواره‌ها به‌خوبی دریافت نمی‌شود.
به همین دلیل در RoBeeX برای پرواز داخلی به‌جای GPS بیشتر از ترکیب Optical Flow، سنسور ارتفاع و IMU استفاده می‌شود.
:::

## VPS در RoBeeX

در RoBeeX، VPS مجموعه‌ای از Optical Flow، فاصله‌سنج لیزری، بارومتر و IMU است. این حسگرها با هم کمک می‌کنند پرنده در محیط داخلی ارتفاع و موقعیت افقی خود را بهتر حفظ کند. GPS برای موقعیت جهانی در فضای باز مفید است، اما سقف و دیوار دریافت سیگنال ماهواره را ضعیف یا چندمسیره می‌کنند؛ به همین دلیل RoBeeX برای پرواز داخلی به حسگرهای محلی متکی است.

## پرسش‌های رایج

::: faq چرا داخل ساختمان GPS ضعیف است؟

**پاسخ:** سیگنال ماهواره‌ها در سقف و دیوارها ضعیف یا بازتابیده می‌شود. برای داخل، حسگرهای محلی مانند VPS مناسب‌ترند.
:::

## تمرین

برای اتاق کم‌نور، راهروی طرح‌دار و فضای باز، داده‌های قابل‌استفاده و محدودیت‌های هر روش را فهرست کنید.

## کوییز نهایی

1. چرا RoBeeX در داخل ساختمان به حسگرهای محلی متکی است؟
2. VPS چگونه از چند حسگر کمک می‌گیرد؟

::: teacher معیار قبولی
موقعیت جهانی از حرکت محلی جدا شود و VPS به‌عنوان همکاری چند حسگر توضیح داده شود.
:::

[بخش قبل](04-optical-flow) · [بازگشت به جلسه](./) · [بخش بعد](06-flight-control)
