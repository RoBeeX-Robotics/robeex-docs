---
orderPriority: 30
---

# بخش ۴: Optical Flow

در پایان این بخش، هنرجو می‌تواند اندازه‌گیری حرکت افقی با Optical Flow و اثر بافت و نور سطح را توضیح دهد.

## سنسور جریان نوری یا Optical Flow:

- سنسور اپتیکال فلو در واقع یک دوربین کوچک است که جا به جایی پرنده در محور های X و Y را تشخیص می دهد. پارت نامبر آن PMW3901 می باشد.
- توجه مهم: سنسور اپتیکال فلو در پرواز برای داشتن عملکرد صحیح به نور کافی و همچنین کف محیط دارای تکسچر نیاز دارد.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/optical-flow-motion-tracking.jpg" alt="تخمین حرکت تصویر میان دو فریم با Optical Flow" width="450" height="283" loading="eager" decoding="async">
  <figcaption>تخمین حرکت تصویر میان دو فریم با Optical Flow</figcaption>
</figure>

::: teacher راهنمای بیان مربی
سنسور جریان نوری یا Optical Flow مثل یک دوربین کوچک در زیر پرنده عمل می‌کند. این سنسور به‌صورت پیوسته از سطح زیر پرنده نمونه‌برداری می‌کند و با مقایسه تصاویر پشت سر هم، متوجه می‌شود پرنده در جهت‌های چپ و راست یا جلو و عقب چقدر جابه‌جا شده است.
در RoBeeX از سنسور PMW3901 استفاده می‌شود. اطلاعات این سنسور به فلایت‌کنترلر کمک می‌کند تا حرکت افقی پرنده را تشخیص دهد و مخصوصاً در محیط‌های داخلی که GPS در دسترس نیست، پرنده بتواند موقعیت خود را بهتر حفظ کند و در یک نقطه پایدارتر هاور کند.
به زبان ساده، Optical Flow برای پرنده تقریباً شبیه ماوس نوری کامپیوتر است؛ با نگاه کردن به سطح زیر خود، حرکت را تشخیص می‌دهد.
:::

## سنسور Optical Flow در RoBeeX

سنسور جریان نوری به‌کاررفته در روبیکس PMW3901 است.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-optical-flow-board-location.webp" alt="محل سنسور Optical Flow در زیر برد روبیکس" width="1187" height="1187" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-optical-flow-board-location-320w.webp 320w, /assets/curriculum/semester-1/robeex-optical-flow-board-location-640w.webp 640w, /assets/curriculum/semester-1/robeex-optical-flow-board-location.webp 1187w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>محل سنسور Optical Flow در زیر برد روبیکس</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-optical-flow-camera-closeup.webp" alt="نمای نزدیک دوربین سنسور Optical Flow" width="371" height="308" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-optical-flow-camera-closeup-320w.webp 320w, /assets/curriculum/semester-1/robeex-optical-flow-camera-closeup.webp 371w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نمای نزدیک دوربین سنسور Optical Flow</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در RoBeeX سنسور Optical Flow مدل PMW3901 در قسمت زیرین برد قرار گرفته تا بتواند سطح زیر پرنده را مشاهده کند. این سنسور با بررسی تغییرات تصویر زمین، حرکت افقی پرنده در جهت‌های جلو، عقب، چپ و راست را تشخیص می‌دهد.
فلایت‌کنترلر اطلاعات Optical Flow را همراه با اطلاعات IMU و سنسور ارتفاع استفاده می‌کند تا موقعیت پرنده را بهتر تخمین بزند. به همین دلیل RoBeeX می‌تواند مخصوصاً در محیط‌های داخلی و بدون GPS، حرکت ناخواسته را تشخیص دهد و در یک نقطه پایدارتر هاور کند.
:::

## Optical Flow: چرا کف مهم است؟

Optical Flow چند تصویر پیاپی از کف می‌گیرد و جابه‌جایی الگوها را مقایسه می‌کند. کف شطرنجی یا دارای بافت، نشانه‌های زیادی دارد؛ سطح کاملاً سفید، براق، شفاف یا تاریک نشانهٔ کمی دارد. نور کم نیز تصویر را ضعیف می‌کند.

::: teacher دمو سه‌سطح
پیش از آزمایش از گروه‌ها بخواهید سه سطح را رتبه‌بندی کنند. بعد سنسور یا یک ماوس نوری را روی هر سطح حرکت دهید. نتیجه را با «نور»، «بافت»، «بازتاب» و «ارتفاع» توضیح دهید، نه با جملهٔ کلی «سنسور خراب است».
:::

## پرسش‌های رایج

::: faq چرا Optical Flow به نور و طرح سطح نیاز دارد؟

**پاسخ:** چون جابه‌جایی را از تغییرات تصویر سطح پیدا می‌کند. تصویر تاریک یا کاملاً یکنواخت نشانه کافی ندارد.
:::

## تمرین

سه سطح طرح‌دار، سفید و براق را رتبه‌بندی کنید. با مشاهدهٔ حسگر یا ماوس نوری، پیش‌بینی را با نتیجه مقایسه کنید.

## کوییز نهایی

1. چرا کف بدون بافت برای Optical Flow مشکل‌ساز است؟
2. آیا Optical Flow همان دوربین تشخیص اشیا است؟

::: teacher معیار قبولی
جابه‌جایی الگوهای کف، نور، بازتاب و محدودیت اندازه‌گیری در توضیح دیده شود.
:::

[بخش قبل](03-altimetry) · [بازگشت به جلسه](./) · [بخش بعد](05-positioning)
