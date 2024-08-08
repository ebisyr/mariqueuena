import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col, Modal, ModalBody, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import ResetPasswordForm from './resetPasswordForm';

const VerifyCodeForm = ({ pToken, emailValue, show, handleClose }) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const [email, setEmail] = useState({});
    const [token, setToken] = useState({});
    const [resend, setResend] = useState(1);
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
    const resetState = (newToken) => {
        setCode(["", "", "", "", "", ""]);
        setToken(newToken);
        setResend(1);
    };
    const toggleResetPasswordForm = () => {
        setShowResetPasswordForm(!showResetPasswordForm);
    }
    const handleInputCode = (index, value) => {
        const updatedCode = [...code];
        updatedCode[index] = value;
        setCode(updatedCode);

        // Move focus to the next input field
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };
    
    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && code[index] === '') {
            // Move focus to the previous input field
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (event, index) => {
        const pastedData = event.clipboardData.getData('Text');
        const pastedValues = pastedData.split('').slice(0, 6); // Extract up to 6 characters
        const updatedCode = [...code];

        // Distribute pasted values among input fields starting from the current index
        pastedValues.forEach((value, i) => {
            if (index + i < 6) {
                updatedCode[index + i] = value;
            }
        });

        setCode(updatedCode);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredCode = code.join('');

        let tokenToSend = pToken;

        if(resend == 2){
            tokenToSend = token;
        }


        // axios.post('https://mariqueuena-api-4v21.onrender.com/verify-code', { token: tokenToSend, code: enteredCode}) // Send token and entered code
        axios.post('http://localhost:3031/verify-code', { token: tokenToSend, code: enteredCode}) // Send token and entered code

          .then(res => {
            if (res.data.message === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Code Verified!',
                });
                console.log("Res Email: " + res.data.email);
                setEmail(res.data.email);
                toggleResetPasswordForm();
                handleClose();
            } else {
                // Show error message with SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Code Mismatch!',
                    text: 'Failed to verify code. Please check if your code is correct.',
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
    };

    const handleResendCode = (event) => {
        // Proceed with form submission
        // axios.post('https://mariqueuena-api-4v21.onrender.com/forgot-password', {email: emailValue})
        axios.post('http://localhost:3031/forgot-password', {email: emailValue})

            .then(res => {
                if (res.data.message === "Success") {
                    console.log(res);
                    // Show success message with SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: 'Code was resent successfully',
                        text: 'Please check you email!',
                    });
                    resetState(res.data.token);
                    setResend(2);  
                    console.log("Updated token: " + res.data.token);
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
        
    };
    return (
        <>
            <Modal className="modal" show={show} onHide={() => { handleClose(); resetState(); }}>
                <Modal.Header>
                    <Modal.Title>Verify Code</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form className='formStyle' onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formVerifyCode">
                                <Form.Label style={{ fontWeight: 'bold' }}>Enter Verification Code</Form.Label>
                                <InputGroup>
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                        <Col key={index} xs={2}>
                                            <Form.Control
                                                style={{ textAlign: 'center' }}
                                                type="text"
                                                maxLength="1"
                                                value={code[index]}
                                                onChange={(e) => handleInputCode(index, e.target.value)}
                                                onPaste={(e) => handlePaste(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                ref={(input) => (inputRefs.current[index] = input)}
                                            />
                                        </Col>
                                    ))}
                                </InputGroup>
                                <Row className="mb-3">
                                    <Col>
                                        <p onClick = {() => {handleResendCode();}} style={{
                                            cursor: 'pointer', 
                                            color: 'black', 
                                            fontSize: '12px', 
                                            marginLeft: '10px', 
                                            display: 'inline', 
                                            textAlign: 'right' 
                                            }}>
                                            Resend Code
                                        </p>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col className='text-center' xs={12}>
                                <Button style={{ width: '150px' }} id="resetBtn" type="submit">
                                    Verify Code
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
            <ResetPasswordForm emailValue= {email} show={showResetPasswordForm} handleClose={setShowResetPasswordForm}></ResetPasswordForm>
        </>
    );
};

export default VerifyCodeForm;
