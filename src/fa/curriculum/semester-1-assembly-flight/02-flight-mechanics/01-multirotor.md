---
orderPriority: 50
---

# بخش ۱: مولتی‌روتور

در پایان این بخش، هنرجو می‌تواند ساختار مولتی‌روتور و پیکربندی‌های آن را بر اساس تعداد موتور تشخیص دهد.

## از «پهپاد» به «مولتی‌روتور»

مولتی‌روتور پرنده‌ای است که چند موتور، چند ملخ و یک سامانهٔ کنترل دارد. هر موتور یک ملخ را می‌چرخاند؛ هر ملخ هوا را به پایین شتاب می‌دهد و نیروی رو به بالا تولید می‌کند. مجموع و اختلاف این نیروها تعیین می‌کند پرنده بالا برود، کج شود یا بچرخد.

| نام پیکربندی | تعداد موتور | ویژگی آموزشی مهم |
| --- | ---: | --- |
| بای‌کوپتر | ۲ | برای کنترل کامل معمولاً به سازوکارهای اضافی نیاز دارد |
| تری‌کوپتر | ۳ | اغلب یک مکانیزم تغییر زاویه برای کنترل Yaw دارد |
| کوادکوپتر | ۴ | تعادل مناسب بین سادگی، هزینه و کنترل؛ پیکربندی RoBeeX |
| هگزاکوپتر | ۶ | رانش و امکان حمل بار بیشتر، با مصرف و پیچیدگی بالاتر |
| اکتاکوپتر | ۸ | مناسب بار و افزونگی بیشتر، ولی سنگین‌تر و گران‌تر |

::: teacher سؤال مفهومی
نگویید «هشت موتور بهتر از چهار موتور است». بپرسید: «برای حمل دوربین سنگین چه چیزی به دست می‌آوریم و چه چیزی از دست می‌دهیم؟» پاسخ خوب هم‌زمان رانش بیشتر و هزینه، وزن، مصرف و پیچیدگی بیشتر را می‌بیند.
:::

## پیکربندی‌ها و جهت چرخش موتورها

### ساختار شناسی کوادکوپتر RoBeeX

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/student-assembling-robeex.webp" alt="ساختار شناسی کوادکوپتر RoBeeX" width="1376" height="768" loading="eager" decoding="async" srcset="/assets/curriculum/semester-1/student-assembling-robeex-320w.webp 320w, /assets/curriculum/semester-1/student-assembling-robeex-640w.webp 640w, /assets/curriculum/semester-1/student-assembling-robeex-1280w.webp 1280w, /assets/curriculum/semester-1/student-assembling-robeex.webp 1376w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>ساختار شناسی کوادکوپتر RoBeeX</figcaption>
</figure>

::: teacher راهنمای بیان مربی
در این بخش می‌خواهیم با ساختار کوادکوپتر RoBeeX و قطعات اصلی آن آشنا شویم. یک کوادکوپتر از بخش‌هایی مثل بدنه، موتور‌ها، ملخ‌ها، برد کنترل پرواز، باتری، سنسورها و بخش‌های ارتباطی تشکیل شده است. هر کدام از این قطعات وظیفه مشخصی دارند و در کنار هم باعث می‌شوند پرنده بتواند پرواز کند و کنترل شود.
در ادامه، قطعات RoBeeX را یکی‌یکی بررسی می‌کنیم، با وظیفه هر بخش آشنا می‌شویم و می‌بینیم این اجزا چگونه به یکدیگر متصل می‌شوند تا در نهایت یک ربات پرنده کامل ساخته شود.
:::

### مولتی‌روتور چیست و چگونه رانش تولید می‌کند؟

مولتی‌روتور پرنده‌ای است که با چند موتور و ملخ پرواز می‌کند. هر ملخ هوا را به پایین می‌راند و نیروی واکنش، پرنده را به بالا هل می‌دهد. فلایت‌کنترلر با تغییر هماهنگ سرعت موتورها، مقدار و جهت این نیرو را کنترل می‌کند.

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/industrial-octocopter.webp" alt="مولتی‌روتور صنعتی با چندین موتور" width="637" height="337" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/industrial-octocopter-320w.webp 320w, /assets/curriculum/semester-1/industrial-octocopter.webp 637w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>افزایش تعداد موتورها می‌تواند رانش و ظرفیت حمل بار را بیشتر کند، اما وزن و پیچیدگی را هم افزایش می‌دهد.</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/industrial-agricultural-quadcopter.webp" alt="کوادکوپتر صنعتی چهارموتوره" width="992" height="495" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/industrial-agricultural-quadcopter-320w.webp 320w, /assets/curriculum/semester-1/industrial-agricultural-quadcopter-640w.webp 640w, /assets/curriculum/semester-1/industrial-agricultural-quadcopter.webp 992w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>کوادکوپتر صنعتی؛ چهار موتور روی چهار بازو</figcaption>
</figure>

<figure class="curriculum-media lesson-figure">
  <img src="/assets/curriculum/semester-1/robeex-educational-quadcopter.webp" alt="کوادکوپتر آموزشی روبیکس" width="956" height="718" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-educational-quadcopter-320w.webp 320w, /assets/curriculum/semester-1/robeex-educational-quadcopter-640w.webp 640w, /assets/curriculum/semester-1/robeex-educational-quadcopter.webp 956w" sizes="(max-width: 820px) calc(100vw - 64px), 760px">
  <figcaption>روبیکس؛ نمونهٔ آموزشی یک کوادکوپتر چهارموتوره</figcaption>
</figure>

