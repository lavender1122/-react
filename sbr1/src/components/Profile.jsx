import React from 'react'

function Profile({name,skill}) {
    const handleCilck = (event) =>{
        alert(`${skill}만땅 ${name}님 안농`)
    }
  return (
    <div
    onClick={handleCilck}
    >
        <h1>이름: {name}</h1>
        <h1>능력: {skill}</h1>
    </div>
  )
}

export default Profile