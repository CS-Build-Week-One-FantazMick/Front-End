///JUST PLAYING AROUND WITH MOVEMENT WITHOUT BACKEND
//CAN DISREGARD

import store from '../../store'
import { SPRITE_SIZE } from './constants'

//HIGHER ORDER FUNCTION
export default function handleMovement(player){
    function getNewPosition(direction){
        const oldPos = store.getState().player.position
        switch(direction){
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1]]
                //moving 40 pixels to the left 
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1]]
                //moving 40 pixels to the right 
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE]
                //moving 40 pixels up 
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE]
                //moving 40 pixels DOWN 
        }
    }
    
    function directionMove(direction){
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }
    function handleKeyPress(e){
        e.preventDefault()


        switch(e.keyCode){
            case 119:
                return directionMove('WEST')

            case 110:
                return directionMove('NORTH')

            case 115:
                return directionMove('SOUTH')

            case 101:
                return directionMove('EAST')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keypress', (e) => {
        handleKeyPress(e)
    })

    return player
}