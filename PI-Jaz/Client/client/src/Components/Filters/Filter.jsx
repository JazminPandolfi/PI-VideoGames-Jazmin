import { filterByGenre, filterByOrigin } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";


const Filter = () =>{
    const dispatch = useDispatch();

    const handleByOrigin = (event) =>{
        dispatch(filterByOrigin(event.target.value))
    }

    const handleByGenre= (event) =>{
        dispatch(filterByGenre(event.target.value))
    }
    return (
        <div>
            <label>Filter</label>
            <select name="filter-genre" defaultValue="defect" id="filter-genre" onChange={handleByGenre}>
                <option value="defect">Select</option>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
            </select>
            <select name="filter-origin" defaultValue="defect" id="filter-origin" onChange={handleByOrigin}>
                <option value="defect">Select</option>
                <option value="Database">Database</option>
                <option value="API RAWG">API RAWG</option>
            </select>

        </div>
    )
}

export default Filter;
