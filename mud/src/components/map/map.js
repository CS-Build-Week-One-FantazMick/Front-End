import React, { Component } from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
// import room_data from "./room_data.js";
import styled from "styled-components";

const StyledMap = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 500px;
    flex: 1;
    padding: 3rem 3rem 3rem 3rem;
    position: relative;
    background-color: black;
`;

class Map extends Component {
    render() {
        // Create arrays to hold point coordinates and links
        const coordinates = [];
        const links = [];
        const room_data = this.props.roomData;

        // Loop through each room in the room_data object
        for (let room in room_data) {
            // Set data equal to the first element (x, y coordinates)
            // in each room of the room_data object
            let data = room_data[room][0];
            coordinates.push(data);
            for (let adjacentRoom in room_data[room][1]) {
                links.push([
                    room_data[room][0],
                    room_data[room_data[room][1][adjacentRoom]][0]
                ]);
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
                        size="6"
                        color="#1ABC9C"
                        data={[this.props.currentRoom]}
                        style={{ cursor: "pointer" }}
                    />
                </FlexibleXYPlot>
            </StyledMap>
        );
    }
}

export default Map;
