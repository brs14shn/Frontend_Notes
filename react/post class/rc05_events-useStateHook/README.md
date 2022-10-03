## ✏ REACT INITIAL SETUP ✏

#npx 👇
```
💻 Go to terminal
npx create-react-app my-app
```
#npm  👇
```
💻 Go to terminal
npm init react-app my-app
```
#yarn 👇
```
💻 Go to terminal
yarn create react-app my-app
```
🔹 [On this page](https://create-react-app.dev/docs/getting-started) you can create "react install" for your projects.



## 🚩 Githubtan react dosyası clone yaptığımızda;👇

```
npm install
or 
# yarn kurulu değilse ise;
 npm install --global yarn
yarn     >>>best pratice
```
komutlarıyla node modules install edilir.Git bash kullanmak önerilir.

## 🚩 EVENTS⚠️
HTML DOM olayları gibi, React de kullanıcı olaylarına göre eylemler gerçekleştirebilir. React, HTML ile aynı olaylara sahiptir: tıklama, değiştirme, fareyle üzerine gelme vb.

## SyntheticEvent
Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

Performans açısından ve birde browser arası uyumluluuğu sağlamak için 


📌 AddEventListener kullanılmaz.Camelcase yapı kullanılır.(onClick)

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

## 🚩 Bootstrap 
Reacta bootstrap kullanmak için 👇

```
# İnstall
npm install react-bootstrap bootstrap

# Css linkine İndex.js veya App.js import ediyoruz.
import 'bootstrap/dist/css/bootstrap.min.css';
class className olarak kullanılır

```

##  🚩 State

```
const Event = () => {

    let info="EVENTS";
     const handleChange=(e)=>{
        info="HOOKS"
        console.log(info)
        //* Dom basmıyor ancak console da gözüküyor
        //* React statik olarak görür
        console.log(e.target);

     } 👇 👇 👇

     info console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
# static olarak kabul etmesinden kaynaklanir.Amaç DOM manipülasyonlarını azaltmaktır.Değişimleri kontrol etmez.Diff algoritması belirtilmezse static olarak kabul eder.Diff algoritmasını çalıştırmak için state yapısını kullanılır.State aslında bir React objesidir.State elementin özel bilgilerini tutar.

1️⃣ React bunu DOM islemlerini minimize etmek icin yapmaktadir.
2️⃣ REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
3️⃣ React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
🕹️ ## State, elementlerin degisiklik durumlarini tutan nesnelerdir.
ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
- 1. Statefull Classes (Class Components).
- 2. Hooks (Functional Components).

Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
Yaygin kullanim Fonksiyonel Component'lerdir.
   
    return (
    <div className="container text-center mt-4">

        <button onClick={(e)=>handleChange(e)} className="btn btn-primary ms-3">Change</button>
        
    </div>
  )
}

export default Event;
```

