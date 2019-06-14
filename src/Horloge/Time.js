import React from "react";

class Time extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){

        this.timerID = setInterval(
            ()=> this.trick(), 1000
            )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }


    trick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <div>
            <h2> Date : </h2>
            <p> Il est { this.state.date.toLocaleTimeString() }</p>
        </div>
    }
}

export default Time;