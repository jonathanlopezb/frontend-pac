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

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";
import Apiclient, { PROJECT, UPDATE_PROJECT } from "../../../services/Apiclient";

import { getSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";

export default function Planteamiento() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);


  const store = async () => {
    const user = await getSession();
    const data = {
      planteamiento_del_problema: value,
    };
    console.log(data);
    const res = await Apiclient.post(`${UPDATE_PROJECT}/${user.id}`, data);
    console.log(res);
    if (res.status === "ok") {
      Swal.fire({
        title: "Felicidades!",
        text: "Tu fase ha sido guardada",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push("/admin/dashboard");
    } else {
      alert("error");
    }
  };

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
    if (response?.data == null) {
        router.push("/admin/dashboard")
    }
  };

  useEffect(() => {
    getData();
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
            <label>Planteamiento del Problema</label>
            <Input
              className="form-control-alternative"
              placeholder="Escribe el texto aquí "
              rows="4"
              type="textarea"
              onChange={(v) => setValue(v.target.value)}
              defaultValue={data.planteamiento_del_problema }
            />
            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={store}
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
