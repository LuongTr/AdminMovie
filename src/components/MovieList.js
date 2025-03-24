import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Language</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} onClick={() => onSelectMovie(movie)}>
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

export default MovieList;
