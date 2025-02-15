---
title: 03. The House
description: Build your brand new thing
---

## Будуємо вашу новісіньку штуку

Отже, ви втратили квартиру, а енергетична компанія не бере слухавку. Та нічого страшного! Головне — мати дах над головою (або кодом). Тож закачуємо рукави й зводимо будиночок. Повірте, вам захочеться мати затишне місце, де можна поставити ноутбук і спокійно вдосконалювати свої навички кодування.

### Фундамент: HTML (або земля й бетон)

Як кожен будинок починається з фундаменту, так кожен сайт починається з HTML. Уявіть HTML як землю, яку копаєте, й бетон, який заливаєте. Якщо все виконаєте абияк, ваша конструкція може “поплисти” при першому ж пориві вітру. Але не лякайтеся — вам не знадобиться ані величезний бур, ані автонавантажувач. Просто відкрийте текстовий редактор (або той класний інструмент з ШІ, який ви давно хотіли спробувати) і почніть із:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My New House</title>
</head>
<body>
  <h1>Hello from my brand-new abode!</h1>
</body>
</html>
```

Бум. Фундамент закладено. Одним цим кодом ви не врятуєтеся від дощу і навряд чи здивуєте сусідів (поки що!), але це початок.

### Зводимо стіни: CSS (або фарба, дерево й гіпсокартон)

Зрозуміло, неможливо жити в будинку з одним тільки бетонним фундаментом, тож час додати дерев’яні балки та стіни. Це й є ваш CSS. Він визначає, як усе виглядатиме — де стоїть яка стіна та якого вона кольору. Ось невеличкий фрагмент, аби додати стилю вашій веб-оселі:

```css
body {
  background-color: #f4f4f4; /* Легкий, повітряний відтінок */
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
  text-align: center;
  padding-top: 50px;
}
```

Коли ви підключите цей CSS-файл до свого HTML, то це буде все одно що зайти до дому, який раптом став набагато більшим за голу цементну плиту. У вас уже з’явилися стіни, й вони не обов’язково білі (якщо це не ваша фішка).

### Додаємо дах: JavaScript (або базові комунікації)

Звісно, дах захищає від дощу, але в сучасному будинку потрібно дещо більше, ніж черепиця. Потрібні світло, вода й часом круті штуки на кшталт автоматичного котячого туалету. У світі вебу це JavaScript. Саме він додає логіку й взаємодію, що робить сайт “живим”. Навіть простий скрипт може перетворити ваш статичний будиночок на “розумний”:

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('p');
    greeting.textContent = 'Welcome to my humble abode!';
    document.body.appendChild(greeting);
  });
</script>
```

Цей шматочок коду — наче під’єднати проводку й увімкнути світло. Тепер ваш дім може вітати гостей відразу, щойно вони зайдуть.

### Досліджуємо покинуті будівлі: Inspect Element

