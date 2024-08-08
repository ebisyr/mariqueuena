import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function marcyProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Marcy Teodoro',
            image: require('../img/marcy_1.png'),
            description: `Marcelino "Marcy" Reyes Teodoro,  was born on August 2, 1970, at a small clinic in Barangay Santa Elena, Marikina. 
            He is the only child of Amado Teodoro, a government official, and Lydia Reyes, a teacher. He spent most his childhood with his maternal grandparents 
            because both his parents were both busy with work. He completed his elementary education at San Roque Elementary School as a valedictorian in 1982 and 
            secondary education at Marikina Institute of Science and Technology as salutatorian in 1986. He graduated with a Bachelor of Arts degree in philosophy 
            at the University of the Philippines Diliman in 1990. The following semester after his graduation, at 19, he decided to delay law school and instead 
            taught logic and social philosophy at the same university. He also attended graduate studies at the Ateneo de Manila University under the program of 
            Master of Arts in Teaching Philosophy wherein he got a certificate course in 1997.`,
            
            details: `<b>Name to appear on the ballot:</b> TEODORO, MARCY <br>
            <b>Full Name:</b> Marcelino "Marcy" Reyes Teodoro<br>
            <b>Birthdate:</b> August 2, 1970<br>
            <b>Birthplace:</b> Santa Elena, Marikina, Philippines<br>
            <b>Residence:</b> Marikina<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Amado Teodoro, father</li>
                <li>Lydia Reyes, mother</li>
              </ol>
            <b>Marital Status:</b>Married; Marjorie Ann Ang
            <br><b>Children:</b>
              <ol>
                <li>Francesca Ysabela Teodoro </li>
              </ol>`,
            career: `<b>POLITICAL CAREER</b>
            <br>
            <ul>
            <li>On July 2, 2007, Teodoro initiated a bill to establish compulsory computer education for elementary and high school curricula and for other purposes.
            The bill called for the inclusion of computer education in the curriculum of public and private elementary and high schools. A day later, Teodoro authored a measure which 
            provides for free public preschool education to all qualified children in order to promote quality education in all levels.</li>
            
            <li>Teodoro was involved in the Billboard Regulation Act of 2007, which lists the prohibitions with regard to the installation of billboards and signage, to wit: a) those that 
            obstruct the view of vehicular or pedestrian traffic; b) those on posts or walls that obstruct roadways and pedestrian lanes; c) those that take the space reserved for safety and 
            informative road signs; d) those that block any rural or urban natural vista; among others.</li>
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
  
  export default marcyProfileApp;