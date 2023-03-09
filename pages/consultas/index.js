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
  Form,
  Label,
  FormGroup,
  Input,
  Card,
  Container,
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
import StepProgressBar from "react-step-progress";
import Header from "components/Headers/Header.js";
import { getSession, validSession } from "../../services/sessionStore";
import Apiclient, { PROJECT } from "../../services/Apiclient";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import "react-step-progress/dist/index.css";
const Queries = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
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
        text: "Todavia no tienes datos por guardar",
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
        text: "Has finalizado la inscripcion de tu proyecto en tu correo se te notificara el codigo para sigas consultando el estado de tu proyecto",
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
  //   linea de tiempo
  const step1Content = <h1>Sometido</h1>;
  const step2Content = <h1>Paso 2</h1>;
  const step3Content = <h1>Paso 3 </h1>;

  const previousBtnName = "Jola";
  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    return false;
  }
  function onFormSubmit() {
    //    function
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="align-items-center" xl="12">
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="p-4">
              <Form>
                <FormGroup floating>
                  <li>
                    <b>{"Administrador"} dice:</b>
                  </li>
                </FormGroup>
                <FormGroup>
                  <Input id="exampleText" name="text" type="textarea" />
                  <Label for="exampleText">Mensaje</Label>
                </FormGroup>
                <Button>Enviar</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Queries.layout = Admin;

export default Queries;
