import React from 'react';
import VideoPLayer from './player';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Accordion, Jumbotron, Container, Media} from 'react-bootstrap';
import Navbar from '../General/Assets/JSX/Navbar';
import ResponsiveFooter from '../General/Assets/JSX/ResponsiveFooter';


// 6806cd75ff9842506cdb5ee694d23e2e409f95d9
// http://localhost:8000/
async function getShow(userToken, backendURL,showName){
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `token ${userToken}`);
    myHeaders.append("Content-Type", "application/json");
 
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    let response = await fetch(`${backendURL}api/movie/${showName}`, requestOptions);
    let resObj = await response.json();
    return resObj;
}


class VideoPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            footer: this.props.responsiveFooterFooter,
            social: this.props.responsiveFooterSocial,
                    videoURL:"",
                    showID:"",
                    show:""}
        getShow(localStorage.getItem('token'), "http://itipythonapi.herokuapp.com/", this.props.match.params.showName).then(
            show => {
                this.setState({ videoURL:show.video_Source, 
                    showID:show.id, show:show
                })
            }
            ).catch(errMess => console.log(errMess));
            console.log(this.props.match.params.showName)


    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
            <div style={{backgroundColor:"#111"}}>
                <VideoPLayer videoURL={this.state.videoURL} videoSUB={"/subtitle.vtt"} />
              
            {
                this.state.show &&
              
                <Accordion defaultActiveKey="0" className="container">
                    <Card>
                        <Card.Body>
                            <Jumbotron fluid>
                                <Container>
                                        <h1 className="mx-3 my">Title: {this.state.show.name}</h1>
                                        <h3 className="mx-3 my"> Type: {this.state.show.show_type}</h3>
                                    <Media  className="bg-white p-2 m-3 rounded">
                                {
                                    this.state.show.poster &&
                                    <img className="mr-3"
                                    style={{ width: '18rem', alignSelf:"right"}}
                                    src={this.state.show.poster}
                                    alt="Show poster"
                                    />
                                }
                                <Media.Body>
                                <h4>Story:</h4> <h5>{this.state.show.story}</h5>
                                <h4>Language:</h4> <h5>{this.state.show.language}</h5>  <h4>Country:</h4> <h5>{this.state.show.country}</h5> <h4>Duration:</h4> <h5>{this.state.show.duration}</h5>
                                <h4> Production Date:</h4> <h5>{this.state.show.production_Date}</h5> <h4>Publish Date:</h4> <h5>{this.state.show.publish_Date}</h5>
                                <h4>Rate: <small>{this.state.show.rating}</small> </h4>  <h4>RatedPG: <small>{this.state.show.classification}</small> </h4>
                                        </Media.Body>
                                    </Media>
                                
                              
                                </Container>
                            </Jumbotron>
                        </Card.Body>
                    </Card>


                        {this.state.show.genres && 
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Genres
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                            <div>
                                                <h4>Genres:</h4>                                         
                                                    {this.state.show.genres.map((genre, index)=><h5 key={index}>{genre}</h5>)}
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }
                        {this.state.show.actors && 
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Actors
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                            <div>
                                                <h4>Actors:</h4>                                         
                                                    {this.state.show.actors.map((actor, index)=><h5 key={index}>{actor}</h5>)}
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }

                        {this.state.show.authors && 
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Authors
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                            <div>
                                                <h4>Authors:</h4>                                         
                                                    {this.state.show.authors.map((author, index)=><h5 key={index}>{author}</h5>)}
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }

                    {this.state.show.producers && 

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                Producers
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                            <div>
                                                <h4>Producers:</h4>                                         
                                                    {this.state.show.producers.map((producer, index)=><h5 key={index}>{producer}</h5>)}
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }

                    {this.state.show.directors && 

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                Directors
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                            <div>
                                                <h4>Directors:</h4>                                         
                                                    {this.state.show.directors.map((director, index)=><h5 key={index}>{director}</h5>)}
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }

                    {this.state.show.prizes && 

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                prizes
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                            <div>
                                                <h4>Prizes:</h4>                                         
                                                    <h5>{this.state.show.prizes}</h5>
                                            </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                    }


                
                </Accordion>
            }
               
            </div>
            <ResponsiveFooter responsiveFooterFooter={this.state.footer} responsiveFooterSocial={this.state.social}/>
            </React.Fragment>

        );

    } 
}


export default VideoPage;