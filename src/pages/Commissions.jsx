import React from 'react'
import EmailJsForm from '../components/EmailJsForm'
import { Image } from 'react-bootstrap'
import phantom from '../images/portfolio/phantom.png'

const Commissions = props => {
  let user = props.user
  let commissionForm

  if (props.user === '') {
    commissionForm = (
      <div class='container'>
        <div class='row'>
          <div class='col-md-3'></div>
          <div class='col-md-6'>
            <h1>Sorry!</h1>
            <p>You need to be logged in to submit a commission request</p>
            <br />
          </div>
          <div class='col-md-3'></div>
        </div>
        <div class='row'>
          <div class='col-sx-12'>
            <Image src={phantom} fluid />
          </div>
        </div>
      </div>
    )
  } else {
    commissionForm = <EmailJsForm user={user} />
  }

  return (
    <div className='commissions'>
      <br />
      {commissionForm}
    </div>
  )
}

export default Commissions
