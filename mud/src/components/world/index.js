import React, { useState, useEffect } from 'react'
// import Map from "../map"
import Player from "../player"
import Map from "../map/map"
import axios from 'axios';

function World(props) {

    const [currentRoom, setCurrentRoom] = useState({ "x": 10, "y": 10 })
    const [roomData, setRoomData] = useState([])

    function handleKeyDown(e) {
        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                console.log("West")
                console.log(currentRoom)

                const x = Math.max(currentRoom['x'], 0)
                const y = currentRoom['y']

                setCurrentRoom({ 'x': x - 1, 'y': y })
                break

            case 38:
                console.log("North")
                break

            case 40:
                console.log("South")
                break

            case 39:
                console.log("East")
                break

            default:
                console.log(e.keyCode)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            handleKeyDown(e)
        })

        axios
            .get(
                `http://127.0.0.1:8000/api/adv/getallrooms`
            )
            .then(res => {
                const rooms = res.data.rooms;
                console.log("Got room data from backend")
                setRoomData(rooms);
            })
            .catch(err => {
                console.log("Error")
            });
    }, [])

    return (
        <div
            style={{
                position: `relative`,
                width: `800px`,
                height: `400px`,
                margin: `20px auto`,
            }}>

            <Map currentRoom={currentRoom} roomData={roomData} />
            {/* <Player /> */}
        </div>
    )
}

export default World