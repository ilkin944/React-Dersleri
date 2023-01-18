1. React nədir?
React təkrar istifadə edilə bilən istifadəçi interfeysi (UI) yaratmaq üçün JavaScript kitabxanasıdır. O, ilkin olaraq 29 may 2013-cü ildə buraxıldı. Cari versiya 18.2.0-dir və bir növ stabildir. React Facebook tərəfindən yaradılıb. React UI komponentlərini yaratmağı çox asanlaşdırır. Rəsmi React sənədlərini [burada](https://www.reactjs.org) tapa bilərsiniz. React ilə işləyərkən biz birbaşa DOM ilə əlaqə saxlamırıq. React-in DOM (Sənəd Obyekt Modeli) manipulyasiyasını idarə etmək üçün öz yolu var. React yeni dəyişikliklər etmək üçün virtual DOM-dan istifadə edir və yalnız dəyişdirilməsi lazım olan elementi yeniləyir. React Tətbiqini qurarkən birbaşa DOM ilə əlaqə saxlamayın və React virtual DOM üçün DOM manipulyasiya işini tərk edin. 

Xülasə:

- React 2013-cü ilin may ayında buraxıldı
- React Facebook tərəfindən yaradılıb
- React istifadəçi interfeyslərinin qurulması üçün JavaScript kitabxanasıdır
- React tək səhifəli proqramlar yaratmaq üçün istifadə olunur - Yalnız bir HTML səhifəsi olan proqram.
- React bizə təkrar istifadə edilə bilən UI komponentləri yaratmağa imkan verir
- React-ın son buraxılışı 18.2.0-dir
- [Reactın versiyaları](https://reactjs.org/versions/)
- React rəsmi sənədlərini [burada](https://reactjs.org/docs/getting-started.html) tapa bilərsiniz
Niyə biz React istifadə etməyi seçirik? Biz ondan aşağıdakı səbəblərə görə istifadə edirik:

- sürətli
- modul
- miqyaslana bilən
- çevik
- böyük icma və məşhur
- açıq mənbə
- Yüksək iş imkanı

1. JSX
JSX JavaScript XML deməkdir. JSX bizə HTML elementlərini JavaScript kodu ilə yazmağa imkan verir. HTML elementinin açılış teqində açılış və bağlanma teqləri, məzmunu və atributu var. Bununla belə, bəzi HTML elementlərinin məzmunu və bağlanma teqi olmaya bilər - onlar öz-özünə bağlanan elementlərdir. React-da HTML elementləri yaratmaq üçün createElement() funksiyasından istifadə etmirik, bunun əvəzinə sadəcə JSX elementlərindən istifadə edirik. Buna görə də, JSX React-da HTML elementlərini yazmağı və əlavə etməyi asanlaşdırır. JSX transpilerdən istifadə edərək brauzerdə JavaScript-ə çevriləcək - babel.js. Babel, JSX-i təmiz JavaScript-ə və ən son JavaScript-i köhnə versiyaya köçürən bir kitabxanadır. Aşağıdakı JSX koduna baxın.

```
// JSX syntax
// JSX də dırnaqlardan istifadəyə ehtiyac yoxdur.

const jsxElement = <h1>JSX elementi</h1>
const welcome = <h1>React-a xoş gəldiniz</h1>
const data = <small>18, Yan 2023</small>
```

Yuxarıdakı qəribə görünüşlü kod JavaScript-ə bənzəyir və görünür, lakin bu JavaScript deyil və HTML kimi görünür, lakin tamamilə HTML elementi deyil. JavaScript və HTML elementlərinin qarışığıdır. JSX bizə JavaScript-də HTML-dən istifadə etməyə icazə verə bilər. Yuxarıdakı JSX-dəki HTML elementi h1 və small-dır .

JSX elementi
Yuxarıdakı nümunədə gördüyünüz kimi, JSX JavaScript və HTML kimi sintaksisə malikdir. JSX elementi tək HTML elementi və ya əsas HTML elementinə bükülmüş bir çox HTML elementi ola bilər.

Bu JSX elementində h1 olan yalnız bir HTML elementi var .
```
const jsxElement = <h1>JSX elementi</h1> // JS ilə HTML
```

h2 daxilində başlıq və məzmun adlı yeni dəyişən elan etməklə daha çox JSX elementi yaradaq .
```
const title = <h2>React</h2>
```

Əlavə HTML elementləri əlavə etməklə bu JSX elementinə subtitrlər və digər məzmunlar əlavə edək. Etibarlı JSX elementi yaratmaq üçün hər bir HTML elementi xarici HTML elementi ilə bükülməlidir. Ad başlıq dəyişəni də başlığa dəyişdirilməlidir, çünki bizim JSX elementimiz tətbiqin demək olar ki, bütün başlığını ehtiva edir.
```
const header = (
  <header>
    <h1>React nədir</h1>
    <h2>React necə işləyir</h2>
    <h3>Nədən istifadə etməliyik</h3>
  </header>
)
```

Gəlin daha çox element əlavə etməyə davam edək. Müəllif adını və ilini göstərmək üçün əlavə HTML elementləri.
```
const header = (
  <header>
    <h1>React nədir</h1>
    <h2>React necə işləyir</h2>
    <h3>Nədən istifadə etməliyik</h3>
    <p>İlkin Zülfi</p>
    <small>18 Yanvar 2023</small>
  </header>
)
```

Gördüyünüz kimi header elementi bütün daxili HTML elementləri üçün əsas elementdir və JSX xarici ana element tərəfindən bükülməlidir. Başlıq HTML elementi və ya digər əsas HTML elementi olmadan yuxarıdakı JSX etibarsızdır.

JSX elementinin şərh edilməsi
Biz kodları müxtəlif səbəblərə görə şərh edirik və React-da JSX elementlərini necə şərh etməyi bilmək də yaxşıdır.
```
{
  /*
 <header>
    <h1>React nədir</h1>
    <h2>React necə işləyir</h2>
    <h3>Nədən istifadə etməliyik</h3>
    <p>İlkin Zülfi</p>
    <small>18 Yanvar 2023</small>
  </header>
*/
}
```

JSX Elementinin göstərilməsi
JSX elementini HTML sənədinə göstərmək üçün əvvəlcə HTML indeksi yaratmalıyıq. index.html istənilən React Tətbiqində olacaq yeganə HTML faylıdır. Buna görə də deyirik ki, hər bir React Tətbiqi tək səhifəli proqramdır. Gəlin index.html faylı yaradaq. React ilə iki yolla başlaya bilərik - ya CDN-dən istifadə etməklə, ya da create-react-app. create-react-app React layihəsinin çıxış qutusu yaradır və buna görə də bir çox insanlar React-in necə işlədiyini başa düşməkdə çətinlik çəkirlər. Mütləq yeni başlayanlar üçün hər şeyi aydınlaşdırmaq üçün bir CDN ilə başlamaq istərdim. Biz CDN-dən yalnız bu bölmədə istifadə edirik və problemin qalan hissəsində create-react-app istifadə edəcəyik və mən də sizə hər zaman yalnız create-react-app istifadə etməyi tövsiyə edirəm.

``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script></script>
  </body>
</html>```
```

Yuxarıdakı index.html-dən göründüyü kimi, bizdə id-si root olan div və script teqi var. root div bütün reaksiya komponentlərini index.html-ə qoşmaq üçün qapıdır. Script teqində biz öz JavaScript-imizi yazacağıq, lakin script növü babel olacaq. Babel, JSX reaksiyasını brauzerdə təmiz JavaScript-ə köçürəcək. Ssenariyə babel əlavə edək. Babel daxilində biz istənilən təmiz JavaScript, JSX və ümumiyyətlə istənilən Reaksiya kodunu yaza bilərik.

``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // kodumuzu burada yazacağıq
    </script>
  </body>
</html>```
```

Babel kitabxanası bizim sənədimizlə əlaqələndirilib və indi biz ondan istifadə edə bilərik. Növbəti addım CDN və ya linkdən istifadə edərək React və ReactDOM-u idxal etməkdir. React və ReactDOM-u əlaqələndirmək üçün biz hər iki paketi CDN-dən index.html gövdəsinə əlavə edirik. React-ın index.html ilə əlaqəli olub olmadığını yoxlamaq üçün console.log(React) vasitəsilə onu yoxlamağa çalışın. Brauzer konsolunu açın və bir obyekt almalısınız. React metodlarını ehtiva edən obyekt görsəniz, layihənizi React CDN ilə əlaqələndirə bildiniz və siz React istifadə etməyə hazırsınız.

``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        console.log(React)
    </script>
  </body>
</html>```
```

İndi index.html-də React kodunu yazmaq üçün lazım olan hər şey var. Gəlin, document.querySelect('#root') istifadə edərək kök elementi əldə edək və onu rootElement dəyişəninə təyin edək. DOM ilə birbaşa əlaqə qurduğumuz yeganə yerdir.

İndi JSX və JSX elementlərini bilirdiniz. Brauzerdə JSX elementini göstərək, bunun üçün bizə React və ReactDOM kitabxanası lazımdır. React və ReactDOM-a əlavə olaraq JSX-i JavaScript koduna köçürmək üçün bizə babel lazımdır. ReactDOM paketində metod render var. Render metodu iki arqument götürür: JSX elementi və ya komponent və root sənəd.

``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.querySelector('#root')

      // JSX element
      const jsxElement = <h1>JSX elementi</h1>

      // JSX elementini ReactDOM paketindən istifadə edərək render edəcəyik
      // ReactDOM render metodu var və bu metod 2 arqument qəbul edir
      ReactDOM.render(jsxElement, rootElement)
    </script>
  </body>
</html>```
```
JSX göstərilir

Gəlin daha çox məzmun təqdim edək. Daha çox məzmun göstərmək üçün JSX elementində daha çox HTML elementi olmalıdır. Məsələn, biz veb-saytın başlığını yarada bilərik və başlıqda başlıq, altyazı, müəllif və ya tarix və s. ola bilər. Unutmayın ki, biz eyni vaxtda yalnız bir JSX elementini göstərə bilərik.
``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      
      const rootElement = document.querySelector('#root')

      // JSX element
      const header = (
        <header>
          <h1>React</h1>
          <h2>React başlanğıclar</h2>
          <h3>Reactda işləmək</h3>
          <p>İlkin Zülfi</p>
          <small>18 Yanvar 2023</small>
        </header>
      )

      ReactDOM.render(header, rootElement)
    </script>
  </body>
</html>```
```
Daha çox məzmun göstərilir

Veb saytın başlığı üçün JSX elementi yaratdıq. Saytın əsas və altbilgisi haqqında nə demək olar? Başlığa bənzər, gəlin əsas və altbilgi üçün JSX elementi yaradaq.

Veb saytın əsas hissəsi üçün JSX elementi.
```
// JSX element
const main = (
  <main>
    <p>react.js başlamaq üçün lazım olanlar:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)
```
Veb saytın altbilgi hissəsi üçün JSX elementi.
```
// JSX element
const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
)
```

İndi bizim üç JSX elementimiz var: header, əsas və footer. Üç JSX elementinin hamısını göstərməyin ən yaxşı yolu onların hamısını əsas JSX elementinə bükmək və ya massivdə yerləşdirməkdir. JSX elementini başqa JSX elementinə daxil etmək üçün biz buruq mötərizədən istifadə edirik, {} və buruq mötərizə daxilində JSX adını çağırırıq.

```
// JSX element for the header part of the website
const header = (
  <header>
    <h1>React</h1>
    <h2>React başlanğıclar</h2>
    <h3>Reactda işləmək</h3>
    <p>İlkin Zülfi</p>
    <small>18 Yanvar 2023</small>
  </header>
)

const main = (
  <main>
    <p>react.js başlanğıcda bilinməli olanlar:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
```
İndi gəlin hər şeyi birləşdirək və brauzerə göstərək.  .
``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.querySelector('#root')

      const header = (
        <header>
          <h1>React</h1>
          <h2>React başlanğıclar</h2>
          <h3>Reactda işləmək</h3>
          <p>İlkin Zülfi</p>
          <small>18 Yanvar 2023</small>
        </header>
      )

      const main = (
        <main>
          <p>Reactda başlanğıcda lazımdır:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </main>
      )

      const footer = (
        <footer>
          <p>Copyright 2023</p>
        </footer>
      )

      const app = (
        <div>
          {header}
          {main}
          {footer}
        </div>
      )


      ReactDOM.render(app, rootElement)
      // və ya
      //  ReactDOM.render([header, main, footer], rootElement)
    </script>
  </body>
</html>```
```

Çoxsaylı JSX Elementlərinin göstərilməsi

Gəlin JSX elementlərimizə bəzi üslub tətbiq edək və nəticəni görək.

Styling JSX Elementi.

İndi isə başlıq hissəsinə style teqi açaq.

JSX-də stil və class adı
İndiyə qədər JSX elementlərində heç bir üslub tətbiq etməmişik. İndi gəlin JSX elementlərimizə üslub əlavə edək. Inline üslubu reaksiyanın ortaya çıxmasından sonra çox populyarlaşdı. Başlıq JSX elementinə sərhəd əlavə edək.

JSX elementinə üslub əlavə etmək üçün biz inline stil və ya className istifadə edirik. Stil obyektini {} istifadə edərək inyeksiya edirik. Hər bir CSS xüsusiyyəti açara çevrilir və hər bir CSS xassə dəyəri obyekt üçün dəyərə çevrilir. Məsələn, aşağıdakı nümunədə haşiyə açar və '2px solid orange' dəyər, color açar və 'black' dəyər, fontSize açar və '18px' dəyərdir. React və ya JavaScript-də CSS obyektində açar kimi istifadə etdikdə bütün iki sözlü CSS xassələri camelCase-ə dəyişəcək.
```
const header = (
  <header
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <h1>React</h1>
    <h2>React başlanğıclar</h2>
    <h3>Reactda işləmək</h3>
    <p>İlkin Zülfi</p>
    <small>18 Yanvar 2023</small>
  </header>
)
```
```
// və ya bu üsuldan istifadə edə bilərik.

const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }

const header = (
  <header style={style}>
    <h1>React</h1>
    <h2>React başlanğıclar</h2>
    <h3>Reactda işləmək</h3>
    <p>İlkin Zülfi</p>
    <small>18 Yanvar 2023</small>
  </header>
)
```
Tətbiqinizi hazırlayarkən hər şeyin yaxşı olub olmadığını bilmək üçün brauzer konsolunu açmaq yaxşı təcrübədir.

Gəlin yaratdığımız bütün JSX elementlərinin üslubunu davam etdirək: başlıq, əsas və altbilgi. Tətbiqimizi tərtib etmək üçün müntəzəm daxili üslubdan da istifadə edə bilərik. Normal üslubdan istifadə edərək, HTML elementini hədəfləmək üçün etiket adı, id, sinif, atribut və digər üsullardan istifadə edirik. Bu, React tərtibatçı cəmiyyətində çox yaygındır - insanlar id əvəzinə siniflərdən çox istifadə edirlər. Bu materialda id əvəzinə yalnız sinifdən istifadə edəcəyəm.

JSX elementində biz sinif əvəzinə className yazırıq, çünki sinif JavaScript-də qorunan sözdür. ClassName ilə oxşar, etiket teqində for əvəzinə htmlFor. Aşağıdakı nümunəyə baxın.
```
const title = <h1 className='title'>Reactda başlanğıc</h1>
const inputField = (
  <div>
    <label htmlFor='ad'>Adınız</label>
    <input type='text' id='ad' placeholder='Adınız' />
  </div>
)
```

Daxiletmə elementində istifadə olunan id üslub təyin etmək üçün deyil, etiketi giriş sahəsinə istinad etmək üçün deyil.

ClassName əvəzinə və ya htmlFor əvəzinə sinif istifadə edilərsə, belə bir xəbərdarlıq görəcəksiniz.

Class name xəbərdarlığı

İndi siz daxili üslubdan necə istifadə edəcəyinizi və className-dən necə istifadə edəcəyinizi bilirsiniz. Gəlin bütün JSX elementlərini üslublandıraq.
``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.querySelector('#root')

      // style
      const headerStyles = {
        backgroundColor: '#61DBFB',
        fontFamily: 'Helvetica Neue',
        padding: "25px",
        lineHeight: 1.5,
      }

      const header = (
        <header style={headerStyles}>
          <div className='header-wrapper'>
            <h1>React</h1>
            <h2>React başlanğıclar</h2>
            <h3>Reactda işləmək</h3>
            <p>İlkin Zülfi</p>
            <small>18 Yanvar 2023</small>
          </div>
        </header>
      )

      const mainStyles = {
        backgroundColor: '#F3F0F5',
      }
      const main = (
        <main style={mainStyles}>
          <p>Reactda başlanğıcda lazımdır:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </main>
      )

      const footerStyles = {
        backgroundColor: '#61DBFB',
      }
      const footer = (
        <footer style={footerStyles}>
          <p>Copyright 2023</p>
        </footer>
      )

      
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>```
```
Bütün JSX elementlərinin üslubu

Stil obyekti əvəzinə müntəzəm üslub metodundan istifadə edərək yuxarıdakılardan daha asandır. İndi gəlin bütün JSX-i tərtib etmək üçün daxili üslubdan istifadə edək. Xarici üslub metodundan istifadə etmək də mümkündür. 
``````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>React</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      
      const rootElement = document.querySelector('#root')

      
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>React</h1>
            <h2>React başlanğıclar</h2>
            <h3>Reactda işləmək</h3>
            <p>İlkin Zülfi</p>
            <small>Tarix: 18 Yanvar 2023</small>
          </div>
        </header>
      )

     
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              <strong>
                <em>react.js </em>
              </strong>
              başlanğıcda lazımdır{' '}
              :
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </main>
      )

      
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright 2023</p>
          </div>
        </footer>
      )

      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>```
```
Daxili Stil

