import React from "react";
import "../styles/styles.css";

const MovieTable = ({ movies, onSelect }) => {
  return (
    <div className="table-container">
      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Language</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index} onClick={() => onSelect(movie)} className="movie-row">
              <td>{movie.title}</td>
              <td>{movie.rating}</td>
              <td>{movie.language}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
