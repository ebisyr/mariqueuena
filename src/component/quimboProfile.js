import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function QuimboProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Stella Quimbo',
            image: require('../img/quimbo_1.png'),
            description: `Stella Luz Alabastro Quimbo,  is a Filipino economist, academic, and politician who has served as the representative for Marikina's 2nd 
            congressional district since 2019 as a member of the Liberal Party. She previously served as a commissioner of the Philippine Competition Commission 
            from 2016 up until her resignation in 2019.`,
            
            details: `<b>Name to appear on the ballot:</b> QUIMBO, STELLA <br>
            <b>Full Name:</b> Stella Luz Alabastro Quimbo<br>
            <b>Birthdate:</b>  November 23, 1969<br>
            <b>Birthplace:</b> Manila, Philippines<br>
            <b>Residence:</b> Marikina<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Estrella Alabastro, mother</li>
              </ol>
            <b>Marital Status:</b>Married; Miro Quimbo
            <br><b>Children:</b> 4`,
            career: `<b>POLITICAL CAREER</b>
            <br>
            <ul>
            <li>In 2019, Quimbo was elected to represent the second district of Marikina in the House of Representatives, defeating independents Eugene de Vera and Mauro Arce to succeed her husband, 
            Miro Quimbo, as the district's representative after he was term-limited.
            </li>
            <br>
            <li>Quimbo was a member of a technical working group tasked to study the franchise renewal of ABS-CBN, the largest broadcaster in the Philippines. She was the lone dissenter against the decision of the other two members 
            Pablo John Garcia (Cebu 3rd) and Xavier Jesus Romualdo (Camiguin) to disapprove the application of ABS-CBN for another franchise.
            </li>
            <li>Quimbo is the Vice Chairperson of the Committee on Appropriations in the 19th Congress.
            </li>
            </ul>
            <br>
            <b>MAYOR OF MARIKINA</b>
            <br><br>
            Teodoro was elected Mayor of Marikina in 2016, defeating incumbent Mayor Del de Guzman. He was reelected in 2019.
            <br>
            During the COVID-19 pandemic, Teodoro's government was lauded for its response, particularly for the establishment of a testing facility for health workers and suspected patients.
            `,
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
                  <Card.Title>POLITICAL CAREER</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.career}} />
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
  
  export default QuimboProfileApp;