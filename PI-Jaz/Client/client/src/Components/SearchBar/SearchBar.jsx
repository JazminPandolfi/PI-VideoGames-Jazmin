import Filter from "../Filters/Filter";
import Order from "../Filters/Order";
import { useDispatch } from "react-redux";
import { videogamesByName } from "../../redux/actions/actions";
import { useState } from "react";
import iconoflecha from "../../assets/img/iconoflecha.png"

const SearchBar =() =>{
    const [name, setName] = useState ("");

    const handleName =(event) =>{
        setName(event.target.value);
    }

    const dispatch = useDispatch()

    const onSearch = (n) =>{
        dispatch(videogamesByName(n));
    }

    return(
        <div>
            <h2>Search</h2>
            <div>
                <input type="text"
                 placeholder="Enter the name..." 
                 value={name}
                 onChange={handleName}/>
            </div>
            <div>
                <button onClick={()=>onSearch(name)}>
                    <img src={iconoflecha} alt="icono-search" />
                </button>
            </div>
            <div>
                <Filter />
                <Order />
                <button>Add Videogame</button>
            </div>
        </div>
    )
}

export default SearchBar;