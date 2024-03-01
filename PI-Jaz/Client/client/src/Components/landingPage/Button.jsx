import { Link } from "react-router-dom";

const Button =(props) =>{
    return(
        <>
        <div>
            <Link to={'/home'}>
            <button>{props.name}</button>
            </Link>
        </div>
        </>
    )
}

export default Button;