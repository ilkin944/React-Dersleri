# React-da children anlayışı
Bilirik ki, Reactda komponentlər yarada və onları export edib başqa bir komponent içərisində import edə və istifadə edə bilirik. Lakin biz komponentlərimizi istifadə edərkən çox vaxt onları self-closing üsulu ilə bağlayırdıq. Onda bizim, komponentimiz içərisində başqa bir komponent və ya jsx istifadə etmək istəsəydik necə etməli idik? 

İlk dərsdə React-ı konsolumuza göndərərkən burada *children* adlı metodunda gəldiyini gördük. İndi isə həmin *children*-in necə işlədiyinə baxaq. İlk növbədə **src** qovluğu altında **components** adlı qovluq yaradıb içərisində isə **Button.jsx** adlı komponentimizi yaradaq. *Button* komponentimizi isə App komponentimizə daxil edib istifadə edək
**Button komponentimiz**
```
import React from 'react'

const Button = () => {
    return (
        <button>Düymə</button>
    )
}

export default Button
```

**App komponentimiz**
```
import Button from "./components/Button"

function App() {
  return (
    <Button />
  )
}

export default App;
```

İndi App komponentindən göndərilən məlumatı Button komponenti daxilində render edilməsi üçün isə, props-u göndərək, və göndərilən props-u və həmçinin həmin propsu Button-un övladı olaraq render etmək üçün isə children metodunu çağıraq.

```
import Button from "./components/Button"

function App() {
  return (
    <Button>
      Burada yazılan dəyəri göstər
    </Button>
  )
}

export default App;
```

```
import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default Button
```

# React-da environment

Bəzi hallarda mühitə əsasən bəzi dəyərləri qlobal olaraq saxlamaq istəyə bilərsiniz. React ilə layihə hazırlayarkən bizdə əsasən 2 mühit olacaq. Development mühiti, yəni layihəmizi develop etdiyimiz mühit və production mühiti, yəni məhsul səviyyəsindəki mühitimiz.

Məsələn, deyək ki, API URL-miz var, bu dəyər development və ya production mühitlərində fərqli ola bilər. Bu cür dəyərləri .env fayllarında saxlayacağıq.

Aşağıdakı adlarla .env faylı yarada bilərsiniz və o, əsas fayllarımızın olduğu yerdə yerləşməlidir:

.env.development - development mühitində gizli mühit dəyişənləri
.env.production - production mühitində gizli mühit dəyişənləri

Gəlin bu faylları müvafiq olaraq əsas layihəmiz içində yaradaq və orada 1-2 mühit dəyişənini təyin edək.
```
# .env.development
REACT_APP_API_URL=http://localhost/api
REACT_APP_TITLE=test title
```

```
# .env.production
REACT_APP_API_URL=http://test.com/api
REACT_APP_TITLE=production title
```

Artıq bu fayllara istədiyimiz yerdə istifadə edə bilərik. 

**Qeyd 1.: env faylları yaratdıqdan sonra serveri dayandırıb yenidən qoşmağı unutmayın.**
**Qeyd 2.: env faylları içərisində sadəcə public olan key-ləri istifadə edin. Private keyləri, şifrələri env faylı daxilində saxlamayın**
```
function App() {
  return (
    <div>
      {process.env.REACT_APP_API_URL} <br />
      {process.env.REACT_APP_TITLE}
    </div>
  )
}
```


# React-da fragment anlayışı

Bəzən biz React-da komponentimizin hər hansı valideyn teqini qaytarmasını istəmirik, ancaq mütləq qaydada burada bir valideyn və içərisində istənilən qədər övlad qaytarmalıyıq. Buna görədə React-da render zamanı komponentimizin hər hansı div və ya başqa teqi qaytarması əvəzində **fragment**-dən istifadə edə bilərik. React Fragmentini istifadə etmək üçün 2 üsul mövcuddur. İlk üsul, Fragmenti reactdan import etmək və render zamanı Fragment-i qaytarmaq, digər üsul isə sadəcə *<>* işarələri vasitəsi ilə fragment qaytarmaq.
1-ci üsul
```
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      Fragment ilə qaytarmaq
    </Fragment>
  )
}

export default App;
```
2-ci üsul
```
function App() {
  return (
    <>
      Fragment ilə qaytarmaq
    </>
  )
}

export default App;

```

