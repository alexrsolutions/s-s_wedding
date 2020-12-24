import React, { useState } from 'react';
import './Home.css';
import NavigationBar from '../components/NavigationBar';
import { Container, Jumbotron, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { Section } from 'react-scroll-section';

const Home: React.FC = (props) => {

    const [rSelected, setRSelected] = useState(Number);

    return (
        <div>
            <Section id="home">
                <div className="homebases">
                    <NavigationBar/>
                    <div className="vertical-center">
                        <Jumbotron style={{ backgroundColor: 'transparent'}} fluid>
                            <Container fluid>
                                <h1 className="display-2" style={{ color: '#ffffff' }}>SALVADOR & SONIA</h1>
                                <p className="lead" style={{ color: '#ffffff' }}>MARCH 5TH - BROWNSVILLE, TEXAS</p>
                            </Container>
                        </Jumbotron>
                    </div>
                </div>
            </Section>
            <Section id="our-story">
                <div className="join">
                    <div className="join-container">
                        <Container>
                            <h1 className="display-4">JOIN SALVADOR & SONIA ON THE 6TH OF AUGUST TO CELEBRATE THEIR UNION.</h1>
                            <p className="lead">A LITTLE ABOUT THE BRIDE AND GROOM.</p>
                            <br/>
                            <Row xs="1" sm="1" md="2" style={{ margin: '15px 0px' }}>
                                <Col>
                                    <img style={{ width: '70%' }} src="/tall1.jpg" alt=""/>
                                    <br/>
                                    <p className="lead" style={{ paddingTop: '15px' }}>
                                        You have been my best friend, mentor, playmate, confidant, and my greatest challenge. But most importantly, you are the love of my life and you make me happier than I could ever imagine and more loved than I ever thought possible.
                                    </p>
                                </Col>
                                <Col>
                                    <img style={{ width: '70%' }} src="/tall2.jpg" alt=""/>
                                    <br/>
                                    <p className="lead" style={{ paddingTop: '15px' }}>
                                        I love you for your beauty, your intelligence, your kindness… and for the way you always know how to make me feel so special. So on top of all the other vows that I will make to you on our wedding day, I also vow to always appreciate how lucky I am.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Section>
            <div className="save-date">
                <div className="save-date-container">
                    <h1 className="display-3" style={{ color: '#ffffff' }}>SAVE THE DATE</h1>
                    <p className="lead" style={{ color: '#ffffff' }}>Friday March 5th - Rio Event Center details to follow</p>
                </div>
            </div>
            <Section id="wedding">
                <div className="details">
                    <div className="details-container">
                        <Container style={{ paddingBottom: '30px' }}>
                            <p className="lead">I guess you could call this a typical "boy meets girl in bar" story but with a twist! Boy buys girl a drink, girl gives boy phone number. Two months and several thousand kilometers later and said boy and girl are head over heels for each other. Fast forward to today and we're settling down in our first home ready to tie the knot.</p>
                        </Container>
                        <Container>
                            <Row xs="1" sm="2" md="2" style={{ margin: '15px 0px' }}>
                                <Col>
                                    <p className="lead">
                                        CEREMONY
                                    </p>
                                    <p className="lead">
                                        Montrose Vineyard
                                    </p>
                                    <p className="lead">
                                        2:30pm - 3:30pm
                                    </p>
                                    <p className="lead">
                                        65 Chilvers Avenue
                                    </p>
                                    <p className="lead">
                                        Flinders Ranges, Vic
                                    </p>
                                </Col>
                                <Col>
                                    <p className="lead">
                                        RECEPTION
                                    </p>
                                    <p className="lead">
                                        Montrose Vineyard
                                    </p>
                                    <p className="lead">
                                        2:30pm - 3:30pm
                                    </p>
                                    <p className="lead">
                                        65 Chilvers Avenue
                                    </p>
                                    <p className="lead">
                                        Flinders Ranges, Vic
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Section>
            <Section id="acomm">
                <div className="where">
                    <div className="where-container">
                        <h4 className="display-4" style={{ marginBottom: '50px' }}>WHERE TO STAY?</h4>
                        <Container>
                            <Row xs="1" sm="1" md="3" style={{ margin: '15px 0px' }}>
                                <Col>
                                    <img className="first-stay" alt=""/>
                                    <br/>
                                    <p className="lead" style={{ paddingTop: '15px' }}>SHERATON FLINDERS</p>
                                    <br/>
                                    <p className="lead">Mention our names when making your reservation to recieve the group booking discount.</p>
                                    <br/>
                                    <p className="lead">767 Greenvale Road</p>
                                    <p className="lead">Flinders Vic 3214</p>
                                </Col>
                                <Col>
                                    <img className="second-stay" alt=""/>
                                    <br/>
                                    <p className="lead" style={{ paddingTop: '15px' }}>SHERATON FLINDERS</p>
                                    <br/>
                                    <p className="lead">Mention our names when making your reservation to recieve the group booking discount.</p>
                                    <br/>
                                    <p className="lead">767 Greenvale Road</p>
                                    <p className="lead">Flinders Vic 3214</p>
                                </Col>
                                <Col>
                                    <img className="third-stay" alt=""/>
                                    <br/>
                                    <p className="lead" style={{ paddingTop: '15px' }}>SHERATON FLINDERS</p>
                                    <br/>
                                    <p className="lead">Mention our names when making your reservation to recieve the group booking discount.</p>
                                    <br/>
                                    <p className="lead">767 Greenvale Road</p>
                                    <p className="lead">Flinders Vic 3214</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Section>
            <Section id="registry">
                <div className="gifts">
                    <div className="where-container">
                        <h4 className="display-4" style={{ marginBottom: '50px' }}>GIVE THE GIFT OF PRESENTS</h4>
                        <Container>
                            <Row xs="1" sm="1" md="2" style={{ margin: '15px 0px' }}>
                                <Col>
                                    <img style={{ width: '80%' }} src="/amazon.png" alt=""/>
                                </Col>
                                <Col>
                                    <img style={{ width: '80%' }} src="/target.png" alt=""/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Section>
            <Section id="rsvp">
                <div className="rsvp">
                    <div className="rsvp-container">
                        <h4 className="display-4" style={{ marginBottom: '15px' }}>SAY YOU'LL BE THERE</h4>
                        <p className="lead">Please let us know if you can make it by <br/> Febuary 15th at the latest, please!</p>
                        <Container>
                            <Row xs="1" sm="1" md="3" style={{ margin: '15px 0px' }}>
                                <Col sm="12" md={{ size: 6, offset: 3 }}>
                                    <div className="form-container">
                                        <Form>
                                            <FormGroup>
                                                <Input type="text" name="names" id="names" placeholder="YOUR NAME / NAMES" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Button name="radio" style={{ margin: '10px 20px 0px 10px', padding: '15px 50px' }} color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>CAN'T WAIT</Button>
                                                <Button name="radio" style={{ margin: '10px 20px 0px 10px', padding: '15px 50px' }} color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>CAN'T COME</Button>
                                            </FormGroup>
                                            <Button style={{ margin: '15px', padding: '15px 100px' }} size="lg">RSVP</Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>  
            </Section>
            <div className="hashtag">
                <Jumbotron style={{ backgroundColor: 'transparent'}} fluid>
                    <Container fluid>
                        <div className="footer-mar">
                            <h1 className="display-3" style={{ color: '#ffffff' }}>#SALVADOR+SONIA</h1>
                            <p className="lead" style={{ color: '#ffffff' }}>SHARE THE DAY ON INSTAGRAM</p>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
            <div className="footer">
                <Container fluid>
                    <div className="footer-mar">
                        <p className="lead">&copy; COPYRIGHT 2020 ANDERAN - ALL RIGHTS RESERVED</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;