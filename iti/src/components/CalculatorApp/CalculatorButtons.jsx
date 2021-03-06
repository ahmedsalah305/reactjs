import React, { Component } from 'react';

class CalculatorButtons extends Component {
    state = { 
        value1:[],
        value2:[],
        sign:'',
        history:0,
    }
    flagNumber = true
    flagSign = true
    flagPrepare = true
    flagValue1 = true
    prepare = []
    sum = ""
    counter = 1
    handleEqual = ()=>{
        // && this.state.sign
        if(this.state.value1.length && this.state.value2.length)
        {
            this.prepare.length = 0
            this.flagNumber = true
            this.flagSign = true
            this.flagPrepare = true
            this.flagValue1 = !this.flagValue1
            console.log("###########equal start######################")
            console.log("i am in equal in if condition")
            console.log("i am value1: " + this.state.value1)
            console.log("i am sign: " + this.state.sign)
            console.log("i am value2: " + this.state.value2)
            console.log("###########equal end########################")
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
        const buttonInfo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
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
            if(number == 10 && this.flagValue1)
            {
                this.flagValue1 = !this.flagValue1
                number = "."
            }
            this.prepare.push(number)
            for(var iterate = 0 ; iterate < this.prepare.length ; iterate++)
            {
                this.sum = this.sum + this.prepare[iterate]
            }
            console.log("sum from first: " + this.sum)
            this.state.value1.length = 0
            this.setState({value1:this.state.value1.length})
            this.state.value1.push(this.sum)
            this.setState({value1:this.state.value1})
            this.sum = ""
        }
        // && this.flagSign === true
        if((typeof(buttonValue) === typeof(" ")))
        {
            if(this.counter > 1)
            {
                this.handleEqual()
            }
            if(!this.state.value1.length)
            {
                this.state.history = this.props.getHistory
                this.setState({history:this.state.history})
                this.state.value1.push(this.state.history)
                this.setState({value1:this.state.value1})
            }
            // this.flagSign = false
            this.flagNumber = false
            this.setState({sign:buttonValue})
            this.counter++;
            console.log("i am in sign condition: " + buttonValue)
        }
        if(typeof(buttonValue) === typeof(1) && this.flagNumber === false)
        {
            if(this.flagPrepare)
            {
                this.flagPrepare=!this.flagPrepare
                this.prepare.length = 0
            }
            var number = String(event.target.value)
            if(number === "10" && !this.flagValue1)
            {
                this.flagValue1 = !this.flagValue1
                number = "."
            }
            this.prepare.push(number)
            for(var iterate = 0 ; iterate < this.prepare.length ; iterate++)
            {
                this.sum = this.sum + this.prepare[iterate]
            }
            console.log("sum from second: " + this.sum)
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
                        <button className={symbolClass} value={10} onClick={this.handleClick}>.</button>
                    </div>
                </div>
                <div style={{display:"inline-block"}}>
                    <div>
                        <button className={symbolClass} value="+/-" onClick={this.handleClick}>+/-</button>
                        <button className={symbolClass} value="%"   onClick={this.handleClick}>%</button>
                    </div>
                    <div>
                        <button className={symbolClass} value="x"   onClick={this.handleClick}>x</button>
                        <button className={symbolClass} value="??"  onClick={this.handleClick}>??</button>
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