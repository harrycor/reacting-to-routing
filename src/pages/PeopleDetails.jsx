import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PeopleDeatails = () => {

    const navigateBack = useNavigate();
    const [personData, setPersonData] = useState([]);
    const { peopleid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(res => res.json())
        .then(resParsed => setPersonData(resParsed))
        .catch(e => alert(e));
    }, [])

const goBack = () => {
  navigateBack('/people')
}
    
    if(!personData){<h1>Loading ...</h1>}

  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="text-center" style={{border: "solid black 1px", width: "18rem"}}>
            <h1>{personData.name}</h1>
            <div><p>Age: {personData.age}</p>
            <p>Gender: {personData.gender}</p>
            <p>Eye color: {personData.eye_color}</p>
            <p>Hair Color: {personData.hair_color}</p>
            <div className="d-flex justify-content-evenly mb-2">
            <a href={`https://ghibliapi.herokuapp.com/people/${peopleid}`} target="_blank" className="btn btn-primary">API</a>
            <button onClick={goBack} className="btn btn-warning">Back</button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default PeopleDeatails;
