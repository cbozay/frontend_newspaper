import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setMenuTab } from "../Redux/menuTabSlice";
import { setSearchClicked } from "../Redux/searchSlice";

function Header() {
  // Here Search---Start
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchClicked(search));
  };
  // Here Search---End

  const dispatch = useDispatch();
  const { menuTab } = useSelector((state) => state);
  console.log(menuTab.menuTab);
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#fff" }}
          className="mb-3 border-bottom"
        >
          <Container style={{ maxWidth: "1095px" }}>
            <Navbar.Brand href="/" className="d-lg-none">
              <b>Çağatay Bozay</b>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Çağatay Bozay
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 ">
                  <Nav.Link
                    onClick={() => {
                      dispatch(setMenuTab(1));
                    }}
                    className={`menuLink ${
                      menuTab.menuTab === 1 ? "menuLink-active" : ""
                    }`}
                    href="/"
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(setMenuTab(2));
                    }}
                    className={`menuLink ${
                      menuTab.menuTab === 2 ? "menuLink-active" : ""
                    }`}
                    href="/categories"
                  >
                    CATEGORIES
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(setMenuTab(3));
                    }}
                    className={`menuLink ${
                      menuTab.menuTab === 3 ? "menuLink-active" : ""
                    }`}
                    href="/about"
                  >
                    ABOUT
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

          <form
            style={{ height: "50px" }}
            className="d-flex align-items-center d-lg-none"
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
        </Navbar>
      ))}
    </>
  );
}

export default Header;
