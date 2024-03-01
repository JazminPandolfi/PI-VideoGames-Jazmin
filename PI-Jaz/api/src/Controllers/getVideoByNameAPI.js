const axios = require("axios");
const {API_KEY} = process.env

const getVideoByNameAPI = async (name) => {
    const namesApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data;
    const nameVideogame = {
            id: namesApi.id,
            name: namesApi.name,
            description: namesApi.description,
            platforms: namesApi.platforms.map((platform) => platform.platform.name),
            background_image: namesApi.background_image,
            released: namesApi.released,
            rating: namesApi.rating,
            genres: namesApi.genres.map((genre) => {
                return {
                    id :genre.id,
                    name: genre.name }
            } )
        }
    
    return nameVideogame;
}

module.exports = getVideoByNameAPI;