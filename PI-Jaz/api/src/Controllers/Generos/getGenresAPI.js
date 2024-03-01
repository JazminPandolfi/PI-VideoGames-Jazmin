const {API_KEY} = process.env;
const axios = require('axios');

const getGenresAPI = async() => {
//obtener todos los generos de la api
    const infoAPI = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    const {results} = infoAPI;
    const allGenresAPI = results.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,
        };
    });
    return allGenresAPI;
}

module.exports = getGenresAPI;