const getVideoByNameDb = require ('../Controllers/getVideoByNameDb');
const getVideoByNameAPI = require ( '../Controllers/getVideoByNameAPI');
const findAllVideogame = require ("../Controllers/findAllVideogame");


const videogameByNameAndAll = async(req, res) => {
    const {name} = req.query;
    try {
           if(name){
            const getVideogamesDb = await getVideoByNameDb(name);
            const getVideogameAPI = await getVideoByNameAPI(name);

            const videogameByName = [ ...getVideogamesDb, ...getVideogameAPI];
            const videogameByName15 = videogameByName.slice(0, 15);
            res.status(200).json(videogameByName15)
            
           }else{
            const allVideogames = await findAllVideogame();
            res.status(200).json(allVideogames);
           }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = videogameByNameAndAll;