# React-da klas adına görə işləmək
React-da elementin klas adına görə işləməyin bir çox yolu var, bunlardan əsas ikisi çox istifadə edilir. React daxilində şərtli ifadə ilə işləmək və ya başqa modul yükləyərək istifadə etmək

Məsələn aşağıdakı nümunədə gecə və gündüz rejimləri arasında keçid edək, və rejimə əsasən isə həm klasımızı həm də sözümüzü dəyişək

```
// dəyişiklikləri saxlaya biləcəyimiz state-ni çağırırıq
import { useState } from "react";
import './App.css'

function App() {
  // state-ə başlanğıc olaraq false göndərək
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* düymənin klikində isə setVisible funksiyamız state dəyərini əksinə dəyişir - true yəni */}
      <button onClick={() => setVisible(!visible)}>deyis</button>
      {/* div-in klasını isə əgər true-dursa "dark", false olarsa "light" rejim olsun */}
      <div className={visible ? "dark" : "light"}>
        {/* Həmçinin rejimə əsasəndə daxilindəki söz də dəyişsin. */}
        {visible ? "Gecə rejimi" : "Gündüz rejimi"}
      </div>
    </div>
  )
}

export default App;
```
Digər nümunədə isə React layihəmizin içərisində Tailwind və ya bənzəri hər hansı framework işlədək və burada klasların adlarına əsasən elementlərimizin görüntülərini dəyişək. Bunun üçün isə əlavə olaraq bir modul daha yükləməklə və işimizi daha da rahatlaşdıra bilərik
Yükləyəcəyimiz paketin adı isə *classnames*-dir.
```
npm i classnames
```

classnames paketini quraşdırdıqdan sonra onu Button komponentində cağırıb bizə göndərilən button variantlarına əsasən düyməmizi istifadə edə bilərik.
```
import React from 'react'
import classNames from 'classnames';

const Button = ({text, variant="default"}) => {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded-full" : true,
            "bg-slate-200" : variant === "default",
            "bg-green-200" : variant === "success",
            "bg-red-200" : variant === "danger",
            "bg-purple-200" : variant === "warning",
        })}>{text} - {variant}</button>
    )
}

export default Button
```

# React-da form elementləri ilə işləmək.

```
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <hr />
      Ad = {name} <br />
      Soyad = {surname}
    </div>
  );
}
```

```
import React, { useState } from 'react';

export default function App() {
  const [description, setDescription] = useState('örnek description');
  return (
    <div>
      <textarea
        cols={40}
        rows={10}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <hr />
      Açıqlama = {description}
    </div>
  );
}
```

```
import React, { useState } from 'react';

export default function App() {
  const [category, setCategory] = useState();
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>- Seçin -</option>
        <option value="1">HTML</option>
        <option value="2">CSS</option>
        <option value="3">JavaScript</option>
        <option value="4">React</option>
      </select>
      <hr />
      Seçilən kateqoriya = {category}
    </div>
  );
}
```
Əlavə olaraq seçilən kateqoriyanında adını gətirmək istəsəydik, belə yaza bilərdik
```
import React, { useState } from 'react';

const categories = ['HTML', 'CSS', 'JavaScript', 'React'];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <div>
      <button onClick={() => setCategory(3)}>Kategoriyanı dəyiş</button>
      <hr />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option hidden>- Seçin -</option>
        {categories.map((category, index) => (
          <option value={index} key={index}>{category}</option>
        ))}
      </select>
      <hr />
      Seçilən kateqoriya = {categories[category] || 'Seçilməyib'}
    </div>
  );
}
```

