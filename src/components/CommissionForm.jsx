import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const CommissionForm = (props) => {
  const [user, setUser] = useState({})
  const [layout, setLayout] = useState({})
  const [color, setColor] = useState({})
  const [keycap_color, setKeycap_color] = useState({})

  const submit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    const userdata = jwtDecode(token)
    const userid = userdata['user_id']
    setUser(userid)
    console.log(user)

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
      // console.log(headers)
      // console.log(data)
      console.log(options)
      axios(options).then((response) => {
        console.log(response)
      }, (err) => {
        console.log(err)
      })
    } catch(except) {
      console.log('im catching')
    }
  }
  
  return (
    <div className="commissionform">
      <Form onSubmit={submit}>
          <Form.Select aria-label="layout"
          onChange={e => setLayout(e.currentTarget.value)}>
            <option>Select Layout</option>
            <option key="1" value="60%">60%</option>
            <option key="2" value="alice">Alice</option>
            <option key="3" value="TKL">TKL</option>
          </Form.Select>

          <Form.Select aria-label="color"
          onChange={e => setColor(e.currentTarget.value)}>
            <option>Keyboard Color</option>
            <option key="1" value="obsidian">Obsidian</option>
            <option key="2" value="ewhite">E-White</option>
            <option key="3" value="polycarb">Polycarbonate</option>
          </Form.Select>

          <Form.Select aria-label="keycap-color"
          onChange={e => setKeycap_color(e.currentTarget.value)}>
            <option>Keycap Color!</option>
            <option key="1" value="dracula">Dracula</option>
            <option key="2" value="muted">Muted</option>
            <option key="3" value="futurefunk">Future Funk</option>
          </Form.Select>

          <Button type="submit">Submit!</Button>
        </Form>

        <br />

        <p>You chose a {layout}</p>
        <p>in {color}</p>
        <p>with {keycap_color} keycaps!</p>
      </div>

  )
}

export default CommissionForm
