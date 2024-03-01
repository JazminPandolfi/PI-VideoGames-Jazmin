const axios = require ('axios');
const {API_KEY} =process.env


const videogameIdAPI = async (id) => {
    const idVideogame = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
    let apiVideogame = {
    id: idVideogame.id,
    name:idVideogame.name,
    description: idVideogame.description,
    platforms: idVideogame.platforms.map((platform) => platform.platform.name),
    img: idVideogame.background_image,
    released: idVideogame.released,
    rating: idVideogame.rating,
    genres: idVideogame.genres.map((genre) => {
        return {
            id: genre.id,
            name: genre.name
        }
        })
}
   if (!apiVideogame) throw Error ('El videojuego que estas buscando no existe');

    return apiVideogame;
}
    
module.exports = videogameIdAPI;