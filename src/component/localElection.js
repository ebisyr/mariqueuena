import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function LocalElectionApp() {

    const candidates = [
        {
            id: 1,
            name: 'Marcy Teodoro',
            image: require('../img/marcy_1.png'),
            profileLink: '/marcyProfile',
        },
        {
            id: 2,
            name: 'Bayani Fernando',
            image: require('../img/bayani_1.png'),
            profileLink: '/bayaniProfile',
        },
        {
            id: 3,
            name: 'Stella Quimbo',
            image: require('../img/quimbo_1.png'),
            profileLink: '/quimboProfile',
        }

    ]

    return (
      <div className="homePageStyle">
        <div className="bg-candidate-list">
          <Navbar className="justify-content-between mb-0" style={{ backgroundColor: "#231099" }} sticky='top'>
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
                  className="d-inline-flex align-top"
                  alt="Comelec Logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          
          <div>
            <h1 className="mb-5" style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
                MAYORAL CANDIDATES
            </h1>
            <div className="card-container">
              {candidates.map(candidate => (
                <div key={candidate.id} className="candidate-card">
                  <div style={{ textAlign: 'center' }}>
                    <Link to={candidate.profileLink}>
                      <img src={candidate.image} alt={candidate.name} style={{ width: '120px', height: '120px', borderRadius: '20%', marginBottom: '10px' }}/>
                    </Link>
                    <p style={{ fontWeight: 'bold' }}>{candidate.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default LocalElectionApp;
