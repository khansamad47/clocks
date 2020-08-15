import React from 'react';
import { Pane, Text, Heading, Button, SelectMenu, EditIcon, HistoryIcon, Tooltip } from 'evergreen-ui'


export class TimeSeeker extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() 
    {
        return (
            <Tooltip content="Scroll to go back in time">
            <HistoryIcon
                onWheel={ this.props.onWheel }
                marginRight={16}
                size={20}
            >
            </HistoryIcon>
            </Tooltip>
        );
    }    
};
