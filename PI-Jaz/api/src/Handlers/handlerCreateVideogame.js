const createVideogame = require ("../Controllers/createVideogame");

const videogameCreate = (async (req, res) => {
    const videogame = req.body;
    try {
        const newVideogame = await createVideogame(videogame);
        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json ({error: error.message});
    }
});

module.exports = videogameCreate;