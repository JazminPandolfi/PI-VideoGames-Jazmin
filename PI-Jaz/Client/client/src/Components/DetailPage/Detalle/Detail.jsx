const Detail =({videogameId}) =>{
    return(
        <div>
            <div>
                {videogameId.id}
                <img src={videogameId.img} alt={videogameId.name} />
            </div>
            <div>
                <h2>{videogameId.name}</h2>
            </div>
            <div>
                <h3>Description:</h3>
                <p>{videogameId.description}</p>
            </div>
            <div>
                <h4>Release Date:</h4><p>{videogameId.released}</p>
            </div>
            
            <div>
                <h3>Platforms:</h3>
                {videogameId.platforms?.map((platform) => {return <p>{platform}</p>})}
            </div>
            <div>
                <h3>Genres:</h3>
                {videogameId.genres?.map((genre) => {return <p>{genre.name}</p>})}
            </div>
            <div>
                <h4>Rating:</h4><p>{videogameId.rating}</p>
            </div>
        </div>
    )

}

export default Detail;