və ya optionlarımıza gələcək məlumatı obyektdən də gətirə bilərik
```
import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' }
];
export default function App() {
  const [category, setCategory] = useState('');
  const secilmisKateqoriya = categories.find(c => c.id === +category); 
  return (
    <div>
      <button onClick={() => setCategory('')}>Kateqoriyanı dəyiş</button>
      <hr />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option hidden value=''>- Seçin -</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <hr />
      Seçilən kateqoriya ={' '}
      {secilmisKateqoriya        
        ? secilmisKateqoriya.name
        : 'Seçilməyib'}
    </div>
  );
}
```
Həmçinin select-imiz multiple option seçmiş olsaydı kodumuz belə olacaqdı
```
import React, { useState } from 'react';
// ilk növbədə kateqoriyalarımız təyin edirik
const categories = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' }
];

export default function App() {
  // seçilən kateqoriyaları içərisində tutacaq state işlədirik
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <div>
      <hr />
      <select
        multiple
        value={selectedCategories}
        // selectimiz change olduqda setSelectedCategories funksiyası Arrayın içərisindən seçilmiş optionu tapacaq, sonra onu filtr edib seçilmiş olanı tapacaq, sonra isə nəticəni map-layıb selectedCategories statesin yeniləyəcək
        onChange={(e) => setSelectedCategories(Array.from(e.target.options).filter(o => o.selected).map(o => o.value))}
      >
        {/* kateqoriyalarımız üzərində dövr edib hər bir kateqoriyanı option içərisində yazaq */}
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {categoimport React, { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <button onClick={() => setChecked((checked) => !checked)}>
        Checkboxı Değiştir
      </button>
      <hr />
      <label>
        <input
          type="checkbox"
          value={checked}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Kuralları kabul ediyorum
      </label>
      <hr />
      Kurallar kabul edildi = {checked.toString()}
    </div>
  );
}ry.name}
          </option>
        ))}
      </select>
      <hr />
      Seçilən kateqoriyalar: 
      {/* burada isə seçilən kateqoriyanı ekranda göstərə bilmək üçün selectedCategories state-dən map-layıb hər seçiləndən birini çıxıb sonda vergüllə birbirindən ayırırıq və ya heç bir kateqoriya seçilməyibsə "Seçilməyib yazısını göstəririk." */}
      {selectedCategories.map(c => categories[c - 1].name).join(', ') || 'Seçilməyib'}
    </div>
  );
}
```

Chechkbox ilə isə işləyərkən kodumuz belə ola bilər
```
import React, { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <button onClick={() => setChecked((checked) => !checked)}>
        Checkbox-u dəyiş
      </button>
      <hr />
      <label>
        <input
          type="checkbox"
          value={checked}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Şərtləri qəbul edirəm
      </label>
      <hr />
      Şərtlər qəbul edildi = {checked.toString()}
    </div>
  );
}
```
Birdən çox checkbox olduqda isə bu cür işləyə bilərik
```
import React, { useState } from 'react';

export default function App() {
  // Checkbox üçün state formalaşdıraq
  const [rules, setRules] = useState([
    { id: 1, label: 'Qaydaları qəbul edirəm', checked: false },
    { id: 2, label: 'Müqaviləni qəbul edirəm', checked: false },
    { id: 3, label: 'Məxfilik qaydaları ilə razıyam', checked: false },
  ]);
  // əllə tək seçim olarsa changeHandle funksiyası işləyəcək
  // Bu funksiya setRules metodu ilə rules statesin alıb onları map-ləyəcək və hər bir qaydanın id-sinin seçilən value uyğun olduğu təqdirdə state-də checked dəyərini dəyişəcək
  const changeHandle = (e) => {
    setRules((rules) =>
      rules.map((r) => {
        if (r.id == e.target.value) {
          r.checked = e.target.checked;
        }
        return r;
      })
    );
  };
  // hamısın birlikdə seçmək və ya ləğv etmək üçün acceptToggle funksiyamız işləyəcək
  // setRules metodu isə hər bir qaydanı götürüb qaydalar üzərində map edəcək, və həm öncədən olan dəyərləri götürəcək, həmdə seçilməyən varsa seçəcək, seçilən varsa ləğv edəcək
	const acceptTogggle = () => {
    setRules((rules) =>
      rules.map((rule) => ({
        ...rule,
        checked: !rule.checked,
      }))
    );
  };
  // qaydaların hamsı üzərində every metodunu işlədib hər bir qaydanın disabled olmasını gözləyəcəyik
	const disabled = rules.every((rule) => rule.checked);
  return (
    <div>
      <button onClick={acceptTogggle}>{disabled ? "Hamısın ləğv et" : "Hamısın qəbul et"}</button>
      <hr />
      {rules.map((rule) => (
        <label style={{ display: 'block' }} key={rule.id}>
          <input
            type="checkbox"
            value={rule.id}
            checked={rule.checked}
            onChange={(e) => changeHandle(e)}
          />
          {rule.label}
        </label>
      ))}
			<hr />
      <pre>{JSON.stringify(rules, null, 2)}</pre>
    </div>
  );
}
```

