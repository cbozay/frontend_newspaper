import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ firstThreeArticles }) => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div
          style={{ margin: "75px 0" }}
          className="d-lg-flex justify-content-center align-items-center  "
        >
          <div className="d-flex justify-content-center">
            <img
              style={{ objectFit: "cover", height: "300px", width: "525px" }}
              src={firstThreeArticles?.at(0)?.urlToImage}
              alt="First slide"
            />
          </div>

          <div className="d-flex flex-column justify-content-center  align-items-center">
            <div
              className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
              style={{ height: "300px", width: "525px" }}
            >
              <h3>{firstThreeArticles?.at(0)?.title}</h3>
              <p>{firstThreeArticles?.at(0)?.description}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{ margin: "75px 0" }}
          className="d-lg-flex justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center">
            <img
              style={{ objectFit: "cover", height: "300px", width: "525px" }}
              src={firstThreeArticles?.at(1)?.urlToImage}
              alt="First slide"
            />
          </div>

          <div className="d-flex flex-column justify-content-center  align-items-center">
            <div
              className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
              style={{ height: "300px", width: "525px" }}
            >
              <h3>{firstThreeArticles?.at(1)?.title}</h3>
              <p>{firstThreeArticles?.at(1)?.description}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{ margin: "75px 0" }}
          className="d-lg-flex justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center">
            <img
              style={{ objectFit: "cover", height: "300px", width: "525px" }}
              src={firstThreeArticles?.at(2)?.urlToImage}
              alt="First slide"
            />
          </div>

          <div className="d-flex flex-column justify-content-center  align-items-center ">
            <div
              className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
              style={{ height: "300px", width: "525px" }}
            >
              <h3>{firstThreeArticles?.at(2)?.title}</h3>

              <p>{firstThreeArticles?.at(2)?.description}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
