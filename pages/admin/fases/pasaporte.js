import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import Apiclient, { UPDATE_PROJECT } from "../../../services/Apiclient";

import {
  Button,
  Card,
  Label,
  FormText,
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
import { getSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";

export default function Objetivo() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const store = async () => {
    const user = await getSession();
    var data = {
      pasaporte: value.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
    };

    console.log(data);
    const res = await Apiclient.post(`${UPDATE_PROJECT}/${user.id}`, data);
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
    console.log("dat", res);
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
            <label>Pasaporte</label>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pasaporte"
                name="pasaporte"
                type="file"
                onChange={(v) => setValue(v.target.value)}
                multiple
              />
            </FormGroup>
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
