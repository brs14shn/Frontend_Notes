//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)


import React from 'react';


class LifeCycleMethods extends React.Component {
   //! 1-) Bir componentin olsuturulmasinda cagrilir
   constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }
 //! Arrow kullandığımızdan bind kullanmadık
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

//! Built-in funct arrow kullanmaya ihtiyaç duymaz.
//! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
componentDidMount(){
  console.log("Mounted")

}

//! 4-) Bu metot ilk render haric dige tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.
componentDidUpdate(){
  console.log("Updated");
}

componentWillUnmount(){
  console.log("UnMount");
}


  render() {
     //! 2-) Her bir render'da cagrilir
     //? Her state değiştiğinde render çağrılır.
    console.log("Rendered")
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
