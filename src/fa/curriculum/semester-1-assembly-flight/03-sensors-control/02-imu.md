---
orderPriority: 50
---

# بخش ۲: IMU

در پایان این بخش، هنرجو می‌تواند دادهٔ شتاب‌سنج و ژیروسکوپ را تفکیک و دلیل ترکیب آن‌ها را بیان کند.

## واحد اندازه‌گیری اینرسی (IMU)

IMU مخفف Inertial Measurement Unit یا «واحد اندازه‌گیری اینرسی» است. این واحد با ترکیب ژیروسکوپ و شتاب‌سنج، اطلاعات لازم برای تخمین زاویه و نرخ چرخش پرنده را فراهم می‌کند.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/imu-accelerometer-gyroscope-axes.webp" alt="نمایش محل و جهت‌گیری IMU روی برد پرنده" width="529" height="526" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/imu-accelerometer-gyroscope-axes-320w.webp 320w, /assets/curriculum/semester-1/imu-accelerometer-gyroscope-axes.webp 529w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نمایش محل و جهت‌گیری IMU روی برد پرنده</figcaption>
</figure>

::: teacher راهنمای بیان مربی
IMU یا «واحد اندازه‌گیری اینرسی» یکی از مهم‌ترین سنسورهای پرنده است و به فلایت‌کنترلر کمک می‌کند بفهمد پرنده در چه وضعیتی قرار دارد و چگونه حرکت می‌کند.
IMU معمولاً از دو بخش اصلی تشکیل می‌شود: ژیروسکوپ که سرعت چرخش پرنده را حول محورهای Roll، Pitch و Yaw اندازه می‌گیرد و شتاب‌سنج که شتاب و تغییرات حرکتی پرنده را تشخیص می‌دهد.
فلایت‌کنترلر اطلاعات این سنسورها را چندین بار در هر ثانیه بررسی می‌کند تا متوجه شود پرنده به کدام سمت کج یا در حال چرخش است و سپس با تغییر سرعت موتورها، تعادل و پایداری پرواز را حفظ می‌کند.
:::

## مشاهدهٔ واکنش IMU به حرکت

<figure class="curriculum-media lesson-figure">
  <video src="/assets/curriculum/semester-1/imu-stabilization.mp4" controls playsinline preload="metadata"></video>
  <figcaption>نمایش زندهٔ تغییر زاویه و حرکت ثبت‌شده توسط IMU</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در این ویدیو می‌بینیم که IMU می‌تواند حرکت و زاویه یک جسم را در لحظه تشخیص دهد. با حرکت دادن سنسور در دست، مدل نمایش‌داده‌شده روی صفحه هم تقریباً همان حرکت را انجام می‌دهد.
این یعنی فلایت‌کنترلر می‌تواند با کمک IMU متوجه شود پرنده به چه سمتی کج شده، چرخیده یا حرکت کرده است. همین اطلاعات پایه‌ی حفظ تعادل پرنده هستند؛ یعنی سیستم ابتدا وضعیت پرنده را تشخیص می‌دهد و بعد با تغییر سرعت موتورها سعی می‌کند آن را به حالت پایدار برگرداند.
:::

## واحد اندازه‌گیری اینرسی RoBeeX

در روبیکس از IMU مدل Bosch BMI088 استفاده شده است. شتاب‌سنج و ژیروسکوپ این تراشه هر کدام حرکت را در سه محور اندازه می‌گیرند.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-imu-board-location.webp" alt="محل قرارگیری IMU روی برد اصلی روبیکس" width="1154" height="1154" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-imu-board-location-320w.webp 320w, /assets/curriculum/semester-1/robeex-imu-board-location-640w.webp 640w, /assets/curriculum/semester-1/robeex-imu-board-location.webp 1154w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>محل قرارگیری IMU روی برد اصلی روبیکس</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-imu-chip-closeup.webp" alt="نمای نزدیک تراشهٔ IMU مدل BMI088" width="108" height="130" loading="lazy" decoding="async">
  <figcaption>نمای نزدیک تراشهٔ IMU مدل BMI088</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در RoBeeX سنسور IMU روی برد اصلی فلایت‌کنترلر قرار دارد و وظیفه آن اندازه‌گیری حرکت و چرخش پرنده است. این بخش از ژیروسکوپ و شتاب‌سنج تشکیل شده و اطلاعات لازم برای تشخیص وضعیت پرنده را در اختیار فلایت‌کنترلر قرار می‌دهد.
در RoBeeX از سنسور Bosch BMI088 استفاده شده است؛ این سنسور می‌تواند شتاب و سرعت چرخش را در سه محور اندازه‌گیری کند. فلایت‌کنترلر با استفاده از این اطلاعات متوجه می‌شود پرنده به کدام سمت کج یا در حال چرخش است و سپس با تنظیم سرعت موتور‌ها، تعادل و پایداری پرواز را حفظ می‌کند.
:::

## شتاب‌سنج چه چیزی را اندازه می‌گیرد؟

