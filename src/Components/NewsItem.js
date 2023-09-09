import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, channel } =
      this.props;
    return (
      <div className="my-3">
        <div className="d-flex">
              <span
                className=" badge bg-primary"
                style={{ left: "85%", zIndex: "1" }}
              >
                {channel}
                
              </span>
              </div>
        <div className="card">
        
          <img
            src={imageurl}
            height="250px"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-success">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="norefferer noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
