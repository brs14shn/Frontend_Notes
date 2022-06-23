

import Card from "./components/card/Card";
import data from "./util/data"

function App() {
  console.log(data);
  return (
    <>
    {data.map((item)=>{
      console.log(item);
      const {id,img,btnName,dil} =item;
      return(
        <Card 
        id={id}
        img={img}
        btnName={btnName}
        dil={dil}
        /> 
      )

    })}
    </>
   
  
  );
}

export default App;