Radio inputlarımızda birdən çox olduqda isə belə işləmək mümkündür
```
import React, { useState } from 'react';

const options = [
  { option: 'Option 1', id: 1 },
  { option: 'Option 2', id: 2 },
  { option: 'Option 3', id: 3 },
];

export default function App() {
  const [selected, setSelected] = useState(false);
  const option = options.find((o) => o.id === selected);
  return (
    <div>
      <button onClick={() => setSelected(2)}>Option-u dəyiş</button>
      <hr />
      {options.map((option) => (
        <label style={{ display: 'block' }} key={option.id}>
          <input
            type="radio"
            value={option.id}
            checked={selected === option.id}
            onChange={(e) => setSelected(option.id)}
          />
          {option.option}
        </label>
      ))}
      <hr />
      <pre>{option ? JSON.stringify(option) : 'Seçilmədi'}</pre>
    </div>
  );
}
```

File inputları ilə işləmək üçün isə aşağıdakı kodları yaza bilərik
```
import React, { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(false);
  const changeHandle = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <label>
        <input type="file" onChange={changeHandle} />
      </label>
      {file && <div>Seçilən fayl = {file.name}</div>}
    </div>
  );
}
```
və ya seçilən faylın ön izləməsinin olması üçün isə belə yaza bilərik
```
import React, { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(false);
  const changeHandle = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', function () {
        setFile(this.result);
      });
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setFile(false);
    }
  };
  return (
    <div>
      <label>
        <input type="file" accept="image/*" onChange={changeHandle} />
      </label>
      {file && <img src={file} />}
    </div>
  );
}
```

Birdən çox faylla işlədikdə isə belə yazmaq olar
```
import React, { useState } from 'react';

export default function App() {
  const [files, setFiles] = useState(false);
  const changeHandle = (e) => {
    setFiles([...e.target.files]);
  };
  return (
    <div>
      <label>
        <input type="file" multiple={true} onChange={changeHandle} />
      </label>
      {files && files.map((file) => <div>{file.name}</div>)}
    </div>
  );
}
```


# Component Life Cycle (həyat döngüsü)
Komponentin həyat dövrü var. Bu, komponent ilk dəfə yükləndikdə, komponent göstərildikdə və komponent məhv edildikdə işləyəcək kodları təyin etməyə imkan verir.

Bunun üçün useEffect() hook-dan istifadə olunur. Birinci parametr callback funksiyasıdır, ikinci parametr yuxarıdakı vəziyyətlərə uyğun olaraq müəyyən edilir.

