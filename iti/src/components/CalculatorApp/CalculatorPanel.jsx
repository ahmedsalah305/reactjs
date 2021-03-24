import React, { Component } from 'react';

//this file is not used

class CalculatorPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <button>C</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button>÷</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CalculatorPanel;

// style={{position:"absolute" , left:"830px"}}
{/* <div style={{position:"absolute" , left:"830px"}}>
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
                </div> */}