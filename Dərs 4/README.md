# Fetch API

Heç bir əlavə paketdən istifadə etmədən HTTP sorğularını idarə etmək üçün bizə müasir interfeys təqdim edir.

Ən sadə şəkildə, HTTP sorğusu belə edilir:

```javascript
fetch('/api')
```

Bu bizə bir data qaytarır. Datanı idarə etmək üçün `then()` və `catch()` bloklarından istifadə edə bilərik. Əgər sorğu göndərdiyimiz yer bizə məlumatları json formatında göndərirsə, biz onu json kimi ötürməliyik.

```javascript
fetch('/api')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err))
```

`async/awiat` ilə sorğuları idarə etmək istəsəydik:

```javascript
async function getTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	if (response.status === 200) {
		const data = await response.json()
		console.log(data)
	} else if (response.status === 400) {
		console.log('Hata', response.statusText)
	}
}
```

Sorğu göndərərkən bəzi parametrləri də təyin edə bilərsiniz. Misal üçün:

```javascript
const formData = new FormData()
formData.append('name', 'İlkin')
formData.append('surname', 'Zülfi')

fetch('/api', {
	method: 'POST',
	body: formData
})
```

Əlavə olaraq sorğunu JSON formatında da göndərə bilərik
```javascript
let data = {
	name: 'İlkin',
	surname: 'Zülfi'
}

fetch('/api', {
	method: 'POST',
	body: JSON.stringify(data),
	headers: {
    'Content-Type': 'application/json',
  },
})
```



# React Router Dom
Biz naviqasiya strukturu üçün `react-router-dom` paketindən istifadə edəcəyik. Beləliklə, paketin üstünlüklərindən istifadə edərək səhifələrimizi asanlıqla idarə edəcək və gücümüzə güc qatacağıq :)

Quraşdırmaq üçün:

```javascript
npm i react-router-dom@6
```

İlk olaraq `BrowserRouter` komponentini `index.js`-də çağırırıq

```javascript
import { BrowserRouter } from "react-router-dom";
```

Ve App componentini bunun içinde render edirik.

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

App komponenti içərisində `Routes`, `Route` ve `Link` komponentlərini çağırırıq. Ve naviqasiya proseslərini müəyyən edirik.

```javascript
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Ana səhifə</Link>
        <Link to="/contact">Əlaqə</Link>
		<Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
		<Route path="blog" element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
```

`pages` qovluğunda `Home` ve `Contact` adında 2 komponenti yaradıb içinə `rafce` ilə sadə react strukturu yerləşdirə bilərsiz.

Burada `a` etiketi ilə də naviqasiya edə bilərsiniz, ancaq `Link` komponenti ilə səhifə yenilənmədən bu əməliyyatları daha asanlıqla idarə edə bilərsiniz.

#### İç-içə və Dinamik naviqasiya

İç-içə naviqasiya yaratmaq istədiyinizdə `Route` komponentini öz-özünə bağlamaq yerinə açıb bağlayaraq daxilə yenə `Route` təyin edə bilərsiniz. Məsələn:

```javascript
<Route path="blog" element={<Blog />}>
  <Route path="movzu/:url" element={<BlogPost />} />
</Route>
```

Artıq `/blog` və `/blog/movzu/movzu-adi` ilə nə gələrsə biz `Blog` və `BlogPost` səhifələrini göstərə bilərik. Təbii ki burada `pages` qovluğu daxilində səhifələri yaratmağı unutmayın.

### index Route və Outlet komponenti

İç-içə routelarda yuxarıdakı nümunədə göstərdiyimiz `Blog` komponenti əslində bizim əsas səhifəmiz olmalıdır. Digər `movzu` bağlantısı üzərindən gələcək postlarda bu `Blog` səhifəsində göstərilməlidir. Bunun üçün `<Outlet/>` komponentini istifadə etməliyik. Yəni `Blog` səhifəsi artıq bu formada olmalıdır.

