import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

import './CharacterPage.css';

const CharacterPage = () => {
	const { charid: characterId } = useParams();
	const [characterName, setCharacterName] = useState("");
	const [movieList, setMovieList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCharacterData = async () => {
			try {
				const api = `https://swapi.dev/api/people/${characterId}/`;
				const response = await fetch(api);
				const data = await response.json();
				if (!data?.films) {
					throw new Error('No matching data for request!');
				}
				
				setCharacterName(data?.name);

				const movieDetails = await Promise.all(
					data.films.map(async (filmURL) => {
						const filmResponse = await fetch(filmURL);
						const filmData = await filmResponse.json();
						const { title, director, producer, episode_id, release_date } = filmData;
						let options = {  
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
							timeZone: 'UTC'
						};

						const releaseDate = new Date(release_date).toLocaleString('en-us', options);
						
						return {
							title,
							director,
							producer,
							releaseDate,
							episode_id
						};
					})
				);

				setMovieList(movieDetails);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				navigate('/error');
			}
		};

		fetchCharacterData();
	}, [characterId]);


	return (
		<section id="movieInfo">
			{isLoading ? (
				<div className="lds-hourglass"></div>
			) : (
				<div>
					<h1>{characterName} Film Appearances</h1>
					<Link to="/"><button>Back</button></Link>
					<div className="row">
						<MovieList list={movieList} />
					</div>
				</div>
			)}
		</section>
	);
}

export default CharacterPage;
