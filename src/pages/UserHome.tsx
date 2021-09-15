import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const UserHome = () => {
  // const [name, setName] = useState('')
  const [user, setUser] = useState({})

  

  // const fun = () => {
  //   const jwt: any = localStorage.getItem('token');
  //   try{
  //     const user = jwtDecode(jwt)
  //     setUser({user})
  //   } catch {
  //     console.log('giuseppe is an idiot')
  //   }
  //   console.log(user)
  // }
  
  useEffect(() => {
    const token: any = localStorage.getItem('token');
    const response = axios.get('http://127.0.0.1:8000/admin/auth/user/', {
      headers: {Authorization: 'Bearer ', token}
    })
     console.log(response)
    // console.log(user)
  })

  return (
    <div>
      <h1>Welcome {}</h1>
      {/* <button onClick={fun}>click me</button> */}
    </div>
  )
}

export default UserHome;


// useEffect(() => {
  //   const jwt = localStorage.getItem('token');
  //   try{
  //     const user = jwtDecode(jwt)
  //     setUser({user})
  //   } catch {
  //     console.log('giuseppe is an idiot')
  //   }
  //   console.log(user)
  // }, [])