```javascript
import { Outlet } from "react-router-dom"

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <nav>
        .. Qlobal olaraq Bloq səhifələrinə özəl hamısında göstəriləcək hissə varsa burada yerləşəcək ..
      </nav>
      <Outlet />
    </>
  )
}
```

Artıq digər alt səhifələr bu `Blog` səhifəsindəki `<Outlet/>`-in altında render olunmağa başlayacaq. Hazırda isə digər problemimiz `Blog` səhifəsi əsas səhifə olduğuna görə bunu `App` komponentində də yeniləməliyik.

```javascript
<Route path="blog" element={<Blog />}>
  <Route index element={<BlogPage />} />
  <Route path="movzu/:url" element={<BlogPost />} />
</Route>
```

Artıq `BlogPage` komponenti `/blog` səhifəsinə girdikdə render ediləcək.

### `useParams` ilə url parametrlərini istifadə etmək

Yuxarıdakı `movzu/:url` ilə dinamik route yaratdıq və istifadəçi hansı `url` yazarsa `BlogPost` səhifəsini gördü. İndi isə istifadəçinin hansı `url` yazıb gördüyünü bilmək üçün `useParams()` ilə bunu istifadə edə bilərik.

```javascript
import { useParams } from "react-router-dom";

export default function PostDetail() {

	const { url } = useParams()

	return (
		<>
			<h1>Blog Post Detalı</h1>
			<p>URL = {url}</p>
		</>
	)
}
```

> Fikir verdinizsə `movzu/:url` əvəzinə istənilən sözü yazıb `useParams` ilə almaq mümkündür. `url`-ləri `slug` ilə əvəzləyib baxın.

### 404 Error

Yaratdığımız naviqasiyada uyğun gəlməyən səhifəyə getmək istədikdə `404 Səhifə Tapılmadı` adlı xəta göstərmək üçün `path` dəyərində `*` yazıb yönləndirməyimiz kifayət edir.

```javascript
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="contact" element={<Contact />} />
	<Route path="blog" element={<Blog />}>
		<Route index element={<BlogPage />} />
		<Route path="movzu/:url" element={<BlogPost />} />
		<Route path="*" element={<PageNotFound />} />
	</Route>
	<Route path="*" element={<PageNotFound />} />
</Routes>
```

Artıq bu səhifələr xaricində hara getsək `PageNotFound` komponenti render edilmiş olacaq.

### Link komponenti

Səhifələr arasında keçidlər etmək üçün `a` teqi əvəzində `Link` komponentindən istifadə edə bilərik.

```javascript
<Link to="/contact">Əlaqə</Link>
```

Link komponentinin istifadəsinin tək mənfi tərəfi `Link` komponentinə klas təyin edə bilməməyimizdir.

### NavLink komponenti

`Link` komponentindən fərqli olaraq `NavLink` komponenti avtomatik olaraq hansı url-ə getmişiksə həmin `a` teqinə `active` klası əlavə edir. Həmçinin aktiv klası olduğuna görə css-də düzəlişlər edə və ya `active` klasını başqa bir klas adı ilə də əvəz edə bilərik. Məsələn:

```javascript
<NavLink to="/contact" style={({ isActive }) => isActive ? {backgroundColor: 'yellow'}}>Əlaqə<NavLink>
```

```javascript
<NavLink to="/contact" className={({ isActive }) => isActive ? 'aktivMenyu' : ''}>Əlaqə<NavLink>
```

```javascript
<NavLink to="/contact">
	{({isActive}) => (
		<>
			Əlaqə
			{isActive.toString()}
		</>
	)}
</NavLink>
```

> NavLink-ə heç bir klas adı və ya style verilməzsə avtomatik olaraq `active` klası qəbul edir.

### Outlet komponenti

Valideyn komponentdə övlad komponenti render etmək üçün istifadə edilir. Məsələn `/blog` səhifəsində bir iç-içə yönləndirmə və və layout üsulu yaradıb övlad komponentləri `<Outlet />` ilə render edə bilərik.

```javascript
import { Outlet } from "react-router-dom"

function Blog() {
	return (
		<>
			<nav>Linklər</nav>
			<Outlet />
		</>
	)
}
```

