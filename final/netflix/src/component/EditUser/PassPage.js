import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';


class PassPage extends React.Component{
    render(){
        return(
            <Container style={{marginTop:"20%"}}>
            <Form >
                <Form.Group as={Row} center="true">
                    <Form.Label column md={3}>
                        New Password
                    </Form.Label>
                    <Col md={5}>
                    <Form.Control type='password' 
                        name='new_password1' onChange={this.props.passHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} center="true">
                    <Form.Label column md={3}>
                        Retype Password
                    </Form.Label>
                    <Col md={5}>
                    <Form.Control type='password' 
                        name='new_password2'  onChange={this.props.passHandler} />
                    </Col>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={this.props.savePass}> Change Password </Button>
            </Container>
        )
    }
}

export default PassPage