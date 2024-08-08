import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';
import CountDownTimer from './CountdownTimer';


const QueuePageApp = () => {

  const [peopleInLine, setPeopleInLine] = useState([]);
  const [lastQueue, setLastQueue] = useState(1);
  const [servedPerson, setServedPerson] = useState(1);
  const [userQueueNumber, setUserQueueNumber] = useState();
  const [estimatedTime, setEstimatedTime] = useState(3); // Initialize estimatedTime as an integer
  const [showReminder, setShowReminder] = useState(false);

  const location = useLocation();
  const isAdmin = location.state.isAdmin;
  const userEmail = location.state.userEmail;


  // useEffect(() => {
  //   fetchQueueInfo(); // Initial fetch
  //   const intervalId = setInterval(fetchQueueInfo, 60000); // Fetch every 5 seconds
  
  //   // Clean up the interval on component unmount to avoid memory leaks
  //   return () => clearInterval(intervalId);

  // }, []); // Empty dependency array to run only once on mount

  // useEffect(() => {
  //   // Call the function to join waiting line when the component mounts
  //   if (!isAdmin) {
  //     // Fetch the updated queue information
  //     joinWaitingLine();
  //   }
  // // }, [servedPerson]);
  // }, [userQueueNumber]);
  
  useEffect(() => {
    const fetchData = async () => {
      await joinWaitingLine();
      fetchQueueInfo();
    };
    fetchData();

    // Set interval to fetch queue information every 1 minute
    const intervalId = setInterval(() => {
      fetchQueueInfo();
    }, 10000); // 1 minute in milliseconds
  
    // Cleanup function to clear the interval when component unmounts or when dependency changes
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts
  
  useEffect(() => {
    if (userQueueNumber) {
      const newEstimatedTime = calculateEstimatedTime();
      setEstimatedTime(newEstimatedTime);
    }
  }, [userQueueNumber, peopleInLine]); // Run this effect whenever userQueueNumber or peopleInLine changes
 
  const fetchQueueInfo = async () => {
    try {
      // const queueResponse = await axios.get('https://mariqueuena-api-4v21.onrender.com/getInQueue?inQueue=1');
      const queueResponse = await axios.get('http://localhost:3031/getInQueue?inQueue=1');

      if (Array.isArray(queueResponse.data)) {
        const queue = queueResponse.data.map(user => user.queueNumber.toString());
        const sortedQueue = bubbleSort(queue);
        setPeopleInLine(sortedQueue);

        // Recalculate estimated time after updating queue information
        if (userQueueNumber) {
          const newEstimatedTime = calculateEstimatedTime(userQueueNumber);
          setEstimatedTime(newEstimatedTime);
        }
      }
    } catch (error) {
      console.error('Error fetching queue information:', error);
    }
  };

  const bubbleSort = (arr) => {
    const len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (parseInt(arr[i]) > parseInt(arr[i + 1])) {
          // Swap elements if they are in the wrong order
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  const joinWaitingLine = async () => {
    try {
      // Check if the user is already in the queue
      const checkQueueResponse = await axios.post('http://localhost:3031/checkQueueStatus', {email: userEmail});
      // const checkQueueResponse = await axios.post('https://mariqueuena-api-4v21.onrender.com/checkQueueStatus', {email: userEmail});

      if (checkQueueResponse.data.message === "Already in Queue") {
        const newUserQueueNumber = parseInt(checkQueueResponse.data.queueNumber);
        setUserQueueNumber(newUserQueueNumber);      
        // Handle case where the user is already in the queue and assigns the user's queue number
        Swal.fire({
          title: 'Already in Queue',
          icon: 'warning',
        });
        return; // Exit the function early
      }
  
      // Fetch the current queue information https://mariqueuena-api-4v21.onrender.com/
      const queueResponse = await axios.get('http://localhost:3031/getInQueue?inQueue=1');
      // const queueResponse = await axios.get('https://mariqueuena-api-4v21.onrender.com/getInQueue?inQueue=1');
      if (!Array.isArray(queueResponse.data)) {
        throw new Error('Invalid response format'); // Handle unexpected response format
      } 
      
      //Map users who are in queue.
      const updatedPeopleInLine = queueResponse.data.map(user => user.queueNumber.toString());
      setPeopleInLine(updatedPeopleInLine);

      //Map users who has a queue number
      // const numQueueRes = await axios.get('https://mariqueuena-api-4v21.onrender.com/getQueueNumbers');
      const numQueueRes = await axios.get('http://localhost:3031/getQueueNumbers');

      const assignedQueueNumbers = numQueueRes.data.map(user => parseInt(user.queueNumber, 10));

      // Calculate the user's queue number and add them to the queue
      const queueNumberPass = Math.max(...assignedQueueNumbers);
      
      console.log("Queue Number to Pass: " + queueNumberPass);
      // const addQueueResponse = await axios.post('https://mariqueuena-api-4v21.onrender.com/addQueue', { email: userEmail, number: queueNumberPass });
      const addQueueResponse = await axios.post('http://localhost:3031/addQueue', { email: userEmail, number: queueNumberPass });
      // Update the user's queue number state if the addition was successful
      if (addQueueResponse.data.message === "Success") {
        const newUserQueueNumber = parseInt(addQueueResponse.data.queueNumber);
        setUserQueueNumber(newUserQueueNumber);
        fetchQueueInfo(); // Fetch updated queue information

      } else {
        // Handle unsuccessful addition to the queue
        throw new Error('Failed to add user to the queue');
      }
    } catch (error) {
      // Handle errors gracefully
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to join the waiting line. Please try again later.',
        icon: 'error',
      });
    }
  };
   
  const calculateEstimatedTime = () => {
    const baseDuration = 3;
    const incrementPerUser = 3;
    const userPosition = peopleInLine.indexOf(userQueueNumber?.toString()) + 1; // Check if userQueueNumber is defined
    if (userPosition === 0) {
        return baseDuration; // Return base duration if there are no users in line
    }
  
    // Calculate the estimated time based on the user's position in the queue and the increment per user
    const userEstimatedTime = baseDuration + (userPosition - 1) * incrementPerUser;
  
    return Math.max(userEstimatedTime, 1); // Ensure the estimated time is always positive
  };


  //   TIMER
    // const newEstimatedTime = calculateEstimatedTime();
    // console.log("New Estimated Time after joining line:", newEstimatedTime);
    // setEstimatedTime(newEstimatedTime);
    // if (newEstimatedTime !== null && newEstimatedTime <= 3) {
    //   setShowReminder(true);
    //   console.log("Reminder will be shown.");
    // } else {
    //   console.log("Reminder will NOT be shown.");
    // }

  
  return (  
    <div className="landingPageStyle">
      <div className="gradient-bg-landing">
        <Navbar className=" justify-content-between mb-0"  style={{backgroundColor: "#231099"}}>
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
          </div>

        <Container className='d-flex align-items-center justify-content-center'>
          <Row>
            <Col className="mt-4 mb-4">
              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(255, 215, 0, 0.57)', 
                color: '#000000', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
              }}>
                <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                  <h1>Now Serving: </h1>
                    <div className="mt-2 me-4">
                      {peopleInLine[0]}
                    </div>
                    {/* <div className="mt-2 me-4">
                      There are {peopleInLine.length} persons inside the Queue.
                    </div> */}

                </Card.Body>
              </Card>
            
              {!isAdmin && (
                <div>
                  <Card className="mt-2 mb-2 " style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.57)', 
                    color: '#000000', 
                    borderRadius: '15px', 
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    padding: '30px'
                  }}>
                    <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px' }}>
                      <h1>Your Queue Number</h1>
                      <div className="mt-2 me-4">{userQueueNumber}</div>
                    </Card.Body>
                  </Card>

                  <Card className="mt-4 mb-4" style={{ 
                    backgroundColor: 'rgba(255, 215, 0, 0.57)', 
                    color: '#000000', 
                    borderRadius: '15px', 
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
                  }}>
                    <Card.Body className='text-center'>
                      <h2>From This Point:</h2>
                      <CountDownTimer peopleInLine={peopleInLine.length} estimatedTime={estimatedTime} />
                    </Card.Body>
                  </Card>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default QueuePageApp;
