import React, { Component } from 'react';

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
 
class CalculatorDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <center>
                    <h1 style={{backgroundColor:"#EDEDED"}} className="display-4">
                        {this.props.getResult}
                    </h1>
                </center>
            </React.Fragment>
         );
    }
}

class CalculatorButtons extends Component {
    state = { 
        operation:[],
    }
    counter = 1
    handleEqual = (event)=>{
        console.log("i am equal: " + event.target.value)
        this.props.getEqual(this.state.operation[1])
        this.state.operation.length=0
        this.setState({operation:this.state.operation})
        console.log("display operation in state after clear: " + this.state.operation);
    }
    handleClear = (event)=>{
        this.props.getClear(event.target.value)
    }
    handleClick = (event) =>{
        if (this.counter === 1)
        {
            var value1 = event.target.value
            this.state.operation.push(value1)
            this.setState({operation:this.state.operation})
            this.counter = 2
            console.log("i got value 1: " + value1);
        }
        else if (this.counter === 2)
        {
            var op = event.target.value
            this.state.operation.push(op)
            this.setState({operation:this.state.operation})
            this.counter = 3
            console.log("i got op: " + op);
        }
        else if (this.counter === 3)
        {
            var value2 = event.target.value
            this.state.operation.push(value2)
            this.setState({operation:this.state.operation})
            this.counter = 1
            console.log("i got value 2: " + value2);
            var obj = {
                value1:this.state.operation[0],
                op:this.state.operation[1],
                value2:this.state.operation[2],
            }
            console.log("i got obj: " + obj);
            this.state.operation.push(obj)
            this.setState({operation:this.state.operation})
            this.props.getButtonsValue(this.state.operation)
            console.log("display operation in state before clear: " + this.state.operation);
        }
    }
    render() {
        var numberClass = "btn btn-lg btn-primary m-1"
        var symbolClass = "btn btn-lg btn-warning m-1"
        return ( 
            <React.Fragment>
                <div style={{position:"absolute" , left:"830px"}}>
                    <div>
                        <button className={symbolClass} value="C"  onClick={this.handleClear}>C</button>
                        <button className={symbolClass} value="+/-" onClick={this.handleClick}>+/-</button>
                        <button className={symbolClass} value="%"   onClick={this.handleClick}>%</button>
                        <button className={symbolClass} value="÷"   onClick={this.handleClick}>÷</button>
                    </div>
                    <div>
                        <button className={numberClass} value={7}   onClick={this.handleClick}>7</button>
                        <button className={numberClass} value={8} style={{width:"54px"}}  onClick={this.handleClick}>8</button>
                        <button className={numberClass} value={9} style={{width:"48px"}}  onClick={this.handleClick}>9</button>
                        <button className={symbolClass} value="x"   onClick={this.handleClick}>x</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={4}   onClick={this.handleClick}>4</button>
                        <button className={numberClass} value={5} style={{width:"54px"}}   onClick={this.handleClick}>5</button>
                        <button className={numberClass} value={6} style={{width:"48px"}}  onClick={this.handleClick}>6</button>
                        <button className={symbolClass} value="-"   onClick={this.handleClick}>-</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={1}   onClick={this.handleClick}>1</button>
                        <button className={numberClass} value={2} style={{width:"54px"}}  onClick={this.handleClick}>2</button>
                        <button className={numberClass} value={3} style={{width:"48px"}}  onClick={this.handleClick}>3</button>
                        <button className={symbolClass} value="+"   onClick={this.handleClick}>+</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={0} style={{width:"98px"}}   onClick={this.handleClick}>0</button>
                        <button className={symbolClass} value="." style={{width:"48px"}}  onClick={this.handleClick}>.</button>
                        <button className={symbolClass} value="="   onClick={this.handleEqual}>=</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CalculatorApp;


// const CalculatorOperation = (props) => {
    
//     add = (props) =>{
//         props.getAdd()
//     }
//     sub = (props) =>{
//         props.getSub()
//     }
//     mul = (props) =>{
//         props.getMul()
//     }
//     div = (props) =>{
//         props.getDiv()
//     }
//     mod = (props) =>{
//         props.getMod()
//     }
//     clr = (props) =>{
//         props.getClr()
//     }
//     return ( 
//         <React.Fragment></React.Fragment>
//      );
// }
{/* <CalculatorOperation 
                getAdd={this.add}
                getSub={this.sub}
                getMul={this.mul}
                getDiv={this.div}
                getMod={this.mod}
                getClr={this.clr}
                /> */}