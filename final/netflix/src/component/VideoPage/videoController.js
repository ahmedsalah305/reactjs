import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ButtonGroup, Button, ProgressBar, Dropdown } from 'react-bootstrap';
import { faBackward,  faClosedCaptioning,  faExpand,  faForward, faPause, faPlay, faRedo, faStop, faTachometerAlt, faVolumeDown, faVolumeMute, faVolumeUp, faWindowMaximize} from '@fortawesome/free-solid-svg-icons'


class VideoController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playBtn : <FontAwesomeIcon color="#1b70c5e3" icon={faPlay} />,
            volumeIcon:<FontAwesomeIcon color="#1b70c5e3" icon={faVolumeUp} />,
            progress:0,
            volume:1,
            currentDuration:"",
            showVolume:false,
            redoIcon:false,
        }
    }

    togglePLay = (e)=>{
        if (this.props.vidCore.current.playPause()){
            this.setState({playBtn: <FontAwesomeIcon color="#1b70c5e3"  icon={faPause} /> });
        }else{
            this.setState({playBtn: <FontAwesomeIcon color="#1b70c5e3" icon={faPlay} /> });
        }
    }

    stopVideo = ()=>{
        this.setState({playBtn: <FontAwesomeIcon color="#1b70c5e3" icon={faPlay} /> });
        this.props.vidCore.current.stopVid();
    }


    updateProgressBar = (percentValue)=>{
        this.setState({progress:percentValue})
    }

    updateDuration = (currentTime)=>{
        this.setState({currentDuration:currentTime})
    }

    changeProgressBar = (event)=>{
        let percentValue;
        if(event.nativeEvent.target.classList.contains("progress-bar")){
            percentValue =  event.nativeEvent.offsetX/event.nativeEvent.target.parentElement.clientWidth;
        }
        else{
            percentValue =  event.nativeEvent.offsetX/event.target.clientWidth;       
        }
        this.props.vidCore.current.changeProgressBar(percentValue);
        this.setState({progress:percentValue*100});
        if(this.state.redoIcon)
        {
            this.setState({redoIcon:false});
        }
    }

    changeVolume = (event)=>{
            let percentValue;
            if(event.nativeEvent.target.classList.contains("progress-bar")){
                percentValue =  event.nativeEvent.offsetX/event.nativeEvent.target.parentElement.clientWidth;
            }
            else{
                percentValue =  event.nativeEvent.offsetX/event.target.clientWidth;       
            }
            this.props.vidCore.current.changeVolume(percentValue);
            let volIcon = percentValue > 0.5 ? <FontAwesomeIcon color="#1b70c5e3" icon={faVolumeUp} /> : <FontAwesomeIcon color="#1b70c5e3" icon={faVolumeDown} />;
            this.setState({volume:percentValue, volumeIcon: volIcon});
    }

    muteVolume = () => {
        
        if(this.props.vidCore.current.muteVid()){
            this.setState({volumeIcon : <FontAwesomeIcon color="#1b70c5e3" icon={faVolumeMute} />});
        }else{
            let volIcon = this.state.volume > 0.5 ? <FontAwesomeIcon color="#1b70c5e3" icon={faVolumeUp} /> : <FontAwesomeIcon color="#1b70c5e3" icon={faVolumeDown} />;
            this.setState({volumeIcon: volIcon});
        }
    }

 


    toggleFullScreen = ()=>{
        if(document.fullscreen)
        {
            document.exitFullscreen()
        }
        else
        {
            this.props.player.current.requestFullscreen();
        }
    }

    toggleRedo = (isFinished)=>{
        this.setState({redoIcon:true,playBtn:<FontAwesomeIcon color="#1b70c5e3" icon={faPlay}/>})
    }

    redoHandler = ()=>{
        this.setState({redoIcon:false});
        this.stopVideo();
        this.togglePLay();

    }

    rewind = ()=>{
        this.props.vidCore.current.rewind();
        if(this.state.redoIcon)
        {
            this.setState({redoIcon:false});
        }
    }

    render(){
        return(
            <div className=" mx-auto w-100  my-0  py-0" >
            <ProgressBar className="my-1 mx-2" onClick={this.changeProgressBar} variant="danger"  now={this.state.progress} />
            <div className=" d-flex flex-sm-row flex-wrap justify-content-center pb-n5 " >
                <div className="col-md-8 d-flex justify-content-start" >
                            <ButtonGroup>
                                <Button variant="mute" onClick={this.rewind}><FontAwesomeIcon color="#1b70c5e3" icon={faBackward} /></Button>
                                <Button variant="mute" onClick={this.stopVideo}><FontAwesomeIcon color="#1b70c5e3"  icon={faStop} /></Button>
                                <Button variant="mute" onClick={this.togglePLay}>{this.state.playBtn}</Button>
                                <Button variant="mute" onClick={()=>this.props.vidCore.current.fastForward()}><FontAwesomeIcon color="#1b70c5e3" icon={faForward} /></Button>
                            </ButtonGroup>
            
                        <div className="text-center text-warning align-self-center" >{this.state.currentDuration}</div>

                        <div className="d-flex flex-nowrap" onMouseEnter={()=>this.setState({showVolume:true})} onMouseLeave={()=>this.setState({showVolume:false})} >
                            <Button variant="mute" onClick={this.muteVolume}>{this.state.volumeIcon}</Button>
                            { this.state.showVolume &&
                                <ProgressBar className="position-relative bg-light align-self-center" onClick={this.changeVolume}  variant="primary" style={{ height: "0.5rem", width: "5rem"}} now={this.state.volume*100} />
                            }
                        </div>
                    </div>

                <div className="col-md-4 d-flex justify-content-end" >    
                    <Dropdown>
                        <Dropdown.Toggle variant="mute" >
                            <FontAwesomeIcon color="#1b70c5e3" icon={faTachometerAlt} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4].map(item=>                                    
                                <Dropdown.Item  key={item} eventKey={item} onSelect={(rate)=>this.props.vidCore.current.changePlaybackRate(rate)} >x{item}</Dropdown.Item>
                            )}
                
                        </Dropdown.Menu>
                    </Dropdown>
                    <ButtonGroup>
                        <Button variant="mute" onClick={()=>this.props.vidCore.current.picInPic()}><FontAwesomeIcon color="#1b70c5e3" icon={faWindowMaximize} /></Button>
                        <Button variant="mute" onClick={()=>this.props.vidCore.current.toggleSubtitle()}><FontAwesomeIcon color="#1b70c5e3" icon={faClosedCaptioning} /></Button>
                        {
                            this.state.redoIcon &&
                            <Button variant="mute" onClick={()=>this.redoHandler()}><FontAwesomeIcon color="#1b70c5e3" icon={faRedo} /></Button>
                        }
                        <Button variant="mute" onClick={()=>this.toggleFullScreen()}><FontAwesomeIcon color="#1b70c5e3" icon={faExpand} /></Button>
                    </ButtonGroup>
                </div>
            </div> 
        </div>   

        );
    }
}

export default VideoController;