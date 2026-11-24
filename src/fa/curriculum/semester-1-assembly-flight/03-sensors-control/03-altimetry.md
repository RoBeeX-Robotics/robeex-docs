---
orderPriority: 40
---

# بخش ۳: ارتفاع‌سنجی

در پایان این بخش، هنرجو می‌تواند فاصله‌سنج ToF و بارومتر را بر اساس داده و محدودیتشان مقایسه کند.

## ارتفاع سنج لیزری (ToF / Lidar)

این سنسور نور فروسرخ نامرئی با طول موج ۹۴۰ نانومتر را می‌فرستد و بازتاب آن را دریافت می‌کند. با اندازه‌گیری زمان رفت‌وبرگشت نور، فاصله تا سطح زیر پرنده محاسبه می‌شود. سنسور VL53L1X به‌کاررفته در روبیکس، در شرایط مناسب تا حدود ۴ متر را اندازه می‌گیرد.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-lidar-board-location.webp" alt="محل فاصله‌سنج لیزری روی برد روبیکس" width="985" height="985" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/robeex-lidar-board-location-320w.webp 320w, /assets/curriculum/semester-1/robeex-lidar-board-location-640w.webp 640w, /assets/curriculum/semester-1/robeex-lidar-board-location.webp 985w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>محل فاصله‌سنج لیزری روی برد روبیکس</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-lidar-sensor-closeup.webp" alt="نمای نزدیک سنسور فاصله‌سنج VL53L1X" width="278" height="360" loading="lazy" decoding="async">
  <figcaption>نمای نزدیک سنسور فاصله‌سنج VL53L1X</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/infrared-object-detection-diagram.jpg" alt="اصل اندازه‌گیری فاصله با ارسال و دریافت نور فروسرخ" width="407" height="333" loading="lazy" decoding="async">
  <figcaption>اصل اندازه‌گیری فاصله با ارسال و دریافت نور فروسرخ</figcaption>
</figure>

::: teacher راهنمای بیان مربی
ارتفاع‌سنج لیزری یا ToF/Lidar سنسوری است که فاصله پرنده تا سطح زیر آن را اندازه‌گیری می‌کند. این سنسور یک پالس نوری ارسال می‌کند و با اندازه‌گیری زمان رفت و برگشت نور، فاصله تا زمین را محاسبه می‌کند.
در RoBeeX از سنسور VL53L1X استفاده شده است. فلایت‌کنترلر با کمک اطلاعات این سنسور متوجه می‌شود پرنده در چه ارتفاعی از زمین قرار دارد و می‌تواند ارتفاع را بهتر ثابت نگه دارد.
این سنسور به‌خصوص برای پرواز در محیط‌های داخلی بسیار مفید است؛ چون بدون نیاز به GPS می‌تواند فاصله پرنده از زمین را به‌صورت پیوسته اندازه‌گیری کند.
:::

## بارومتـر (فشار سنج):

بارومتر با اندازه‌گیری فشار هوا، تغییر ارتفاع را تخمین می‌زند. سنسور به‌کاررفته در روبیکس BMP388 است.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-barometer-board-location.webp" alt="محل بارومتر روی برد روبیکس" width="1210" height="1210" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-barometer-board-location-320w.webp 320w, /assets/curriculum/semester-1/robeex-barometer-board-location-640w.webp 640w, /assets/curriculum/semester-1/robeex-barometer-board-location.webp 1210w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>محل بارومتر روی برد روبیکس</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-barometer-sensor-closeup.webp" alt="نمای نزدیک سنسور فشار هوا روی برد" width="148" height="225" loading="lazy" decoding="async">
  <figcaption>نمای نزدیک سنسور فشار هوا روی برد</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/pressure-sensor-diaphragm-diagram.jpg" alt="تغییر شکل دیافراگم حسگر در اثر فشار هوا" width="505" height="532" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/pressure-sensor-diaphragm-diagram-320w.webp 320w, /assets/curriculum/semester-1/pressure-sensor-diaphragm-diagram.jpg 505w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>تغییر شکل دیافراگم حسگر در اثر فشار هوا</figcaption>
</figure>

::: teacher راهنمای بیان مربی
بارومتر یا فشارسنج سنسوری است که فشار هوای اطراف پرنده را اندازه‌گیری می‌کند. چون با تغییر ارتفاع، فشار هوا هم تغییر می‌کند، فلایت‌کنترلر می‌تواند از این اطلاعات برای تخمین ارتفاع پرنده استفاده کند.
در RoBeeX بارومتر در کنار سنسورهای دیگر مثل IMU و ارتفاع‌سنج لیزری به کنترل بهتر ارتفاع کمک می‌کند. به زبان ساده، بارومتر به پرنده می‌گوید که نسبت به قبل بالاتر رفته یا پایین‌تر آمده است و فلایت‌کنترلر با استفاده از این اطلاعات، ارتفاع را پایدارتر نگه می‌دارد.
:::

## ToF: فاصله از زمان سفر نور

فرستنده پالس نور فروسرخ را به سطح می‌فرستد و گیرنده بازتاب را می‌بیند. با دانستن سرعت نور و زمان رفت‌وبرگشت، فاصله تخمین زده می‌شود. حسگر VL53L1X در RoBeeX از نور نامرئی ۹۴۰ نانومتر استفاده می‌کند و برد اسمی آن تا ۴ متر است؛ برد واقعی به سطح، زاویه و نور محیط وابسته است.

::: teacher نکتهٔ واژگانی
در این دوره عبارت‌های ToF، فاصله‌سنج لیزری و Bottom LiDAR برای حسگر زیر پرنده دیده می‌شوند. برای هنرجو روشن کنید که هدف آموزشی این بخش «فاصله از سطح زیر» است، نه نقشه‌برداری سه‌بعدی محیط.
:::

## پرسش‌های رایج

::: faq چرا یک حسگر ارتفاع کافی نیست؟

**پاسخ:** هر حسگر محدودیت دارد. ToF فاصله از سطح زیر را خوب می‌سنجد و بارومتر تغییر ارتفاع کلی را دنبال می‌کند. ترکیب آن‌ها پایدارتر است.
:::

::: faq آیا Lidar روبیکس می‌تواند هر چیزی را ببیند؟

**پاسخ:** خیر. این حسگر برای اندازه‌گیری فاصله در محدوده و شرایط مشخص طراحی شده و جنس سطح، زاویه و نور محیط می‌تواند اثر بگذارد.
:::

## تمرین

سطح زیر پرنده را در یک سناریوی روی میز و روی زمین مقایسه کنید. مشخص کنید ToF و بارومتر دربارهٔ کدام مرجع اطلاعات می‌دهند.

## کوییز نهایی

1. بارومتر فاصلهٔ مستقیم تا کف را اندازه می‌گیرد؟
2. چرا بازتاب، زاویه و نور روی فاصله‌سنج اثر می‌گذارند؟

::: teacher معیار قبولی
فاصله از سطح زیر با ارتفاع تخمینی از فشار هوا یکی گرفته نشود.
:::

[بخش قبل](02-imu) · [بازگشت به جلسه](./) · [بخش بعد](04-optical-flow)
