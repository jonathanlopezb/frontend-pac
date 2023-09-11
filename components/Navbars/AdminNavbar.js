import React from "react";
import Link from "next/link";
import { UsageState, useEffect } from "react";
import { getSession, logout } from "../../services/sessionStore";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Progress,
} from "reactstrap";
import { useRouter } from "next/router";

function AdminNavbar({ brandText }) {
  const [session, setSession] = React.useState(getSession());
  const [user, setUser] = React.useState({});
  const router = useRouter();

  const hasSession = async () => {
    const usuario = await getSession();
    setUser(usuario);
  };

  const logOut = async () => {
    await logout();
    router.push("/auth/login");
  };

  const irPerfil = () => {
    router.push("/admin/perfil");
  };

  useEffect(() => {
    hasSession();
  }, []);

  return (
    <>
      <Navbar
        className="navbar-top navbar-dark"
        expand="md"
        id="navbar-main"
        style={{ background: "#263C69" }}
      >
        <Container fluid>
          <Link href="/">
            <span className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              {user.name_project}
            </span>
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Buscar..." type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <i className="ni ni-single-02" />
                    {/* <img
                      alt="..."
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    /> */}
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold text-capitalize">
                      {user.primer_nombre} {user.primer_apellido}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem onClick={irPerfil}>
                  <i className="ni ni-single-02" />
                  <span>Ver perfil</span>
                </DropdownItem>
                <DropdownItem onClick={logOut}>
                  <i className="ni ni-user-run" />
                  <span>Salir</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