2-ci parametr kimi boş massiv verilirsə, komponent ilk dəfə yükləndikdə işləyəcək.
```
import { useEffect } from "react"

function App() {

  useEffect(() => {
    // component ilk dəfə yükəndikdə bura işləyir
  }, [])
  
}
```
Əgər 2ci parametr verilməzsə komponent hər renderdə işləyir
```
import { useEffect } from "react"

function App() {

  useEffect(() => {
    // component hər render edildikdə bura işləyəcək
  })
}
```
Əgər 2-ci parametr verilərsə və geriyə return nəticəsi qaytarılarsa komponent ölmədən əvvəl işləyir
```
import { useEffect } from "react"

function App() {

  useEffect(() => {
    // component ilk dəfə yükləndikdə bura işləyir
    return () => {
      // component öldükdə bura işləyir
    }
  }, [])
  
}
```
Həmçinin, state-lər komponentin bir hissəsi olduğundan, 2-ci parametrdə massivdə göstərərək onların sadəcə state dəyişdikdə işləməsini təmin edə bilərsiniz.
```
import { useState, useEffect } from "react"

function Counter() {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('count dəyəri dəyişdi', count)
  }, [count])
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Artır</button>
      <button onClick={() => setCount(c => c - 1)}>Azalt</button>
      <p>counter dəyəri = {counter}</p>
    </div>
  )
}
```
Bir useEffect-də birdən çox state-ni izləmək istəyirsinizsə, 2-ci parametri [state1, state2] kimi təyin edə bilərsiniz.


# useRef

Bəzi hallarda, javascript tərəfində react elementlərinə daxil olmaq və onları idarə etmək istəyə bilərsiniz. Belə hallarda həmin elementi yoxlamaq lazımdır və bunda useRef() hook-dan istifadə olunur.

Məsələn, tutaq ki, bizdə bir input var və biz düyməni basdıqda focus-u bu input-a yönəltmək istəyirik. input-a focus etmək üçün ilk növbədə input-a daxil ola bilməliyik və useRef() ilə ref əməliyyatı edə bilərik.

```
import { useRef } from "react"

function App() {
  // ilk növbədə inputRef adlı dəyişkənimizi useRef hook-una mənimsədirik
  const inputRef = useRef()
  return (
    <>
    {/* inputumuza isə ref-lənəcəyini və bunuda inputRef-dən alacağını bildiririk */}
      <input type="text" ref={inputRef} />
      <button onClick={() => {
        // düymənin klikində isə inputRef altında olan current metodundan focus işini yerinə yetiririk
        inputRef.current.focus()
      }}>Focusla</button>
    </>
  )
}
export default App
```
Gördüyünüz kimi DOM elementinə çatmaq üçün useRef-dən istifadə etdik.

### forwardRef

İnput elementinə focus olarkən useRef-dən istifadə etdik, indi isə hər hansı react komponentinə çatmaq üçün forwardRef-dən istifadə etməliyik
```
import { useRef , forwardRef } from "react"

// Input adlı komponent yaradıb ona forwardRef ilə props və ref-i göndəririk
const Input = forwardRef((props, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

function App() {
  // inputRef dəyişənimizi isə useRef-ə mənimsədik
  const inputRef = useRef();
  return (
    <>
    {/* input komponentimizin ref-də hansı refdən istifadə edəcəyini bildiririk */}
      <Input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focusla
      </button>
    </>
  );
}
export default App
```

# useReducer

UseState Hookundan React-də state idarə etmək üçün istifadə edilir, lakin vəziyyət mürəkkəbdirsə, bu hook bəzən əngəl ola bilər. Bu zaman useReducer hook-undan istifadə etmək olar.

useReducer state və dispatch (göndərən) funksiyalarını qaytaran hook-dur. state tətbiqin vəziyyətini təmsil edən dəyərdir və state dəyərini dəyişdirmək üçün dispatch funksiyasından istifadə olunur.

useReducer-də içində verilmiş *reducer* funksiyası, cari vəziyyəti və "action" obyektini qəbul edir. Action obyekti hansı hərəkətin ediləcəyini müəyyənləşdirir və hansı dəyərin dəyişdirilməsini ehtiva edir. Reducer funksiyası state dəyərini action obyektinə uyğun olaraq dəyişdirir və yeni state obyektini qaytarır.

