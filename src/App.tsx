import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route} from 'react-router-dom' 
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import UserHome from './pages/UserHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <main className="form-signin">
          <Route path='/' exact component={Home} />
          <Route path='/userhome' exact component={UserHome} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
