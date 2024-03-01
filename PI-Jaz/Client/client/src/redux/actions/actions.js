import { ALL_VIDEOGAMES, VIDEOGAME_BY_ID, VIDEOGAME_BY_NAME, FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_VIDEOGAMES, CLEAN_DETAIL } from "./action-type";
import axios from "axios";

export function getAllVideogames () {
    return async (dispatch) =>{
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/videogames`)).data;
            return dispatch({type: ALL_VIDEOGAMES , payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
}

export function videogamesById (id){
    return async(dispatch) =>{
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
            return dispatch({type: VIDEOGAME_BY_ID , payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
}

export function videogamesByName (name){
    return async(dispatch) =>{
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/videogames/?name=${name}`)).data;
            return dispatch({type: VIDEOGAME_BY_NAME , payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterByGenre = (genre) =>{
    return function(dispatch){
        return dispatch({type: FILTER_BY_GENRE, payload: genre});
    };
}


export const filterByOrigin = (genre) =>{
    return function(dispatch){
        return dispatch({type: FILTER_BY_ORIGIN, payload: origin});
    };
}


export const orderVideogames = (genre) =>{
    return function(dispatch){
        return dispatch({type: ORDER_VIDEOGAMES, payload: order});
    };
}

export const cleanDetail =()=>{
    return {type: CLEAN_DETAIL};
}
