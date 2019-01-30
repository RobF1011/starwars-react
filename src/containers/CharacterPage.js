import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect  } from 'react-router-dom'
import './CharacterPage.css';

class CharacterPage extends Component {

	constructor() {
	 super();
	 this.state = {
	   movieAPIs: [],
	   movies: [],
	   characterName: "",
	   isLoading: true,
	   redirect: false
	 };
	}

	handleErrors(response) {
	    if (!response.ok) {
	        throw Error(response.statusText);
	    }
	    return response;
	}

	componentWillMount() {
		let api = "https://swapi.co/api/people/" + this.props.characterId;

		axios.get(api)
			.then(res => this.setState({ characterName: res.data.name }))
			.catch(error => this.setState({ redirect: true }) );
			

		axios.get(api)
			.then(res => {
				this.setState({ movieAPIs: res.data.films});
				for (var i = 0; i < res.data.films.length; i++) {

					axios.get(res.data.films[i])
						.then(res => {
							let options = {  
							  	weekday: 'long',
							    year: 'numeric',
							    month: 'short',
							    day: 'numeric',
							    timeZone: 'UTC'
							};
							let date = new Date(res.data.release_date)
							date = date.toLocaleString('en-us', options);

							let filmsHTML = 
									<div className="col-md-6 col-lg-4" key={res.data.title}>
										<div className="card h-100">
											<div className="card-body">
												<h2>{res.data.title}</h2>
												<p><span className="bold">Director:</span> {res.data.director}</p>
												<p><span className="bold">Producer(s):</span> {res.data.producer}</p>
												<p><span className="bold">Release Date:</span> {date}</p>
											</div>
										</div>
									</div>

							this.setState({movies: [...this.state.movies, filmsHTML]});
							this.setState({ isLoading: false })
						})
				}

			})

		
	}


	render() {
		
		if (this.state.redirect) {
			return <Redirect to='/error'/>;
		}
	 
	  	return (
	    	this.state.isLoading ?
		    <section id="movieInfo">
		      <div className="lds-hourglass"></div>
		    </section>

	    :

		    <section id="movieInfo">
		    	<h1>{this.state.characterName} Film Appearances</h1>
		    	<Link to="/"><button>Back</button></Link>
		    	<div className="row">
		      		{this.state.movies}
		      	</div>
		    </section>
	  	);
	}

}

export default CharacterPage;