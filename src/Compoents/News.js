import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: "in",
    PageSize: 7,
    Category: "general",
  };
  static propsTypes = {
    country: PropTypes.string,
    PageSize: this.propsTypes,
    Category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    // console.log("Hello i am constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.props.Category}-NewsApp`;
  }
  async updateNews(){
    this.props.setprogress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=388181b6fdc4419abde825c804af0e05&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setprogress(35)

    let parsedData = await data.json();
    
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setprogress(100)


  }





  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=388181b6fdc4419abde825c804af0e05&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.Category
    // }&apiKey=388181b6fdc4419abde825c804af0e05&page=${this.state.page - 1}
    // &pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    // });
    this.setState({page:this.state.page -1})
    this.updateNews()
  };
  handleNextClick = async () => {
    console.log("Next");
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.Category
    //   }&apiKey=388181b6fdc4419abde825c804af0e05&page=${this.state.page + 1}
    // &pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //   });
    // }
    this.setState({page:this.state.page +1})
    this.updateNews()

  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px 0px",marginTop:"90px" }}>
          NewsApp- Top Headlines
        </h1>

        <div className="row">
           {/* <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={this.state.articles.length !==this.state.totalResults}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  > */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  descripation={
                    element.descripation ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt}
                />
              </div>
            );
          })}
              {/* </InfiniteScroll> */}

        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
