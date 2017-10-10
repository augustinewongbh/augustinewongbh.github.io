import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./stylesheets/Header.css";
import Scrollchor from "react-scrollchor";
const Header = () => (
  <header>
    <Navbar light>
      <NavbarBrand href="/">AW</NavbarBrand>
      <Nav>
        <NavItem>
          <Scrollchor to="#Home">Home</Scrollchor>
        </NavItem>
        <NavItem>
          <Scrollchor to="#Portfolio">Portfolio</Scrollchor>
        </NavItem>
        <NavItem>
          <Scrollchor to="#About">About</Scrollchor>
        </NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
