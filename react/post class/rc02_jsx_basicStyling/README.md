


## REACT STARTED

npx
```
npx create-react-app my-app
```
npm 
```
npm init react-app my-app
```
yarn
```
yarn create react-app my-app
```

[]()https://create-react-app.dev/docs/getting-started



Githubtan react dosyası clone yaptığımızda;
```
npm install
or 
# yarn kurulu ise; npm install --global yarn
yarn---best pratice
```
komutlarıyla node modules install edilir.Git bash kullanmak önerilir.

## Component Mimarisi
- Compoenetin çağrılması self closing tag ile yapılır.
- Single Pages Application
- Herbir componentin export edilmesi ve kullanılacak yerde 
- import edilerek erişim sağlanması
- Component isimleri büyük harfle başlamalıdır

<img src="">

index.js👇

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.

const root = ReactDOM.createRoot(document.getElementById('root')); //* create ile object haline gelir
root.render(<App />);


## JSX 

JSX ile ilgili react dokümanı👇

[]()https://tr.reactjs.org/docs/introducing-jsx.html



//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.


//? App componentinin tanimlanmasi
function App() {
  return (
    //? return içinde JSX kullanılır.COMPONENTLER RETURN İŞLEVİ VARDIR
     //? stillendirme yapilmayacaksa container icin <> kullanilabilir
    <div>
     <h1></h1>
    </div>
  );
}

export default App;



//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.


//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.



//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.
