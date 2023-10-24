import React, { Component } from "react";


export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
              <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute' }}>
                <span className="badge rounded-pill bg-danger">
                  {source}
                </span>
              </div>
          <img
            style={{ height: "200px", width: "300px" }}
            src={
              imageUrl
                ? imageUrl
                : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            }
            className="card-img-top"
            alt="pic not found"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}

            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted fw-bold">
                By {!author ? "Unknown" : author} on-
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a style={{ cursor: "pointer" }}
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="You can read more about the article"
              className="form-control btn btn-sm btn-outline-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
