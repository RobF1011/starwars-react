import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './Main.css';
import Home from './Home';
import CharacterPage from './CharacterPage';
import ErrorPage from './ErrorPage';
import FourOhFourPage from './FourOhFourPage';

const Main = () => (
  
<div className="container">
  	<main>
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/character/:charid' render={(props) => <CharacterPage {...props} characterId={props.match.params.charid} />} />
	      <Route exact path='/error' component={ErrorPage}/>
	      <Route component={FourOhFourPage} />
	    </Switch>
    </main>
    <p className="yellow">Developed by Robert Franceschini</p>
</div>
  
)


export default Main;