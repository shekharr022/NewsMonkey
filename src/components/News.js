import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizedFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizedFirstLetter(this.props.category)}-NewsMonkey`
  }
  async newsUpdate() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f73c78ecd8c4cfa975e89466889c9e3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let fetchedData = await data.json();
    this.props.setProgress(50);
    console.log(fetchedData);
    this.setState({
      articles: fetchedData.articles,
      totalResults: fetchedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  handlePrevClick = async () => {
    console.log("Previous button");
    this.setState({ page: this.state.page - 1 })
    this.newsUpdate();
  };

  handleNextClick = async () => {
    console.log("Next button");
    this.setState({ page: this.state.page + 1 })
    this.newsUpdate();

  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f73c78ecd8c4cfa975e89466889c9e3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let fetchedData = await data.json();
    console.log(fetchedData);
    this.setState({
      articles: this.state.articles.concat(fetchedData.articles),
      totalResults: fetchedData.totalResults,
      // loading: false
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizedFirstLetter(this.props.category)} headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
