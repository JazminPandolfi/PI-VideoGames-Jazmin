const { Router } = require('express');
const router = Router();
const videogameById = require ("../Handlers/handlerVideogameById");
const videogameCreate = require("../Handlers/handlerCreateVideogame");
const allGenres = require ('../Handlers/handlerAllGenres');
const videogameByNameAndAll = require ('../Handlers/handlerVideogameByName')



// recibe un nombre por query y muestra los primeros 15 resultados
router.get('/videogames', videogameByNameAndAll)


//Crea un nuevo videojuego -OK
router.post( '/videogames', videogameCreate);


//Traer un videogame por id -OK
router.get( '/videogames/:id', videogameById );


//Ruta par obtener los generos de la api
router.get( '/genres', allGenres)

module.exports = router;