---
title: "Inclusive and accessible UX/UI design"
description: "Inkluzywny oraz dostępny UX/UI design. Niniejsza praca dyplomowa to eksperymentalna próba wykonania dogłębnej analizy wygodnego w użyciu interfejsu użytkownika. Poprzez ocenę różnych stron i aplikacji, autor tej pracy spróbował wyjaśnić w jaki sposób projektować intuicyjny design z użyciem User Experience."
---

> This diploma thesis is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).
>
> KOLEGIUM MEDIÓW I KOMUNIKACJI SPOŁECZNEJ | Kierunek: GRAFIKA KOMPUTEROWA I PRODUKCJA MULTIMEDIALNA | Specjalność: Projektowanie UX | Nazarii Korniienko | Nr albumu studenta: 58975 | Inkluzywny oraz dostępny UX/UI design | Promotor: dr hab., prof. WSIiZ Andrzej Adamski | PRACA DYPLOMOWA LICENCJACKA | Rzeszów 2022

- [WSTĘP](#wstęp)
- [1. DĄŻĄC DO PRAWIDŁOWEGO ZROZUMIENIA UX/UI](#1-dążąc-do-prawidłowego-zrozumienia-uxui)
- [1.1. Rola interfejsów w społeczeństwie](#11-rola-interfejsów-w-społeczeństwie)
  - [1.1.1. O słabościach oraz psychologii człowieka](#111-o-słabościach-oraz-psychologii-człowieka)
  - [1.1.2. Kształtowanie przyzwyczajeń u człowieka](#112-kształtowanie-przyzwyczajeń-u-człowieka)
- [1.2. Przykłady użytecznego oraz inkluzywnego UX](#12-przykłady-użytecznego-oraz-inkluzywnego-ux)
  - [1.2.1. Prawidłowe projektowanie interfejsów](#121-prawidłowe-projektowanie-interfejsów)
  - [1.2.2. Dlaczego czasami lepiej nie oferować](#122-dlaczego-czasami-lepiej-nie-oferować)
- [2. PROJEKTOWANIE INTERFEJSÓW INKLUZYWNYCH](#2-projektowanie-interfejsów-inkluzywnych)
- [2.1. Ważne rzeczy w projektowaniu inkluzywnym](#21-ważne-rzeczy-w-projektowaniu-inkluzywnym)
  - [2.1.1. Najważniejsze cechy we wzroku ludzkim](#211-najważniejsze-cechy-we-wzroku-ludzkim)
  - [2.1.2. Standardy projektowe w zakresie wzroku](#212-standardy-projektowe-w-zakresie-wzroku)
- [2.2. Czym jest tworzona uniwersalność interfejsów](#22-czym-jest-tworzona-uniwersalność-interfejsów)
  - [2.2.1. Standardy UX kontrastowości w kolorach](#221-standardy-ux-kontrastowości-w-kolorach)
  - [2.2.2. Zalecenia dla rozmiarów oraz odległości](#222-zalecenia-dla-rozmiarów-oraz-odległości)
- [2.3. Budowa interfejsu dostępnego dla wszystkich](#23-budowa-interfejsu-dostępnego-dla-wszystkich)
  - [2.3.1. W jaki sposób interfejsy używają kroju pisma](#231-w-jaki-sposób-interfejsy-używają-kroju-pisma)
  - [2.3.2. Jak ułatwić korzystanie z Frontendu w sieci](#232-jak-ułatwić-korzystanie-z-frontendu-w-sieci)
  - [2.3.3. Audyt i testowanie dostępności interfejsu](#233-audyt-i-testowanie-dostępności-interfejsu)
  - [2.3.4. O kolorze i ciemnej stronie zaleceń WCAG](#234-o-kolorze-i-ciemnej-stronie-zaleceń-wcag)
- [3. PROJEKTOWANIE DESIGNU APLIKACJI WEBOWEJ](#3-projektowanie-designu-aplikacji-webowej)
- [3.1. Tworzenie interfejsu projektu aplikacji internetowej](#31-tworzenie-interfejsu-projektu-aplikacji-internetowej)
- [ZAKOŃCZENIE](#zakończenie)
- [LITERATURA](#literatura)

---

## WSTĘP

Niniejsza praca dyplomowa to eksperymentalna próba wykonania dogłębnej analizy wygodnego w użyciu interfejsu użytkownika. Poprzez ocenę różnych stron i aplikacji, autor tej pracy spróbował wyjaśnić w jaki sposób projektować intuicyjny design z użyciem User Experience. Na koniec pracy autor sam postarał się zaprojektować aplikację internetową, zgodną z przedstawionymi we wcześniejszej części pracy założeniami.

Aktualnie w 2022 roku wiele osób zna już terminologię interfejsów. Tylko nie wszyscy wiedzą, kiedy i w jaki sposób prawidłowo jej używać, żeby osiągnąć jak najlepsze wyniki. Autor podszedł do tego tematu bazując na własnym doświadczeniu i przeżyciach związanych z UX, dzięki którym odkrył jedną ważną rzecz.

Ta rzecz się stała jego filozofią. Jest to _inkluzywność i dostępność_, _projektowanie uniwersalne_. Do takiej filozofii w projektowaniu, można powiedzieć, że autor doszedł poprzez jego oczy. Całe życie, tak jak dużo innej młodzieży w dzisiejszych czasach, siedział bez światła przy niebieskim ekranie z niską jasnością. W wyniku tego z biegiem czasu jego wzrok szybko się pogorszył.

W pewnym okresie swojego życia zdecydował się mniej korzystać z okularów. Przeglądając strony internetowe, zrozumiał, że mnóstwo z nich nie są przystosowane do jego wzroku. Niektóre strony w sieci były nadal nieresponsywne, przez co czasami trudno mu było przeczytać cokolwiek nawet w powiększeniu. Co w takim razie mają powiedzieć osoby z chorobami oczu albo utraconym wzrokiem? Autor postarał się również omówić tę kwestię w swojej pracy.

Jako projektant UX oraz interfejsów internetowych, autor chce od razu podkreślić jedną ważną rzecz. Sprawa jest w tym, że każdy podobny do niego projektant musi, jego zdaniem, od czasu do czasu zadawać sobie pytanie – _„Czym jest dobry interfejs użytkownika?”_ – Niestety nie ma na to uniwersalnej odpowiedzi, więc dlatego każdy przypadek wymaga osobnych przemyśleń. Z tego względu kwestia odpowiedzi na takie pytanie zdecydowanie jest najważniejsza przed rozpoczęciem nowego projektu. Jeśli na początku projektu aplikacji internetowej czy też natywnej nie zdecydujemy, do jakiego rodzaju interfejsu dążymy, nieuchronnie napotkamy się na wiele problemów, np. pojawia się niemożliwość określenia tego, który aspekt naszego interfejsu jest najbardziej nieudany.

W związku z tym niemożliwe będzie także ustalenie priorytetów pracy. Również takiemu projektantowi trudno będzie wytłumaczyć innym członkom zespołu, że to i tamto, a nie tamto i to, należy zrobić z interfejsem. Jak też nie da się wytłumaczyć klientowi, że ten interfejs jest już dobry bez „czerwonego przycisku”.

Nawiasem mówiąc, _aplikację internetową/webową_ w prostszym języku możemy nazywać również _„strona/portal/witryna internetowa”_. Natomiast pod tzw. _aplikacją natywną_ zwykle się rozumie program systemu operacyjnego, który uruchamia się np. za pomocą pliku formatu _exe_.

Tak więc, czym chociażby dla autora pracy jest interfejs? Jest on w stanie zdefiniować odpowiedź na to pytanie dla każdego konkretnego swojego produktu i projektów innych osób. Definicja interfejsu zwykle składa się u niego z zestawu cech pochodzących z różnych koncepcji jakości interfejsu. Do cech wchodzi: 1) Interfejs jest dobry wtedy, jeśli jest _wygodny dla użytkownika_, kiedy jest łatwy i użyteczny; 2) Dobry interfejs _ma wysoką ergonomiczność_; 3) Jest _zoptymalizowany do swoich użytkowników_, odpowiedni do nich; 4) Pozwala stworzyć _możliwość powodowania przyszłego sukcesu_ komercyjnego.

Więc wychodząc z  definicji autora, przy projektowaniu interfejsu ważne jest, aby osiągnąć najlepsze możliwe rozwiązania zgodnie z jak największą liczbą takich definicji. Jeśli interfejs zmusza swoich użytkowników do popełniania błędów, to wtedy taki interfejs jest zły, a przynajmniej z natury gorszy od interfejsu, który pomaga uniknąć takich błędów. Dlatego musimy badać nasz UX. Oprócz tego należy zawsze pamiętać, że strony www są tworzone dla użytkowników, a nie dla ich właścicieli. A skoro interfejsy w największym stopniu są tworzone dla użytkowników, wtedy patrzymy na świat w bardziej szerokim sensie.

Z uwagi na wcześniejsze rozważania, przedstawienie analizy inkluzywności autora w tej pracy rozpoczyna się od tego, że musimy najpierw poznać prawidłowe kierunki zrozumienia UX oraz UI. Również musimy rozumieć jaką rolę odgrywają interfejsy w życiu ludzkim. Dopiero wtedy możemy poznawać, w jaki sposób tworzą inni specjaliści, żeby zrozumieć dobre i złe przykłady.

Kiedy poznamy dobre przykłady, możemy przejść do poznania standardów, które najbardziej pomogą nam przy uniwersalnym projektowaniu stron i aplikacji internetowych. Tylko wtedy będziemy mogli zacząć myśleć w prawidłowym kierunku o projektowaniu interfejsu, jak również zacząć je tworzyć. Należy tylko uważać, by nie wprowadzić siebie w różne mity i w błędne przekonania. Niektórzy myślą o projektowaniu inkluzywnym jako o projektowaniu dla osób niepełnosprawnych. Tak nie jest. Takie projektowanie _uwzględnia potrzeby i możliwości jak największej liczby osób_.

Inkluzywny design nie działa na rzecz konkretnej grupy, skupia się na specjalnych preferencjach i ogólnych sytuacjach. Projekt, który przeznaczony tylko dla osoby o podwyższonych potrzebach – nie jest inkluzywny, ponieważ wyklucza inne osoby. Jest on tylko technologią wspomagającą. Wykracza poza projektowanie dla „zwykłego człowieka”.

Prostym przykładem inkluzywności jest bankomat. Korzystanie z interfejsu wizualnego jest trudne dla osoby niedowidzącej, dlatego interfejs w bankomacie może być głosowy, jak też można włożyć do niego zestaw słuchawkowy. Osoba na wózku inwalidzkim ma trudności z korzystaniem z bankomatu, ponieważ bankomat jest zbyt wysoko. Projektanci celowo czasami obniżają obszar interakcji, aby ekran bankomatu mógł być używany z wózka inwalidzkiego.

Wyzwanie związane z projektowaniem inkluzywnym polega na tym, że znane produkty powinny być równie wygodne. „Zwykły użytkownik” częściej nawet nie zauważy zmian (gniazdo słuchawkowe czy wysokość interfejsu w bankomacie), ale użytkownicy wychodzący z kategorii przeciętnych docenią troskę o nich.

Nie możemy po prostu wyuczyć się o projektowaniu inkluzywnym, ponieważ jest ono ściśle związane z nabyciem różnych życiowych doświadczeń. Obowiązkiem dobrego projektanta jest zadbanie o to, aby każdy mógł korzystać z przedmiotu lub usługi na równi ze wszystkimi innymi.

Autor uwielbia robić inkluzje w interfejsach. To zawsze tworzy wyzwania, które są bardzo nietypowe i dotyczą ludzi. Takie rozwiązania związane są z najnowszymi innowacjami lub zachwycają swoją genialnością. W tych projektach trzeba wymyślać nietypowe rozwiązania np. rozwiązania dla osób, które mają problem z odczytywaniem nieczytelnego tekstu, usłyszeniem sygnału dźwiękowego, uderzeniem palcem w malutki przycisk. Jest to wyzwanie dla osób w każdym wieku i o każdych cechach ludzkich.

Dlatego nie powinniśmy tworzyć osobnych wersji stron internetowych dla osób niedowidzących i tak dalej, _musimy robić inkluzję_, która uwzględnia potrzeby wszystkich użytkowników bez wyjątku.

W lutym 2021 roku w Holandii przeprowadzono badanie wśród użytkowników smartfonów. Okazało się, że około 43% z uczestników badania korzysta z opcji personalizacji, jeżeli takie istnieją. Dzięki temu badaniu dowiadujemy się, że: 1) 32,6% badających użytkowników zmieniają rozmiar tekstu; 2) 26,8% zmienia motyw na ciemniejszy; 3) 14% korzysta z co najmniej dwóch ustawień; 4) 7% powiększają strony; 5) 6,9% zmieniają krój pisma na bardziej pogrubiony; 6) 6,1% używa wstrząsu telefonu do cofania; 7) 4,2% postrzega interfejs poprzez głos.

Tworząc UX projektu, powinniśmy uwzględnić różne _zasady dostępności_, zwykle podzielone na następujące elementy: 1) spójność; 2) wzorce; 3) intuicyjność; 4) nadmiar.

Elementy powinny być podobne do siebie, gdzie np. jeśli strona ma ikonę dzwonka, to wtedy wszystkie takie strony muszą mieć taką samą ikonę, a napis dla czytnika ekranu również powinien być taki sam. Najlepszym sposobem jest układanie napisów dla elementów czytnika ekranu na poziomie systemu. Ważna jest hierarchia elementów, struktura. Absolutnie każdy, zarówno widzący, jak i niewidzący, będzie oczekiwał od kart produktów tej samej struktury.

Dlatego, układając elementy na stronie www, należy pamiętać: ekran czyta się od lewej do prawej strony, z góry na dół. Instrukcje i inne ważne informacje nie powinny być umieszczane po _CTA (Call-to-action)_, skoro osoba może je po prostu przeoczyć.

Ważną rolę odgrywają modele mentalne. Ikony, etykiety, kolor i dźwięk. Wszystko powinno jasno określać interakcje. Projektant musi wiedzieć, jak osoba niewidoma postrzega element, czy rozumie czym jest ten element i jaka jest jego funkcja. Dobrą praktyką jest, kiedy zapewniamy osobom możliwość otrzymania informacji w taki sposób, w jaki potrafią je przyswajać. Niewidzące odbierają informacje za pomocą słuchu lub dotyku, niesłyszące za pomocą gestów, osoby bez rąk nie używają myszy.

Musimy pozwalać użytkownikom wchodzić w interakcję z produktem na różne sposoby: za pomocą głosu, dotyku, zakładki, joysticków. Jest to ważne nie tylko dla osób niepełnosprawnych. Niezależnie od tego, jak będziemy uczyć się inkluzji, jak będziemy ją tworzyć – nigdy nie trafimy w oczekiwania wszystkich.

Każdy projektant musi mieć własne doświadczenia i rozumieć, dlaczego robi się coś tak, a nie inaczej. Dlatego powinien mieć świadomość, że jeśli niewidomy użytkownik kazał mu coś zrobić, to to nie wystarczy, bo klient może nie do końca rozumieć, jak działa UX. Dlatego czasami projektant musi sam znaleźć rozwiązania, żeby wszystko wyglądało i działało, jak trzeba.

I wtedy projektowanie będzie w porządku: każdy ma inne zdanie. Niektórzy używają komputera jako tabletu, inni wykorzystują czytnik ekranu, inni wykorzystują wyłącznie swój słaby wzrok. Aby zaprojektować inkluzywną dostępność, należy wiedzieć o całej tej różnorodności ludzi. Świat się zmienia, ludzie się zmieniają.

Musimy być uważni na siebie nawzajem, na potrzeby tych, którzy nie są tacy jak my. I nawet jeśli ściśle przestrzegamy zasad WCAG, które zostają omówione w dalszej części pracy, interfejs może nie być idealny – ponieważ nie istnieje sposób uwzględnienia wszystkich nieoczywistych drobiazgów i szczegółów, które sprawiają, że produkt jest bardziej dostępny dla wszystkich osób.

Autor tej pracy uważa, że zazwyczaj częściowy lub całkowity ubytek słuchu nie przeszkadza w korzystaniu ze stron internetowych i aplikacji. Wiele osób dobrowolnie wycisza swoje gadżety. Jednak w grze lub w filmie ważne jest, aby zadbać o napisy. A jeśli interfejs danej usługi sygnalizuje dźwiękiem nową wiadomość lub udaną płatność, powinno to również istnieć wizualnie.

Również nie musimy iść w nadmiar z wizualnością, podczas gdy np. animacje mogą wywołać drgawki u osób z epilepsją. WCAG poleca możliwość wyłączenia animacji, które nie wpływają na zrozumienie interfejsu. Wytyczne Google zalecają automatyczne wyłączanie animacji treści po pięciu sekundach, a jeśli miganie jest konieczne, ograniczenie go do trzech klatek na sekundę.

Jak już wspomniano, nie ma sposobu uwzględnić wszystkich nieprawidłowości, które potencjalnie mogą zakłócić korzystanie ze strony internetowej lub aplikacji.

Migające animacje z dźwiękami niezrozumiałego pochodzenia i z niekontrastowym tekstem – raczej nie spodobają się nawet osobom bez problemów zdrowotnych. Jak też, biorąc pod uwagę potrzeby różnych grup, nie powinniśmy starać się zaspokoić ich wszystkich jednocześnie. Niezwykle kontrastowy interfejs z przyciskami na pół ekranu oraz ze szczegółowymi napisami pod każdym elementem nie przypadnie do gustu większości. Dobry interfejs dla „zwykłych osób” można już uznać za pierwszy krok w kierunku inkluzywności.

## 1. DĄŻĄC DO PRAWIDŁOWEGO ZROZUMIENIA UX/UI

## 1.1. Rola interfejsów w społeczeństwie

### 1.1.1. O słabościach oraz psychologii człowieka

_User Experience_, czyli _UX_, istnieje od zawsze w życiu ludzkim. UX jest tym, co odczuwamy przy korzystaniu z interfejsów, czyli bazuje na interfejsach, czyli na _User Interface / UI_. Wygodne interfejsy musimy projektować uniwersalnie. UI jest nie tylko pojęciem z informatyki czy elektroniki. Społeczeństwo używało tego za pradawnych czasów, jednak wtedy były to nie graficzne elementy na ekranie, jak teraz to rozumiemy, a zwykły kamień, którym rozpalano ogień czy nawet korzystanie z koła drewnianego.

Oznacza to, że interfejsy zostały stworzone przez ludzi dla ludzi, z tego powodu, że po prostu poszukiwano sposobu ułatwiania sobie życia za pomocą różnych przedmiotów i rozwiązań. Dlatego, dobry UI rozpoczyna się myśleniem o ludziach i musi być zrozumiały dla jak największej ilości użytkowników. Projektowanie wyraża się poprzez dostosowanie pewnego przedmiotu do człowieka. Czyli w przypadku UI musimy dostosowywać się do użytkownika, musimy wiedzieć o jego słabościach i psychologii.

Z tego wynika, że nie możemy zmuszać człowieka, aby samemu dostosowywał się do przedmiotu, a przedmiot dostosować do niego. Jako przykład można wziąć pilot do telewizora. Często mylimy się, na które klawisze naciskamy. Dzieje się tak przez to, że projektanci czasami umieszczają takie napisy pod, a nie nad klawiszami, dlatego zasłaniamy napisy przez własne palce. Ma tu również znaczenie i rozmiar samych klawisz.

Dzięki UI rozmawiamy z rzeczą, tak jak i w językach obcych: rozumiemy języki podobne do naszego. Tak samo jest z interfejsami - rozmawiamy przez znajome elementy. Te elementy pomagają nam zrozumieć dobrze zaprojektowany User Experience. UX jest tym, co odczuwamy. UI jest tym, co widzimy.

W swojej pracy dyplomowej dalej będę mówił bardziej o interfejsach elektronicznych, w szczególności, o internetowych oraz o interfejsach w aplikacjach mobilnych i komputerowych. Dlatego chcę od razu podać przykład tego, jak zwykłe pracujemy z podobnymi interfejsami.

Dość prostym przykładem są formy, pola do wypełnienia w aplikacjach i na stronach internetowych. Prawie zawsze korzystamy z różnych interfejsów dlatego, że chcemy osiągnąć jakiś cel. Kiedy człowiek wchodzi na stronę, myśli o swoim celu. Zdarza się, że źle zaprojektowane pola na stronie z listą hoteli, zmuszają tego człowieka do przygotowania różnych danych potrzebnych do wypełnienia formularza, oferują mu wypełnianie wszystkiego w odpowiedniej kolejności i formacie. O wiele wygodniej jest dać temu użytkownikowi jedno pole, w którym może wpisać wszystkie pomysły, które tylko sobie chce.

Dlatego musimy zaprojektować ten formularz dla wyszukiwania z listy strony tak, żeby użytkownik mógł wykonać z polami wszystko co chce, widząc od razu zmiany na ekranie. Przeciwnie możemy nie oferować formularza dla wyszukania hotelu, a najpierw pokazać popularne hotele, zanim jeszcze dana osoba skorzysta z tego samego wyszukiwania. A to znaczy, iż musimy najpierw pokazać użytkowniku dane, a nie formy. Wtedy nie nastraszymy tego użytkownika – wtedy nie porzuci naszej strony, w najbliższych sekundach jak tylko ją zobaczy.

### 1.1.2. Kształtowanie przyzwyczajeń u człowieka

Zwykle łatwiej nam jest korzystać z czegoś lub rozmawiać z kimś, jeśli rozumiemy to, co widzimy lub słyszymy. To oznacza, że rozumienie pochodzi od przyzwyczajeń. Przy kształtowaniu jakichkolwiek przyzwyczajeń indywidualna świadoma działalność staje się automatyczna; ruchy wykonują się same, świadomość jest wolna dla innych rzeczy, wtedy mamy pewność i nie czujemy już strachu.

Na przykład, dla małego dziecka zakładanie i sznurowanie butów to trudna sprawa, musi on wykonać kilkadziesiąt precyzyjnych ruchów w odpowiedniej kolejności, każdy etap musi być nim przemyślany. Dorosły człowiek, wręcz przeciwnie, jednocześnie może zakładać buty i nie przerywać rozmowy z inną osobą. Nie rozbija tego procesu na poszczególne ruchy, wykonuje to wszystko automatycznie w całości.

Z tego wynika, że kształtowanie przyzwyczajeń jest naturalnym mechanizmem. Kiedy umiejętność staje się nawykiem, myśląca część mózgu zostaje uwolniona, aby przetwarzać nowe informacje w znaczący sposób, a następnie gotowa już stopniowo nabywać nowe umiejętności. W ten sposób rutyna przestaje zajmować mózg, co pomaga człowiekowi nie zwariować od mycia zębów i naczyń.

Przyzwyczajenia to oczywiście dobra i ważna rzecz. Rodzi się na ten temat tylko jedno pytanie: co ma zrobić człowiek, który na przykład z jakiegoś powodu utracił obie ręce lub ma je znacznie uszkodzone? Wtedy z tymże ubieraniem i sznurowaniem butów może mu pomóc inny człowiek lub na przykład proteza ręki. I tym możemy nazwać – _inkluzywność_. A żeby inkluzywność jeszcze była prawdziwie pomocna, jej projektant musi znać różne zasady oraz instrumenty. W przypadku człowieka, który sznuruje innemu buty, musi najpierw nauczyć się to robić przez trzecią osobę. Jak w przypadku z protezą, jej inżynier musi stworzyć ją tak, żeby urządzenie wykonywało polecenia właściciela.

A skoro człowiek będzie miał protezę, to wynika pytanie o jej wydajność, o UX. Jeśli projektant nie wie do końca, jak będzie wygodnie wszystkim użytkownikom, to stara się _projektować uniwersalnie_ ten czy inny produkt lub interfejs. Wtedy człowiek z wadami może sobie samodzielnie ustawić pewne możliwości, na przykład: moc chwytu protezy, zasięg, dźwięk powiadomień oraz inne.

Czyli, w tym wszystkim chodzi o inkluzywność, to znaczy, że dana rzecz będzie dostępna i wygodna dla jak największej liczby ludzi. I tak jest, że lepiej rozumiemy istotę projektowania inkluzywnego w świecie fizycznym. Jako przykład można wspomnieć podjazd dla niepełnosprawnych: dużo osób z niego korzysta, chociaż pierwotnie został zaprojektowany dla osób na wózkach inwalidzkich, ale później przydał się rowerzyście, starszej pani z osteochondrozą i studentce, która ciąga walizkę z podróży.

Rys. 1. Podjazd pomiędzy aleją Okulickiego oraz ul. Sucharskiego 2.  
Źródło: opracowanie własne.

W aplikacjach natywnych, jak i na stronach internetowych – również istnieją różne podjazdy, które pomagają użytkownikom poruszać się w swojej przestrzeni, ale często są one niewidoczne.

Zawdzięczamy to przez zaprojektowane prawidłowo funkcji na stronach i w aplikacjach, które są dostępne dla wszystkich.

Dzięki temu nie dyskryminują nikogo: żadnych osób niepełnosprawnych; nikogo ze słabym Internetem czy starym urządzeniem; czy też gracza, któremu w ekran zaświeciło słońce.

Wtedy zaczynamy rozumieć, od czego tak naprawdę pochodzi dostępność tej czy innej rzeczy, w szczególności, w świecie interfejsów. Wtedy stwarzamy tzw. _user-centered design_.

Istotę _projektowania zorientowanego na użytkownika_ można przedstawić w następujący sposób: jeśli dobrze poznamy naszych odbiorców i zoptymalizujemy dla nich interfejs, interfejs będzie dobry.

Stąd wynikają dwie główne implikacje interfejsu użytkownika: stosunek użytkownika wobec interfejsu jest głównym wskaźnikiem jakości interfejsu. Nie można tworzyć interfejsu bez poznania cech odbiorców: przeszkolenie użytkownika, oczekiwania, wiedza merytoryczna i cechy fizjologiczne.

Można podsumować, że interfejs musi być wydajny i skuteczny, aby zarabiać pieniądze, a to, czy się ten interfejs komuś podoba, czy nie, jest kwestią niestety zwykłe drugorzędną. I tutaj warto wspomnieć _task-centered design_, gdzie zgodnie zasadami interfejs jest tylko wtedy dobry, gdy użytkownikowi udaje się wykonywać wszystkie działania na stronie, po takim scenariuszu jak zaplanowały twórcy.

Takie scenariusze również są zadaniami dla użytkowników, które podrzucają im właściciele stron lub aplikacji. Takie zadania są po prostu zbiorem różnych czynności, które z kolei są zbiorami operacji. Zazwyczaj zadania można realizować na kilka różnych sposobów, z których każdy określa inny zestaw działań. Zgodnie z ideą – zadaniem projektanta interfejsu jest to, że musi _wybrać najbardziej efektywne realizacji tych samych zadań_, jak i również musi _zapewnić rozwiązanie dla użytkownika_.

Warto tylko zauważyć, że powyższa metoda pozwala zrozumieć jak np. wybrać najlepsze rozwiązanie dla użytkowników, jeśli nie wiemy o nich wszystkiego, co potrzebujemy. Projektując interfejs, który zorientowany na użytkownika – możemy go wycenić ekonomicznie, dzięki takim metodom.

Projektowanie zorientowane na użytkownika to optymistyczne podejście do tworzenia nowych rozwiązań. Zaczyna się od ludzi, a kończy na odpowiedziach spełniających ich indywidualne potrzeby. Kiedy zrozumie się użytkowników, a następnie opracuje się produkt z ich perspektywy, można uzyskać niezwykłe odpowiedzi. Ta metoda to myślenia i działania. Wtedy zwykle wszyscy zadowoleni.

Ważne jest, aby nawiązać głęboką empatię z osobą, dla której projektujemy. Podobny metody pozwalają nam na wygenerowanie wielu pomysłów i stworzenie wielu interesujących prototypów dla stron oraz aplikacji. Wtedy produkt warto udostępnić osobom, dla których się to projektuje.

Aby projektować z myślą o użytkowniku, należy: zidentyfikować osoby, które będą korzystać z produktu; do czego będą go używać; w jakich warunkach będą z niego korzystać. Obserwowanie życia ludzi, wsłuchiwanie się w ich nadzieje i potrzeby oraz zrozumienie ich problemów z tym jest ważne.

Projektowanie zorientowane na użytkownika stwarza wyjątkową okazję do projektowania z udziałem społeczności. Projektanci zorientowani na użytkownika dogłębnie rozumieją ludzi, którym chcą służyć. Generują wiele pomysłów i tworzą innowacyjne produkty na podstawie o rzeczywistość.

## 1.2. Przykłady użytecznego oraz inkluzywnego UX

### 1.2.1. Prawidłowe projektowanie interfejsów

Aby czegoś się nauczyć, trzeba coś zrobić. Aby coś zrobić dobrze, trzeba znać dobre przykłady. Od podobnych myśli zwykle rozpoczynam własny dzień roboczy. Rozpoczynam od tego, że szukam dobrych inspiracji i przykładów na Behance/Dribbble/Pinterest i na podobnych sieciach internetowych.

A kiedy mamy już kilka inspiracji przed sobą, to stajemy się dobrym projektantem interfejsów. Dobry projektant często pracuje po inspiracji szybko i niemal automatycznie: szybko wymyśla niezbędne elementy graficzne oraz łatwo je układa z tekstem od managera/klienta. Łatwość przychodzi z praktyką.

„_Artysta jest kolekcjonerem. To nie jest syllogomania, w tym jest różnica. Przy niej gromadzą na oślep, artyści – gromadzą rzeczy wybiórczo. Zbierają tylko rzeczy, które naprawdę kochają._”

Kiedy miałem praktyki w jednym zakładzie stażu, ćwiczyłem projektowanie stron internetowych, związanych ze sprzedażą odzieży. Projektując stronę produktu, zacząłem szukać inspiracji o wyglądach tablic rozmiarów odzież. Dzięki temu, że patrzyłem na różne dobre i złe przykłady, zauważyłem, że u niektórych sklepach internetowych tablicy są zaprojektowane w nie bardzo wygodny sposób. Sprawa jest w tym, że w różnych krajach stosuje się różne systemy rozmiarów odzieży. Sklepy międzynarodowe, jak ten który w ćwiczeniach projektowałem, publikują podobne tabele. Ludzi wykorzystują ich do przeliczania rozmiarów, do których są przyzwyczajeni, na domyślne rozmiary na stronie.

Wydawać by się mogło, że pomyślano o wygodzie, tak aby osoba z dowolnego kraju mogła złożyć zamówienie. Trzeba jednak pamiętać i porównywać liczby nieistotne z punktu widzenia wykonywanego zadania. Łatwo jest popełnić błąd, a potem to już tylko własna wina. Nie mówiąc już o tym, że w tabeli brak informacji, jakiego systemu domyślnie używa dana witryna. To jest zła metoda.

Rys. 2. Wybór rozmiaru odzieży w sklepach internetowych.  
Źródło: opracowanie własne.

W przypadku makiety strony, której projektowałem, zrobiłem to inaczej. Zaprojektowałem to tak, że ludziom wystarczy wybrać rozmiar w systemie, do którego są przyzwyczajeni, bez konieczności zastanawiania się nad przeliczaniem. Podobny przykład pozwala zwiększyć konwersję stron internetowych. _Wszystko odbywa się za kulisami._ Dobry interfejs nie zmusza człowieka do robienia tego, co on robi słabo: liczenia w myślach, zapamiętywania ścieżki do pliku czy sprawdzania kodu o piętnastu liczb.

Moja zasada w takim przypadku: _pozwól maszynie się spocić; nie marnuj sił osobistych na takie rzeczy_. Komputer to może robić samodzielnie szybko i elegancko. Ważnym jest tylko to, że kiedy ufamy urządzeniu wypełnienie jakiegoś zadania z możliwością wyboru – to wszystko musi być zrozumiałe dla koniecznego użytkownika. Inaczej, w ogóle nie trzeba mu nic dawać do wyboru.

### 1.2.2. Dlaczego czasami lepiej nie oferować

Wziąć nawet do przykładu starą wersje Apple Watch, która pyta, czy zapisać dane po ćwiczeniu. Ceną za popełnienie błędu przy udzielaniu odpowiedzi na to pytanie jest _utrata danych_. Należy je zapisać bez pytania i pozwolić na ich usunięcie, jeśli użytkownik sobie tego życzy.

Rys. 3. Zdjęcie urządzenia Apple Watch.  
Źródło: Parashar A., _Apple Watch User Review: Three months_, [_https://indianexpress.com/article/technology/tech-reviews/apple-watch-user-review-three-months-on-i-think-it-is-a-worthy-investment_](https://indianexpress.com/article/technology/tech-reviews/apple-watch-user-review-three-months-on-i-think-it-is-a-worthy-investment) | <https://bit.ly/w58975-a>, z dnia: 10.01.2022.

Również ważnym jest nie oferować użytkownikowi nic podobnego jak w przypadku z aplikacją „Adobe Illustrator”, która przy zamykaniu ona pyta użytkownika o pozwolenia na wyczyszczenie danych ze schowka tymczasowego. Aplikacja mówi, że dzięki temu zamknie się szybciej.

Problem jest tylko, że użytkownik może nie do końca rozumieć, o co chodzi lub po prostu się mu będzie leń to przeczytać, kliknie Entera i utraci możliwie ważne dane, skopiowane do schowka. Lepiej o to nie pytać i zapisać te dane.

Rys. 4. Zrzut ekranu aplikacji „Adobe Illustrator”.  
Źródło: opracowanie własne.

I tutaj występuję moja druga zasada: _dane użytkowników są nieskończenie cenne_. Gdy interfejs jest podyktowany wewnętrzną architekturą i koncepcjami systemu, staje się on niezrozumiałą chińską łamigłówką. Można się nią zajmować tylko poprzez zapamiętane rytuały.

Wartuje również pamiętać, że istnieje rzecz zwana jako _uzależnienie cyfrowe_. Jest to zależność logiki i języka interfejsu od wewnętrznej konstrukcji programu. Aplikacje jak powyższe mają w sobie takie uzależnienie. Jedna z oznak ludzkiego interfejsu to ta, w której nie ma tego uzależnienia. Użytkownicy nie muszą spotykać się z niczym podobnym.

## 2. PROJEKTOWANIE INTERFEJSÓW INKLUZYWNYCH

## 2.1. Ważne rzeczy w projektowaniu inkluzywnym

Jeśli krótko podsumować poprzedni rozdział mojej pracy, możemy dojść do wniosku, że projektowanie interfejsów staje się prawidłowym i użytecznym wtedy, kiedy nie zapominamy, że naszą aplikacją lub stroną internetową mogą korzystać osoby z różnymi wadami. I jak już wspomniałem wcześniej, podejście, przy którym projektujemy jakoś rzecz dla ludzi z wadami, nazywa się – _projektowaniem inkluzywnym_, lub także – _projektowaniem uniwersalnym_.

Z tego wynikają całkiem logiczne pytania, wynikają pytania na tematy: jak właśnie projektować inkluzywne interfejsy; jak z tym robić takie interfejsy, żeby nie traciły one własnej piękności. Poniżej postaram się przeanalizować te pytanie w szczegółach, żeby także w końcu móc zaprojektować design własnej takiej aplikacji webowej, używając różnych rekomendacji do projektowania inkluzyjnego.

### 2.1.1. Najważniejsze cechy we wzroku ludzkim

Chcę się zacząć z oczy, czyli od tego, z czym mam problem osobiście, jak również i ludzie w ilości 2,2 mld. Dlatego dalej w tej pracę będę koncentrować uwagę w głównej mierze na cechach wzrokowych. Moim zdaniem, projektując inkluzywne interfejsy, w szczególności, skoro bierzemy pod uwagę wady wzorowe, to musimy również wiedzieć o cechach ludzkiego wzroku.

Ważną cechą uważam temat związany z budową oka ludzkiego. Rozumiejąc budowę oka – łatwiej nam będzie zrozumieć wady oczy, żeby później zrealizować do tych wad tzw. _podjazdy_, o których wcześniej szła mowa wcześniej.

Wartuje od razu zwrócić uwagę na to, że około 70% klatek sensorowych człowieka znajdują się w oczach. Dzięki temu oczy są jednym z najważniejszych zmysłów człowieka. Również jest ważnym rozumieć niektóre ograniczenia techniczne naszych oczy. Dlatego zacznijmy od tego co właśnie widzi oko ludzkie, a widzi ono światło. Światło jest promieniowaniem elektromagnetycznym, które można przedstawić w postaci fal, podobnych do fal dźwiękowych. Oko jest jak kamera. Przechwytuje światło i skupia się na siatkówce. Siatkówka przekazuje impulsy do mózgu i tworzy wrażenie wizualne.

Nasze oko można wyobrazić jako kulę o średnicy 2,5 cm wypełnioną specjalnym płynem. Tylna część zewnętrznej powłoki oka, rogówka, pełni rolę soczewki. Zewnętrzna powłoka chroni oko przed uszkodzeniami mechanicznymi i chemicznymi. Promienie świetlne przenikają przez rogówkę do oka. A rogówka ma również mechanoreceptory, więc dotknięcie jej objawia się bezwarunkowym odruchem mrugania. Między rogówką a tęczówką oraz między soczewką a tęczówką znajdują się dwa małe przestrzenie, nazywane odpowiednio: komorą przednią i komorą tylną.

Przestrzenie te wypełnione są płynem, który pozwala na odżywienie rogówki i kryształu składnikami odżywczymi. Tęczówka znajduje się za komorą przednią i zawiera barwnik melaninę, który powoduje zabarwienie oczu od ciemnobrązowego do niebieskiego. Można to sobie wyobrazić jako okrągły dysk z otworem w środku, który nazywa się źrenicą. Dzięki mięśniom gładkim źrenica może zmieniać swój rozmiar. W ten sposób reguluje ona ilość światła wpadającego do naszego oka.

Kiedy pada dużo światła do oka – źrenica zwęża się; natomiast gdy światła pada do oka trochę – źrenica się rozszerza. W ten sposób istnieje mechanizm regulujący ilość światła wpadającego do oka.

### 2.1.2. Standardy projektowe w zakresie wzroku

Oprócz rozumienia tego jak działa oko, ważne jest również, aby inkluzywni projektanci wiedzieli, jakie istnieją standardy w zakresie dostępności, a w szczególności, jakie są zalecenia dotyczące wizualnego i zasadniczego organizowania treści na ich stronie internetowej, aby były dostępne publiczności. A najczęściej w różnych standardach dostępności poruszają się 5 następujących kwestii:

1. _Widzenie_. Informacje są w większości pozyskiwane za pomocą wzroku i te standardy w większości starają się uczynić interfejs dostępnym dla osób niedowidzących i którzy utraciły wzrok.
2. _Słuch._ A raczej ubytek słuchu lub głuchota.
3. _Umiejętności motoryczne._ Wynika wtedy, gdy osoba nie może posługiwać się rękami, a jak wiemy, głównie interfejsy, to obsługujemy poprzez mysz i klawiaturę lub interfejsy dotykowe, a we wszystkich przypadkach są pewne technologie i są one określone w tych standardach.
4. _Zdolności poznawcze._ Jeżeli dana osoba nie może postrzegać przetwarzania informacji jako zapamiętanych zgodnie z praktyką medyczną; cierpi na chorobę Alzheimera; ma dysleksję – dla tej kategorii są też sposoby na to, aby jej pobyt w Internecie i w korzystaniu z interfejsu był jak najbardziej wygodny.
5. _Napady padaczkowe._ Do takiej kwestii może powodować np. migotanie interfejsów jasnego światła, a standardy jasno mówią, jak uniknąć takiego niepożądanego efektu.

Najsłynniejszy w tym momencie jest przewodnik standardów, który został opracowany przez „World Wide Web Consortium” (W3C) – WCAG. Również wprowadziły w świat _poziomy zgodności standardów UX_. W ramach nich istnieją poziomy: A/AA/AAA. Każdy z nich trudniejszy.

Rys. 5. Historyczna oś czasu standardów.  
Źródło: opracowanie własne.

Na powyższym zdjęciu znajduje się oś czasu, która przedstawia główne osiągnięcia w dziedzinie standaryzacji dostępności interfejsów w ciągu ostatnich 20 lat.

- _Ustawa rehabilitacyjna_ miała w 1973 r. sekcję 508, przedstawiającą pierwsze podstawy udostępniania Internetu osobom z różnymi wadami słuchu lub innymi ograniczeniami percepcyjnymi. W 1998 r. sekcja 508 otrzymała aktualizację.
- W 1999 r., opublikowano _WCAG_ 1.0 (_Web Content Accessibility Guidelines_). WCAG otrzymał aktualizacje w 2008 (2.0) i 2018 (2.1). W chwili pisania mojej pracy trwają jednoczesne aktualizacje WCAG do wersji 2.2 i 3.0 standardu.

## 2.2. Czym jest tworzona uniwersalność interfejsów

### 2.2.1. Standardy UX kontrastowości w kolorach

W tym rozdziale rozważymy nie mniej ważny temat. Zastanowimy się, w jaki sposób projektanci UX i stron internetowych wykorzystują kontrast kolorów w swoich pracach. Dodatkowo przyjrzyjmy się wymaganiom WCAG 2.1, a także niektórym narzędziom i technikom, które służą do sprawdzania kontrastu. Pomoże to nam zrozumieć, dlaczego kontrast jest tak ważny w interfejsach.

Postaram się również opisać własne badania, z których podam przykłady i konsekwencje niezgodności z zasadami umowy. A pierwszą rzeczą, na którą chcę zwrócić uwagę, jest to, że jeśli po prostu weźmiemy i zaczniemy wybierać kolory o niskim kontraście, trudno będzie czytać tekst i robić interakcję z interfejsem.

Rys. 6. Wyszukiwarka Google z niskim i wysokim kontrastem kolorów.  
Źródło: opracowanie własne.

Wystarczy zmienić kolor elementów tekstowych na jaśniejszy, na prawie jakiejkolwiek stronie i od razu widać, że staje się niezwykle trudne rozróżnianie elementów od siebie. Jednocześnie trzeba wytężać wzrok.

Warto dodać, że zwykle intuicyjnie zestawiamy ze sobą ważne elementy, aby nasi użytkownicy ich nie przegapili, np. przyciski: _Kup, Utwórz konto, różny tekst marketingowy_. Zazwyczaj elementy te mają najwyższy kontrast, dzięki czemu wyróżniają się spośród innych mniej istotnych elementów. Również, aby zmniejszyć elementu wagę wizualną – zmniejszamy kontrast pozostałych elementów. Tylko to działa nie wszędzie w interfejsie.

Rys. 7. Landing page graficznego projektu interfejsu.  
Źródło: Rasool G., _Sushi Landing page UX/UI Design_, [_https://dribbble.com/shots/14412386/attachments/6088808?mode=media_](https://dribbble.com/shots/14412386/attachments/6088808?mode=media) | <https://bit.ly/w58975-b>, z dnia: 08.02.2022.

Na tym zrzucie ekranu widzimy, że tekst nad przyciskiem jest dość trudny do odczytania, a w bloku z cyframi, cyfry wyglądają kontrastowo, ale żeby przeczytać resztę tekstu trzeba się nadwyrężyć.

Podpisy mają bardzo niski kontrast na powyższym landingu, przez co są prawie niewidoczne dla użytkownika. A nawet jeśli ktoś zauważy np. linki na końcu strony, wydaje się, że one nie są aktywne.

Również na różnych stronach można spotykać formularze, które są trudne do zrozumienia. I tylko jeśli przyjrzymy się uważnie, możemy zobaczyć elementy podobne: pola tekstowe, podpisy, pola, tzw. _placeholder_ itd.

Jeśli elementy takie jak tekst, linki czy pola są na tyle ważne, aby zostały zauważone, powinny być czytelne. Ogólnie kontrast to różnica w jasności lub odcieniu koloru, która sprawia, że obiekt jest zauważalny. W wizualnej percepcji świata rzeczywistego kontrast jest określany przez różnicę w kolorze i jasności obiektu w jednym polu widzenia.

Rys. 8. Kontrast między ubraniem snowboardzistów oraz śniegiem.  
Źródło: Fiemme-Obereggen, _Let’s go skiing! Opening of the ski area_, [_https://www.visitfiemme.it/system-sanity-check/news/Let-s-go-skiing-Opening-of-the-ski-area-Fiemme-Obereggen_n479165_](https://www.visitfiemme.it/system-sanity-check/news/Let-s-go-skiing-Opening-of-the-ski-area-Fiemme-Obereggen_n479165) | <https://bit.ly/w58975-c>, z dnia: 24.02.2022.

Nawiasem mówiąc, kolor odzieży narciarskiej odgrywa ważną rolę w krytycznej sytuacji, pomaga ratownikom szybko odnaleźć osobę na śniegu i przyjść na pomoc. Podobnie i z interfejsem.

W interfejsach kontrast jest mierzony różnicą jasności dwóch kolorów i waha się od 1:1 („jeden do jeden”, na przykład, czarny tekst na czarnym tle) i sięga do 21:1 („dwadzieścia do jednego”, na przykład, biały tekst na czarnym tle lub czarny tekst na białym tle).

Rys. 9. Porównanie mierzalności kontrastu kolorów.  
Źródło: opracowanie własne.

Na obrazku nad akapitem pierwszy element ma kontrast 1:1, dlatego ten tekst nie jest widoczny, ponieważ jego kolor jest taki sam jak kolor tła. W kolejnym bloczku tekst ma nieco większy kontrast, ale jest znacznie trudniejszy do odczytania niż te dalsze. Maksymalny kontrast jest pokazany w ostatnim bloczku i wynosi 21:1. Przy zmianie koloru tła i tekstu, przy inwersji, kontrast się nie zmienia.

Kontrast jest bardzo ważny w interfejsie, pozwala nam rozróżniać elementy na ekranie, czytać tekst i mniej męczyć wzrok. Standard WCAG 2.1 stwierdza, że minimalny kontrast dla poziomu AA dla tekstu powinien wynosić 4.5:1 („cztery i pół do jednego”), ale może wystąpić pewne wyjątki.

Istotą standardu jest zapewnienie odpowiedniego kontrastu między tekstem a tłem, tak aby mogły być czytane przez osoby z umiarkowanym upośledzeniem wzroku.

Dla osób, które nie cierpią na ślepotę barw, odcień i nasycenie mają minimalny wpływ lub nie wpływają na czytelność tekstu. Ale niedobór kolorów może mieć pewien wpływ na kontrast, więc w zaleceniach WCAG oblicza się kontrast tak, aby kolor nie był kluczowym czynnikiem, więc osoby z zaburzeniami widzenia kolorów będą miały również odpowiedni kontrast między tekstem a tłem.

### 2.2.2. Zalecenia dla rozmiarów oraz odległości

W tym podrozdziale postaram się opisać zalecenia dotyczące optymalnych rozmiarów i odległości elementów interaktywnych w interfejsach. Proponuję najpierw rozpocząć ten temat od tzw. _Prawa Fittsa_, które mówi o dystansie i celu, które może być stosowane w interfejsach cyfrowych.

Rys. 10. Kabina samolotu wojskowego USA „Boeing B-52D Stratofortress” 1955 r.  
Źródło: United States Air Force, _Boeing B-52D Stratofortress_, [_https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195815/boeing-b-52d-stratofortress_](https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195815/boeing-b-52d-stratofortress/) | <https://bit.ly/w58975-d>, z dnia: 06.03.2022.

Wcześniej kokpity nie były zbyt niezawodne, a wiele wypadków było spowodowanych czynnikami ludzkimi. Mieli ogromną liczbę przycisków. W misjach bojowych podczas pilotowania samolotu kluczowe znaczenie ma szybkość podejmowania decyzji.

Mogła zdarzyć się sytuacja, że pilot chciał wykonać pewną operację przez naciśnięcie pewnego przycisku, w wyniku czego mógł omyłkowo nacisnąć inny. Koszt takiego błędu mógł być dla pilota podobnego samolotu bardzo wysoki. Dlatego często były poszukiwane rozwiązania.

Aby zminimalizować możliwość takiego błędu, amerykański psycholog Paul Fitts, kiedy służył w Stanach Zjednoczonych, skupił się na czynnikach ludzkich.

On opracował model ruchu człowieka i jest uważany za jednego pionierów ulepszenia bezpieczeństwa lotnictwa. Pan Paul pracował nad ułatwieniem pilotom w sprawach trafienia na przyciski przez palce, wtedy on właśnie opracował i opublikował w 1954 jedno z najważniejszych fundamentalnych zasad projektowania. Projektanci często używają tej zasady w swoich interfejsach, nawet jeśli nie słyszeli o istnieniu.

Fitts przeprowadził eksperyment: na tablicy znajdowały się dwie taśmy czułe, tzw. _cele_, gdy osoba dotyka się specjalnym piórem, aby trafić w ten samy cel; uczestnik szybko i naprzemiennie dotyka piórem jednej lub drugiej taśmy; zmieniając odległość między taśmami i szerokość każdej z nich oraz ustalając czas Fitts dostrzegł pewien wzór.

Poniższy wzorzec pokazał, że czas dotarcia celu jest funkcją odległości do celu i jej wielkości. Prawo łączy odległość obiektu i czas celowania w przestrzeni 3D.

Rys. 11. Jedno z matematycznych sformułowań Prawa Fittsa.  
Źródło: Wikipedia, _Fitts's Law_, <https://en.wikipedia.org/wiki/Fitts's_law> | <https://bit.ly/w58975-e>, z dnia: 11.03.2022.

Wyższe równanie pozwala wymierzyć czas dotarcia do celu, który jest funkcją odległości do celu i wielkości celu. To jest już wersja bardziej nowoczesna od oryginalnego równania.

Wykres wyraża to, że:

- MT to czas potrzebny na pobranie celu (_cel to obiekt, z którym osoba próbuje wejść w interakcję_, może to być: przycisk lub pole wejściowe, które należy kliknąć, lub dowolny inny element interfejsu);
- a i b są zmiennymi określonymi przez typ urządzenia;
- D to odległość od punktu startu;
- _W_ to szerokość celu.

Podczas stosowania tego prawa w interfejsach, w których osoba celuje w obiekty na dwuwymiarowym ekranie – kształt przedmiotów i fakt, że osoba porusza się w kierunku celu w linii prostej – nieco komplikuje prawo, ale dla nas ważnym jest intuicyjna definicja: _im dalej przedmiot, tym dłuższy czas celowania; im większy przedmiot, tym krótszy czas celowania_.

Rys. 12. Zrzuty ekranu strony: PsyToolkit, _Fitts's Law Experiment Library_, [_https://www.psytoolkit.org/experiment-library/fitts.html_](https://www.psytoolkit.org/experiment-library/fitts.html) | <https://bit.ly/w58975-f>, z dnia: 12.03.2022.  
Źródło: opracowanie własne.

Strona przedstawiająca działanie Prawa Fittsa, na której również można więcej przeczytać o teorii związanej z tym prawem. Na demonstrowanych zrzutach ekranu w eksperymencie w różny sposób klikamy na obiekty, które pojawią się na ekranie.

Ten eksperyment działa jako potwierdzenie działalności Prawa Fittsa w interfejsach, dzięki czemu możemy ustalić, że prawo działa niezależnie od warunków na drodze, czy wykonuje się je za pomocą myszy, touchpadu, trackpadu czy dotykiem.

## 2.3. Budowa interfejsu dostępnego dla wszystkich

### 2.3.1. W jaki sposób interfejsy używają kroju pisma

Ważnym jest omówienie użycia tekstu i kroje pisma zgodnie wymagań WCAG 2.1, jak również konfigurowanie ich dla lepszej czytelności, wspólnie z tym, jak formatować bloki tekstu. Przedstawię również aspekty dostępności związane z tekstem. Ogólnie kroje pisma są podzielone na 3 tematy: jaki ta krój pisma; w jaki sposób jest wprowadzana w świat; co można z niej robić.

A przede wszystkim chciałbym powiedzieć, że lepiej przedstawiać tekst w postaci krojów pisma niż obrazka (w którym znajduje się tekst), ponieważ przeglądarki rozpoznają tekst sami. Przeglądarki mogą operować z krojem np. podczas skalowania, wtedy tekst będzie się powiększał bez kompromisów jakości. Możemy używać ilustracji wektorowych z tekstem, np. SVG, ponieważ podczas skalowania takie obrazy nie tracą jakości.

Sam krój pisma to znaki i zasady łączenia tych znaków. Kroje pisma są również regułami, które mówią aplikacjom, w jaki sposób mogą wchodzić w interakcje z ligaturami danego kroju pisma oraz w jaki sposób znaki kroju pisma mogą być ze sobą splatane.

Ważne jest, aby zwrócić uwagę na fakt, że istnieją pewne punkty w różnicy między niezależnym użyciem krojów pisma a tekstem w formacie obrazu. Osoby, które nie są w stanie zobaczyć stron, które „słuchają” Internet – nie zobaczą tego, co się znajduje na obrazku. Natomiast ci, którzy widzą interfejs lepiej lub widzą go wyraźnie – wizualnie dla nich nie ma problemu: czy jest to pisany tekst, czy tekst w PNG; stwarza to trudności osobom niepełnosprawnym. W przypadku obrazu ważne jest użycie tzw. _tekstu alternatywnego_ (alt-tekst) do opisania tego, co dzieje się na konkretnym obrazie. Tekst alternatywny jest dodawany przez język HTML w tagu _img_, który zawiera parametr _alt_.

Rys. 13. Zaprojektowane logo firmy FedEx oraz zwykły napis FedEx.  
Źródło: Wikipedia, _FedEx_, [_https://en.wikipedia.org/wiki/FedEx#/media/File:FedEx_Corporation_-\_2016_Logo.svg_](https://en.wikipedia.org/wiki/FedEx#/media/File:FedEx_Corporation_-_2016_Logo.svg) | <https://bit.ly/w58975-m>, z dnia: 14.04.2022.

Logo FedEx, jako obrazek, chociaż pochodzi z kroju pisma Helvetica, ale to jest już przetworzony tekst i nie ma już możliwości przedstawienia go krojem pisma, w związku z czym taki tekst nie jest rozpoznawany przez czytnik ekranu w przeglądarce. Można skonfigurować podobnie krój pisma, ale jeśli użytkownik korzysta z własnych ustawień przeglądarki lub przegląda stronę np. w skali 120%, logo po prostu zostanie zepsute – trzeba więc zrobić logo w przypadkach takich jak obraz SVG. Również musimy dodać tekst alternatywny, gdzie w tym przypadku spiker treści na ekranie „opisze” to zdjęcie, czytając tekst alternatywny, a nie tylko powie, że na ekranie znajduje się obrazek.

Jednak aspekt opisany powyżej nie jest bardzo istotny, ponieważ logotypy według standardu konsorcjum World Wide Web należą do informacji wtórnych i spełniają poziom wymóg AA, czyli do medium. Wystarczy SVG z tekstem alternatywnym. Zasadniczo krojów pisma jest wiele, a ta branża coraz bardziej się rozwija. Tworzenie krojów pisma stało się łatwiejsze niż w poprzednich latach. Istnieją np. teraz narzędzia, które pomagają w połączeniu par znaków. One pomagają tworzyć znaczące elementy i łączyć je ze sobą. W przypadku coraz większej liczby krojów pisma, dostępność witryn nie zawsze staje się lepsza. Nie zawsze można łatwo je przeczytać i zrozumieć.

Rys. 14. _Bezpieczne kroje pisma_ dla użycia na stronach internetowych.  
Źródło: opracowanie własne.

Na zdjęciu stare, systemowe kroje pisma. Z mojej analizy wynika, że ​​obecnie takie kroje pisma w brandingu stają się coraz rzadsze.

Kiedy mówimy o interfejsach, w których funkcjonalność jest nieco wyższa niż np. w projektowaniu graficznym, można polegać na takich krój pismach, ponieważ są one częścią standardowego zestawu krojów pisma większości systemów.

### 2.3.2. Jak ułatwić korzystanie z Frontendu w sieci

Proponuję teraz omówić jak używać klawiatury w aplikacjach i na stronach internetowych. Prawie wszystkie funkcje w systemach operacyjnych jak Windows, Mac, Linux mogą być używane za pomocą klawiatury bez manipulatora dla kursora, dlatego używane są czytniki ekranu jak narzędzia systemowe czy np. aplikacje _NVDA_, _JAWS_. Dla urządzeń mobilnych zwykle są wykorzystywane _TalkBack_ oraz _VoiceOver_.

Jednak nie każda witryna internetowa czy aplikacja może się pochwalić optymalizacją pod czytniki. Jak więc korzystać z aplikacji i witryn za pomocą klawiatury? Odpowiedź leży we fokusie! Dlatego należy zrozumieć fundamentalną rzecz – _fokus w urządzeniach_.

Rys. 15. Formularz kontaktowy z podświetleniem przez fokus.  
Źródło: opracowanie własne.

Powyżej jest przykład napisanego przeze mnie formularza w języku PHP dla kontaktu, w którym podświetlona jest jedna z ramek. To podświetlenie właśnie jest tym fokusem.

Fokus pomaga wybrać element i przekierowuje wszystkie naciśnięcia klawiszy z klawiatury do wybranego elementu. Zawsze w jednym momencie na ekranie może znajdować się tylko jeden element wybrany przez fokus.

### 2.3.3. Audyt i testowanie dostępności interfejsu

Poza rzeczami już wspomnianymi również ważny jest temat planowania dostępności designu, a także testowania dostępności webowej: jak budować hipotezy; co rozważyć; jak wybrać odpowiednią metodę. Zwykle tutaj są pomocne narzędzia internetowe takie jak np. _WAVE_, _A11y_, _AChecker_.

Te UX instrumenty umożliwiają testowanie dostępności w projektowaniu, testowanie stron i aplikacji internetowych lub dowolnego interfejsu czy też wgranego pliku HTML, poprzez sprawdzenie, czy wymagania zgodnie standardów są spełnione.

Dalej postaram się w zrozumiały sposób poruszyć kwestię testowania dostępności z użytkownikami. Żeby wiedzieć od razu jakie punkty należy wziąć pod uwagę, aby uzyskać najlepsze wyniki, możemy przeprowadzić _audyt interfejsu_.

Audyt nie obejmuje użytkowników końcowych, ale porównuje projekt z wymaganiami norm lub przepisów. Audyty są przeprowadzane zarówno na żywym produkcie, jak i na projekcie prototypu, ale należy pamiętać: prototyp możemy testować tylko za pomocą wizualną, która nie odgrywa roli w wygodzie niewidomego użytkownika, ale ma sens dla osób z innymi niepełnosprawnościami.

W przeciwieństwie do audytu, testowanie opiera się na pracy z użytkownikami końcowymi, z osobami niepełnosprawnymi, obejmuje szereg ułatwionych sesji jeden na jeden. Tak zwany _facylitator_ wyznacza każdemu użytkownikowi realistyczne zadanie, monitoruje etapy wykonania takiego zadania, zadaje dodatkowe pytania i dokumentuje wyniki.

Każda metoda ma zalety i wady, które są kompensowane w połączeniu. Warto zauważyć, że testowanie jest niedoceniane i jest praktykowane znacznie rzadziej niż audyt. Projektanci wstydzą się zapraszać osoby niepełnosprawne, boją się ich urazić podczas sesji lub nie wiedzą, gdzie ich szukać. Tutaj należy pamiętać, że na świecie istnieje wiele mitów o tworzeniu dostępnego designu.

Powszechnie błędnie przyjmują się niektóre aspekty związane z cechami projektowymi dla osób z dysfunkcjami wzroku. Jednak wdrożenie inkluzywności nie zawsze jest łatwe w każdym momencie.

Przy projektowaniu oraz aktualizacji nie można po prostu wziąć produkt w jakimś pięknym momencie i zrobić, aby był inkluzywny. Dlatego ważne jest poznanie trzech mitów. To pozwoli łatwiej projektować inkluzywne strony w krótszym czasie w jakimkolwiek momencie tworzenia projektu.

- I największy stereotyp polega na tym, że _„jeśli stworzymy witrynę zgodnie ze wszystkimi standardami WCAG, będzie ona okropna, brzydka i nieestetyczna”_.
- Drugą błędną kwestią jest to, że ludzie uważają, że _„projektowanie inkluzywne jest trudne”_.
- A trzeci mit jest, że _„dostępność w projekcie strony można bezpiecznie wykonać po wydaniu”_.

Przy połączeniu tych mitów w jedną obalając je otrzymamy następujący schemat: _„wdrażając dostępność do projektu od samego początku, możemy zaprojektować go inkluzywnie, bez tracenia piękności”_. Dlatego jako projektanci stron nie musimy starać się podkreślać wyłącznie designu. Estetyka i design nie są najważniejszą częścią produktu. Design powinien rozwiązywać problemy, a nie je tworzyć.

### 2.3.4. O kolorze i ciemnej stronie zaleceń WCAG

W trakcie realizacji projektu dyplomowego, korzystając z poradnika dostępności WCAG, zauważyłem w nim kilka niezbyt dobrych rzeczy. Omówione wcześniej rzeczy są w porządku. Ważnym jest aby ostrzec siebie i innych przed chęcią ślepo postępowania zgodnie z zaleceniami WCAG i podobnych standardów.

Ponieważ zdarza się, że gdy ktoś pozna użyteczną i dobrą technikę – ma tendencję do stosowania jej wszędzie i rozpowszechniania wśród społeczności projektantów, jak też zasadniczo próbuje dodać tę technikę do dowolnego projektu, nawet jeśli to narzędzie nie jest zbyt odpowiednie.

Jak już wspomniano wcześniej, WCAG wyróżnia różne poziomy dostępności. Niektórzy uważają, że wszystkie teksty muszą spełniać najwyższy poziom wymagań AAA, gdyż _„w przeciwnym razie nie będą dostępne dla znacznej części użytkowników”_. Takie twierdzenie jest błędne.

Zrozumienie niuansów dostępności kontrastu kolorów pomaga dokładnie spełnić standardy WCAG. Gdy inni rozpowszechniają mity na temat dostępności kontrastu kolorów, możemy je sprostować. Pozostaniemy wierni wizualnej prostocie i estetyce, równoważąc ją z dostępnością. W rezultacie powstanie interfejs inkluzywny, który zadowoli niemal każdego.

Jak i wszystko w każdym zawodzie, standard _WCAG ma również swoją ciemną stronę i swoje problemy_ w zawodzie projektanta stron internetowych. Nie jest doskonały ani, niestety, kompletny. Na co więc zwrócić uwagę podczas projektowania stron? Projektant powinien obejmować własne zrozumienie i należy by był krytyczny wobec wszystkiego, nawet poprzez WCAG.

Oto np. 3 główne aspekty ciemnej strony standardu: 1) Niektóre wymagania są sprzeczne z ich własnymi wymaganiami, dotyczącymi kontrastu kolorów; 2) Użycie dziwnych i nieaktualnych przykładów; 3) Ostrożne wskazówki dotyczące krojów pisma, chociaż tekst zawsze jest istotną częścią projektu.

Rys. 16. Porównanie kontrastów przycisków (1/2).  
Źródło: opracowanie własne.

Powyżej tego akapitu znajdują się obrazy przycisków, które załóżmy odgrywają jakoś ważną rolę. Na pierwszy rzut oka lewy przycisk jest standardowy i ma niebieski kolor. Nawiasem mówiąc, większość projektantów zaczynają projekty od koloru niebieskiego, ponieważ jest spokojny i znajomy, nikt od razu nie nazwie go takim niebezpiecznym jak czerwony.

Proponuję spojrzeć na przycisk powyżej po prawej stronie, który jest praktycznie taki sam jak od lewej. I najpierw się wydaje, że pierwszy przycisk jest bardziej zgodny ze standardami dostępności i że jest lepiej widoczny i kontrastowy. Jak się okazało dzięki WCAG – drugi przycisk ma lepszy kontrast, a odpowiednio jest bardziej zgodny ze standardem.

Powodem, dla którego współczynnik kontrastu nie działał w przypadku białego tekstu – jest jego wysoka jasność oraz tło o wysokiej jasności.

Czyli WCAG mówi, że _jasny tekst na jasnym tle jest obliczany jako niski kontrast_. Natomiast, projekt powinien odpowiadać temu, co widzą ludzie, a nie algorytmom obliczeniowym. Dlatego właśnie oko projektanta powinno zawsze odgrywać rolę w tym równaniu.

Rys. 17. Porównanie kontrastów przycisków (2/2).  
Źródło: opracowanie własne.

Jak wspomniałem, zainspirował mnie do opracowania tej pracy dyplomowej fakt tego, że korzystałem z Internetu bez okularów przez jakiś czas. I już wtedy zdałem sobie sprawę, że można zaprojektować dobry projekt, jeśli spojrzeć na niego bez okularów i przymrużyć oczy. I tak jak z oczyma, spróbowałem zimitować mrużenie na przypadek z przyciskami, przez nałożenia na nich rozmycia. Patrząc widać, jak przycisk z czarnym tekstem lepiej zachował rozpoznawalność liter. Przedstawię ciekawy cytat, który płynnie opisuje użycie krojów pisma pod względem kontrastu dla użycia na stronach:

„_Nie używaj małych, mało kontrastowych krojów pisma. Można używać dużych krojów pisma o niskim kontraście koloru lub małych krojów pisma o wysokim kontraście. Tylko nigdy nie używaj małych krojów pisma o niskim kontraście. Chyba że projektujesz własną stronę wizytówkę i naprawdę nie obchodzi Cię, czy ktoś będzie w stanie przeczytać tekst, czy nie._”

Zmiana koloru nie tylko uatrakcyjnia stronę, ale także pomaga strukturyzować informacje. Na stronach internetowych kontrast kolorów odgrywa istotną rolę w dostępności informacji. Jeśli witryna nie będzie oferowała odpowiedniego kontrastu pomiędzy jej poszczególnymi elementami, odwiedzającym trudno będzie z niej korzystać. W szczególności osoby słabo widzące lub mające inne problemy ze wzrokiem wymagają elementów o wysokim kontraście, aby móc przeglądać stronę.

Ciepłe kolory, jak czerwony czy pomarańczowy, wyróżniają się na stronie i zwracają na siebie uwagę. Ciepłe kolory są bardzo przyjemne dla oka, dlatego do stworzenia kontrastu potrzeba niewiele barw. Chłodne kolory, jak niebieski czy zielony, uciekają i mogą bezpiecznie wypełniać duże przestrzenie. Chłodne kolory potrzebne w większych ilościach, aby stworzyć zauważalny kontrast. Użycie kolorów to ważna umiejętność, dlatego, że szara strona wypełniona tekstem wygląda nieciekawie i nie sprzyja czytaniu. Nie jest łatwa w nawigacji. Nie wiadomo, czy teksty odnoszą się do siebie.

Generalne kolory w projektowaniu mają pewne właściwości fizjologiczne i psychologiczne. Każdy kolor ma swoje znaczenie, które może się różnić w zależności od kultury. Fakt ten jest niezwykle istotny dla UX designu każdej firmy, gdyż siła marki zależy w dużej mierze od tego właśnie czynnika.

Kolor jest jednym z narzędzi marketingowych wykorzystywanych do tworzenia, utrzymywania i zmiany wizerunku marki w umysłach klientów. Kolory mogą zwiększyć zapamiętywalność marki poprzez emocjonalny wpływ na klientów, ponieważ każdy kolor ma swoje symboliczne znaczenie. W ten sposób kolory mogą zwiększyć użyteczność każdego oprogramowania, kierując uwagą użytkowników, a jednocześnie zapewniając wzbogacenie interfejsu UX poprzez stworzenie przyjemnej atmosfery.

Dzięki temu np. przy dodaniu kolorów do nagłówków i podtytułów: zwiększamy „bogactwo” liter, stwarzamy zupełnie inny kolor dla cytatu. Dajemy kolor do fragmentu lub krótkiego tekstu: czytelnik chętniej zatrzyma się na stronie, a może nawet ją przeczyta. To jest właśnie cel, do którego zmierzamy. Często projektanci i deweloperzy nie traktują dostępności stron internetowych poważnie. Nieumyślnie tracą odwiedzających tylko z powodu trudności do odczytania tekstu.

Pragnę również dodać, że czasami lepiej określać rozmiary krojów pisma w wartościach względnych, a nie w dokładnych liczbach pikseli. Dzięki temu jako projektanci będziemy mogli cieszyć się z czytania z każdego z dostępnych ekranów. Za pomocą badań osobistych dowiedziałem się, że często wskazanie stałych rozmiarów krojów pisma jest bardzo małe i powoduje, że użytkownik mruży oczy podczas czytania.

Kontrast można stworzyć za pomocą korzystania z następujących cech:

1. _Kolor_, gdy różni się od siebie;
2. _Rozmiar_, gdy sprawia, że ważny element jest większy od pozostałych;
3. _Kształt_, gdy jeden element różni się od pozostałych;
4. _Pozycja_, gdy np. zrobiono dodanie wcięcia przed akapitem;
5. _Kierunek/orientacja_, gdy pozycjonowanie elementu zmienia się w nieoczekiwany dla użytkownika sposób.

## 3. PROJEKTOWANIE DESIGNU APLIKACJI WEBOWEJ

## 3.1. Tworzenie interfejsu projektu aplikacji internetowej

Od samego momentu założenia idei o stworzeniu w ramach pracy dyplomowej aplikacji internetowej zdecydowałem tworzyć ją w sposób zalecany przez doświadczonych projektantów. Podsumowując takie zalecenia:

1. Rozpisujemy, dlaczego potrzebujemy aplikacji czy strony internetowej.
2. Rysujemy ręcznie na kartce ogólny wygląd naszej aplikacji lub witryny.
3. W aplikacji jak Figma powtarzamy narysowany ręcznie interfejs i go polepszamy.
4. Już z zaprojektowanych elementów makiety stwarzamy _prototyp_.
5. Jeśli istnieje taka możliwość badamy prototyp interfejsu przez różne osoby.
6. Po tym zaczynamy pisać kod witryny czy aplikacji.
7. Wstępnie prezentujemy naszą web aplikację publiczności.

Dlatego, że studiuję specjalność związaną z projektowaniem user-experience, mam najgłębsze doświadczenie związane najbardziej właśnie z interfejsami. Dlatego poniżej będę opisywał własne doświadczenie związane z projektowaniem designu takiej aplikacji internetowej.

Aktualnie moja web-aplikacja ma nazwę _„Boginx Books: Builder and Reader”_. Projekt ma na celu wdrożenie na rynek cyfrowy technologii pozwalającej w bardzo przyjazny i prosty sposób projektować książki, jak również ma pozwolić zwykłym użytkownikom wygodnie je czytać.

Projekt będzie miał szerokie możliwości ustawień inkluzywności, czyli, np. osoby z wadami wzrokowymi lub mające defekty koloru we wzroku – zmogą spokojnie czytać te książki. Niektóre z nich można będzie nawet wydrukować po jej wygenerowaniu – jeśli jej twórca wyrazi na to zgodę. Takie książki będą interaktywne, pozwolą nawet zintegrować w sobie wideo czy też można nawet będzie pisać w nich kod, a wbudowany kompilator pokaże wynik kodu, który napisze czytający.

W momencie pisania tej pracy dyplomowej projekt został zrealizowany przeze mnie do etapu projektowania designu w aplikacji Figma, gdzie również został stworzony podstawowy prototyp klikany. I jak już wspominałem powyżej – dobrą praktyką jest rozpoczynanie tworzenia projektu od krótkiego omówienia oraz od rysowania makiety. Projekt już omówiłem, a teraz przedstawię niektóre moje makiety:

Rys. 18. Makieta projektu na kartce.  
Źródło: opracowanie własne.

Właśnie teraz możemy przejść do etapu przeniesienia naszej ręcznej makiety na makietę w aplikacji _Figma_. Dzięki zrzutom ekranu podanym poniżej jestem w stanie w bardziej zrozumiały sposób pokazać innym osobom, do jakiego mniej-więcej finalnego wyglądu dążę. Również po zaprojektowaniu tej makiety, zrobiłem prototyp kluczowych elementów klikanych. Ułatwiają one pracę przy zakodowaniu.

A jak już wspominałem w tej pracy: żeby być dobrym projektantem stron, musimy poznawać, jak coś działa w innych dziedzinach; musimy ciągle nabywać różne, ważne doświadczenia. Stosując taką metodę – poznałem dziedzinę kodowania stron. Dzięki temu dowiedziałem się o zasadzie _mobile-first_.

Mobile-first to reguła, przy której tworzymy projekt strony tak, że zaczynamy od ekranu mobilnego, a następnie przechodzimy do szerszych urządzeń, gdzie dodajemy nowe elementy, zmieniamy ich rozmiary. Użyłem tej reguły projektowania w Figma, przy tworzeniu projektu tej pracy dyplomowej.

Rozdrobienie większego zadania na kilka mniejszych pozwala szybciej myśleć w prawidłowym kierunku. Podobnie i działamy w mobile-first. Najpierw narysowałem wygląd strony projektu dla urządzenia o małej szerokości ekranu, a dalej go powiększałem. To łatwiej niż pomniejszać od dużego ekranu.

Na powyższym zrzucie ekranu przedstawiam elementy podstrony Builder. Ta strona pozwoli użytkownikom aplikacji tworzyć swoje książki za pomocą układania tekstu, bloczków oraz za pomocą innych rzeczy.

_I teraz jestem w stanie płynnie opisać ten projekt:_

1. Pod numerem 1 jest pokazana cała strona na powyższym zrzucie.
2. To nawigacja globalna po całej aplikacji. Aktywna strona podświetlona.
3. Oznacza menu strony Builder, ma instrumenty do projektowania i poruszania.
4. Jest to panel warstw książki. Pozwala na grupowanie. Ma przycisk zwijania otwartych warstw.
5. W tym panelu ustawiamy parametry elementów, których wybraliśmy myszką czy dotykiem.
6. Książki „Boginx” są stronami, zwykłym kodem. Dlatego użytkownik zmoże skopiować CSS.

Na środku między paneli, w mojej aplikacji, znajduje się Frame. Projektujemy w nim nasze książki.

Kolejną stroną mojej aplikacji webowej jest strona z listą zaprojektowanych w serwisie książek.

Po wybraniu jednej z nich – przenosimy się do spersonalizowanego do niej landingu, gdzie zobaczymy informacje: opis ogólny książki i autora; czy mamy jej wykupioną; cennik zakupu tylko tej książki; cennik subskrypcji do serwisu „Boginx Books”, który od razu otwiera dostęp do dużej ilości książek.

Na powyższym zrzucie możemy poznać prototyp animacji otwierania książki na podstronie Reader, przy użyciu skrolowania, jak również po tym od razu widzimy pierwsze strony tej książki. Takie strony, jak już wspomniano, będą interaktywne – pozwolą tworzyć w sobie naprawdę ambitne pomysły.

Przed tym, przechodzimy do pokazania strony, która będzie opowiadała użytkownikom Internetu o mojej aplikacji, chcę najpierw powyższym zrzutem ekranu przedstawić interfejs najbardziej uwielbianej przeze mnie aplikacji – Figma. Jest to moja największa inspiracja do stworzenia Builder’a swojego serwisu. Marzę o tym, żeby kiedyś i moja aplikacja miała interfejs na tyle przyjazny oraz inkluzywny!

Oprócz wdrożenia na webowy rynek aplikacji, również musimy postarać się stworzyć zachwycający uwagę Landing Page, w ciekawy sposób opisujący nasz produkt. Może on zostać kluczowym wynikiem, dzięki któremu przyszły użytkownik zdecyduję na skorzystanie z naszego serwisu.

A kiedy już jakakolwiek aplikacja webowa zostaje zrealizowana, od razu ważne jest, by na samym początku przeprowadzić badania inkluzywne UX/UI przez różne grona ludzi, jak również i przez grupy całkowicie zdrowych osób. Po tym przedstawiamy wszystko publiczności, robimy marketing oraz dążymy do sukcesu komercyjnego.

## ZAKOŃCZENIE

Od samego początku pisania powyższej pracy dyplomowej autor nie chciał, aby to była zwykła pra-ca, o której po prostu w niedalekiej przyszłości zapomni. Chciał, aby przy pisaniu na prawdę nauczyć się czegoś wartościowego. Dlatego praca ta zawiera wiele odnośników do różnych stron internetowych. Służą one nie tylko jako bibliografia, ale również jako literatura, którą autor poleca każdemu do przeczytania. Stanowią one dopełnienie do tematu, związanego z projektowaniem inkluzywnego i dostępnego designu stron internetowych.

Pisząc tę pracę, autor przeglądał ogromne ilości stron zwracając uwagę na szczegóły – szukał bardzo dobrze, jak i bardzo źle zaprojektowanych stron internetowych. Wyraża on niezwykłe szczęście i zadowolenia z tego, że w 2022 r. coraz większa ilość osób na świecie zaczyna dbać o wygląd swoich serwisów webowych. Jest to przyjemne również dla jego oczu.

Wnioskiem, do którego można dojść na podstawie tej pracy, jest to, że fenomen specjalności projektowania UX w interfejsach (które niewątpliwie odgrywa w naszych czasach bardzo ważną rolę), stawia bardzo duże kroki w kierunku przyszłości. Tworzy nową realność.

Gdyby nie projektanci UX to najbardziej prawdopodobnie, że dużo ludzi traciłoby wzrok przez źle zaprojektowane strony; a osoby już z utraconym wzrokiem nie korzystali nigdy by z Internetu czy z urządzeń. Dlatego, niewątpliwie temat projektowania dostępności oraz inkluzywności jest bardzo ważny dla pogłębionych badań, które na szczęście w ostatnich latach prowadzone są coraz aktywniej.

Poznanie wiedzy o inkluzywności będzie przydatne nie tylko przy projektowaniu stron internetowych czy aplikacji. Pozwoli również polepszyć umiejętność patrzenia w celu odróżnienia mnóstwa różnych dobrych rozwiązań wizualnych od złych. Dotyczy to wszystkiego wokół: ubrań, wnętrz, architektury i oczywiście web designu, inkluzywności i dostępności.

Rozwój spojrzenia na tą specjalność nie może być oddzielony od wszystkiego innego. Rzadko zdarza się, aby osoba, która tworzy design stron www, nie miała gustu w dziedzinie wnętrz czy ubrań. Powinniśmy stale starać się czerpać przyjemność z oglądania inspiracji. To właśnie w takich momentach pojawia się chęć nie tylko podpatrywania, jak robią to inni, ale także chęć do zrealizowania czegoś.

Oprócz tego, nawet rzut oka na kultury różnych krajów pozwala dowiedzieć się, jak wykonać naj-lepszy design oraz User Experience strony internetowych. Teraz dzięki nowoczesnym technologiom każdy z nas może poznać dziedzictwo kulturowe innych państw, nie wychodząc nawet z domu. Autor niniejszej pracy dyplomowej poleca każdemu projektantowi, który ma możliwość gdzieś wyjechać, żeby podczas podróży postarać się zwrócić większą uwagę na to, jak wszystko naturalnie wygląda. Czy to inne miasto, czy inny kraj. Mamy przyglądać się wszystkiemu: urbanistyce, krajobrazowi, znakom, dekoracjom okiennym, towarom i ludziom na ulicach. Warto zwracać uwagę na to, jak jest zorganizowane życie, czym ludzie się interesują, co robią.

Głownie dlatego autor jest jeszcze bardziej zadowolony ze specjalności UX designera, którą wybrał jako swoją wymarzoną, jak również z tego, że ta ścieżka kariery zapewnia stały rozwój. Można stale się uczyć i rozwijać, a zawsze poznamy coś nowego. Autor kocha wyzwania w projektowaniu, ponieważ sprawiają mu one szczęście, kiedy udaje się je wszystkie pokonać, bo tylko wtedy zdobywamy własne, cenne doświadczenie.

## LITERATURA

1. Bienias N., _Inspiracje UI designera_, [_https://zebza.net/inspiracje-ui-designera_](https://zebza.net/inspiracje-ui-designera/) | <https://bit.ly/w58975-q>, z dnia: 20.04.2022.
2. Boichuk O., _The Nine Principles of UX Design Psychology_, [_https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users_](https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users) | <https://bit.ly/w58975-i>, z dnia: 06.01.2022.
3. Clark J., _To Hell with WCAG 2,_ [_https://alistapart.com/article/tohellwithwcag2_](https://alistapart.com/article/tohellwithwcag2) | <https://bit.ly/w58975-y>, z dnia: 14.06.2022.
4. Duhigg C., _Siła nawyku_, Dom Wydawniczy PWN, Warszawa 2013.
5. Fandom: Psychology, _Fitts's Law_, [_https://psychology.fandom.com/wiki/Fitts's_law_](https://psychology.fandom.com/wiki/Fitts's_law) | <https://bit.ly/w58975-x>, z dnia: 08.06.2022.
6. Feifei L., _Size Guides and Product Measurements_, [_https://www.nngroup.com/articles/sizes-measurements-ecommerce_](https://www.nngroup.com/articles/sizes-measurements-ecommerce/) | <https://bit.ly/w58975-o>, z dnia: 27.04.2022.
7. Fiemme-Obereggen, _Let’s go skiing! Opening of the ski area_, [_https://www.visitfiemme.it/system-sanity-check/news/Let-s-go-skiing-Opening-of-the-ski-area-Fiemme-Obereggen_n479165_](https://www.visitfiemme.it/system-sanity-check/news/Let-s-go-skiing-Opening-of-the-ski-area-Fiemme-Obereggen_n479165) | <https://bit.ly/w58975-c>, z dnia: 24.02.2022.
8. Fuso L., _Inclusive Design – The benefit of designing for all_, [_https://designwanted.com/inclusive-design-the-benefit-of-designing-for-all_](https://designwanted.com/inclusive-design-the-benefit-of-designing-for-all) | <https://bit.ly/w58975-h>, z dnia: 04.01.2022.
9. Hoffmann S., _Teoria kolorów w projektowaniu stron internetowych: właściwa paleta_, [_https://raidboxes.io/pl/blog/webdesign-development/color-theory-web-design_](https://raidboxes.io/pl/blog/webdesign-development/color-theory-web-design) | <https://bit.ly/w58975-t>, z dnia: 18.05.2022.
10. Hotjar, _UX analysis: best methods and key tools_, [_https://www.hotjar.com/ux-design/analysis/_](https://www.hotjar.com/ux-design/analysis/) | <https://bit.ly/w58975-p>, z dnia: 14.04.2022.
11. Kleon A., _Steal Like an Artist_, Workman Publishing, Nowy Jork 2012.
12. Kowalski K., _Projektowanie bez barier_, Integracja, Warszawa 2016.
13. Kriger S., _Accessibility Myths_, [_https://a11ymyths.com_](https://a11ymyths.com/) | <https://bit.ly/w58975-z>, z dnia: 17.06.2022.
14. Krug S., _Nie każ mi myśleć_, Helion, Gliwice 2014.
15. Lewis C., Rieman J., _Task-Centered User Interface_, Boulder 2008.
16. Lyonnais S., _Accessibility Design 101: Color Contrast Considerations for UX Designers_, [_xd.adobe.com/ideas/principles/web-design/color-contrast-considerations-accessibility-design_](https://xd.adobe.com/ideas/principles/web-design/color-contrast-considerations-accessibility-design/) | <https://bit.ly/w58975-u>, z dnia: 24.05.2022.
17. Parashar A., _Apple Watch User Review: Three months_, [_https://indianexpress.com/article/technology/tech-reviews/apple-watch-user-review-three-months-on-i-think-it-is-a-worthy-investment_](https://indianexpress.com/article/technology/tech-reviews/apple-watch-user-review-three-months-on-i-think-it-is-a-worthy-investment) | <https://bit.ly/w58975-a>, z dnia: 10.01.2022.
18. PsyToolkit, _Fitts's Law Experiment Library_, [_https://www.psytoolkit.org/experiment-library/fitts.html_](https://www.psytoolkit.org/experiment-library/fitts.html) | <https://bit.ly/w58975-f>, z dnia: 12.03.2022.
19. Rasool G., _Sushi Landing page UX/UI Design_, [_https://dribbble.com/shots/14412386/attachments/6088808?mode=media_](https://dribbble.com/shots/14412386/attachments/6088808?mode=media) | <https://bit.ly/w58975-b>, z dnia: 08.02.2022.
20. Richards M., _Semantics to Screen Readers_, [_https://alistapart.com/article/semantics-to-screen-readers_](https://alistapart.com/article/semantics-to-screen-readers/) | <https://bit.ly/w58975-j>, z dnia: 07.04.2022.
21. Shankar N., _Designing for accessibility, step 1: Color contrast_, [_https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4_](https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4) | <https://bit.ly/w58975-v>, z dnia: 27.05.2022.
22. Stepanov M., _The myths of the ancient UX_, [_https://uxdesign.cc/the-myths-of-the-ancient-ux-fdfc2b4c003d_](https://uxdesign.cc/the-myths-of-the-ancient-ux-fdfc2b4c003d) | <https://bit.ly/w58975-g>, z dnia: 05.01.2022.
23. Światowa Organizacja Zdrowia, _World report on vision_, Genewa 2019.
24. United States Air Force, _Boeing B-52D Stratofortress_, [_https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195815/boeing-b-52d-stratofortress_](https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195815/boeing-b-52d-stratofortress/) | <https://bit.ly/w58975-d>, z dnia: 06.03.2022.
25. Usability.gov, _Benefits of User-Centered Design_, [_https://www.usability.gov/what-and-why/benefits-of-ucd.html_](https://www.usability.gov/what-and-why/benefits-of-ucd.html) | <https://bit.ly/w58975-n>, z dnia: 18.03.2022.
26. Vision Australia, _Typography in Inclusive Design Part 1_, [_https://visionaustralia.org/services/digital-access/blog/typography-in-inclusive-design-part-1_](https://visionaustralia.org/services/digital-access/blog/typography-in-inclusive-design-part-1) | <https://bit.ly/w58975-k>, z dnia: 13.04.2022.
27. W3C WAI, _Images of Text_, [_https://www.w3.org/WAI/tutorials/images/textual_](https://www.w3.org/WAI/tutorials/images/textual/) | <https://bit.ly/w58975-l>, z dnia: 13.04.2022.
28. W3C WAI, _WCAG 3 Introduction_, [_https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro_](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) | <https://bit.ly/w58975-s>, z dnia: 15.05.2022.
29. W3C WAI, _Web Content Accessibility Guidelines (WCAG) 2.1_, [_https://www.w3.org/TR/WCAG21_](https://www.w3.org/TR/WCAG21/) | <https://bit.ly/w58975-r>, z dnia: 29.04.2022.
30. WebAIM, _Contrast and Color Accessibility_, [_https://webaim.org/articles/contrast_](https://webaim.org/articles/contrast) | <https://bit.ly/w58975-w>, z dnia: 03.06.2022.
31. Wikipedia, _FedEx_, [_https://en.wikipedia.org/wiki/FedEx#/media/File:FedEx_Corporation_-\_2016_Logo.svg_](https://en.wikipedia.org/wiki/FedEx#/media/File:FedEx_Corporation_-_2016_Logo.svg) | <https://bit.ly/w58975-m>, z dnia: 14.04.2022.
32. Wikipedia, _Fitts's Law_, <https://en.wikipedia.org/wiki/Fitts's_law> | <https://bit.ly/w58975-e>, z dnia: 11.03.2022.

Wyższa Szkoła Informatyki i Zarządzania z siedzibą w Rzeszowie

Kolegium Mediów i Komunikacji Społecznej

Streszczenie pracy dyplomowej

Inkluzywny oraz dostępny UX/UI design

**Autor:** Nazarii Korniienko, w58975

**Promotor:** dr hab., prof. WSIiZ Andrzej Adamski

**Słowa kluczowe:** _Interfejsy, Inkluzywność, Dostępność, Doświadczenie, Makiety_

Niniejsza praca dyplomowa licencjacka omawia przeanalizowane przez jej autora rekomendacje, dotyczące stworzenia interfejsów internetowych oraz aplikacji, które są wygodne do wykorzystania przez jak największą ilość użytkowników. Przeczytanie tej pracy pozwoli zrozumieć kluczowe UX metody i techniki w stworzeniu przyjaznego UI designu.

University of Information Technology and Management in Rzeszow

Faculty of Media and Social Communication

Streszczenie pracy dyplomowej

Inclusive and Accessible UX/UI Design

**Author:** Nazarii Korniienko, w58975

**Supervisor:** dr hab., prof. WSIiZ Andrzej Adamski

**Key words:** _Interfaces, Inclusivity, Accessibility, Experience, Wireframing_

This Bachelor's diploma thesis studies the recommendations analyzed by its author, regarding the creation of web interfaces and applications that are convenient for use by as many users as possible. Reading this thesis will help to understand key UX methods and techniques in creating a user-friendly UI design.

1. Stepanov M., _The myths of the ancient UX_, [_https://uxdesign.cc/the-myths-of-the-ancient-ux-fdfc2b4c003d_](https://uxdesign.cc/the-myths-of-the-ancient-ux-fdfc2b4c003d) | <https://bit.ly/w58975-g>, z dnia: 05.01.2022.
2. Fuso L., _Inclusive Design – The benefit of designing for all_, [_https://designwanted.com/inclusive-design-the-benefit-of-designing-for-all_](https://designwanted.com/inclusive-design-the-benefit-of-designing-for-all) | <https://bit.ly/w58975-h>, z dnia: 04.01.2022.
3. Boichuk O., _The Nine Principles of UX Design Psychology_, [_https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users_](https://uxmag.com/articles/the-nine-principles-of-ux-design-psychology-can-you-predict-the-behavior-of-your-users) | <https://bit.ly/w58975-i>, z dnia: 06.01.2022.
4. Duhigg C., _Siła nawyku_, Dom Wydawniczy PWN, Warszawa 2013, s. 169-172.
5. Kowalski K., _Projektowanie bez barier_, Stowarzyszenie Przyjaciół Integracji, Warszawa 2016, s. 9-11.
6. Usability.gov, _Benefits of User-Centered Design_, [_https://www.usability.gov/what-and-why/benefits-of-ucd.html_](https://www.usability.gov/what-and-why/benefits-of-ucd.html) | <https://bit.ly/w58975-n>, z dnia: 18.03.2022.
7. Lewis C., Rieman J., Task-Centered User Interface Design, Boulder 2008, s. 1-6.
8. Tamże, s. 49-56.
9. Bienias N., _Inspiracje UI designera_, [_https://zebza.net/inspiracje-ui-designera_](https://zebza.net/inspiracje-ui-designera/) | <https://bit.ly/w58975-q>, z dnia: 20.04.2022.
10. Kleon A., _Steal Like an Artist_, Workman Publishing, Nowy Jork 2012, s. 21.
11. Feifei L., _Size Guides and Product Measurements_, [_https://www.nngroup.com/articles/sizes-measurements-ecommerce_](https://www.nngroup.com/articles/sizes-measurements-ecommerce/) | <https://bit.ly/w58975-o>, z dnia: 27.04.2022.
12. Hotjar, _UX analysis: best methods and key tools_, [_https://www.hotjar.com/ux-design/analysis/_](https://www.hotjar.com/ux-design/analysis/) | <https://bit.ly/w58975-p>, z dnia: 14.04.2022.
13. Światowa Organizacja Zdrowia, _World report on vision_, Genewa 2019, s. 26-27.
14. W3C WAI, _Web Content Accessibility Guidelines (WCAG) 2.1_, [_https://www.w3.org/TR/WCAG21_](https://www.w3.org/TR/WCAG21/) | <https://bit.ly/w58975-r>, z dnia: 29.04.2022.
15. W3C WAI, _WCAG 3 Introduction_, [_https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro_](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) | <https://bit.ly/w58975-s>, z dnia: 15.05.2022.
16. Hoffmann S., _Teoria kolorów w projektowaniu stron internetowych: właściwa paleta_, [_https://raidboxes.io/pl/blog/webdesign-development/color-theory-web-design_](https://raidboxes.io/pl/blog/webdesign-development/color-theory-web-design) | <https://bit.ly/w58975-t>, z dnia: 18.05.2022.
17. Shankar N., _Designing for accessibility, step 1: Color contrast_, [_https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4_](https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4) | <https://bit.ly/w58975-v>, z dnia: 27.05.2022.
18. Lyonnais S., _Accessibility Design 101: Color Contrast Considerations for UX Designers_, [_xd.adobe.com/ideas/principles/web-design/color-contrast-considerations-accessibility-design_](https://xd.adobe.com/ideas/principles/web-design/color-contrast-considerations-accessibility-design/) | <https://bit.ly/w58975-u>, z dnia: 24.05.2022.
19. WebAIM, _Contrast and Color Accessibility_, [_https://webaim.org/articles/contrast_](https://webaim.org/articles/contrast) | <https://bit.ly/w58975-w>, z dnia: 03.06.2022.
20. Fandom: Psychology, _Fitts's Law_, [_https://psychology.fandom.com/wiki/Fitts's_law_](https://psychology.fandom.com/wiki/Fitts's_law) | <https://bit.ly/w58975-x>, z dnia: 08.06.2022.
21. Vision Australia, _Typography in Inclusive Design Part 1_, [_https://visionaustralia.org/services/digital-access/blog/typography-in-inclusive-design-part-1_](https://visionaustralia.org/services/digital-access/blog/typography-in-inclusive-design-part-1) | <https://bit.ly/w58975-k>, z dnia: 13.04.2022.
22. W3C WAI, _Images of Text_, [_https://www.w3.org/WAI/tutorials/images/textual_](https://www.w3.org/WAI/tutorials/images/textual/) | <https://bit.ly/w58975-l>, z dnia: 13.04.2022.
23. Richards M., _Semantics to Screen Readers_, [_https://alistapart.com/article/semantics-to-screen-readers_](https://alistapart.com/article/semantics-to-screen-readers/) | <https://bit.ly/w58975-j>, z dnia: 07.04.2022.
24. Kriger S., _Accessibility Myths_, [_https://a11ymyths.com_](https://a11ymyths.com/) | <https://bit.ly/w58975-z>, z dnia: 17.06.2022.
25. Clark J., _To Hell with WCAG 2,_ [_https://alistapart.com/article/tohellwithwcag2_](https://alistapart.com/article/tohellwithwcag2) | <https://bit.ly/w58975-y>, z dnia: 14.06.2022.
26. Krug S., _Nie każ mi myśleć_, Helion, Gliwice 2014, s. 208.

---

> This diploma thesis is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).
>
> KOLEGIUM MEDIÓW I KOMUNIKACJI SPOŁECZNEJ | Kierunek: GRAFIKA KOMPUTEROWA I PRODUKCJA MULTIMEDIALNA | Specjalność: Projektowanie UX | Nazarii Korniienko | Nr albumu studenta: 58975 | Inkluzywny oraz dostępny UX/UI design | Promotor: dr hab., prof. WSIiZ Andrzej Adamski | PRACA DYPLOMOWA LICENCJACKA | Rzeszów 2022
