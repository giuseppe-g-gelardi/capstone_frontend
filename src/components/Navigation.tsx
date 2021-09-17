import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


const Navigation = (props: { user: string }) => {
  const [redirect, setRedirect] = useState(false)


  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  let menu;

  if (props.user === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">Login</Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={() => {
            logout();
            setRedirect(false)
          }}>Logout</Link>
        </li>
      </ul>
    )
  }

  if (redirect) {
    return <Redirect to='/home'/>
  }



  return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand" >Home</Link>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/commissions" className="nav-link">Commissions</Link>
                </li>
              </ul>
            </div>
    
              <div>
                {menu}            
              </div>
          </div>
        </nav>
  )
}

export default Navigation;






// <!--the navbar-->
//     <nav id="navbar" style="background-color: #221f22" class="navbar navbar-dark navbar-expand-md fixed-top">
//         <a href="#" class="navbar-brand" id="greeting">Hello, World!?</a>
//         <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks">
//             <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navLinks">
//             <ul class="navbar-nav">
//                 <li class="nav-item">
//                     <a href="#home" class="nav-link" id="home-button">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="#about" class="nav-link" id="about-button">About Me</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="#projects" class="nav-link" id="project-button">Projects</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="#contact" class="nav-link" id="contact-button">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </nav>
// <!--the navbar-->