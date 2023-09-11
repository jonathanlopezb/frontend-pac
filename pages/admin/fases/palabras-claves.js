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
  InputGroup,
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
import Apiclient, { UPDATE_PROJECT, PALABRAS, PROJECT } from "../../../services/Apiclient";
import { getSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";

export default function PalabrasClaves() {
  const router = useRouter();
  const [project, setProject] = useState([]);
  const [data, setData] = useState({});
  const [fields, setFields] = useState([""]);
  const [value, setValue] = useState("");

  const store = async (e) => {
    e.preventDefault();
    let data = {
      palabra: value.palabra,
      id_project: project.id,
    };
    const res = await Apiclient.post(`${PALABRAS}`, data);
    console.log("res", res)
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

  // <-- Componente Input Field -->
  const FieldComponent = ({ fields, setFields }) => {
    const handleAddField = () => {
      setFields([...fields, ""]);
    };

    const handleRemoveField = (index) => {
      const newFields = [...fields];
      newFields.splice(index, 1);
      setFields(newFields);
    };

    const handleFieldChange = (event, index) => {
      const newFields = [...fields];
      newFields[index] = event.target.value;
      setFields(newFields);
    };

    return (
      <div>
        {fields.map((field, index) => (
          <div key={index}>
            <Input
              value={field}
              onChange={(event) => handleFieldChange(event, index)}
            />
            <Button onClick={() => handleRemoveField(index)}>
              Eliminar campo
            </Button>
          </div>
        ))}
        <Button onClick={handleAddField}>Agregar campo</Button>
      </div>
    );
  };
  // <-- // Componente Input Field -->

  const getProject = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setProject(response.data);
    console.log("dat", response.data);

    if (response.data != null) {
      const responseEval = await Apiclient.get(
        `${PALABRAS}/${response.data.id}`
      );
      setData(responseEval.data);
      console.log("datg", `${PALABRAS}/${response.data.id}`);
      console.log("datg", responseEval);
    }
  };

  useEffect(() => {
    getProject();
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
            <label>Palabras claves</label>
            <InputGroup className="input-group-alternative mb-3">
              <Input
                type="field"
                name="palabra"
                id="palabra"
                onChange={(v) => setValue(v.target.value)}
                required
              />
            </InputGroup>

            {/* <FieldComponent value="" fields={fields} setFields={setFields} /> */}
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
