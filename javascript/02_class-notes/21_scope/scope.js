//! Global, Function, ES6(2015)--let-const-Block şeklinde üç farklı scope kavramı çıkmaktadır

//! Global scope: Global scope, programın herhangi bir yerinde tanımlanmış değişkenlerin bulunduğu scope’dur.

var firstName = "John";

function getUserName(){
    console.log("User: " + firstName)
}
getUserName()

//! -------------------------------------
var firstName = "Michael";
function getFirstName(){
    console.log("User: " + firstName)
}
function getLastName(){
    var lastName = "Jackson"
    console.log("User: " + firstName + " " + lastName)
}
getFirstName()
getLastName()
//console.log(lastName); //ReferenceError: lastName is not defined

//* yukarıda görüldüğü gibi firstName bir "global scope" değişkenidir.
//* Yani dosyanın herhangi bir yerinden erişilebilir durumdadır




//? Function scope: Function scope, fonksiyon içerisinde tanımlanmış değişkenlerin bulunduğu scope’dur.
//Local variables have Function Scope:
//They can only be accessed from within the function.

function calcFactorial(number){
    var factorial = 1;
    for(var i = 1; i <= number; i++){
        factorial *= i;
    }
    return factorial
}
console.log(calcFactorial(5));
//console.log(i);

//* var tanımlayıcısını kullandığımız için block scope ile function scope aynı şeyi ifade edecektir.
//*Ancak let ve const tanımlayıcılarını ise durum farklıdır .{ } parantezler ile oluşturulan scope yapısına block scope denilmektedir.(for , if , while)

//?============= var=================
//! - Değişken değeri sonradan değiştirilebilir.
//! - Değişkenin scope'u fonksiyon içerisidir.
//! - Aynı isimle değişken tekrar tanımlanabilir.
//! Block scope ile function scope aynı şeyi ifade eder.(Yani for,if 
//!yapılarda tanımlanan değişkenlere dışarıdan da ulaşılabilir)

for(var i=1; i<9 ; i++){
    console.log(i);
}
console.log(i);

//?============= let =================
//! - Değişken değeri sonradan değiştirilebilir.
//! - Değişkenin scope'u fonksiyon içerisidir.
//! - Aynı isimle değişken tekrar tanımlanamaz.
//! Block scope  olarak işletilir.(Yani for,if 
//!yapılarda tanımlanan değişkenlere dışarıdan da erişelemez)
for(let i=1; i<9 ; i++){
    console.log(i);
}
//? X console.log(i);

//?============= const =================
//! - Değişken değeri sonradan değiştirilemez.
//! Referans tiplerinde(obje,arrray) içerik değiştirilebilir
//! - Değişkenin scope'u fonksiyon içerisidir.
//! - Aynı isimle değişken tekrar tanımlanamaz.
//! Block scope  olarak işletilir.(Yani for,if 
//!yapılarda tanımlanan değişkenlere dışarıdan da erişelemez)
const PI = 3.14;
//? X PI = 3.15;
const numbers = [1,2,3]
numbers.push(4);
numbers[0] = 2

const person ={
    name:"John",
}
person.name = "Michael";

//! Block scope: Block scope, if, for, while gibi bloklar içerisinde tanımlanmış değişkenlerin bulunduğu scope’dur.
//Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilemez:
//var anahtar sözcüğüyle bildirilen değişkenler blok kapsamına sahip OLAMAZ. Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilebilir.

//! Automatically Global
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

//This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}


//* KAYNAK: https://www.w3schools.com/js/js_scope.asp