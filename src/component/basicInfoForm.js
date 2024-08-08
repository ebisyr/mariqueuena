import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const BasicInfoForm = ({ values, file, handleInput, handleFile, errors}) => {
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Label style={{ fontWeight: 'bold' }}>Name</Form.Label>
                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='fName'
                            placeholder='First Name'
                            type='text'
                            name='fName'
                            value={values.fName || ''}
                            onChange={handleInput}
                            isInvalid={errors.fName}
                            autoFocus
                        />
                        <label htmlFor="fName" className='label-resized'>First Name</label>
                        <Form.Control.Feedback className="custom-feedback" type="invalid">{errors.fName}</Form.Control.Feedback>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='mInitial'
                            placeholder='Middle Initial'
                            type="text"
                            name="mInitial"
                            value={values.mInitial || ''}
                            onChange={handleInput}
                        />
                        <label htmlFor="mInitial" className='label-resized'>Middle Initial</label>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Floating>
                        <Form.Control
                            id='lName'
                            placeholder='Last Name'
                            type="text"
                            name="lName"
                            value={values.lName || ''}
                            isInvalid={errors.lName}
                            onChange={handleInput}
                        />
                        <label htmlFor="lName" className='label-resized'>Last Name</label>
                        <Form.Control.Feedback type="invalid">{errors.lName}</Form.Control.Feedback>
                    </Form.Floating>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDate'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Date of Birth</Form.Label>
                    <Form.Control
                        placeholder='YYYY/MM/DD'
                        type="date"
                        name="dateOfBirth"
                        value={values.dateOfBirth || ''}
                        isInvalid={errors.dateOfBirth}
                        onChange={handleInput}
                    />
                    <Form.Control.Feedback type="invalid">{errors.dateOfBirth}</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formBasicName'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Contact Information</Form.Label>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Mobile Number'
                            type="text"
                            name="mNumber"
                            value={values.mNumber || ''}
                            isInvalid={errors.mNumber}
                            onChange={handleInput}
                        />
                        <label htmlFor="mNumber" className='label-resized'>Mobile Number</label>
                        <Form.Control.Feedback type="invalid">{errors.mNumber}</Form.Control.Feedback>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='Email'
                            type="text"
                            name="email"
                            value={values.email || ''}
                            isInvalid={errors.email}
                            onChange={handleInput}
                        />
                        <label htmlFor="email" className='label-resized'>Email Address</label>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Floating>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formValidId'>
                    <Form.Label style={{ fontWeight: 'bold' }}>Valid ID</Form.Label>
                        <Form.Select onChange={handleInput} name="idType">
                            <option>Select ID Type: </option>
                            {/* A01-23-456789 */}
                            <option value="DriverLicense">Driver's License</option>
                            {/* 0123-4567890-1 */}
                            <option value="SSS">SSS</option>
                            {/* 01-13245678-0 */}
                            <option value="PhilHealth">PhilHealth ID</option>
                            {/* P1234567A */}
                            <option value="Passport">Passport</option>
                        </Form.Select>
                    <Form.Floating>
                        <Form.Control
                            id='floatingInputCustom'
                            placeholder='ID Verification'
                            type="file"
                            name = "idImage"
                            isInvalid={errors.file}
                            onChange={handleFile}
                        />
                        <label htmlFor="idImage">ID Verification*</label>
                        <Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id='idNumber'
                            placeholder='ID Number'
                            type="text"
                            name="idNumber"
                            value={values.idNumber || ''}
                            isInvalid={errors.idNumber}
                            onChange={handleInput}
                        />
                        <label htmlFor="idNumber" className='label-resized'>ID Number</label>
                        <Form.Control.Feedback type="invalid">{errors.idNumber}</Form.Control.Feedback>
                    </Form.Floating>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default BasicInfoForm;
