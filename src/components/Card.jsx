import React from "react";

export function Card({ title, image, description, buttonUrl, buttonLabel }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={buttonUrl} className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
