import React, { Component } from 'react';

class PicsCard extends Component {
    constructor(props){
        super(props)
        this.state = { 
            spans:0,
         }
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = ()=> {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height /10 + 1)
        this.setState({spans})
    }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                    <img 
                    alt={this.props.image.description} 
                    src={this.props.image.urls.regular}
                    ref={this.imageRef}
                    />
                </div>
            </React.Fragment>
         );
    }
}
 
export default PicsCard;