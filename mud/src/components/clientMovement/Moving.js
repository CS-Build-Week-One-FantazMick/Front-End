import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useDispatch} from 'react-redux'
import { title, description, players, error_msg } from '../../actions/roomActions'
import './Moving.css'

const Moving = () => {



    const dispatch = useDispatch()
    
    let north = (move) => {
        
        return axiosWithAuth()
        .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "direction": "n" })
        .then(res => {
            console.log(res)
            dispatch(players(res.data.players))
            dispatch(description(res.data.description))
            dispatch(title(res.data.title))
            dispatch(error_msg(res.data.error_msg))
        })
        .catch(err => {
            console.log("error making request, please get your act together. ", err)
        })
}

            let south = () => {
                return axiosWithAuth()
                .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "direction": "s" })
                .then(res => {
                    dispatch(players(res.data.players))
                    dispatch(description(res.data.description))
                    dispatch(title(res.data.title))
                    dispatch(error_msg(res.data.error_msg))
                })
                .catch(err => {
                    console.log("error making request, please get your act together. ", err)
                })
        }


    
    let west = () => {
        return axiosWithAuth()
        .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "direction": "w" })
        .then(res => {
            dispatch(players(res.data.players))
            dispatch(description(res.data.description))
            dispatch(title(res.data.title))
            dispatch(error_msg(res.data.error_msg))

        })
        .catch(err => {
            console.log("error making request, please get your act together. ", err)
        })
}
    
    
    let east = () => {
        return axiosWithAuth()
        .post('https://multi-user-dungeon-lambda.herokuapp.com/api/adv/move/', { "direction": "e" })
        .then(res => {
            dispatch(players(res.data.players))
            dispatch(description(res.data.description))
            dispatch(title(res.data.title))
            dispatch(error_msg(res.data.error_msg))
        })
        .catch(err => {
            console.log("error making request, please get your act together. ", err)
        })
}



    return(
        <div className="button-wrapper">
            <div className="moving-button" onClick={() => north()}>North</div>
            <div className="moving-button" onClick={() => south()}>South</div> 
            <div className="moving-button" onClick={()=> west()}>West</div>
            <div className="moving-button" onClick={() => east()}>East</div>
        </div>
    )
}

export default Moving