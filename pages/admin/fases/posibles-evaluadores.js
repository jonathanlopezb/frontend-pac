import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import Apiclient, {
  UPDATE_PROJECT,
  EVALUADORES,
  PROJECT,
} from "../../../services/Apiclient";

import {
  Button,
  Card,
  FormGroup,
  Form,
  InputGroup,
  Input,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
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

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";
import { getSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";

export default function Metodologia() {
  const router = useRouter();
  const [project, setProject] = useState([]);
  const [data, setData] = useState({});
  const [value, setValue] = useState({
    nombres: "",
    apellidos: "",
    cargo: "",
    correo_electronico: "",
    telefono: "",
    institucion: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const Evaluadores = async (e) => {
    e.preventDefault();
    let data = {
      nombres: value.nombres,
      apellidos: value.apellidos,
      cargo: value.cargo,
      correo_electronico: value.correo_electronico,
      telefono: value.telefono,
      institucion: value.institucion,
      id_project: project.id,
    };
    const res = await Apiclient.post(`${EVALUADORES}`, data);
    if (res.status === "ok") {
      Swal.fire({
        title: "Felicidades!",
        text: "Tu evaluador ha sido guardado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push("/admin/dashboard");
    } else {
      alert("error");
    }
  };

  const getProject = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setProject(response.data);
    console.log("dat", response.data);

    if (response.data != null) {
      const responseEval = await Apiclient.get(`${EVALUADORES}/${response.data.id}`);
      setData(responseEval.data);
      console.log("datg", `${EVALUADORES}/${response.data.id}`);
      console.log("datg", responseEval);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const voler = () => {
    router.back();
  };

  return (
    <>
      <AdminNavbar />
      <Container className="mt-3">
        <div className="pl-lg-4">
          <FormGroup>
            <label>Posibles Evaluadores</label>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Coreo electrónico</th>
                  <th scope="col">Teléfono </th>
                  <th scope="col">Institución </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        name="nombres"
                        className="form-control-alternative"
                        type="text"
                        id="nombres"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </th>
                  <td>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="text"
                        name="cargo"
                        id="cargo"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="email"
                        name="correo_electronico"
                        id="correo_electronico"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="number"
                        name="telefono"
                        id="telefono"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="text"
                        name="institucion"
                        id="institucion"
                        telefono
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Coreo electrónico</th>
                  <th scope="col">Teléfono </th>
                  <th scope="col">Institución </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data)
                  ? data.map((data) => (
                      <tr key={data.id}>
                        <th scope="row">{data.nombres}</th>
                        <td key={data.id}>{data.apellidos}</td>
                        <td key={data.id}>{data.cargo}</td>
                        <td key={data.id}>{data.correo_electronico}</td>
                        <td key={data.id}>{data.telefono}</td>
                        <td key={data.id}>{data.institucion}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>

            {/* {misEvaluadores} */}

            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={Evaluadores}
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
