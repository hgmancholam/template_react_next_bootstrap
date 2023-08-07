import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Home
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/admin">
                    <a
                      className={
                        router.pathname == "/admin"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Administración
                    </a>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Componentes <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem tag="a" href="/basic">
                      Básicos
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="a" href="/custom">
                      Personalizados
                    </DropdownItem>
                    <DropdownItem divider />
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <div className="act-buttons">
                <NavLink
                  href="#"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Boton_ejemplo
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
