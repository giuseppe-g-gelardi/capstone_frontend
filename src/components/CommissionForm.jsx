import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommissionForm = () => {
  const [layout, setLayout] = useState({})
  const [color, setColor] = useState({})
  const [keycap_color, setKeycap_color] = useState({})

  const submit = async (e) => {
    e.preventDefault();

    let requestForm = {
      layout,
      color,
      keycap_color,
    }
    
    try {
      console.log('im trying!')
      console.log(requestForm)
    } catch(err) {
      console.log('im catching!')
    }
  }

    // axios.post('http://127.0.0.1:8000/api/auth/login/', {
    //   username,
    //   password,
    // }).then((response) => {
    //   localStorage.setItem('token', response.data.access)
    //   window.location.reload()
    // }, (err) => {
    //   console.log(err)
    // })

// ADD KEYS!
  return (
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
  )
}

export default CommissionForm