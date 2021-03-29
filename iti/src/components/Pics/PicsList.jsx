import React, { Component } from 'react';
// import PicsCard from './PicsCard';
import './style/Pics.css'

class PicsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies:[]
        }
    }
    // images = this.props.images.map((image) => {
    //     console.log(image)
    //     return (
    //         <PicsCard key={image.id} image={image}/>
    //     )
    // }) 
    
    render() {
        return ( 
            <React.Fragment>
                {this.props.movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <h1 key={movie.id}>{movie.title}</h1>
                            <img src={movie.image} alt=""/>
                            <video src={movie.video} controls></video>
                        </div>
                    )
                })}
            </React.Fragment>
         );
    }
}
 
export default PicsList;
//className="card-img-top"
// localStorage.getItem("title")
