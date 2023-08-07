import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=583f311b5e434228a685f999e9799aaa"
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsZy - Top HeadLines</h2>
        <div className="row" align="center">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" >
          <NewsItem
            key={element.url}
            title={element.title?element.title.slice(0,45):""}
            description={element.description?element.description.slice(0,85):""}
            imageurl={element.urlToImage?element.urlToImage:"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDgvMjNlNzc5OWItMmQ0NS00ODY5LWIxNjQtN2VjZDZiYjVmYWQ5LmpwZw==.jpg"}
            newsurl={element.url}
          />
        </div>
        })}
          
          
         
        </div>
      </div>
    );
  }
}

export default News;
