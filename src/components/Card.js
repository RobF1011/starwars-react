import React from 'react';

const Card = ({movie}) => {
	return (
		<div className="col-md-6 col-lg-4" key={movie.title}>
      <div className="card h-100">
        <div className="card-body">
          <h2>{movie.title}</h2>
          <p><span className="bold">Director:</span> {movie.director}</p>
          <p><span className="bold">Producer(s):</span> {movie.producer}</p>
          <p><span className="bold">Release Date:</span> {movie.releaseDate}</p>
        </div>
      </div>
    </div>
	);
}

export default Card;
