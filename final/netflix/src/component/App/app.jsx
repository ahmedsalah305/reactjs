import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import ResponsiveHome from '../Home/ResponsiveHome';
import ResponsiveMemberShip from '../MemberShip/ResponsiveMemberShip';
import Dashboard from '../Dashboard/Dashboard';
import Signup from '../SignUp/SignUp';
import '../General/Assets/CSS/Semantic.css'
import Login from '../Login/Login';
import EditUser from '../EditUser/EditUser';
import Chat from '../Chat/Chat';
import VideoPage from '../VideoPage/videoPage';


class App extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            images: [
                {id:0  , describtion:"" , link:"https://images2.alphacoders.com/724/thumbbig-724132.jpg",},
                {id:1  , describtion:"" , link:"https://images3.alphacoders.com/114/thumbbig-11439.png" ,},
                {id:2  , describtion:"" , link:"https://images2.alphacoders.com/589/thumbbig-589553.png",},
                {id:3  , describtion:"" , link:"https://images4.alphacoders.com/573/thumbbig-57394.jpg" ,},
                {id:4  , describtion:"" , link:"https://images5.alphacoders.com/496/thumbbig-496726.jpg",},
                {id:5  , describtion:"" , link:"https://images6.alphacoders.com/311/thumbbig-311266.jpg",},
                {id:6  , describtion:"" , link:"https://images2.alphacoders.com/233/thumbbig-233960.jpg",},
                {id:7  , describtion:"" , link:"https://images2.alphacoders.com/520/thumbbig-520923.jpg",},
                {id:8  , describtion:"" , link:"https://images2.alphacoders.com/616/thumbbig-616013.jpg",},
                {id:9  , describtion:"" , link:"https://images2.alphacoders.com/617/thumbbig-617235.png",},
                {id:10 , describtion:"" , link:"https://images5.alphacoders.com/689/thumbbig-689398.jpg",},
                {id:11 , describtion:"" , link:"https://images.alphacoders.com/306/thumbbig-306943.jpg" ,},
            ],
            ask: [
                {id:"0" , question:"Who Is Netflix!"   , answer:"Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device." ,},
                {id:"1" , question:"About Supported Devices?"  , answer:"You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance. " ,},
                {id:"2" , question:"About Plans and Pricing" , answer:"Each Netflix plan determines the number of devices you can watch Netflix on at the same time and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).  Compare our plans and pricing to decide which one is right for you. You can easily change your plan or cancel online at any time." ,},
            ],
            cards: [
                {id:0 , title:"watch HD" , describtion:"Enjoy streaming in high quality"      , link:"fas fa-tv"},
                {id:1 , title:"Trending" , describtion:"Keep tracking of most modern works"   , link:"fas fa-fire"},
                {id:2 , title:"Family"   , describtion:"Enjoy your account with multi access" , link:"fas fa-users"},
            ],
            payments: [
                {id:0 , link:"https://image.flaticon.com/icons/png/128/888/888870.png"},
                {id:1 , link:"https://image.flaticon.com/icons/png/128/825/825461.png"},
                {id:2 , link:"https://image.flaticon.com/icons/png/128/825/825466.png"},
            ],
            plans: [
                {id:0 , header:"1 month free" , title:"Basic" , describtion:"$10/month after offer period 1 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Monthly cost",
                        },
                        {
                            id:1,
                            feature:"1 Number of screens you can watch on at the same time",
                        },
                        {
                            id:2,
                            feature:"1 Number of phones or tablets you can have downloads on",
                        },
                        {
                            id:3,
                            feature:"Watch on your mobile phone and tablet",
                        },
                        {
                            id:4,
                            feature:"Watch on your laptop and TV",
                        },
                    ],
            },],},
                {id:1 , header:"1 month free" , title:"Standard"        , describtion:"$15/month after offer period 2 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Monthly cost",
                        },
                        {
                            id:1,
                            feature:"2 Number of screens you can watch on at the same time",
                        },
                        {
                            id:2,
                            feature:"2 Number of phones or tablets you can have downloads on",
                        },
                        {
                            id:3,
                            feature:"Unlimited movies and TV shows",
                        },
                        {
                            id:4,
                            feature:"Watch on your mobile phone and tablet",
                        },
                        {
                            id:5,
                            feature:"Watch on your laptop and TV",
                        },
                    ],
            },],},
                {id:2 , header:"1 month free" , title:"Premium"     , describtion:"$20/month after offer period 6 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Monthly cost",
                        },
                        {
                            id:1,
                            feature:"4 Number of screens you can watch on at the same time",
                        },
                        {
                            id:2,
                            feature:"4 Number of phones or tablets you can have downloads on",
                        },
                        {
                            id:3,
                            feature:"Unlimited movies and TV shows",
                        },
                        {
                            id:4,
                            feature:"Watch on your mobile phone and tablet",
                        },
                        {
                            id:5,
                            feature:"Watch on your laptop and TV",
                        },
                        {
                            id:6,
                            feature:"HD available",
                        },
                    ],
            },],},
                {id:3 , header:"1 month free" , title:"Gold"    , describtion:"$25/month after offer period 1 account" , type:[{id:0 , 
                    text:[
                        {
                            id:0,
                            feature:"Monthly cost",
                        },
                        {
                            id:1,
                            feature:"8 Number of screens you can watch on at the same time",
                        },
                        {
                            id:2,
                            feature:"8 Number of phones or tablets you can have downloads on",
                        },
                        {
                            id:3,
                            feature:"Unlimited movies and TV shows",
                        },
                        {
                            id:4,
                            feature:"Watch on your mobile phone and tablet",
                        },
                        {
                            id:5,
                            feature:"Watch on your laptop and TV",
                        },
                        {
                            id:6,
                            feature:"HD available",
                        },
                        {
                            id:7,
                            feature:"Ultra HD available",
                        },
                    ],
            },],},
            ],
            footer: [
                {id:0 , heading:"About Us"   , footerLink1:"Owners" , footerLink2:"Policy" , footerLink3:"Objective" , link:"/" ,},
                {id:1 , heading:"Services"   , footerLink1:"Movies" , footerLink2:"Series" , footerLink3:"TV Shows"  , link:"/" ,},
                {id:2 , heading:"Contact Us" , footerLink1:"Email"  , footerLink2:"Phone"  , footerLink3:"Address"   , link:"/" ,},
            ],
            social: [
                {id:0 , footerLink:"Facebook"  , class:"fab fa-facebook-f" , style:{ marginLeft: "10px" } , link:"/" ,},
                {id:1 , footerLink:"Instagram" , class:"fab fa-instagram"  , style:{ marginLeft: "10px" } , link:"/" ,},
                {id:2 , footerLink:"Twitter"   , class:"fab fa-twitter"    , style:{ marginLeft: "10px" } , link:"/" ,},
            ],
            flag:false,
        };
    }
    render() { 
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route 
                        path='/home' 
                        exact 
                        render={
                            props => 
                            <ResponsiveHome
                            responsiveCarouselImages={this.state.images}
                            responsiveMoviesImages={this.state.images}
                            responsiveAccordionAsk={this.state.ask}
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route 
                        path='/premium' 
                        exact 
                        render={
                            props => 
                            <ResponsiveMemberShip
                            responsiveWhyCards={this.state.cards}
                            responsivePaymentPayments={this.state.payments}
                            responsivePlanPlans={this.state.plans}
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route 
                        path='/dashboard' 
                        exact 
                        render={
                            props => 
                            <Dashboard
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />} />
                        <Route
                        path='/login'
                        exact
                        render={
                            props =>
                            <Login
                            flag={this.state.flag}
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />}
                        />
                        <Route
                        path='/signup'
                        exact
                        render={
                            props =>
                            <Signup
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/edituser'
                        exact
                        render={
                            props =>
                            <EditUser
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/chat'
                        exact
                        render={
                            props =>
                            <Chat
                            {...props}
                            />
                        }
                        />
                        <Route
                        path='/video/:showName'
                        exact
                        render={
                            props =>
                            <VideoPage
                            responsiveFooterFooter={this.state.footer} 
                            responsiveFooterSocial={this.state.social}
                            {...props}
                            />
                        }
                        />
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
 
export default App;
