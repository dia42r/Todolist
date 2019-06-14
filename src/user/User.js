import React from "react";

class User extends React.Component {

    constructor(){
        super();
        this.state = {

            title:"Mr",
            name:"Diarra",
            age:37
        };
    }

    render(){
        return <div className="user">
            <h2>User :{this.state.title}  </h2>
            <p>Name : {this.state.name} </p>
            <p>Name : {this.state.age} </p>
        </div>
    }
}

export default User;