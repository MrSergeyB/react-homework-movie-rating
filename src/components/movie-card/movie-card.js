import React from "react";
import _movieData from "../moviedata";
import Stars from "../stars";
import "./movie-card.css";

const MovieCard = () => {
  const movieData = _movieData;
  return (
    <div>
      {movieData.map(movie => {
        return movie.count > 1 &&
          movie.count < 6 &&
          typeof movie.count === "number" ? (
          <div key={movie.id} className="movie-card">
            <div className="movie-card-header">
              <div className="movie-title">
                {movie.title}
                <p className="movie-category" style={{color: movie.color}}>
                  {" "}
                  {movie.category}
                </p>
              </div>

              <div className="add-favorite-btn">
                {movie.favorite ? (
                  <span className="material-icons" style={{color: "#9C9489"}}>
                    favorite
                  </span>
                ) : (
                  <span className="material-icons">favorite_border</span>
                )}
              </div>
              <div className="share-btn">
                <span className="material-icons">share</span>
              </div>
            </div>
            <div className="movie-card-body">
              <div className="movie-image">
                <img src={movie.img} alt={movie.title} />
              </div>
              <Stars count={movie.count} />
            </div>
            <div className="movie-card-footer">
              <div>
                <a href="!#" className="btn-buy">
                  {" "}
                  Купить {movie.price} ₽
                </a>

                <a href="!#" className="btn-more">
                  Подробнее{" "}
                </a>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MovieCard;
