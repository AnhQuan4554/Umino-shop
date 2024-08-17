import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/icons/logo.svg";
import { Image } from "react-bootstrap";
import Toolbar from "./Toolbar";
import { NavContainerStyled } from "../styles/NavigationStyled";

const dropdownTitles = [
  "Home",
  "Shop",
  "Products",
  "Pages",
  "Blogs",
  "Sale",
  "Buy Umino",
];

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <NavContainerStyled>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ display: "flex !important", justifyContent: "center" }}
        >
          <Nav>
            {dropdownTitles.map((title, index) => (
              <NavDropdown
                key={index}
                title={title}
                style={{
                  marginRight: index !== dropdownTitles.length - 1 ? "30px" : 0,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
        <Toolbar />
      </NavContainerStyled>
    </Navbar>
  );
};

export default Navigation;
