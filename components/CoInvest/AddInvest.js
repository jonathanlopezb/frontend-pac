import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledTooltip,
  NavItem,
  NavLink,
  Nav,
  FormGroup,
  InputGroup,
  Input,
  Progress,
  Table,
  Container,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Apiclient, { ADDCOINVESTS, PROJECT } from "../../services/Apiclient";
import { getSession } from "../../services/sessionStore";
import Swal from "sweetalert2";

export default function AddInvest() {
  const router = useRouter();
  const [dataP, setDataP] = useState([]);
  const [value, setValue] = useState({
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    identificacion: "",
    investigador_campo: "",
    correo: "",
    institucion: "",
    id_project: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setDataP(response.data);
    console.log("dl", response.data?.id);
  };
  useEffect(() => {
    getData();
  }, []);

  const store = async (e) => {
    e.preventDefault();
    let data = {
      id_project: dataP.id,
      primer_nombre: value.primer_nombre,
      segundo_nombre: value.segundo_nombre,
      primer_apellido: value.primer_apellido,
      identificacion: value.identificacion,
      investigador_campo: value.investigador_campo,
      correo: value.correo,
      institucion: value.institucion,
    };

    const res = await Apiclient.post(`${ADDCOINVESTS}`, data);
    if (res.status === "ok") {
      Swal.fire({
        title: "Felicidades!",
        text: "Tu Investigador se ha agregado a tu proyecto satisfactoriamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      // router.push("/admin/dashboard");
      window.location.replace('');
    } else {
      alert("error");
    }
  };
  return (
    <Row className="mt-5">
      <Col className="mb-5 mb-xl-0" xl="12">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <div className="col">
                <h3 className="mb-0"> Vincular Investigadores a mi proyecto</h3>
              </div>
            </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Primer nombre</th>
                <th scope="col">Segundo nombre</th>
                <th scope="col">Primer apellido</th>
                <th scope="col">Segundo apellido</th>
                <th scope="col">No Identificación </th>
                <th scope="col">Rol</th>
                <th scope="col">Investigador de campo</th>
                <th scope="col">Coreo electrónico</th>
                <th scope="col">Institución </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="primer_nombre"
                      id="primer_nombre"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </th>

                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="segundo_nombre"
                      id="segundo_nombre"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="primer_apellido"
                      id="primer_apellido"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="segundo_apellido"
                      id="segundo_apellido"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="identificacion"
                      id="identificacion"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>Co-investigador</td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <select
                      className="form-control"
                      id="investigador_campo"
                      name="investigador_campo"
                      onChange={handleChange}
                      required
                    >
                      <option>Seleccione un valor</option>
                      <option value="si">si</option>
                      <option value="no">No</option>
                    </select>
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="email"
                      name="correo"
                      id="correo"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="institucion"
                      id="institucion"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <Button color="primary" type="button" onClick={store}>
                    Vincular
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
}
