
import React from "react";
import { getSession, logout } from "../../services/sessionStore";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Table,
  Col,
} from "reactstrap";
import ModalPublic from "../../components/Modals/Publications";
import ModalPublicOther from "../../components/Modals/OtherPublication";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import UpdateProfile from "../../components/Modals/UpdateProfile";

function Profile() {
  const [user, setUser] = React.useState({});
  const hasSession = async () => {
    const usuario = await getSession();
    setUser(usuario);
  };
  React.useEffect(() => {
    hasSession();
  }, []);
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/icons/person.png")}
                    />
                  </div>
                </Col>
              </Row>

              <CardBody className="pt-0 mt-5 pt-md-4">
                <div className="text-center mt-md-7">
                  <h3 className="text-capitalize">
                    {user.primer_nombre} {user.primer_apellido} {user.second_lastname}
                  </h3>
                  <div className="h5 mt-4 text-capitalize">
                    <i className="ni business_briefcase-24 mr-2" />
                    {user.institution}
                  </div>
                  <hr className="my-4" />

                  <UpdateProfile />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mis datos</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombres
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.primer_nombre}

                            id="input-username"
                            placeholder="Username"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Primer Apellido
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.primer_apellido}
                            id="input-first-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Segundo Apellido
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.second_lastname}
                            id="input-last-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Nivel de Estudios
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue={user.profesion}
                            type="email"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo electrónico
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue={user.correo}
                            type="email"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Correo electrónico alterno
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue={user.correo}
                            type="email"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Líneas de investigación
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.linea_investigacion}
                            id="input-last-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Intereses
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.intereses}
                            id="input-last-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            ID LinkedIn
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.user_linkedin}
                            id="input-last-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Usuario Twitter
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.user_twitter}
                            id="input-last-name"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Publicaciones
                          </label>
                          <ul>
                            <li>
                              <a href=""></a>
                            </li>
                          </ul>
                        </FormGroup>
                        <Row className="mt-5">
                          <Col className="mb-5 mb-xl-0" xl="6">
                            <ModalPublic />
                          </Col>
                          <Col className="mb-5 mb-xl-0" xl="6">
                            <ModalPublicOther />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Información de contacto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Dirección
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Ciudad
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            País
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Profile.layout = Admin;

export default Profile;
