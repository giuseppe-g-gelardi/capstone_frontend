import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserHome = () => {
  const [name, setName] = useState('')

  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await fetch('http://127.0.0.1:8000/admin/auth/user/', {
  //         method: 'GET',
  //         headers: {'Content-Type': 'application/json'},
  //         credentials: 'include'
  //       })

  //       const content = await response.json();
  //       setName(content.name);
  //     }
  //   )();
  // })

  useEffect(() => {
    (
      async () => {
      const response = axios.get('http://127.0.0.1:8000/admin/auth/user/')
      console.log(response)
      })()
    
    // .then((response) => {localStorage.getItem('token')})
  })



  // axios.post('http://127.0.0.1:8000/api/auth/login/', {username, password,})
  // .then((response) => {localStorage.setItem('token', response.data.access)}, 
  // (err) => {console.log(err)})





  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  )
}

export default UserHome;