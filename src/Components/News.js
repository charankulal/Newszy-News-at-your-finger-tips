import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      size:20
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=583f311b5e434228a685f999e9799aaa";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults
    });
  }
  handleNextClick = async () => {
    
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=583f311b5e434228a685f999e9799aaa&page=${this.state.page + 1}&&pageSize=${this.state.size}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=583f311b5e434228a685f999e9799aaa&page=${
      this.state.page - 1
    }&pageSize=${this.state.size}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsZy - Top HeadLines</h2>
        <div className="row" align="center">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  key={element.url ? element.url : " "}
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDgvMjNlNzc5OWItMmQ0NS00ODY5LWIxNjQtN2VjZDZiYjVmYWQ5LmpwZw==.jpg"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page+1 > Math.ceil(this.state.totalArticles/20)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
