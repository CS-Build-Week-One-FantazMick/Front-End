import React from 'react'
import  walkSprite  from './cat_idle.gif'

import { connect } from 'react-redux'

function Player(props){
    return(
        <div style={{
            position: 'relative',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${walkSprite})`,
            backgroundPosition: '0 0',
            width: '40px',
            height: '40px'
        }}/>
    )
}

function mapStateToProps(state){
    return {
        ...state.player,
    }
}
export default connect(mapStateToProps)(Player)