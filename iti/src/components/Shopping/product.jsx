// any component is a class of a state and render
//to render you need import React, { Component } from 'react';
//state is where we put our data

import React, { Component } from 'react';//imrc tab
import {Link} from 'react-router-dom'

//cc tab
class Product extends Component {
    // state = { 
    //     // name   : this.props.product.name,
    //     // count  : this.props.product.count,
    //     // imgUrl : "logo512.png",
    //     // names  : ["ahmed" , "osama" , "ali"],
    //  }

    //  constructor(){
    //      super();
    //      this.clickHandler = this.clickHandler.bind(this);
    //  }

    getClasses()
    {
        return this.props.product.count <= 10 ? "badge badge-warning m-2" : "badge badge-primary m-2";
    }

    // renderNames()
    // {
    //     if(this.props.product.names.length === 0)
    //     {
    //         return <h2>No Names</h2>;
    //     }
    //     return (
    //         <ul>
    //         {this.props.product.names.map(
    //             name => (
    //                 <li key={name}>{name}</li>
    //             )
    //         )}
    //     </ul>
    //     );
    // }
    
    // incrementHandler = num =>
    // {
    //     this.setState({count : this.state.count + num});
    // }
    // increment = () =>
    // {
    //     this.incrementHandler(2);
    // }
    render() { 
        // console.log(this.props);
        return ( 
        <div className="row">
            <div className="col-2">
                <span>
                    <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link>
                </span>
            </div>
            <div className="col">
                <span className={this.getClasses()}>{this.props.product.count}</span>
                <button onClick={() => this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                <span style={{cursor:'pointer'}} onClick={() => this.props.onDelete(this.props.product)}>
                    <i className="fas fa-trash m-2"></i>
                </span>
            </div>
            
        </div> 
        );
    }
}
 
export default Product;



//<img src={this.state.imgUrl} alt="logo"/>
// {this.state.names.length === 0 && <h4>No Names From h4</h4>}
//             <ul>
//                 {this.state.names.map(
//                     name => (
//                         <li key={name}>{name}</li>
//                     )
//                 )}
//             </ul>