JSX Elementinə verilənlərin yeridilməsi
İndiyə qədər biz JSX elementlərində statik məlumatlardan istifadə etmişik, lakin dinamik məlumat kimi müxtəlif məlumat növlərini də ötürə bilərik. Dinamik məlumatlar sətir, nömrə, boolean, massiv və ya obyekt ola bilər. Məlumat növlərinin hər birini addım-addım görək. JSX-ə məlumat daxil etmək üçün biz {} mötərizəsindən istifadə edirik.
```
const welcome = 'React'
const title = 'Reactda başlanğıc'
const subtitle = 'React-da necə işləməli'
const authorad = 'İlkin'
const authorSoyad = 'Zülfi'
const date = '18 Yanvar 2023'


const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorad} {authorSoyad}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
```
Başlıq JSX elementinə bənzər olaraq, biz əsas və altbilgi JSX elementlərinə məlumat inyeksiyasını həyata keçirə bilərik.

JSX Elementinə sətir yeridilməsi
Bu bölmədə biz yalnız sətirləri vururuq
```
const welcome = 'React'
const title = 'Reactda başlanğıc'
const subtitle = 'React-da necə işləməli'
const ad = 'İlkin'
const Soyad = 'Zülfi'
const date = '18 Yanvar 2023'

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {ad} {Soyad}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
```

