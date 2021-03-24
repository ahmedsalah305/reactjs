import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }
    deleteItem = () =>{
        this.props.deleteItem(this.props.data.id)
    }
    toggleAsDone = () =>{
        this.props.toggleDone(this.props.data) 
    }
    render() { 
        let color = this.props.data.done?"green":"red"
        return ( 
            <React.Fragment>
                <div onClick={this.toggleAsDone} style={{color:color}}>{this.props.data.txt}</div>
                <button onClick={this.deleteItem}>Delete</button>
            </React.Fragment> );
    }
}
export default TodoItem;