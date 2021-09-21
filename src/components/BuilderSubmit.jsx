import React from 'react';
import { Image } from 'react-bootstrap';


const BuilderSubmit = (props) => {

  


  if (props.submitted === true) {
    return (
      <>
        <p>
          you chose an {props.color} {props.layout} with {props.keycaps} keycaps! <br/>Press "Submit!" to save.
        </p>
      </>
    )
  } else {
      return (
        <></>
      )
  }
}

export default BuilderSubmit


