import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  Row,
  Table,
  InputGroup,
  Input,
} from "reactstrap";

function ModalPublicOther(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Registrar otra Publicación
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} size="xl">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <div className="col">
                <h3 className="mb-0"> Agregar publicación</h3>
              </div>
            </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
              <th scope="col">Titulo</th>
                <th scope="col">Año</th>
                <th scope="col">Nombre del medio</th>
                <th scope="col">Enlace a la publicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="text"
                      name="apellidos"
                      id="nationality"
                      // onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </th>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="institucion"
                      name="institucion"
                      id="nationality"
                      // onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      type="institucion"
                      name="institucion"
                      id="nationality"
                      // onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup className="input-group-alternative mb-3">
                  <Input
                      type="institucion"
                      name="institucion"
                      id="nationality"
                      // onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </td>
              </tr>
            </tbody>
          </Table>
          <ModalFooter>
            <Button color="primary" type="button">
              Guardar
            </Button>
            <Button color="danger" onClick={toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Card>
      </Modal>
    </div>
  );
}

export default ModalPublicOther;
