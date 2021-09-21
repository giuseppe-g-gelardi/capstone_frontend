import React, { useState } from 'react'
import { Redirect } from 'react-router'
// import landing from '../images/landing.png';
import midway from '../images/midway.jpg'
import { Button, Container } from 'react-bootstrap'

const Landing = () => {
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to='/portfolio' />
  }

  return (
    <Container
      id='landing-div'
      class='landing-image'
      style={{
        backgroundImage: 'url(' + midway + ')',
        backgroundSize: 'cover',
        height: '100vh',
        color: '#f5f5f5'
      }}
    >
      <h1 id='landing-heading'>Elevate your workspace...</h1>
      <p id='landing-text'>
        As developers we know what it feels like when our fingers get tired
        during prolonged typing sessions. <br />
        The reliability and feel of a bespoke custom mechanical keyboard will
        provide a truly comfortable typing experience...
        <br />
        ...without the fatigue
      </p>

      <Button id='enter-button' variant='info' onClick={e => setRedirect(true)}>
        {' '}
        Enter{' '}
      </Button>
    </Container>
  )
}

export default Landing
