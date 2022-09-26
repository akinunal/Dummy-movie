import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { fetchMovies } from "./../../features/movies/moviesSlice";
import Input from "./../../components/Input/Input";
import MovieCard from "./../../components/MovieCard/MovieCard";

import { useInput } from "./../../hooks/useInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProductsPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);

  const [inputs, setInputs] = useInput({ search: "batman", filter: "" });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(inputs.filter)
  );

  useEffect(() => {
    // Modal.setAppElement(".App");
    dispatch(fetchMovies(inputs.search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setMovies([...movie.movies]);
  }, [movie.movies]);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [selectedMovie]);

  return (
    <div>
      <Input
        name="search"
        type="text"
        value={inputs.search}
        onChange={(e) => setInputs(e)}
        placeholder="Enter a movie name"
        className="searchInput"
      />
      <button
        className="main-button"
        onClick={() => dispatch(fetchMovies(inputs.search))}
      >
        Search
      </button>
      <Input
        type="text"
        name="filter"
        value={inputs.filter}
        onChange={setInputs}
        placeholder="Filter by name"
        className="searchInput"
        style={{ marginLeft: "12px" }}
      />
      {movie.loading && <div style={{ color: "#FFF" }}>Loading...</div>}
      {!movie.loading && movie.error && (
        <div style={{ color: "#FFF" }}>{movie.error}</div>
      )}
      {!movie.loading && !movie.error && !filteredMovies.length && (
        <div style={{ color: "#FFF" }}>No movies found</div>
      )}
      {filteredMovies?.length > 0 && (
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredMovies?.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              src={movie.Poster}
              onClick={() => setSelectedMovie(movie)}
            >
              <li
                style={{
                  listStyle: "none",
                  fontSize: "30px",
                  color: "#FFF",
                }}
              >
                {movie.Title}
              </li>
            </MovieCard>
          ))}
        </ul>
      )}
      {selectedMovie && (
        <Modal
          isOpen={selectedMovie}
          onRequestClose={() => setSelectedMovie(null)}
          style={customStyles}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <img
              src={selectedMovie.Poster}
              style={{ width: "200px", height: "400px" }}
              alt="Poster"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://picsum.photos/250/400";
              }}
            />
            <button
              style={{ position: "absolute", right: "0", top: "0" }}
              onClick={() => setSelectedMovie(null)}
            >
              X
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
              }}
            >
              <h2>Title: {selectedMovie.Title}</h2>
              <p>Year: {selectedMovie.Year}</p>
              <p>Description: {selectedMovie.description}</p>
              <p>IMDB ID: {selectedMovie.imdbID}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductsPage;
