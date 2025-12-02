import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import errorImg from'../images/sw-error.gif';

const ErrorPage = () => (
	<section id="error">
    <h1>ERROR</h1>
    <h3>Either the API is down or a bad request was made</h3>
    <img src={errorImg} alt="error" />
    <Link to="/"><button>Return Home</button></Link>
  </section>
);

export default ErrorPage;