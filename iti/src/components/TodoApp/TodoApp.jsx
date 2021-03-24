import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
    state = { 
        items:[],
    };
    id = 0;
    addItem = (text)=>{
        this.state.items.push({
            txt:text,
            id:this.id++,
            done:false,
        })
        this.setState({items:this.state.items})
    }
    deleteItem = (itemId) =>{
        let index = this.state.items.findIndex(item => item.id === itemId)
        this.state.items.splice(index,1)
        this.setState({items:this.state.items})
    }
    toggleDone = (itemObject) =>{
        itemObject.done = !itemObject.done
        this.setState({items:this.state.items})
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Todo app</h1>
                <TodoList 
                list={this.state.items} 
                deleteItem={this.deleteItem} 
                toggleDone={this.toggleDone}/>
                <TodoForm onAddItem={this.addItem}/>
            </React.Fragment>
         );
    }
}
export default TodoApp;