import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function MannyProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Manny Pacquiao',
            image: require('../img/pacquiao_1.png'),
            description: `Manny Pacquiao is a Philippine legislator who has served in both chambers of Congress since 2010. He first gained acclaim as a world-class champion boxer and juggled his careers as a public official and athlete until 2021 when he announced his retirement from the sport. 
            The boxer-turned-legislator is also a preacher and founded the church Word for Everyone Ministries International, Inc. in 2012.
            <br><br>
            Pacquiao has consistently been noted for being the top absentee among lawmakers and for penning a relatively low number of laws and bills. He principally authored the National Bible Day Act and the Handbook for OFWs Act of 2017.
            <br><br>
            Citing his religious beliefs as a born-again Christian, Pacquiao has expressed support for the LGBTQ community but not same-sex marriage. In 2016, he drew ire both locally and internationally for derogatory remarks he made about the minority group.
            <br><br>
            He previously supported the reinstatement of the death penalty for the manufacturing and trafficking of illegal drugs but, like other candidates seeking higher office, reversed his position in Nov. 2021.
            <br><br>
            Pacquiao is campaigning on ridding the country of corruption, criminality, and poverty, though he has not published any concrete policy proposals as of this writing.
            <br><br>
            He has said that religious leaders, especially from evangelical groups, will be part of his Cabinet and anti-corruption task force if elected.`,
            
            details: `<b>Name to appear on the ballot:</b> PACQUIAO, MANNY PACMAN<br>
            <b>Full Name:</b> Emmanuel “Manny” Dapidran Pacquiao Sr.<br>
            <b>Birthdate:</b> December 17, 1978 (43 years old on election day)<br>
            <b>Birthplace:</b> Kibawe, Bukidnon Province<br>
            <b>Residence:</b> General Santos City<br>
            <b>Religion:</b> Evangelical Protestantism<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Rosalio Pacquiao, father</li>
                <li>Dionisia Dapidran, mother</li>
              </ol>
            <b>Siblings:</b> 
              <ul>
                <li>Alberto “Bobby” Pacquiao</li>
              </ul>
            <b>Marital Status:</b> Married (1999 - present), Jinkee Capena Jamora
            <br><b>Children:</b>
              <ol>
                <li>Emmanuel “ Jimuel” Pacquiao Jr.</li>
                <li>Michael Stephen Pacquiao</li>
                <li>Mary Divine Grace “Princess” Pacquiao</li>
                <li>Queen Elizabeth “Queenie” Pacquiao</li>
                <li>Israel Pacquiao</li>
              </ol>`,
            advocacies: `<ul>
            <li>Reversed stand on death penalty</li>
            <li>Anti-SOGIE Equality Bill</li>
            <li>Opposition to divorce</li>
            <li>Retrieving Marcos ill-gotten wealth </li>
            </ul>`,
            accomplishments: `<b>ACHIEVEMENTS IN PUBLIC OFFICE</b><br>
            <ul>
              <li>R.A. 11592 or the LPG Industry Regulation Act</li>
              <li>R.A. 11469 or the Bayanihan to heal as one act</li>
              <li>R.A. 11163 or the National bible day act </li>
              <li>R.A. 11227 or the Handbook for OFWs act of 2018</li>
              <li>R.A. 11201 or the Department of human settlements and urban development act</li>
            </ul>
            <b>ACHIEVEMENTS IN PRIVATE SECTOR</b><br>
            <ul>
              <li>First boxer to be recognized as four-time welterweight world champion </li>
              <li>Founded word for everyone ministries international inc. (a church in general santos city)</li>
              <li>Appeared in films and TV shows in both ABS-CBN and GMA network </li>
              <li>Joined the Philippine Basketball Association (PBA) as playing coach of Kia Motors Basketball team</li>
            </ul>`,
            platforms: `<ul>
            <li>COVID-19 Pandemic; efficient response</li>
            <li>Anti-corruption</li>
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
  
  export default MannyProfileApp;