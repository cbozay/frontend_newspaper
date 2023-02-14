import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
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
          <Container style={{ maxWidth: "1125px" }}>
            <Navbar.Brand href="#" className="d-lg-none">
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
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/business">BUSINESS</Nav.Link>
                  <Nav.Link href="/entertainment">ENTERTAINMENT</Nav.Link>
                  <Nav.Link href="/health">HEALTH</Nav.Link>
                  <Nav.Link href="/science">SCIENCE</Nav.Link>
                  <Nav.Link href="/sports">SPORTS</Nav.Link>
                  <Nav.Link href="/technology">TECHNOLOGY</Nav.Link>
                  <Nav.Link href="/about">ABOUT</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
