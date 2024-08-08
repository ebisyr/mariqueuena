import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

function LatestNewsApp() {
    const handleCardClick = (link) => {
        window.location.href = link;
      };

  return(
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
                MABUHAY! PLEASE SELECT ONE
            </h1>
        </div>
        <Container className="d-flex align-items-center justify-content-center mt-5">
          <Row>
            <Col>
              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(35, 16, 153, 1)', 
                color: '#FFFFFF', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px' 
              }} onClick={() => handleCardClick('https://ph.rappler.com/elections/2022/races/president-vice-president/results')}>
                <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                  <Card.Title style={{fontSize: '2em'}}>NATIONAL ELECTIONS</Card.Title>
                </Card.Body>
              </Card>
              <Card className="mt-4 mb-4" style={{ 
                backgroundColor: 'rgba(35, 16, 153, 1)', 
                color: '#FFFFFF', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxWidth: '350px',
                maxHeight: '120px',
                width: '100%',
                height:'100%',
                margin: '0 auto',
                padding: '30px' 
              }} onClick={() => handleCardClick('https://ph.rappler.com/elections/2022/ncr-marikina-city')}>
                <Card.Body className='text-center' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                  <Card.Title style={{fontSize: '2em'}}>LOCAL ELECTIONS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LatestNewsApp;
