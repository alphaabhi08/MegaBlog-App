import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div><img src="./logo.png" alt="logo" style={{width:"50px", marginLeft:"30px"}} /></div>
  )
}

export default Logo