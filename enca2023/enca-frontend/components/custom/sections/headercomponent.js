/* eslint-disable */
import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/green-logo.png";
import logo2 from "../../../assets/images/logos/white-logo.png";
import image from "next/image";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Opciones de header</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <Image src={logo} alt="texto alterno" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Acerca de</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Nuestro trabajo</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Servicios <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action 1</DropdownItem>
                    <DropdownItem>Action 2</DropdownItem>
                    <DropdownItem>Action 3</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Action 4</DropdownItem>
                    <DropdownItem>Action 5</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Action 6</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Otro link</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-outline-info" href="#">
                    Boton ejemplo
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="header1 po-relative bg-dark">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand href="#">
              <Image src={logo2} alt="texto alterno" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Acerca de</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Nuestro trabajo</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Servicios <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action 1</DropdownItem>
                    <DropdownItem>Action 2</DropdownItem>
                    <DropdownItem>Action 3</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Action 4</DropdownItem>
                    <DropdownItem>Action 5</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Action 6</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Otro link</NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-info" href="#">
                    Boton ejemplo
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
