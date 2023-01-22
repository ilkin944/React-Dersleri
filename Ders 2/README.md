# Başlanğıcda
Əvvəlki dərsdə biz JSX haqqında öyrəndik və CDN-dən istifadə edərək React və ReactDOM paketinə daxil olduq. Bununla belə, CDN əvəzinə real layihələrdə siz React layihəsinin başlanğıcını (boilerplate) yaratmaq üçün create-react-app paketindən istifadə edəcəksiniz. İlkin yaratma-React tətbiqi 22 iyul 2016-cı ildə buraxıldı. Bu vaxta qədər tərtibatçılar veb paketi JavaScript modul paketi, babel və bütün lazımi paketləri əl ilə konfiqurasiya edirdilər və bu, yarım saat və ya bəlkə də daha çox vaxt aparırdı. İndi create-react-app hər şeyin qayğısına qalacaq və siz layihələrin konfiqurasiyasına və qurulmasına çox vaxt sərf etmək əvəzinə, yalnız məhsulun hazırlanması ilə məşğul olacaqsınız. Fərqli alətlərdən istifadə etməyə başlamazdan əvvəl gəlin bu problemdə istifadə edəcəyimiz bütün alətlərlə qısa tanış olaq. Siz hər şeyi başa düşmək məcburiyyətində deyilsiniz, amma mən React ilə işləyərkən istifadə etdiyimiz bəzi alətlər və texnologiyalar haqqında çox qısa məlumat verməyə çalışacağam.

# Node
Node JavaScript-in serverdə işləməsinə imkan verən JavaScript işləmə mühitidir. Node 2009-cu ildə yaradılmışdır. Node JavaScript-in inkişafı üçün böyük rol oynamışdır. React proqramı defolt olaraq localhost 3000-də başlayır. Create-react-app React Tətbiqi üçün qovşaq serverini konfiqurasiya edib. Buna görə də bizə node və node modulları lazımdır.

