import React from "react";

export function Jumbotron({title, description, buttonUrl, buttonLabel}) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <p className="lead">
        {description}
      </p>
      <hr className="my-4" />
      <p className="lead">
        <a className="btn btn-primary btn-lg" href={buttonUrl} role="button">
          {buttonLabel}
        </a>
      </p>
    </div>
  );
}
