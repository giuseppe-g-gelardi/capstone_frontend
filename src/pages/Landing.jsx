import React, { useState } from 'react';
import { Redirect } from 'react-router';
// import landing from '../images/landing.png';
import midway from '../images/midway.jpg'
import { Card, Button } from 'react-bootstrap';

const Landing = () => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to='/home'/>
  }

  return (

    <Card className="bg-dark text-white">
    <Card.Img src={midway} />
    <Card.ImgOverlay>
      <Card.Title id="landing-title">Elevate your workspace...</Card.Title>
      <Card.Text id="landing-text">
        A custom bespoke mechanical keyboard will help your fingers avoid fatigue during prolonged typing sessions. 
      </Card.Text>
      <Button id="enter-button" onClick={e => setRedirect(true)}>Enter</Button>
      
    </Card.ImgOverlay>
  </Card>
    
  )
}

export default Landing