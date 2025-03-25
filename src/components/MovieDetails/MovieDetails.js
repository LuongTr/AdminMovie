import React from "react";
import "./MovieDetails.css"; // Make sure to style properly

const MovieDetail = ({ movie }) => {
  if (!movie) return <p>Select a movie to view details.</p>;

  return (
    <div className="movie-detail">
      {/* 1️⃣ Movie Information */}
      <div className="movie-info">
        <h2>{movie.title} ({movie.year})</h2>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Runtime:</strong> {movie.runtime} min</p>
        <p><strong>Language:</strong> {movie.language}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
      </div>

      {/* 2️⃣ Movie Banner */}
      <div className="movie-banner">
        {movie.banner ? (
          <img src={movie.banner} alt={movie.title} />
        ) : (
          <p>No Image Available</p>
        )}
      </div>

      {/* 3️⃣ Movie Description */}
      <div className="movie-description">
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
