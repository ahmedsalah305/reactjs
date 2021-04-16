import React from 'react';


class VideoCore extends React.Component {
    constructor(props){
        super(props);
        this.state={
            videoSrc : props.videoURL,
            videoSubtitle: props.videoSUB,
        };
        this.video = React.createRef();
    }


    playPause = ()=>{
        if(this.video.current.paused) {
            this.video.current.play(); 
            return true;
        }else{
            this.video.current.pause();
            return false;
        }
    }

    stopVid =() => {
        this.video.current.pause();
        this.video.current.currentTime = 0;
    }

    fastForward = ()=>{
        this.video.current.currentTime += 5;
    }

    rewind = ()=>{
        this.video.current.currentTime -= 5;
    }

    updateProgress = ()=>{
       let percentValue = this.video.current.currentTime * 100 / this.video.current.duration;
       this.props.vidController.current.updateProgressBar(percentValue);
    }

    changeProgressBar = (value)=>
    {
        this.video.current.currentTime = value * this.video.current.duration;
    }
    changePlaybackRate= (rate)=>{
        this.video.current.playbackRate = rate;
    }

    updateTiming = ()=>{
        let current = new Date(this.video.current.currentTime*1000).toISOString();
        let duration = new Date(this.video.current.duration*1000).toISOString();
        let stringTime = `${(current.substr(11,2) === "00" ? current.substr(14,5) : current.substr(11,8))} : 
                            ${(duration.substr(11,2) === "00" ? duration.substr(14,5) : duration.substr(11,8))}`
        
        this.props.vidController.current.updateDuration(stringTime);
    }

    videoUpdate = ()=>{
        this.updateProgress();
        this.updateTiming();
    }

    changeVolume = (volume)=>{
        this.video.current.volume = volume;
    }

    muteVid = ()=>{
       this.video.current.muted = !this.video.current.muted;
       return this.video.current.muted;
    }

    toggleSubtitle = ()=>{
        this.video.current.textTracks[0].mode = this.video.current.textTracks[0].mode === "hidden" ? "showing":"hidden";
    }

    picInPic = ()=>{
        if(document.pictureInPictureElement)
        {
            document.exitPictureInPicture();
        }
        else
        {
            this.video.current.requestPictureInPicture();
        }
    }

    loadMetadata = ()=>{
        this.stopVid();
        this.video.current.textTracks[0].mode = "hidden";
        this.video.current.playbackRate = 1;
    }

    redoToggle = ()=>{
        this.props.vidController.current.toggleRedo(true)
    }
    render(){
        return(

            <div className="embed-responsive  embed-responsive-21by9 px-0 pt-5 pb-5 mb-0 w-100 bg-dark align-self-end">
                <video onTimeUpdate={this.videoUpdate} onLoadedMetadata={this.loadMetadata} onEnded={this.redoToggle} ref={this.video}  preload="metadata">
                     { this.props.videoURL && <source src={this.props.videoURL}  type="video/mp4" /> }
                    <track  default kind="subtitles" srcLang="en" src={this.state.videoSubtitle} label="English" />
                </video>

            </div> 

        )
    }
} 

export default VideoCore;