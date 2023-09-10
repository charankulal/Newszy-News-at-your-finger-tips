import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  // document.title = `NewsZy - ${props.category}`;

    // this.fetchMoreData();
  

  const updateTheNews=async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);

    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }
   useEffect(()=>{
   updateTheNews();
   //eslint-disable-next-line 
  },[])


  const handleNextClick = async () => {
    setPage(page+1)
    updateTheNews();
  }
  const handlePrevClick = async () => {
    setPage(page-1)
    updateTheNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)
  };

  
    return (
      <div className="container my-3">
        <center>
          <h2 style={{ margin: "20px" }}>
            {props.category === 'General' ? `NewsZy - Top HeadLines` : `NewsZy - Top ${props.category} HeadLines`}
          </h2>
          {loading && <Spinner />}
        </center>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" align="center">
              {articles.map((ele) => {
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
            disabled={page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalArticles / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "sports",
  
  
};
News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
