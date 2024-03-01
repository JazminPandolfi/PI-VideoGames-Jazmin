const {Genre} = require ('../../db');

const getGenresDB = async (allGenreVideogamesAPI) => {
    for ( let genre of allGenreVideogamesAPI){
        await Genre.findOrCreate ({where: {name: genre.name}});
    }
}

module.exports = getGenresDB;