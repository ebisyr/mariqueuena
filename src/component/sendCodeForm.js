import React, { useState, useRef } from 'react';
import {Form,Button, Row, Col, Modal, ModalBody, InputGroup} from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../App.css';
import VerifyCodeForm from './verifyCodeForm';

const SendCodeForm = ({show, handleClose}) => {
    const [values, setValues] = useState({
        email: '',
    });
    const [showVerifyCodeForm, setShowVerifyCodeForm] = useState(false);
    const [error, setError] = useState({});

    const [token, setToken] = useState({});

    const toggleVerifyCodeForm = () => {
        setShowVerifyCodeForm(!showVerifyCodeForm);
    }

    const resetState = () => {
        setValues({ email: ''});
    }

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
  
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        const errors = validateForm(values);
        setError(errors);
    
        if (Object.keys(errors).length === 0) {
            // Proceed with form submission
            // axios.post('https://mariqueuena-api-4v21.onrender.com/forgot-password', values)
            axios.post('http://localhost:3031/forgot-password', values)

                .then(res => {
                    if (res.data.message === "Success") {
                        console.log(res);
                        // Show success message with SweetAlert
                        Swal.fire({
                            icon: 'success',
                            title: 'Code was sent successfully',
                            text: 'Please check you email!',
                        });
                        console.log("Send Token: " + res.data.token);
                        setToken(res.data.token);
                        toggleVerifyCodeForm();
                        handleClose();
                    } else {
                        console.log(res);
                        // Show error message with SweetAlert
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to send code. Please check your email input.',
                        });
                    }
                })
                .catch(error => {
                    // Show error message with SweetAlert
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An unexpected error occurred. Please try again later.',
                    });
                });
        }
    };

      const validateForm = (values) => {
        let error = {};
      
        if (!values.email) {
          error.email = 'Email is required';
        }
      
        return error;
      }

    return(
        <>
            <Modal className="modal" show={show} onHide ={() => { handleClose(); resetState(); }}>
                <Modal.Header>
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                    <ModalBody>
                        <Form className='formStyle' onSubmit={handleSubmit}>
                            <Row>
                                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                    <InputGroup>
                                    <Form.Control
                                        type="email"
                                        placeholder='Enter Email'
                                        name='email'
                                        onChange={handleInput}
                                        value = {values.email || ''}
                                        isInvalid={error.email}
                                    />
                                    <Form.Control.Feedback className= "custom-feedback" type ="invalid">{error.email}</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col className='text-center' xs={12}>
                                    <Button style={{ width: '150px' }}  id="verifyBtn" type="submit">
                                        Send Code
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
            </Modal>

            <VerifyCodeForm pToken={token} emailValue = {values.email} show={showVerifyCodeForm} handleClose={toggleVerifyCodeForm} />
        </>
    )
};

export default SendCodeForm;