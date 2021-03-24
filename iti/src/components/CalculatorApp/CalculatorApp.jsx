import React, { Component } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorCalculations from './CalculatorCalculation';

class CalculatorApp extends Component {
    state ={
        result:0
    }
    handleResult = (result)=>{
        this.setState({result:result})
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5">
                    <center><h1>Calculator App</h1></center>
                    <CalculatorDisplay getResult ={this.state.result}/>
                    <CalculatorCalculations getfinal={this.handleResult}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CalculatorApp;
