import React from "react";
import "./company.css";
import { Link } from "react-router-dom";

const company = props => {
  const { title, imgUrl, description, id } = props;
  return (
    <div className="company">
      <img src={imgUrl} alt="Logo" className="img" />
      <h1 className="title">{title}</h1>
      <span className="description">{description}</span>
      <button className="button">
        <Link to={`/company/${id}`}>Saiba Mais</Link>
      </button>
    </div>
  );
};

export default company;
