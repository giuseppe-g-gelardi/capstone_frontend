import React from "react";
import EmailJsForm from "../components/EmailJsForm";

const Commissions = (props) => {
  let user = props.user
  let commissionForm;

  if (props.user === '') {
    commissionForm = (
    <h1>you need to be logged in to submit a request</h1>
    )
  } else {
    commissionForm = (
      <EmailJsForm user={user}/>
    )
  }

  return (
    <div className='commissions'>
      <br />
      {commissionForm}
    </div>
  )
}

export default Commissions