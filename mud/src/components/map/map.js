import React, { Component } from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";
import store from "../../store"

const StyledMap = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 500px;
    flex: 1;
    padding: 3rem 3rem 3rem 3rem;
    position: relative;
    background-color: black;
`;

const Map = (props) => {
    const state = useSelector(state => state.player);
    console.log("position",state.position)
    
    
        // Create arrays to hold point coordinates and links
        

        const coordinates = [];
        console.log('COORDS', coordinates)
        const links = [];
        console.log('LINKS', links)
        const room_data = props.roomData;
        console.log(props.roomData, "PROPS")
        const currentRoom = store.getState().player.position;
        console.log('CURRENTROOM', currentRoom)
        
        // Loop through each room in the room_data object
        for (let room in room_data) {
            // Set data equal to the first element (x, y coordinates)
            // in each room of the room_data object
            let data = room_data[room][0];
            console.log("DATA1", room_data[room][0])
            coordinates.push(data);
            for (let adjacentRoom in room_data[room][1]) {
                links.push([
                    room_data[room][0],
                    room_data[room_data[room][1][adjacentRoom]][0]
                ]);
                console.log("DATA", room_data[room_data[room][1][adjacentRoom]][0])
            }
        }

        return (
            <StyledMap>
                <FlexibleXYPlot width={500} height={500}>
                    {links.map(link => (
                        <LineSeries
                            strokeWidth="2"
                            color="#F39C12"
                            data={link}
                            key={Math.random() * 100}
                        />
                    ))}

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="3"
                        color="#F39C12"
                        data={coordinates}
                        style={{ cursor: "pointer" }}
                    />

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="3"
                        color="#1ABC9C"
                        data={[{ "x": state.position[0], "y": state.position[1] }]}
                        style={{ cursor: "pointer" }}
                    />
                </FlexibleXYPlot>
            </StyledMap>
        );
    
}

export default Map;
