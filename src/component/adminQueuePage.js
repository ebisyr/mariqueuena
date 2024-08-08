import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';
import CountDownTimer from './CountdownTimer';


const AdminQueuePage = () => {
  const [peopleInLine, setPeopleInLine] = useState([]);
  const [servedPerson, setServedPerson] = useState('-');
  const [lastQueue, setLastQueue] = useState(1);
  const [userQueueNumber, setUserQueueNumber] = useState();
  const [estimatedTime, setEstimatedTime] = useState(3); // Initialize estimatedTime as an integer
  const [showReminder, setShowReminder] = useState(false);
  const [buttonStart, setButtonStart] = useState(false);
  const [buttonNext, setButtonNext] = useState(true);

  const location = useLocation();
  const isAdmin = location.state.isAdmin;
  const userEmail = location.state.userEmail;
  
  useEffect(() => {
    // if (!isAdmin) {
    //   joinWaitingLine();
    // }
    fetchQueueInfo();

    // Set interval to fetch queue information every 1 minute
    const intervalId = setInterval(() => {
      fetchQueueInfo();
    }, 10000); // 1 minute in milliseconds
  
    // Cleanup function to clear the interval when component unmounts or when dependency changes
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const startServe = async () => {
    if (peopleInLine.length > 0) {
      try {
        axios.post('http://localhost:3031/removeQueue', {queueNumber : servedPerson})
        // axios.post('https://mariqueuena-api-4v21.onrender.com/removeQueue', {queueNumber : servedPerson})
        .then(res => {

            fetchQueueInfo();
            setButtonNext(false);
            setButtonStart(true);
          });

      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    } else {
      Swal.fire({
        title: 'No Persons in Queue',
        icon: 'warning',
      });
      return '-';
    }
  };

  const resetQueue = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset queue!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://localhost:3031/resetQueue')
        // axios.post('https://mariqueuena-api-4v21.onrender.com/resetQueue')
        Swal.fire({
          title: "Reset Queue",
          text: "The queue has been reset",
          icon: "success"
        });
      }
    });
  }

  const serveNextPerson = () => {
    console.log("Number of people in line:", peopleInLine.length);
    console.log("Served Person: " + servedPerson);
    console.log("Last Queue: " + lastQueue);
    if (peopleInLine.length > 0) {
      // setServedPerson(prevServedPerson => prevServedPerson + 1);
      // axios.get('https://mariqueuena-api-4v21.onrender.com/removeQueue')
      axios.post('http://localhost:3031/removeQueue', {queueNumber : servedPerson})
      // axios.post('https://mariqueuena-api-4v21.onrender.com/removeQueue', {queueNumber : servedPerson})
      .then(res => {
        if(res.data.message === "Success"){
          if(peopleInLine.length > 0){
            setServedPerson(prevServedPerson => prevServedPerson + 1);
          }
          fetchQueueInfo();

        } else {
          setButtonNext(false);
          setButtonStart(true);
        }
      })
    } else {
      Swal.fire({
        title: 'No Persons in Queue',
        icon: 'warning',
      });
      setButtonNext(true);
      setButtonStart(false);
      setServedPerson('-')
    }
  };

  const fetchQueueInfo = async (queueNumber) => {
    try {
      console.log(userEmail);
      // Fetch queue information
      // const queueResponse = await axios.get('https://mariqueuena-api-4v21.onrender.com/getInQueue?inQueue=1');
      const queueResponse = await axios.get('http://localhost:3031/getInQueue?inQueue=1');

      // Check if the response data is an array
      if (Array.isArray(queueResponse.data)) {
        const queue = [];
        
      // Add users to the queue
      queueResponse.data.forEach(user => {
        queue.push(user.queueNumber.toString());
      });

      // Update the peopleInLine state with the queue
      const sortedQueue = bubbleSort(queue);
      setPeopleInLine(sortedQueue);

      if (sortedQueue.length === 0) {
        setServedPerson('-');
      } else {
        setServedPerson(sortedQueue[0]);
      }

      // Update the peopleInLine state with the fetched data
      // setPeopleInLine(queueResponse.data.map((user, index) => (index + 1).toString()));
      // setPeopleInLine(queueResponse.data.map(user => user.queueNumber.toString()));
      // console.log("People in Line: " + peopleInLine.length);
      // // Update the lastQueue state with the length of the fetched data
      // setLastQueue(queueResponse.data.length);
      
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
          <h1 className="mb-4" style={{fontWeight: 'bold', textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
            QUEUEING PAGE
          </h1>
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
                <Card.Body className='text-center' style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '80px', paddingRight: '80px' }}>
                  <h1>Now Serving: </h1>
                    <div className="mt-2 me-4" style={{padding: '1em'}}>
                      {servedPerson}
                    </div>
                    {/* <div className="mt-2 me-4">
                      There are {peopleInLine.length} persons inside the Queue.
                    </div> */}
                </Card.Body>
              </Card>
            
              {/* <Container className="p-2 pb-0 d-flex justify-content-center"> */}
                <div className="p-2 pb-0 d-flex flex-column align-items-center">
                    <Button style = {{padding: "20px", width: "30vh", fontSize: "2.0rem"}} id= "startBtn" size= "lg"className="mb-3" variant="primary" onClick={() => startServe()} disabled={buttonStart} >
                      Start Serving
                    </Button>
                    <Button style = {{padding: "20px", width: "30vh", fontSize: "2.0rem", marginBottom: '20px'}} id= "nextBtn" variant="primary" size= "lg"  onClick={() => serveNextPerson()} disabled={buttonNext}>
                      Serve Next
                    </Button>
                    <Button style = {{padding: "20px", width: "30vh", fontSize: "2.0rem"}} id= "resetBtn" variant="primary" size= "lg"  onClick={() => resetQueue()}>
                      Reset Queue
                    </Button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AdminQueuePage;
