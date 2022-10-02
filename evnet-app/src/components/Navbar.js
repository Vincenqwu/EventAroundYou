import "./css/Navbar.css"
import React from 'react';
import logo from "./images/SAP_2011_logo.svg.png"
import { Link } from "react-router-dom";

export function handleLogout() {
  localStorage.setItem("username", '');
  localStorage.setItem("x-access-token", '');
}


const NavBar = () => (
  <div class="header">
		<div >
          <img className="logo" src={logo} alt="Logo" height={60}
            />
        </div>
      <ul class="main-nav">
          <li><a href="./">Home</a></li>
          <li><a href="./past">Past event</a></li>
          <li><a href="./future">Future event</a></li>
          <li><a href="./login">Sign In</a></li>
      </ul>
	</div> 
  );

export default NavBar;