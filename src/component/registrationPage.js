import React, { useState} from 'react';
import { Form, Button, Row, Col, Modal, ModalBody } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import BasicInfoForm from './basicInfoForm';
import PasswordForm from './PasswordForm';

function RegistrationPage({ show, handleClose }) {

    const [errors, setErrors] = useState({});
    const [file,setFile] = useState();

    const [currentPage, setCurrentPage] = useState(1); // Track current page (1 for basic info, 2 for password)
    const [values, setValues] = useState({
        fName: '',
        mInitial: '',
        lName: '',
        dateOfBirth: '',
        mNumber: '',
        email: '',
        idNumber: '',
        password: ''    
    }); // Store form values

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // Reset state when the modal is closed
    const resetState = () => { 
      setCurrentPage(1);
      setValues({});
      setErrors({});
      setFile({});
    };
    
    const handleFile = (event) => {
        console.log(event.target.files[0]); // Log the selected file
        setFile(event.target.files[0]);
    };

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const validateForm = (values, file) => {
        let errors = {};
    
        if (!values.fName) {
            errors.fName = "Missing First Name";
        } 
        if (!values.lName) {
            errors.lName = "Missing Last Name";
        }
        if (!values.dateOfBirth) {
            errors.dateOfBirth = "Missing Date of Birth";
        }
        if (!values.mNumber) {
            errors.mNumber = "Missing Mobile Number";
        } else if (values.mNumber.length > 11){
            errors.mNumber = "Mobile number must be less than 12 digits!"
        }
        if (!values.email) {
            errors.email = "Missing Email";
        }
        if (!file) {
            errors.idImage = "Missing ID Image";
        }
        if (!values.idNumber) {
            errors.idNumber = "Missing ID Number";
        }
            
        return errors;
    };
       // Password validation function
    function validatePassword(password) {
        let password_errors = [];

        // Check for at least one capital letter
        if (!/[A-Z]/.test(password)) {
            password_errors = ("Password must contain at least one capital letter.");
        }
        // Check for at least one digit
        if (!/\d/.test(password)) {
            password_errors = ("Password must contain at least one digit.");
        }
        // Check for at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            password_errors = ("Password must contain at least one lowercase letter.");
        }
        // Check for at least one special character
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            password_errors = ("Password must contain at least one special character.");
        }
        // Check for minimum length of 8 characters
        if (password.length < 8) {
            password_errors = ("Password must be at least 8 characters long.");
        }

        return password_errors;
    }
    
    const handleNext = () => {
        const validationErrors = validateForm(values, file) ;
        setErrors(validationErrors);
        
        // Check if there are validation errors
        if (Object.keys(validationErrors).length > 0) {
            // Display an error message to the user
            Swal.fire({
                icon: 'error',
                title: 'Please fill up the missing field!',
            });
        } else if(values.mNumber.length > 11) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Mobile Number!',
                text: 'Mobile number must be less than 12 digits!',
            });
        } else {
            // No validation errors, proceed to the next page
            if (currentPage === 1) {
                setCurrentPage(2);
            } else {
                setCurrentPage(1);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, value} = event.target;
        const confirmPasswordValue = values.confirmPassword;
        setConfirmPassword(confirmPasswordValue);
        const passwordValidation = validatePassword(values.password) ;
        setErrors(passwordValidation);

        let formattedValue = value;

        if(name === "dateOfBirth") {
            // Parse the received value as a Date object
            const dateObject = new Date(value);
            // Check if the dateObject is a valid Date
            if (!isNaN(dateObject.getTime())) {
                // Format the date as YYYY/MM/DD
                const year = dateObject.getFullYear();
                const month = String(dateObject.getMonth() + 1).padStart(2, '0');
                const day = String(dateObject.getDate()).padStart(2, '0');
                formattedValue = `${year}/${month}/${day}`;
            }
    
        }

        setValues({
            ...values,
            [name]: formattedValue,
        });

        // Check if passwords match
        if (values.password && confirmPasswordValue !== values.password) {
            setPasswordError('Passwords do not match.');
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: 'Passwords do not match.',
            });

        } else if (Object.keys(passwordValidation).length > 0) { 
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: passwordValidation
            });
        } else {
            // Creation of the ID information
            const formData = new FormData();
            formData.append('email', values.email);
            formData.append('idType', values.idType);
            formData.append('idImage', file);
            formData.append('idNumber', values.idNumber);
            console.log(formData);

            // Submit the Basic Info Form
            // axios.post('https://mariqueuena-api-4v21.onrender.com/registrationPage', values)
            axios.post('http://localhost:3031/registrationPage', values)

            .then(response => {
                // Check for errors in the response
                if (response.data.error) {
                    // Show error message if registration fails
                    Swal.fire({
                        icon: "error",
                        title: "Registration Error",
                        text: response.data.error,
                    });
                } else {
                    // Basic info form submitted successfully, now upload the image
                    // axios.post('https://mariqueuena-api-4v21.onrender.com/upload', formData)
                    axios.post('http://localhost:3031/upload', formData)

                        .then(uploadResponse => {
                            // Check for errors in image upload response
                            if (uploadResponse.data.error) {
                                // Show error message if image upload fails
                                Swal.fire({
                                    icon: "error",
                                    title: "Image Upload Error",
                                    text: uploadResponse.data.error,
                                });
                            } else {
                                // Both basic info form and image upload successful
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success!',
                                    text: 'You may now login',
                                });
                                handleClose(); // Close modal or perform other actions
                                resetState();
                            }
                        })
                        .catch(uploadError => {
                            // Handle errors during image upload
                            console.error("Image upload error:", uploadError);
                            Swal.fire({
                                icon: "error",
                                title: "Image Upload Error",
                                text: "An error occurred during image upload.",
                            });
                        });
                }
            })
            .catch(error => {
                // Handle errors during basic info form submission
                console.error("Basic info form submission error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Registration Error",
                    text: "An error occurred during registration.",
                });
            });
        }
      };

    return (
        <Modal className="modal" show={show} onHide={() => { handleClose(); resetState();}}>
            <Modal.Header> 
                <Modal.Title>{currentPage === 1 ? 'Basic Information' : 'Create Password'}</Modal.Title>
            </Modal.Header>
            <ModalBody>
                {currentPage === 1 ? (
                    <BasicInfoForm values={values} handleInput={handleInput} handleFile={handleFile} errors={errors}/>
                ) : (
                    <PasswordForm values={values} handleInput={handleInput} />
                )}
                <Row>
                    <Col className='text-center' xs={12}>
                        <Form.Group>
                            {currentPage === 2 && (
                                <Button className="m-3" style={{ width: '150px' }} variant="primary" onClick={handleNext}>
                                    Back
                                </Button>
                            )}
                            <Button style={{ width: '150px' }} variant="primary" onClick={currentPage === 1 ? handleNext : handleSubmit}>
                                {currentPage === 1 ? 'Next' : 'Submit'}
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
}

export default RegistrationPage;