### Navigate komponenti

Yönləndirmə işi etmək istəyirsinizsə və bunu komponent əsaslı etmək istəyirsinizsə `Navigate` komponenti istifadə edilə bilər. Həmçinin `Navigate` komponenti çox sadə quruluşa malikdir və siz onunla istifadəçini `to` içərisində bildirdiyiniz ünvana göndərməklə yanaşı `props`-ları həmçinin `state`-də göndərə bilərsiniz.

```javascript
<Navigate to="/blog" state={{ state1: 'test'}} />
```

### useLocation() hook-u

Mövcud `location` obyektini qaytarır. Bu hook vasitəsi ilə istifadəçi hazırkı səhifədən başqa səhifəyə yönləndikdə də məlumatlarıda göndərə bilərsiniz.

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  useEffect(() => {
    // İstifadəçi hansı linkdən gəldi və hara getdi => Google Analytic-ə göndərə bilərik.
  }, [location]);
	
	console.log(location)

  return (
    // ...
  );
}
```
> Əlavə olaraq `Navigate` komponenti və ya `useNavigate` hook-u ilə göndərilən state-i də istifadə edə bilərsiniz. Məsələn `/login`-ə yönləndirmə edərlən yönləndirilən səhifəni state-də saxlayıb giriş etdikdən sonra əlaqəli səhifəyə (məsələn `Hesabım`) göndərə bilərik.

### `useNavigate()` hook-u

Yönləndirmə prosesini hook səviyyəsində etmək üçün istifadə edilir. Məsələn:

```javascript
import { useNavigate } from "react-router-dom"

function App() {
	const navigate = useNavigate()

	navigate('/blog', { replace: true, state: { state1: 'test'}})
}
```

Burada `replace: true` dediyiniz halda geriyə qayıtdıqda yönləndirmə səhifəsini  görməzdən gələcək.


### `useResolvedPath()` Hooku

Verilən path-in location məlumatını qaytarır.

```javascript
useResolvedPath('/blog')
```

### `useRoutes()` Hooku

Naviqasiya strukturunu bir array-də yaradaraq təyin etməyimizə kömək edir. Beləliklə `route`-ları ayrı bir fayllarda yaratmırıq. Əvəzində bir fayl yaradıb, hamısını içinə ala bilərik. Məsələn:

```javascript
// ./routes.js
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/Blog/BlogPostDetail";

const routes = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'blog',
		element: <Blog />,
		children: [
			{
				path: 'movzu/:url',
				element: <BlogPostDetail />
			}
		]
	}
]

export default routes
```

və istifadə edərkən:

```javascript
import { useRoutes } from "react-router-dom"
import routes from "./routes"

export default function App() {
	<>
		{useRoutes(routes)}
	</>
}
```

Əlavə olaraq naviqasiyamızı `lazy load` üsulu ilə `Suspense` komponenti içərisində göstərə bilərdik. 
Bunun üçün reactdan `lazy` və `Suspense`-i import edib, komponentləri ilk öncə `lazy` funskiyası daxilində import etməli, sonra isə göstəriləcək komponenti `Suspense` komponenti içərisində göndərək

```javascript
import { lazy, Suspense } from "react"
const Home =  lazy(() => import("./pages/Home"))
const Blog = lazy(() => import("./pages/Blog"))
const BlogPostDetail = lazy(() => import("./pages/Blog/BlogPostDetail"));

const routes = [
	{
		path: '/',
		element: <Suspense>
                <Home />
              </Suspense>
	},
	{
		path: 'blog',
		element: <Suspense>
                <Blog />
              </Suspense>,
		children: [
			{
				path: 'movzu/:url',
				element: <Suspense>
                    <BlogPostDetail />
                </Suspense>
			}
		]
	}
]
export default routes
```

### `useSearchParams()` Hooku

`Query String`-ləri idarə etmək üçün istifadə olunur. Məsələn, belə bir link strukturumuz var:

```javascript
/blog?category=apple&search=mac
```

Buradaki `category` ve `search` parametrlərini almaq üçün:

```javascript
import { useSearchParams } from "react-router-dom"

