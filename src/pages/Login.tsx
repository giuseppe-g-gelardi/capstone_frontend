import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router';
import Button from '@mui/material/Button'



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/auth/login/', {
      username,
      password,
    }).then((response) => {
      localStorage.setItem('token', response.data.access)
      window.location.reload()
    }, (err) => {
      console.log(err)
    })
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to='/userhome'/>
  }

  return (
    <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <input type="text" className="form-control"  placeholder="Username" required 
              onChange={e => setUsername(e.target.value)}/>
              
              <input type="password" className="form-control"  placeholder="Password" required 
              onChange={e => setPassword(e.target.value)}/>

            
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button> */}
            <Button variant="contained" type="submit">Sign in</Button>
        </form>
  )
}

export default Login;
