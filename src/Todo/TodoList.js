import React from 'react';
class TodoList extends React.Component {


    constructor() {
        super();
        this.state = {
            userInput:'',
            items:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }


    
    handleChange(e){
        e.persist();
        console.log("==> " + e);
        this.setState({
            userInput: e.target.value 
        })
    }

    addTask(e){
        e.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items,this.state.userInput]
        })
    }

    removeTask(item) {
        // alert("test !");
    
        const array = this.state.items;
        const index = array.indexOf(item);
        
        array.splice(index, 1);
        console.log(array)
        this.setState({
            items: array
        })
        console.log(index)
        console.log(this.state.items)


    }

    listTask(){
        return this.state.items.map(item => {
            return(
            <li key={item} className="list-group-item">
                {item}  <button onClick={() => this.removeTask(item)} className="btn-primary"> X </button>
            </li>
            )

        })
    }

    render() {
        return(        
            <div className="TodoList">
                <h1>Add Task  </h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Task Name </label>
                    <input 
                        type="text" 
                        value={this.state.userInput} 
                        className="form-control" id="taskname"  
                        placeholder="Enter Task Name" 
                        onChange={this.handleChange}/>
                </div>        
                    <button onClick={(event) => this.addTask(event)} className="btn-primary"> Ajouter </button>
                <h1> Task List </h1>
                <ul className="list-group list-group-flush">
                    {this.listTask()}
                </ul>
            </div>
            ); 
        }
}

export default TodoList;