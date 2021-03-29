import React, { Component } from 'react';

class PicsSearch extends Component {
    constructor(props){
        super(props)
        this.state = { 
            userInput: "",
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onInputChange = (event) =>{
        this.setState({userInput:event.target.value})
    }
    onFormSubmit = (event) =>{
        event.preventDefault()
        this.props.onSubmit(this.state.userInput)
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="ui action input container m-5">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <input 
                            placeholder="Search..."
                            value={this.state.userInput}
                            onChange={this.onInputChange}
                            />
                            {/* <button className="ui button">Search</button> */}
                        </div>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default PicsSearch;

// C9vrGTuCsH2A2z_iRzu5GaTspEozr7pgVup9a7BptBI
                // <div className="container mt-3">
                //     <label htmlFor="exampleDataList" className="form-label">Pics Search</label>
                //     <input 
                //     className="form-control"
                //     type="text" 
                //     list="datalistOptions" 
                //     id="exampleDataList" 
                //     placeholder="Type to search..."
                //     value={this.state.userInput}
                //     onChange={this.onInputChange}
                //     />
                //     <datalist id="datalistOptions">
                //         <option value="San Francisco"/>
                //         <option value="New York"/>
                //         <option value="Seattle"/>
                //         <option value="Los Angeles"/>
                //         <option value="Chicago"/>
                //     </datalist>
                // </div>