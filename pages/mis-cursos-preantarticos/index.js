import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
import Swal from "sweetalert2";

import ModalRegister from "../../components/Modals/RegisterCousers";

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
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { getSession, validSession } from "../../services/sessionStore";
import Apiclient, { PROJECT } from "../../services/Apiclient";

import "react-step-progress/dist/index.css";
const Couses = (props) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
    console.log("dat", user);
  };

  useEffect(() => {
    getData();
  }, []);

  const hasSession = async () => {
    const session = await validSession();
    console.log(session);
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
    if (data?.titulo == null) {
      Swal.fire({
        title: "Fallo!",
        text: "Todavía no tienes datos por guardar",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (data.resumen_ejecutivo == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta titulo",
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
      data?.trayectoria_y_capacidad_en_investigacion &&
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
        <Row className="d-flex justify-content-between mt-6">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0"> Cursos</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Expedición</th>
                    <th scope="col">Año</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Descargar certificado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>Vigente o vencido</td>
                    <td><button>Descargar</button></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Couses.layout = Admin;

export default Couses;
