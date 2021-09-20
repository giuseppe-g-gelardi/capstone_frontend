import React, { useState } from "react";
import { send } from 'emailjs-com';
import { Button, Form, Container } from 'react-bootstrap'


const EmailJsForm = () => {
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
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">



        <Form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            className='form-control'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
            />

          <input
            type='text'
            name='to_name'
            className='form-control'
            placeholder='to name'
            value={toSend.to_name}
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

          <input
            type='text'
            name='reply_to'
            className='form-control'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
            />

          <Button type='submit'>Submit</Button>
        </Form>





            
          </div>
          <div class="col-md-3"></div>
      </div>
    </Container>











      
  )
}

export default EmailJsForm;