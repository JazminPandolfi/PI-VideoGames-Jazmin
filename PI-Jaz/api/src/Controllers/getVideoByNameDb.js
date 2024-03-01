const {Videogame, Genre} = require("../db");


const getVideoByNameDb = async (name) =>{
    const videogameByName = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            throungh:{
                attributes: [],
            }
        }
    });

    const videogameName = videogameByName.length !== 0 ? videogameByName.filter((videogame)=>videogame.name.toLowerCase().includes(name.toLowerCase())) : [];
    return videogameName;
}

module.exports = getVideoByNameDb;