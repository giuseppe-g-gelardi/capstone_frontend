import React, { useEffect, useState, } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route} from 'react-router-dom' 
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import UserHome from './pages/UserHome';
import { Redirect } from 'react-router';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


function App() {

  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState('')


  useEffect(() => {
    getUserFromToken()
  })

  const getUserFromToken = () => {
    const token:any = localStorage.getItem('token');
    try{
      const userdata:any = jwtDecode(token)
      const userid = userdata['user_id']
      const response = axios.get(`http://127.0.0.1:8000/api/users/${userid}`, {
        headers: {Authorization: 'Bearer ' + token}
      }).then((response) => {
        // console.log(response.data)
        const user = response.data[0].first_name
        setUser(user)

      }, (err) => {
        console.log(err)
        // setRedirect(true)
      })
    } catch {
      // not sure what to put here
    }
  }

  // if (redirect) {
  //   return <Redirect to='/login' />
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation user={user}/>
      <main className="form-signin">
          <Route path='/' exact component={Home} />
          <Route path='/userhome' exact component={() => <UserHome user={user}/>} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