function Blog() {
	const [searchParams, setSearchParams] = useSearchParams()
	
	console.log(searchParams.get('category'))
	console.log(searchParams.get('search'))
}
```

Yeni bir `query string` mənimsətmə üçün `setSearchParams` daxilində göndərmək mümkündür

```javascript
setSearchParams('category=css')
```

### generatePath() Metodu

Verilən dəyərlərdən düzgün bir `url` çıxardır.

```javascript
generatePath("/users/:url", { url: "nigar.abdulla" }); 
// "/users/42"
generatePath("/files/:type/*", {
  type: "img",
  "*": "cat.jpg",
}); 
// "/files/img/cat.jpg"
```

Əlavə olaraq route-ı adlandıraraq və `generatePath()` ilə birlikdə adlı olaraq istifadə edə bilərsiniz: Məsələn:

```javascript
import routes from "./Routes";
import { generatePath } from "react-router-dom"

export const getPath = (path, data = {}) => {
	let route
	path.split('.').map((current, index) => {
		if (index === 0) {
			route = routes.find(r => r.name === current)
		} else {
			route = route.children.find(r => r.name === current)
		}
	})
	return generatePath(route.path, data)
}
```

Bunu `reduce()` əməliyyatı ilə də etmək istəyirik:

```javascript
export const getPath = (path, data = {}) => {
	let route = path.split('.').reduce((route, current) => {
			return !route ?
				routes.find(r => r.name === current) :
				route.children.find(r => r.name === current)
	}, false)
	return generatePath(route.path, data)
}
```


# React Helmet ilə SEO

React proyektlərində ən əsas problem SEO kimi görünsə də, Google və bənzər böyük axtarış motorları bu mövzunu çoxdan həll ediblər. Əlbəttə biz də onlara köməkçi ola bilərik. Bunun üçün, hər səhifəyə xüsusi meta datalarını bu paket vasitəsilə asanlıqla tanıdıb onların işini asanlaşdıra bilərik.

`Helmet`-i Qurmaq üçün:

```javascript
npm i react-helmet
```

istifadə etmək üçün:

```javascript
impory { Helmet } from "react-helmet"

function App() {
	return (
		<>
			<Helmet>
				<title>ANA SƏHİFƏ</title>
				<meta name="description" content="Nümunə sayt açıqlaması" />
			</Helmet>
		</>
	)
}
```

# Formik ilə Form istifadəsi

Form-ları daha idarəolunan bir şəkildə idarə etmək üçün `formik` kimi form paketlərini istifadə edə bilərsiniz. Bir çox fərqli form paketi mövcuddur, biz `formik`-i istifadə edəcəyik.

`Formik`-i qurmaq üçün:

```javascript
npm i formik
```

İstifadəsi asan olan Formiki ən asand üsulla istifadə etmək üçün

```javascript
import {Formik} from "formik";

