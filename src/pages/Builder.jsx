import React from 'react';
import BuilderForm from '../components/BuilderForm';

const Builder = (props) => {


  let builderForm;

  if (props.user === '') {
    builderForm = (
      <h1>You need to be logged in to submit a request!</h1>
    )
  } else {
    builderForm = (
      <BuilderForm />
    )
  }

  return (
    <div>
      <h2>if youre interested in a custom 1:1 commission:</h2>
      <h3>fill out this form:</h3>
      <br/>
      {builderForm}
    </div>
  )
}

export default Builder;