import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <GiHamburgerMenu />
      </div>
      <div className="nav-links">
        <ul>
        <li>Home</li>
        <li>Promo Video</li>
        <li>About</li>
        <li>Guests</li>
        <li>In the Spotlight</li>
        <li>Events</li>
        <li>Tickets</li>
        <li>Accomodation</li>
        <li>Reach Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar