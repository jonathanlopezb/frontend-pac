import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
import { getSession, validSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";



export default function PalabrasClaves() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([""]);
  const [value, setValue] = useState("");


  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setData(response.data);
    if (response?.data == null) {
        router.push("/admin/dashboard")
    }
  };

  const store = async () => {
    const user = await getSession();
    const data = {
      area_tematica: value,
    };
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

  useEffect(() => {
    getData();
  }, []);

  const volver = () => {
    router.push("/admin/dashboard");
  };

  return (
    <>
      <AdminNavbar />
      <Container className="mt-3">
        <div className="pl-lg-4">
          <FormGroup>
            <label>Área temática</label>
            {data?.area_tematica ?  <h5>Usted ha elegido:  {data?.area_tematica }</h5> : null}
            <Input
              className="form-control-alternative"
              placeholder="Escribe el texto aquí "
              rows="4"
              type="select"
              name="area_tematica"
              onChange={(v) => setValue(v.target.value)}

            >
              <option>Seleccione el área temática</option>
              <option value="Ciencias de la tierra">Ciencias de la tierra</option>
              <option value="Ciencias de la vida">Ciencias de la vida</option>
              <option value="Ciencias físicas">Ciencias físicas</option>
              <option value="Ciencias sociales y humanas">Ciencias sociales y humanas</option>
            </Input>
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
              onClick={volver}
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
