import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilteredCategory = ({ article, index }) => {
  return (
    <Col key={index} className=" container col-lg-10 col-xl-9 mx-auto">
      <div className="d-flex">
        <div
          className="border-5 col-6 mb-3"
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
            src={article.urlToImage}
          />
        </div>
        <Card.Body
          style={{
            overflow: "hidden",
            maxHeight: "246px",
          }}
          className="d-flex flex-column justify-content-start mx-3 "
        >
          <Link to={`/categories/General/${index}`}>
            <Card.Title>{article.title}</Card.Title>
          </Link>
          <Card.Text
            className="mt-2"
            style={{
              overflow: "hidden",
            }}
          >
            {article.description}
          </Card.Text>
        </Card.Body>
      </div>
    </Col>
  );
};

export default FilteredCategory;
