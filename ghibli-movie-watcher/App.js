import { useState, useEffect } from "react";
import "./styles.css";
const url = "https://ghibliapi.herokuapp.com/films/";
export default function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const respose = await fetch(url);
    const movies = await respose.json();
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="main-container">
      <h1>Watch Ghibli films Online</h1>
      <main className="list-container">
        {movies.map((movie) => {
          const { id, title, original_title, image } = movie;
          return (
            <article key={id}>
              <h2>
                {title} ( <span>{original_title} </span> ){" "}
              </h2>
              <img src={image} />
              <div className="buttons">
                <a href="#" className="link">
                  ▶ Watch now
                </a>
                <button className="btn">More info</button>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}
