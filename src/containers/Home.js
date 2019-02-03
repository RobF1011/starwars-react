import React, {Component} from 'react';
import './Home.css';
import characterData from './data/characters.json'
import { Link } from 'react-router-dom';

class Home extends Component {

	constructor() {
	 	super();
	 	this.state = {
	   		characterList: [],
	  		 isLoading: true
	 	};
	}

	componentDidMount() {
        let characters = characterData.characters.map((character) => {
        	let url = character.url;
        	let spliturl = url.split('/');
        	let charid = spliturl[5];
        	let imgurl = "/public/" + character.name + ".jpg"
            return (
                <div className="col-md-6 col-lg-3" key={character.name}>
                	<Link to={`/character/${charid}`}>
	                	<img src={imgurl} alt={character.name} />
	                    <h2>{character.name}</h2>
                    </Link>
                </div>
            )
        })
        this.setState({ characterList: characters });
        this.setState({ isLoading: false })
	}

	render() {
	  	return (
	  		<section id="characterSelect">
	  			<h1>Select A Character</h1>
	  			<div className="row">
					{this.state.isLoading ? <div className="lds-hourglass"></div> : this.state.characterList }
				</div>
	  		</section>	
	  	);
	}
	
}

export default Home;