import React, { useContext, useState, useEffect } from 'react';
import {Form,Button, Container, Row, Col, Modal, ModalBody, InputGroup} from 'react-bootstrap';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Validation from './loginValidation'; 
import Swal from 'sweetalert2';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import ResetPassword from './sendCodeForm';


function LoginPage({show, handleClose}) {
    // State hooks to store the values of the input fields
    const [values, setValues] = useState({
      email: '',
      password: ''
    })  

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const emailData = {
      email: values.email
    };

    const handleInput = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const toggleForgotPasswordModal = () => {
      setShowForgotPasswordModal(!showForgotPasswordModal);
    };
    
    const togglePasswordVisibility = (field) => {
      if (field === 'password') {
          setShowPassword(!showPassword);
      } else if (field === 'confirmPassword') {
          setShowConfirmPassword(!showConfirmPassword);
      }
  };
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
        // axios.post('https://mariqueuena-api-4v21.onrender.com/login', values)
        axios.post('http://localhost:3031/login', values)
        .then(res => {
          if(res.data === "Success") {
            // axios.post('https://mariqueuena-api-4v21.onrender.com/users', emailData)
            axios.post('http://localhost:3031/users', emailData)
            .then(res => {
              console.log(res);
              const isAdmin = res.data.isAdmin;
              const userEmail = values.email;
              navigate('/landingPage', { state: { isAdmin, userEmail } }); // Pass isAdmin status to landing page
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "Error getting admin info",
                text: error
              });
            })
          } else {
            Swal.fire({
              icon: "error",
              title: "Incorrect credentials",
              text: "No record existed!"
            });
          }
        })
    };

    return (
      <>
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
  
          <ModalBody>
            <Form className="formStyle" onSubmit={handleSubmit} action="">
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: 'bold' }}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder='Enter Email'
                    name='email'
                    onChange={handleInput} />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      id = 'password'
                      placeholder='Enter Password'
                      name='password'
                      onChange={handleInput} />
                    <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('password')}>
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </Button>
                  </InputGroup>
                  <Row>
                    <Col>
                      <p
                        style={{ cursor: 'pointer', color: 'blue', fontSize: '12px', marginLeft: '10px', textAlign: 'left', display: 'inline'}}
                        onClick = {() => {{toggleForgotPasswordModal(); handleClose(); }}}
                      >
                        Forgot Password?
                      </p>
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row>
                <Col className='text-center' xs={12}>
                  <Button style={{ width: '150px' }}  id="loginBtn" type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
  
        {/* ResetPassword Modal */}
        <ResetPassword show={showForgotPasswordModal} handleClose={toggleForgotPasswordModal} />
      </>
    );
  }

export default LoginPage;