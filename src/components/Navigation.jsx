import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { VscGithub } from 'react-icons/vsc'
import { GrInstagram } from 'react-icons/gr'

const Navigation = props => {
  const [redirect, setRedirect] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  let menu

  if (props.user === '') {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <a href='https://github.com/giuseppe-g-gelardi' className='nav-link'>
            {' '}
            <VscGithub />
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.instagram.com/n_rdyyy/' className='nav-link'>
            {' '}
            <GrInstagram />
          </a>
        </li>

        <li className='nav-item active'>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            Register
          </Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <a href='https://github.com/giuseppe-g-gelardi' className='nav-link'>
            {' '}
            <VscGithub />
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.instagram.com/n_rdyyy/' className='nav-link'>
            {' '}
            <GrInstagram />
          </a>
        </li>

        <li className='nav-item active'>
          <Link
            to='/login'
            className='nav-link'
            onClick={() => {
              logout()
              setRedirect(false)
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    )
  }

  if (redirect) {
    return <Redirect to='/home' />
  }

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light mb-4'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Link to='/' className='navbar-brand'>
            Hello...
          </Link>

          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='/portfolio' className='nav-link'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/builder' className='nav-link'>
                Builder (beta)
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/commissions' className='nav-link'>
                Commissions
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/inventory' className='nav-link'>
                Inventory
              </Link>
            </li>
          </ul>
        </div>

        <div>{menu}</div>
      </div>
    </nav>
  )
}

export default Navigation
