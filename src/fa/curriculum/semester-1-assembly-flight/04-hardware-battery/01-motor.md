---
orderPriority: 40
---

# بخش ۱: موتور

در این بخش مسیر تبدیل انرژی الکتریکی به چرخش را دنبال می‌کنیم، موتورهای Brushed و Brushless را مقایسه می‌کنیم و با موتور Coreless Brushed RoBeeX آشنا می‌شویم.

## هدف‌های بخش

- مقایسهٔ موتور Brushed و Brushless؛
- معرفی Coreless Brushed RoBeeX و تفاوت Coreless با Brushless؛
- توضیح نقش موتور در زنجیرهٔ تبدیل انرژی.

::: teacher آماده‌سازی
RoBeeX خاموش با باتری جدا و نمونهٔ موتور در صورت دسترسی آماده کنید. شناخت موتور با مشاهدهٔ قطعه و تصاویر انجام می‌شود؛ موتور را روشن نکنید.
:::

## زنجیرهٔ انرژی

`باتری → جریان الکتریکی → موتور → چرخش محور → ملخ → جریان هوا → رانش`

اگر هر حلقه اشتباه باشد، بقیهٔ سیستم نمی‌تواند با نرم‌افزار آن را کاملاً جبران کند. موتور ضعیف، ملخ اشتباه یا باتری نامناسب باید در سخت‌افزار اصلاح شود.

## موتور جریان مستقیم یا DC

موتور DC انرژی الکتریکی باتری را با کمک سیم‌پیچ و آهنربای دائمی به حرکت چرخشی تبدیل می‌کند. دو خانوادهٔ رایج آن عبارت‌اند از:

- **جاروبک‌دار (Brushed):** جابه‌جایی جریان با تماس مکانیکی جاروبک‌ها انجام می‌شود.
- **بدون جاروبک (Brushless):** جابه‌جایی جریان را مدار کنترل الکترونیکی انجام می‌دهد.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/brushless-motor-and-propeller-exploded-view.webp" alt="نمونهٔ موتور Brushless همراه با ملخ" width="800" height="449" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/brushless-motor-and-propeller-exploded-view-320w.webp 320w, /assets/curriculum/semester-1/brushless-motor-and-propeller-exploded-view.webp 800w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نمونهٔ موتور Brushless همراه با ملخ</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/brushed-dc-motor-operation.gif" alt="اجزای داخلی موتور DC جاروبک‌دار" width="320" height="240" loading="lazy" decoding="async">
  <figcaption>اجزای داخلی موتور DC جاروبک‌دار</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/three-phase-brushless-motor-operation.webp" alt="سیم‌پیچ‌های سه‌فاز در موتور Brushless" width="600" height="506" loading="lazy" decoding="async">
  <figcaption>سیم‌پیچ‌های سه‌فاز در موتور Brushless</figcaption>
</figure>

::: teacher راهنمای بیان مربی
موتورهای مورد استفاده در کوادکوپترها معمولاً از نوع DC یا جریان مستقیم هستند؛ یعنی با برق باتری کار می‌کنند و انرژی الکتریکی را به حرکت چرخشی تبدیل می‌کنند.
دو نوع رایج موتور DC در پرنده‌ها، Brushed (براش‌دار) و Brushless (براشلس یا بدون جاروبک) هستند. موتورهای براش‌دار ساختار ساده‌تر و قیمت پایین‌تری دارند، اما به دلیل تماس مکانیکی براش‌ها، اصطکاک و استهلاک بیشتری دارند. در مقابل، موتورهای براشلس بازده، قدرت و طول عمر بیشتری دارند و به همین دلیل در بسیاری از کوادکوپترها استفاده می‌شوند.
انتخاب نوع موتور به عواملی مثل وزن پرنده، توان موردنیاز، مصرف انرژی و نوع کاربرد بستگی دارد.
:::

## موتور روبیکس