Перш ніж звести свій будиночок, ви, мабуть, нишком лазили по сусідах, як отой що неподалік вашого будиночку, що за адресою [example.com](https://example.com) — знімаючи шар фарби, щоб подивитися, що під ним — натиснувши правою кнопкою і обравши «Inspect». Це дозволяє зазирнути “під капот” будь-якого сайту. Якщо десь бачили цікавий дизайн чи складне компонування, запустіть Developer Tools. Ви побачите HTML-каркас (фундамент) і CSS-оздоблення (шпалери, фарбу, декор). Навіть JavaScript-проводка там є, якщо знайти, де дивитися.

Виділяти час на такі “розкопки” дуже корисно: дивіться, як усе роблять професіонали. Жоден кресленик не є закритим, коли ви навчаєтеся, — але не варто сліпо копіювати чийсь палац. У вас же свій будинок мрії, пам’ятаєте?

### Комунальні послуги й сусіди: ШІ й фрілансери

Тепер щодо тих комунальних благ, які ви самі (або не хочете, або не вмієте) проводити. Для води, світла чи якогось крутого рішення з дахом можна викликати майстрів — наприклад, генератори коду на основі ШІ чи приязних сусідів-фрілансерів. Це не шахрайство; це розумний крок. Ви все ще архітектор, але можете доручити важку роботу комусь іншому, щоб ваш будинок не розлетівся під час наступної бурі.

- **ШІ**: Нехай він займається нудними справами — генерує шаблонний код, рефакторить ваші функції чи підказує потрібний синтаксис. Це як сусід, який позичає вам інструменти, яких ви ще не маєте.  
- **Фрілансери**: Бувають моменти, коли без профі не обійтись — скажімо, щоб встановити крутий камін або добудувати другий поверх. Найманий спеціаліст може вберегти від фатальних помилок (на кшталт відсутності опорної балки, або у програмуванні — незахищеного вводу даних).

### Боронимося від ведмедів і негоди: основи безпеки

Будиночки в лісі можуть стати жертвою дикої природи. Так само й сайти приваблюють усіляких цікавих “відвідувачів”, не завжди з добрими намірами. Мінімум, що варто зробити — це “замкнути двері” (HTTPS) і уважно слідкувати, що саме ви зберігаєте в коді (API-ключі, наприклад). Якщо відчуваєте загрозу — час подбати про високий паркан або засоби відлякування ведмедів: надійну політику паролів, валідацію вводу чи додаткові системи безпеки. Якщо ви ще не гуру безпеки — нічого страшного; головне розуміти, що це як мінімум “замок на дверях”.

### Робимо _свій_ дім: особисті штрихи

Ваш сайт, як справжній будинок, має відображати вашу особистість. Може, це яскрава колірна схема з химерними шрифтами або калькулятор на JavaScript для ідеальної пропорції вранішньої кави. Головне — зробити все _по-своєму_. Не біда, якщо ви ще вчитеся й код трохи “кривенький”. Саме в цьому й полягає справжня майстерність (і відлагодження). З часом ви залатаєте дірки, укріпите стіни й добудуєте ту ігрову кімнату, про яку завжди мріяли.

### Загальна картина

- **HTML** = Фундамент: хай буде чистим і надійним.  
- **CSS** = Стіни й фарба: зробіть вигляд крутим.  
- **JavaScript** = Дах і комунікації: вдихніть у все це життя.  
- **ШІ та фрілансери** = Опційні майстри: чудово, коли треба спеціалізована допомога або хочеться зекономити час.

### Готові заселятися?

Не переймайтеся, якщо у вас іще бракує вікон чи ваш код має “двері”, що відчиняються через раз. Це нормальна справа! Головне, що ви почали будувати щось _своє_. Ви перестали просто зазирати в чужий код і взялися за власний молоток і цвяхи (HTML та CSS), а ще й під’єднали електрику (JavaScript).

Отож, уперед — облаштовуйтеся! Кастомізуйте верстку, вивішуйте цифрову табличку “Ласкаво просимо”, експериментуйте з новими колірними схемами чи бібліотеками JavaScript. А якщо щось зламається — ви вже знаєте, де шукати проблему. Адже ви все це збудували власноруч.

Якщо ще трохи губитеся — нагадую: #AdventOfReliverse — це про крок у нові виклики й поступове розгризання їх на шматочки. Коли холодний вітер сумнівів дує крізь напівготові стіни, згадайте, що ви здатні будувати, навчатися та адаптуватися. Та й машина під двором усе ще ваша (з попереднього випуску!) — поки що виглядає не дуже, але ж це ваш транспорт, а отже — ваша свобода.

Візьміть інструменти, помахайте рукою зруйнованому багатоквартирному будинку, що лишився позаду, і беріться до оздоблювальних робіт. А коли закінчите, сядемо в автівку й пошукаємо ще кілька місць для забудови. Повірте, попереду у вас ще купа крутих пригод — і в будівництві, і в кодуванні. Поїхали далі!

---

## Коротко (TL;DR)

Усе починається з банального відкриття браузера. Уявіть, що браузер — це жвава вулиця, а сайти — це машини або й цілі будівлі обабіч дороги. Ви бачите їх зовні, як шар фарби на стіні. Але кожен сайт має глибший устрій. Зазвичай було б нечемно видирати цеглу зі стін чужого будинку або роздивлятися мотор чужої автівки без дозволу. Проте задля навчання ми злегка порушимо цю соціальну норму в нашому уявному світі.

Припустімо, ми підійшли до покинутого будинку за адресою **[https://example.com](https://example.com/)**. Там немає нікого, хто б сказав “не можна”, тож ми віддираємо шматок вицвілої фарби. Вітаю — ви щойно клацнули правою кнопкою в браузері й обрали «Inspect»! Можливо, вас здивує, що там усередині. Це не просто цегла, а ще й дивні матеріали, яких ви поки що не розумієте. Не біда! Ви поки не будівельник, але невдовзі станете ним, бо — на жаль — ви вже лишилися без житла й тепер мусите збудувати нове. (До того ж у вашої автівки немає даху, а ви досі не автомеханік. Ото халепа.)
