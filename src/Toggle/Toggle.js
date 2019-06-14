import React from "react"

class Toggle extends React.Component {

    constructor(){
        super()

        this.state = {
            isToggle:true
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    render() {

        return <div>
            <button className= {this.state.isToggle ? "btn btn-success" : "btn btn-danger" }  onClick={this.handleToggle}>{ this.state.isToggle ? "ON" : "OFF"}</button>
        </div>
    }


    handleToggle() {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
}

export default Toggle