export default function Form() {
	return (
		<Formik initialValues={{
			name: 'İlkin',
			surname: ''
		}} onSubmit={(values, actions) => {
			console.log(values)
			console.log(actions)
		}}>
			{({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
				<form onSubmit={handleSubmit}>
					<input type="text" name="name" value={values.name} onChange={handleChange}/> <br/>
					<input type="text" name="surname" value={values.surname} onChange={handleChange}/> <br/>
					<button type="submit" disabled={isSubmitting}>Göndər</button>
				</form>
			)}
		</Formik>
	)
}
```

Formik paketinin bizə təqdim etdiyi komponentləri isə bucür istifadə edə bilərik

```javascript
import {Formik, Form, Field, ErrorMessage} from "formik";

export default function Home() {
	return (
		<Formik initialValues={{
			name: 'İlkin',
			surname: '',
			about: '',
			rules: false,
			level: 'mid',
			gender: '1',
			skills: ['front', 'back']
		}} onSubmit={(values, actions) => {
			console.log(values)
			console.log(actions)
		}}>
			{({isSubmitting}) => (
				<Form>
					<Field type="text" name="name" /> <br/>
					<Field type="text" name="surname" /> <br/>
					<Field name="about" component="textarea" /> <br/>
					<div>
						<label>
							<Field type="radio" value="junior" name="level" />
							Beginner
						</label>
						<label>
							<Field type="radio" value="middle" name="level" />
							Junior
						</label>
						<label>
							<Field type="radio" value="senior" name="level" />
							Senior
						</label>
					</div>
					<label>
						<Field type="checkbox" name="rules" />
						Şərtləri oxudum və qəbul edirəm
					</label> <br/>
					<Field component="select" name="gender">
						<option>Seçin</option>
						<option value="1">kişi</option>
						<option value="2">qadın</option>
					</Field> <br/>
					<Field component="select" multiple={true} name="skills">
						<option>Seçin</option>
						<option value="html">html</option>
						<option value="css">css</option>
						<option value="js">js</option>
						<option value="react">react</option>
					</Field> <br/>
					<button type="submit" disabled={isSubmitting}>Göndər</button>
				</Form>
			)}
		</Formik>
	)
} 
```

### useField() ilə Custom Komponentlər

Formik-in komponentləri ya da standart form elementləri yerinə daha da özəlləşdirdiyimiz öz komponentlərimizi də belə istifadə edə bilərik.

```javascript
import {Formik, Form, useField} from "formik";

function Input({label, ...props}) {
	const [field, meta, helpers] = useField(props)
	return (
		<label>
			{label}
			<input {...field} {...props}/>
		</label>
	)
}

function Textarea({label, ...props}) {
	const [field, meta, helpers] = useField(props)
	return (
		<label>
			{label}
			<textarea {...field} {...props}/>
		</label>
	)
}

function Select({label, options, ...props}) {
	const [field, meta, helpers] = useField(props)
	return (
		<label>
			{label}
			<select {...field} {...props}>
				{options.map((option, key) => <option value={option.key} key={option.key}>{option.value}</option>)}
			</select>
		</label>
	)
}

function Checkbox({label, ...props}) {
	const [field, meta, helpers] = useField(props)
	const clickHandle = () => {
		helpers.setValue(!field.value)
	}
	return (
		<label onClick={clickHandle}>
			<span style={{display: 'inline-block', width: 20, height: 20, backgroundColor: field.value ? 'red' : '#eee'}}/>
			{label}
		</label>
	)
}

function Radio({label, options, ...props}) {
	const [field, meta, helpers] = useField(props)
	const clickHandle = value => {
		helpers.setValue(value)
	}
	return <>
		<h6>{label}</h6>
		{options.map((option, key) => (
			<label key={key} onClick={() => clickHandle(option.key)}>
				<span style={{display: 'inline-block', width: 20, height: 20, borderRadius: '50%', backgroundColor: field.value === option.key ? 'red' : '#eee'}}/>
				{option.value}
			</label>
		))}
	</>
}

function File({label, ...props}) {
	const [field, meta, helpers] = useField(props)
	const changeHandle = e => {
		helpers.setValue(e.target.files[0])
	}
	return (
		<label>
			{label}
			<input type="file" onChange={changeHandle}/>
			Seçilən fayl = {field?.value?.name}
		</label>
	)
}

export default function Home() {
	return (
		<Formik initialValues={{
			name: 'İlkin',
			surname: '',
			about: '',
			rules: false,
			level: 'mid',
			gender: '1',
			avatar: false,
			skills: ['html', 'css']
		}} onSubmit={(values, actions) => {
			console.log(values)
			console.log(actions)
		}}>
			{({isSubmitting}) => (
				<Form>
					<Input label="Ad" name="name"/> <br/>
					<Textarea label="Haqqımda" name="about"/> <br/>
					<Select label="cins" name="gender" options={[
						{key: '1', value: 'kişi'},
						{key: '2', value: 'qadın'}
					]}/> <br/>
					<Select label="bacarıqlar" name="skills" multiple={true} options={[
						{key: 'css', value: 'CSS'},
						{key: 'javascript', value: 'Javascript'},
						{key: 'react', value: 'React'}
					]}/> <br/>
					<Checkbox label="Şərtləri qəbul edirəm " name="rules"/> <br/>
					<Radio label="səviyə" name="level" options={[
						{key: 'junior', value: 'Jr. Dev'},
						{key: 'middle', value: 'Md. Dev'},
						{key: 'senior', value: 'Sr. Dev'}
					]} /> <br/>
					<File label="Avatar" name="avatar" /> <br/>
					<button type="submit">Göndər</button>
				</Form>
			)}
		</Formik>
	)
}
```

### enableReinitialize Propu

Bir dəfə `initialState` ilə yükləndikdən sonra, state dəyişsə belə form özünü yenidən render etmir. Bu da bəzi problemləri bərabərində gətirir. Bu kimi state dəyişdiyində formun özünü yenidən render etməsi üçün `<Formik>` komponentin `enableReinitialize` propunu `true` olaraq təyin edə bilərsiniz. 

# Yup - Form validation

Formik-də validasyon əməliyyatları yerinə `Yup` paketini istifadə edərək çox daha təsirli bir şəkildə idarə edə bilərsiniz. Onsuzda formik-i yazan şirkətdə Yup-a xüsusi bir inteqrasiya hazırlayıblar, yəni asanlıqla istifadə edə bilirik.

`Yup` quraşdırmaq üçün

```javascript
npm i yup
```

### Default Mesajları hazırlamaq

İlk olaraq `validations` adlı bir qovluq yaradın və `validation.js` faylına bunları yazın.

```javascript
import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu xana mütləq doldurulmalıdır'
    },
    string: {
        email: 'Doğru e-poçt ünvanı daxil edin.',
        min: 'Bu xana minimum ${min} simvol olmalıdır.',
        max: 'Bu xana maksimum ${max} simvol olmalıdır.',
        url: 'Doğru bir URL daxil edin.'
    },
    boolean: {
        oneOf: 'Bu xananı seçməlisiniz.'
    }
})

