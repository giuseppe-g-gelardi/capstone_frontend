import React from 'react';

const BuilderSubmit = (props) => {

  if (props.submitted === true) {
    return (
      <>
        <p>
          you chose an {props.color} {props.layout} with {props.keycaps} keycaps!
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


