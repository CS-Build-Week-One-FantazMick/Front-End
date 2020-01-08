import React from 'react'
import Map from "./Map"

function World(props) {
    return (
        <div
            style={{
                positon: `relative`,
                width: `800px`,
                height: `400px`,
                margin: `20px auto`
            }}>

            <Map />
            {/* <Player/> */}
        </div>
    )
}

export default World