Onun istifadəsi vəziyyəti və göndərmə funksiyasını ehtiva edən useReducer hook-unu təyin etməklə başlayır və dispatch funksiyası state dəyərini dəyişdirmək üçün çağırılır.

İstifadə nümunəsi:

```
import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'artir':
      return { count: state.count + 1 };
    case 'azalt':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'artir' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'azalt' })}>
        Decrement
      </button>
    </>
  );
}

export default Counter;

```

UseReducer hook-u useState hook-undan daha mürəkkəb vəziyyətlər üçün daha uyğun seçim ola bilər. Tətbiq böyüdükcə state dəyişdirmək üçün də alternativdir.

və ya digər bir nümunə ilə eyni tətbiqi həm useState həm də useReducer ilə hazırlayaq
```
import {useState} from "react";

function Todos() {

	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState('')

	const addTodo = () => {
		setTodos([...todos, todo])
		setTodo('')
	}

	const deleteTodo = index => {
		setTodos([...todos.filter((t, i) => i !== index)])
	}

	return (
		<>
			<input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
			<button disabled={!todo} onClick={addTodo}>Əlavə et</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo} - <button  onClick={() => deleteTodo(index)}>Sil</button></li>
				))}
			</ul>
		</>
	)
}

export default Todos
```

indi isə yuxarıdakı state-mizi reducer ilə əvəzləyək
```
import { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case 'TODO_LISTI_YENILE':
			return {
				...state,
				todo: action.value
			}

		case 'TODO_ELAVE_ET':
			return {
				...state,
				todo: '',
				todos: [...state.todos, action.todo]
			}

		case 'TODO_SIL':
			return {
				...state,
				todos: [...state.todos.filter((t, i) => i !== action.index)]
			}
		default: return state;
	}
}

function Todos() {

	const [state, dispatch] = useReducer(reducer, {
		todos: [],
		todo: ''
	})

	const addTodo = () => {
		dispatch({ type: 'TODO_ELAVE_ET', todo: state.todo })
	}

	const deleteTodo = index => {
		dispatch({ type: 'TODO_SIL', index })
	}

	return (
		<>
			<input type="text" value={state.todo} onChange={e => dispatch({ type: 'TODO_LISTI_YENILE', value: e.target.value })} />
			<button disabled={!state.todo} onClick={addTodo}>Əlavə et</button>
			<ul>
				{state.todos.map((todo, index) => (
					<li key={index}>{todo} - <button onClick={() => deleteTodo(index)}>SİL</button></li>
				))}
			</ul>
		</>
	)
}

export default Todos
```

# memozation

Memoization optimallaşdırma texnikasıdır. primitiv məlumat növlərində 2 məlumatı dəyərə görə müqayisə etmək asandır. Misal üçün:
```
"a" === "a" // true
true === true // true
34 === 34 // true
```

Bununla belə, qeyri-primitiv məlumat növlərinə gəldikdə, bu zaman referanslar müqayisə edilir, dəyərlər deyil. Beləliklə, aşağıdakı nümunələr bir-birinə bərabər deyil:

```
{} === {}
[] === []
```
Görünən bir fərq olmasa da, yaddaşda saxlandıqları referanslar fərqli olduğu üçün heç vaxt eyni olmayacaqlar. Burada, React-də bəzi metodların köməyi ilə bu qeyri-primitiv tipləri saxlaya və dəyişməzsə gizləndiyi yerdən geri qaytara bilərik, beləliklə, heç bir əziyyət çəkmədən prosesimizi daha çox performansla davam etdirə bilərik.


### memo istifadəsi
Komponentlərin lazımsız rendereinin qarşısını almaq üçün istifadə olunur. Məsələn, komponent daxilində başqa bir komponenti çağırdıq. Ana komponentimiz göstərilərsə, çağırdığımız uşaq komponenti göstəriləcəkdir. Görəcəyiniz ən ümumi nümunə:

