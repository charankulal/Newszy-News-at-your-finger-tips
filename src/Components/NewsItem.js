import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, channel } =
      this.props;
    return (
      <div className="my-3">
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
              <span
                className="position-absolute top-0 start-85 translate-middle badge rounded-pill bg-danger"
                style={{ left: "85%", zIndex: "1" }}
              >
                {channel}
                <span className="visually-hidden">unread messages</span>
              </span>
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
