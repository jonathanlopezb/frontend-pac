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
const Projects = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [data, setData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
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
        text: "Todavia no tienes datos por guardar",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (data.resumen_ejecutivo == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta Título",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else if (data.planteamiento_del_problema == null) {
      Swal.fire({
        title: "Guardado!",
        text: "Tus fases han sido guardadas hasta el planteamiento del problema",
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
  const steps = [
    {
      status: "Sometido"
    },
    {
      status: "Evaluación"
    },
    {
      status: "Resultado"
    },
  ]
  const transfer = {
    status: "Compile" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="align-items-center" xl="12">
          <Col className="mb-5 mb-xl-0" xl="12">
            {/* <div className="col">
            <h3 className="mb-0"> Agregar Investigadores a mi proyecto</h3>
          </div> */}
            {/* <StepProgressBar
            startingStep={0}
            onSubmit={onFormSubmit}
            previousBtnName={"Atras"}
            nextBtnName="Siguiente"
            steps={[
              {
                label: 'Sometido',
                name: 'Sometido',
                content: step1Content
              },
              {
                name: "step 2",
                validator: step3Validator,
              },
              {
                name: "step 3",
                validator: step3Validator,
              },
            ]}
          /> */}
            {/* <ProgressBar
              percent={0}
              filledBackground="#263C69"
            >
              <Step transition="scale" text="hola">
                {({ accomplished }) => (
                  <a href="">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      //   src="dashboard/assets/img/brand/pgn-progress.png"
                      src="../../assets/img/brand/marque-dentro-del-circulo.png"
                    />
                  </a>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <a href="">
                    <img
                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                      width="30"
                      src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                    />
                  </a>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                    width="30"
                    src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                  />
                )}
              </Step>
            </ProgressBar> */}
                  <div className="col">
        <ProgressBar
          width={1000}
          percent={
            10 *
              ((getStepPosition(transfer.status) + 1) / (steps.length - 1)) -
            1
          }
          filledBackground="linear-gradient(to right, #41ad49, #41ad49)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                // position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "black",
                      backgroundColor: accomplished ? "green" : "gray"
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    {step.status}
                    
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">

          </Col>
        </Row>
      </Container>
    </>
  );
};

Projects.layout = Admin;

export default Projects;
