import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const People = () => {

  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(res => res.json())
    .then(resParsed => setPeopleData(resParsed))
    .catch(e => alert(e));
  }, [])
  
  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">
      {peopleData.map((val) => {
        return(
          <div key={val.id} className="card m-2" style={{width: "18rem"}}>
            <div className="card-body">
              <h2>{val.name}</h2>
              <p className="card-text">Age: {val.age}</p>
              <p className="card-text">Gender: {val.gender}</p>
              <Link to={val.id} className="btn btn-primary">About</Link>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default People;
