import { useState, useEffect } from "react";
const Movie = ({
  id,
  title,
  original_title,
  image,
  producer,
  director,
  release_date,
  description,
  watch_link,
  removeMovie
}) => {
  const [readMore, setReadMore] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <article key={id}>
      <h2>
        {title} ( <span>{original_title} </span> ){" "}
      </h2>
      <img src={image} alt={title} />
      <div className="buttons">
        <a href={watch_link} target="_blank" className="link">
          ▶ Watch now
        </a>
        <button
          className="btn"
          onClick={() => {
            setMoreInfo(!moreInfo);
          }}
        >
          {moreInfo ? "Less info" : "More info"}
        </button>
        <button
          className="btn not-btn"
          onClick={() => {
            removeMovie(id);
          }}
        >
          Not intrested
        </button>
      </div>
      {moreInfo && (
        <section className="info">
          <ul className="more-info">
            <li>Release Date: {release_date}</li>
            <li>Director: {director}</li>
            <li>Producer: {producer}</li>
          </ul>
          <p className="movie-info">
            {readMore ? description : `${description.substring(0, 100)}...`}
            <button
              className="read-more"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Show less" : "Read more"}
            </button>
          </p>
        </section>
      )}
    </article>
  );
};

export default Movie;
