import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function BayaniProfileApp() {

    const candidates = [
        {
            id: 1,
            name: 'Bayani Fernando',
            image: require('../img/bayani_1.png'),
            description: `Bayani Flores Fernando,  was a Filipino politician, businessman, and professional mechanical engineer who served as the representative for 
            Marikina's 1st congressional district from 2016 to 2022. The son of a former Marikina mayor, Gil Fernando, he served as the ninth mayor of Marikina from 1992 to 2001, 
            leaving the office having transformed the city from a former municipality to a model Philippine city. He was also a vice-presidential candidate for the 2010 election.
            <br>
            Fernando founded the construction company BF Corporation after graduating from college at the Mapúa Institute of Technology in the late 1960s, and was its head for more 
            than 20 years. BF Corporation was the main contractor for Rufino Pacific Tower and Edsa Shangri-La, Manila, and still continues to be involved in other construction 
            undertakings, including infrastructure-related projects.`,
            
            details: `<b>Name to appear on the ballot:</b> FERNANDO, BAYANI <br>
            <b>Full Name:</b> Bayani Flores Fernando<br>
            <b>Birthdate:</b>  July 25, 1946<br>
            <b>Birthplace:</b> San Juan del Monte, Rizal (now San Juan, Metro Manila), Philippines<br>
            <b>Residence:</b> Marikina<br>
            <b>Languages Spoken:</b> Filipino, English<br>
            <b>Parents:</b>
              <ol>
                <li>Gil Fernando, father</li>
                <li>Remedios Flores, mother</li>
              </ol>
            <b>Marital Status:</b>Married; Marides Carlos
            <br><b>Children:</b>
              <ol>
                <li>Tala Fernando </li>
              </ol>`,
            advocacies: `<b>LEGISTAIVE PORTFOLIO</b>
            <br>
            <b> MAYOR OF MARIKINA (1992-2001)</b>
            <br>
            Fernando first ran for mayor of the municipality of Marikina in 1988, finishing in fourth place among seven candidates. In 1992, he was elected mayor of Marikina. His administration
             as mayor transformed the former municipality into one of the best-managed cities and a paradigm of responsive and effective governance. His term saw the transformation of Marikina from 
             a 4th class municipality to a model Philippine city accorded with 55 citations and distinctions. He was re-elected mayor twice, serving until 2001. He was succeeded by his wife, 
             Marides Fernando.

            <br>
            <b>MMDA CHAIRMAN (2002-2009)</b>
            <br><br>
            In 2002, Fernando was appointed Chairman of the Metropolitan Manila Development Authority by President Gloria Macapagal Arroyo, directing him to duplicate his transformation work in 
            Marikina, but for the entire Metro Manila. He gained polarized public reactions to his strict style of governance.
            <br>
            Fernando briefly served as Secretary of the Department of Public Works and Highways (DPWH) from January 15, 2003, until April 15, 2003.
            <br>
            For his work as chairman, he was conferred the Doctor of Humanities, Honoris Causa, Ateneo de Cagayan, The Outstanding Filipino (TOFIL) Award for Government Service, 
            the H.R Reyes Academic Medallion of Honor, Central Colleges of the Philippines and Doctor of the Public Administration, Honoris Causa by the Polytechnic University of the Philippines.
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
                  <Card.Text dangerouslySetInnerHTML={{ __html: candidate.advocacies}} />
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
  
  export default BayaniProfileApp;