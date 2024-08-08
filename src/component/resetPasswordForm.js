import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal, ModalBody, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import axios from 'axios';

const ResetPasswordForm = ({emailValue, show, handleClose}) =>{
    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});

    function validatePassword(password) {
        let error = [];

        // Check for at least one capital letter
        if (!/[A-Z]/.test(password)) {
            error = ("Password must contain at least one capital letter.");
        }
        // Check for at least one digit
        if (!/\d/.test(password)) {
            error = ("Password must contain at least one digit.");
        }
        // Check for at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            error = ("Password must contain at least one lowercase letter.");
        }
        // Check for at least one special character
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            error = ("Password must contain at least one special character.");
        }
        // Check for minimum length of 8 characters
        if (password.length < 8) {
            error = ("Password must be at least 8 characters long.");
        }

        return error;
    }

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let email = emailValue;
        console.log("Email: " + email);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', values.password);
        
        const confirmPasswordValue = values.confirmPassword;
        setConfirmPassword(confirmPasswordValue);
        const error = validatePassword(values.password);
        setError(error);

        if (values.password && confirmPasswordValue !== values.password) {
            setError('Passwords do not match.');
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: error,
            });

        } else if (Object.keys(error).length > 0) { 
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: error
            });
        } else{
            // axios.post('https://mariqueuena-api-4v21.onrender.com/reset-password', {email: email, password: values.password})
            axios.post('http://localhost:3031/reset-password', {email: email, password: values.password})

            .then(res => {
                if (res.data.message === "Success") {
                    Swal.fire({
                        icon: "error",
                        title: "Failed to Update!",
                        text: res.data.error
                    })
                } else{
                    Swal.fire({
                        icon: "success",
                        title: "Password Updated!",
                        text: res.data.message
                    })
                    handleClose();
                }
            })
            .catch(err =>{
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    text: err
                })
            })
        }

    }
    return(
        <Modal className="modal" show={show} onHide={() => { handleClose(); }}>
            <Modal.Header>
                <Modal.Title>Reset Password</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form className='formStyle' onSubmit={handleSubmit} >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formResetPassword">
                            <Form.Label style={{ fontWeight: 'bold' }}>Enter New Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                id='formResetPassword'
                                type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' type
                                name='password'
                                value={values.password || ''}
                                onChange={handleInput}
                                autoFocus
                            />
                            <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('password')}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Text className="text-muted">
                        <p style={{ marginBottom: '1px', marginLeft: '5px' }}>With one capital letter*</p>
                        <p style={{ marginBottom: '1px', marginLeft: '5px' }}>With one special symbol*</p>
                        <p style={{ marginBottom: '1px', marginLeft: '5px' }}>Minimum of 8 characters*</p>
                    </Form.Text>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formConfirmResetPassword">
                            <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={values.confirmPassword || ''}
                                    onChange={handleInput}
                                />
                                <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('confirmPassword')}>
                                    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                                </Button>                 
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col className='text-center' xs={12}>
                            <Button style={{ width: '150px' }} id="resetBtn" type="submit">
                                Reset Password
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    );
}
export default ResetPasswordForm;