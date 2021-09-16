import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props: { user: string }) => {
  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  let menu;

  if (props.user === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link active">Login</Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link active">Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
        </li>
      </ul>
    )
  }




  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Home</Link>
          
          <div>
            {menu}            
          </div>
        </div>
      </nav>
  )
}

export default Navigation;