JSX Elementinə nömrə yeridilməsi

```
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1970
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = <p> {age}</p>
```
Yuxarıdakı nümunədə gördüyünüz kimi, bəzi arifmetik hesablamalar və üçlü əməliyyatlar etmək mümkündür.

JSX Elementinə massiv yeridilməsi
Massiv üçün misal göstərmək üçün gəlin HTML, CSS, JavaScript-i massivlə dəyişdirək və onu aşağıdakı əsas JSX elementinə inyeksiya edək. Daha sonra, siyahıların göstərilməsi bölməsində daha ətraflı danışacağıq.

```
const techs = ['HTML', 'CSS', 'JavaScript']

const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        <strong>
          <em>react.js</em>
        </strong>
        başlanğıcda lazımdır{' '}
        :
      </p>
      <ul>{techs}</ul>
    </div>
  </main>
)
```

JSX Elementinə obyektin yeridilməsi
Biz JSX-ə sətir, nömrə, boolean, massiv verilənlərini yeridə bilərik, lakin obyekti birbaşa yeridə bilmirik. Məlumatı JSX elementinə yeritməzdən əvvəl biz əvvəlcə obyekt dəyərlərini çıxarmalıyıq və ya obyektin məzmununu dağıdmalıyıq. Məsələn, gəlin obyektin içərisinə ad və Soyad yazaq və onları JSX daxilində istifadə etmək üçün çıxaraq.

