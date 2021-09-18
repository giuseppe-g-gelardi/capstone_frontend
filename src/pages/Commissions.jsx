import React from 'react';
import CommissionForm from '../components/CommissionForm';

const Commissions = (props) => {

  let commissionForm;

  

  if (props.user === '') {
    commissionForm = (
      <h1>You need to be logged in to submit a request!</h1>
    )
  } else {
    commissionForm = (
      <CommissionForm />
    )
  }

  return (
    <div>
      <h1>if youre interested in a custom 1:1 commission:</h1>
      <h3>fill out this form:</h3>
      <br/>
      {commissionForm}
    </div>
  )
}

export default Commissions;