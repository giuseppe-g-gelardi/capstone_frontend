import React from 'react';
import CommissionForm from '../components/CommissionForm';
import CommissionSubmit from '../components/CommissionSubmit';


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
      <h2>if youre interested in a custom 1:1 commission:</h2>
      <h3>fill out this form:</h3>
      <br/>
      {commissionForm}
      {/* <CommissionSubmit/> */}
    </div>
  )
}

export default Commissions;