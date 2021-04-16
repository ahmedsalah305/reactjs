import React, { Component } from 'react';
import ResponsiveFreeTrial from './ResponsiveFreeTrial';
import ResponsivePayment from './ResponsivePayment';
import ResponsivePlan from './ResponsivePlan';
import ResponsivePlanHeader from './ResponsivePlanHeader';
import ResponsiveWhy from './ResponsiveWhy';
import Navbar from '../General/Assets/JSX/Navbar';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';
import '../General/Assets/CSS/ResponsiveMemberShip.css'

class ResponsiveMemberShip extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            cards:    this.props.responsiveWhyCards,
            payments: this.props.responsivePaymentPayments,
            plans:    this.props.responsivePlanPlans,
            footer:   this.props.responsiveFooterFooter,
            social:   this.props.responsiveFooterSocial, 
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="membership">
                    <Navbar/>
                    <ResponsiveFreeTrial/>
                    <ResponsiveWhy responsiveWhyCards={this.state.cards}/>
                    <ResponsivePlanHeader/>
                    <ResponsivePayment responsivePaymentPayments={this.state.payments}/>
                    <ResponsivePlan responsivePlanPlans={this.state.plans}/>
                    <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
                </div>
            </React.Fragment>
         );
        }
    }
export default ResponsiveMemberShip;
    