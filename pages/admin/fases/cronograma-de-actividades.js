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

export default function Actividades() {
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
            <label>Cronograma de Actividades</label>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-dark text-lg-center">
                <tr>
                  <th scope="col" style={{ color: " #fff" }}>
                    N° Actividad
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Descripción Actividad{" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Inicio{" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Final{" "}
                  </th>
                  <th scope="col" style={{ color: " #fff" }}>
                    Ejecución en n° meses
                  </th>
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
