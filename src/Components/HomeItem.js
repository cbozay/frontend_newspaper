import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeItem = ({ index, data }) => {
  return (
    <>
      <Col key={index} className="d-flex">
        <div className="d-flex">
          <div
            className="border-5 col-6"
            style={{
              height: "250px",
              backgroundPosition: "center",
            }}
          >
            <Card.Img
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
              }}
              className="h-100"
              variant="top"
              src={data?.urlToImage}
            />
          </div>
          <Card.Body
            style={{
              overflow: "hidden",
              maxHeight: "246px",
            }}
            className="d-flex flex-column justify-content-start mx-3 "
          >
            <Link to={`/${index}`}>
              <Card.Title>{data.title}</Card.Title>
            </Link>
            <Card.Text
              className="mt-2"
              style={{
                overflow: "hidden",
              }}
            >
              {data.description}
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
    </>
  );
};

export default HomeItem;
