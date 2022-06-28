
import { useState } from "react";

const KeyboardClipboard = () => {

  const [inputValue,setinputValue] =useState("");

  const handleinputChange=(e)=>{
   setinputValue(e.target.value)
   
  }

  const handleKeydown =(e)=>{
    // console.log(e.keyCode);
    e.target.value =e.target.value.toUpperCase();
    e.keyCode=== 13 && alert("Entere basıldı")
    e.keyCode=== 8 && alert("silindi")

  }

  return (
    <div className="container text-center">
      <h2>CLİPBOARD EVENTS</h2>
      <input onChange={handleinputChange} onKeyDown={handleKeydown} type="text" value={inputValue}/>
      <p className="text-start m-4">{inputValue}</p>
    </div>
  )
}

export default KeyboardClipboard
