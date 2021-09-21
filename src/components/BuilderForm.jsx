import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import BuilderSubmit from './BuilderSubmit';

const BuilderForm = () => {
  const [user, setUser] = useState({})
  const [layout, setLayout] = useState({})
  const [color, setColor] = useState({})
  const [keycap_color, setKeycap_color] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submit = async (e) => {
      e.preventDefault();
      
      const token = localStorage.getItem('token');
      const userdata = jwtDecode(token)
      const userid = userdata['user_id']
      setUser(userid)
      // console.log(user)

      const headers = {
        'Authorization': `Bearer ${token}` 
      }

      const data = {
        'layout': layout,
        'color': color,
        'keycap_color': keycap_color,
        'user': user,
      }

      const options = {
        method: 'POST',
        headers: headers,
        data: data,
        url: `http://127.0.0.1:8000/api/users/keyboards/`
      }

      try{
        console.log(options)
        axios(options).then((response) => {
          // console.log(response)
          setIsSubmitted(true)
        }, (err) => {
          console.log(err)
        })
      } catch(except) {
        console.log('im catching')
      }
  }

  return (


    <div class="container">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">



        <div>
    <div className="builderform">
      <Form onSubmit={submit}>
          <Form.Select aria-label="layout"
          onChange={e => setLayout(e.currentTarget.value)}>
            <option>Select Layout</option>
            <option key="1" value="60%">60%</option>
            <option key="2" value="TKL">TKL</option>
          </Form.Select>

          <Form.Select aria-label="color"
          onChange={e => setColor(e.currentTarget.value)}>
            <option>Keyboard Color</option>
            <option key="1" value="obsidian">Obsidian</option>
            <option key="2" value="ewhite">E-White</option>
          </Form.Select>

          <Form.Select aria-label="keycap-color"
          onChange={e => setKeycap_color(e.currentTarget.value)}>
            <option>Keycap Color!</option>
            <option key="1" value="dracula">Dracula</option>
            <option key="2" value="muted">Muted</option>
          </Form.Select>

          <Button type="submit">Submit!</Button>
        </Form>
        </div>
        <BuilderSubmit 
          submitted={isSubmitted}
          layout={layout}
          color={color}
          keycaps={keycap_color}
        />
      </div>



        </div>
        <div class="col-md-3"></div>
    </div>
    </div>





    
  )
}

export default BuilderForm
