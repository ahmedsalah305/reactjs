import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props){
        super(props)
        console.log("first: constructor")
        this.state = {  }
    }
    componentDidMount(){
        console.log("third: componentDidMount: after render method this is called only one time");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate: after setstate method this called every time we setstate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
    }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <h1>{this.props.message}</h1>
                    <h1>{console.log("second: render")}</h1>
                </div>
            </React.Fragment>
         );
    }
}

LifeCycle.defaultProps = {
    message:"hello"
}

export default LifeCycle;