```
// ./components/Header.js
function Header({ text }) {
	console.log('header component render edildi')
	return (
		<header>{text}</header>
	)
}

export default Header
```
```
import { useState } from "react"
import Header from "./components/Header"

function App() {
  console.log('App component render edildi')
  const [count, setCount] = useState(0)
  const [text, setText] = useState('header')
  return (
    <div>
      <Header text={text} />
      <h3>{count}</h3>
      <button onClick={() => setCount(c => c + 1)}>Artır</button>
      <button onClick={() => setText('yeni header yazısı')}>Header Yazısını Dəyiş</button>
    </div>
  )
}

export default App
```

Yuxarıdakı misalda, biz Artır düyməsini hər dəfə basdıqda, konsolda 'header komponenti render edildi' mesajını görəcəyik. Bunun qarşısını almaq üçün export edərkən header komponentini memo()-da export edə bilərik.

Yəni bunun əvəzində, header komponentinə daxil olub memo-nu reactdan import etməli və Header-i memo içində export etməliyik.

```
export default Header
```

```
import { memo } from "react"

// ..

export default memo(Header)
```

App komponenti indi göstərilsə belə, Heder komponenti yalnız ona ötürülən props dəyişdikdə yenidən göstəriləcək. Bunu başa düşmək üçün Header mətnini dəyişdir düyməsini basaraq test edə bilərsiniz. 2-ci dəfə basıldıqda komponent yenidən göstərilməyəcək, çünki vəziyyət əvvəlki kimidir.

Bundan əlavə, bu texnikanı iç-içə istifadələrdə istifadə etmək faydalı olacaq. Todo nümunəsi ilə başlayaq:

```
// App.js
import { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Artır</button>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}
```

```
// ./TodoList.js
import { memo } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  console.log('todo list');
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </ul>
  );
}

export default memo(TodoList);
```
```
// ./AddTodo.js
import { useState, memo } from 'react';

function AddTodo({ setTodos }) {
  console.log('add todo');
  const [todo, setTodo] = useState('');
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, todo]);
    setTodo('');
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button disabled={!todo} type="submit">
        Əlavə et
      </button>
    </form>
  );
}

export default memo(AddTodo);
```
```
// ./TodoItem.js
import { memo } from 'react';

function TodoItem({ todo }) {
  console.log('todo item', todo);
  return <li>{todo}</li>;
}

export default memo(TodoItem);
```


# useMemo() istifadəsi

Komponent render edildikdə, övlad komponentə göndərilən props-lar da non-primitve dəyərlər olarsa onda övlad komponentdə render olmağa başlayacaq. Yuxarıdakı nümunəmizdə, əgər biz todos dəyərinin əvəzinə filteredTodos kimi dəyəri props kimi ötürsəydik, yenə də say artırıldıqda, App render ediləcək və filteredTodos artıq köhnə istinadına malik olmayacaqdı, beləliklə, props dəyişmiş kimi görünəcək və övlad komponentində render olacaqdı. Belə hallarda biz onu useMemo() ilə optimallaşdıra bilərik. Beləliklə, komponent göstərilsə belə, onun referansı dəyişmir, yalnız real dəyişiklik olduqda övlad komponenti göstərir.

Məsələn, yuxarıdakı App komponentinə search inputu əlavə edək və todoları filtr edək. Və TodoList-ə todos yoxda, filteredTodos propunu ötürək.

```
import { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
	const [search, setSearch] = useState('')
	
	const filteredTodos = todos.filter(todo => todo.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
	
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Artır</button>
			<hr />
			<input type="text" placeholder="Todoları axtar" value={search} onChange={e => setSearch(e.target.value)} />
			<hr />
      <AddTodo setTodos={setTodos} />
      <TodoList todos={filteredTodos} />
    </>
  );
}
```

İndi burada Artır düyməsinə basdıqda TodoList-in memo istifadə etməsinə baxmayaraq yenidən render olduğunu görürük. Buna görə də *filteredTodos* dəyərini useMemo istifadə edərək göndərməliyik
```
import { useMemo, useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
	const [search, setSearch] = useState('')
	
	const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }, [todos, search]) 
	
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Artır</button>
			<hr />
			<input type="text" placeholder="Todoları axtar" value={search} onChange={e => setSearch(e.target.value)} />
			<hr />
      <AddTodo setTodos={setTodos} />
      <TodoList todos={filteredTodos} />
    </>
  );
}
```

