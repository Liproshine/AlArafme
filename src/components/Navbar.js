import { Link } from "gatsby";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
// import logo from '../images/'

export default function Topbar() {
  return (
    <Navbar expand="md" collapseOnSelect={true}>
      <Link to="/">
        <img src="#" alt="" /> <span className="navbar-brand">AlArafme</span>
      </Link>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="text-center ">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="nav-link" activeClassName="active">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="nav-link"
                activeClassName="active"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" activeClassName="active">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" activeClassName="active">
                Contact Us
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