İndi gəlin hər şeyi bir yerə yığaq. Burada, aşağıdakı nümunədə məlumat dinamik olaraq JSX-ə yeridilir. 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>React</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px 10px 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      
      const rootElement = document.querySelector('#root')
      
      const welcome = 'React'
      const title = 'Reactda başlanğıc'
      const subtitle = 'React-da necə işləməli'
      const author = {
        ad: 'İlkin',
        Soyad: 'Zülfi',
      }
      const date = '18 Yanvar 2023'

      
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.ad} {author.Soyad}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      )

      const numOne = 3
      const numTwo = 2

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      )

      const yearBorn = 1820
      const currentYear = new Date().getFullYear()
      const age = currentYear - yearBorn
      const personAge = (
        <p>
          {' '}
          {author.ad} {author.Soyad} is {age} years old
        </p>
      )

     
      const techs = ['HTML', 'CSS', 'JavaScript']

     
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              başlanğıcda lazımdır{' '}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techs}</ul>
            {result}
            {personAge}
          </div>
        </main>
      )

      const copyRight = 'Copyright 2023'

      
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>{copyRight}</p>
          </div>
        </footer>
      )

      
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```
Dinamik məlumat

Gördüyünüz kimi siyahıların hamısı bir sətirdədir. Ona görə də JSX-ə yeritməzdən əvvəl siyahını istədiyimiz kimi formatlaşdırmalıyıq. Siyahını formatlaşdırmaq üçün onu JSX-ə yeritməzdən əvvəl onu dəyişdirməliyik. Xəritədən istifadə edərək massivi dəyişdirə bilərik . Reaksiya tərtibatçısı olaraq siz funksional proqramlaşdırmanı çox yaxşı başa düşməlisiniz (xəritə, filtr, azaltma, tapmaq, bəziləri, hər biri). Əgər funksional proqramlaşdırmanı yaxşı başa düşmürsünüzsə, 1-ci günə baxın.
```
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
```
Aşağıdakı kod nümunəsində siyahı indi siyahı elementlərini ehtiva edir və düzgün formatlaşdırılıb.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>React</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px 10px 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      
      const rootElement = document.querySelector('#root')
      
      const welcome = 'React'
      const title = 'Reactda başlanğıc'
      const subtitle = 'React-da necə işləməli'
      const author = {
        ad: 'İlkin',
        Soyad: 'Zülfi',
      }
      const date = '18 Yanvar 2023'

      
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.ad} {author.Soyad}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      )

      const numOne = 3
      const numTwo = 2

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      )

      const yearBorn = 1820
      const currentYear = new Date().getFullYear()
      const age = currentYear - yearBorn
      const personAge = (
        <p>
          {' '}
          {author.ad} {author.Soyad} is {age} years old
        </p>
      )

     
      const techs = ['HTML', 'CSS', 'JavaScript']
      const techsFormatted = techs.map((tech) => <li>{tech}</li>)

     
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              <strong>
                <em>react.js</em>
              </strong>
              başlanğıcda lazımdır{' '}
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
      )

      const copyRight = 'Copyright 2023'

      
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>{copyRight}</p>
          </div>
        </footer>
      )

      
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )
      
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```
Göstərilən siyahılar

