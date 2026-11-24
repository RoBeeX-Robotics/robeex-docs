---
orderPriority: 70
---

# بخش ۱: ارتباط بی‌سیم

در پایان این بخش، هنرجو می‌تواند جهت انتقال فرمان، تله‌متری و تصویر را روی ارتباط Wi-Fi توضیح دهد.

## سه جریان داده روی یک ارتباط

- **فرمان کنترلی:** از گوشی/رایانه به RoBeeX می‌رود؛ مثل Pitch یا Takeoff.
- **تله‌متری:** از RoBeeX برمی‌گردد؛ مثل باتری، ارتفاع و زاویه.
- **تصویر:** جریان دوربین از RoBeeX به نمایشگر می‌رسد.

Wi-Fi فقط «اینترنت» نیست. دو دستگاه می‌توانند روی یک شبکهٔ محلی مستقیماً با هم ارتباط داشته باشند، حتی اگر آن شبکه اینترنت نداشته باشد.

::: teacher تشبیه پل دوطرفه
سه کارت با رنگ‌های متفاوت روی یک طناب جابه‌جا کنید: فرمان به سمت پرنده، تله‌متری و تصویر به سمت کاربر. اگر هنرجو تله‌متری را «ویدیوی دوربین» تعریف کرد، کارت‌ها را جدا کنید.
:::

## مسیر ارتباط و قابلیت‌های RoBeeX

### ارتباط دوطرفهٔ RoBeeX

سامانهٔ فرستنده و گیرنده، فرمان‌های کنترلی را به پهپاد می‌رساند و تله‌متری و تصویر را از پهپاد به گوشی یا رایانه برمی‌گرداند.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/mavic-camera-drone.webp" alt="پهپاد به‌عنوان گیرندهٔ فرمان و فرستندهٔ تله‌متری و تصویر" width="1134" height="328" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/mavic-camera-drone-320w.webp 320w, /assets/curriculum/semester-1/mavic-camera-drone-640w.webp 640w, /assets/curriculum/semester-1/mavic-camera-drone.webp 1134w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>پهپاد به‌عنوان گیرندهٔ فرمان و فرستندهٔ تله‌متری و تصویر</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/remote-controller-with-video-screen.webp" alt="کنترلر زمینی برای ارسال فرمان و دریافت تصویر" width="600" height="600" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/remote-controller-with-video-screen-320w.webp 320w, /assets/curriculum/semester-1/remote-controller-with-video-screen.webp 600w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>کنترلر زمینی برای ارسال فرمان و دریافت تصویر</figcaption>
</figure>

::: teacher راهنمای بیان مربی
برای کنترل یک مولتی‌روتور از راه دور، به یک سیستم ارتباطی بی‌سیم نیاز داریم.
این سیستم فرمان‌های خلبان، مثل بالا رفتن، پایین آمدن یا حرکت به طرفین را از وسیله‌ی کنترل به پرنده منتقل می‌کند. در بعضی سیستم‌ها، پرنده نیز می‌تواند اطلاعاتی مثل وضعیت باتری، ارتفاع یا سایر اطلاعات پرواز را به کاربر برگرداند.
پس به زبان ساده، سیستم ارتباطی مثل یک پل بین خلبان و پرنده عمل می‌کند.
روش برقراری این ارتباط می‌تواند در مولتی‌روتورهای مختلف متفاوت باشد.
در ادامه می‌بینیم که سیستم ارتباطی RoBeeX چگونه کار می‌کند و برای ارسال و دریافت اطلاعات از چه روشی استفاده می‌شود.

در آینده امکان اضافه کردن رادیو کنترل هم وجود خواهد داشت تا بتوان RoBeeX را با کنترلرهای مخصوص پرواز نیز هدایت کرد.
:::

### ارتباط Wi-Fi در RoBeeX

- تراشهٔ **ESP32-S3** ارتباط را مدیریت می‌کند.
- آنتن **۲٫۴ گیگاهرتز** سیگنال را ارسال و دریافت می‌کند.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-wifi-board-and-antenna.webp" alt="برد روبیکس، تراشهٔ ESP32-S3 و آنتن ۲٫۴ گیگاهرتز" width="1132" height="1132" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-wifi-board-and-antenna-320w.webp 320w, /assets/curriculum/semester-1/robeex-wifi-board-and-antenna-640w.webp 640w, /assets/curriculum/semester-1/robeex-wifi-board-and-antenna.webp 1132w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>برد روبیکس، تراشهٔ ESP32-S3 و آنتن ۲٫۴ گیگاهرتز</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-control-app-on-phone.webp" alt="اتصال برنامهٔ کنترل به روبیکس از طریق Wi-Fi" width="549" height="285" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-control-app-on-phone-320w.webp 320w, /assets/curriculum/semester-1/robeex-control-app-on-phone.webp 549w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>اتصال برنامهٔ کنترل به روبیکس از طریق Wi-Fi</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در RoBeeX برای ارسال و دریافت اطلاعات از Wi-Fi استفاده می‌کنیم.
بخش اصلی این ارتباط روی برد، ESP32-S3 است که قابلیت ارتباط بی‌سیم Wi-Fi را فراهم می‌کند. همچنین آنتن ۲.۴ گیگاهرتز روی RoBeeX وظیفه‌ی ارسال و دریافت سیگنال‌های بی‌سیم را بر عهده دارد.
به این ترتیب، گوشی موبایل یا لپ‌تاپ از طریق Wi-Fi به RoBeeX متصل می‌شود و می‌تواند فرمان‌های کنترلی را برای آن ارسال کند و اطلاعات موردنیاز را نیز از پرنده دریافت کند.
پس خیلی ساده می‌توان گفت:
ESP32-S3 ارتباط را مدیریت می‌کند و آنتن ۲.۴ گیگاهرتز باعث می‌شود این ارتباط به‌صورت بی‌سیم برقرار شود.
:::

## پرسش‌های رایج

::: faq چرا از بلوتوث استفاده نشده است؟

**پاسخ:** Wi-Fi برای انتقال داده بیشتر، از جمله تصویر، مناسب است. انتخاب فناوری به نیاز ارتباط بستگی دارد.
:::

::: faq تله‌متری چیست؟

**پاسخ:** اطلاعاتی است که ربات درباره وضعیت خود مانند باتری، ارتفاع یا زاویه برای کاربر می‌فرستد.
:::

## تمرین

میان گوشی و RoBeeX سه فلش برای فرمان، تله‌متری و تصویر بکشید و جهت هرکدام را مشخص کنید.

## کوییز نهایی

1. کدام داده از گوشی به پرنده می‌رود؟
2. چرا ارتباط Wi-Fi الزاماً به معنی دسترسی اینترنت نیست؟

::: teacher معیار قبولی
فرمان از گوشی و داده/تصویر از پرنده برگردد؛ شبکهٔ محلی از اینترنت تفکیک شود.
:::

[بخش قبل](../05-assembly/02-inspection) · [بازگشت به جلسه](./) · [بخش بعد](02-application)
