import React, { useState } from "react";
import "./UploadForm.css"; // Import the new CSS file

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

    if (name == "rating") {
      const ratingValue = parseFloat(value);
      if (ratingValue < 0 || ratingValue > 10) {
        alert("Rating must be between 0 and 10.");
        return;
      }
    }

    setMovie({ ...movie, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // setMovie({ ...movie, banner: file });
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to URL
      setMovie({ ...movie, banner: imageUrl }); // Store image URL
    }
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
          <input type="text" name="rating" placeholder="Rating (0-10)" value={movie.rating} onChange={handleChange} min="0" max="10" step="0.1" required />
          <select name="language" value={movie.language || ""} onChange={handleChange} required>
            <option value="" disabled>Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="year" placeholder="Year" value={movie.year} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={movie.description} onChange={handleChange} required />

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
