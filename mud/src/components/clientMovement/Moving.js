import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useDispatch, useSelector} from 'react-redux'
import { title, description, players, error_msg, position } from '../../actions/roomActions'
import './Moving.css'

const Moving = () => {
    const state = useSelector(state => state.room);
  


    const dispatch = useDispatch()
    
    let north = () => {
        
        return axiosWithAuth()
        .post('http://localhost:8000/api/adv/move/', { "direction": "n" })
        .then(res => {
            console.log("LOOOK AT MEEEE",res.data)
            dispatch(players(res.data.players))
            dispatch(description(res.data.description))
            dispatch(title(res.data.title))
            dispatch(error_msg(res.data.error_msg))
            dispatch(position(res.data.position))
           
        })
        .catch(err => {
            console.log("something went wrong with the server ", err)
        })
}

            let south = () => {
                return axiosWithAuth()
                .post('http://localhost:8000/api/adv/move/', { "direction": "s" })
                .then(res => {
                    console.log("LOOOK AT MEEEE",res.data)
                    dispatch(players(res.data.players))
                    dispatch(description(res.data.description))
                    dispatch(title(res.data.title))
                    dispatch(error_msg(res.data.error_msg))
                    dispatch(position(res.data.position))
           
                })
                .catch(err => {
                    console.log("something went wrong with the server ", err)
                })
        }


    
        
        
        let east = () => {
            return axiosWithAuth()
            .post('http://localhost:8000/api/adv/move/', { "direction": "e" })
            .then(res => {
                console.log("LOOOK AT MEEEE",res.data)
                dispatch(players(res.data.players))
                dispatch(description(res.data.description))
                dispatch(title(res.data.title))
                dispatch(error_msg(res.data.error_msg))
                dispatch(position(res.data.position))
           
            })
            .catch(err => {
                console.log("something went wrong with the server ", err)
            })
}


let west = () => {
    return axiosWithAuth()
    .post('http://localhost:8000/api/adv/move/', { "direction": "w" })
    .then(res => {
        console.log("LOOOK AT MEEEE",res.data)
        dispatch(players(res.data.players))
        dispatch(description(res.data.description))
        dispatch(title(res.data.title))
        dispatch(error_msg(res.data.error_msg))
        dispatch(position(res.data.position))
           

    })
    .catch(err => {
        console.log("something went wrong with the server ", err)
    })
}



    return(
        <div className="button-wrapper">
            <div className="moving-button" onClick={() => north()}>North</div>
            <div className="moving-button" onClick={() => south()}>South</div> 
            <div className="moving-button" onClick={() => east()}>East</div>
            <div className="moving-button" onClick={()=> west()}>West</div>
        </div>
    )
}

export default Moving