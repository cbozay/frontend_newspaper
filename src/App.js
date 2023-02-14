import { useEffect, useState } from "react";
import { api } from "./Api/api";
import { url } from "./Api/url";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Entertainment from "./Pages/Entertainment";
import Health from "./Pages/Health";
import Science from "./Pages/Science";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";
import Header from "./Components/Header";
import TopHeader from "./Components/TopHeader";
import About from "./Pages/About";

function App() {
  const [dat, setDat] = useState([]);
  useEffect(() => {
    api
      .get(url.home)
      .then((res) => {
        setDat(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const firstThreeArticles = dat?.articles?.slice(0, 3);

  console.log(firstThreeArticles);

  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home firstThreeArticles={firstThreeArticles} />}
        />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
