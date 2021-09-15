import React, { useEffect, useState } from 'react';

const UserHome = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://127.0.0.1:8000/admin/auth/user/', {
          // method: 'POST',
          headers: {'Content-Type': 'application/json'},
          // credentials: 'include',
        })

        const content = await response.json();

        setName(content.name);
      }
    )();
  })

  return (
    <div>
      <h1>Welcome {name}</h1>
      <h2>user should = firstname</h2>
      <h3>should only see this page if registered and logged in</h3>
    </div>
  )
}

export default UserHome;