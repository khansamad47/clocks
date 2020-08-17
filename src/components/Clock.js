import React from 'react';
import { Card } from 'evergreen-ui'
import { ClockFace } from './ClockFace';

var moment = require('moment-timezone');

const styles = {
    width : '100px'
};

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log("Clock.props=", props)
        this.state = {
            time : moment().tz(props.timezone),
            freeze: props.freeze,
            delta: props.delta
        }
    }
    tick() {
        let effectiveTime = moment().tz(this.props.timezone);
        effectiveTime.add(this.props.delta,'minutes');
        this.setState({
            time : effectiveTime
        });
    }
    startTick(){
        this.intervalID = setInterval(() => this.tick(), 10);
    }
    stopTick() {
        clearInterval(this.intervalID);
    }
    componentDidMount() {
        this.startTick();
    }
    componentWillUnmount() {
        this.stopTick();
    }
    componentDidUpdate(prevProps) {
        if (this.props.freeze !== prevProps.freeze) {
            if (this.props.freeze) {
                this.stopTick();
            }
            else {
                this.startTick();
            }
        }
    }
    render() 
    {
        return (
            <ClockFace
                locationName={this.props.timezone}
                hhmm={ this.state.time.format("hh:mm") }
                ss={ this.state.time.format(":ss") }
                ampm={ this.state.time.format("A") }
            />
        );
    }    
};
