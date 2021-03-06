import React from 'react';
import { Pane, Text, Heading, Button, SelectMenu, EditIcon, Tooltip } from 'evergreen-ui'


export class TimeZonePicker extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() 
    {
        return (
            <SelectMenu
                isMultiSelect 
                options={ this.props.options }
                onSelect={(item)=>this.props.onSelect(item)}
                onDeselect={(item)=>this.props.onDeselect(item)}
                selected={this.props.selected}
            >
            <Tooltip content="Modify your timezone selection">
            <EditIcon 
                marginRight={16}
                size={20}
            />
            </Tooltip>
            </SelectMenu>
        );
    }    
};
