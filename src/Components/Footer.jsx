import React from "react";

const today =  new Date()

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; {today.getFullYear()}
        {/*RESOURCE LINKS */}
        {/* SOCIAL NETWORK ICONS */}
      
      </p>
    </footer>
  )
}

export default Footer