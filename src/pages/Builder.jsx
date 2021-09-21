import React from 'react';
import BuilderForm from '../components/BuilderForm';

const Builder = (props) => {


  let builderForm;

  if (props.user === '') {
    builderForm = (
      <h1>Please log in if you would like to submit a commission request</h1>
    )
  } else {
    builderForm = (
      <BuilderForm />
    )
  }

  return (
    <div>
      {builderForm}
    </div>
  )
}

export default Builder;