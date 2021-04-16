import React from 'react';
import './videoPLayer.css';
import 'bootstrap/dist/css/bootstrap.css';

import VideoController from './videoController';
import VideoCore from './videoCore';


class VideoPLayer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoSource:props.videoURL,
            videoSubtitle:props.videoSUB,
            playerTimeOut:""
        };
        this.video = React.createRef();
        this.controller = React.createRef();
        this.player = React.createRef();
    }

    togglePlayer = ()=>{
        if(this.player.current.style.cursor !== null){
            clearTimeout(this.state.playerTimeOut);
            this.player.current.style.cursor ="default";
            this.setState({playerTimeOut: setTimeout(()=>{
                                this.player.current.style.cursor = "none";
                                 }
                            ,2000)
                        });
            }

    }

  render()
  {
    return(

        <div className="container p-4 mx-auto my-5 ">
            <div  ref={this.player} onContextMenu={e=>e.preventDefault()} onMouseMove={this.togglePlayer} className="container-fluid flex align-items-center align-items-end mx-0  bg-dark mt-5 rounded  px-0 pb-0 pt-5 ">
                <VideoCore videoURL={this.props.videoURL} vidSubtitle={this.state.videoSubtitle} ref={this.video} vidController={this.controller} />
                <VideoController className="visible" ref={this.controller} vidCore={this.video} player={this.player}/>
            
            </div>
        </div>
    )
  }
}


export default VideoPLayer;

