import React, { useState } from 'react'
import { send } from 'emailjs-com'
import { Button, Form } from 'react-bootstrap'

const EmailJsForm = props => {
  let user = props.user
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: ''
  })

  const onSubmit = e => {
    e.preventDefault()
    send(
      'service_sxlau6k',
      'template_prcmvb4',
      toSend,
      'user_TRLssI3lckfdrfsD2Jrk3'
    )
      .then(response => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch(err => {
        console.log('FAILED...', err)
      })
    e.target.reset()
  }

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <div class='container'>
      <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'>
          <h1>Welcome to the commission contact form</h1>
          <p>Please, please, please read before submitting</p>
        </div>
        <div class='col-md-3'></div>

        <div class='col-md-6'>
          <Form onSubmit={onSubmit}>
            <input
              name={user}
              className='form-control'
              placeholder={user}
              value={toSend.from_name}
              onChange={handleChange}
            />

            <Form.Select
              name='to_name'
              className='form-control'
              value={toSend.to_name}
              onChange={handleChange}
            >
              <option>Select Designer</option>
              <option key='1' value='giuseppe'>
                Giuseppe
              </option>
              <option key='2' value='matt'>
                Matt
              </option>
            </Form.Select>

            <input
              type='text'
              name='reply_to'
              className='form-control'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
            />

            <input
              type='text'
              name='message'
              className='form-control'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />

            <Button type='submit'>Submit</Button>
          </Form>
        </div>

        <div class='col-md-6'>
          <p>
            When filling out this form, please make sure the email you enter is
            correct. It WILL be the one I reply to
          </p>
          <br />
          <p>
            Please give a detailed description of the keyboard you want to have
            designed. If possible, include links to images, Pantones/RAL's, and
            any other detail you think might help better convey your idea.
            <br />
            <br />
            <p id='disclaimer'>
              keep in mind submitting a request does not guarantee I will agree
              to design it
            </p>
          </p>
          <br />
          <p>
            If I agree, however, I will do my best to get back to you within
            24hours with the following:
          </p>
          <ol>
            <li>
              <span>Detailed Pricing</span>
            </li>
            <li>
              <span>Estimated design time</span>
            </li>
            <li>
              <span>Estimated Production time</span>
            </li>
          </ol>
        </div>

        <div class='col-md-4'></div>
        <div class='col-md-4'></div>
        <div class='col-md-4'></div>
      </div>
    </div>
  )
}

export default EmailJsForm
