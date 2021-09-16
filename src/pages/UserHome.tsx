import React from "react";

const UserHome = (props: {user: string}) => {
  
  return (
    <div>
      <h2>Welcome {props.user}</h2>
    </div>
  )
}

export default UserHome;
