import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CategoryItem from "../Components/CategoryItem";
import FilteredCategory from "../Components/FilteredCategory";

// console.log(homeData);
// console.log(businessData);
// console.log(entertainmentData);
// console.log(generalData);
// console.log(healthData);
// console.log(scienceData);
// console.log(sportsData);
// console.log(technologyData);

const Categories = ({
  businessData,
  entertainmentData,
  generalData,
  healthData,
  scienceData,
  sportsData,
  technologyData,
}) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [business, setBusiness] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [general, setGeneral] = useState(false);
  const [health, setHealth] = useState(false);
  const [science, setScience] = useState(false);
  const [sports, setSports] = useState(false);
  const [technology, setTechnology] = useState(false);
  const { searchClicked } = useSelector((state) => state);
  console.log(searchClicked.searchClicked);
  // console.log(businessData);
  // const allCategoriesArticles = [
  //   ...businessData?.articles,
  //   ...entertainmentData?.articles,
  //   ...generalData?.articles,
  //   ...healthData?.articles,
  //   ...scienceData?.articles,
  //   ...technologyData?.articles,
  //   ...sportsData?.articles,
  // ];
  // allCategoriesArticles.push(businessData);

  // console.log(allCategoriesArticles);

  // const [filteredBusiness, setFilteredBusiness] = useState();
  // const [filteredEntertainment, setFilteredEntertainment] = useState();
  // const [filteredGeneral, setFilteredGeneral] = useState();
  // const [filteredHealth, setFilteredHealth] = useState();
  // const [filteredScience, setFilteredScience] = useState();
  // const [filteredSports, setFilteredSports] = useState();
  // const [filteredTechnology, setFilteredTechnology] = useState();

  // const handleChange = (data) => {
  //   if (data === "business") {
  //     if (business === true) {
  //       setFilteredBusiness(businessData);
  //     }
  //     setBusiness(false);
  //   }
  //   if (data === "entertainment") {
  //     if (entertainment === true) {
  //       setFilteredEntertainment(entertainmentData);
  //     }
  //     setEntertainment(!entertainment);
  //   }
  //   if (data === "general") {
  //     if (general === true) {
  //       setFilteredGeneral(generalData);
  //     }
  //     setGeneral(!general);
  //   }
  //   if (data === "health") {
  //     if (health === true) {
  //       setFilteredHealth(healthData);
  //     }
  //     setHealth(!health);
  //   }
  //   if (data === "science") {
  //     if (science === true) {
  //       setFilteredScience(scienceData);
  //     }
  //     setScience(!science);
  //   }
  //   if (data === "sports") {
  //     if (sports === true) {
  //       setFilteredSports(sportsData);
  //     }
  //     setSports(!sports);
  //   }
  //   if (data === "technology") {
  //     if (technology === true) {
  //       setFilteredTechnology(technologyData);
  //     }
  //     setTechnology(!technology);
  //   }
  // };
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap justify-content-center">
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="business">BUSINESS</label>
          <input
            id="business"
            type={"checkbox"}
            value={business}
            onChange={() => {
              setBusiness(!business);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="entertainment">ENTERTAINMENT</label>
          <input
            id="entertainment"
            type={"checkbox"}
            value={entertainment}
            onChange={() => {
              setEntertainment(!entertainment);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="general">GENERAL</label>
          <input
            id="general"
            type={"checkbox"}
            value={general}
            onChange={() => {
              setGeneral(!general);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="health">HEALTH</label>
          <input
            id="health"
            type={"checkbox"}
            value={health}
            onChange={() => {
              setHealth(!health);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="science">SCIENCE</label>
          <input
            id="science"
            type={"checkbox"}
            value={science}
            onChange={() => {
              setScience(!science);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="sports">SPORTS</label>
          <input
            id="sports"
            type={"checkbox"}
            value={sports}
            onChange={() => {
              setSports(!sports);
              setIsFiltered(true);
            }}
          />
        </div>
        <div
          style={{ width: "200px" }}
          className="border px-3 py-1 d-flex justify-content-between"
        >
          <label htmlFor="technology">TECHNOLOGY</label>
          <input
            id="technology"
            type={"checkbox"}
            value={technology}
            onChange={() => {
              setTechnology(!technology);
              setIsFiltered(true);
            }}
          />
        </div>
      </div>

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

      <div>
        {isFiltered === false ||
        (!business &&
          !entertainment &&
          !general &&
          !health &&
          !science &&
          !sports &&
          !technology) ? (
          searchClicked.searchClicked ? (
            generalData.articles
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
                return <FilteredCategory article={article} index={index} />;
              })
          ) : (
            <>
              <CategoryItem
                categoryTitle={"Business"}
                categoryData={businessData}
              />
              <CategoryItem
                categoryTitle={"Entertainment"}
                categoryData={entertainmentData}
              />
              <CategoryItem
                categoryTitle={"General"}
                categoryData={generalData}
              />
              <CategoryItem
                categoryTitle={"Health"}
                categoryData={healthData}
              />
              <CategoryItem
                categoryTitle={"Science"}
                categoryData={scienceData}
              />
              <CategoryItem
                categoryTitle={"Sports"}
                categoryData={sportsData}
              />
              <CategoryItem
                categoryTitle={"Technologies"}
                categoryData={technologyData}
              />
            </>
          )
        ) : searchClicked.searchClicked ? (
          generalData.articles
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
              return <FilteredCategory article={article} index={index} />;
            })
        ) : (
          <>
            {business === true ? (
              <CategoryItem
                categoryTitle={"Business"}
                categoryData={businessData}
              />
            ) : (
              ""
            )}

            {entertainment === true ? (
              <CategoryItem
                categoryTitle={"Entertainment"}
                categoryData={entertainmentData}
              />
            ) : (
              ""
            )}

            {general === true ? (
              <CategoryItem
                categoryTitle={"General"}
                categoryData={generalData}
              />
            ) : (
              ""
            )}

            {health === true ? (
              <CategoryItem
                categoryTitle={"Health"}
                categoryData={healthData}
              />
            ) : (
              ""
            )}

            {science === true ? (
              <CategoryItem
                categoryTitle={"Science"}
                categoryData={scienceData}
              />
            ) : (
              ""
            )}

            {sports === true ? (
              <CategoryItem
                categoryTitle={"Sports"}
                categoryData={sportsData}
              />
            ) : (
              ""
            )}

            {technology === true ? (
              <CategoryItem
                categoryTitle={"Technologies"}
                categoryData={technologyData}
              />
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
