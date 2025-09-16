import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react";
import Eagle from "../Assets/Eagle.jpg"

// styled in index.css

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
  <header className="header">
      <div className="header-content">
         {/* Logo + Title */}
        <div className="logo-section">
          <img src={Eagle} alt="Logo" className="logo-img" />
          <h1 className="logo-text">Bible Believers Church</h1>
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          {/* <Link to="/Sermon" onClick={() => setOpen(false)}>Sermons</Link> */}
          <Link to="/Doctrine" onClick={() => setOpen(false)}>Our Doctrine</Link>
          <Link to="/Links" onClick={() => setOpen(false)}>Other Resources {/*Links*/} </Link>
          <Link to="/Activities" onClick={() => setOpen(false)}>Activities</Link>
          <Link to="/Form" onClick={() => setOpen(false)}>Send Us A Message</Link>
          {/* <Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link> */}
          <Link to="/Testimony" onClick={() => setOpen(false)}>Testimonies</Link>
          
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </header>

    //   <header className="header">
  // <div className="header-content">
  //   <h1>Bible Believers Church</h1>
  //   <nav className="nav-links">
  //     <Link to ='/'>Home</Link>
  //     <Link to ='/Sermon'>Sermons</Link>
  //     <Link to ='/Doctrine'>Our Doctrine</Link>
  //     <Link to ='/Links'>Important Links</Link>
  //     <Link to ='/Activities'>Activities</Link>
  //     <Link to ='/Form'>Send Us A Message</Link>
  //     <Link to ='/Contact'>Contact</Link>
  //     <Link to ='/About'>About</Link>
  //   </nav>
  // </div>   
  //   </header>
  )
}

export default Header;