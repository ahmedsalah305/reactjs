import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

class SeasonApp extends Component {
    constructor(props){
        super(props)
        this.state = { 
            coords:[],
            error:[],
            month:null,
        }
    }
    position = (location) => {
        let coordsObj = {
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
        }
        let coords = [...this.state.coords]
        coords.push(coordsObj)
        this.setState({coords})
    }
    err = (err) => {
        let errorObj = {
            error:err.message,
        }
        let error = [...this.state.error]
        error.push(errorObj)
        this.setState({error})
        console.log(this.state.error)
    }
    getLoction = () => {
        window.navigator.geolocation.getCurrentPosition(this.position,this.err)
    }
    getMonth = () =>{
        let month = new Date().getMonth() + 1
        this.setState({month})
        console.log(this.state.month)
    }
    render() { 
        if(!this.state.error.error && this.state.error.length === 0)
        {
            return ( 
                <React.Fragment>
                    {this.state.coords.map((item,index) => {
                        return(
                            <div key={index}>
                                <h2>latitude: {item.latitude}</h2>
                                <h2>longitude: {item.longitude}</h2>
                            </div>
                        )
                    })}
                    <button onClick={this.getLoction}>Get Location</button>
                    <LifeCycle/>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <h1>error: {this.state.error[0].error}</h1>
            </React.Fragment>
        )
        }
    }

    SeasonApp.defaultProps = {

    }
    
    export default SeasonApp;
    
    
    // <h1>longitude: {this.state.coords.longitude}</h1>
    // <h1>latitude: {this.state.coords.latitude}</h1>