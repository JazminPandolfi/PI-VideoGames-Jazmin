const {Videogame} = require("../db");

// newVideogame.addGenre(Genre) es para incluir el video juego en el genero que se eliga

const createVideogame = async ({name, description, platforms, img, released, rating, genre}) => {
    const newVideoGame = await Videogame.create({
        name,
        description, 
        platforms, 
        img, 
        released, 
        rating});
    await newVideoGame.addGenre(genre);
    return newVideoGame;
}

module.exports = createVideogame;