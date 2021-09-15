import React from 'react';

const Register = () => {
  return (
    <div>

      <form>

        <h1 className="h3 mb-3 fw-normal">Register here:</h1>
              <input type="text" className="form-control"  placeholder="First Name" required />

              <input type="text" className="form-control"  placeholder="Last Name" required />


              <input type="text" className="form-control"  placeholder="Username" required />
              
              <input type="password" className="form-control"  placeholder="Password" required />

              <input type="password" className="form-control"  placeholder="Confirm Password" required />

              <input type="email" className="form-control"  placeholder="Email@example.com" required />

            
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>

    </div>
  )
}

export default Register;