- تشخیص حرکت پرنده
- تشخیص زاویه پرنده با توجه به محور گرانش

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/mems-accelerometer-structure.jpg" alt="ساختار ساده‌شدهٔ یک شتاب‌سنج MEMS" width="750" height="422" loading="lazy" decoding="async">
  <figcaption>ساختار ساده‌شدهٔ یک شتاب‌سنج MEMS</figcaption>
</figure>

::: teacher راهنمای بیان مربی
شتاب‌سنج یا Accelerometer یکی از بخش‌های اصلی IMU است و مقدار شتاب واردشده به پرنده را در سه جهت اندازه‌گیری می‌کند. یکی از مهم‌ترین چیزهایی که شتاب‌سنج همیشه حس می‌کند، شتاب گرانش زمین است.
فلایت‌کنترلر با بررسی جهت گرانش می‌تواند متوجه شود پرنده صاف است یا به جلو، عقب، چپ یا راست کج شده است. همچنین شتاب‌سنج تغییرات حرکتی پرنده را تشخیص می‌دهد؛ مثلاً زمانی که پرنده ناگهان حرکت می‌کند یا سرعتش تغییر می‌کند.
به زبان ساده، شتاب‌سنج به RoBeeX کمک می‌کند بفهمد پرنده چگونه حرکت کرده و نسبت به سطح زمین چه زاویه‌ای دارد.
:::

## ژیروسکوپ چه چیزی را اندازه می‌گیرد؟

- تشخیص زاویه پرنده پس از ترکیب با شتاب سنج
- تشخیص تغییرات زاویه پرنده برای واکنش سریع

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/mems-gyroscope-structure.jpg" alt="ساختار ساده‌شدهٔ یک ژیروسکوپ MEMS" width="750" height="422" loading="lazy" decoding="async">
  <figcaption>ساختار ساده‌شدهٔ یک ژیروسکوپ MEMS</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/gyroscope-coriolis-effect-diagram.webp" alt="واکنش جرم متحرک ژیروسکوپ به چرخش" width="900" height="395" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/gyroscope-coriolis-effect-diagram-320w.webp 320w, /assets/curriculum/semester-1/gyroscope-coriolis-effect-diagram-640w.webp 640w, /assets/curriculum/semester-1/gyroscope-coriolis-effect-diagram.webp 900w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>واکنش جرم متحرک ژیروسکوپ به چرخش</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <video class="lesson-animation" src="/assets/curriculum/semester-1/gyroscope-gimbal-rotation.mp4" poster="/assets/curriculum/semester-1/gyroscope-gimbal-rotation-poster.webp" width="400" height="300" aria-label="نمایش چرخش حول سه محور Roll، Pitch و Yaw" controls autoplay loop muted playsinline preload="metadata"></video>
  <figcaption>نمایش چرخش حول سه محور Roll، Pitch و Yaw</figcaption>
</figure>

::: teacher راهنمای بیان مربی
ژیروسکوپ یا Gyroscope بخش دیگری از IMU است و وظیفه دارد سرعت چرخش پرنده را حول سه محور Roll، Pitch و Yaw اندازه‌گیری کند. یعنی اگر پرنده شروع به چرخیدن یا کج شدن کند، ژیروسکوپ خیلی سریع این تغییر را تشخیص می‌دهد.
فلایت‌کنترلر اطلاعات ژیروسکوپ را همراه با اطلاعات شتاب‌سنج بررسی می‌کند تا بتواند وضعیت و زاویه پرنده را دقیق‌تر تشخیص دهد. به زبان ساده، ژیروسکوپ به RoBeeX کمک می‌کند بفهمد پرنده با چه سرعتی و به کدام جهت در حال چرخش است تا سیستم بتواند سریع واکنش نشان دهد و تعادل پرنده حفظ شود.
:::

## قطب‌نما (Compass)

- کامپس یا سنسور قطب نما کمک می کند تا پهپاد جهت خود در محور (Yaw) را تشخیص دهد.
- در روبیکس به دلیل کوچک بودن پرنده و بهره گیری از IMU با کیفیت و دقیق از قطب نما استفاده نشده است.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/three-axis-magnetometer-module.webp" alt="نمونهٔ ماژول قطب‌نمای سه‌محوره" width="277" height="219" loading="lazy" decoding="async">
  <figcaption>نمونهٔ ماژول قطب‌نمای سه‌محوره</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/compass-needle-animation.gif" alt="نمایش جهت‌گیری با کمک قطب‌نما" width="220" height="268" loading="lazy" decoding="async">
  <figcaption>نمایش جهت‌گیری با کمک قطب‌نما</figcaption>
</figure>

