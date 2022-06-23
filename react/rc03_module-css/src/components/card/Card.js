
import Buton from "../buton/Buton";
import cardStyle from "./card.module.css";


const Card = ({img,btnName,dil}) => {
  return (
    <div>
       <h1 className={cardStyle["title"]}>{dil}</h1>
       <img className={cardStyle["images"]} src={img} alt="" />
        <Buton btnName={btnName}/>
    </div>
  
  )
}

export default Card