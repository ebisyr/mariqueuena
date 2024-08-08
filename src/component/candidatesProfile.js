import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function CandidatesProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Leni Robredo',
            image: require('../img/robredo_1.png'),
            profileLink: '/leniProfile',
        },
        {
            id: 2,
            name: 'Ka Leody',
            image: require('../img/leody.png'),
            profileLink: '/leodyProfile',
        },
        {
            id: 3,
            name: 'Isko Moreno',
            image: require('../img/isko_1.png'),
            profileLink: '/iskoProfile',
        },{
            id: 4,
            name: 'Manny Pacquiao',
            image: require('../img/pacquiao_1.png'),
            profileLink: '/mannyProfile',
        },{
            id: 5,
            name: 'Ping Lacson',
            image: require('../img/lacson_1.png'),
            profileLink: '/lacsonProfile',
        },{
            id: 6,
            name: 'Bong Bong Marcos',
            image: require('../img/marcos_1.png'),
            profileLink: '/marcosProfile',
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
            <h1 className="mb-4" style={{textAlign: 'center', color: 'black', backgroundColor: 'rgb(255,255,255,0.59)', padding: '20px'}}>
                PRESIDENTIAL CANDIDATES
            </h1>
          <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center' }}>
            {candidates.map(candidate => (
                <div key={candidate.id} style={{ width: '45%',  marginBottom: '50px' }}>
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
  
  export default CandidatesProfileApp;