import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

export default function Menu(props) {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>ImgCatalog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <IndexLinkContainer to="/day">
            <Nav.Link eventKey={2} href="/">
              Day
            </Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/week">
            <Nav.Link eventKey={3} href="/">
              Week
            </Nav.Link>
          </IndexLinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
