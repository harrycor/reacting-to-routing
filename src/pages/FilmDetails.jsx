import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FilmDetails = () => {
  const navBack = useNavigate();
  const { filmid } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((resData) => {
        setMovieData(resData);
      })
      .catch((e) => alert(e));
  }, [filmid]);

  const useNav = () => {
    navBack('/films');
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-wrap text-center">
        <img
          src={movieData.image}
          alt=""
          className="img-card-top"
          style={{ width: "20rem" }}
        />
        <div className="card" style={{ width: "40rem" }}>
          <h1 className="m-5 text-center">{movieData.title}</h1>
          <h3 className="m-5 text-center">{movieData.original_title}</h3>
          <div className="card-body">
            <p className="card-text">{movieData.description}</p>
            <p className="cadrd-text">Director: {movieData.director}</p>
            <p className="cadrd-text">Producer: {movieData.producer}</p>
            <p className="cadrd-text">Release Date: {movieData.release_date}</p>
            <button onClick={useNav} className="btn btn-warning">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
