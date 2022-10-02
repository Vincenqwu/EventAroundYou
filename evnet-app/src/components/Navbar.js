import "./css/Navbar.css"
import React from 'react';
import logo from "./images/SAP_2011_logo.svg.png"
import { Link } from "react-router-dom";

export function handleLogout() {
  localStorage.setItem("username", '');
  localStorage.setItem("x-access-token", '');
}


const NavBar = () => (
      <div className="bannerContainer">
        <div >
          <img className="header_image" src={logo} alt="Logo" height={40}
            />
        </div>
        <div >
          <div className="bannerLoginLogout">
          
          
            <a href= './login'>
              <button className="btn-logout" onClick = {handleLogout}>Sign In</button>
            </a>
            <a href= './future'>
            <button className="btn-profile" >Future event </button>
          </a> 
          <a href= './past'>
            <button className="btn-profile" >Past event </button>
          </a> 

          <a href= './'>
            <button className="btn-profile" >Home</button>
          </a>
          
          </div>
        </div>
      </div>
  );

export default NavBar;