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

import Apiclient, {
  ADDCOINVESTS,
  GETCOINVESTS,
  PROJECT,
} from "../../services/Apiclient";
import { getSession } from "../../services/sessionStore";

export default function CoInvest() {
  const [dataP, setDataP] = useState([]);
  const [dataU, setDataU] = useState([]);

  const getData = async () => {
    const user = await getSession();
    const response = await Apiclient.get(`${PROJECT}/${user.id}`);
    setDataP(response.data);
    console.log("respuesta", response.data);

    const result = await Apiclient.get(`${GETCOINVESTS}/${response.data?.id}`);
    setDataU(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Row className="mt-5">
      <Col className="mb-5 mb-xl-0" xl="12">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <div className="col">
                <h3 className="mb-0">
                  Investigadores vinculados a mi proyecto
                </h3>
              </div>
            </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Rol</th>
                <th scope="col">Investigador de campo</th>
                <th scope="col">Coreo electrónico</th>
              </tr>
              {/* <Button className="mt-4" color="secondary" type="button">
                Editar
              </Button>
              <Button className="mt-4" color="danger" type="button">
                Eliminar
              </Button> */}
            </thead>
            <tbody>
              {Array.isArray(dataU)
                ? dataU.map((dataU, index) => (
                    <tr key={index}>
                      <th scope="row">{dataU.primer_nombre} {dataU.segundo_nombre}</th>
                      <td key={dataU.id}>{dataU.segundo_nombre} {dataU.primer_apellido}</td>
                      <td key={dataU.id}>{dataU.cargo}</td>
                      <td key={dataU.id}>{dataU.investigador_campo}</td>
                      <td key={dataU.id}>{dataU.correo}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
}
