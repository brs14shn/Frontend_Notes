//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? Bir parent class'in degisken ve fonksiyonelliği extends keyword'u ile
//? child class'a gecmektedir.(INHERITANCE)

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      // this.getTitle = function () {
      //   return this.title;
      // };
    }
    //! bu kısımda yazılan fonksiyonlar prototype alanında bulunur
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    }
  }
  
  //? instance
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
  
  console.log(book1);

  //? sub-Class tanımlanması
  class Magazine extends Book()