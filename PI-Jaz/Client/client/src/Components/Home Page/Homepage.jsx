import Cards from "./Cards/Cards";
import Paginate from "./Paginate";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";

const HomePage = () =>{
    const allVideogames = useSelector((state) => state.allVideogames);

    //modificar el redux
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch (getAllVideogames());
	}, [dispatch]);

    //traer solo los primeros 15 juegos
    const [page, setPage] = useState(1);
    const videogamesForPage = 15;

    const indiceUltimoVideojuego = page * videogamesForPage;
    const indicePrimerVideojuego = indiceUltimoVideojuego - videogamesForPage;
    const videojuegosPaginados = allVideogames.slice ( indicePrimerVideojuego, indiceUltimoVideojuego );

    const paginate = (pageNumber) => setPage(pageNumber);

return(
    <div>
        <SearchBar/>
        <Cards allVideogames={videojuegosPaginados}/>
        <Paginate  paginate={paginate}
        videogamesForPage={videogamesForPage}
        allVideogames={allVideogames.length}
        actualPage={page}
        setPage={setPage}/>
    </div>
)
};

export default HomePage;