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
import Apiclient, { PROJECT, EVALUADORES } from "../../services/Apiclient";

import "react-step-progress/dist/index.css";
import AddInvest from "../../components/CoInvest/AddInvest.js";
import CoInvest from "../../components/CoInvest/CoInvest.js";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [dataEval, setDataEval] = useState([]);
  const [project, setProject] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response?.data);
  };

  const getProject = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setProject(response.data);
    console.log("datgaada", response);

    if (response.data !== null) {
      const responseEval = await Apiclient.get(
        `${EVALUADORES}/${response.data.id}`
      );
      setDataEval(responseEval.data);
      console.log("datg", responseEval);
    }
  };

  const getDataEval = async () => {};

  useEffect(() => {
    getDataEval();
    getProject();
    getData();
  }, []);

  const hasSession = async () => {
    const session = await validSession();
    if (session == false) {
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    hasSession();
  }, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const save = () => {
    if (
      data?.titulo &&
      data?.aspectos_propiedad_intelectual &&
      data?.bibliografia &&
      data?.resumen_ejecutivo &&
      data?.planteamiento_del_problema &&
      data?.carta_aval &&
      data?.estado_del_arte &&
      data?.identificacion_caracterizacion &&
      data?.metodologia &&
      data?.palabras &&
      data?.trayectoria_y_capacidad_en_investigacion_institucion &&
      data?.trayectoria_y_capacidad_en_investigacion_investigador &&
      data?.impacto_ambiental &&
      data?.area_tematica &&
      data?.objetivo_general &&
      data?.objetivo_especifico &&
      data?.pasaporte &&
      data?.presupuesto &&
      data?.actividades &&
      dataEval
    ) {
      Swal.fire({
        title: "Guardado!",
        text: "Tu información ha sido guardada exitosamente. Para terminar el proceso, por favor dar click en el botón Finalizar y enviar",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Guardado!",
        text: "Tu información ha sido guardada exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  };
  const finalizar = () => {
    if (
      data?.titulo &&
      data?.aspectos_propiedad_intelectual &&
      data?.bibliografia &&
      data?.resumen_ejecutivo &&
      data?.planteamiento_del_problema &&
      data?.carta_aval &&
      data?.estado_del_arte &&
      data?.identificacion_caracterizacion &&
      data?.metodologia &&
      data?.palabras &&
      data?.trayectoria_y_capacidad_en_investigacion_institucion &&
      data?.trayectoria_y_capacidad_en_investigacion_investigador &&
      data?.impacto_ambiental &&
      data?.area_tematica &&
      data?.objetivo_general &&
      data?.objetivo_especifico &&
      data?.pasaporte &&
      data?.presupuesto &&
      data?.actividades &&
      dataEval
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

  const validateDateSet = () => {
    if (data == null) {
      Swal.fire({
        title: "Error!",
        text: "Debes colocar primero un titulo a tu proyecto",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      router.push("/admin/dashboard");
    } else {
      null;
    }
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <h5></h5>
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
                          Título del proyecto
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape ${
                            data?.titulo ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow `}
                        >
                          <i
                            className={
                              data?.titulo
                                ? "ni ni-check-bold "
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href={"/admin/fases/area-tematica"}>
                <a>
                  <CardBody
                    style={data?.area_tematica && { background: "#D7D7D7" }}
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          área Temática
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape  ${
                            data?.area_tematica ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.area_tematica
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href={"/admin/fases/palabras-claves"}>
                <a>
                  <CardBody style={data?.palabras && { background: "#D7D7D7" }}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Palabras claves
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape  ${
                            data?.palabras ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.palabras
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href={"/admin/fases/resumen-ejecutivo"}>
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
                          className={`icon icon-shape  ${
                            data?.resumen_ejecutivo
                              ? "bg-green"
                              : "bg-yellow-ind"
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href={"/admin/fases/planteamiento-del-problema"}>
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
                          className={`icon icon-shape  ${
                            data?.planteamiento_del_problema
                              ? "bg-green"
                              : "bg-yellow-ind"
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/objetivo-general">
                <a>
                  <CardBody
                    style={data?.objetivo_general && { background: "#D7D7D7" }}
                  >
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
                          className={`icon icon-shape  ${
                            data?.objetivo_general
                              ? "bg-green"
                              : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.objetivo_general
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/objetivo-especifico">
                <a>
                  <CardBody
                    style={
                      data?.objetivo_especifico && { background: "#D7D7D7" }
                    }
                  >
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Objetivos Específicos
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div
                          className={`icon icon-shape  ${
                            data?.objetivo_especifico
                              ? "bg-green"
                              : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.objetivo_especifico
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/estado-del-arte">
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
                          className={`icon icon-shape  ${
                            data?.estado_del_arte ? "bg-green" : "bg-yellow-ind"
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

          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/metodologia">
                <a>
                  <CardBody
                    style={data?.metodologia && { background: "#D7D7D7" }}
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
                          className={`icon icon-shape  ${
                            data?.metodologia ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.metodologia
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/identificacion-y-caracterizacion">
                <a>
                  <CardBody
                    style={
                      data?.identificacion_caracterizacion && {
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
                          className={`icon icon-shape  ${
                            data?.identificacion_caracterizacion
                              ? "bg-green"
                              : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.identificacion_caracterizacion
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/trayectoria-y-capacidad-en-investigacion-institucion-investigador">
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
                          className={`icon icon-shape  ${
                            data?.trayectoria_y_capacidad_en_investigacion_investigador
                              ? "bg-green"
                              : "bg-yellow-ind"
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
              <Link href="/admin/fases/trayectoria-y-capacidad-en-investigacion-institucion">
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
                          className={`icon icon-shape  ${
                            data?.trayectoria_y_capacidad_en_investigacion_institucion
                              ? "bg-green"
                              : "bg-yellow-ind"
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/impacto-ambiental-del-proyecto">
                <a>
                  <CardBody
                    style={
                      data?.impacto_ambiental && {
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
                          className={`icon icon-shape  ${
                            data?.impacto_ambiental
                              ? "bg-green"
                              : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.impacto_ambiental
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
          <Col lg="12" xl="12" onClick={validateDateSet}>
            <Card className="card-stats mb-4 mb-xl-0 m-2">
              <Link href="/admin/fases/aspectos-de-propiedad-intelectual">
                <a>
                  <CardBody
                    style={
                      data?.aspectos_propiedad_intelectual && {
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
                          className={`icon icon-shape  ${
                            data?.aspectos_propiedad_intelectual
                              ? "bg-green"
                              : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.aspectos_propiedad_intelectual
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
              <Link href="/admin/fases/bibliografia">
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
                          className={`icon icon-shape  ${
                            data?.bibliografia ? "bg-green" : "bg-yellow-ind"
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
              <Link href="/admin/fases/posibles-evaluadores">
                <a>
                  <CardBody
                    style={
                      dataEval.nombres && {
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
                          className={`icon icon-shape  ${
                            dataEval.id ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              dataEval.id
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
              <Link href="/admin/fases/pasaporte">
                <a>
                  <CardBody
                    style={
                      data?.pasaporte && {
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
                          className={`icon icon-shape  ${
                            data?.pasaporte ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.pasaporte
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
              <Link href="/admin/fases/carta-aval">
                <a>
                  <CardBody
                    style={
                      data?.carta_aval && {
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
                          className={`icon icon-shape  ${
                            data?.carta_aval ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.carta_aval
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
                          className={`icon icon-shape  ${
                            data?.presupuesto ? "bg-green" : "bg-yellow-ind"
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
                      data?.actividades && {
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
                          className={`icon icon-shape  ${
                            data?.actividades ? "bg-green" : "bg-yellow-ind"
                          } text-white rounded-circle shadow`}
                        >
                          <i
                            className={
                              data?.actividades
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
        <AddInvest />
        <CoInvest />

        <Row className="d-flex justify-content-between">
          <Button
            className="mt-4"
            color="secondary"
            type="button"
            onClick={save}
          >
            Guardar
          </Button>
          {data?.titulo &&
          data?.aspectos_propiedad_intelectual &&
          data?.bibliografia &&
          data?.resumen_ejecutivo &&
          data?.planteamiento_del_problema &&
          data?.carta_aval &&
          data?.estado_del_arte &&
          data?.identificacion_caracterizacion &&
          data?.metodologia &&
          data?.palabras &&
          data?.trayectoria_y_capacidad_en_investigacion_institucion &&
          data?.trayectoria_y_capacidad_en_investigacion_investigador &&
          data?.impacto_ambiental &&
          data?.area_tematica &&
          data?.objetivo_general &&
          data?.objetivo_especifico &&
          data?.pasaporte &&
          data?.presupuesto &&
          data?.actividades &&
          dataEval ? (
            <Button
              className="mt-4"
              type="button"
              color="primary"
              onClick={finalizar}
            >
              Finalizar y Enviar
            </Button>
          ) : null}
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
