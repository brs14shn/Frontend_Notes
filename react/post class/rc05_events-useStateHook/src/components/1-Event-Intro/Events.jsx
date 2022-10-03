
// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html


import React from 'react'

const Events = () => {


 const handleClick=()=>{
    alert("Btn clicked")
    
 }   

 const handleClear=(text)=>{
    alert(text)

 }



  return (
    <div className='container text-center mt-4'>
        <button onClick={handleClick} className=' btn btn-danger' >Click</button>
        {/* Fonksiyonu refere ettiğinden self-trigger olmaz */}
        
        {/* <button onClick={handleClear("Clear Btn pressed")}  className='ms-3 btn btn-dark' >Clear</button> */}
        {/* Bu şekilde parametre vererek çağrılırsa direkt tetiklenecektir.
        Yani self-trigger bu engelemek için arrow func kullanılır.Paramere varsa arrow funct olmalı yoksa invoke olarak hareket eder. */}
        
        <button onClick={()=>handleClear("Clear Btn pressed")}  className='ms-3 btn btn-dark' >Clear</button>
        <button onClick={()=>handleClear()}  className='ms-3 btn btn-dark' >Clear</button>
        {/* <button onClick={()=>handleClear}  className='ms-3 btn btn-dark' >Clear</button> */}
    </div>
  )
}

export default Events