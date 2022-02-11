// import {Component} from 'react';
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import React from "react";

export default function CarDetails({data}) {
    const {id} = useParams();
  const car = data.find((car) => car.id == id);


  const carStyling = {
    border: "1px solid black",
    margin: "5%",
    borderRadius:"10px",
    backgroundColor : "rgba(178, 178, 128, .5)",
  }
  console.log(car);
  return (
    <>
      <h1>Car Details</h1>
      <div className="list-group">
        <div className="list-group-item" style={carStyling}>
          <h1 style = {{textAlign : "left",padding:"5px"}}>{car.name}</h1>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={car.media} alt={car.name} />
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style = {{paddingLeft : "10%",textAlign : "left"}}>
              <ul style = {{padding : "5%",textAlign : "left"}}>
                <li style = {{padding : "5%"}} > <strong>Model {car.model}</strong></li>
                <li style = {{padding : "5%"}}><strong>Make {car.make}</strong></li>
                <li style = {{padding : "5%"}}><strong>Year {car.year}</strong></li>
                <li style = {{padding : "5%"}}><strong>Price {car.price}</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = "/cars";
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
