import React from 'react';
import { Card } from 'evergreen-ui'

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
        this.intervalID = setInterval(() => this.tick(), 1000);
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
            <Card elevation={1}>
            <p> {this.props.timezone} </p>
            <p> { this.state.time.format("hh:mm A") } </p>
            </Card>
        );
    }    
};
