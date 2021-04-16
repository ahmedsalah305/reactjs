import React, { Component } from 'react';
import VideoPage from './videoPage';

class VideoStream extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <VideoPage userToken={"843d3ce3b56549228e7630ca03ae2589f288b917"} backendURL={"http://localhost:8000/"} showID={"1"} />
            </React.Fragment>
         );
    }
}
 
export default VideoStream;