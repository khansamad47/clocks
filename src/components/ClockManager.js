import React from 'react';
import { Clock } from './Clock';
import { ClockFace } from './ClockFace';
import { Button, TagInput } from 'evergreen-ui'


export class ClockManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freeze: false,
            delta : 0
        }
    }
    toggleFreeze() {
        console.log("ClockManager.toggleFreeze called.");
        this.setState({
            freeze : !this.state.freeze
        }); 
    }
    goBack() {
        console.log("ClockManager.goBack called.");
        this.setState({
            delta : this.state.delta-1
        }); 
    }
    render() 
    {
        return (
          <div>
            <TagInput
                inputProps={{ placeholder: 'Add trees...' }}
            />
            <Button onClick={ () => this.toggleFreeze() }>Freeze</Button>
            <Button onClick={ () => this.goBack() }>Back</Button>
            <Clock timezone="Europe/London"
                freeze={ this.state.freeze } 
                delta={ this.state.delta } />
            <Clock timezone="America/Los_Angeles"
                freeze={ this.state.freeze } 
                delta={ this.state.delta } />
            <ClockFace />
          </div>
        );
    }    
};
