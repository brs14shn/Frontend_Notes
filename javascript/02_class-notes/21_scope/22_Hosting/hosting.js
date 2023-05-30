

//!*************************************************************
                        //! 22_Hosting  
//************************************************************ */

//! Hosting nedir?

//! Hosting, JavaScript engine tarafından değişkenin tanımlanması ve değer ataması birbirinden ayrı olarak yapılır.

//*---------VAR---------------

number =5;

console.log(number);  //? 5
var number;

//! tanımlanması yapılmamış bir değişken için atama nasıl mümkün oluyor?
//! JavaScript engine tarafından değişkenin tanımlanması ve değer ataması birbirinden ayrı olarak yapılır.
//! JS atama işleminden önce tanımlamayı yukarı kaldırmaktadır.Bu sayede referans hatası almıyoruz.....

var x = 5;
console.log(x + " " + y);
var y =7;

//! Yukarıdaki örnekte de görüldüğü gibi y değişkeni tanımlanmadan önce kullanılmıştır.
//! Ancak JS engine tarafından yukarı kaldırıldığı için referans hatası almıyoruz.
// var x = 5;
// var y;
// console.log(x + " " + y);
// y =7;


//*---------LET---------------

number =5;

console.log(number);  
let number; //Reference Error
//*-------- CONST ---------------

number =5;

console.log(number);  
//const number; //Synax Error