::: teacher راهنمای بیان مربی
قطب‌نما یا Compass سنسوری است که با اندازه‌گیری میدان مغناطیسی زمین، به فلایت‌کنترلر کمک می‌کند جهت قرارگیری پرنده را تشخیص دهد. این اطلاعات بیشتر برای مشخص کردن جهت پرنده حول محور Yaw و جلوگیری از خطای تدریجی جهت استفاده می‌شود.
البته همه کوادکوپترها الزاماً به قطب‌نما نیاز ندارند. در RoBeeX به دلیل ابعاد کوچک پرنده و استفاده از IMU دقیق و باکیفیت، از قطب‌نما استفاده نشده است و کنترل جهت و پایداری پرنده با کمک IMU انجام می‌شود.
:::

## شتاب‌سنج چه می‌بیند؟

شتاب‌سنج تغییر سرعت در سه محور و اثر گرانش را اندازه می‌گیرد. وقتی پرنده ساکن است، جهت بردار گرانش مرجع مناسبی برای تشخیص کج‌شدن است؛ اما هنگام حرکت تند، شتاب حرکتی با گرانش مخلوط می‌شود. پس شتاب‌سنج به‌تنهایی همیشه زاویهٔ سریع و تمیز نمی‌دهد.

## ژیروسکوپ چه می‌بیند؟

ژیروسکوپ نرخ چرخش حول Roll، Pitch و Yaw را اندازه می‌گیرد. پاسخ آن سریع است، اما اگر نرخ را برای به‌دست‌آوردن زاویه در زمان جمع کنیم، خطای کوچک نیز جمع می‌شود و Drift می‌سازد.

**ترکیب حسگرها:** شتاب‌سنج مرجع بلندمدت گرانش را می‌دهد و ژیروسکوپ تغییر سریع را. الگوریتم تخمین وضعیت از قوت هر دو استفاده می‌کند.

::: teacher پرسش تشخیصی
بپرسید: «پرنده ساکن است اما کمی کج؛ کدام حسگر مرجع گرانش را می‌بیند؟» سپس «پرنده خیلی سریع شروع به چرخش می‌کند؛ کدام حسگر زودتر نرخ تغییر را گزارش می‌کند؟» پاسخ‌ها به‌ترتیب شتاب‌سنج و ژیروسکوپ‌اند.
:::

## چرا RoBeeX قطب‌نما ندارد؟

قطب‌نما میدان مغناطیسی زمین را می‌سنجد و برای مرجع بلندمدت Heading مفید است. اما آهن، آهن‌ربا، سیم جریان‌دار و محیط داخلی می‌توانند اندازه‌گیری آن را مختل کنند. در طراحی کوچک آموزشی RoBeeX، کنترل پرواز کوتاه‌مدت داخلی بر IMU دقیق و حسگرهای موقعیت داخلی تکیه دارد. نبود قطب‌نما به معنی نبود Yaw نیست؛ نرخ Yaw با ژیروسکوپ اندازه‌گیری و کنترل می‌شود.

::: teacher مرز مفهومی
هنرجو ممکن است بگوید «پس RoBeeX جهت ندارد». اصلاح کنید: RoBeeX زاویه و نرخ Yaw نسبی را دنبال می‌کند؛ فقط مرجع مغناطیسی شمال ندارد.
:::

## پرسش‌های رایج

::: faq آیا IMU موقعیت دقیق پهپاد را می‌داند؟

**پاسخ:** IMU بیشتر شتاب و نرخ چرخش را اندازه می‌گیرد و برای تخمین زاویه بسیار مهم است، اما به‌تنهایی موقعیت دقیق در فضا را نمی‌دهد.
:::

::: faq چرا دو حسگر لازم است؟

**پاسخ:** شتاب‌سنج مرجع گرانش دارد ولی از حرکت‌های سریع اثر می‌گیرد. ژیروسکوپ سریع و نرم است ولی خطایش در زمان جمع می‌شود. ترکیب آن‌ها نتیجه بهتری می‌دهد.
:::

::: faq چرا RoBeeX قطب‌نما ندارد؟

**پاسخ:** در طراحی کوچک و آموزشی RoBeeX از IMU دقیق و حسگرهای داخلی دیگر استفاده شده و برای مأموریت‌های کوتاه داخلی، قطب‌نما ضرورت کمتری دارد.
:::

## تمرین بیشتر

دو ستون برای شتاب‌سنج و ژیروسکوپ بسازید و برای هرکدام «چه چیزی می‌سنجد»، «نقطه قوت» و «محدودیت» را بنویسید.

## تمرین

حرکت آرام، چرخش و ثابت نگه‌داشتن مدل را مقایسه کنید. برای هر حالت بگویید شتاب‌سنج و ژیروسکوپ چه نوع داده‌ای می‌دهند.

## کوییز نهایی

1. شتاب‌سنج و ژیروسکوپ چه تفاوتی دارند؟
2. چرا IMU به‌تنهایی موقعیت دقیق در اتاق را مشخص نمی‌کند؟

::: teacher معیار قبولی
شتاب/مرجع گرانش از نرخ چرخش جدا شود و محدودیت هر حسگر توضیح داده شود.
:::

[بخش قبل](01-stability) · [بازگشت به جلسه](./) · [بخش بعد](03-altimetry)
