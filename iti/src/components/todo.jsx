import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class TodoList extends Component {
    state = { 
        userInput: "",
        list: [],
     }
     updateInput = (event) =>{
         this.setState({userInput:event.target.value})
     }
     updateList = () =>{
         const list = [...list]
         this.setState({list})
     }
     addItem = () =>{
        if(this.state.userInput !== '' ){ 
            const userInput = { 
        
                // Add a random id which is used to delete 
                id : Math.random(), 
        
                // Add a user value to list 
                value : this.state.userInput 
            }; 
        
            // Update list 
            const list = [...this.state.list]; 
            list.push(userInput); 
        
            // reset state 
            this.setState({ 
                list, 
                userInput:""
            }); 
            }
     }
     // Function to delete item from list use id to delete 
    deleteItem = ()=>{
        const list = this.state.list.filter(item => item.value !== this.state.userInput);
        this.setState({list});  
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">

                        <div className="col-2">

                            <label htmlFor="input" 
                                   className="form-label">
                                       Enter Item
                            </label>

                            <input className="form-control"
                                   value={this.state.userInput}
                                   onChange = {this.updateInput}
                                   name="input" 
                                   type="text" 
                                   placeholder="Default input" 
                                   aria-label="default input example"/>
                        </div>

                        <div className="btn-group mt-2 col-2" role="group" aria-label="Basic outlined example">
                            <button className="btn btn-sm btn-outline-primary" onClick = {()=>this.addItem()}>Add</button>
                            <button className="btn btn-sm btn-outline-primary" onClick = {() => this.deleteItem(this.state.list.value)}>Delete</button>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <ul className="list-group">
                            {this.state.list.map(list => <li className="list-group-item mt-1" key={list.id}>{list.value}</li>)}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TodoList;