import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function TipsAndTricksApp() {

    const tips = [
        {
            id: 1,
            eligible: `
            <br>
            <b>FOR REGULAR VOTERS:</b>
            <ul>
            <li>Filipino citizen who has never registered with the COMELEC</li>
            <li>Must be at least 18 years old on or before the upcoming elections</li>
            <li>Has been living in the Philippines for at least one year</li>
            <li>For barangay elections: Living in the barangay where they intend to vote for not less than six months prior to election day</li>
            </ul><br>`,
            sk: `
            <b>FOR SANGGUNIANG KABATAAN:</b>
            <ul>
            <li>Filipino citizen who has never registered with the COMELEC</li>
            <li>Must be at least 15 years oldm but not older than 30 years old on or before the SK Elections</li>
            <li>Has been living in the barangay for not less than six months prior to election day</li>
            </ul>`,
            registration: `<b>WHERE?</b>
            <ul>
            <li><b>Malls</b> - In 2022, the COMELEC conduected pilot testing at malls in Metro Manila, Bicol Region, 
            and Leyte Province. You can now preceed to the COMELEC registration booth in select malls after shopping or running some errands.</li>
            <li><b>Selected private establishments and church organizations</b> - If you happen to live close to these locations, you won't need to visit 
            the OEO to register.</li>
            <li><b>Government offices</b> - If you're transacting with a government office, you might as well register to vote.</li>
            <li><b>Universities</b> - If you're a student, you may be able to register at your campus.</li>
            </ul>
            <br>
            <b>WHAT TO BRING?</b>
            <ul>
            <li>Valid ID</li>
            <li>Registration Form or Form CEF-1</li>
            </ul>
            <br>
            <b>REMINDERS</b>
            <ul>
            <li>Accomplish forms ahead of time</li>
            <li>Bring all the requirements</li>
            <li>Arrive early</li>
            <li>When taking your picture you can ask to see it to check if it was captured properly</li>
            </ul>`,
            process: `<b>REGISTRATION PROCESS</b>
            <ol>
            <li>Go to the Registration Venue</li>
            <li>Bring all the requirements</li>
            <li>Arrive early</li>
            <li>When taking your picture you can ask to see it to check if it was captured properly</li>
            </ol>`,
            candidate: `<b>CHOOSING CANDIDATE</b>
            <ul>
            <li>Know everything about each candidate</li>
            <li>Scrutinize their credentials</li>
            <li>Listen with an open mind</li>
            <li>Focus on issues, not personal attacks</li>
            <li>Never vote based on popularity</li>
            <li>Analyze how they handle stress</li>
            <li>Don't fall for these so-called God-fearing politicians</li>
            <li>Listen to critics but avoid haters</li>
            <li>Vote what our country needs, not who you need</li>
            </ul>`,
            election: `<b>ELECTION DAY</b>
            <br></br>
            <b>Prepare</b>
            <ul>
            <li>Know your precint beforehand</li>
            <li>Know the candidates</li>
            <li>Prepare your list of candidates to vote</li>
            </ul>
            <b>During</b>
            <ul>
            <li>Approach the Voter's assistance desk to know your sequenced number and assigned room</li>
            <li>Shade properly</li>
            <li>Use only markers provided by the election board</li>
            <li>Avoid making unnecessary marks on the ballot</li>
            <li>Be the one to feed your ballot through the maching</li>
            <li>Double and triple-check your ballot ticket to make sure it matches your list of candidates</li>
            <li>Be sure to be the one to deposit your voter receipt in the receptacle</li>
            </ul>`,
        }
    ];

    return (
        <div className="homePageStyle">
            <div className="bg">
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

                <Container className='mt-5'>
                    <Row xs={1} md={2} lg={3} className='g-4 justify-content-center'>
                        {tips.map(tip => (
                            <Col key={tip.id} className='mb-5'>
                                <div className="tip-item">
                                    <Card className="mb-3" style={{
                                        backgroundColor: 'rgba(255, 215, 0, 0.57)',
                                        color: '#FFFFFF',
                                        borderRadius: '15px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <Card.Body className='mb-4'>
                                            <Card.Title className='text-center'>AM I ELIGIBLE TO VOTE?</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: tip.eligible }} />
                                            <Card.Text><div className='text-on-right' dangerouslySetInnerHTML={{ __html: tip.sk }} /></Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-3" style={{
                                        backgroundColor: 'rgba(35, 16, 153, 1)',
                                        color: '#FFFFFF',
                                        borderRadius: '15px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <Card.Body className='mb-4'>
                                            <Card.Title className='text-center'>REGISTRATION</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: tip.registration }} />
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-3" style={{
                                        backgroundColor: 'rgba(35, 16, 153, 1)',
                                        color: '#FFFFFF',
                                        borderRadius: '15px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <Card.Body className='mb-4'>
                                            <Card.Title className='text-center'>REGISTRATION PROCESS</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: tip.process }} />
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-3" style={{
                                        backgroundColor: 'rgba(255, 215, 0, 0.57)',
                                        color: '#FFFFFF',
                                        borderRadius: '15px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <Card.Body className='mb-4'>
                                            <Card.Title className='text-center'>CHOOSING CANDIDATE</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: tip.candidate }} />
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-3">
                                        <Card.Body className='mb-4'>
                                            <Card.Title className='text-center'>ELECTION DAY</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={{ __html: tip.election }} />
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

export default TipsAndTricksApp;
