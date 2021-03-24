import React from 'react';
import CommentHeader from './CommentHeader';
import CommentDetails from './CommentDetails';
import CommentApproval from './CommentApproval';
import CommentForm from './CommentForm';
import faker from 'faker';

const CommentApp = () => {
    return ( 
        <React.Fragment>
            <div className="ui comments m-5">
                <CommentHeader/>

                <CommentApproval>
                    <CommentDetails avatar={faker.image.image()} content="good luck bro" timeAgo="Today 12:45" author="Ahmed"/>
                </CommentApproval>

                <CommentApproval>
                    <CommentDetails avatar={faker.image.image()} content="happy for you" timeAgo="Today 10:05" author="Mahmoud"/>
                </CommentApproval>

                <CommentApproval>
                    <CommentDetails avatar={faker.image.image()} content="go for it"     timeAgo="Just now"    author="Salah"/>
                </CommentApproval>

                <CommentForm/>
            </div>
        </React.Fragment>
     );
}
 
export default CommentApp;