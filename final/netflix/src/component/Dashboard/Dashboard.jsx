import React,{Component} from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from'../General/Assets/JSX/Navbar';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';
import '../General/Assets/CSS/Dashbord.css';


class Dashboard extends Component {
    state = { 
        footer:   this.props.responsiveFooterFooter,
        social:   this.props.responsiveFooterSocial, 
     }
     
    render() { 
        return ( 
            <React.Fragment>
            <div className="dashBord">
                <Navbar />
                <Banner />
                <Row title="NetflixOriginal" fetchUrl={requests.netflixOriginal} isHead={true} />
                <Row title="Trending" fetchUrl={requests.trending}/>
                <Row title="TopRated" fetchUrl={requests.topRated} />
                <Row title="Popular" fetchUrl={requests.popular} />
                <Row title="UpComing" fetchUrl={requests.upComing} />
                <Row title="ActionMovies" fetchUrl={requests.actionMovies} />
                <Row title="CommedyMovies" fetchUrl={requests.commedyMovies} />
                <Row title="HorrorMovies" fetchUrl={requests.horrorMovies} />
                <Row title="RomanceMovies" fetchUrl={requests.romanceMovies} />
                <Row title="DocumentariesMovies" fetchUrl={requests.documentariesMovies} />
                <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Dashboard;