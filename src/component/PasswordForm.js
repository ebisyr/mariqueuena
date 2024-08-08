import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const PasswordForm = ({ values, handleInput }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };
    
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Group as={Col} controlId='formBasicPassword'>
                    <InputGroup>
                        <Form.Control
                            id='floatingInputCustom'
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
            </Row>

            <Form.Text className="text-muted">
                <p style={{ marginBottom: '3px' }}>With one capital letter*</p>
                <p style={{ marginBottom: '3px' }}>With one special symbol*</p>
                <p style={{ marginBottom: '3px' }}>Minimum of 8 characters*</p>
            </Form.Text>

            <Form.Group controlId="formBasicConfirmPassword" className='mb-3'>
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
            {/* Add any additional password-related fields here */}
        </Form>
    );
};

export default PasswordForm;