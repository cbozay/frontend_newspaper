import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchClicked } from "../Redux/searchSlice";
import "../Styles/GeneralStyle.css";

const TopHeader = () => {
  // Here Search---Start
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchClicked(search));
  };
  // Here Search---End

  const dispatch = useDispatch();

  return (
    <div
      className="d-flex justify-content-center align-items-center d-none d-lg-flex"
      style={{
        height: "116px",
      }}
    >
      <div
        style={{ width: "1095px", padding: "0 17px" }}
        className="d-flex justify-content-between align-items-center "
      >
        <h1 style={{ cursor: "pointer" }}>
          <Nav.Link href="/">Çağatay Bozay</Nav.Link>
        </h1>

        <div className="d-flex align-items-center">
          <div>
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-facebook-f p-3"
            />
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-twitter p-3"
            />
            <i
              style={{ cursor: "pointer" }}
              className="fa-brands fa-instagram p-3"
            />
          </div>

          <form
            style={{ height: "50px" }}
            className="d-flex align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              style={{ outline: "none" }}
              className=" p-3 rounded-pill border-bottom border border-0"
              placeholder="Search.."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="rounded-pill green-hvr m-3 d-flex justify-content-center"
              type="submit"
            >
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass m-3 pe-1 ps-1"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
