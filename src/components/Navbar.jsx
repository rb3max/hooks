import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setsearch}) => {
  
  return (
    <div className='nav'>
      <h1>Time To Watch</h1>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
      <div>
         <input onChange={(e)=>setsearch(e.target.value)} placeholder='search here' type="text" />
         <button>Add</button>
      </div>
      
    </div>
  )
}

export default Navbar
