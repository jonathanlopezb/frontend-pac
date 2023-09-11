import { useState } from "react";
import Apiclient, { TESTUPLOAD } from "../services/Apiclient";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

const initialValue = {
  archivo: null,
  archivoNombre: "",
  archivourl: "",
};

export default function test() {
  const [archivo, setArchivo] = useState({
    archivo: null,
    archivoNombre: "",
    archivourl: "",
  });

  const fileSelectHandler = (e) => {
    setArchivo({
      archivo: e.target.files[0],
      archivoNombre: e.target.files[0].name,
    });
  };

  const Enviar = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("files", archivo.archivo, archivo.archivoNombre);
    await axios.post("http://localhost:8880/api/upload", fd)

    console.log("resultado", archivo);
  };
  return (
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent"></CardHeader>
        <CardBody className="px-lg-5">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <Input
                  type="file"
                  className="searchText"
                  placeholder="Escribe tu email electrónico..."
                  autoComplete="on"
                  onChange={fileSelectHandler}
                  name="files"
                  required
                />
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={Enviar}
                >
                  Enviar
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
