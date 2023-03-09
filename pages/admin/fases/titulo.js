import React, { useState, useEffect } from "react";

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
import Swal from "sweetalert2";


import Apiclient, { PROJECT_TITLE, PROJECT } from "../../../services/Apiclient";

import { getSession } from "../../../services/sessionStore";

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";

export default function Metodologia() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
    console.log("dat", data.titulo);
    console.log("user", user);
  };

  useEffect(() => {
    getData();
  }, []);

  const stoteTitle = async () => {
    const investigadores = await getSession();
    const data = {
      titulo: value,
      id_investigador: investigadores.id,
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
      <Container className="mt-3">
        <div className="pl-lg-4">
          <FormGroup>
            <label>Titulo</label>
            <p>
              Escriba el titulo del proyecto el cual piensa someter.
            </p>
            <Input
              className="form-control-alternative"
              rows="4"
              type="textarea"
              onChange={(v) => setValue(v.target.value)}
            />
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
