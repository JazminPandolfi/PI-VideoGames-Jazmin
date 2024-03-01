import { orderVideogames } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Order =() =>{
    const dispatch = useDispatch()

    const handleOrderVideogames = (event) =>{
        dispatch(orderVideogames(event.target.value))
    }

    return (
        <div>
            <label >Order</label>
            <select name="order_videogames" defaultValue="defect" id="order" onChange={handleOrderVideogames}>
                <option value="defect">Select</option>
                <option value="ascendiente">A - Z</option>
                <option value="ascendiente">Z - A</option>
                <option value="mejor-rating">Best Rating</option>
                <option value="peor-rating">Worst Rating</option>
            </select>
        </div>
    )
}

export default Order;