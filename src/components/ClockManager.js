import React from 'react';
import moment from 'moment-timezone';

import { Clock } from './Clock';
import { ClockFace } from './ClockFace';
import { TimeZonePicker } from './TimeZonePicker';
import { TimeSeeker } from './TimeSeeker';
import { Button, Pane } from 'evergreen-ui'


export class ClockManager extends React.Component {
    constructor(props) {
        super(props);
        const timezones = moment.tz.names();
        this.state = {
            timezonesPickerOptions : timezones.map(item =>({label:item, value: item})),
            selectedTimeZones : ["America/New_York"],
            freeze: false,
            delta : 0
        }
    }
    onTimeZoneSelect(item)
    {
        console.log("ClockManager.onTimeZoneSelect called.");
        const selectedTimeZones = [...this.state.selectedTimeZones, item.value] 
        this.setState({ selectedTimeZones });
    }
    onTimeZoneDeselect(item)
    {
        console.log("ClockManager.onTimeZoneDeselect called.");
        const deselectedItemIndex = this.state.selectedTimeZones.indexOf(item.value)
        const selectedItems = this.state.selectedTimeZones.filter(
          (_item, i) => i !== deselectedItemIndex
        )
        this.setState({ selectedTimeZones: selectedItems })
    } 
    toggleFreeze() {
        console.log("ClockManager.toggleFreeze called.");
        this.setState({
            freeze : !this.state.freeze
        }); 
    }
    appendClock(timezone)
    {
        return (<Clock timezone={timezone}
                    freeze={ this.state.freeze } 
                    delta={ this.state.delta } />);
    
    }
    onTimeSeek(event){
        const seekBack = event.deltaY > 0? -1.5 : 1.5;
        this.setState({
            delta : this.state.delta + seekBack
        }); 

    }
    render() 
    {
        let clockComponents = this.state.selectedTimeZones.map((item) => this.appendClock(item));
        return (
          <Pane width={600} >
            <Pane 
                display="flex"
                flex-direction="row"
                margin={10}
                justifyContent="flex-end"
            >
                <TimeZonePicker
                    options={this.state.timezonesPickerOptions} 
                    selected={this.state.selectedTimeZones}
                    onSelect={(item) => this.onTimeZoneSelect(item)}
                    onDeselect={(item) => this.onTimeZoneDeselect(item)}
                />
                <TimeSeeker 
                    onWheel={ (event) => this.onTimeSeek(event)} 
                />
            </Pane>
            <Pane>
                { clockComponents }
            </Pane>
          </Pane>
        );
    }    
};
