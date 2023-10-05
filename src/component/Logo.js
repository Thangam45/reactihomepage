import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/Logo.png';
import '../css/logostyle.css';

function logo() {
  return (
<>   
 <header>
    <div className='container container-flex'>
       <div className='searches'>
           <SearchIcon  className='searchicon'/>
           <input type='search' placeholder='Search here.....'></input>
       </div>
       <div>
         <div className='logoimage'>
           <img src={Logo} className='logo'/>
         </div>
       </div>
       <div className='button'>
          <button className='subscribe-btn'>SUBSCRIBE</button>
          <button className='sign-in'>SIGN IN</button>
       </div>
    </div>
  </header> 
</>      
  )
}

export default logo