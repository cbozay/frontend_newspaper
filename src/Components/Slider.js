import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Slider = ({ homeData }) => {
  const dataIndex = [];
  for (let i = 0; i < 3; i++) {
    dataIndex.push(i);
  }
  console.log(dataIndex);

  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <div
            style={{ margin: "75px 0" }}
            className="d-lg-flex justify-content-center align-items-center  "
          >
            <div className="d-flex justify-content-center">
              <img
                style={{ objectFit: "cover", height: "300px", width: "525px" }}
                src={homeData?.articles?.at(0)?.urlToImage}
                alt="First slide"
              />
            </div>

            <div className="d-flex flex-column justify-content-center  align-items-center">
              <div
                className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
                style={{ height: "300px", width: "525px" }}
              >
                <Link to={"/0"}>
                  <h3>{homeData?.articles?.at(0)?.title}</h3>
                </Link>
                <p>{homeData?.articles?.at(0)?.description}</p>
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
                src={homeData?.articles?.at(1)?.urlToImage}
                alt="First slide"
              />
            </div>

            <div className="d-flex flex-column justify-content-center  align-items-center">
              <div
                className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
                style={{ height: "300px", width: "525px" }}
              >
                <Link to={"/1"}>
                  <h3>{homeData?.articles?.at(1)?.title}</h3>
                </Link>
                <p>{homeData?.articles?.at(1)?.description}</p>
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
                src={homeData?.articles?.at(2)?.urlToImage}
                alt="First slide"
              />
            </div>

            <div className="d-flex flex-column justify-content-center  align-items-center ">
              <div
                className="d-flex flex-column justify-content-center  align-items-center bg-light p-5"
                style={{ height: "300px", width: "525px" }}
              >
                <Link to={"/2"}>
                  <h3>{homeData?.articles?.at(2)?.title}</h3>
                </Link>

                <p>{homeData?.articles?.at(2)?.description}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
