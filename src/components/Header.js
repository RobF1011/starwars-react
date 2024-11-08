import React from 'react';
import './Header.css';
import SWLogo from'../images/Star_Wars_Logo.svg';

const Header = () => (
  	<header>
	    <img src={SWLogo} alt="Star Wars" />
    	<h3>React demo using the Star Wars API</h3>
    </header>
)

export default Header;