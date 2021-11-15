import Movie from "./Movie";
const Movies = ({ movies, removeMovie }) => {
  return (
    <div className="main-container">
      <h1>Watch Ghibli films Online</h1>
      <main className="list-container">
        {movies.map((movie) => {
          return <Movie {...movie} removeMovie={removeMovie} />;
        })}
      </main>
    </div>
  );
};

export default Movies;
