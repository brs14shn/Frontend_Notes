//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebiler.

class Book {
    static counter=0;

    //! private property
    #id;
    //private =sadece kendi classı
    //protected=bazı kısımları

    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.#id="123456"
      Book.counter++;
    }
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    }
    static compareAge(book1,book2){
        return `Book age difference : ${book1.year-book2.year}`

    }
  }
  
  //? instance
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
 
  console.log(book1);
  //console.log(book.counter); //undefined
  //TODO: Statik degiskenlere instancelar üzerinden erisilemez.
  console.log(Book.counter);
  console.log(Book.compareAge(book1,book2))
  
  //* -------------private-----------------------------
  console.log(book1.#id); //: Private field '#id' must be declared
  //* private değişkenlere class dışından doğrudan erişilemez
  