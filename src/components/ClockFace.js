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
                <Pane
                    display="flex"  
                    flex-direction="row"
                    jusitfy-content="flex-end"
                    alignItems="baseline"
                >
                    <Text 
                        size={600}
                    > 
                        {this.props.hhmm}
                    </Text>
                    <Text 
                        marginRight={3}
                        size={600}
                        color="muted"
                    > 
                        {this.props.ss}
                    </Text>
                    <Text 
                        size={300}
                        color="muted"
                    > 
                        {this.props.ampm}
                    </Text>
                </Pane>
</Pane>
        );
    }    
};
