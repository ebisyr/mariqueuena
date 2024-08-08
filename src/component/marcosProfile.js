import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function MarcosProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Bong Bong Marcos',
            image: require('../img/marcos_1.png'),
            description: `Ferdinand “Bongbong” Marcos Jr., 64, son and namesake of the late ousted dictator, was elected unopposed into vice gubernatorial seats in Ilocos Norte at the height of his father’s 
            regime in 1980, and eventually into congressional seats representing the same province after his family’s return to the Philippines in 1991. He also served as a senator from 2010 to 2016 before losing a bid for 
            higher office to Vice President Leni Robredo in the 2016 elections.
            <br><br>
            In at least three civil cases involving the successful recovery of the Marcos family’s ill-gotten wealth, Marcos Jr. is impleaded as a defendant. The Presidential Commission on Good Government, 
            the quasi-judicial agency tasked with recovering ill-gotten wealth accumulated by the Marcos family and its associates, 
            has so far reclaimed P174.2 billion as of March 2021 — some of which went to compensating victims of human rights abuse during the Martial Law era. Another P125.9 billion has yet to be recovered and remains under litigation. 
            <br><br>
            The commission has said that the younger Marcos barred government attempts to take back the money stolen by his family, though Marcos claims that he never possessed or even benefitted from ill-gotten wealth.
            <br><br>
            Marcos is campaigning on improving the country's pandemic response and continuing the Duterte administration's anti-insurgency campaign as well as its bloody campaign against illegal drugs but with a focus on prevention, education, and rehabilitation.
            <br><br>
            His tandem with Davao City Mayor Sara Duterte, the incumbent president's daughter, is formally backed by several other heavyweight political clans including those led by former Presidents Gloria Macapagal-Arroyo and Joseph Estrada.
            <br>`,
            
            details: `<b>Name to appear on the ballot:</b> MARCOS, BONGBONG <br>
            <b>Full Name:</b> Ferdinand “Bongbong” Romualdez Marcos Jr.<br>
            <b>Birthdate:</b> Sept. 13, 1957 (64 years old on Election day)<br>
            <b>Birthplace:</b> Sta. Mesa, Manila, Philippines<br>
            <b>Residence:</b> n/a<br>
            <b>Religion:</b> Roman Catholic<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Ferdinand Marcos Sr. (1917-1989), father</li>
                <li>Imelda Remedios Visitacion Trinidad Romualdez (1929), mother</li>
              </ol>
            <b>Siblings:</b> 
              <ol>
                <li> Maria Imelda Josefa “Imee” Romualdez Marcos</li>
                <li> Irene Romualdez Marcos-Araneta</li>
                <li> Aimee Romualdez Marcos</li>
              </ol>
            <b>Marital Status:</b>Married; Louise Cacho Araneta, Lawyer, 1993 to present
            <br><b>Children:</b>
              <ol>
                <li>Ferdinand Alexander Marcos, </li>
                <li>Joseph Simon Marcos</li>
                <li>William Vincent Marcos</li>
              </ol>`,
            advocacies: `<ul>
            <li>Limiting public release of SALNs</li>
            <li>Marcos legacy</li>
            </ul>`,
            accomplishments: `<b>ACHIEVEMENTS IN PUBLIC OFFICE</b><br>
            <ul>
              <li>TR.A. 108841 or the Balanced Housing Development program amendments</li>
              <li>R.A. 10821 or the Children’s Emergency Relief and protection act</li>
              <li>R.A. 10586 or the Anti-drunk and Drugged Driving Act of 2012</li>
              <li>R.A. 10175 or the cybercrime prevention act of 2011</li>
            </ul>`,
            platforms: `<ul>
            <li>Health and COVID-19 Pandemic; Intermanagement of the government</li>
            <li>Anti-insurgency </li>
            <li>Law and order; continuation of war on drugs</li>
            <li>Environment and climate change; forest conservation</li>
            <li>Disaster risk reduction and management; more evacuation centers and a more proactive approach</li>
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
              <Card className='mb-3'style={{ 
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
  
  export default MarcosProfileApp;