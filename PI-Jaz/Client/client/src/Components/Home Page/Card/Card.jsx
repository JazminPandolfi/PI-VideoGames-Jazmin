import { Link } from "react-router-dom";
import "./Card.css"

const Card = (props) =>{
    return (
        <div>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
               <Link to ={`/detail/${props.id}`}>
               <h3>{props.name}</h3>
               </Link>
            </div>
        </div>
    )
}
export default Card;