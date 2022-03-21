import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((fetchedData) => setFilmsData(fetchedData));
  }, []);

  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5">
        {filmsData.map((val) => {
            return (
                <div key={val.id} className="card mb-5" style={{width: "18rem"}}>
                    <img src={val.movie_banner} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3>{val.title}</h3>
                        <p className="card-text">{val.description}</p>
                        <p className="card-text">Score: {val.rt_score}</p>
                        <Link to={val.id} className="btn btn-warning"> test</Link>
                    </div>
            </div>
            )
        })}

    </div>
  );
};

export default Films;
