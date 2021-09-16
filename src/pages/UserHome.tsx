import axios from 'axios';
import React, { useEffect, useState, SyntheticEvent } from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router';

const UserHome = () => {
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState()


  useEffect(() => {
    getUserFromToken()
  }, [])

  const getUserFromToken = () => {
    const token: any = localStorage.getItem('token');
    try{
      const userdata:any = jwtDecode(token)
      const userid = userdata['user_id']
      const response = axios.get(`http://127.0.0.1:8000/api/users/${userid}`, {
        headers: {Authorization: 'Bearer ' + token}
      }).then((response) => {
        console.log(response.data)
        console.log(response.data[0].first_name)
        const user = response.data[0].first_name
        setUser(user)

      }, (err) => {
        console.log(err)
        //redirect back to login
        setRedirect(true)
      })
    } catch {
      // console.log(user)
    }
  }

  if (redirect) {
    return <Redirect to='/login' />
  }




  // const fun = () => {
  //   const jwt: any  = localStorage.getItem('token');
  //   try{
  //     const userdata:any = jwtDecode(jwt)
  //     const userid = userdata['user_id']
  //       // console.log(userdata['user_id'])
  //       // console.log(userid)
  //     setUser({user})
  //     // console.log(jwt)
  //   } catch {
  //     // console.log('giuseppe is an idiot')
  //   }
  //   // console.log(user)
  // }
  
  // useEffect(() => {
  //   const token: any = localStorage.getItem('token');
  //   const response = axios.get('http://127.0.0.1:8000/api/users/2', {
  //     headers: {Authorization: 'Bearer ' + token}
  //   }).then((response) => {
  //     console.log(response.data)
  //   }, (err) => {
  //     console.log(err)
  //     //redirect back to login
  //   })
  //    console.log(response)
  //   console.log(user)
  // })



  return (
    <div>
      <h1>Welcome {user}</h1>
      {/* <button onClick={fun}>click me</button> */}
    </div>
  )
}

export default UserHome;
