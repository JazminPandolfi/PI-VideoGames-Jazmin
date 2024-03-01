const videogameIdDB = require("../Controllers/getVideogameIdDB");
const videogameIdAPI = require ('../Controllers/getVideoByNameAPI');


const videogameById = async (req, res) => {
    const {id} = req.params;
    try {
        if(isNaN(id)){
            const videogameByIdDB = await videogameIdDB(id);
            res.status(200).json(videogameByIdDB);
         }else{
            const videogameByIdAPI = await videogameIdAPI(id);
            res.status(200).json(videogameByIdAPI);
         }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = videogameById;