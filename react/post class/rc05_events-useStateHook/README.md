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

## Bootstrap 
Reacta bootstrap kullanmak için 👇

```
# İnstall
npm install react-bootstrap bootstrap

# Css linkine İndex.js veya App.js import ediyoruz.
import 'bootstrap/dist/css/bootstrap.min.css';
class className olarak kullanılır

```