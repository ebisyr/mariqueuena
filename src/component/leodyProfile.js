import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function LeodyProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Leody De Guzman',
            image: require('../img/leody.png'),
            description: `Leody de Guzman, 61, is an activist and labor leader who has pushed for policies to secure the rights and welfare of workers since 1984. He ran for senator in 2019 under the tagline "Manggagawa Naman" but failed to secure a seat. 
            He currently sits as chairperson of the Bukluran ng Manggagawang Pilipino, a socialist labor center and federation of militant trade unions.
            <br><br>
            He is running under the opposition coalition Laban ng Masa on a progressive and worker-centric platform hinged on a complete reform of the country’s political system to foster social development and eventually augment the economy.
            <br><br>
            De Guzman has vowed to challenge the interests of the rich by increasing taxes for billionaires, decreeing minimum wage, and banning contractualization, among others.
            <br><br>
            He has also said he would halve the size of the national police and military and surrender enforcers and key figures in the current administration’s war on drugs.
            <br>`,
            
            details: `<b>Name to appear on the ballot:</b> DE GUZMAN, LEODY<br>
            <b>Full Name:</b> Leodegario “Leody” Quitain De Guzman<br>
            <b>Birthdate:</b> July 25, 1959 (62 years old as of election day)<br>
            <b>Birthplace:</b> Naujan, Oriental Mindoro<br>
            <b>Residence:</b> Cainta, Rizal<br>
            <b>Religion:</b> n/a<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              n/a
              <br>
            <b>Siblings:</b> 
              n/a
              <br>
            <b>Marital Status:</b> Marieza Tolentino
            <br><b>Children:</b>
              n/a`,
            advocacies: `<ul>
            <li>Anti-Contractualization</li>
            <li>Rice tariffication law</li>
            <li>Rate hikes in utilities</li>
            <li>Abolishing NTF - ELCAC</li>
            <li>Destructive mining</li>
            </ul>`,
            accomplishments: `
            <ul>
              <li>Chairman of the Bukluran ng Manggagawang Pilipino since 2018</li>
            </ul>`,
            platforms: `<ul>
            <li>Health; Pandemic response</li>
            <li>Worker’s rights and welfare</li>
            <li>Climate; towards being more green and sustainable</li>
            <li>Security; dismantling criminal syndicates</li>
            <li>Economy; income inequality</li>
            </ul>`,
        }
    ]

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
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {candidates.map(candidate => (
            <Col key={candidate.id} className='mb-4'>
                <div className="candidate-item">
                    <img src={candidate.image} alt={candidate.name} style={{width: '150px', height: '150px', borderRadius: '50%'}} className='candidate-image'/>
                    <h3 className='d-inline-block'>{candidate.name}</h3>
              <Card className="mb-3">
                <Card.Body className='mb-4'>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.description}}/>
                </Card.Body>
              </Card>
              <Card className="mb-3" style={{ 
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
              <Card className="mb-3" style={{ 
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
              <Card className="mb-3" style={{ 
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
              <Card className="mb-3" style={{ 
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
  
  export default LeodyProfileApp;