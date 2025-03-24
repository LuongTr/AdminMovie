import React, { useState } from "react";

const MovieForm = ({ setMovies }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [
      ...prev,
      { id: prev.length + 1, title, rating, year, language, image },
    ]);
    setTitle("");
    setRating("");
    setYear("");
    setLanguage("");
    setImage("");
  };

  return (
    <div className="movie-form">
      <h2>Upload/Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
