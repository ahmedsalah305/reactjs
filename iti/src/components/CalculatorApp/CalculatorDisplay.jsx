import React, { Component } from 'react';

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

export default CalculatorDisplay;