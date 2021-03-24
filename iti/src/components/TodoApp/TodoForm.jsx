import React, { Component } from 'react';

class TodoForm extends Component {
    state = { 
        text:"",
    }
    add=()=>{
        this.props.onAddItem(this.state.text)
        this.setState({text:""})
    }
    textChange = (event)=>{
        this.setState({text:event.target.value})
    }
    render() { 
        return ( 
            <React.Fragment>
                <input 
                type="text" 
                placeholder="hello" 
                value={this.state.text} 
                onChange={this.textChange}/>
                <button onClick={this.add}>Add</button>
            </React.Fragment>
         );
    }
}
export default TodoForm;