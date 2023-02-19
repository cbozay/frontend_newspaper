import { useEffect, useState } from "react";
import { api } from "./Api/api";
import { url } from "./Api/url";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import TopHeader from "./Components/TopHeader";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Content from "./Pages/Content";

function App() {
  const [homeData, setHomeData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [healthData, setHealthData] = useState([]);
  const [scienceData, setScienceData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    api
      .get(url.home)
      .then((res) => {
        setHomeData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.business)
      .then((res) => {
        setBusinessData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.entertainment)
      .then((res) => {
        setEntertainmentData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.general)
      .then((res) => {
        setGeneralData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.health)
      .then((res) => {
        setHealthData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.science)
      .then((res) => {
        setScienceData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.sports)
      .then((res) => {
        setSportsData(res.data);
      })
      .catch((err) => console.log(err));
    api
      .get(url.technology)
      .then((res) => {
        setTechnologyData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log({ homeData });
  // console.log({ businessData });
  // console.log(entertainmentData);
  // console.log(generalData);
  // console.log(healthData);
  // console.log(scienceData);
  // console.log(sportsData);
  // console.log(technologyData);

  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home homeData={homeData} />} />
        <Route
          path="/categories"
          element={
            <Categories
              businessData={businessData}
              entertainmentData={entertainmentData}
              generalData={generalData}
              healthData={healthData}
              scienceData={scienceData}
              sportsData={sportsData}
              technologyData={technologyData}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path=":params" element={<Content homeData={homeData} />} />
        <Route
          path="/categories/Business/:params"
          element={<Content homeData={businessData} />}
        />
        <Route
          path="/categories/Entertainment/:params"
          element={<Content homeData={entertainmentData} />}
        />
        <Route
          path="/categories/General/:params"
          element={<Content homeData={generalData} />}
        />
        <Route
          path="/categories/Health/:params"
          element={<Content homeData={healthData} />}
        />
        <Route
          path="/categories/Science/:params"
          element={<Content homeData={scienceData} />}
        />
        <Route
          path="/categories/Sport/:params"
          element={<Content homeData={sportsData} />}
        />
        <Route
          path="/categories/Technologies/:params"
          element={<Content homeData={technologyData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
