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

import Apiclient, { PROJECT_TITLE, UPDATE_PROJECT } from "../../../services/Apiclient";

import { getSession } from "../../../services/sessionStore";

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";

export default function Metodologia() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const store = async () => {
    const user = await getSession();
    const data = {
      presupuesto: value,
    };
    

    var filename = data.presupuesto.replace(/[^a-z0-9]/gi, '_').toLowerCase();

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
  };

  const voler = () => {
    router.back();
  };

  return (
    <>
      <>
        <AdminNavbar />
        <Container className="mt-3">
          <div className="pl-lg-4">
            <FormGroup>
              <label>Presupuesto</label>
              <FormGroup>
                <Input
                  id="presupuesto"
                  name="presupuesto"
                  type="file" 
                  onChange={(v) => setValue(v.target.value)}
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
    </>
  );
}
