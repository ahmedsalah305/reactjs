import React from 'react';

const Link = ({className, href, children}) => {
    const onAnchorClick = (event) =>{
        if(event.ctrlKey){return;}
        event.preventDefault()
        window.history.pushState({},'',href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return ( 
        <React.Fragment>
            <a onClick={(event)=>onAnchorClick(event)} className={className} href={href}>{children}</a>
        </React.Fragment>
     );
}
 
export default Link;