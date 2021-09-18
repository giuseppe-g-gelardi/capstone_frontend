import jwtDecode from 'jwt-decode';
import React from 'react';
import './Footer.css'

const Footer = (props) => {
 

  let footer;

  if (props.user === '') {
    footer = (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Hello</span>
        </div>
      </footer>
    )
  } else {
    footer = (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">{props.user} has entered the fray</span>
        </div>
      </footer>
    )
  }

  return (
    <div>
        {footer}
    </div>
      
    
  )
}

export default Footer;