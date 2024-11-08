import React, { useState, useEffect } from 'react';
import characterData from '../data/characters.json';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
	const [characterList, setCharacterList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadCharacters = () => {
			const characters = characterData.characters.map((character) => {
				const url = character.url;
				const spliturl = url.split('/');
				const charid = spliturl[5];
				const imgurl = `/images/${character.image}`;
				
				return (
					<div className="col-md-6 col-lg-3" key={character.name}>
						<Link to={`/character/${charid}`}>
							<img src={imgurl} alt={character.name} />
							<h2>{character.name}</h2>
						</Link>
					</div>
				);
			});
			setCharacterList(characters);
			setIsLoading(false);
		};

		loadCharacters();
	}, []);

	return (
		<section id="characterSelect">
			<h1>Select A Character</h1>
			<div className="row">
				{isLoading ? <div className="lds-hourglass"></div> : characterList}
			</div>
		</section>
	);
};

export default Home;
