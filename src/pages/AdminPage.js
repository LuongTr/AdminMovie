import React, { useState } from "react";
import Header from "../components/Header/Header";
import UploadForm from "../components/UploadForm/UploadForm";
import MovieTable from "../components/MovieTable/MovieTable";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import "./AdminPage.css"; // Styling for the admin page
import "@fortawesome/fontawesome-free/css/all.min.css";


const AdminMovie = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      rating: "8.8",
      language: "English",
      year: "2010",
      banner: "",
      description: "A thief who enters the dreams of others to steal their secrets gets a chance at redemption."
    }
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleUpload = (movie) => {
    setMovies([...movies, movie]);
    setModalOpen(false); // Close modal after uploading
  };

  return (
    <div className="admin-page">
      <Header />
      <button className="open-modal-btn" onClick={() => setModalOpen(true)}><i className="fa-solid fa-upload"></i></button>
      
      {/* Show the upload form without blurring anything */}
      {isModalOpen && (
        <div className="modal-container">
          <UploadForm onUpload={handleUpload} closeModal={() => setModalOpen(false)} />
        </div>
      )}

      <div className="content">
        <MovieTable movies={movies} onSelect={setSelectedMovie} />
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
};

export default AdminMovie;
