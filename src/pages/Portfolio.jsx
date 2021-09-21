import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import alice60 from '../images/portfolio/alice60.png'
import am12 from '../images/portfolio/am12.PNG'
import anubis from '../images/portfolio/anubis.png'
import bolsalice from '../images/portfolio/bolsalice.png'
import bolsapad from '../images/portfolio/bolsapad.png'
import deco from '../images/portfolio/deco.PNG'
import macro from '../images/portfolio/macro.PNG'
import mild from '../images/portfolio/mild.png'
import phantom from '../images/portfolio/phantom.png'
import phantom65 from '../images/portfolio/phantom65.png'
import prime from '../images/portfolio/prime.png'

const Portfolio = () => {
  return (
    <Container id='carousel-container'>
      <div class='row'>
        <div class='1 col-md-2'></div>
        <div class='2 col-md-8'>
          <h2>Thank you for checking out my Portfolio</h2>
          <br />
          <p id='portfolio-heading-text'>
            Displaying below are some of the custom designs I've done for other
            people and maybe a crazy idea I've had along the way.
          </p>
          <br />
          <p>My rates are:</p>
          <ul>
            <li>For a personal design: $275/ hour</li>
            <ul>I will handle prototyping and ordering</ul>
            <li>For open source designs: $195/ hour</li>
            <ul>
              Once the models are released, you're free to do what you want with
              them
            </ul>
            <ul>
              Running a for profit group buy is against terms and violates the
              license agreement
            </ul>
            <li>For group buy designs: $1000 + Commission</li>
            <ul>1 - 10: $200/ unit</ul>
            <ul>11 - 50: $150/ unit</ul>
            <ul>51 - 100: $100/ unit</ul>
            <ul>101 - 200: $75/ unit</ul>
            <ul>201 - 350: $50/ unit</ul>
            <ul>351+: $25/ unit</ul>
          </ul>
        </div>
        <div class='3 col-md-2'></div>
        <div class='4 col-xs-12'>
          <Carousel interval={15000}>
            <Carousel.Item>
              <img className='d-block w-100' src={alice60} alt='First slide' />
              <Carousel.Caption>
                <h3>Calise</h3>
                <p>
                  60% Alice style board with smooth cherry lip and no macro
                  column
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={bolsalice}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>BolsAlice v2</h3>
                <p>
                  This is the 2nd revision of the Alice I designed for Bolsa
                  Keyboards. It's gasket mounted and shares many design features
                  of the midway60 including the cherry lip and exaggerated seam
                  that doubles as body alignment
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={am12} alt='Second slide' />

              <Carousel.Caption>
                <h3>Annus Mirabilis</h3>
                <p>
                  Wonderful Year, named after 2020. Part sarcasm part truth.
                  Which year was your wonderful year?
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={anubis} alt='Third slide' />

              <Carousel.Caption>
                <h3>Anubis</h3>
                <p>
                  This was my first serious keyboard design. It's so intricate
                  with seamless sides and completely non-visible, internal
                  screws that we are still prototying it. The idea was for
                  absolute perfection and thats what were going to achieve.
                  Design language was based off of a mix between a sarcophagus
                  and the backside of a Tesla Model X
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={bolsapad} alt='Third slide' />

              <Carousel.Caption>
                <h3>Bolsa Pad</h3>
                <p>
                  Bolsa Keyboards asked me to design a small macropad that can
                  be affordable so they can keep it in stock and sell without
                  having to run constant group buys. Not only did I achieve what
                  they asked for but instead went above and beyond to include an
                  OLED display and a rotary encoder.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={deco} alt='Third slide' />

              <Carousel.Caption>
                <h3>Deco</h3>
                <p>
                  This is a commission based on the Art Deco architecture of the
                  Golden Gate Bridge. The top is covered with famous Art Deco
                  patterns, the sides are sculpted like the industrial scructure
                  of the famous Golden Gate Bridge. While still a work in
                  progress, as I settle for no less than absolute perfection,
                  were pleased with the it so far.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={macro} alt='Third slide' />

              <Carousel.Caption>
                <h3>Another render the 60% alice</h3>
                <p>Why? I just felt like flexing my render skills.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={mild} alt='First slide' />
              <Carousel.Caption>
                <h3>Mild TKL Commission</h3>
                <p>
                  I'm particularly proud of this one as this was the first
                  design I did for someone else. Standard TKL layout, low angle,
                  O-ring mounted.The person I made this for just finished
                  running a successful 30 unit private group buy that went
                  flawlessly.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={phantom} alt='First slide' />
              <Carousel.Caption>
                <h3>Another shot of Annus Mirabilis</h3>
                <p>
                  It turns out, GMK Phantom looks good on just about everything.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={phantom65}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>Bolsa65%</h3>
                <p>
                  Another board I designed for Bolsa Keyboards. This time a 65%
                  with a top right blocker and similar design features to
                  midway60. We're excited for this one!
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src={prime} alt='First slide' />
              <Carousel.Caption>
                <h3>My take on a Prime_E(lise)</h3>
                <p>
                  A prime_E is a 40% ergonomic keyboard based off the popular
                  Alice/EM7 layout. I took the base layout and added an OLED
                  display with indicator lights, gasket mounting and more
                  intricate styling.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Container>
  )
}

export default Portfolio
