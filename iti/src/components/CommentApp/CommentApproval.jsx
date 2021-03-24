import React from 'react';

const CommentApproval = (props) => {
    return ( 
        <React.Fragment>
            <div className="card container">
                <div className="content">{props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
     );
}
 
export default CommentApproval;