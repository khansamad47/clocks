import React from 'react';
import { Pane, Text, Heading, Button } from 'evergreen-ui'


export class ClockFace extends React.Component {
    render() 
    {
        return (
            <Pane
                display="flex" 
                padding={16}
                background="tint2" 
                borderRadius={3}
                border="muted"
                margin={20}
            >
                <Pane 
                    flex={1}
                    alignItems="center"
                    display="flex">
                    <Heading size={600}>
                        {this.props.locationName}
                    </Heading>
                </Pane>
                <Pane>
                    <Text 
                        marginRight={16}
                        size={600}
                    > 
                        {this.props.timeString}
                    </Text>
                </Pane>
</Pane>
        );
    }    
};
