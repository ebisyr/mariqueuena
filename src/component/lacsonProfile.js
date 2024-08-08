import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function LacsonProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Ping Lacson',
            image: require('../img/lacson_1.png'),
            description: `Ping Lacson, 73, has served in the legislative and executive branches of the government for over 40 years. He is currently serving his third term in the Senate.
            <br><br>
            Lacson has authored laws such as the controversial Anti-Terrorism Act of 2020, the Philippine Identification System Act of 2018, and the Reproductive Health Act of 2011. 
            He has long served as a watchdog on the national budget, pushing to delete pork barrel and other questionable insertions during plenary Senate debates.
            <br><br>
            Prior to becoming a lawmaker, he served as chief of the Philippine National Police from 1999 to 2001. He started his career in law enforcement in 1971 as a member of the 
            infamous Metrocom Intelligence Security Group that was responsible for the disappearances and torture of activists and critics of ousted dictator Ferdinand Marcos. Lacson 
            denies that he ever took part in the MISG's nefarious activities, maintaining that he worked on cases involving kidnap for ransom, holdups, and common crimes as a member of the unit's police branch.
            <br><br>
            He also launched a failed bid for the presidency in 2004.
            <br><br>
            If elected, Lacson vows to restore public trust in government by improving the country’s pandemic response, purging the bureaucracy of corrupt officials, and allowing local governments more autonomy.
            <br>`,
            
            details: `<b>Name to appear on the ballot:</b> LACSON, PING<br>
            <b>Full Name:</b> Panfilo “Ping” Morena Lacson<br>
            <b>Birthdate:</b> June 1, 1948 (73 years old on election day)<br>
            <b>Birthplace:</b> Imus, Cavite<br>
            <b>Residence:</b> <br>
            <b>Religion:</b> <br>
            <b>Languages Spoken:</b> Filipino, English, understands Bisaya<br>
            <b>Parents:</b>
              <ul>
                <li>Buenaventura Lacson, father, jeepney driver</li>
                <li>Maxima Morena, mother, market vendor</li>
              </ul>
            <b>Siblings:</b> 
            <b>Marital Status:</b> Married, Alice de Perio
            <br><b>Children:</b>
              <ul>
                <li>Reginald Lacson</li>
                <li>Ronald Jay Lacson</li>
                <li>Panfilo Lacson Jr.</li>
                <li>Jeric Lacson</li>
              </ul>`,
            advocacies: `<ul>
            <li>Opposition to pork barrel allocation</li>
            <li>Support for anti-political dynasty bills</li>
            <li>Newfound opposition to the death penalty </li>
            </ul>`,
            accomplishments: `<b>ACHIEVEMENTS IN PUBLIC OFFICE</b><br>
            <ul>
              <li>R.A No. 11479 or the Anti-Terrorism Act of 2020</li>
              <li>R.A 11469 or the Bayanihan to Heal as One Act of 2020 </li>
              <li>R.A No. 8049 or the Anti-Hazing Act of 2018 </li>
              <li>R.A No. 1738 or the Philippine Identification System Act of 2018 </li>
              <li>R.A 10354 or the Reproductive Health Act of 2011 </li>
              <li>R.A. No. 9485 or the Anti-Red Tape Act of 2007 </li>
              <li>R.A 11517 </li>
              <li>R.A 10349 </li>
              <li>Coordinated government efforts </li>
            </ul>`,
            platforms: `<ul>
            <li>Anti-Corruption; Budget reform</li>
            <li>Anti-insurgency</li>
            <li>Economic Recovery; support for industries</li>
            <li>Digitization; increase resources for automation in government agencies</li>
            <li>Health; COVID-19 Pandemic; Economic recovery and strengthening of Health care system </li>
            </ul>`,
        }
    ];

    return (
      <div className="homePageStyle">
        <div className="gradient-bg-candidate">
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
          
        <Container className="mt-5">
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center"> {/* Adjusted alignment to center */}
          {candidates.map(candidate => (
            <Col key={candidate.id} className='mb-4'>
                <div className="candidate-item">
                    <img src={candidate.image} alt={candidate.name} style={{width: '150px', height: '150px', borderRadius: '50%'}} className='candidate-image'/>
                    <h3 className='d-inline-block'>{candidate.name}</h3>
              <Card className='mb-3'>
                <Card.Body className='mb-4'>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.description}}/>
                </Card.Body>
              </Card>
              <Card className='mb-3' style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#FFFFFF', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'               
            }}>
                <Card.Body className='mb-4'>
                  <Card.Title>PERSONAL DETAILS</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.details}} />
                </Card.Body>
              </Card>
              <Card className='mb-3' style={{ 
              backgroundColor: 'rgba(35, 16, 153, 1)', 
              color: '#FFFFFF', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'               
            }}>
                <Card.Body className='mb-4'>
                  <Card.Title>MAJOR ADVOCACIES</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.advocacies}} />
                </Card.Body>
              </Card>
              <Card className='mb-3' style={{ 
              backgroundColor: 'rgba(35, 16, 153, 1)', 
              color: '#FFFFFF', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'               
            }}>
                <Card.Body className='mb-4'>
                  <Card.Title>ACCOMPLISHMENTS</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.accomplishments}} />
                </Card.Body>
              </Card>
              <Card className='mb-3' style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.57)', 
              color: '#FFFFFF', 
              borderRadius: '15px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'               
            }}>
                <Card.Body className='mb-4'>
                  <Card.Title>PLATFORMS</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.platforms}} />
                </Card.Body>
              </Card>
              </div>
            </Col>
          ))}
        </Row>
        </Container>
        
        </div>
      </div>
    );
}

export default LacsonProfileApp;
