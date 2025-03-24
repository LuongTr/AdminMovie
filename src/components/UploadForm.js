import React, { useState } from "react";

const UploadForm = ({ onUpload, closeModal }) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    language: "",
    year: "",
    description: "",
    banner: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMovie({ ...movie, banner: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.rating || !movie.language || !movie.year || !movie.description) {
      alert("Please fill in all fields except the banner.");
      return;
    }
    onUpload(movie);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upload Movie</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} required />
          <input type="text" name="rating" placeholder="Rating (e.g., 8.5)" value={movie.rating} onChange={handleChange} required />
          <input type="text" name="language" placeholder="Language" value={movie.language} onChange={handleChange} required />
          <input type="text" name="year" placeholder="Year" value={movie.year} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={movie.description} onChange={handleChange} required />

          {/* Image Upload Input */}
          <input type="file" accept="image/*" onChange={handleFileChange} />

          <div className="modal-buttons">
            <button type="submit" className="btn-upload">Upload</button>
            <button type="button" className="btn-close" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
