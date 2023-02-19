import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Content = ({ homeData }) => {
  const params = useParams();
  const contentIndex = parseInt(params.params);
  console.log(contentIndex);

  return (
    <div>
      {
        <>
          <div className="d-flex justify-content-center">
            <div className="mx-3" style={{ maxWidth: "1060px" }}>
              <Card.Img
                style={{
                  objectFit: "cover",
                  backgroundPosition: "center",
                  maxHeight: "400px",
                }}
                className="h-100"
                variant="top"
                src={homeData?.articles[contentIndex]?.urlToImage}
              />
              <h3 className="my-3">
                <b>{homeData?.articles[contentIndex]?.title}</b>
              </h3>
              <article>{homeData?.articles[contentIndex]?.content}</article>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Content;
