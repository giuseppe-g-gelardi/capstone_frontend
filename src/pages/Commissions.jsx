import React from "react";
import EmailJsForm from "../components/EmailJsForm";

const Commissions = (props) => {

  let commissionForm;

  if (props.user === '') {
    commissionForm = (
    <h1>you need to be logged in to submit a request</h1>
    )
  } else {
    commissionForm = (
      <EmailJsForm />
    )
  }

  return (
    <div className='commissions'>
      <h1>commissions request page</h1>
      <br />
      {commissionForm}
    </div>
  )
}

export default Commissions