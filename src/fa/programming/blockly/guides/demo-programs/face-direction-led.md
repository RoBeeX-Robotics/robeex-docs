---
orderPriority: 3
---

# ↔️ تشخیص راست و چپ چهره

این برنامه Blockly اقدامات زیر را انجام می‌دهد:

* **تشخیص:** یک فریم جدید خوانده می‌شود، چهره‌ها تشخیص داده می‌شوند و کادر آن‌ها رسم می‌شود.
* **جهت:** مرکز افقی اولین چهره با **۴۰ و ۶۰ درصد عرض تصویر** مقایسه می‌شود.
* **چراغ‌ها:** برای **چپ آبی**، **راست قرمز** و **بازه میانی سبز** نمایش داده می‌شود. در نبود چهره LEDها **خاموش** می‌شوند.

## نحوه کار برنامه

موتورها را غیرفعال نگه دارید. عضو `faces[0]` فقط بعد از بررسی خالی نبودن فهرست خوانده می‌شود. مرکز افقی کادر و عرض تصویر هر دو بر حسب پیکسل هستند. ۲۰ درصد میانی تصویر، ناحیه بی‌واکنش است تا حرکت‌های کوچک نزدیک مرکز باعث تغییر پی‌درپی رنگ نشوند. چپ و راست مربوط به مختصات تصویر دریافتی دوربین است؛ نمایش آینه‌ای ممکن است برداشت بیننده از این جهت‌ها را برعکس کند. برنامه تا فشردن Stop ادامه دارد.

## بلاک‌های استفاده‌شده در این برنامه

* [پردازش تصویر — Get Bounding Box Properties](/en/programming/blockly/references/block-categories/machine-vision.md#get-bounding-box-properties)
* [پردازش تصویر — Get Image Properties](/en/programming/blockly/references/block-categories/machine-vision.md#get-image-properties)
* [فهرست‌ها](/en/programming/blockly/references/block-categories/lists.md)

## کد برنامه

نام برنامه ذخیره‌شده: **Face Direction Lights**.

![↔️ تشخیص راست و چپ چهره](/assets/blockly-programming/demos/face-direction-led.jpg)

[دریافت برنامه ذخیره‌شده Blockly (فایل JSON)](/programs/blockly/face-direction-led.json)

---

### خلاصه برنامه

| پارامتر | مقدار/اقدام | عملکرد |
| :--- | :--- | :--- |
| ناحیه چپ | centerX < 0.4 × width | LED آبی. |
| ناحیه میانی | 0.4 × width ≤ centerX ≤ 0.6 × width | LED سبز. |
| ناحیه راست | centerX > 0.6 × width | LED قرمز. |
| نبود چهره | فهرست خالی | LED خاموش و عدم خواندن عضو کادر. |

[همه برنامه‌های نمونه](./index.md)
