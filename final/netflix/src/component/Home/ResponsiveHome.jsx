import React, {Component} from 'react';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';
import Navbar from '../General/Assets/JSX/Navbar';
import ResponsiveAccordion from './ResponsiveAccordion';
import ResponsiveCarousel from './ResponsiveCarousel';
import ResponsiveJumbotron from './ResponsiveJumbotron';
import ResponsiveMovies from './ResponsiveMovies';
import ResponsiveRegister from './ResponsiveRegister';
import '../General/Assets/CSS/ResponsiveHome.css'
import requests from './requests';

class ResponsiveHome extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            images: this.props.responsiveCarouselImages,
            ask:    this.props.responsiveAccordionAsk,
            footer: this.props.responsiveFooterFooter,
            social: this.props.responsiveFooterSocial,
        };
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="home">
                    <Navbar/>
                    <ResponsiveCarousel responsiveCarouselImages={this.state.images} fetchUrl={requests.actionMovies}/>
                    <ResponsiveJumbotron/>
                    <ResponsiveMovies responsiveMoviesImages={this.state.images} fetchUrl={requests.romanceMovies} loginLogout={this.state.flag}/>
                    <ResponsiveAccordion responsiveAccordionAsk={this.state.ask}/>
                    <ResponsiveRegister/>
                    <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ResponsiveHome;




