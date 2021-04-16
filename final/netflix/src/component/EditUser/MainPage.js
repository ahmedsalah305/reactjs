import React from 'react'
import User from './User'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Image } from 'react-bootstrap';
import Netflix from "../General/Assets/Media/netflix.jpg"


class MainPage extends React.Component{

  render(){

  return (
    <div>
      <Container fluid  className="text-center">
        <Row id="mainPage" style={{height:'625px'}}>  

          <Col md={6} style={{backgroundColor:'#efefef',color:"#1a8afb"}}>
            <User data={this.props.data}
                  changeHandler={this.props.changeHandler}
                  save={this.props.save} 
                  updateavatar={this.props.updateavatar}
                  removeAvatar={this.props.removeAvatar}
                  passHandler={this.props.passHandler}
                  savePass={this.props.savePass}
                  message={this.props.message}
                  display={this.props.display}
                  variant={this.props.variant}
            />
          </Col>

          <Col md={6} style={{padding:'0px'}}>
            <Image src={Netflix} style={{height: '100%',width: '100%'}}/>
          </Col>
          
        </Row>
      </Container>
    </div>           
    )
  }
}

export default MainPage;
