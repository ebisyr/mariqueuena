import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';
import VerificationForm from './verificationForm';

function LandingPageApp() {
  const location = useLocation();
  const isAdmin = location.state.isAdmin;
  const userEmail = location.state.userEmail;
  const navigate = useNavigate();

  const [isAdminNotificationShown, setIsAdminNotificationShown] = useState(false);
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const [usersToVerify, setUsersToVerify] = useState([]);

  const updateUsersToVerify = (data) => {
    setUsersToVerify(data);
  };

  const toggleVerificationForm = () => {
    setShowVerificationForm(!showVerificationForm);
  }

  useEffect(() => {
    if (isAdmin && !isAdminNotificationShown) {
      // axios.post('https://mariqueuena-api-4v21.onrender.com/verify-user')
      //  axios.get('https://mariqueuena-api-4v21.onrender.com/verify-user')
       axios.get('http://localhost:3031/verify-user')
        .then(res => {
          if (res.data && res.data.length > 0) {
            updateUsersToVerify(res.data);
            Swal.fire({
              title: 'Users to Verify',
              icon: 'info',
              html: `
                <p>You have pending user verifications. Please proceed to verify them</p>
              `,
              showCancelButton: true,
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.isConfirmed) {
                toggleVerificationForm();
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Handle cancel action
                // For example, close the modal or perform another action
                Swal.fire('Action Canceled', 'Please refresh to verify users again.', 'warning');
              }
            });
          }
          setIsAdminNotificationShown(true);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [isAdmin, isAdminNotificationShown]);
  

  const handleButtonClick = (action) => {
    switch(action) {
      case 'joinQueue':
        if (isAdmin) {
          navigate('/adminQueuePage', { state: { isAdmin, userEmail } });
        } else {
          navigate('/queuePage', { state: { isAdmin, userEmail } });
        }
        break;
      case 'latestNews':
        navigate('/latestNews', { state: { isAdmin } });
        break;
      case 'electionSelect':
        navigate('/electionSelect', { state: { isAdmin } });
        break;
      case 'tipsAndTricks':
        navigate('/tipsAndTricks', { state: { isAdmin } });
        break;
      default:
        break;
    }
  };

  return(
    <>
      <div className="landingPageStyle">
        <div className="gradient-bg-landing">
          <Navbar className=" justify-content-between mb-0"  style={{backgroundColor: "#231099"}} sticky='top'>
            <Container>
              <Navbar.Brand href="/">
                <img 
                  src={require('../img/mrkna.png')}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Marikina Logo"
                />
              </Navbar.Brand>
              <div className='d-inline-block text-center text-light'> 
                <h1 className='text-xl'>MARIQUEUENA</h1>
                <h6>COMELEC MARIKINA</h6>
              </div>
              <Navbar.Brand href="/">
                <img
                  src={require('../img/comelec.png')}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Comelec Logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <div style={{height: '100px'}}>
            <h1 className="mb-4" style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
              MABUHAY! WELCOME TO MARIQUEUENA
            </h1>
          </div>
          <Container className="d-flex align-items-center justify-content-center mt-5">
  <div className="d-inline-grid text-center">
    <Button 
      className="mt-4 mb-4 w-100" // Make the button take full width
      style={{ 
        fontSize: 'xx-large', // Adjust the font size here
        backgroundColor: 'rgba(255, 215, 0, 0.57)', 
        color: '#000000', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        fontWeight: '600',
        whiteSpace: 'nowrap', // Prevent text wrapping
        height: 'fit-content'
      }} 
      onClick={() => handleButtonClick('joinQueue')}
    >
      Join Queue
    </Button>
    <Button 
      className="mt-4 mb-4 w-100" // Make the button take full width
      style={{ 
        fontSize: 'xx-large', // Adjust the font size here
        backgroundColor: 'rgba(255, 255, 255, 0.57)', 
        color: '#000000', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        fontWeight: '600',
        whiteSpace: 'nowrap', // Prevent text wrapping
        height: 'fit-content'
      }} 
      onClick={() => handleButtonClick('latestNews')}
    >
      Find out the latest news
    </Button>
    <Button 
      className="mt-4 mb-4 w-100" // Make the button take full width
      style={{ 
        fontSize: 'xx-large', // Adjust the font size here
        backgroundColor: 'rgba(255, 215, 0, 0.57)', 
        color: '#000000', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        fontWeight: '600',
        whiteSpace: 'nowrap', // Prevent text wrapping
        height: 'fit-content'
      }} 
      onClick={() => handleButtonClick('electionSelect')}
    >
      Candidates Profile
    </Button>
    <Button 
      className="mt-4 mb-4 w-100" // Make the button take full width
      style={{ 
        fontSize: 'xx-large', // Adjust the font size here
        backgroundColor: 'rgba(255, 255, 255, 0.57)', 
        color: '#000000', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '30px',
        fontWeight: '600',
        whiteSpace: 'nowrap', // Prevent text wrapping
        height: 'fit-content'
      }} 
      onClick={() => handleButtonClick('tipsAndTricks')}
    >
      Tips and Tricks
    </Button>
  </div>
</Container>


        </div>
      </div>
          <VerificationForm
            usersToVerify={usersToVerify}
            updateUsersToVerify={updateUsersToVerify}
            show={showVerificationForm}
            handleClose={setShowVerificationForm}
          />
    </>
  );
}

export default LandingPageApp;