UseMemo()-un birinci parametri callback funksiyası, ikinci parametr isə asılılıqlardır, yəni yenidən hesablanmalı olan dəyərlər dəyişdikdə ikinci parametr massiv kimi müəyyən edilir. İndi eyni prosesi yenidən cəhd etsəniz, heç bir render olmadığını görəcəksiniz.


# Context

Tipik react tətbiqində state-lər əsas komponentdən uşaq komponentlərə props keçməklə istifadə olunur. Amma bu cür istifadə bir müddət sonra komponentlər və state-lər artdıqca böyük problemə çevrilir.

Belə hallar üçün biz qlobal miqyasda state-lər idarə etmək üçün React tərəfindən təmin edilən Context strukturundan istifadə edə bilərik.

Əlbəttə ki, qlobal state idarəetmə vasitələri var, lakin bunu bilmək faydalıdır, çünki bu, React-in özündə olan bir strukturdur.

Biz ümumiyyətlə Kontekst strukturundan istifadəçi əməliyyatları, tema və dil kimi qlobal əməliyyatlar üçün istifadə edə bilərik.

CreateContext() ilə istifadə üçün kontekst strukturu yaradılmışdır. Məsələn, saytın dilini və temasını özündə saxlayan kontekst strukturu yaradaq və onu kontekst/qovluqda SiteContext.js adı ilə yaradaq.
```
// ./context/SiteContext.js
import { createContext } from "react"

const SiteContext = createContext()

export default SiteContext
```

Kontekst strukturundan istifadə edərkən, bütün digər kodlarımızı əhatə etmək üçün onu bükmək lazımdır.

```
import Header from "./components/Header"
import SiteContext from "./context/SiteContext"

function App() {

  const data = {
    theme: 'dark',
    language: 'az'
  }

  return (
    <SiteContext.Provider value={data}>
      <Header />
    </SiteContext.Provider>
  )
}
export default App
```
SiteContext.Provider dedikdən sonra bütün komponentlərdə istifadə oluna biləcək dəyərləri value vasitəsi ilə props keçirik. Konteksimizi istifadə etmək üçün isə dəyərləi useContext-dən alırıq və artıq Header komponenti daxilində gəlib Context-i istifadə edə bilərik
```
// ./components/Header.js
import { useContext } from "react"
import SiteContext from "../context/SiteContext"

export default function Header() {

  const { theme, language } = useContext(SiteContext)

  return (
    <header>
      website language: {language} <br />
      website theme: {theme}
    </header>
  )
}
``` 
Hazırda isə burda bir problem var. Biz aldığımız dəyərləri dəyişdirə bilmirik. Bunun üçün isə məlumatları useState içinə alıb set metodumuzuda həmin value ilə birlikdə göndərməliyik
```
import { useState } from "react"
import Header from "./components/Header"
import SiteContext from "./context/SiteContext"

function App() {

  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('az')

  const data = {
    theme, 
    setTheme, 
    language, 
    setLanguage
  }
  return (
    <SiteContext.Provider value={data}>
      <Header />
    </SiteContext.Provider>
  )
}
export default App
```

Artıq state və setState qlobal paylaşıldığına görə bunu Header komponenti içərisində çağırıb istifadə edə bilərik

```
// ./components/Header.js
import { useContext } from "react"
import SiteContext from "../context/SiteContext"

export default function Header() {

  const { theme, setTheme, language, setLanguage } = useContext(SiteContext)

  return (
    <header>
      website language: {language} <br />
      <button onClick={() => setLanguage(lang => lang === "az" ? "en" : "az")}>Change lang</button>
      
      <hr />
      website theme: {theme} <br />
      <button onClick={() => setTheme(theme => theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    </header>
  )
}
```
Nəticəmiz uğurludur
