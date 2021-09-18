import React from "react";

const UserHome = (props) => {
  let greeting;

  if (props.user === '') {
    greeting = (
      <h2>Hello!</h2>
    )
  } else {
    greeting = (
      <h2>Welcome back, {props.user}</h2>
    )
  }
  
  return (
    <div>
      {greeting}
    </div>
  )
}

export default UserHome;