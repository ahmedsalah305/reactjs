import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Company from './company';
import Team from './team';

class About extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1>About</h1>
                <div className="row">
                    <div className="col-3">
                <ul>
                    <li>
                        <Link to='/about/team'>Our Team</Link>
                    </li>
                    <li>
                        <Link to='/about/company'>Our Company</Link>
                    </li>
                </ul>
                    </div>
                    <div className="col">
                        <Route path='/about/team' component={Team}/>
                        <Route path='/about/company' component={Company}/>
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}
 
export default About;