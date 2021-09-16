import axios from 'axios';
import React, { useEffect, useState, SyntheticEvent } from 'react';
import jwtDecode from 'jwt-decode';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import { Redirect } from 'react-router';

const UserHome = () => {
  // const [name, setName] = useState('')
  const [user, setUser] = useState({})

  // const getUserFromToken = () => {
  //   useEffect calls this function
  //   this function calls axios.get
  // }



  const fun = () => {
    const jwt: any  = localStorage.getItem('token');
    try{
      const userdata:any = jwtDecode(jwt)
      const userid = userdata['user_id']
      console.log(userdata['user_id'])
      console.log(userid)
      setUser({user})
      console.log(jwt)
    } catch {
      console.log('giuseppe is an idiot')
    }
    console.log(user)
  }
  
  
  useEffect(() => {
    const token: any = localStorage.getItem('token');
    const response = axios.get('http://127.0.0.1:8000/api/users/2', {
      headers: {Authorization: 'Bearer ' + token}
    }).then((response) => {
      console.log(response.data)
    }, (err) => {
      console.log(err)
      //redirect back to login
    })
     console.log(response)
    console.log(user)
  })

  return (
    <div>
      <h1>Welcome {}</h1>
      <button onClick={fun}>click me</button>
    </div>
  )
}

export default UserHome;
