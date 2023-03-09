import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
import Swal from "sweetalert2";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledTooltip,
  NavItem,
  NavLink,
  Nav,
  FormGroup,
  InputGroup,
  Input,
  Progress,
  Table,
  Container,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "../../layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts.js";

import Header from "components/Headers/Header.js";
import { getSession, validSession } from "../../services/sessionStore";
import Apiclient, { PROJECT } from "../../services/Apiclient";

import "react-step-progress/dist/index.css";
const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
    console.log("dat", data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const hasSession = async () => {
  //   const session = await validSession();
  //   console.log(session);
  //   if (session == false) {
  //     router.push("/auth/login");
  //   }
  // };

  // useEffect(() => {
  //   hasSession();
  // }, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const save = () => {
    if (data?.titulo == null) {
      Swal.fire({
        title: "Fallo!",
        text: "Todavía no tienes datos por guardar",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta el resumen ejecutivo",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else if (data.resumen_ejecutivo == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta titulo del proyecto",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else if (data.metodología == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta el resumen ejecutivo",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else if (data.metodología == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta metodología",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };
  const finalizar = () => {
    if (
      data?.titulo &&
      data?.resumen_ejecutivo &&
      data?.metodología &&
      data?.trayectoria_y_capacidad_en_investigacion_investigador &&
      data?.identificacion_y_caracterizacion &&
      data?.bibliografia &&
      data?.impacto_ambiental_del_proyecto &&
      data?.aspectos_de_propiedad_intelectual
    ) {
      Swal.fire({
        title: "Felicidades!",
        text: "Has finalizado la inscripción de tu proyecto en tu correo se te notificara el código para sigas consultando el estado de tu proyecto",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Debes completar todas las fases para enviar tu proyecto",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/titulo">
                <a>
                  <CardBody style={data?.titulo && { background: "#D7D7D7" }}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Titulo del proyecto
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.titulo ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.titulo
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>

          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/resumen-ejecutivo"
              >
                <a>
                  <CardBody
                    style={data?.resumen_ejecutivo && { background: "#D7D7D7" }}
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Resumen ejecutivo
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.resumen_ejecutivo ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.resumen_ejecutivo
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/planteamiento-del-problema"
              >
                <a>
                  <CardBody
                    style={
                      data?.planteamiento_del_problema && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Planteamiento del Problema
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.planteamiento_del_problema ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.planteamiento_del_problema
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/objetivo-general">
                <a>
                  <CardBody style={data?.objetivo && { background: "#D7D7D7" }}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Objetivo General
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.objetivo_general ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.objetivo
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/objetivo-especifico">
                <a>
                  <CardBody style={data?.objetivo_especifico && { background: "#D7D7D7" }}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Objetivo Específicos
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.objetivo ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.objetivo
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/estado-del-arte"
              >
                <a>
                  <CardBody
                    style={data?.estado_del_arte && { background: "#D7D7D7" }}
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Estado del Arte
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.estado_del_arte ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.estado_del_arte
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>

          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/metodologia">
                <a>
                  <CardBody
                    style={data?.metodología && { background: "#D7D7D7" }}
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Metodología
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.metodología ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.metodología
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/identificacion-y-caracterizacion"
              >
                <a>
                  <CardBody
                    style={
                      data?.identificacion_y_caracterizacion && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Identificación y Caracterización
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.identificacion_y_caracterizacion
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.identificacion_y_caracterizacion
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/trayectoria-y-capacidad-en-investigacion"
              >
                <a>
                  <CardBody
                    style={
                      data?.trayectoria_y_capacidad_en_investigacion_investigador && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Trayectoria y Capacidad en Investigación del
                          investigador
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.trayectoria_y_capacidad_en_investigacion_investigador
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.trayectoria_y_capacidad_en_investigacion_investigador
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/trayectoria-y-capacidad-en-investigacion"
              >
                <a>
                  <CardBody
                    style={
                      data?.trayectoria_y_capacidad_en_investigacion_institucion && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Trayectoria y Capacidad en Investigación de la
                          institución
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.trayectoria_y_capacidad_en_investigacion_institucion
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.trayectoria_y_capacidad_en_investigacion_institucion
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/impacto-ambiental-del-proyecto"
              >
                <a>
                  <CardBody
                    style={
                      data?.impacto_ambiental_del_proyecto && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Impacto Ambiental del Proyecto
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.impacto_ambiental_del_proyecto
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.impacto_ambiental_del_proyecto
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/aspectos-de-propiedad-intelectual"
              >
                <a>
                  <CardBody
                    style={
                      data?.aspectos_de_propiedad_intelectual && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Aspectos de propiedad intelectual
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.aspectos_de_propiedad_intelectual
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.aspectos_de_propiedad_intelectual
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/bibliografia"
              >
                <a>
                  <CardBody
                    style={data?.bibliografia && { background: "#D7D7D7" }}
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Bibliografía
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.bibliografia ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.bibliografia
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>

          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/aspectos-de-propiedad-intelectual"
              >
                <a>
                  <CardBody
                    style={
                      data?.aspectos_de_propiedad_intelectual && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Posibles evaluadores
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.aspectos_de_propiedad_intelectual
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.aspectos_de_propiedad_intelectual
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/pasaporte"
              >
                <a>
                  <CardBody
                    style={
                      data?.aspectos_de_propiedad_intelectual && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Pasaporte
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.aspectos_de_propiedad_intelectual
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.aspectos_de_propiedad_intelectual
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link
                href="/admin/fases/carta-aval"
              >
                <a>
                  <CardBody
                    style={
                      data?.aspectos_de_propiedad_intelectual && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Carta Aval
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.aspectos_de_propiedad_intelectual
                            ? ""
                            : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.aspectos_de_propiedad_intelectual
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/presupuesto">
                <a>
                  <CardBody
                    style={
                      data?.presupuesto && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Presupuesto
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.presupuesto ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.presupuesto
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
          <Col lg="12" xl="12">
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/cronograma-de-actividades">
                <a>
                  <CardBody
                    style={
                      data?.presupuesto && {
                        background: "#D7D7D7",
                      }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Cronograma de actividades
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${data?.presupuesto ? "" : "bg-green"
                            } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.presupuesto
                                ? "ni ni-check-bold"
                                : "ni ni-collection"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </a>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0"> Investigadores vinculados a mi proyecto</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Investigador de campo</th>
                    <th scope="col">Coreo electrónico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">
                      {" "}
                      Vincular Investigadores a mi proyecto
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Primer nombre</th>
                    <th scope="col">Segundo nombre</th>
                    <th scope="col">Primer apellido</th>
                    <th scope="col">Primer apellido</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Investigador de campo</th>
                    <th scope="col">Coreo electrónico</th>
                    <th scope="col">Institución </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="text"
                          name="apellidos"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </th>

                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="text"
                          name="apellidos"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="text"
                          name="apellidos"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="text"
                          name="apellidos"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </td>
                    <td>Co-investigador</td>
                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <select
                          className="form-control"
                          id="campo"
                          name="campo"
                          required
                        >
                          <option value="">Seleccione un valor</option>
                          <option value="si">si</option>
                          <option value="no">No</option>
                        </select>
                      </InputGroup>
                    </td>
                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="email"
                          name="email"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          type="email"
                          name="email"
                          id="nationality"
                          // onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <Button color="primary" type="button">
                        Vincular 
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between">
          <Button
            className="mt-4"
            color="secondary"
            type="button"
            onClick={save}
          >
            Guardar
          </Button>
          <Button
            className="mt-4"
            type="button"
            color="primary"
            onClick={finalizar}
          >
            Finalizar y Enviar
          </Button>
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
