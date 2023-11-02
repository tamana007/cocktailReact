import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ id, Name, Image, info, glass }) => {
  // const{id,Name,Image,info,glass}=useGlobalContext
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={Image} alt="my image" />
      </div>
      <div className="cocktail-footer">
        <h2>{Name}</h2>
        <h4>{glass}</h4>
        <p>{info}</p>
       <Link to={`/cocktail:id`} className="btn btn-primary btn-details">Details</Link>
      </div>
    </article>
  );
};

export default Cocktail;
