import React from "react";
import "../styles/styles.css";

const MovieDetails = ({ movie }) => {
  if (!movie) return <div className="movie-details empty">Select a movie to see details</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.banner} alt={movie.title} className="detail-banner" />
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Runtime:</strong> {movie.runtime} min</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p className="movie-description">{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
