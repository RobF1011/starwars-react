import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import errorImg from'../images/sw-error.gif';

const FourOhFourPage = () => (
	<section id="error">
    <h1>404</h1>
    <h3>This page does not exist!</h3>
    <img src={errorImg} alt="error" />
    <Link to="/"><button>Return Home</button></Link>
  </section> 
)

export default FourOhFourPage;