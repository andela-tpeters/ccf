import React from 'react';
import { Modal, Button  } from 'react-bootstrap';
import LoginForm from './LoginForm';
import './Login.css';

export default ({ showModal, close }) => {
  return (
    <Modal show={showModal} onHide={close}>
      <Modal.Header >
        <Modal.Title>
          Login to Your Account
        </Modal.Title>
        <span>Get personalised offers and more...</span>
        <Button className="round-btn" bsStyle="primary" bsSize="large" block>Login with Facebook</Button>
        <span className="or-text">or login with email</span>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      <Modal.Footer>
        Don't have and account? &nbsp; <Button className="btn-rounded">SIGNUP</Button>
      </Modal.Footer>
    </Modal>
  )
}