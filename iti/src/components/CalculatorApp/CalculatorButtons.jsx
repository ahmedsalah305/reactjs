import React, { Component } from 'react';
import CalculatorPanel from './CalculatorPanel';

class CalculatorButtons extends Component {
    state = { 
        value1:[],
        value2:[],
        sign:'',
    }
    counter = 1
    flagNumber = true
    flagSign = true
    flagPrepare = true
    prepare = []
    sum = ""
    handleEqual = (event)=>{
        console.log("i am equal: " + event.target.value)
        if(this.state.value1.length && this.state.sign && this.state.value2.length)
        {
            this.prepare.length = 0
            this.flagNumber = true
            this.flagSign = true
            this.flagPrepare = true
            this.props.getEqual(this.state.value1,this.state.sign,this.state.value2)
            this.setState({
                value1:[],
                value2:[],
                sign:'',
            })
        }
    }
    handleClear = (event)=>{
        this.props.getClear(event.target.value)
    }
    handleClick = (event) =>{
        var buttonValue = event.target.value
        const buttonInfo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        for(var buttonInfoCounter in buttonInfo)
        {
            if(buttonInfoCounter === buttonValue)
            {
                buttonValue = Number(buttonValue)
            }
        }
        
        if(typeof(buttonValue) === typeof(1) && this.flagNumber === true)
        {
            var number = String(event.target.value)
            this.prepare.push(number)
            for(var iterate = 0 ; iterate < this.prepare.length ; iterate++)
            {
                
                this.sum = this.sum + this.prepare[iterate]
            }
            this.state.value1.length=0
            this.state.value1.push(this.sum)
            this.setState({value1:this.state.value1})
            this.sum = ""
        }
        if((typeof(buttonValue) === typeof(" ")) && this.flagSign === true)
        {
            this.flagSign = false
            this.flagNumber = false
            this.setState({sign:buttonValue})
        }
        if(typeof(buttonValue) === typeof(1) && this.flagNumber === false)
        {
            if(this.flagPrepare)
            {
                this.flagPrepare=!this.flagPrepare
                this.prepare.length = 0
            }
            var number = String(event.target.value)
            this.prepare.push(number)
            for(var iterate = 0 ; iterate < this.prepare.length ; iterate++)
            {
                
                this.sum = this.sum + this.prepare[iterate]
            }
            this.state.value2.length=0
            this.state.value2.push(this.sum)
            this.setState({value2:this.state.value2})
            this.sum = ""
        }
    }
    render() {
        var numberClass = "btn btn-lg btn-primary m-1"
        var symbolClass = "btn btn-lg btn-warning m-1"
        return ( 
            <React.Fragment>
                <div style={{display:"inline-block"}}>
                    <div>
                        <button className={numberClass} value={7}   onClick={this.handleClick}>7</button>
                        <button className={numberClass} value={8} style={{width:"54px"}}  onClick={this.handleClick}>8</button>
                        <button className={numberClass} value={9} style={{width:"48px"}}  onClick={this.handleClick}>9</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={4}   onClick={this.handleClick}>4</button>
                        <button className={numberClass} value={5} style={{width:"54px"}}   onClick={this.handleClick}>5</button>
                        <button className={numberClass} value={6} style={{width:"48px"}}  onClick={this.handleClick}>6</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={1}   onClick={this.handleClick}>1</button>
                        <button className={numberClass} value={2} style={{width:"54px"}}  onClick={this.handleClick}>2</button>
                        <button className={numberClass} value={3} style={{width:"48px"}}  onClick={this.handleClick}>3</button>
                    </div>   
                    <div>   
                        <button className={numberClass} value={0} style={{width:"98px"}}   onClick={this.handleClick}>0</button>
                        <button className={symbolClass} value="." onClick={this.handleClick}>.</button>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <button className={symbolClass} value="+/-" onClick={this.handleClick}>+/-</button>
                        <button className={symbolClass} value="%"   onClick={this.handleClick}>%</button>
                    </div>
                    <div>
                        <button className={symbolClass} value="x"   onClick={this.handleClick}>x</button>
                        <button className={symbolClass} value="÷"  onClick={this.handleClick}>÷</button>
                    </div>
                    <div>
                        <button className={symbolClass} value="+" onClick={this.handleClick}>+</button>
                        <button className={symbolClass} value="-"  onClick={this.handleClick}>-</button>
                    </div>
                    <div>
                        <button className={symbolClass} value="C"  onClick={this.handleClick}>C</button>
                        <button className={symbolClass} value="="   onClick={this.handleEqual}>=</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default CalculatorButtons;