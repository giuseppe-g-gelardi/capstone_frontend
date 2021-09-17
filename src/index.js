import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


reactDom.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
document.getElementById('root'))