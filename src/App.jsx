import React, { useEffect, useState, } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom' 
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import UserHome from './pages/UserHome';
import Portfolio from './pages/Portfolio';
import Commissions from './pages/Commissions';
import Footer from './components/Footer';
import About from './pages/About';
import Inventory from './pages/Inventory';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    getUserFromToken()
  })

  const userToken = localStorage.getItem('token')

  const getUserFromToken = () => {
    const token = localStorage.getItem('token');
    try{
      const userdata = jwtDecode(token)
      const userid = userdata['user_id']
      axios.get(`http://127.0.0.1:8000/api/users/${userid}`, {
        headers: {Authorization: 'Bearer ' + token}
      }).then((response) => {
        const userName = response.data[0].first_name
        setUser(userName)
      }, (err) => {
        console.log(err)
      })
    } catch {
      // not sure what to put here
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation user={user}/>
      <main className="form-signin">
        <Route path='/' exact component={Home} />
        <Route path='/userhome' exact component={() => <UserHome user={user}/>} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/commissions' component={() => <Commissions token={userToken} user={user}/>} />

      </main>
      </BrowserRouter>
      <Footer user={user}/> 
    </div>
  );
}

export default App;