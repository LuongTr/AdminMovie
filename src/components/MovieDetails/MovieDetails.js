import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  if (!movie) return <div className="movie-details empty">Select a movie to see details</div>;

  return (
    <div className="movie-details">
      <div className="details">
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Runtime:</strong> {movie.runtime} min</p>
        <p><strong>Language:</strong> {movie.language}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
      </div>
        {movie.banner && (
          <img className="movie-banner" src={movie.banner} alt={movie.title} />
        )}
    </div>
  );
};

export default MovieDetails;
