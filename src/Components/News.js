import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category:'sports',
  }
  static propTypes={
    name:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      size: 9,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=583f311b5e434228a685f999e9799aaa&${this.state.page}&pageSize=${this.state.size}`;
      this.setState({loading:true});
      let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading:false,
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=583f311b5e434228a685f999e9799aaa&page=${
      this.state.page + 1
    }&pageSize=${this.state.size}`;
    this.setState({loading:true});
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading:false,
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=583f311b5e434228a685f999e9799aaa&page=${
      this.state.page - 1
    }&pageSize=${this.state.size}`;
    this.setState({loading:true});
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading:false,
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <center>
          <h2 style={{margin: "20px"}}>NewsZy - Top HeadLines</h2>
          {this.state.loading && <Spinner/>}
        </center>
        <div className="row" align="center">
          {! this.state.loading &&this.state.articles.map((ele) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  key={ele.url ? ele.url : " "}
                  title={ele.title ? ele.title : ""}
                  channel={ele.source.name?ele.source.name:""}
                  description={
                    ele.description ? ele.description.slice(0, 85) : ""
                  }
                  imageurl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDgvMjNlNzc5OWItMmQ0NS00ODY5LWIxNjQtN2VjZDZiYjVmYWQ5LmpwZw==.jpg"
                  }
                  newsurl={ele.url} author={ele.author?ele.author:"Anonymous"} date={ele.publishedAt.substring(0,10)+" "+ele.publishedAt.substring(12)}
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
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / this.state.size)
            }
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
