/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://cco.gov.co"
              rel="noopener noreferrer"
              target="_blank"
            >
             Comisión Colombiana del Océano
            </a>
          </div>
        </Col>

        {/* <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://www.creative-tim.com?ref=njsad-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Creative Tim
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.creative-tim.com/presentation?ref=njsad-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://blog.creative-tim.com?ref=njsad-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=njsad-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                MIT License
              </NavLink>
            </NavItem>
          </Nav>
        </Col> */}
      </Row>
    </footer>
  );
}

export default Footer;
