import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';

class CalculatorApp extends Component {
    state = { 
        operation:[],
        result : 0
    }
    handleEqual = (receivedOperation)=>{
        if(receivedOperation === '+')
        {this.add()}
        if(receivedOperation === '-')
        {this.sub()}
        if(receivedOperation === 'x')
        {this.mul()}
        if(receivedOperation === '÷')
        {this.div()}
        if(receivedOperation === '%')
        {this.mod()}
        if(receivedOperation === 'C')
        {this.clr()}
    }
    handleClear = ()=>{
        this.clr()
    }
    buttonsValue = (objValue) =>{
        console.log("received object: " + objValue)
        this.state.operation.push(objValue)
        this.setState({operation:objValue})
        console.log("operation after receiption in state: " + this.state.operation)
    }
    add = () =>{
        console.log("add function")
        if(this.state.operation[1] === '+')
        {
            var result = Number(this.state.operation[0]) + Number(this.state.operation[2])
            this.setState({
                result:result,
                operation:[]
            })
        }
    }
    sub = () =>{
        if(this.state.operation[1] === '-')
        {
            let result = Number(this.state.operation[0]) - Number(this.state.operation[2])
            this.setState({
                result:result,
                operation:[]
            })
        }
    }
    mul = () =>{
        if(this.state.operation[1] === 'x')
        {
            let result = Number(this.state.operation[0]) * Number(this.state.operation[2])
            this.setState({
                result:result,
                operation:[]
            })
        }
    }
    div = () =>{
        if(this.state.operation[1] === '÷')
        {
            let result = Number(this.state.operation[0]) / Number(this.state.operation[2])
            this.setState({
                result:result,
                operation:[]
            })
        }
    }
    mod = () =>{
        if(this.state.operation[1] === '%')
        {
            let result = Number(this.state.operation[0]) % Number(this.state.operation[2])
            this.setState({
                result:result,
                operation:[]
            })
        }
    }
    clr = () =>{
        this.setState({
            result:0,
            operation:[]
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <center><h1>Calculator App</h1></center>
                    <CalculatorDisplay getResult ={this.state.result}/>
                    <CalculatorButtons 
                    getButtonsValue={this.buttonsValue} 
                    getEqual={this.handleEqual}
                    getClear = {this.handleClear}
                    />
                </div>
            </React.Fragment>
         );
    }
}
 
export default CalculatorApp;
