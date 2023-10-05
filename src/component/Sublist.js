import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Sublist.css';


function Sublist() {
  return (
   
    <nav>
    <div className='list'>
       <NavLink  to='/' className='listitems' >Fashion&LifeStyle
       </NavLink>
       <NavLink   className='listitems' >Beauty&Wellness
       </NavLink>
       <NavLink   className='listitems' >Food& Beverage
       </NavLink>
       <NavLink   className='listitems' >Customer Durables & IT
       </NavLink>
       <NavLink   className='listitems'>Entertainment
       </NavLink>
       <NavLink  className='listitems'>Home Doctor & Furnishing
       </NavLink>     
       <NavLink  className='listitems'>Speciality Retail
       </NavLink>     
    </div>
  </nav>
  )
}

export default Sublist
