import { useState, useEffect } from "react";
import "./styles.css";
import Movies from "./Movies";
const url = "https://ghibli-movie-watcher-api.herokuapp.com/ghibli_movies";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMovies = async () => {
    setLoading(true);
    try {
      const respose = await fetch(url);
      const movies = await respose.json();
      setLoading(false);
      setMovies(movies);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  const removeMovie = (id) => {
    let newMovies = movies.filter((movie) => {
      return movie.id != id;
    });
    setMovies(newMovies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  if (movies.length === 0) {
    return (
      <main className="refresh-page">
        <p className="alert">
          {" "}
          Opps ! Looks like you're not interested in any movies here
        </p>
        <button className="btn restore-btn" onClick={getMovies}>
          Restore Movies
        </button>
      </main>
    );
  }
  return <Movies movies={movies} removeMovie={removeMovie} />;
}