export default Yup
```

Artıq bir doğrulama faylımız belə olmalıdır

```javascript
import Yup from "./validation"

export const UserSchema = Yup.object().shape({
	name: Yup.string()
		.required(),
	surname: Yup.string()
		.required()
})
```

Həmçinin Formik ilə belə istifadə edə bilərik

```javascript
import { UserSchema } from "./validations/UserSchema"
<Formik ... validationSchema={UserSchema} >
```

Yuxarıdakı nümunəmizə əsasən doğrulama işi üçün aşağıdakı kimi yaza bilərik

```javascript
import Yup from "./validation"

export const SampleSchema = Yup.object().shape({
	name: Yup.string().required(),
	surname: Yup.string().required(),
	about: Yup.string().required(),
	gender: Yup.string().required(),
	rules: Yup.boolean().oneOf([true]),
	skills: Yup.array().test({
		message: 'ən az 2 seçim edin',
		test: arr => arr.length >= 2
	}),
	avatar: Yup.mixed().test({
		message: 'Bir fayl seçin!',
		test: file => file?.name
	})
});
```

# React i18next ilə Dil Sistemi

React ilə layihə develop etdirərkən, dil sisteminə mütləq ehtiyac duyacağıq. Bu kimi hallar üçün `react-i18n` paketinə ehtiyacımız olacaq.

`React-i18n` - i qurmaq üçün:

```javascript
npm i react-i18next i18next
```

İlk olaraq `i18n.js` faylı yaradıb bu şəkildə kodlarımızı yazaq.

```javascript
import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
```

Və altında kiçik bir tərcümə sistemi yaradaq. Tərcüməmiz İngilis və Azərbaycan dillərində olacaq

```javascript
const resources = {
	en: {
		translation: {
			welcome: 'Welcome to React'
		}
	},
	az: {
		translation: {
			welcome: 'React\'a Xoş gəldiniz'
		}
	}
}
```

Konfiqurasiyaya başlayaq

```javascript
i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en'
	})
  
