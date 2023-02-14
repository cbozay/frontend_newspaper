import React from "react";
import "../Styles/GeneralStyle.css";

const TopHeader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center d-none d-lg-flex"
      style={{
        height: "116px",
      }}
    >
      <div
        style={{ width: "1125px", padding: "0 17px" }}
        className="d-flex justify-content-between align-items-center "
      >
        <h1 style={{ cursor: "pointer" }}>Çağatay Bozay</h1>
        <div className="d-flex align-items-center">
          <div>
            <i className="fa-brands fa-facebook-f p-3" />
            <i className="fa-brands fa-twitter p-3" />
            <i className="fa-brands fa-instagram p-3" />
          </div>

          <input
            style={{ outline: "none" }}
            className="m-3 p-3 rounded-pill border-bottom border border-0"
            placeholder="Search.."
          />
          <button className="rounded-pill green-hvr m-3 d-flex justify-content-center">
            <i
              style={{ color: "white" }}
              className="fa-solid fa-magnifying-glass m-3 pe-1 ps-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
