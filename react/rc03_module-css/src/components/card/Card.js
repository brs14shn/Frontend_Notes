
import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({img,btnName,dil}) => {
  return (
    <div>
       <h1>{dil}</h1>
       <img src={img} alt="" />
        <Buton btnName={btnName}/>
    </div>
  
  )
}

export default Card