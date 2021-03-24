import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {this.props.list.map((item)=>{
                    return <TodoItem 
                    key={item.id} 
                    data={item} 
                    deleteItem={this.props.deleteItem}
                    toggleDone={this.props.toggleDone}/>;
                })}
            </React.Fragment>);
    }
}
export default TodoList;