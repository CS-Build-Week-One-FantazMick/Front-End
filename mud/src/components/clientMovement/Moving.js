import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useDispatch} from 'react-redux'
import { title, description, players, error_msg } from '../../actions/roomActions'
import './Moving.css'

const Moving = () => {



    const dispatch = useDispatch()
    
    let north = () => {
        return axiosWithAuth()
        .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "dirs": "n" })
        .then(res => {
            dispatch(players(res.data.players))
            dispatch(description(res.data.description))
            dispatch(title(res.data.title))
            dispatch(error_msg(res.data.error_msg))
        })
        .catch(err => {
            console.log("soemthing went wrong with the server ", err)
        })
}

            let south = () => {
                return axiosWithAuth()
                .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "dirs": "s" })
                .then(res => {
                    dispatch(players(res.data.players))
                    dispatch(description(res.data.description))
                    dispatch(title(res.data.title))
                    dispatch(error_msg(res.data.error_msg))
                })
                .catch(err => {
                    console.log("soemthing went wrong with the server ", err)
                })
        }


    
        
        
        let east = () => {
            return axiosWithAuth()
            .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "dirs": "e" })
            .then(res => {
                dispatch(players(res.data.players))
                dispatch(description(res.data.description))
                dispatch(title(res.data.title))
                dispatch(error_msg(res.data.error_msg))
            })
            .catch(err => {
                console.log("soemthing went wrong with the server ", err)
            })
}


let west = () => {
    return axiosWithAuth()
    .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "dirs": "w" })
    .then(res => {
        dispatch(players(res.data.players))
        dispatch(description(res.data.description))
        dispatch(title(res.data.title))
        dispatch(error_msg(res.data.error_msg))

    })
    .catch(err => {
        console.log("soemthing went wrong with the server ", err)
    })
}



return(
    <div className="button-wrapper">
            <div className="moving-button" onClick={north()}>North</div>
            <div className="moving-button" onClick={south()}>South</div> 
            <div className="moving-button" onClick={east()}>East</div>
            <div className="moving-button" onClick={west()}>West</div>
        </div>
    )
}

export default Moving