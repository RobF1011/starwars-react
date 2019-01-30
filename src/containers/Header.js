import React, {Component} from 'react';
import './Header.css';
import SWLogo from'./images/Star_Wars_Logo.svg';

const Header = () => (
  
<div className="container">
  	<header>
	    <img src={SWLogo} alt="Star Wars" />
    	<h3>React demo using the Star Wars API</h3>
    </header>
</div>
  
)


export default Header;