export default i18n
```

`i18n.js` faylını `index.js`-də çağırdıqdan sonra hazırıq.

Artıq komponentlər içində istifadə edə bilərik. Məsələn App komponentimizdə bu şəkildə istifadə edə bilərik:

```javascript
import { useTranslation } from "react-i18next";

function App() {
  
  const { t, i18n } = useTranslation()

  return (
    <>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'az' : 'en')}>Dili dəyiş</h1>
    </>
  )
}
```

### Dil fayllarını ayırmaq

Inline olaraq dil kodları yaratmaq əlbəttə çox məntiqli deyil, `public/locales` altında dil fayllarını ayrı ayrı saxlamaq istəyirik. Bunun üçün bu paketi quracağıq:

```javascript
npm i i18next-http-backend 
```

Həmçinin setup a belə daxil edəcəyik

```javascript
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
	.use(initReactI18next)
	.init({
		lng: 'en'
	})
```

Və nümunə dil fayllarımız az ve en dilində olacaqsa fayl quruluşu belə olmalıdır:

1. public/locales/en/translation.json
2. public/locales/az/translation.json

Nümunə translation.json faylı isə belə olmalıdır:

```javascript
{
  "welcome": "Welcome to React"
}
```

### Dil fayllarını Ayrı Bir Backendden çəkmək

Əgər react proyektinin içində deyilsə, ayrı bir backendden dilləri çəkmək, yuxarıdakı varianta əlavə olaraq, `init()` metodu içində bu şəkildə bir konfiqurasiya verməmiz lazımdır. Deyək ki backend üçün dil yükləmə metodumuz bu olsun:

```javascript
https://api.example.com/language/az
https://api.example.com/language/en
```

Burada az və en dinamik olaraq belə istifadə oluna bilər

```javascript
i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: 'en',
		backend: {
			loadPath: 'https://api.example.com/language/{{lng}}'
		}
	})
```

Əlavə olaraq backend tərəfində CORS icazələrinin verilmiş olması lazımdır.

### Default brauzer dilini təyin etmək

Default brauzer dilinə görə dil faylı yükləmək üçün bu paketi qurmaq lazımdır:

```javascript
npm i i18next-browser-languagedetector
```

Və quraşdırmamız belə olmalıdır

```javascript
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en'
	})
```

Artıq brauzerlərdə dil faylı nə isə onu istifadə etməyə çalışacaq. Əgər onunla bağlı bir fallbackLng faylı yoxdursa altındaki mövcud dil faylını göstərəcəkdir.

### Tərcümələri React Componentleri xaricində istifadə etmək 

Belə bir ehtiyac içində `i18n.js` faylını import edib içərisindəki metodunu istifadə edə bilərsiniz:

```javascript
import i18n from "./i18n"

console.log(i18n.t('welcome'))
```


### withTranslation() HOC

`withTranslation` daha yüksək dərəcəli funksiyanı istifadə edərək komponentə prop olaraq `i18n` və parametrləri göndərə bilərdi:

```javascript
import { withTranslation } from 'react-i18next';

function MyComponent({ t, i18n }) {
  return <p>{t('my translated text')}</p>
}

export default withTranslation()
```

### İnterpolyasiya

Dinamik dəyərlərinizi çevirmək üçün istifadə edə bilərsiniz. Məsələn dil faylınızda framework adını dinamik alacaqsanız bu şəkildə düzəldəcəksiniz:

```javascript
{
	"welcome": "Welcome to {{framework}}"
}
```

Ve göstərərkən belə göndərəcəksiniz:

```javascript
t('welcome', { framework: 'React' })
```

Ayrıca obyekt olaraq da göndərə bilərik:

```javascript
const framework = {
	name: 'React'
}

t('welcome', { framework })
```

Dil faylında belə istifadə etməyimiz lazımdır:

```js
{
"welcome": "Welcome to {{framework.name}}"
}
```
