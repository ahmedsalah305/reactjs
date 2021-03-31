import React from 'react';
import Link from './Link';

const Header = () => {
    return ( 
        <React.Fragment>
            <div className="ui secondary pointing menu">
                <Link className="item" href="/"         >Accordion</Link>
                <Link className="item" href="/search"   >Search</Link>
                <Link className="item" href="/dropdown" >Dropdown</Link>
                <Link className="item" href="/translate">Translate</Link>
            </div>
        </React.Fragment>
     );
}
 
export default Header;