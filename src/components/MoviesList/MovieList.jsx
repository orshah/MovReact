import "./movielist.style.css";
import imgOne from "../images/thething.jpg";
import imgTwo from "../images/borat.jpg";

export const MovieListOne = () => {
  return (
    <div className="movie-info">
      <img src={imgOne} />
      <div className="rating">☀ 8.2</div>
      <h2 className="title-main">The Thing</h2>
      <button className="watch-movie">Watch Movie</button>
    </div>
  );
};

export const MovieListTwo = () => {
  return (
    <div className="movie-info">
      <img src={imgTwo} />
      <div className="rating">☀ 7.4</div>
      <h2 className="title-main">Borat</h2>
      <button className="watch-movie">Watch Movie</button>
    </div>
  );
};
