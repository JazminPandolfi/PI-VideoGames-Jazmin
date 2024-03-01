import Detail from "./Detalle/Detail";
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { videogamesById, cleanDetail } from '../../redux/actions/actions'

const DetailPage = () => {
    const {id} = useParams();
    const videogameId = useSelector((state) => state.detailVideogame);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(videogamesById(id));
    
        return () => {
          dispatch(cleanDetail())
        }
      },[dispatch, id])

    return(
        <div>
            <Detail videogameId={videogameId}/>
        </div>
    )
}

export default DetailPage;