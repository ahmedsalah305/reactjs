import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import 'react-phone-input-2/lib/style.css'

class Field extends React.Component{
    render(){
        return(
            <Row>
                <Col>
                    <Form >
                        <Form.Group as={Row} center="true">
                            <Form.Label column md={3}>
                            {this.props.label}
                            </Form.Label>
                            <Col md={5}>
                            <Form.Control value={this.props.value}  type={this.props.type} 
                                name={this.props.name} onChange={this.props.changeHandler}  max={31} min={1}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        )
    }
}

class Data extends React.Component{
    render(){
        return(
            <div>
            <Container>
            <Col>  
                <Field value={this.props.data.username} type={"text"} label={"UserName"} name={"username"}
                    changeHandler={this.props.changeHandler}/>
                <Field value={this.props.data.email} type={"email"} label={"Email"} name={"email"}
                    changeHandler={this.props.changeHandler}/>

                <Field value={this.props.data.phone} type={"mobile"} label={"Phone"} name={"phone"}
                    changeHandler={this.props.changeHandler} />                

                <Field value={this.props.data.country} type={"text"} label={"Country"} name={"country"}
                    changeHandler={this.props.changeHandler}/>

                <Field value={this.props.data.membership} type={"text"} label={"Membership"} name={"membership"}
                    changeHandler={this.props.changeHandler}/>


                {/* <Field label={"Membership"}>    
                    <Form.Control as="select" name={"membership"} onChange={this.props.changeHandler}>
                    <option> Basic </option>
                    <option> Standard</option>
                    <option> Premium </option>
                    </Form.Control>
                </Field> */}

                <Field value={this.props.data.payment_day} type={"number"} label={"Payment Day"} name={"payment_day"}
                    changeHandler={this.props.changeHandler}/>
                <br />
                <Button variant="primary" onClick={this.props.save}> Save </Button>
            </Col>
            </Container>
            </div>
        )
    }
}

export default Data 