Siyahı İD Yuxarıda gördüyünüz kimi, indi siyahılar düzgün formatlaşdırılıb, lakin konsolda hər bir siyahı uşağının unikal açarı olmalıdır deyə xəbərdarlıq var. Massivdə bizdə id yoxdur, lakin məlumatlarınızda id olduqda id-i unikal dəyər kimi ötürmək adi haldır. İndi gəlin, xəbərdarlığı aradan qaldırmaq üçün hər bir elementi unikal bir açarla ötürək.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>React</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      
      const rootElement = document.querySelector('#root')
      
      const welcome = 'Welcome to React'
      const title = 'Reactda başlanğıc'
      const subtitle = 'React-da necə işləməli'
      const author = {
        ad: 'İlkin',
        Soyad: 'Zülfi',
      }
      const date = '18 Yanvar 2023'

      
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.ad} {author.Soyad}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      )

      const numOne = 3
      const numTwo = 2

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      )

      const yearBorn = 1820
      const currentYear = 2020
      const age = currentYear - yearBorn
      const personAge = (
        <p>
          {' '}
          {author.ad} {author.Soyad} is {age} years old
        </p>
      )

     
      const techs = ['HTML', 'CSS', 'JavaScript']
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

     
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              <strong>
                <em>react.js</em>
              </strong>
              başlanğıcda lazımdır{' '}
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
      )

      const copyRight = 'Copyright 2023'

      
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>{copyRight}</p>
          </div>
        </footer>
      )

      
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```
Xəbərdarlığın aradan qaldırılması

İndi siz JSX elementlərinin necə yaradılacağını və həmçinin JSX-ə verilənlərin necə yeridiləcəyini çox yaxşı başa düşürsünüz. Növbəti hissədə create-react-app və komponentlərdən necə istifadə etmək barədə danışacağıq. Komponentlər JSX-dən daha güclü və faydalıdır.