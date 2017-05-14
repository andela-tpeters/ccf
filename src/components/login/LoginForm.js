import React from 'react';
import { Form, FormControl, FormGroup, Col, Checkbox, Button } from 'react-bootstrap';

export default (props) => {
  return (
    <Form id="login-form">
      <FormGroup>
        <Col sm={12}>
          Email Address
        </Col>
        <Col sm={12}>
          <FormControl type="email" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={12}>
          Password
        </Col>
        <Col sm={12}>
          <FormControl type="password" />
        </Col>
      </FormGroup>
      <FormGroup className="checkbox-wrapper">
        <Col xs={6}>
          <Checkbox>Remember Me</Checkbox>
        </Col>
        <Col xs={6}>
          <a href="#"><span className="pull-right">Forgot Password?</span></a>
        </Col>
      </FormGroup>
      <FormGroup>
        <Button className="round-btn login-action-btn" bsSize="large" bsStyle="primary" block>LOGIN</Button>
      </FormGroup>
    </Form>
  );
}