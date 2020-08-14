import React from 'react';
import { Pane, Text, Heading } from 'evergreen-ui'


export class ClockFace extends React.Component {
    render() 
    {
        const styleClockNumber = {
            fontFamily: "-apple-system, BlinkMacSystemFont",
            fontSize : "50px",
            color : "black",
            margin : "0",
            padding:"0"
        };
        const styleClockAMPM = {
            fontFamily: "-apple-system, BlinkMacSystemFont",
            fontSize : "25px",
            color : "black",
            margin : "0",
            padding:"0"
        };
        return (
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
                elevation={1} 
                width={500}
            >
            <Pane flex={2}>
                    <Heading size = {700}> Karachi </Heading>
            </Pane>
            <Pane
                display="flex"
                alignItems="flex-end"
                justifyContent="center"
                border={0}
            >
                <Pane>
                    <p style={styleClockNumber}>03:35</p>
                </Pane>
                <Pane>
                    <p style={styleClockAMPM}>AM</p>
                </Pane>
            </Pane>
            </Pane>
        );
    }    
};
