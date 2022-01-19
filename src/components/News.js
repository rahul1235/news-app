import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const defaultImage =
    "https://as1.ftcdn.net/v2/jpg/01/98/04/52/1000_F_198045217_XX6x4ll5Ov4thdKEpS7Ebn0DEJZHuN8I.jpg";

  //   document.title = `${capitalizeFirstLetter(
  //     props.category
  //   )} - TopTier News`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const getNewsArticles = async (options) => {
    props.setProgress(0);
    const { pageSize, page, country, category } = options;
    const url = `${process.env.REACT_APP_NEWS_API_URL}top-headlines?country=${country}&pageSize=${pageSize}&page=${page}&category=${category}`;
    props.setProgress(30);
    const data = await fetch(url);
    props.setProgress(60);
    return data.json();
  };

  const fetchMoreData = async () => {
    const data = await getNewsArticles({
      page: page + 1,
      pageSize: props.pageSize,
      country: props.country,
      category: props.category,
    });

    setPage(page + 1);
    setArticles(articles.concat(data.articles));
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - TopTier News`;
    async function fetchData() {
      setLoading(true);
      const data = await getNewsArticles({
        page: page,
        pageSize: props.pageSize,
        country: props.country,
        category: props.category,
      });
      setArticles(articles.concat(data.articles));
      setTotalArticles(data.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-3" style={props.modeStyle}>
      <h1 className="text-center" style={{ marginTop: "60px" }}>
        TopTier News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner></Spinner>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner></Spinner>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      !element.urlToImage ? defaultImage : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    modeStyle={props.modeStyle}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  modeStyle: PropTypes.object,
};

export default News;
