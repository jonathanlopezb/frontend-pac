import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <Link href="/admin/dashboard">
            <span>
              <NavbarBrand>
                <img
                  alt="..."
                  src={require("assets/img/brand/pac.png")}
                  className="rounded-circle w-100"
                />
              </NavbarBrand>
            </span>
          </Link>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link href="/admin/dashboard">
                    <img
                      alt="..."
                      src={require("assets/img/brand/pac.jpeg")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/auth/register">
                  <NavLink className="nav-link-icon">
                    <i className="ni ni-circle-08" />
                    <span className="nav-link-inner--text">Registro de investigadores</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/auth/login">
                  <NavLink className="nav-link-icon">
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">Inicia Sesión</span>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
