import React, { useState } from "react";
import Slider from "../Components/Slider";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

const Home = ({ homeData }) => {
  const { searchClicked } = useSelector((state) => state);
  console.log(homeData?.articles);
  const restOfDatas = homeData?.articles?.slice(
    3,
    homeData?.articles.length + 1
  );

  // Here Pagination---Start
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * 6;
  const firstPostIndex = lastPostIndex - 6;
  const currentPosts = restOfDatas?.slice(firstPostIndex, lastPostIndex);
  const pages = [];
  for (let i = 1; i <= Math.ceil(restOfDatas?.length / 6); i++) {
    pages.push(i);
  }
  // Here Pagination---End

  return (
    <>
      <Slider homeData={homeData} />
      {searchClicked.searchClicked ? (
        <Row className="g-4 mx-auto col-lg-10 my-3">
          <u>
            <h3>
              Aradığınız "{searchClicked.searchClicked}" kelimesine ait
              sonuçlar:
            </h3>
          </u>
        </Row>
      ) : (
        ""
      )}

      <Row xs={1} md={2} className="g-4 mx-auto col-lg-10">
        {searchClicked.searchClicked
          ? homeData?.articles
              ?.filter((article) => {
                if (
                  article?.title
                    ?.toLowerCase()
                    .includes(searchClicked.searchClicked.toLowerCase())
                ) {
                  return article;
                }
              })
              .map((article, index) => {
                return <HomeItem index={index} data={article} />;
              })
          : currentPosts?.map((data, index) => (
              <HomeItem index={index + 3} data={data} />
            ))}
      </Row>
      <div
        style={{ height: "100px" }}
        className="d-flex justify-content-center align-items-center"
      >
        {pages.map((page, index) => {
          return (
            <button
              className={`mx-1 btn-hover ${
                page === currentPage ? "btn-active" : ""
              }`}
              variant="outline-primary"
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
