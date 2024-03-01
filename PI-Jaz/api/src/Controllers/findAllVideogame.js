const {Videogame, Genre} = require("../db");
const axios = require("axios");
const {API_KEY} =process.env

const findAllVideogame = async() =>{
    const bdVideogame = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });

  //obtener los 100 primeros videojuegos de la api con promises
    const promises = [];
    for (let i = 1; i <= 5; i++) {
        promises.push(
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
                .then(response => response.data.results)
        );
    }

    // Esperar a que todas las solicitudes se completen
    const resultsArrays = await Promise.all(promises);

    // Combinar todos los resultados en un solo array
    const results = resultsArrays.flat();

    const apiVideogame = results.map( (videogame)=>{
      return {
        id: videogame.id,
        name: videogame.name,
        platforms: videogame.platforms.map((platform)=>platform.platform.name),
        img: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((obj)=>{
          return {
            id: obj.id,
            name: obj.name
          }
        })
      }
    });

    const allVideogames = [ ...bdVideogame, ...apiVideogame ] ;
   
    return allVideogames;
}

module.exports = findAllVideogame;