::: teacher راهنمای بیان مربی
مولتی‌روتور به پرنده‌ای گفته می‌شود که برای پرواز از چند موتور و ملخ استفاده می‌کند. هر موتور با چرخاندن ملخ، نیرویی به سمت بالا ایجاد می‌کند و مجموع این نیروها باعث بلند شدن پرنده می‌شود.
مولتی‌روتورها می‌توانند تعداد موتورهای متفاوتی داشته باشند؛ مثلاً مدل‌های سه‌موتوره، چهارموتوره، شش‌موتوره و هشت‌موتوره وجود دارند. کوادکوپتر یکی از رایج‌ترین انواع مولتی‌روتور است که چهار موتور دارد. روبیکس نیز یک کوادکوپتر چهارموتوره است.
:::

### انواع مولتی‌روتور بر اساس تعداد موتور

هر مولتی‌روتور را می‌توان از روی تعداد موتورهایش شناخت. این تعداد فقط یک اسم نیست؛ روی توان حمل بار، مصرف باتری، پیچیدگی کنترل و هزینهٔ ساخت اثر می‌گذارد.

| مدل | تعداد موتور | تصویر | نکتهٔ آموزشی |
| --- | ---: | --- | --- |
| بای‌کوپتر | ۲ | <img class="inline-table-image" src="/assets/curriculum/semester-1/agricultural-quadcopter-front-view.webp" alt="نمونه بای‌کوپتر" width="466" height="233" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/agricultural-quadcopter-front-view-160w.webp 160w, /assets/curriculum/semester-1/agricultural-quadcopter-front-view-320w.webp 320w, /assets/curriculum/semester-1/agricultural-quadcopter-front-view.webp 466w" sizes="160px"> | برای کنترل پایدار معمولاً به مکانیزم تغییر زاویه یا طراحی خاص نیاز دارد. |
| تری‌کوپتر | ۳ | <img class="inline-table-image" src="/assets/curriculum/semester-1/tricopter.webp" alt="نمونه اکتاکوپتر" width="960" height="720" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/tricopter-160w.webp 160w, /assets/curriculum/semester-1/tricopter-320w.webp 320w, /assets/curriculum/semester-1/tricopter.webp 960w" sizes="160px"> | نسبت به کوادکوپتر ساده‌تر و سبک‌تر است، اما کنترل Yaw در آن معمولا پیچیده‌تر می‌شود. |
| کوادکوپتر | ۴ | <img class="inline-table-image" src="/assets/curriculum/semester-1/robeex-quadcopter.webp" alt="نمونه هگزاکوپتر" width="524" height="394" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/robeex-quadcopter-160w.webp 160w, /assets/curriculum/semester-1/robeex-quadcopter-320w.webp 320w, /assets/curriculum/semester-1/robeex-quadcopter.webp 524w" sizes="160px"> | رایج‌ترین انتخاب آموزشی است؛ RoBeeX هم در همین خانواده قرار می‌گیرد. |
| هگزاکوپتر | ۶ | <img class="inline-table-image" src="/assets/curriculum/semester-1/agricultural-hexacopter.webp" alt="نمونه کوادکوپتر" width="800" height="487" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/agricultural-hexacopter-160w.webp 160w, /assets/curriculum/semester-1/agricultural-hexacopter-320w.webp 320w, /assets/curriculum/semester-1/agricultural-hexacopter.webp 800w" sizes="160px"> | رانش و ظرفیت حمل بار بیشتری دارد، اما باتری بیشتری مصرف می‌کند. |
| اکتاکوپتر | ۸ | <img class="inline-table-image" src="/assets/curriculum/semester-1/agricultural-octocopter-front-view.webp" alt="نمونه تری‌کوپتر" width="491" height="259" loading="lazy" decoding="async" srcset="/assets/curriculum/semester-1/agricultural-octocopter-front-view-160w.webp 160w, /assets/curriculum/semester-1/agricultural-octocopter-front-view-320w.webp 320w, /assets/curriculum/semester-1/agricultural-octocopter-front-view.webp 491w" sizes="160px"> | برای بارهای سنگین‌تر یا مأموریت‌های حرفه‌ای‌تر مناسب است، ولی هزینه و پیچیدگی آن بالاتر است. |

::: teacher راهنمای بیان مربی
از هنرجوها بخواهید فقط تعداد موتورها را حفظ نکنند. برای هر ردیف بپرسید: «اگر موتور اضافه کنیم چه چیزی بهتر می‌شود و چه چیزی سخت‌تر؟» پاسخ خوب باید هم مزیت رانش بیشتر را ببیند و هم هزینهٔ وزن، مصرف انرژی و پیچیدگی کنترل را.
:::

## پرسش‌های رایج

::: faq چرا کوادکوپتر دقیقاً چهار موتور دارد؟

**پاسخ:** چهار موتور امکان برخاست عمودی و کنترل حرکت در همه جهت‌ها را با ساختار نسبتاً ساده فراهم می‌کند.
:::

::: faq آیا تعداد موتور بیشتر همیشه بهتر است؟

**پاسخ:** خیر. موتور بیشتر می‌تواند نیروی بیشتری بدهد، اما وزن، مصرف، هزینه و پیچیدگی را هم بالا می‌برد.
:::

## تمرین

تصاویر مولتی‌روتورها را بر اساس تعداد موتور دسته‌بندی کنید و اجزای اصلی یک کوادکوپتر خاموش را نشان دهید.

## کوییز نهایی

1. فرق مولتی‌روتور و کوادکوپتر چیست؟
2. چرا موتور بیشتر همیشه انتخاب بهتری نیست؟

::: teacher معیار قبولی
دستهٔ کلی از پیکربندی چهارموتوره جدا شود و وزن، مصرف و پیچیدگی در مقایسه لحاظ شوند.
:::

[بخش قبل](../01-introduction/06-safety) · [بازگشت به جلسه](./) · [بخش بعد](02-motor-layout)
