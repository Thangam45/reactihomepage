import React from 'react';
// import { NavLink } from 'react-router-dom';
import vector from '../images/Vector.png';
import climate from '../images/climate.png';
import '../css/navstyle.css';


function Nav() {
  return (
    <>
         <header>
         <div className="div-tgmenu-wrap">
      <div className="overlap-group">
        <div className="group">
           <img  className='text-wrapper5'src={climate} alt='No image'/>
          <div className="text-wrapper">Friday, 30 June 2023</div>
          
          <img  src={vector} alt='No image'/>
          
        </div>
        <div className="div" />
        <div className="navbar">
          <div className="text-wrapper-2">Categories</div>
          <div className="item-link-lifestyle"> Ir Prime</div>
          <div className="item-link-travel">Events</div>
          <div className="text-wrapper-3">Bookstore</div>
          <div className="item-link-NFT">Newsletter</div>
          <div className="item-link-NFT-2">Video</div>
          <div className="text-wrapper-4">Home</div>
        </div>
      </div>
    </div>
         </header>
        </>
  )
}

export default Nav