Əgər node yoxdursa, onu quraşdırın. node.js endirmək üçün [daxil olun](https://nodejs.org) .

Yüklədikdən sonra iki dəfə klikləyin və quraşdırın

Cihaz terminalımızı və ya əmr sorğusunu açıb aşağıdakı əmri yazmaqla node-un komputerimizə quraşdırılıb-qurulmadığını yoxlaya bilərik:
```
node -v
vXX.XX.X
```

# Modul

Lazım olduqda ixrac və idxal edilə bilən tək və ya çoxlu funksiyalar layihəyə daxil edilə bilər. React-də modullara və ya paketlərə daxil olmaq üçün keçiddən istifadə etmirik, əvəzində modulu idxal edirik. Modul və ya modulların necə idxal və ixrac olunacağına baxaq:
```
// math.js
export const topla = (a, b) => a + b
export const vur = (a, b) => a * b
export const cix = (a, b) => a - b

export default (function Hesablama() {
  return {
    topla,
    vur,
    cix,
  }
})()
```
İndi math.js modullarını başqa fayla idxal edək:

```
// index.js
// hesablamanı math.js-dən index faylımızda daxil edirik 
import hesabalama from './math.js'

// digər modulları daxil etmək
// bu modullar default olaraq eksport edilmədiyinə görə onları desctructure ilə dağıdırıq
import { topla, vur, cix } from './math.js'

import * as everything from './math.js' // buradan olan hərbirşeyin daxil olması
console.log(topla(5, 5))
console.log(hesabla.topla(5, 5))
console.log(hersey)
```
Bundan sonra, 'react'-dan React-ı və ya 'react-dom'-dan ReactDOM-u idxal etdiyini görəndə təəccüblənməyəcəksiniz.

# Paket
Paket bir modul və ya modullar toplusudur. Məsələn, React, ReactDOM paketlərdir.

### Node Paket Meneceri (NPM)
NPM 2010-cu ildə yaradılmışdır. NPM-ni ayrıca quraşdırmaq lazım deyil - node quraşdırdığınız zaman sizdə NPM də olacaq. NPM Node.js üçün defolt paket meneceridir. O, istifadəçilərə reyestrdə mövcud olan JavaScript modullarını istehlak etməyə və yaymağa imkan verir. NPM paketlər yaratmağa, paketlərdən istifadə etməyə və paketləri yaymağa imkan verir. NPM JavaScript-in böyüməsində də kifayət qədər böyük rol oynadı. Hazırda NPM reyestrində 350 000-dən çox paket var. NPM reyestrində create-react-app -a baxaq. [Yükləmələrin sayı](https://www.npmjs.com/package/create-react-app) paketin populyarlığını göstərir.


Visual Studio uzantıları (extension)
Bu uzantıları Visual Studio Kodundan quraşdırmalı ola bilərsiniz

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

### Create React App

React layihəsi yaratmaq üçün aşağıdakı yollardan birini istifadə edə bilərsiniz. Tutaq ki, siz node quraşdırmısınız. Mac və ya Linux-da komanda xətti interfeysini (CLI), git bash və ya terminalı açın. Sonra aşağıdakı əmri yerinə yetirin. Mən VS Code terminalı istifadə edirəm.
```
npx create-react-app proyektin-adi
```

Əgər hər dəfə layihə yaratdığınız zaman npx yazmağı xoşlamırsınızsa, aşağıdakı əmrdən istifadə edərək kompüterinizdə qlobal olaraq create-react-app paketini quraşdıra bilərsiniz.

```
npm install -g create-react-app
```
Create-react-app proqramını quraşdırdıqdan sonra aşağıdakı kimi React tətbiqini yaradırsınız:

```
create-react-app proyektin-adi
```

Və ya sadəcə aşağıdakı 3 kod sətrini terminalınızda yazmaqla ilk react proyektinizi yarada bilərsiniz.
```
npx create-react-app ilk-react-proyekti
```
```
cd ilk-react-proyekti
```

```
npm start
```

İndi React tətbiqiniz localhost 3000-də işləməlidir. App.js-ə gedin və bir az mətn yazaraq məzmunu dəyişdirin, brauzerdə ən son dəyişiklikləri görəcəksiniz. Serveri dayandırmaq üçün CLI-da (terminalda) **Ctr + C** düymələrini basın.


React tətbiqi
Create-react-app tərəfindən yaradılmış React-a baxaq. Hər dəfə yeni layihə yaratdığınız zaman create-react-app və layihənin adını işlədirsiniz.

![](./images/s0.png)


Aşağıdakı React boilerplate-də üç qovluq var:
- node_modules, 
- public və 
- src. 
Bundan əlavə, 
- .gitignore, 
- README.md, 
- package.json və 
- package-lock.json var. 

Bu qovluqları və faylları bilmək lazımdır.

- node_modules - React proqramlarının bütün lazımi node paketlərini saxlayır.

- public
  - index.html - bütün proqramda malik olduğumuz yeganə HTML faylı
  - favicon.ico - ikon faylı
  - manifest.json - tətbiqi mütərəqqi veb proqramı etmək üçün istifadə olunur
  - digər şəkillər - açıq qrafik şəkilləri (açıq qrafik şəkilləri sosial mediada link paylaşıldıqda görünən şəkillərdir)
  - robots.txt - məlumat, əgər veb sayt veb indekslənməyə icazə verirsə

- src
 - App.css, 
 - index.css - müxtəlif CSS fayllarıdır
 - index.js - bütün komponentləri index.html ilə birləşdirməyə imkan verən fayl
 - App.js - Adətən təqdimat komponentlərinin əksəriyyətini idxal etdiyimiz fayl
 - setupTests.js - test işlərinin yazılması üçün
package.json- Proqramların istifadə etdiyi paketlərin siyahısı
 - reportWebVitals.js - Varsayılan olaraq, müxtəlif ölçülərdən istifadə edərək tətbiqinizin performansını ölçməyə və təhlil etməyə imkan verən performans relayerini ehtiva edir.

- .gitignore - React boilerplate git ilə birlikdə gəlir və .gitingore fayl və qovluqların GitHub-a köçürülməməsinə imkan verir.
- README.md - Sənədləri yazmaq üçün Markdown faylı
- package-lock.json - paketin versiyasını kilidləmək üçün bir vasitədir

İndi biz, hazırda ehtiyacımız olmayan faylları () silək və yalnız indi ehtiyac duyduğumuz faylları saxlayaq.