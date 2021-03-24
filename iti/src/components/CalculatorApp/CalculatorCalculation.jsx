import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButtons';

class CalculatorCalculations extends Component {
    state = { 
        operation:[],
        value1:[],
        value2:[],
        sign:'',
        result : 0
    }
    handleEqual = (value1,sign,value2)=>{
        this.buttonsValue(value1,sign,value2)
    }
    handleClear = ()=>{
        this.clr()
    }
    buttonsValue = (value1,sign,value2) =>{
        this.state.value1.push(value1)
        this.state.value2.push(value2)
        this.state.sign = sign
        this.setState({
            value1:this.state.value1,
            sign:sign,
            value2:this.state.value2,
        })
        if(sign === '+')
        {this.add()}
        if(sign === '-')
        {this.sub()}
        if(sign === 'x')
        {this.mul()}
        if(sign === '÷')
        {this.div()}
        if(sign === '%')
        {this.mod()}
        if(sign === 'C')
        {this.clr()}
    }
    add = () =>{
        console.log("add function")
        if(this.state.sign === '+')
        {
            var result = Number(this.state.value1) + Number(this.state.value2)
            console.log("result is: " + result)
            this.setState({
                result:result,
                value1:[],
                sign:"",
                value2:[],
            })
        }
        this.props.getfinal(result)
    }
    sub = () =>{
        console.log("add function")
        if(this.state.sign === '-')
        {
            var result = Number(this.state.value1) - Number(this.state.value2)
            console.log("result is: " + result)
            this.setState({
                result:result,
                value1:[],
                sign:"",
                value2:[],
            })
        }
        this.props.getfinal(result)
    }
    mul = () =>{
        console.log("add function")
        if(this.state.sign === 'x')
        {
            var result = Number(this.state.value1) * Number(this.state.value2)
            console.log("result is: " + result)
            this.setState({
                result:result,
                value1:[],
                sign:"",
                value2:[],
            })
        }
        this.props.getfinal(result)
    }
    div = () =>{
        console.log("add function")
        if(this.state.sign === '÷')
        {
            var result = Number(this.state.value1) / Number(this.state.value2)
            console.log("result is: " + result)
            this.setState({
                result:result,
                value1:[],
                sign:"",
                value2:[],
            })
        }
        this.props.getfinal(result)
    }
    mod = () =>{
        console.log("add function")
        if(this.state.sign === '%')
        {
            var result = Number(this.state.value1) % Number(this.state.value2)
            console.log("result is: " + result)
            this.setState({
                result:result,
                value1:[],
                sign:"",
                value2:[],
            })
        }
        this.props.getfinal(result)
    }
    clr = () =>{
        this.setState({
            result:0,
            value1:[],
            value2:[],
            sign:""
        })
        this.props.getfinal(0)
    }
    render() { 
        return ( 
            <React.Fragment>
                <CalculatorButtons 
                    getEqual={this.handleEqual}
                    getClear = {this.handleClear}
                    />
            </React.Fragment>
            
         );
    }
}
 
export default CalculatorCalculations;