import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function IskoProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Isko Moreno',
            image: require('../img/isko_1.png'),
            description: `Francisco "Isko Moreno" Domagoso is the incumbent mayor of the City of Manila. After serving as the capital city's vice mayor from 2007 to 2016, he ran for senator but failed to secure a seat. He was then appointed by 
            President Rodrigo Duterte as chairman of the board of the North Luzon Railways Corporation and later, undersecretary at the Department of Social Welfare and Development.
            <br><br>
            Since taking office, Domagoso has focused on improving public health and school facilities and providing low-cost housing for the urban poor, along with beautification and tourism projects across the city. Most recently, 
            he has spearheaded Manila's pandemic response which includes mitigation, vaccination, and assistance programs along with giving out free medicine and testing services even for non-residents of the city .
            <br><br>
            Similar to Duterte in 2016, Moreno is campaigning on a platform of "duplicating" his local projects on a national level. These projects include socialized housing, modernized public school education and continuing the administration's anti-drug campaign.
            <br>
           `,
            
            details: `<b>Name to appear on the ballot:</b> DOMAGOSO, ISKO MORENO<br>
            <b>Full Name:</b> Francisco “Isko” Moreno Domagoso<br>
            <b>Birthdate:</b> October 24, 1974 (47 years old on election day)<br>
            <b>Birthplace:</b> Tondo, Manila<br>
            <b>Residence:</b> Quezon City Reception House<br>
            <b>Religion:</b> <br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Joaquin Domagoso (1930–1995), Father</li>
                <li>Rosario Moreno (1946–2020), Mother</li>
              </ol>
            <b>Siblings:</b> n/a <br>
            <b>Marital Status:</b>  Married, Diana Lynn Ditan, private businesswoman
            <br><b>Children:</b>
              <ol>
                <li>Vincent Patrick Domagoso</li>
                <li>Frances Diane Domagoso</li>
                <li>Joaguin Andre Domagoso</li>
                <li>Franco Dylan Domagoso</li>
                <li>Drake Marcus Domagoso</li>
              </ol>`,
            advocacies: `<ul>
            <li>Low-cost housing in the city of Manila </li>
            </ul>`,
            accomplishments: `<b>ACHIEVEMENTS AS A MAYOR: </b><br>
            <ul>
              <li>Oversees Manila’s COVID-19 pandemic response</li>
              <li>City beautification project</li>
              <li>Thrust toward low-cost housing in slum areas</li>
              <li>Improvement of health facilities</li>
              <li>Support for education/li>
              <li>Ayuda such as benefits under ordinance number 8565</li>
            </ul>`,
            platforms: `<ul>
            <li>Public infrastructure for basic needs, social services, and health</li>
            <li>COVID-19 response; vaccine hesitancy </li>
            <li>Countryside development and construction of tourism circuit</li>
            <li>Education in far-flung areas</li>
            <li>Peace and order </li>
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
                <Card.Body className='mb-4' >
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
  
  export default IskoProfileApp;