موتور روبیکس از نوع Coreless و در دستهٔ موتورهای DC جاروبک‌دار است. حذف هستهٔ آهنیِ آرمیچر در این ساختار، جرم و اینرسی چرخشی را کم می‌کند و پاسخ موتور را سریع‌تر می‌سازد.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/coreless-dc-motor.webp" alt="موتور Coreless کوچک به‌کاررفته در ربات‌های پرندهٔ سبک" width="473" height="400" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/coreless-dc-motor-320w.webp 320w, /assets/curriculum/semester-1/coreless-dc-motor.webp 473w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>موتور Coreless کوچک به‌کاررفته در ربات‌های پرندهٔ سبک</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/coreless-dc-motor-exploded-view.webp" alt="نمای انفجاری اجزای موتور Coreless جاروبک‌دار" width="1600" height="941" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/coreless-dc-motor-exploded-view-320w.webp 320w, /assets/curriculum/semester-1/coreless-dc-motor-exploded-view-640w.webp 640w, /assets/curriculum/semester-1/coreless-dc-motor-exploded-view-1280w.webp 1280w, /assets/curriculum/semester-1/coreless-dc-motor-exploded-view.webp 1600w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>نمای انفجاری اجزای موتور Coreless جاروبک‌دار</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در RoBeeX از موتورهای کوچک Coreless Brushed DC استفاده شده است. این موتورها به دلیل وزن کم، اندازه کوچک و سرعت چرخش بالا برای یک ربات پرنده سبک مثل RoBeeX مناسب هستند.
داخل این موتور، با عبور جریان برق از سیم‌پیچ، میدان مغناطیسی ایجاد می‌شود و در کنار آهنرباهای موتور باعث چرخش محور می‌شود. براش‌ها نیز وظیفه انتقال جریان برق به قسمت چرخان موتور را بر عهده دارند.
فلایت‌کنترلر با تغییر توان الکتریکی هر موتور، سرعت چرخش آن را کنترل می‌کند. در نتیجه می‌تواند نیروی هر ملخ را کم یا زیاد کند و حرکاتی مثل بالا رفتن، Roll، Pitch و Yaw را ایجاد کند.
:::

## موتور RoBeeX چرا Coreless است؟

موتور DC براش‌دار با تماس مکانیکی جاروبک‌ها جریان را به بخش چرخان می‌رساند. موتور Brushless کموتاسیون الکترونیکی دارد و معمولاً بازده و عمر بیشتری ارائه می‌کند، اما کنترلر پیچیده‌تری می‌خواهد. موتور **Coreless Brushed** RoBeeX هستهٔ آهنی سنگین سیم‌پیچ را حذف می‌کند؛ در نتیجه سبک و پاسخ‌گو است و برای این کلاس وزنی مناسب است، هرچند همچنان جاروبک و استهلاک مکانیکی دارد.

::: teacher سؤال فنی
«Coreless» را با «Brushless» یکی ندانید. Coreless به حذف هستهٔ آهنی سیم‌پیچ اشاره می‌کند؛ موتور RoBeeX در خانوادهٔ Brushed DC است.
:::

## پرسش‌های رایج

::: faq چرا موتور کورلس هنوز براش‌دار حساب می‌شود؟

**پاسخ:** در موتور کورلس هسته آهنی سیم‌پیچ حذف شده، اما سازوکار تماس الکتریکی آن در خانواده موتورهای براش‌دار قرار می‌گیرد.
:::

## کوییز نهایی

1. تفاوت Coreless و Brushless چیست؟

::: teacher معیار قبولی
هنرجو باید موتور Coreless RoBeeX را در خانوادهٔ Brushed DC قرار دهد. اگر Coreless را Brushless می‌نامد، پیش از مونتاژ مرور اصلاحی انجام شود.
:::

[بخش قبل](../03-sensors-control/06-flight-control) · [بازگشت به جلسه](./) · [بخش بعد](02-frame)
