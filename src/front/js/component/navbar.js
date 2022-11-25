import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Context } from "../store/appContext.js";

export const NavB = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://raw.githubusercontent.com/NicolasArayaB/starwars-blog-reading-list/master/dist/img/starwarslogo.png"
            width="90"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Favorites" id="basic-nav-dropdown">
              {store.favorites.map((item, index) => (
                <NavDropdown.Item className="navbar" key={index}>
                  {" "}
                  {item}{" "}
                  <i
                    onClick={() => actions.deleteFavorites(index)}
                    className="fa-regular fa-trash-can"
                  ></i>{" "}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
