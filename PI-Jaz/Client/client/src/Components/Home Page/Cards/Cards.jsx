import Card from "../Card/Card"
import "./Cards.css"

const Cards = ({allVideogames}) =>{
    return (
        <div>
        {allVideogames.map((videogame, index) => {
            return <Card
                key = {index}
                id = {videogame.id}
                img = {videogame.img}
                name = {videogame.name}
                genres = {videogame.genres}
                 />
        })}
        </div>
    );
};

export default Cards;