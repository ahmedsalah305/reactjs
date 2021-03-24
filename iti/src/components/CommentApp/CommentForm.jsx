import React from 'react';

const CommentForm = () => {
    return ( 
        <React.Fragment>
            <form className="ui reply form">
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </React.Fragment>
     );
}
 
export default CommentForm;