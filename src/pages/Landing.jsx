import React, { useState } from 'react';
import { Redirect } from 'react-router';


const Landing = () => {
  const [redirect, setRedirect] = useState(false)


  
  if (redirect) {
    return <Redirect to='/userhome'/>
  }

  return (
    <div className='landing'>
      <h1>landing page</h1>
      <button onClick={e => setRedirect(true)}>Enter</button>
    </div>
  )
}

export default Landing