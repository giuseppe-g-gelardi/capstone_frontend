import React from 'react';
import portrait from '../images/portrait.jpg'
import sniperschool from '../images/sniperschool.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';


const About = () => {
  return (
    <Container fluid="md" justify>
    <Row className="justify-content-center">
      <Col><Image src={portrait} fluid /></Col>


      <Col>
        <div id="about-right" className="col-lg-12 text-center">
          <h3>Hi! My name is Giuseppe</h3>
          <br />
          <p>I design high-end custom mechanical keyboards</p>
          <p>Currently I am transitioning to a career in web development and as you can see, CSS is the bane of my existence. Good thing I'm still really good at designing keyboards! :p</p>
        </div>
      </Col>


    </Row>
    <Row className="justify-content-center">


      <Col>
        <div id="about-left" className="col-lg-12 text-center">
          <h4>Not too long ago though...</h4>
          <br/>
          <p>... I was in the U.S. Army. I held a few positions like sniper team leader, fire-team leader and got to train new solders in arctic survival. I was also part of a special recon team that everyone was jealous of because we didn't have to shave or wear nametags. Although it was fun, I prefer programming and keyboards; it's easier on my knees</p>
        </div>
      </Col>


      <Col><Image src={sniperschool} fluid /></Col>
    </Row>
    </Container>
  )
}

export default About