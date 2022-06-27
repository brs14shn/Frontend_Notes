
/* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================*/


import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h1 className="display-4 text-danger m-4">COUNT:</h1>
        <button className="btn btn-success ms-3">INC</button>
        <button className="btn btn-danger ms-3">CLR</button>
        <button className="btn btn-warning ms-3">DEC</button>
      </div>
    );
  }
}

export default Counter;