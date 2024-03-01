const getGenresAPI = require ('../Controllers/Generos/getGenresAPI')
const getGenresDB = require ('../Controllers/Generos/getGenreDB');

const allGenres = async (req, res) =>{
    try {
        const allGenreVideogamesAPI = await getGenresAPI ();
        const allGenreVideogamesBD = await getGenresDB (allGenreVideogamesAPI);

        res.status(200).json(allGenreVideogamesBD);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = allGenres;