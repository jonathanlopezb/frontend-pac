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
  Col,
  CardBody,
  Form,
  FormGroup,
} from "reactstrap";
import Apiclient, { UPDATEUSER } from "../../services/Apiclient";

function UpdateProfile(props) {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});

  const [value, setValue] = useState({
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    fecha_nacimiento: "",
    tipo_documento: "",
    cedula: "",
    correo: "",
    password: "",
    nacionalidad: "",
    pais_residencia: "",
    ciudad: "",
    direccion: "",
    sexo: "",
    intereses: "",
    nivel_estudio: "",
    linea_investigacion: "",
    institucion: "",
    user_twitter: "",
    user_linkedin: "",
    rol: "",
  });

  const toggle = () => setModal(!modal);

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeV = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const update = async (e) => {
    e.preventDefault();
    let data = {
      primer_nombre: value.primer_nombre,
      segundo_nombre: value.segundo_nombre,
      primer_apellido: value.primer_apellido,
      segundo_apellido: value.segundo_apellido,
      fecha_nacimiento: value.fecha_nacimiento,
      tipo_documento: value.tipo_documento,
      cedula: value.cedula,
      correo: value.correo,
      password: value.password,
      nacionalidad: value.nacionalidad,
      pais_residencia: value.pais_residencia,
      ciudad: value.ciudad,
      direccion: value.direccion,
      sexo: value.sexo,
      intereses: value.intereses,
      nivel_estudio: value.nivel_estudio,
      linea_investigacion: value.linea_investigacion,
      institucion: value.institucion,
      user_twitter: value.user_twitter,
      user_linkedin: value.user_linkedin,
      rol: value.rol,
    };
    console.log(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div>
      <a style={{ cursor: "pointer" }} color="primary" onClick={toggle}>
        Actualizar perfil
      </a>
      <Modal isOpen={modal} fade={false} toggle={toggle} size="xl">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <div className="col">
                <h3 className="mb-0"> Actualizar datos</h3>
              </div>
            </Row>
          </CardHeader>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div>
                    <label htmlFor="upload-button">
                      {image.preview ? (
                        <img
                          className="rounded-circle"
                          src={image.preview}
                          alt="dummy"
                          width="300"
                          height="300"
                        />
                      ) : (
                        <>
                          <span
                            style={{ cursor: "pointer" }}
                            className="fa-stack fa-8x mt-3 mb-2"
                          >
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fas fa-plus fa-stack-1x fa-inverse" />
                          </span>
                          <h5 className="text-center">
                            Sube tu foto de perfil
                          </h5>
                        </>
                      )}
                    </label>

                    <div style={{ cursor: "pointer" }}>
                      <Input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </Col>
                <Col className="order-xl-1" xl="8">
                  <Card className="bg-secondary shadow">
                    <CardBody>
                      <Form>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Primer Nombre
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="primer_nombre"
                                  id="primer_nombre"
                                  type="text"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Segundo Nombre
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-username"
                                  type="text"
                                  name="segundo_nombre"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Primer Apellido
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  type="text"
                                  name="primer_apellido"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Segundo Apellido
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue={user.second_lastname}
                                  id="input-last-name"
                                  type="text"
                                  name="segundo_apellido"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>


                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Nivel de estudios
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue={user.nivel_estudio}
                                  id="input-last-name"
                                  type="text"
                                  name="nivel_estudio"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Correo electrónico
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  type="email"
                                  name="correo"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Correo electrónico alterno
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  type="email"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Lineas de investigación
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  type="text"
                                  name="s"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Intereses
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  type="text"
                                  name="intereses"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  ID LinkedIn
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  type="text"
                                  name="user_linkedin"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Usuario Twitter
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  type="text"
                                  name="user_twitter"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Información de contacto
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Dirección
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  type="text"
                                  name="direccion"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Ciudad
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-city"
                                  type="text"
                                  name="ciudad"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  País
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-country"
                                  type="text"
                                  name="pais_residencia"
                                  onChange={handleChangeV}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <ModalFooter>
                <Button color="primary" type="button" onClick={update}>
                  Guardar
                </Button>
                <Button color="danger" onClick={toggle}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Card>
          </Col>
        </Card>
      </Modal>
    </div>
  );
}

export default UpdateProfile;
