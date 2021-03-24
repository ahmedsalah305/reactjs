import React from 'react';

const CommentDetails = (props) => {
    return ( 
        <React.Fragment>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                    <div className="actions">
                        <a href="/" className="reply">Reply</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

// class CommentDetails extends React.Component {
//     render(){
//         return ( 
//             <React.Fragment>
//                 <div class="comment">
//                     <a href="/" class="avatar">
//                         <img src={faker.image.image()} alt="avatar"/>
//                     </a>
//                     <div class="content">
//                         <a href="/" class="author">{this.props.author}</a>
//                         <div class="metadata">
//                             <span class="date">Just now</span>
//                         </div>
//                         <div class="text">
//                             Elliot you are always so right :)
//                         </div>
//                         <div class="actions">
//                             <a href="/" class="reply">Reply</a>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//          );
//     }
// }
 
export default CommentDetails;