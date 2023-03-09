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
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import "react-step-progress/dist/index.css";

import StepProgressBar from "react-step-progress";
import { ProgressBar, Step } from "react-step-progress-bar";

import Header from "components/Headers/Header.js";

function Profile() {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [user, setUser] = React.useState({});

  const hasSession = async () => {
    const usuario = await getSession();
    setUser(usuario);
  };
  React.useEffect(() => {
    hasSession();
  }, []);

  //   linea de tiempo
  const step1Content = <h1>Paso 1</h1>;
  const step2Content = <h1>Paso 2</h1>;
  const step3Content = <h1>Paso 3 </h1>;

  const previousBtnName = "Jola";
  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    return true;
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

      <Container className="mt--7" fluid>
        <Row>
          
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <a href="/proyecto">
                <CardBody className="pt-0">
                  <div className="text-center mt-md-4">
                    <h3>Código del proyecto</h3>
                    <hr className="my-4" />

                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Año
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Linea de investigación 
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Area del conocimiento 
                    </div>
                    <hr className="my-4" />
                    <div>
                      <i className="ni education_hat mr-2 text-success" />
                      Expedición 
                    </div>
                  </div>
                </CardBody>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Profile.layout = Admin;

export default Profile;
