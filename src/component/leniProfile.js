import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function LeniProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Leni Robredo',
            image: require('../img/robredo_1.png'),
            description: `Leni Robredo, 56, is currently serving as the 14th vice president of the Philippines. Her office has garnered the highest audit rating from the Commission on Audit for three consecutive years (2018-2020) 
            and has been recognized by Malacañang for its pandemic response programs across the country.
            <br><br>
            Her flagship program as vice president, Angat Buhay, is an anti-poverty program providing and coordinating support through multiple advocacy areas, namely food security and nutrition, healthcare, public education, 
            rural development, housing, and resettlement and women empowerment. The Angat Buhay Program has mobilized at least P520 million worth of resources for the benefit of 321,000 families and 223 communities nationwide, according to the latest updates as of this writing.
            <br><br>
            Robredo has also led numerous relief operations through the Office of the Vice President. The same office manages a comprehensive COVID-19 response program that offers a range of assistance projects such as free 
            transportation services to frontliners, free teleconsultation services nationwide, handling logistics and manpower to transmit vaccine supply from the national government task force to local government units and vaccine express sites in partnership with LGUs.
            <br><br>
            She first entered public office as representative of Camarines Sur’s third congressional district in 2013, less than a year after the death of her husband, then-Interior Secretary Jesse Robredo. Prior to this, 
            Robredo worked as a lawyer with a focus on legal developmental work and providing legal assistance to marginalized clients.
            <br><br>
            In her lone term in the House of Representatives, Robredo principally authored three bills that were signed into law, including the Tax Incentives Management and Transparency Act.
            <br><br>
            If elected, Robredo says she will spend her first 100 days in office strengthening the country’s response to the coronavirus pandemic.`,
            
            details: `<b>Name to appear on the ballot:</b> ROBREDO, LENI<br>
            <b>Full Name:</b> Maria Leonor (“Leni”) Gerona Robredo<br>
            <b>Birthdate:</b> Apr. 23, 1965 (57 years old, on election day)<br>
            <b>Birthplace:</b> Naga, Camarines Sur, Philippines<br>
            <b>Residence:</b> Quezon City Reception House<br>
            <b>Religion:</b> Roman Catholic<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ul>
                <li>Antonio Gerona (1933-2013), father, former Naga City Regional Trial Court Judge</li>
                <li>Salvacion Santo Tomas (1936-2020), mother</li>
              </ul>
            <b>Siblings:</b> 
              <ul>
                <li>Antonio Gerona Jr</li>
                <li>Maria Lourdes Gerona</li>
              </ul>
            <b>Marital Status:</b> <i>Widow</i>; Jesse Robredo (former Interior Secretary and Local Government), 1958-2012
            <br><b>Children:</b>
              <ul>
                <li>Jessica Marie "Aika" Robredo</li>
                <li>Janine Patricia "Tricia" Robredo</li>
                <li>Jillian Therese Robredo</li>
              </ul>`,
            advocacies: `<ul>
            <li>free legal assistance to indigent litigants or clients</li>
            <li>improving transparency and accountability in governmental functions</li>
            <li>promoting anti-political dynasty prohibitions</li>
            <li>revision and overhaul of flagship war on drugs</li>
            </ul>`,
            accomplishments: `<b>LEGISLATIVE ACHIEVEMENTS</b><br>
            <ul>
              <li>Tax Incentives Management and Transparency Act (RA NO. 10708)</li>\
              <li>Economic and Financial Literacy Act (RA NO. 10922)</li>
            </ul>`,
            achievements: `<ul>
            <li>Angat Buhay Program</li>
            <li>COVID-19 Response, Multi-secrtoral</li>
            <li>Pandemic Relief Program</li>
            <li>Improvement of the OVP</li>
            <li>Relief Operations</li>
            </ul>`,
            platforms: `<ul>
            <li>Restore trust in the government</li>
            <li>End workplace discrimination </li>
            <li>Support the unemployed and out-of-work</li>
            <li>Boost Strength of Philippine industries</li>
            <li>Support small businesses </li>
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
            <Col key={candidate.id} className='mb-5'>
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
  
  export default LeniProfileApp;