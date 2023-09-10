import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "sports",
    
    
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      size: 9,
      totalArticles: 0,
      country: "in",
      
    };
    document.title = `NewsZy - ${this.props.category}`;

    this.fetchMoreData();
  }

  async updateTheNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);

    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updateTheNews();
  }
  async handleNextClick() {
    this.setState({ page: this.state.page + 1 });
    this.updateTheNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateTheNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <center>
          <h2 style={{ margin: "20px" }}>
            NewsZy - Top HeadLines from {this.props.category}
          </h2>
          {/* {this.state.loading && <Spinner />} */}
        </center>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" align="center">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4">
                    <NewsItem
                      key={ele.url ? ele.url : ""}
                      title={ele.title ? ele.title : ""}
                      channel={ele.source.name ? ele.source.name : ""}
                      description={
                        ele.description ? ele.description.slice(0, 85) : ""
                      }
                      imageurl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://c1.wallpaperflare.com/preview/251/931/705/not-found-404-error-file-not-found-404-file-not-found-thumbnail.jpg"
                      }
                      newsurl={ele.url}
                      author={ele.author ? ele.author : "Anonymous"}
                      date={
                        ele.publishedAt.substring(0, 10) +
                        " " +
                        ele.publishedAt.substring(12)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
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
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.state.size)
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
