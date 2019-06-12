import React from 'react';

class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
        ;
    }


    removeOne() {
        this.setState({
            count: this.state.count - 1
        })
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        }
        )
    }

    render() {
        return <div>
            <h1> Home : Welcome {this.props.name}</h1>
            <h1> count  : {this.state.count}</h1>

            <button onClick={() => this.addOne()} className="btn-primary"> Up </button>
            <button onClick={() => this.removeOne()} className="btn-primary"> Down </button>
        </div>
    }
}

export default Home;