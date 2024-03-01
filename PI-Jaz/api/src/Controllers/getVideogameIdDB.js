const {Videogame, Genre} = require ("../db");

const videogameIdDB = async (id) =>{
    const dbVideogame = await Videogame.findByPk( id, {
        include: {
            model: Genre,
            attributes: ["name"],
            throungh:{
                attributes: [],
            }
        }});
        
        if(!dbVideogame) throw Error ('El videojuego que estas buscando no existe');

        return dbVideogame;
}

module.exports = videogameIdDB;