import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PeopleDeatails = () => {

    const [personData, setPersonData] = useState([]);
    const { peopleid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(res => res.json())
        .then(resParsed => setPersonData(resParsed))
        .catch(e => alert(e));
    }, [])
    
    if(!personData){<h1>Loading ...</h1>}

  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="text-center" style={{border: "solid black 1px", width: "18rem"}}>
            <h1>{personData.name}</h1>
            <div><p>Age: {personData.age}</p>
            <p>Gender: {personData.gender}</p>
            <p>Eye color: {personData.eye_color}</p>
            <p>Hair Color: {personData.hair_color}</p>
            <a href={`https://ghibliapi.herokuapp.com/people/${peopleid}`} target="_blank" className="btn btn-primary mb-2">API</a>
            </div>
        </div>
    </div>
  );
};

export default PeopleDeatails;
