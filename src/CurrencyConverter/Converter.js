import React from "react"

class Converter extends React.Component {

    constructor() {
        super()
        this.state = {
        amount:0
    }

    this.onChange = this.onChange.bind(this);
    }

onChange(e) {
    this.setState({
         amount: e.target.value
        //amount: this.state.amount * 1.13
    })
    console.log(" =>" + this.state.amount);
}

convertEurosToDollar(amount) {
    return amount * 1.13 
}
convertEurosToFCFA(amount) {
    return amount * 655 
}

    render() {
        return  <div>
            <h2>Converter </h2>
            <input type="number" value={this.state.amount} placeholder="" onChange={this.onChange}/> euro
            <p>{this.convertEurosToDollar(this.state.amount).toFixed(3)} Dollar </p>
            <p>{this.convertEurosToFCFA(this.state.amount)} FCFA </p>
            </div>
    }
}

export default Converter