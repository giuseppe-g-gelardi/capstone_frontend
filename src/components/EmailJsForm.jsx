import React, { useState } from "react";
import { send } from 'emailjs-com';
import { Button, Form, Container } from 'react-bootstrap'


const EmailJsForm = (props) => {
  let user = props.user 
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
    })

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_sxlau6k',
      'template_prcmvb4',
      toSend,
      'user_TRLssI3lckfdrfsD2Jrk3'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
    })
    .catch((err) => {
      console.log('FAILED...', err)
    })
    e.target.reset() 
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (

    <Container>
      <div className="row">
          <div className="col-md-3">
            <p>when filling out this form, please make sure your email, the one you want me to reply to is correct.</p>
            <br />

          </div>

          <div className="col-md-6">



        <Form onSubmit={onSubmit}>
          <input
            name={user}
            className='form-control'
            placeholder={user}
            value={toSend.from_name}
            onChange={handleChange}
            />

          {/* <input
            type='text'
            name='to_name'
            className='form-control'
            placeholder='to name'
            value={toSend.to_name}
            onChange={handleChange}
            /> */}
          <Form.Select 
            name='to_name' 
            className='form-control' 
            value={toSend.to_name} 
            onChange={handleChange}>
              <option>Select Designer</option>
              <option key="1" value="giuseppe">Giuseppe</option>
              <option key="2" value="matt">Matt</option>
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
          <div className="col-md-3">

          <p>please give a detailed description of the keyboard you want to have designed. keep in mind submitting a request does not guarantee i will agree to design it</p>
            <br />
          <p>if i agree, i will do my best to get back to you within 24hours with the following:</p>
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
      </div>
    </Container>











      
  )
}

export default EmailJsForm;