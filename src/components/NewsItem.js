import React from "react";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div className="d-flex justify-content-end position-absolute end-0">
          <span className="badge rounded-pill bg-danger ">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href={newsUrl}
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
