import React, {useEffect, useState} from 'react';
import { Form, Button, Row, Col, Modal, ModalBody } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

const VerificationForm = ({ usersToVerify, updateUsersToVerify, show, handleClose }) => {
    const [userIds, setUserIds] = useState([]);
    const [users, setUsers] = useState(usersToVerify);

    useEffect(() => {
        if (usersToVerify && usersToVerify.length > 0) {
          const ids = usersToVerify.map(user => user.id);
          // axios.post('https://mariqueuena-api-4v21.onrender.com/get-ids', { ids })
          axios.post('http://localhost:3031/get-ids', { ids })
            .then(res => {
              if (res.data.error) {
                Swal.fire({
                  icon: "error",
                  title: "Registration Error",
                  text: res.data.error,
                });
              } else {
                setUserIds(res.data);
                console.log("Users to Verify: " + usersToVerify);
                console.log("User IDs: " + userIds);
              }
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
              Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Failed to fetch user data. Please try again later.",
              });
            });

        }
      }, [show,usersToVerify, updateUsersToVerify]);

    const handleDownloadID = async (userId) => {
    try {
      
            const response = await axios.get(`http://localhost:3031/download-id/${userId}`, {
              // const response = await axios.get(`https://mariqueuena-api-4v21.onrender.com/download-id/${userId}`, {
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `id_${userId}.png`);
        document.body.appendChild(link);
        link.click();
    } catch (error) {
        console.error('Error downloading ID:', error);
        Swal.fire({
            icon: "error",
            title: "Download Error",
            text: "Failed to download ID document. Please try again later.",
        });
    }
    };

    const handleVerifyUser = async (userId) => {
        try {
          
            const response = await axios.post(`http://localhost:3031/setVerify/${userId}`);
            // const response = await axios.post(`https://mariqueuena-api-4v21.onrender.com/setVerify/${userId}`);
            // Remove the verified user from the display
            
            if(response.data.message === "Success") {
                updateUsersToVerify(prevUsersToVerify => (
                    prevUsersToVerify.filter(user => user.id !== userId)
                ));
                console.log("After: " + usersToVerify);
            } 

        } catch (error) {
          console.error('Error Validating User :', error);
          Swal.fire({
            icon: "error",
            title: "Error Validating User",
            text: "Failed to validate user. Please try again later.",
          });
        }
      };

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
                <Modal.Title>User Verification</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form className='formStyle'>
                    <Row>
                    {usersToVerify.map((user, index) => (
                        <div key={user.id}>
                            {index > 0 && <hr />} {/* Add <hr/> if it's not the first user */}
                            <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p>ID: {user.id}</p>
                                <p>First Name: {user.fname + (user.mInitial ? ' ' + user.mInitial : '')}</p>
                                <p>Last Name: {user.lname}</p>
                                {userIds && userIds.length > index && (
                                <>
                                    <p>ID Type: {userIds[index].idtype}</p>
                                    <p>ID Number: {userIds[index].idnumber}</p>
                                </>
                                )}
                            </div>
                                <div className="d-flex align-items-start flex-column">
                                    <Button style={{padding: '6px', width: '12vh'}} className="mb-5" variant="success" onClick={() => handleVerifyUser(user.id)}>Verify User</Button>
                                    {userIds && userIds.length > index && (
                                    <Button style={{padding: '6px', width: '12vh'}} className="mt-5" onClick={() => handleDownloadID(userIds[index].id)}>Download ID</Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default VerificationForm;
