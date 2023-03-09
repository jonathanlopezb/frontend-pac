import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  FormGroup,
  Form,
  Input,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  InputGroup,
  Table,
  Container,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import Swal from "sweetalert2";

import Apiclient, { PROJECT_TITLE } from "../../../services/Apiclient";
import { getSession } from "../../../services/sessionStore";

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";

export default function Metodologia() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const stoteTitle = async () => {
    const user = await getSession();
    const data = {
      titulo: value,
      id_user: user.id,
    };
    console.log(data);
    const res = await Apiclient.post(PROJECT_TITLE, data);
    console.log(res);
    if (res.status === "ok") {
      Swal.fire({
        title: "Felicidades!",
        text: "Tu titulo del proyecto ha sido gardada satisfactoriamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push("/admin/dashboard");
    } else {
      alert("error");
    }
  };

  const voler = () => {
    router.back();
  };

  return (
    <>
      <AdminNavbar />
      <Container className="mt-4">
        <div className="pl-lg-4">
          <FormGroup>
            <label>Presupuesto</label>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-dark text-lg-center">
                <tr>
                <th scope="col" style={{ color: " #fff" }}>
                    Nº
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Actividad
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Justificación {" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                  ENTIDAD QUE LO FINANCIA{" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    {" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                  1.
                  </th>
                  <td>
                  Talento humano: El rubro de talento humano se dispone para <br/>
                  el registro del personal científico, de investigación y demás <br/>
                  requerido para la correcta ejecución del proyecto. Justifique <br/>
                  e indique el tiempo de dedicación del personal de acuerdo con <br/>
                  las necesidades de la propuesta de proyecto.
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
                        type="email"
                        name="email"
                        id="nationality"
                        // onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={stoteTitle}
            >
              Guardar Cambios
            </Button>
            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={voler}
            >
              Volver
            </Button>
          </FormGroup>
        </div>
      </Container>
      <Footer />
    </>
  );
}
